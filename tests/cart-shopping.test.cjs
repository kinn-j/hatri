const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const cartStart = html.indexOf('function toggleRecipeIngredients(ingredients){');
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
    ],
    have: { onion: 1 },
    cart: { tomato: 2 },
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
  const click = dataset => listeners.click({ target: { closest: selector => selector === 'button' ? { dataset } : null } });
  return { context, elements, click };
}

test('suggested dishes show required shopping ingredients, never pantry or optional ingredients', () => {
  const { context, elements } = setup();
  context.renderCart();
  const card = elements.cart.innerHTML.split('</article>')[0];
  assert.match(card, /tomato/);
  assert.match(card, /potato/);
  assert.doesNotMatch(card, /onion|ginger/);
  assert.match(card, /In cart/);
  assert.match(card, /Add 1 missing item to cart/);
  assert.equal(elements.cartCount.textContent, '· 2 items');
});

test('single ingredient Add action fills only the missing item without changing cart quantities', () => {
  const { context, elements, click } = setup();
  click({ cartAddIngredient: 'potato' });
  assert.equal(context.cart.potato, 1);
  assert.equal(context.cart.tomato, 2);
  assert.equal(context.cart.onion, undefined);
  assert.doesNotMatch(elements.cart.innerHTML, /data-cart-add-ingredient='potato'/);
  click({ cartAddIngredient: 'onion' });
  assert.equal(context.cart.onion, undefined);
});

test('Add missing to cart adds only mandatory unowned ingredients, without duplicates', () => {
  const { context, click } = setup();
  click({ cartAddDish: '0' });
  assert.equal(context.cart.potato, 1);
  assert.equal(context.cart.tomato, 2);
  assert.equal(context.cart.onion, undefined);
  assert.equal(context.cart.ginger, undefined);
  click({ cartAddDish: '0' });
  assert.equal(context.cart.potato, 1);
});

test('adding from a suggested dish uses that exact recipe when names repeat', () => {
  const { context, elements, click } = setup();
  context.MEALS.push(['Tomato Potato Bhaji', 1, 10, 10, 0, ['onion', 'carrot', 'yam'], 'Everyday', 0, ['Daily'], '']);
  context.cart = { carrot: 1 };
  context.renderCart();
  assert.match(elements.cart.innerHTML, /data-cart-add-dish='1'/);
  click({ cartAddDish: '1' });
  assert.equal(context.cart.yam, 1);
  assert.equal(context.cart.potato, undefined);
  assert.equal(context.cart.tomato, undefined);
});

test('an empty cart still suggests dishes with missing required ingredients', () => {
  const { context, elements, click } = setup();
  context.cart = {};
  context.renderCart();
  assert.match(elements.cart.innerHTML, /Suggested dishes/);
  assert.match(elements.cart.innerHTML, /Add 2 missing items to cart/);
  click({ cartAddDish: '0' });
  assert.equal(context.cart.tomato, 1);
  assert.equal(context.cart.potato, 1);
});

test('pantry changes remove ingredients from the visible cart and suggestions', () => {
  const { context, elements } = setup();
  context.have.tomato = 1;
  context.renderCart();
  assert.equal(elements.cartCount.textContent, '');
  assert.doesNotMatch(elements.cart.innerHTML, /data-cart-item='tomato'/);
  const card = elements.cart.innerHTML.split('</article>')[0];
  assert.doesNotMatch(card, /onion|tomato|ginger/);
  assert.match(card, /potato/);
  context.have.potato = 1;
  context.renderCart();
  assert.doesNotMatch(elements.cart.innerHTML, /cart-dish-card/);
});

test('cart suggestions continue to respect active recipe filters', () => {
  const { context, elements } = setup();
  context.matchesFilters = () => false;
  context.renderCart();
  assert.doesNotMatch(elements.cart.innerHTML, /cart-dish-card/);
});

test('inline scripts remain syntactically valid', () => {
  for (const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    if (match[1].trim()) new vm.Script(match[1]);
  }
});
