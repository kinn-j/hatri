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

test('recipe thumbnails support enlarged, accessible images and a dish description', () => {
  const c = isolate('function recipeImage(', '(function loadPublishedPhotos(', {
    photoSrc: value => value,
    escapeHTML: value => String(value).replace(/&/g, '&amp;').replace(/'/g, '&#39;'),
    T: en => en
  });
  const thumbnail = c.recipeImage('images/egg-curry.webp', 'Egg Curry');
  assert.match(thumbnail, /data-dish-photo='Egg%20Curry'/);
  assert.match(thumbnail, /tabindex='0'/);
  assert.match(thumbnail, /aria-label='Enlarge photo of Egg Curry'/);

  const descriptions = isolate('function dishPhotoDescription(', 'function openDishPhoto(', {
    course: () => 'Main', nmx: x => ({eggs: 'Eggs', onion: 'Onion', curd: 'Curd'})[x] || x,
    T: en => en, isVegetarianDish: () => false
  });
  const info = descriptions.dishPhotoDescription(['Egg Curry', 0, 15, 25, 0, ['eggs', 'onion', 'curd'], 'North Indian']);
  assert.match(info.description, /North Indian-style main dish/);
  assert.match(info.description, /Eggs, Onion, Curd/);
  assert.match(info.meta, /Prep 15 min.*Cook 25 min.*non-vegetarian/);

  assert.match(html, /PHOTO_DIALOG\.showModal\(\)/);
  assert.match(html, /PHOTO_DIALOG\.close\(\)/);
  assert.match(html, /e\.preventDefault\(\);e\.stopImmediatePropagation\(\);openDishPhoto\(image\)/);
  assert.match(html, /e\.key!=="Enter"&&e\.key!==" "/);
  assert.match(html, /dish-photo-dialog::backdrop/);
});
