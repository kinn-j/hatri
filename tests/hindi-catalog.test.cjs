/* Ensure new Hatri recipes cannot ship without matching offline Hindi content. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
const legacy = fs.readFileSync(path.join(root, 'Raman_Rasoi_Google_Login_Configured/index.html'), 'utf8');
const context = {};
const script = fs.readFileSync(path.join(root, 'hindi-catalog.js'), 'utf8');
new vm.Script(script);
vm.runInNewContext(script, context);
vm.runInNewContext(fs.readFileSync(path.join(root, 'north-chaat-recipes.js'), 'utf8') +
  '\n;globalThis.NORTH_CHAAT_RECIPES=NORTH_CHAAT_RECIPES;globalThis.NORTH_CHAAT_PANTRY=NORTH_CHAAT_PANTRY;', context);
vm.runInNewContext(fs.readFileSync(path.join(root, 'north-chaat-hindi.js'), 'utf8'), context);
const pack = context.HATRI_HINDI_CATALOG;

test('Hindi recipe pack is available in both apps and the installed PWA', () => {
  assert.match(html, /<script src="\.\/hindi-catalog\.js"><\/script>/);
  assert.match(legacy, /import\(hindiCatalogUrl\.href\)/);
  assert.match(sw, /'\.\/hindi-catalog\.js'/);
  assert.match(sw, /'\.\/north-chaat-hindi\.js'/);
  assert.ok(pack && pack.titles && pack.steps && pack.amounts && pack.ingredients);
});

test('all authored recipe titles, amounts and methods have a packaged Hindi translation', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'hatri-hi-audit-'));
  const output = path.join(directory, 'corpus.json');
  try {
    execFileSync(process.execPath, [path.join(root, 'scripts/extract-hindi-corpus.cjs'), output], {cwd: root});
    const corpus = JSON.parse(fs.readFileSync(output, 'utf8'));
    const missing = {};
    for (const type of ['titles', 'ingredients', 'amounts', 'steps', 'interfaceText']) {
      missing[type] = corpus[type].filter(text => !pack[type]?.[text] || !/\p{Script=Devanagari}/u.test(pack[type][text]));
    }
    for (const [type, values] of Object.entries(missing)) {
      assert.deepEqual(values.slice(0, 15), [], `${type}: ${values.length} missing or non-Hindi translations (first 15)`);
    }
    assert.ok(corpus.titles.length >= 1000, 'all regional and international recipes were inventoried');
    assert.ok(corpus.steps.length >= 3000, 'all explicit cooking steps were inventoried');
    assert.equal(Object.values(corpus.recipeRows).filter(recipe => !recipe.steps.length || !recipe.amounts.length).length, 0,
      'every recipe has ingredient measurements and a method');
    const brokenRanges = [];
    const brokenMixedFractions = [];
    for (const type of ['amounts', 'steps']) for (const source of corpus[type]) {
      const hindi = pack[type][source];
      for (const [, low, high] of source.matchAll(/(?<!\w)(\d+(?:\.\d+)?)[–-](\d+(?:\.\d+)?)(?!\w)/g)) {
        if (![low, high].every(n => new RegExp(`(?<!\\d)${n.replace('.', '\\.')}(?!\\d)`).test(hindi)))
          brokenRanges.push(source);
      }
      if (/\d[¼½¾⅓⅔]/.test(source) && /(?<!\d)11\/(?:2|4)(?!\d)/.test(hindi))
        brokenMixedFractions.push(source);
    }
    assert.deepEqual(brokenRanges.slice(0, 10), [], `${brokenRanges.length} recipe ranges lost a numeric boundary`);
    assert.deepEqual(brokenMixedFractions.slice(0, 10), [], `${brokenMixedFractions.length} mixed fractions were misread`);
  } finally {
    fs.rmSync(directory, {recursive: true, force: true});
  }
});
