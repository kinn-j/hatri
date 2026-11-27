const fs = require('node:fs');
const path = require('node:path');
const {createHash} = require('node:crypto');
const {buildSync} = require('esbuild');

const root = path.resolve(__dirname,'..');
const output = path.resolve(process.argv[2] || path.join(root,'dist'));
if (fs.existsSync(output) && fs.readdirSync(output).length) throw Error('Select an empty output directory.');
fs.mkdirSync(output,{recursive:true});

const read = name => fs.readFileSync(path.join(root,name),'utf8').replace(/\r\n?/g,'\n');
const write = (name,content) => fs.writeFileSync(path.join(output,name),content);
let html = read('index.html');
const hashes = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).filter(Boolean)
  .map(body => "'sha256-" + createHash('sha256').update(body).digest('base64') + "'");
const policy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "script-src 'self' https://apis.google.com https://www.google.com/recaptcha/ https://www.gstatic.com " + hashes.join(' '),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.googleusercontent.com https://huggingface.co https://*.huggingface.co https://*.hf.co",
  "media-src 'self' blob: https://storage.googleapis.com",
  "frame-src https://*.firebaseapp.com https://accounts.google.com https://www.google.com/recaptcha/ https://recaptcha.google.com",
  "connect-src 'self' https://*.googleapis.com https://*.firebaseapp.com https://*.cloudfunctions.net https://*.run.app https://www.google.com/recaptcha/ https://www.gstatic.com https://huggingface.co http://localhost:9099 http://localhost:8080 http://localhost:5001 http://127.0.0.1:9099 http://127.0.0.1:8080 http://127.0.0.1:5001",
  "form-action 'self' https://storage.googleapis.com"
].join('; ');
const siteKey = process.env.HATRI_APP_CHECK_SITE_KEY;
if (siteKey && !/^[A-Za-z0-9_-]{12,160}$/.test(siteKey)) throw Error('Invalid App Check site key.');
html = html.replace('<head>', '<head>\n<meta http-equiv="Content-Security-Policy" content="' + policy + '">' +
  (siteKey ? '\n<meta name="hatri-app-check" content="' + siteKey + '">' : ''));
write('index.html',html);

const modules = ['activity.js','auth.js','hero-carousel.js','recipe-reels.js','preferences.js',
  ...[...html.matchAll(/<script src="\.\/([a-z-]+\.js)"/g)].map(match => match[1])];
for (const name of new Set(modules)) {
  write(name,read(name).replace(/https:\/\/www\.gstatic\.com\/firebasejs\/13\.4\.0\/firebase-[a-z-]+\.js/g,'./firebase-sdk.js'));
}
buildSync({
  stdin:{contents:[
    "export {initializeApp,getApp} from 'firebase/app';",
    "export {getAuth,browserLocalPersistence,setPersistence,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,signOut,connectAuthEmulator} from 'firebase/auth';",
    "export {getFirestore,doc,getDoc,setDoc,runTransaction,serverTimestamp,connectFirestoreEmulator,collection,limit,onSnapshot,orderBy,query,where} from 'firebase/firestore';",
    "export {getFunctions,connectFunctionsEmulator,httpsCallable} from 'firebase/functions';",
    "export {initializeAppCheck,ReCaptchaEnterpriseProvider} from 'firebase/app-check';"
  ].join('\n'),resolveDir:root},
  absWorkingDir:root,platform:'browser',format:'esm',target:['es2022'],bundle:true,minify:true,
  outfile:path.join(output,'firebase-sdk.js')
});
write('sw.js',read('sw.js').replace("'./auth.js',","'./auth.js', './firebase-sdk.js',")
  .replace("url.pathname.endsWith('/preferences.js')","url.pathname.endsWith('/preferences.js') || url.pathname.endsWith('/firebase-sdk.js')"));
write('manifest.webmanifest',read('manifest.webmanifest'));
write('.nojekyll','');
for (const directory of ['images','icons']) {
  for (const name of fs.readdirSync(path.join(root,directory))) {
    if (!/\.(?:webp|png|avif|jpe?g|ico)$/i.test(name) && !(directory === 'images' && name === 'photos.json')) continue;
    fs.mkdirSync(path.join(output,directory),{recursive:true});
    fs.copyFileSync(path.join(root,directory,name),path.join(output,directory,name));
  }
}
console.log('Hatri site staged at',output);
