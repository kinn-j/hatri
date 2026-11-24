const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const cartStart = html.indexOf('function requiredCartIngredients(ingredients){');
const cartEnd = html.indexOf('Object.assign(STEPS,{"Gulab Jamun":', cartStart);
const clickStart = html.indexOf('document.addEventListener("click",function(e){\n  var t=e.target.closest("button")');
const clickEnd = html.indexOf('$("q").addEventListener("input",renderIngs);', clickStart);
assert.ok(cartStart >= 0 && cartEnd > cartStart && clickStart >= 0 && clickEnd > clickStart);

function setup() {
  const elements = Object.fromEntries(['cart', 'cartCount', 'cbadge'].map(id => [id, { textContent: '', innerHTML: '' }]));
  const listeners = {};
  const context = vm.createContext({
    MEALS: [
      ['Tomato Potato Bhaji', 1, 10, 10, 0, ['onion', 'tomato', 'potato', 'ginger?'], 'Everyday', 0, ['Daily'], ''],
      ['Vegetable Stir Fry', 1, 15, 10, 0, ['carrot', 'peas', 'beans', 'garlic'], 'Everyday', 0, ['Daily'], ''],
      ['Simple Porridge', 1, 5, 5, 0, ['oats', 'milk'], 'Everyday', 0, ['Daily'], ''],
    ],
    have: { onion: 1 },
    cart: { tomato: 2 },
    cartMeals: [],
    nonveg: false,
    NV: [],
    IMG: {},
    HI: {},
    document: { addEventListener: (type, callback) => { listeners[type] = callback; } },
    $: id => elements[id],
    T: english => english,
    nmx: id => id,
    escapeHTML: value => String(value).replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char])),
    ingredientPhotoUrl: () => '',
    icoOf: () => '🥔',
    emo: () => '🥘',
    pslug: name => name,
    photoSrc: url => url,
    effP: recipe => recipe[2],
    matchesFilters: () => true,
    renderHTML: (element, content) => { element.innerHTML = content; },
    save: () => {},
  });
  context.all = () => context.renderCart();
  vm.runInContext(html.slice(cartStart, cartEnd), context);
  vm.runInContext(html.slice(clickStart, clickEnd), context);
  function click(dataset, options = {}) {
    const button = {
      dataset,
      closest(selector) {
        if (selector === '.cart-dish-card' && options.recipeIndex !== undefined)
          return { dataset: { cartRecipe: String(options.recipeIndex) } };
        if (selector === '[data-recipe]' && options.recipeIndex !== undefined)
          return { dataset: { recipe: encodeURIComponent(context.MEALS[options.recipeIndex][0]) } };
        return null;
      },
    };
    listeners.click({ target: { closest: selector => selector === 'button' ? button : null } });
  }
  return { context, elements, click };
}

test('the cart groups chosen dishes by name and shows only required non-pantry ingredients', () => {
  const { context, elements, click } = setup();
  click({ cartAddDish: '0' });
  assert.equal(context.cartMeals.length, 1);
  assert.match(elements.cart.innerHTML, /Dishes in your cart/);
  assert.match(elements.cart.innerHTML, /Tomato Potato Bhaji/);
  const section = elements.cart.innerHTML.split('</article>')[0];
  assert.match(section, /tomato/);
  assert.match(section, /potato/);
  assert.doesNotMatch(section, /onion|ginger/);
  assert.match(section, /2 of 2 ingredients in cart/);
  assert.equal(elements.cartCount.textContent, '· 3 items');
});

test('previously saved ingredient-only lists remain visible as other shopping items', () => {
  const { context, elements } = setup();
  context.renderCart();
  assert.match(elements.cart.innerHTML, /Other shopping items/);
  assert.match(elements.cart.innerHTML, /data-cart-item='tomato'/);
  assert.match(elements.cart.innerHTML, /<output[^>]*>2<\/output>/);
  assert.doesNotMatch(elements.cart.innerHTML, /Dishes in your cart/);
});

test('suggestions reuse cart ingredients and show only 1–2 outstanding ingredients', () => {
  const { context, elements } = setup();
  context.renderCart();
  const suggestions = elements.cart.innerHTML.slice(elements.cart.innerHTML.indexOf("<section class='cart-suggestion'"));
  assert.match(suggestions, /Tomato Potato Bhaji/);
  assert.match(suggestions, /<span>potato<\/span>/);
  assert.doesNotMatch(suggestions, /<span>tomato<\/span>|<span>onion<\/span>|<span>ginger<\/span>/);
  assert.doesNotMatch(suggestions, /Vegetable Stir Fry/);
  assert.match(suggestions, /Simple Porridge/);
  assert.match(suggestions, /1 more ingredient/);
});

test('adding an entire suggested dish creates a group without duplicating existing quantities', () => {
  const { context, elements, click } = setup();
  click({ cartAddDish: '1' });
  assert.deepEqual(Array.from(context.cartMeals[0].ingredients), ['carrot', 'peas', 'beans', 'garlic']);
  assert.equal(context.cart.tomato, 2);
  assert.equal(context.cart.carrot, 1);
  assert.equal(context.cart.beans, 1);
  assert.equal(context.cart.onion, undefined);
  assert.match(elements.cart.innerHTML, /Vegetable Stir Fry/);
  const suggestions = elements.cart.innerHTML.slice(elements.cart.innerHTML.indexOf("<section class='cart-suggestion'"));
  assert.doesNotMatch(suggestions, /Vegetable Stir Fry/);
  click({ cartAddDish: '1' });
  assert.equal(context.cart.carrot, 1);
  assert.equal(context.cartMeals.length, 1);
});

test('individual suggestion additions form a dish group with remaining items available to add', () => {
  const { context, elements, click } = setup();
  click({ cartAddIngredient: 'carrot' }, { recipeIndex: 1 });
  assert.equal(context.cart.carrot, 1);
  assert.equal(context.cart.peas, undefined);
  assert.match(elements.cart.innerHTML, /1 of 4 ingredients in cart/);
  assert.match(elements.cart.innerHTML, /data-cart-add-listed='peas'/);
  click({ cartAddListed: 'peas', cartGroup: '0' });
  assert.equal(context.cart.peas, 1);
  assert.match(elements.cart.innerHTML, /2 of 4 ingredients in cart/);
});

test('adding one ingredient from a recipe also records that dish in the cart', () => {
  const { context, elements, click } = setup();
  click({ oi: 'potato' }, { recipeIndex: 0 });
  assert.equal(context.cart.potato, 1);
  assert.equal(context.cartMeals[0].name, 'Tomato Potato Bhaji');
  assert.match(elements.cart.innerHTML, /Dishes in your cart/);
});

test('removing a dish preserves manually added items and unrelated quantities', () => {
  const { context, elements, click } = setup();
  click({ cartAddDish: '0' });
  click({ cartRemoveDish: '0' });
  assert.equal(context.cart.potato, undefined);
  assert.equal(context.cart.tomato, 2);
  assert.equal(context.cartMeals.length, 0);
  assert.match(elements.cart.innerHTML, /Other shopping items/);
});

test('shared dish ingredients are bought once and retained while another dish needs them', () => {
  const { context, elements, click } = setup();
  context.cart = {};
  context.MEALS[1][5] = ['potato', 'carrot'];
  click({ cartAddDish: '0' });
  click({ cartAddDish: '1' });
  assert.equal(context.cart.potato, 1);
  assert.match(elements.cart.innerHTML, /Shared between dishes/);
  click({ cartRemoveDish: '0' });
  assert.equal(context.cart.potato, 1);
  assert.equal(context.cart.carrot, 1);
  click({ cartRemoveDish: '0' });
  assert.equal(context.cart.potato, undefined);
  assert.equal(context.cart.carrot, undefined);
});

test('pantry changes hide owned ingredients and selected dishes with nothing left to buy', () => {
  const { context, elements, click } = setup();
  click({ cartAddDish: '0' });
  context.have.tomato = 1;
  context.renderCart();
  assert.doesNotMatch(elements.cart.innerHTML, /data-cart-item='tomato'/);
  assert.match(elements.cart.innerHTML, /1 of 1 ingredients in cart/);
  context.have.potato = 1;
  context.renderCart();
  assert.doesNotMatch(elements.cart.innerHTML, /cart-group/);
});

test('vegetarian, time, and regional filter matching remains authoritative for suggestions', () => {
  const { context, elements } = setup();
  context.matchesFilters = () => false;
  context.renderCart();
  assert.doesNotMatch(elements.cart.innerHTML, /cart-dish-card/);
});

test('vegetarian mode never shows non-vegetarian cart ingredients or selected dishes', () => {
  const { context, elements } = setup();
  context.NV = ['chicken'];
  context.MEALS.push(['Chicken Curry', 0, 10, 20, 0, ['chicken', 'onion'], 'Everyday', 0, ['Daily'], '']);
  context.cart.chicken = 1;
  context.cartMeals.push({ name: 'Chicken Curry', ingredients: ['chicken', 'onion'], added: ['chicken'] });
  context.renderCart();
  assert.doesNotMatch(elements.cart.innerHTML, /Chicken Curry|data-cart-item='chicken'/);
});

test('an empty cart still suggests dishes requiring new ingredients', () => {
  const { context, elements } = setup();
  context.cart = {};
  context.renderCart();
  assert.match(elements.cart.innerHTML, /More dishes to shop for/);
  assert.match(elements.cart.innerHTML, /Add 2 items/);
});

test('dish grouping is included in local and cloud preference serialization', () => {
  assert.match(html, /JSON\.stringify\(\{have:have,cart:cart,cartMeals:cartMeals,/);
  assert.match(html, /function stateObj\(\)\{return \{have:have,cart:cart,cartMeals:cartMeals,/);
  assert.match(html, /function applyState\(o\)\{have=o\.have\|\|\{\};cart=o\.cart\|\|\{\};cartMeals=/);
});

test('inline scripts remain syntactically valid', () => {
  for (const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    if (match[1].trim()) new vm.Script(match[1]);
  }
});

test('selecting a fully supplied recipe or meal preserves another dish’s purchases', () => {
  const {context, click} = setup();
  context.cart = {milk: 3};
  context.have = {oats: 1};
  context.cartMeals = [{name: 'Breakfast', ingredients: ['milk'], added: ['milk']}];
  const ingredients = context.MEALS[2][5];
  assert.equal(context.cartDishComplete('Simple Porridge', ingredients, ['milk']), false);
  click({add: 'Simple Porridge'});
  assert.equal(context.cartDishComplete('Simple Porridge', ingredients, ['milk']), true);
  assert.deepEqual(Array.from(context.cartMeals[1].added), []);
  click({add: 'Simple Porridge'});
  context.MEALK = {combo: {key:'combo', miss:['milk'], items:[{ing:ingredients}]}};
  click({addm: 'combo'});
  click({addm: 'combo'});
  assert.equal(context.cartQuantity('milk'), 3);
  assert.deepEqual(Array.from(context.cartMeals, group => group.name), ['Breakfast']);
});
