const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'no-cook-recipes.js'), 'utf8') +
  '\n;this.rows=NO_COOK_ROWS;this.recipes=NO_COOK_RECIPES;this.pantry=NO_COOK_PANTRY;', context);
const recipes = context.recipes;
const rows = context.rows;
const translated = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'no-cook-hindi.js'), 'utf8').split('(function()')[0] +
  '\n;this.rows=NO_COOK_HINDI_ROWS;', translated);
const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('70 distinct no-heat recipes from every Indian state and multiple Union Territories', () => {
  assert.equal(recipes.length, 70);
  assert.equal(new Set(recipes.map(recipe => recipe.name.toLowerCase())).size, 70);
  assert.ok(new Set(recipes.map(recipe => recipe.state)).size >= 34);
  assert.match(source, /regionalNoCook/);
  for (const recipe of recipes) {
    assert.equal(recipe.cook, 0, recipe.name);
    assert.equal(recipe.soak, 0, recipe.name);
    assert.deepEqual(Array.from(recipe.appliances), ['N'], recipe.name);
    assert.ok(recipe.pantry.length >= 3, recipe.name);
    assert.ok(['Snack', 'Side', 'Drink', 'Sweet'].includes(recipe.course), recipe.name);
    assert.ok(recipe.amounts.en[0].length >= 35, recipe.name);
    assert.ok(recipe.steps.en[0].length >= 80, recipe.name);
    assert.ok(fs.existsSync(path.join(root, 'images', recipe.photo)), recipe.name + ': photo missing');
  }
});

test('Hindi title, measured amounts, and directions are paired and packaged', () => {
  assert.match(source, /no-cook-hindi\.js/);
  assert.match(fs.readFileSync(path.join(root,'sw.js'),'utf8'), /'\.\/no-cook-recipes\.js'/);
  assert.match(fs.readFileSync(path.join(root,'sw.js'),'utf8'), /'\.\/no-cook-hindi\.js'/);
  assert.equal(translated.rows.length, recipes.length);
  for (let i=0; i<rows.length; i++) {
    for (const field of translated.rows[i]) assert.match(field, /\p{Script=Devanagari}/u, rows[i][0]);
    assert.match(translated.rows[i][1], /[0-9¼½¾⅓⅔]+/, rows[i][0]);
  }
});

test('fully cooked kidney beans have a distinct pantry ingredient and photo', () => {
  assert.ok(recipes.find(r => r.name === 'Jammu Rajma Cucumber Kachumber').pantry.includes('cookedrajma'));
  assert.equal(context.pantry.length, 1);
  assert.ok(fs.existsSync(path.join(root, context.pantry[0][2])));
});
