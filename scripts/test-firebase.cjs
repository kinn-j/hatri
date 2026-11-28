const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const fromFunctions = require('node:module').createRequire(path.join(__dirname,'../functions/package.json'));
const {initializeApp} = fromFunctions('firebase-admin/app');
const {getFirestore, Timestamp} = fromFunctions('firebase-admin/firestore');
const {getStorage} = fromFunctions('firebase-admin/storage');

const project = process.env.GCLOUD_PROJECT;
assert.ok(project?.startsWith('demo-'), 'Run against a disposable Firebase demo project.');
const authHost = process.env.FIREBASE_AUTH_EMULATOR_HOST;
const firestoreHost = process.env.FIRESTORE_EMULATOR_HOST;
const storageHost = process.env.FIREBASE_STORAGE_EMULATOR_HOST;
for (const host of [authHost,firestoreHost,storageHost]) assert.match(host || '', /^127\.0\.0\.1:\d+$/);
const app = initializeApp({projectId:project,storageBucket:project+'.appspot.com'});
const db = getFirestore(app), bucket = getStorage(app).bucket();
const docs = 'http://'+firestoreHost+'/v1/projects/'+project+'/databases/(default)/documents';
let count = 0;

async function request(url, expected, data, token) {
  const headers = new Headers();
  if (data) headers.set('Content-Type','application/json');
  if (token) headers.set('Authorization','Bearer '+token);
  const response = await fetch(url,{headers,method:data?'POST':'GET',
    body:data?JSON.stringify(data):undefined,signal:AbortSignal.timeout(35_000)});
  const json = await response.json();
  assert.equal(response.status,expected,json.error?.message || response.url);
  count++;
  return json;
}

async function main() {
  const signup = email => request('http://'+authHost+'/identitytoolkit.googleapis.com/v1/accounts:signUp?key=demo',
    200,{email:email+'@example.test',password:'Disposable-fixture-2026',returnSecureToken:true});
  const owner = await signup('cook-one'), guest = await signup('cook-two');
  const call = (name,data,token,status=200) => request('http://127.0.0.1:5001/'+project+'/us-central1/'+name,status,{data},token);
  const ref = db.collection('publicRecipeVideos').doc();
  const old = db.collection('publicRecipeVideos').doc();
  await old.set({status:'published',ownerUid:owner.localId,videoUrl:'https://example.test/video'});
  await request(docs+'/'+old.path,403);
  const draft = db.collection('reelDrafts').doc(ref.id);
  const file = await fs.readFile(path.join(__dirname,'../tests/fixtures/test-reel.webm'));
  await draft.set({ownerUid:owner.localId,status:'uploading',title:'Audit recipe',recipeName:'Aloo Paratha',caption:'Test clip',
    credit:'',subtitles:'',subtitleLanguage:'en',contentType:'video/webm',sizeBytes:file.length,
    validUntil:Timestamp.fromMillis(Date.now()+120_000)});
  await bucket.file('incoming-reels/'+ref.id).save(file,{contentType:'video/webm'});
  await request(docs+'/'+draft.path,403);
  await request(docs+'/'+draft.path,403,undefined,guest.idToken);
  await request(docs+'/'+draft.path,200,undefined,owner.idToken);
  const media = 'http://'+storageHost+'/v0/b/'+bucket.name+'/o/'+encodeURIComponent('incoming-reels/'+ref.id);
  await request(media,403);
  await call('publishReel',{id:ref.id},guest.idToken,403);
  await call('publishReel',{id:ref.id},owner.idToken);
  const publicRecord = await request(docs+'/'+ref.path,200);
  assert.equal(publicRecord.fields.title.stringValue,'Audit recipe');
  assert.equal(publicRecord.fields.recipeName.stringValue,'Aloo Paratha');
  assert.ok(!Object.hasOwn(publicRecord.fields,'ownerUid') && !Object.hasOwn(publicRecord.fields,'videoUrl'));
  const feed = await request(docs+':runQuery',200,{structuredQuery:{
    from:[{collectionId:'publicRecipeVideos'}],
    where:{compositeFilter:{op:'AND',filters:[
      {fieldFilter:{field:{fieldPath:'version'},op:'EQUAL',value:{integerValue:'2'}}},
      {fieldFilter:{field:{fieldPath:'status'},op:'EQUAL',value:{stringValue:'published'}}}
    ]}},
    orderBy:[{field:{fieldPath:'publishedAt'},direction:'DESCENDING'}],limit:30
  }});
  assert.deepEqual(feed.filter(item=>item.document).map(item=>item.document.fields.title.stringValue),['Audit recipe']);
  await call('reportReel',{id:ref.id,reason:'privacy'},guest.idToken);
  await call('manageReel',{id:ref.id,action:'delete'},guest.idToken,403);
  await call('manageReel',{id:ref.id,action:'edit',title:'Updated recipe',recipeName:'Gajar Halwa',caption:'Test clip',credit:''},owner.idToken);
  const updated = await request(docs+'/'+ref.path,200);
  assert.equal(updated.fields.title.stringValue,'Updated recipe');
  assert.equal(updated.fields.recipeName.stringValue,'Gajar Halwa');
  await call('manageReel',{id:ref.id,action:'delete'},owner.idToken);
  await request(docs+'/'+ref.path,403);

  const cancel = db.collection('reelDrafts').doc();
  await cancel.set({ownerUid:owner.localId,status:'uploading',validUntil:Timestamp.fromMillis(Date.now()+120_000)});
  await call('cancelReel',{id:cancel.id},owner.idToken);
  await call('publishReel',{id:cancel.id},owner.idToken,400);
  const activity = {clientId:'00000000-0000-4000-8000-000000000000',sessionId:'10000000-0000-4000-8000-000000000000',
    sequence:1,event:'page_view',detail:'',surface:'recipes'};
  const user = db.collection('users').doc(owner.localId);
  const events = user.collection('activityEvents');
  await call('recordActivity',activity,owner.idToken);
  assert.equal((await events.get()).size,0);
  await user.collection('activityConsent').doc(activity.clientId).set({enabled:true,updatedAt:Timestamp.now()});
  await call('recordActivity',activity,owner.idToken);
  await call('recordActivity',activity,owner.idToken);
  assert.equal((await events.get()).size,1);
  console.log('Passed',count,'Firebase emulator requests and their application assertions.');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
