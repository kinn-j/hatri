const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'additional-recipes.js'), 'utf8');
const context = {};
vm.runInNewContext(`${source}; this.recipes = ADDITIONAL_RECIPES; this.photos = SWEET_PHOTOS;`, context);

test('additional sweet catalog has at least 50 complete unique recipes', () => {
  assert.ok(context.recipes.length >= 50);
  const names = context.recipes.map(recipe => recipe.name);
  assert.equal(new Set(names).size, names.length);
  for (const recipe of context.recipes) {
    assert.equal(recipe.course, 'Sweet');
    assert.ok(recipe.region && recipe.serves > 0);
    assert.ok(Array.isArray(recipe.pantry) && recipe.pantry.length >= 3);
    assert.ok(recipe.amounts?.en?.length >= 3);
    assert.ok(recipe.steps?.en?.length >= 2);
    const slug = recipe.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    assert.ok(context.photos[slug], `missing photo mapping for ${recipe.name}`);
    assert.ok(fs.existsSync(path.join(root, 'images', context.photos[slug])), `missing photo asset for ${recipe.name}`);
  }
});

test('additional sweets are wired into the application catalog', () => {
  const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.match(index, /<script src="\.\/additional-recipes\.js"><\/script>/);
  assert.match(index, /winter,desi,additional,northChaat\)\.forEach/);
  assert.match(index, /SWEET_PHOTOS\[slug\]/);
});
