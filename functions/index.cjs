const {initializeApp} = require('firebase-admin/app');
const {getFirestore, Timestamp, FieldValue} = require('firebase-admin/firestore');
const {getStorage} = require('firebase-admin/storage');
const {onCall, HttpsError} = require('firebase-functions/v2/https');
const {onDocumentDeleted} = require('firebase-functions/v2/firestore');
const {MAX_BYTES, REEL_ID, reelText, reelRecipe, reelDraft, matchesVideoHeader} = require('./reel-data.cjs');

initializeApp();
const db = getFirestore();
const bucket = () => getStorage().bucket();
function callable(handler) {
  return onCall({maxInstances:10},request => {
    if (process.env.HATRI_REQUIRE_APP_CHECK === 'true' && !request.app) {
      throw new HttpsError('unauthenticated','This request needs a valid app verification token.');
    }
    return handler(request);
  });
}
const drafts = db.collection('reelDrafts');
const posts = db.collection('publicRecipeVideos');
const minute = 60_000;
const day = 24 * 60 * minute;
const time = ms => Timestamp.fromMillis(ms);
const incoming = id => bucket().file('incoming-reels/' + id);
const outgoing = id => bucket().file('published-reels/' + id);

function user(request) {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Sign in to continue.');
  return request.auth.uid;
}

function reelId(request) {
  const id = request.data?.id;
  if (typeof id !== 'string' || !REEL_ID.test(id)) throw new HttpsError('invalid-argument', 'Invalid video.');
  return id;
}

function owner(record, uid) {
  if (record?.ownerUid !== uid) throw new HttpsError('permission-denied', 'This video belongs to another cook.');
}

function validated(read, input) {
  try { return read(input); }
  catch (error) { throw new HttpsError('invalid-argument', error.message); }
}

async function clean(file) {
  await file.delete({ignoreNotFound:true}).catch(error => {
    console.warn('Reel media cleanup pending', error.code);
  });
}

exports.startReel = callable(async request => {
  const uid = user(request);
  const draft = validated(reelDraft, request.data);
  const ref = drafts.doc();
  const quota = db.collection('reelUploadLimits').doc(uid);
  const now = Date.now(), expires = now + 15 * minute;
  await db.runTransaction(async transaction => {
    const prior = (await transaction.get(quota)).data();
    const sameDay = prior?.date === Math.floor(now / day);
    const count = sameDay ? prior.count : 0;
    if (count >= 5 || (prior?.lastUpload?.toMillis() || 0) > now - 30_000) {
      throw new HttpsError('resource-exhausted', 'Please wait between uploads. Each account can start five uploads per day.');
    }
    transaction.set(quota,{date:Math.floor(now / day),count:count+1,lastUpload:time(now),expiresAt:time(now+2*day)});
    transaction.create(ref,{...draft,ownerUid:uid,status:'uploading',validUntil:time(expires),expiresAt:time(now+day)});
  });
  // The signed policy only permits this staging object, content type and size.
  const [policy] = await incoming(ref.id).generateSignedPostPolicyV4({
    expires,
    fields:{'Content-Type':draft.contentType},
    conditions:[['content-length-range', 1, MAX_BYTES]]
  });
  return {id:ref.id, policy};
});

exports.cancelReel = callable(async request => {
  const uid = user(request), id = reelId(request), ref = drafts.doc(id);
  await db.runTransaction(async transaction => {
    const draft = (await transaction.get(ref)).data();
    owner(draft,uid);
    if (draft.status === 'published') throw new HttpsError('failed-precondition', 'The video has already been published.');
    transaction.update(ref,{status:'cancelled'});
  });
  await Promise.all([clean(incoming(id)), clean(outgoing(id))]);
});

exports.publishReel = callable(async request => {
  const uid = user(request), id = reelId(request), ref = drafts.doc(id);
  const draft = (await ref.get()).data();
  owner(draft,uid);
  if (draft.status === 'published') return {id};
  if (draft.status !== 'uploading' || draft.validUntil.toMillis() < Date.now()) {
    throw new HttpsError('failed-precondition','This upload has expired or was cancelled.');
  }
  const file = incoming(id);
  const [metadata] = await file.getMetadata();
  const staged = bucket().file(file.name,{generation:metadata.generation});
  const [header] = await staged.download({start:0,end:4095});
  if (Number(metadata.size) !== draft.sizeBytes || metadata.contentType !== draft.contentType ||
      !matchesVideoHeader(header,draft.contentType)) {
    await clean(staged);
    throw new HttpsError('invalid-argument','The uploaded file does not match the selected video format.');
  }
  const final = outgoing(id);
  try {
    await staged.copy(final,{preconditionOpts:{ifGenerationMatch:0}});
  } catch (error) {
    if (Number(error.code) !== 412) throw error;
    const [existing] = await final.getMetadata();
    if (existing.crc32c !== metadata.crc32c) {
      throw new HttpsError('failed-precondition','This upload has changed. Start a new upload.');
    }
  }
  const didPublish = await db.runTransaction(async transaction => {
    const current = (await transaction.get(ref)).data();
    if (current?.status === 'published') return true;
    if (current?.status !== 'uploading' || current.validUntil.toMillis() < Date.now()) return false;
    const {title, recipeName, caption, credit, subtitles, subtitleLanguage} = current;
    transaction.create(posts.doc(id),{version:2,status:'published',publishedAt:FieldValue.serverTimestamp(),
      title,recipeName,caption,credit,subtitles,subtitleLanguage});
    transaction.update(ref,{status:'published',publishedAt:FieldValue.serverTimestamp(),expiresAt:FieldValue.delete()});
    return true;
  });
  if (!didPublish) {
    await clean(final);
    throw new HttpsError('failed-precondition','This upload has expired or was cancelled.');
  }
  await clean(staged);
  return {id};
});

exports.playReel = callable(async request => {
  const id = reelId(request);
  const [post,draft] = await db.getAll(posts.doc(id),drafts.doc(id));
  if (post.data()?.status !== 'published' || post.data()?.version !== 2 || draft.data()?.status !== 'published') {
    throw new HttpsError('not-found','This video is unavailable.');
  }
  const expires = Date.now() + 5 * minute;
  const [url] = await outgoing(id).getSignedUrl({action:'read',version:'v4',expires});
  return {url,expires,owner:request.auth?.uid === draft.data().ownerUid};
});

exports.manageReel = callable(async request => {
  const uid = user(request), id = reelId(request), ref = drafts.doc(id), post = posts.doc(id);
  const action = request.data.action;
  if (!['edit','delete','hide'].includes(action)) throw new HttpsError('invalid-argument','Invalid action.');
  const patch = action === 'edit' ? {...validated(reelText,request.data),...validated(reelRecipe,request.data)} : {status:action === 'hide' ? 'hidden' : 'removed'};
  await db.runTransaction(async transaction => {
    const [record, publicRecord] = await transaction.getAll(ref,post);
    if (action === 'hide') {
      if (request.auth.token.reelModerator !== true) throw new HttpsError('permission-denied','Moderator access is required.');
    } else owner(record.data(),uid);
    if (action === 'delete' && record.data()?.status === 'removed') return;
    if (!publicRecord.exists || (action === 'edit' && publicRecord.data().status !== 'published')) {
      throw new HttpsError('not-found','This video is unavailable.');
    }
    if (action === 'delete') {
      transaction.delete(post);
      transaction.set(ref,{ownerUid:uid,status:'removed',expiresAt:time(Date.now()+day)});
      return;
    }
    transaction.update(post,patch);
    transaction.update(ref,patch);
  });
  if (action !== 'edit') await clean(outgoing(id));
});

exports.reportReel = callable(async request => {
  const uid = user(request), id = reelId(request);
  const reason = request.data.reason;
  if (!['spam','harmful','privacy','copyright','other'].includes(reason)) throw new HttpsError('invalid-argument','Choose a reason.');
  await db.runTransaction(async transaction => {
    const report = db.collection('reelReports').doc(id).collection('reports').doc(uid);
    const [post, prior] = await transaction.getAll(posts.doc(id),report);
    if (post.data()?.status !== 'published') throw new HttpsError('not-found','This video is unavailable.');
    if (!prior.exists) transaction.create(report,{reason,createdAt:FieldValue.serverTimestamp()});
  });
});

exports.removeExpiredReelMedia = onDocumentDeleted({document:'reelDrafts/{id}',retry:true}, async event => {
  if (event.data?.data()?.status === 'published') return;
  await Promise.all([incoming(event.params.id),outgoing(event.params.id)].map(file=>file.delete({ignoreNotFound:true})));
});

const activitySurfaces = new Set(['recipes','pantry','plan','order','kitchen','winter','christmas']);
const activityEvents = new Set(['page_view','recipe_search','profile_open','filters_open','filters_apply',
  'category_select','pantry_browse','pantry_edit','cart_add','cart_edit','decide','mode_change']);
const uuid = /^[a-f0-9-]{36}$/;
exports.recordActivity = callable(async request => {
  const uid = user(request);
  const {sessionId,sequence,event,surface,detail,clientId} = request.data || {};
  if (typeof sessionId !== 'string' || !uuid.test(sessionId) || typeof clientId !== 'string' ||
      !uuid.test(clientId) || !Number.isInteger(sequence) || sequence < 1 || sequence > 150 ||
      !activitySurfaces.has(surface) || (event === 'recipe_open'
        ? typeof detail !== 'string' || !/^[a-z0-9-]{1,110}$/.test(detail)
        : !activityEvents.has(event) || detail !== '')) throw new HttpsError('invalid-argument','Invalid activity event.');
  const userRef = db.collection('users').doc(uid);
  const eventRef = userRef.collection('activityEvents').doc(sessionId + '-' + sequence);
  const consent = userRef.collection('activityConsent').doc(clientId);
  const quota = db.collection('activityLimits').doc(uid);
  const now = Date.now();
  await db.runTransaction(async transaction => {
    const [permission,limits,previous] = await transaction.getAll(consent,quota,eventRef);
    if (!permission.data()?.enabled || previous.exists) return;
    const prior = limits.data();
    const date = Math.floor(now/day), count = prior?.date === date ? prior.count : 0;
    if (count >= 500 || (prior?.lastEvent?.toMillis() || 0) > now - 150) return;
    transaction.set(quota,{date,count:count+1,lastEvent:time(now),expiresAt:time(now+2*day)});
    transaction.create(eventRef,{sessionId,sequence,event,surface,detail,
      createdAt:FieldValue.serverTimestamp(),expiresAt:time(now+90*day)});
  });
});
