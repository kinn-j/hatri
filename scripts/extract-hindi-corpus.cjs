/* Build a deterministic translation inventory from Hatri's authored English catalog.
 * Run: node scripts/extract-hindi-corpus.cjs /tmp/hatri-hindi-corpus.json
 * This does not change recipe identities, cooking instructions or the repository.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const titles = new Set(), ingredients = new Set(), amounts = new Set(), steps = new Set(), interfaceText = new Set();
const rows = Object.create(null);
function add(set, text) {
  if (typeof text === 'string' && text.trim() && /[a-z]/i.test(text) && !/^https?:\/\//.test(text)) set.add(text.trim());
}
function detail(name, value) {
  if (!name) return;
  add(titles, name);
  rows[name] ||= {amounts: [], steps: []};
  for (const field of ['amounts', 'steps']) {
    const values = value?.[field]?.en || [];
    if (values.length && !rows[name][field].length) rows[name][field] = values;
    for (const text of values) add(field === 'amounts' ? amounts : steps, text);
  }
}
function context(source, expression) {
  const globals = {};
  vm.runInNewContext(source + '\n;globalThis.__result = ' + expression, globals, {timeout: 10000});
  return globals.__result;
}
function initial(name, next) {
  const start = html.indexOf('var ' + name + '=');
  const end = html.indexOf(next, start);
  if (start < 0 || end < 0) throw Error('Cannot find source for ' + name);
  return context(html.slice(start, end), name);
}
function literalAfter(marker, opening = '{', closing = '}', from = 0) {
  const offset = html.indexOf(marker, from);
  if (offset < 0) throw Error('Cannot find ' + marker);
  let end = offset + marker.length, level = 1, quote = '', escaped = false;
  for (; end < html.length && level; end++) {
    const char = html[end];
    if (escaped) { escaped = false; continue; }
    if (char === '\\' && quote) { escaped = true; continue; }
    if (quote) { if (char === quote) quote = ''; continue; }
    if (char === '"' || char === "'" || char === '`') { quote = char; continue; }
    if (char === opening) level++;
    if (char === closing) level--;
  }
  if (level) throw Error('Unbalanced ' + marker);
  return context('var x=' + opening + html.slice(offset + marker.length, end) + ';', 'x');
}

const cats = initial('CATS', '\nvar NAME=');
for (const group of cats) { add(interfaceText, group[0]); for (const item of group[1]) add(ingredients, item[1]); }
const meals = initial('MEALS', '\nvar OPT=');
for (const item of meals) { add(titles, item[0]); add(interfaceText, item[6]); }
const detailCatalog = context(fs.readFileSync(path.join(root, 'recipe-details.js'), 'utf8'), 'HATRI_RECIPE_DETAILS');
for (const [name, value] of Object.entries(detailCatalog)) detail(name, value);

const sources = [
  ['quick-north-recipes.js', 'QUICK_NORTH_RECIPES'],
  ['street-food-recipes.js', 'STREET_FOOD_RECIPES'],
  ['north-chaat-recipes.js', 'NORTH_CHAAT_CATALOG'],
  ['no-cook-recipes.js', 'NO_COOK_RECIPES'],
  ['rajasthani-recipes.js', 'RAJASTHANI_RECIPES'],
  ['seasonal-recipes.js', 'SEASONAL_RECIPES'],
  ['international-recipes.js', 'INTERNATIONAL_RECIPES'],
  ['winter-recipes.js', 'WINTER_RECIPES'],
  ['desi-recipes.js', 'DESI_RECIPES'],
  ['additional-recipes.js', 'ADDITIONAL_RECIPES'],
];
for (const item of context(fs.readFileSync(path.join(root, 'no-cook-recipes.js'), 'utf8'), 'NO_COOK_PANTRY')) {
  add(ingredients, item[1]);
}
for (const [file, variable] of sources) {
  const list = context(fs.readFileSync(path.join(root, file), 'utf8'), variable);
  for (const item of list) {
    add(interfaceText, item.region);
    detail(item.name, item);
  }
}
const initialSteps = literalAfter('STEPS={');
for (const [name, method] of Object.entries(initialSteps)) detail(name, {steps: method});
const correctedSteps = literalAfter(',ST={');
for (const [name, method] of Object.entries(correctedSteps)) detail(name, {steps: method});
for (const match of html.matchAll(/Object\.assign\(STEPS,\{/g)) {
  for (const [name, method] of Object.entries(literalAfter('Object.assign(STEPS,{', '{', '}', match.index))) {
    detail(name, {steps: method});
  }
}
for (const match of html.matchAll(/STEPS\["([^"]+)"\]=\{/g)) {
  const name = match[1];
  detail(name, {steps: literalAfter('STEPS["' + name + '"]={')});
}
for (const [name, marker, stepIndex] of [
  ['Italian originals', 'var IT=[', 6], ['Italian extras', 'var IT2=[', 7],
  ['International extras', 'var IT3=[', 7], ['Festival extras', 'var IT4=[', 7],
  ['Drinks', 'var DR=[', 4], ['No cook', 'var NC=[', 7],
]) {
  const entries = literalAfter(marker, '[', ']');
  for (const row of entries) detail(row[0], {steps: {en: row[stepIndex] || []}});
}
const vratSource = fs.readFileSync(path.join(root, 'vrat-recipes.js'), 'utf8');
const vrat = context(vratSource, '({recipes:VRAT_RECIPES,existing:VRAT_EXISTING_METHODS})');
for (const row of vrat.recipes) detail(row[0], {steps: {en: row[8] || []}});
for (const [name, value] of Object.entries(vrat.existing)) detail(name, {steps: {en: value}});
const instagram = context(fs.readFileSync(path.join(root, 'instagram-recipes.js'), 'utf8'), 'INSTAGRAM_RECIPES');
for (const reel of instagram) if (reel.recipe) detail(reel.name, reel.recipe);
// Names/amounts/steps for the catalog are authoritative. Supplement basic UI text
// from markup without accidentally extracting JavaScript, CSS or image data.
const page = html.slice(html.indexOf('<body>')).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
for (const match of page.matchAll(/\b(?:aria-label|placeholder|title)="([^"]+)"/g)) add(interfaceText, match[1].replace(/&quot;/g, '"'));
for (const match of page.matchAll(/>([^<>]+)</g)) {
  const value = match[1].trim().replace(/&amp;/g, '&');
  if (value.length < 150 && !/[{}]|(?:^\.|;\s*$)/.test(value)) add(interfaceText, value);
}

const result = {
  generatedBy: 'scripts/extract-hindi-corpus.cjs',
  titles: [...titles].sort(), ingredients: [...ingredients].sort(),
  amounts: [...amounts].sort(), steps: [...steps].sort(), interfaceText: [...interfaceText].sort(),
  recipeRows: rows,
};
const output = process.argv[2];
if (!output) throw Error('Pass an output JSON path');
fs.writeFileSync(output, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(Object.fromEntries(['titles', 'ingredients', 'amounts', 'steps', 'interfaceText'].map(k => [k, result[k].length]))));
