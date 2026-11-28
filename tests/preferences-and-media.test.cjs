const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const {MAX_BYTES, reelDraft, reelRecipe, matchesVideoHeader} = require('../functions/reel-data.cjs');

const source = fs.readFileSync(path.join(__dirname, '../preferences.js'), 'utf8');
const {HatriPreferences: preferences} = vm.runInNewContext(source + '\nthis');
const plain = value => JSON.parse(JSON.stringify(value));

test('stale preference edits preserve other changes and apply removals by identity', () => {
  const first = {kind:'dish',name:'Dal Tadka'};
  const second = {kind:'dish',name:'Jeera Rice'};
  const base = {core:{cart:{rice:1},tableSelections:[first]}};
  const local = {core:{cart:{rice:2},tableSelections:[]}};
  const remote = {core:{cart:{rice:1,milk:1},tableSelections:[first,second]},filters:{t:{t2:1}}};
  assert.deepEqual(plain(preferences.merge(base,local,remote)),{
    core:{cart:{rice:2,milk:1},tableSelections:[second]},filters:{t:{t2:1}}
  });
});

test('the trusted upload metadata requires a title, format and positive bounded size', () => {
  const clip = {title:'Recipe',recipeName:'Aloo Paratha',contentType:'video/webm',sizeBytes:MAX_BYTES};
  assert.equal(reelDraft(clip).sizeBytes,MAX_BYTES);
  assert.equal(reelDraft(clip).recipeName,'Aloo Paratha');
  for (const invalid of [{sizeBytes:0},{sizeBytes:MAX_BYTES+1},{title:' '},{recipeName:' '},{recipeName:'<script>'},{contentType:'text/plain'},{subtitles:'invalid'}]) {
    assert.throws(() => reelDraft({...clip,...invalid}));
  }
  assert.deepEqual(reelRecipe({recipeName:'  Gajar Halwa  '}),{recipeName:'Gajar Halwa'});
  assert.equal(reelDraft({...clip,subtitles:'WEBVTT\n\n00:00.000 --> 00:01.000\nMix well.'}).subtitleLanguage,'en');
});

test('declared formats are checked against recognizable WebM, MP4 and MOV headers', () => {
  const mp4 = Buffer.from('000000146674797069736f6d000000006d703432','hex');
  const mov = Buffer.from('0000001466747970717420200000000071742020','hex');
  const webm = Buffer.from('1a45dfa39f4282847765626d00000000','hex');
  assert.equal(matchesVideoHeader(mp4,'video/mp4'),true);
  assert.equal(matchesVideoHeader(mov,'video/quicktime'),true);
  assert.equal(matchesVideoHeader(webm,'video/webm'),true);
  assert.equal(matchesVideoHeader(webm,'video/mp4'),false);
  assert.equal(matchesVideoHeader(Buffer.from('a file without a video header'),'video/webm'),false);
});
