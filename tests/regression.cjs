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

async function open(viewport = { width: 390, height: 844 }) {
  const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
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
  const before = await page.locator('#results details.tile,#results details.mtile').count();
  const first = page.locator('#results [data-show-more]').first();
  assert.ok(await first.count() > 0);
  await first.click();
  const after = await page.locator('#results details.tile,#results details.mtile').count();
  assert.ok(after > before && after - before <= 24, `before ${before}, after ${after}`);
  await context.close();
});

test('veg pantry and shopping exclude chicken stock; recipe guidance is corrected', async () => {
  const {page, context} = await open();
  await page.evaluate(() => {
    pantryTab = CATS.findIndex(c => c[0] === 'Condiments'); renderPantrySlides();
  });
  assert.equal(await page.locator('#pantrySlides [data-i="chickenstock"]').count(), 0);
  await page.evaluate(() => { document.querySelector('#shopq').value = 'chicken'; shopRes(); });
  assert.equal(await page.locator('#shopres [data-oi="chickenstock"]').count(), 0);
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
  assert.equal(await check.count(), 0);
  await first.click();
  assert.equal(await first.getAttribute('aria-pressed'), 'true');
  assert.ok(await check.isVisible());
  await first.click();
  assert.equal(await first.getAttribute('aria-pressed'), 'false');
  assert.equal(await check.count(), 0);
  await context.close();
});
