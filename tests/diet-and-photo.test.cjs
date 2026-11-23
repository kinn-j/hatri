const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
function isolate(start, end, globals = {}) {
  const from = html.indexOf(start), to = html.indexOf(end, from + start.length);
  assert.ok(from !== -1 && to > from, `${start} source exists`);
  const context = vm.createContext(globals);
  vm.runInContext(html.slice(from, to), context);
  return context;
}

test('Veg Mode excludes egg dishes even when the catalog marks them vegetarian', () => {
  const c = isolate('function isEggDish(', 'function renderModes(', {
    NV: ['eggs', 'chicken', 'fish', 'mutton', 'prawn', 'fishballs', 'chickenstock'],
    nonveg: false, hostel: false, hostOK: () => true
  });
  const recipe = (name, flag, ingredients) => [name, flag, 10, 20, 0, ingredients];
  for (const dish of [
    recipe('Mughlai Egg Curry', 1, ['eggs', 'curd']),
    recipe('Frittata', 1, ['tomato']),
    recipe('Omelette', 1, ['eggs?']),
    recipe('Egg Fried Rice', 1, ['rice', 'eggs']),
    recipe('Vegetable Soup', 1, ['chickenstock']),
    recipe('Panna Cotta', 1, ['gelatin?']),
  ]) {
    assert.equal(c.isVegetarianDish(dish), false, dish[0]);
    assert.equal(c.matchesModes(dish), false, dish[0]);
    c.nonveg = true;
    assert.equal(c.matchesModes(dish), true, `Veg Mode off: ${dish[0]}`);
    c.nonveg = false;
  }
  for (const name of ['Eggless Vanilla Cake', 'Egg-free Chocolate Brownie', 'Aloo Gobi']) {
    assert.equal(c.matchesModes(recipe(name, 1, ['atta', 'milk'])), true, name);
  }
  assert.match(html, /MEALS\.forEach\(function\(m\)\{if\(!isVegetarianDish\(m\)\)m\[1\]=0\}\)/);
  assert.match(html, /\["Mughlai Egg Curry", 1,/);
});

test('dish images leave activation to their enclosing recipe control', () => {
  const c = isolate('function recipeImage(', '(function loadPublishedPhotos(', {
    photoSrc: value => value,
    escapeHTML: value => String(value).replace(/&/g, '&amp;').replace(/'/g, '&#39;')
  });
  const thumbnail = c.recipeImage("images/chef's-curry.webp");
  assert.match(thumbnail, /src='images\/chef&#39;s-curry.webp'/);
  assert.match(thumbnail, /alt='' loading='lazy'/);
  assert.doesNotMatch(thumbnail, /role=|tabindex=/);
  assert.doesNotMatch(c.recipeImage('images/curry.webp', true), /loading='lazy'/);
});
