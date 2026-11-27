const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const start = html.indexOf('function tableMealIdentity(names){');
const end = html.indexOf('function cartDishKey(', start);
assert.ok(start >= 0 && end > start);

function setup() {
  const recipe = (name, ing) => [name, 1, 15, 20, 0, ing, 'Punjabi', 0, ['Daily'], ''];
  const dishes = [
    recipe('Dal Tadka', ['toor', 'onion', 'turmeric']),
    recipe('Chapati (Roti)', ['atta']),
    recipe('Jeera Rice', ['rice', 'cumin']),
    recipe('Cucumber Raita', ['curd', 'cucumber']),
    recipe('Gulab Jamun', ['mawa', 'sugar']),
    recipe('Aloo Jeera', ['potato', 'cumin']),
  ];
  const target = {innerHTML: ''}, badge = {textContent: ''};
  const ctx = vm.createContext({
    MEALS: dishes, tableSelections: [], have: {toor: 1, atta: 1},
    cart: {tomato: 2}, cartMeals: [{name:'Soup',ingredients:['tomato'],added:['tomato']}],
    IMG: {}, $: id => id === 'table-list' ? target : id === 'tbadge' ? badge : null,
    nmx: id => id, pslug: name => name, dn: name => name,
    emo: () => '🍲', recipeImage: () => '',
    escapeHTML: value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])),
    requiredCartIngredients: ingredients => ingredients.filter(id => !id.endsWith('?')),
    renderHTML: (el, markup) => {el.innerHTML = markup;},
    renderResults: () => {}, save: () => {}, toast: () => {},
  });
  vm.runInContext(html.slice(start, end), ctx);
  const meal = {key:dishes.map(d => d[0]).join(' + '),theme:'Punjabi',items:dishes.map(d => ({n:d[0]}))};
  return {ctx, dishes, meal, target, badge};
}

test('individual dish and six-dish meal can be selected separately with no duplicate entries or cart writes', () => {
  const {ctx, dishes, meal, target, badge} = setup();
  ctx.changeTableSelection({kind:'dish',name:dishes[0][0]});
  assert.equal(ctx.tableSelections.length, 1);
  assert.equal(ctx.tableHasDish('Dal Tadka'), true);
  assert.match(ctx.tableDishButton(dishes[0]), /aria-pressed='true'/);
  ctx.changeTableSelection({kind:'meal',names:meal.items.map(d => d.n),theme:meal.theme});
  assert.equal(ctx.tableSelections.length, 2);
  assert.equal(ctx.tableHasMeal(meal.items.map(d => d.n)), true);
  assert.match(ctx.tableMealButton(meal), /aria-pressed='true'/);
  assert.match(target.innerHTML, /6-dish meal/);
  assert.match(target.innerHTML, /Dal Tadka/);
  assert.match(target.innerHTML, /Jeera Rice/);
  assert.equal((target.innerHTML.match(/class='table-dish'/g) || []).length, 7);
  assert.equal(badge.textContent, '2');
  ctx.changeTableSelection({kind:'meal',names:meal.items.map(d => d.n),theme:meal.theme});
  assert.equal(ctx.tableSelections.length, 1);
  assert.equal(ctx.tableHasDish('Dal Tadka'), true);
  assert.equal(ctx.cart.tomato, 2);
  assert.equal(ctx.cartMeals.length, 1);
});

test('saved Table selections validate types and preserve distinct recipe identities', () => {
  const {ctx, dishes} = setup();
  const names = dishes.map(d => d[0]);
  const loaded = ctx.normalizeTableSelections([
    {kind:'meal',names,theme:'Punjabi'},
    {kind:'meal',names,theme:'Punjabi duplicate'},
    {kind:'dish',name:'Dal Tadka'},
    {kind:'dish',name:'Dal Tadka'},
    {kind:'meal',names:['Dal Tadka','Dal Tadka']},
    {kind:'dish',name:9},
    null,
  ]);
  assert.equal(loaded.length, 2);
  assert.equal(loaded[0].kind, 'meal');
  assert.equal(loaded[1].name, 'Dal Tadka');
  ctx.tableSelections = loaded;
  ctx.renderTable();
  assert.match(ctx.tableMealButton({items:dishes.map(d => ({n:d[0]})),key:'ignored'}), /On Table/);
});
