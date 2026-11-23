/* Browser regression checks for the Hatri PWA, desktop and mobile viewports.
 * Run: node --test tests/regression.cjs
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
let server, browser, url;
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.webp': 'image/webp', '.png': 'image/png', '.ico': 'image/x-icon' };

test.before(async () => {
  server = http.createServer(async (req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const filename = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!filename.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    try {
      const data = await fs.readFile(filename);
      res.writeHead(200, { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream' }).end(data);
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  url = `http://127.0.0.1:${server.address().port}/`;
  browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
});
test.after(async () => { await browser?.close(); await new Promise(resolve => server?.close(resolve)); });

async function open(viewport = { width: 390, height: 844 }, device = {}) {
  const context = await browser.newContext({ viewport, reducedMotion: 'reduce', ...device });
  // Deterministic offline-image fallback; external auth/provider connectivity is not under test.
  await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, route => route.abort());
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.MFREADY === true && document.querySelector('#pantrySlides .pantry-grid'));
  return { page, context };
}

test('app boots with bounded results and usable mobile layouts', async () => {
  for (const width of [320, 375, 390, 768, 1366]) {
    const {page, context} = await open({width, height: 844});
    const state = await page.evaluate(() => ({
      recipes: MEALS.length,
      cards: document.querySelectorAll('#results details.tile,#results details.mtile').length,
      allImages: document.querySelectorAll('img').length,
      dom: document.querySelectorAll('*').length,
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      tray: document.querySelector('#pantrySlides .pantry-tray').getBoundingClientRect().toJSON(),
      failedImageFallback: !!document.querySelector('.pantry-photo .pantry-fallback'),
    }));
    assert.ok(state.recipes > 700, `${width}: recipes loaded`);
    assert.ok(state.cards > 0 && state.cards <= 200, `${width}: bounded cards ${state.cards}`);
    assert.ok(state.dom < 10000, `${width}: DOM nodes ${state.dom}`);
    assert.ok(state.overflow <= 2, `${width}: horizontal overflow ${state.overflow}`);
    assert.ok(state.tray.left >= 0 && state.tray.right <= width, `${width}: pantry tray stays inside the viewport`);
    assert.ok(state.failedImageFallback, `${width}: ingredient fallback`);
    const hero = page.locator('.hero');
    assert.equal(await hero.isVisible(), true);
    assert.match(await hero.evaluate(el => getComputedStyle(el).backgroundImage), /hatri-pantry-header[.]webp/);
    await context.close();
  }
});

test('Hindi translation does not corrupt late CSS or leave account button visible', async () => {
  const {page, context} = await open();
  await page.locator('#langBtn').click();
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(() => window.MFREADY === true);
  const state = await page.evaluate(() => ({
    lang: LANG,
    badCss: [...document.querySelectorAll('style')].some(s => /display:\s*कोई नहीं|minut-width|मिनट-width/.test(s.textContent)),
    accountDisplay: getComputedStyle(document.querySelector('#acctBtn')).display,
  }));
  assert.equal(state.lang, 'hi');
  assert.equal(state.badCss, false);
  assert.equal(state.accountDisplay, 'none');
  await page.locator('#langBtn').click();
  assert.equal(await page.evaluate(() => LANG), 'en');
  await context.close();
});

test('search appears immediately and respects active region, time and diet', async () => {
  const {page, context} = await open();
  await page.locator('#rq').fill('gajar halwa');
  assert.equal(await page.locator('body').evaluate(el => el.classList.contains('searching')), true);
  assert.equal(await page.locator('#pantrySlides').evaluate(el => getComputedStyle(el).display), 'none');
  assert.equal(await page.locator('.hero').isVisible(), false);
  assert.ok(await page.locator('#results').innerText().then(t => t.includes('Gajar Halwa')));
  await page.evaluate(() => {
    Object.keys(TS).forEach(k => delete TS[k]); TS.t1 = 1;
    renderResults();
  });
  assert.ok(!(await page.locator('#results').innerText()).includes('Gajar Halwa'));
  await page.evaluate(() => {
    Object.keys(TS).forEach(k => delete TS[k]);
    Object.keys(RS).forEach(k => delete RS[k]); RS.Punjabi = 1;
    document.querySelector('#rq').value = 'pesto'; renderResults();
  });
  assert.equal(await page.locator('#results details.tile').count(), 0);
  await page.evaluate(() => { Object.keys(RS).forEach(k => delete RS[k]); renderResults(); });
  assert.ok(await page.locator('#results details.tile').count() >= 1);
  await context.close();
});

test('Clear all time remains cleared across reload; show-more adds a bounded batch', async () => {
  const {page, context} = await open();
  await page.evaluate(() => document.querySelector('[data-sf="t|#none"]').click());
  assert.equal(await page.evaluate(() => Object.keys(TS).length), 0);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(() => window.MFREADY === true);
  assert.equal(await page.evaluate(() => Object.keys(TS).length), 0);
  const first = page.locator('#results [data-show-more]').first();
  assert.ok(await first.count() > 0);
  const groupId = await first.evaluate(button => button.parentElement.id);
  const cards = page.locator(`#${groupId} > .tgrid > details`);
  const before = await cards.count();
  await first.click();
  const after = await cards.count();
  assert.ok(after > before && after - before <= 24, `before ${before}, after ${after}`);
  await context.close();
});

test('veg pantry excludes chicken stock; recipe guidance is corrected', async () => {
  const {page, context} = await open();
  await page.evaluate(() => {
    pantryTab = CATS.findIndex(c => c[0] === 'Condiments'); renderPantrySlides();
  });
  assert.equal(await page.locator('#pantrySlides [data-i="chickenstock"]').count(), 0);
  await page.locator('#rq').fill('gajar halwa');
  const text = await page.locator('#results').textContent();
  assert.ok(text.includes('Sugar'));
  assert.ok(text.includes('Simmer the grated carrots in milk'));
  assert.ok(!text.includes('Roast carrot, milk, sugar'));
  await context.close();
});

test('offline service worker installs and controls subsequent navigation', async () => {
  const {page, context} = await open();
  await page.waitForFunction(async () => !!(await navigator.serviceWorker.getRegistration()), { timeout: 10000 });
  await page.reload({waitUntil:'domcontentloaded'});
  const controlled = await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
    return !!navigator.serviceWorker.controller;
  });
  assert.equal(controlled, true);
  await context.close();
});

test('ingredient photo failures preserve the fallback and selection badge', async () => {
  const {page, context} = await open();
  await page.waitForFunction(() => document.querySelector('.pantry-photo-image')?.hidden === true);
  const first = page.locator('#pantrySlides .pantry-photo').first();
  const check = first.locator('.pantry-check');
  assert.ok((await first.locator('.pantry-fallback').innerText()).length > 0);
  assert.equal(await first.getAttribute('aria-pressed'), 'false');
  assert.equal(await check.isVisible(), false);
  await first.click();
  assert.equal(await first.getAttribute('aria-pressed'), 'true');
  assert.ok(await check.isVisible());
  await first.click();
  assert.equal(await first.getAttribute('aria-pressed'), 'false');
  assert.equal(await check.isVisible(), false);
  await context.close();
});

test('mobile pantry taps keep other ingredient photos and scroll position stable', async () => {
  const {page, context} = await open({width: 390, height: 844}, {isMobile: true, hasTouch: true});
  try {
    const grid = page.locator('#pantrySlides .pantry-grid');
    const lauki = grid.locator('[data-i="lauki"]');
    const beans = grid.locator('[data-i="beans"]');
    const photo = await lauki.locator('img').elementHandle();
    await photo.evaluate(img => img.decode());
    const scrollLeft = await grid.evaluate(el => {
      el.scrollLeft = 120;
      return el.scrollLeft;
    });
    assert.ok(scrollLeft > 0);

    for (const [button, selected] of [[beans, true], [lauki, true], [beans, false], [lauki, false]]) {
      await button.tap();
      assert.equal(await button.getAttribute('aria-pressed'), String(selected));
      assert.equal(await button.locator('.pantry-check').isVisible(), selected);
      assert.equal(await photo.evaluate(img => img.isConnected && img.complete && img.naturalWidth > 0), true);
      assert.equal(await grid.evaluate(el => el.scrollLeft), scrollLeft);
    }

    const panel = page.locator('#pantrySlides .pantry-panel');
    for (const action of ['all', 'none']) {
      await panel.locator(`[data-pantry-bulk="${action}"]`).tap();
      const selected = action === 'all' ? await grid.locator('.pantry-photo').count() : 0;
      assert.equal(await grid.locator('[aria-pressed="true"]').count(), selected);
      assert.match(await panel.locator('h3').innerText(), new RegExp(`\\(${selected}\\)$`));
      assert.equal(await photo.evaluate(img => img.isConnected), true);
      assert.equal(await grid.evaluate(el => el.scrollLeft), scrollLeft);
    }
  } finally {
    await context.close();
  }
});

test('mobile dish and time selections and advanced filters preserve the controls', async () => {
  const {page, context} = await open({width: 390, height: 844}, {isMobile: true, hasTouch: true});
  try {
    const slides = page.locator('#slides');
    const dishes = slides.locator('.cr .sls');
    const main = slides.locator('[data-crs="Main"]');
    const bread = slides.locator('[data-crs="Bread"]');
    const time = slides.locator('[data-sf="t|t2"]');
    const more = slides.locator('[data-mf-open]');
    await page.waitForFunction(() => document.querySelector('#slides [data-crs="Bread"]').classList.contains('cp'));
    const breadTile = await bread.elementHandle();
    const background = await breadTile.evaluate(tile => getComputedStyle(tile).backgroundImage);
    const left = await dishes.evaluate(strip => {
      strip.scrollLeft = strip.children[1].offsetLeft - strip.children[0].offsetLeft;
      return strip.scrollLeft;
    });
    assert.ok(left > 0);

    await main.tap();
    assert.equal(await main.getAttribute('aria-pressed'), 'true');
    assert.equal(await breadTile.evaluate(tile => tile.isConnected && getComputedStyle(tile).backgroundImage), background);
    assert.equal(await dishes.evaluate(strip => strip.scrollLeft), left);
    await bread.tap();
    assert.equal(await bread.getAttribute('aria-pressed'), 'true');
    await slides.locator('[data-remove-category="Main"]').tap();
    assert.equal(await main.getAttribute('aria-pressed'), 'false');

    const timeTile = await time.elementHandle();
    await time.focus();
    await page.keyboard.press('Space');
    assert.equal(await time.getAttribute('aria-pressed'), 'true');
    assert.equal(await timeTile.evaluate(tile => document.activeElement === tile), true);
    await slides.locator('[data-sf="t|#none"]').tap();
    assert.equal(await time.getAttribute('aria-pressed'), 'false');
    await slides.locator('[data-sf="t|#all"]').tap();
    assert.equal(await time.getAttribute('aria-pressed'), 'true');

    const trigger = await more.elementHandle();
    await more.tap();
    const dialog = page.locator('#moreFiltersDialog');
    const regionChoices = dialog.locator('.mf-region-choices .mf-choice');
    const positions = buttons => buttons.map(button => [button.offsetLeft, button.offsetTop]);
    const before = await regionChoices.evaluateAll(positions);
    for (const option of ['r|Punjabi', 'o|Daily', 'h|Light']) {
      const choice = dialog.locator(`[data-mf-option="${option}"]`);
      await choice.tap();
      assert.equal(await choice.getAttribute('aria-pressed'), 'true');
    }
    assert.deepEqual(await regionChoices.evaluateAll(positions), before);
    await dialog.locator('[data-mf-apply]').tap();
    assert.equal(await dialog.isVisible(), false);
    assert.equal(await more.locator('.mf-count').innerText(), '3');
    assert.equal(await trigger.evaluate(button => button.isConnected), true);
    await more.tap();
    await dialog.locator('[data-mf-reset]').tap();
    await dialog.locator('[data-mf-apply]').tap();
    assert.equal(await more.locator('.mf-count').count(), 0);
    assert.equal(await breadTile.evaluate(tile => tile.isConnected && getComputedStyle(tile).backgroundImage), background);
    await page.locator('#nvBtn').tap();
    assert.equal(await page.locator('#nvBtn').getAttribute('aria-checked'), 'false');
    await page.locator('#hostelBtn').tap();
    assert.equal(await page.locator('#hostelBtn').getAttribute('aria-checked'), 'true');
    const kettle = page.locator('#hostelSettings [data-app="K"]');
    await kettle.tap();
    assert.equal(await kettle.getAttribute('aria-pressed'), 'true');
    assert.equal(await breadTile.evaluate(tile => tile.isConnected), true);
  } finally {
    await context.close();
  }
});

test('mobile pantry category and drawer selections keep neighboring controls and photos mounted', async () => {
  const {page, context} = await open({width: 390, height: 844}, {isMobile: true, hasTouch: true});
  try {
    const tabs = page.locator('#pantrySlides .pantry-tabs');
    const vegetables = tabs.locator('[data-pantry-cat="0"]');
    const vegetableTab = await vegetables.elementHandle();
    const fruit = tabs.locator('[data-pantry-cat="1"]');
    await fruit.tap();
    assert.equal(await fruit.getAttribute('aria-pressed'), 'true');
    assert.equal(await vegetableTab.evaluate(tab => tab.isConnected), true);
    await vegetables.tap();
    assert.equal(await vegetables.getAttribute('aria-pressed'), 'true');

    const openPantry = page.locator('#results [data-view="pantry"]');
    await openPantry.tap();
    const drawer = page.locator('[data-vs="pantry"]');
    const grid = drawer.locator('.pgrid');
    const lauki = grid.locator('[data-i="lauki"]');
    const photo = await lauki.locator('img').elementHandle();
    await photo.evaluate(img => img.decode());
    const tomato = grid.locator('[data-i="tomato"]');
    await tomato.tap();
    assert.equal(await tomato.getAttribute('aria-pressed'), 'true');
    assert.equal(await photo.evaluate(img => img.isConnected && img.naturalWidth > 0), true);
    await tomato.tap();
    assert.equal(await tomato.getAttribute('aria-pressed'), 'false');
    assert.equal(await photo.evaluate(img => img.isConnected), true);
  } finally {
    await context.close();
  }
});

test('the cart shows selected ingredient photos, a related dish, and a single Blinkit action', async () => {
  const {page, context} = await open({width: 390, height: 844}, {isMobile: true, hasTouch: true});
  try {
    await page.locator('#rq').fill('gajar halwa');
    await page.locator('#rq').blur();
    const recipe = page.locator('#results [data-recipe="Gajar%20Halwa"]');
    const cover = await recipe.locator('summary img').elementHandle();
    await cover.evaluate(img => img.decode());
    await recipe.locator(':scope > summary').tap();
    const details = page.locator('#dtray');
    const photo = await details.locator('.tile.photo img').elementHandle();
    await photo.evaluate(img => img.decode());
    const sugar = details.locator('[data-oi="sugar"]');
    const sugarButton = await sugar.elementHandle();
    for (const selected of [true, false, true]) {
      await sugar.tap();
      assert.equal(await sugar.getAttribute('aria-pressed'), String(selected));
      assert.deepEqual(await page.locator('.cart-items li > span:last-child').allTextContents(), selected ? ['Sugar'] : []);
      assert.equal(await page.locator('#cart a').count(), selected ? 1 : 0);
      assert.equal(await sugarButton.evaluate(button => button.isConnected), true);
      assert.equal(await cover.evaluate(img => img.isConnected && img.naturalWidth > 0), true);
      assert.equal(await photo.evaluate(img => img.isConnected && img.naturalWidth > 0), true);
    }
    await page.locator('.tabbar [data-view="order"]').tap();
    const sugarPhoto = page.locator('.cart-items [data-cart-item="sugar"] img');
    assert.match(await sugarPhoto.getAttribute('src'), /pantry\/sugar[.]webp$/);
    await sugarPhoto.waitFor({state: 'hidden'});
    assert.equal(await page.locator('.cart-items [data-cart-item="sugar"] .cart-thumbnail').isVisible(), true);
    const suggestion = page.locator('.cart-suggestion');
    assert.equal(await suggestion.locator('h4').isVisible(), true);
    assert.equal(await suggestion.locator('.cart-needed li').filter({hasText: 'Sugar'}).locator('small').textContent(),
      'In your cart');

    const order = page.getByRole('link', {name: 'Order from Blinkit'});
    assert.equal(await order.isVisible(), true);
    assert.equal(await order.getAttribute('href'), 'https://blinkit.com/');
    assert.equal(await page.locator('#cart > :last-child').textContent(), 'Order from Blinkit');
    assert.equal(await page.locator('#cartCard input, #cartCard button:not(.sx), #cartCard li a').count(), 0);

    // The built-in lauki photo works with external ingredient images offline.
    await page.evaluate(() => {
      cart = {lauki: 1};
      have = {tomato: 1};
      renderCart();
    });
    const laukiPhoto = page.locator('.cart-items [data-cart-item="lauki"] img');
    await laukiPhoto.evaluate(img => img.decode());
    assert.equal(await laukiPhoto.isVisible(), true);
    assert.equal(await suggestion.locator('h4').textContent(), 'Lauki ki Sabzi');
    assert.deepEqual(await suggestion.locator('.cart-needed li').evaluateAll(rows =>
      rows.map(row => [...row.children].map(child => child.textContent))), [
      ['Lauki (bottle gourd)', 'In your cart'],
      ['Tomato', 'In your pantry'],
    ]);
    const dishPhoto = suggestion.locator('img');
    await dishPhoto.evaluate(img => img.decode());
    assert.equal(await dishPhoto.isVisible(), true);
  } finally {
    await context.close();
  }
});
