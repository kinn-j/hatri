const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const start = html.indexOf('function requiredCartIngredients(');
const end = html.indexOf('function cartItemRow(', start);
assert.ok(start >= 0 && end > start, 'cart functions are present');

function scenario(recipes, pantry = {}, cart = {}, groups = []) {
  const context = {
    MEALS: recipes.map(({name, ingredients, cuisine = 'Everyday', veg = 1}) =>
      [name, veg, 10, 5, 0, ingredients, cuisine]),
    have: pantry,
    cart,
    cartMeals: groups,
    tableSelections: [],
    matchesFilters: (recipe) => Boolean(recipe[1]),
    effP: () => 10,
    IMG: {},
    pslug: (name) => name,
    emo: () => '🍲',
    photoSrc: () => '',
    escapeHTML: (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;'),
    nmx: (id) => id,
    T: (english) => english,
    HI: {},
    all: () => {},
    renderCart: () => {},
    save: () => {},
  };
  vm.createContext(context);
  vm.runInContext(html.slice(start, end), context);
  return context;
}

test('shows only 1–2 ingredients absent from both pantry and cart', () => {
  const state = scenario([
    {name: 'One more', ingredients: ['rice', 'jaggery', 'fennel']},
    {name: 'Already covered', ingredients: ['rice', 'jaggery']},
    {name: 'Three more', ingredients: ['rice', 'carrot', 'ginger', 'lemon']},
    {name: 'Optional only', ingredients: ['rice', 'lemon?']},
    {name: 'Two more', ingredients: ['tofu', 'lemon']},
    {name: 'Non-veg', ingredients: ['egg'], veg: 0},
  ], {rice: 1}, {jaggery: 1});

  const dishes = state.cartDishes(6);
  assert.deepEqual(Array.from(dishes, (d) => d.name).sort(), ['One more', 'Two more']);
  assert.deepEqual(Array.from(dishes.find((d) => d.name === 'One more').ingredients), ['fennel']);
  assert.deepEqual(Array.from(dishes.find((d) => d.name === 'Two more').ingredients), ['tofu', 'lemon']);
  assert.equal(dishes.every((d) => d.missing >= 1 && d.missing <= 2), true);
});

test('removes a chosen dish immediately and replaces it with an eligible alternative', () => {
  const recipes = [
    {name: 'Carrot snack', ingredients: ['carrot', 'jaggery', 'fennel'], cuisine: 'North Indian'},
    {name: 'Dal rice', ingredients: ['rice', 'moong'], cuisine: 'Everyday'},
    {name: 'Sattu drink', ingredients: ['sattu', 'lemon'], cuisine: 'Drinks'},
    {name: 'Mango smoothie', ingredients: ['mango', 'milk'], cuisine: 'Drinks'},
  ];
  const state = scenario(recipes, {carrot: 1}, {jaggery: 1});
  const initial = state.cartDishes(3);
  assert.ok(initial.some((d) => d.name === 'Carrot snack'));
  const selected = state.trackCartDish('Carrot snack', recipes[0].ingredients);
  state.addCartIngredient('fennel', selected);

  const next = state.cartDishes(3);
  assert.equal(next.some((d) => d.name === 'Carrot snack'), false);
  assert.equal(next.length, 3);
  assert.ok(next.some((d) => !initial.some((old) => old.name === d.name)));
  assert.deepEqual(Array.from(selected.added), ['fennel']);
});

test('adding only one ingredient moves a partially selected dish to the cart group', () => {
  const recipes = [{name: 'Two missing', ingredients: ['rice', 'ginger', 'fennel']}];
  const state = scenario(recipes, {rice: 1});
  assert.equal(state.cartDishes(2).length, 1);
  const group = state.trackCartDish('Two missing', recipes[0].ingredients);
  state.addCartIngredient('ginger', group);
  assert.equal(state.cartDishes(2).length, 0);
  assert.equal(group.ingredients.filter((id) => !state.have[id] && !state.cartQuantity(id)).join(), 'fennel');
});

test('spreads suggestions across cuisines and different outstanding ingredients', () => {
  const recipes = [
    {name: 'North one', ingredients: ['rice', 'fennel'], cuisine: 'North'},
    {name: 'North two', ingredients: ['rice', 'fennel'], cuisine: 'North'},
    {name: 'South one', ingredients: ['rice', 'lemon'], cuisine: 'South'},
    {name: 'West one', ingredients: ['rice', 'jaggery'], cuisine: 'West'},
    {name: 'East one', ingredients: ['rice', 'sattu'], cuisine: 'East'},
  ];
  const state = scenario(recipes, {rice: 1});
  const dishes = state.cartDishes(4);
  assert.equal(new Set(dishes.map((dish) => dish.cuisine)).size, 4);
  assert.equal(new Set(dishes.map((dish) => dish.ingredients.join(','))).size, 4);
});

test('the suggested card lists only pending ingredients and mobile CSS has two columns', () => {
  const state = scenario([{name: 'Carrot snack', ingredients: ['carrot', 'fennel', 'jaggery']}], {carrot: 1}, {jaggery: 1});
  const markup = state.cartDishCard(state.cartDishes(1)[0]);
  assert.match(markup, /data-table-dish=/);
  assert.match(markup, /fennel/);
  assert.doesNotMatch(markup, /<span>carrot<\/span>|<span>jaggery<\/span>/);
  assert.match(markup, /1 more ingredient/);
  assert.match(html, /\.cart-dishes\s*\{[^}]*grid-template-columns:\s*repeat\(2,minmax\(0,1fr\)\)/);
});
