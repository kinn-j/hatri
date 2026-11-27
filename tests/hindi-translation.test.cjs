/* Offline Hindi fallback and Google failure handling without a browser binary. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function translationHarness() {
  const listeners = new Map();
  const requests = [];
  const text = data => ({nodeType: 3, data, isConnected: true, parentElement: null});
  class Element {
    constructor(name, children = [], attributes = {}) {
      this.nodeType = 1;
      this.tagName = name.toUpperCase();
      this.childNodes = children;
      this.attrs = {...attributes};
      this.isConnected = true;
      for (const child of children) child.parentElement = this;
    }
    matches(selector) { return selector.includes(this.tagName.toLowerCase()) && this.tagName === 'STYLE'; }
    closest() { return this.tagName === 'STYLE' ? this : null; }
    hasAttribute(name) { return Object.hasOwn(this.attrs, name); }
    getAttribute(name) { return this.attrs[name] ?? null; }
    setAttribute(name, value) { this.attrs[name] = value; }
    getBoundingClientRect() { return {width: 90, height: 30, top: 10, left: 10, bottom: 40, right: 100}; }
  }
  const navText = text('Shopping list');
  const regionText = text('Pahadi');
  const dishText = text('Aloo Matar');
  const unknownText = text('A recipe method without local translation');
  const cssText = text('body { display: none; }');
  const nav = new Element('button', [navText], {'aria-label': 'Veg mode'});
  const body = new Element('body', [nav, new Element('p', [regionText]), new Element('p', [dishText]),
    new Element('p', [unknownText]), new Element('style', [cssText])]);
  const local = new Map();
  const document = {
    body, documentElement: body,
    querySelector: () => null,
    addEventListener: () => {},
  };
  const sandbox = {
    document, Element, Node: {TEXT_NODE: 3}, URL, URLSearchParams, AbortSignal,
    innerHeight: 840, innerWidth: 390, setTimeout, clearTimeout, console,
    requestAnimationFrame: callback => setTimeout(callback, 0),
    getComputedStyle: () => ({display: 'block'}),
    addEventListener: (type, callback) => listeners.set(type, callback),
    localStorage: {
      getItem: key => local.get(key) || null,
      setItem: (key, value) => local.set(key, value),
    },
    MutationObserver: class { observe() {} disconnect() {} },
    fetch: async url => { requests.push(url.toString()); throw Error('Google CAPTCHA'); },
  };
  sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(path.resolve(__dirname, '../hindi-catalog.js'), 'utf8'), sandbox);
  vm.runInNewContext(fs.readFileSync(path.resolve(__dirname, '../translation.js'), 'utf8'), sandbox);
  return {HatriTranslation: sandbox.HatriTranslation, nav, navText, regionText, dishText,
    unknownText, cssText, requests, listeners};
}

test('built-in Hindi UI, region, recipe names and accessibility work during a Google outage', async () => {
  const h = translationHarness();
  h.HatriTranslation.seedCatalog([['Aloo Matar']]);
  assert.equal(h.HatriTranslation.lookup('Gajar Halwa'), 'गाजर का हलवा');
  assert.equal(h.HatriTranslation.lookup('Aloo Matar'), 'आलू मटर');
  assert.match(h.HatriTranslation.lookup('Ingredients'), /सामग्री/);
  assert.match(h.HatriTranslation.lookup('Serves 4'), /4 लोगों/);
  assert.equal(h.HatriTranslation.lookup('Need Milk, Ghee, Sugar'), 'चाहिए: दूध, घी, चीनी');
  assert.equal(h.HatriTranslation.lookup('1 found · Your active filters apply'), '1 व्यंजन मिले · आपके चुने हुए फ़िल्टर लागू हैं');
  assert.equal(h.HatriTranslation.lookup('100 of 1096 dishes shown'), '1096 में से 100 व्यंजन दिखाए गए');
  assert.equal(h.HatriTranslation.lookup('Show 100 more dishes'), '100 और व्यंजन दिखाएँ');
  assert.equal(h.HatriTranslation.lookup('100 of 1096 dishes · more load as you scroll'), '1096 में से 100 व्यंजन · नीचे स्क्रॉल करने पर और दिखेंगे');
  assert.equal(h.HatriTranslation.lookup('1096 dishes · 100 shown'), '1096 व्यंजन · 100 दिखाए गए');
  assert.equal(h.HatriTranslation.lookup('Show all 996 remaining dishes'), 'बाकी सभी 996 व्यंजन दिखाएँ');
  assert.equal(h.HatriTranslation.lookup('Non-vegetarian'), 'मांसाहारी');
  assert.match(h.HatriTranslation.lookup('All catalog dishes in your current Veg/Hostel Mode. Time, region and occasion filters are paused.'), /\p{Script=Devanagari}/u);
  assert.equal(h.HatriTranslation.lookup('⏱ 65 min'), '⏱ 65 मिनट');
  assert.match(h.HatriTranslation.lookup('1 cup buckwheat groats'), /\p{Script=Devanagari}/u);
  assert.match(h.HatriTranslation.lookup('Wash, peel and grate 500 g carrots. Measure 500 ml full-fat milk, 2 tbsp ghee and 3–4 tbsp sugar (adjust to taste).'), /\p{Script=Devanagari}/u);
  h.HatriTranslation.setLanguage('hi');
  await new Promise(resolve => setTimeout(resolve, 160));
  assert.equal(h.navText.data, 'खरीदारी की सूची');
  assert.equal(h.nav.getAttribute('aria-label'), 'शाकाहारी मोड');
  assert.equal(h.regionText.data, 'पहाड़ी');
  assert.equal(h.dishText.data, 'आलू मटर');
  assert.equal(h.cssText.data, 'body { display: none; }');
  assert.equal(h.unknownText.data, 'A recipe method without local translation');
  assert.equal(h.requests.length, 1, 'network failures trigger a cooldown instead of a request storm');
  h.HatriTranslation.setLanguage('en');
  assert.equal(h.navText.data, 'Shopping list');
  assert.equal(h.nav.getAttribute('aria-label'), 'Veg mode');
  assert.equal(h.regionText.data, 'Pahadi');
  assert.equal(h.dishText.data, 'Aloo Matar');
});
