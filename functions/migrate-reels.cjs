const {initializeApp} = require('firebase-admin/app');
const {getFirestore, FieldValue} = require('firebase-admin/firestore');
const {getStorage} = require('firebase-admin/storage');
const {MAX_BYTES, REEL_ID, matchesVideoHeader, reelText} = require('./reel-data.cjs');

const [projectId,storageBucket,mode] = process.argv.slice(2);
if (!projectId || ![projectId+'.appspot.com',projectId+'.firebasestorage.app'].includes(storageBucket) ||
    (mode && mode !== '--apply')) throw Error('Usage: node migrate-reels.cjs PROJECT BUCKET [--apply]');
const apply = mode === '--apply';
const app = initializeApp({projectId,storageBucket});
const db = getFirestore(app), bucket = getStorage(app).bucket();

async function main() {
  const posts = db.collection('publicRecipeVideos');
  const legacy = (await posts.where('status','==','published').get()).docs.filter(doc=>doc.data().version!==2);
  const eligible = [];
  for (const post of legacy) {
    const old = post.data();
    if (!REEL_ID.test(post.id) || typeof old.ownerUid !== 'string' || !/^[A-Za-z0-9_-]{1,128}$/.test(old.ownerUid)) continue;
    const file = bucket.file('communityVideos/'+old.ownerUid+'/'+post.id);
    const [exists] = await file.exists();
    if (!exists) continue;
    const [meta] = await file.getMetadata();
    const size = Number(meta.size);
    if (!Number.isSafeInteger(size) || size < 16 || size > MAX_BYTES ||
        !['video/mp4','video/webm','video/quicktime'].includes(meta.contentType)) continue;
    const source = bucket.file(file.name,{generation:meta.generation});
    const [header] = await source.download({start:0,end:4095});
    if (!matchesVideoHeader(header,meta.contentType)) continue;
    eligible.push({post,old,source,meta});
  }
  console.log(eligible.length,'of',legacy.length,'legacy published posts have eligible bundled media.');
  if (!apply) return;
  for (const {post,old,source,meta} of eligible) {
    const dst = bucket.file('published-reels/'+post.id);
    try { await source.copy(dst,{preconditionOpts:{ifGenerationMatch:0}}); }
    catch (error) {
      if (Number(error.code)!==412 || (await dst.getMetadata())[0].crc32c!==meta.crc32c) throw error;
    }
    await dst.setMetadata({metadata:{firebaseStorageDownloadTokens:null}});
    const content = reelText({title:typeof old.title==='string' ? old.title.trim().slice(0,80) || 'Recipe video' : 'Recipe video',
      caption:typeof old.caption==='string' ? old.caption.slice(0,240) : '',credit:''});
    const created = old.createdAt?.toMillis?.();
    const publishedAt = Number.isFinite(created) && created > 0 && created <= Date.now()
      ? old.createdAt : FieldValue.serverTimestamp();
    const publicData = {...content,version:2,status:'published',publishedAt,subtitles:'',subtitleLanguage:'en'};
    const batch = db.batch();
    batch.set(post.ref,publicData);
    batch.set(db.collection('reelDrafts').doc(post.id),{...publicData,ownerUid:old.ownerUid,contentType:meta.contentType,sizeBytes:Number(meta.size)});
    await batch.commit();
  }
  let revoked = 0;
  for await (const file of bucket.getFilesStream({prefix:'communityVideos/'})) {
    const [meta] = await file.getMetadata();
    if (!meta.metadata?.firebaseStorageDownloadTokens) continue;
    await file.setMetadata({metadata:{firebaseStorageDownloadTokens:null}});
    revoked++;
  }
  console.log('Migrated',eligible.length,'posts and revoked',revoked,'legacy download tokens.');
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
