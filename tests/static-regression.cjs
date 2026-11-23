/* Static and isolated-function checks: run without a browser.
 * Run: node --test tests/static-regression.cjs
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const src = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const sw = fs.readFileSync(path.resolve(__dirname, '../sw.js'), 'utf8');

function fn(start, end, globals = {}) {
  const from = src.indexOf(start), to = src.indexOf(end, from + start.length);
  assert.ok(from >= 0 && to > from, `source range for ${start}`);
  const ctx = vm.createContext(globals);
  vm.runInContext(src.slice(from, to), ctx);
  return ctx;
}

test('every inline script parses', () => {
  let count = 0;
  for (const match of src.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    new vm.Script(match[1]); count++;
  }
  assert.ok(count >= 10);
});

test('Hindi translation skips CSS text and still translates visible text', () => {
  const c = fn('function trNode(', 'new MutationObserver(', {
    LANG: 'hi', trText: str => str.replaceAll('none', 'कोई नहीं').replaceAll('Kitchen', 'रसोई')
  });
  const style = { closest: selector => selector.includes('style') };
  const css = { nodeType: 3, nodeValue: 'display:none', parentElement: style };
  c.trNode(css);
  assert.equal(css.nodeValue, 'display:none');
  const parent = { closest: () => null };
  const text = { nodeType: 3, nodeValue: 'Kitchen', parentElement: parent };
  c.trNode(text); assert.equal(text.nodeValue, 'रसोई');
  c.LANG = 'en'; c.trNode(text); assert.equal(text.nodeValue, 'Kitchen');
});

test('meal pairing rules exclude incompatible sauces and cross-cuisine staples', () => {
  const c = fn('function pairOK(', 'function mealTime(', {
    course: n => /Roti|Chapati|Bread/.test(n) ? 'Bread' : /Sauce|Soup/.test(n) ? 'Side' : 'Main',
    onlyV: () => false,
    isV: () => false
  });
  const main = { n: 'Kurkuri Bhindi', cu: 'Rajasthani' };
  assert.equal(c.pairOK(main, {n: 'Pizza Sauce', cu: 'Italian'}), false);
  assert.equal(c.pairOK(main, {n: 'Italian Garlic Bread', cu: 'Italian'}), false);
  assert.equal(c.pairOK({n: 'Sarson da Saag', cu: 'Punjabi'}, {n: 'Makki di Roti', cu: 'Punjabi'}), true);
});

test('diet, search, pagination and clear-all code guards are present', () => {
  assert.match(src, /NV=\[[^\]]*"chickenstock"/);
  assert.match(src, /return matchesFilters\(m,false\);/);
  assert.match(src, /body\.classList\.toggle\("searching",!!rq\)/);
  assert.match(src, /group\[2\]\.slice\(0,limit\)/);
  assert.match(src, /L\.slice\(0,visible\)/);
  assert.match(src, /else if\(v==="#none"\)Object\.keys\(st\)/);
  assert.doesNotMatch(src, /if\(!anyOn\(st\)\)selAll\(k\)\}\}\}catch/);
});

test('vegetarian panna cotta guidance excludes animal gelatin', () => {
  const eggless = src.match(/\["Eggless Panna Cotta"[^\n]*/)?.[0] || '';
  const mango = src.match(/\["Mango Panna Cotta"[^\n]*/)?.[0] || '';
  for (const recipe of [eggless, mango]) {
    assert.ok(recipe.includes('agar-agar'));
    assert.ok(recipe.includes('never') || recipe.includes('not animal'));
    assert.ok(!recipe.includes('or gelatin'));
  }
});

test('Gajar Halwa has needed sugar and an explicit bilingual recipe', () => {
  assert.match(src, /\["Gajar Halwa",1,20,45,0,\["carrot","milk","ghee","sugar"/);
  assert.match(src, /STEPS\["Gajar Halwa"\]=\{"en":\[/);
  assert.match(src, /"hi":\["500 ग्राम गाजर/);
});

test('pantry image fallback and accurate grains category exist', () => {
  assert.match(src, /class='pantry-fallback'/);
  assert.match(src, /document\.addEventListener\("error",function\(e\)/);
  assert.match(src, /"Grains \/ Pulses":\[\]/);
  assert.match(src, /\.pantry-photo:focus-visible/);
});

test('PWA registers offline worker and caches the required shell files', () => {
  assert.match(src, /navigator\.serviceWorker\.register\("\.\/sw\.js"\)/);
  assert.match(sw, /const CACHE = 'hatri-v24-blinkit-shopping'/);
  for (const item of ['auth.js','ingredient-images.js','index.html','manifest.webmanifest','images/hatri-pantry-header.webp']) assert.ok(sw.includes(`'./${item}'`));
  new vm.Script(sw);
});

test('all mapped recipe photos and local ingredient photos exist', () => {
  const photos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../images/photos.json')));
  let count = 0;
  for (const image of Object.values(photos)) {
    if (typeof image !== 'string' || !image.includes('.webp')) continue;
    const candidate = path.resolve(__dirname, '../images', image);
    assert.ok(fs.existsSync(candidate), `Missing ${image}`);
    count++;
  }
  assert.ok(count > 500);
});
