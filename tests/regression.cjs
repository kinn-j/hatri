/* Browser regression checks for the Hatri PWA, desktop and mobile viewports.
 * Run: node --test tests/regression.cjs
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium, webkit } = require('playwright');
const {execFile, spawnSync} = require('node:child_process');
const git = require('node:util').promisify(execFile);
const previousRelease = 'fde94edb12e763c367ea64e937eb7e77f496de21';
let servePreviousRelease = false;

const root = path.resolve(__dirname, '..');
let server, browser, url;
const previousReleaseFiles = new Map();
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.webp': 'image/webp', '.png': 'image/png', '.ico': 'image/x-icon' };

test.before(async () => {
  server = http.createServer(async (req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const filename = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!filename.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    try {
      let data;
      if (servePreviousRelease) {
        const relative = path.relative(root, filename).split(path.sep).join('/');
        if (!previousReleaseFiles.has(relative)) {
          previousReleaseFiles.set(relative, git('git', ['show', previousRelease + ':' + relative], {
            cwd: root, encoding: 'buffer', maxBuffer: 8 * 1024 * 1024
          }).then(result => result.stdout));
        }
        data = await previousReleaseFiles.get(relative);
      } else data = await fs.readFile(filename);
      res.writeHead(200, { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream' }).end(data);
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  url = `http://127.0.0.1:${server.address().port}/`;
  const engine = process.env.HATRI_BROWSER === 'webkit' ? webkit : chromium;
  browser = await engine.launch({headless: true, executablePath: process.env.HATRI_BROWSER_PATH || undefined});
});
test.after(async () => { await browser?.close(); await new Promise(resolve => server?.close(resolve)); });

async function open(viewport = { width: 390, height: 844 }, device = {}, translationRequests) {
  const context = await browser.newContext({ viewport, reducedMotion: 'reduce', ...device });
  // Deterministic offline-image fallback; external auth/provider connectivity is not under test.
  await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, route => route.abort());
  await mockGoogleTranslate(context, translationRequests);
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.MFREADY === true && document.querySelector('#pantrySlides .pantry-grid'));
  return { page, context };
}

const translationPattern = 'https://translate.googleapis.com/translate_a/single?**';
async function mockGoogleTranslate(context, requests = []) {
  await context.route(translationPattern, async route => {
    const params = new URL(route.request().url()).searchParams;
    assert.equal(params.get('sl'), 'en');
    assert.equal(params.get('tl'), 'hi');
    const query = params.get('q');
    requests.push(query);
    const parts = query.split(/\s*(\[\d{4}\])\s*/).map((source, i) => {
      if (i % 2) return source;
      if (/Pahadi/i.test(source)) return 'पहाड़ी';
      if (source === 'Gajar Halwa') return 'गाजर और दूध से बना पारंपरिक भारतीय हलवा';
      if (/cauliflower|blanch the florets/i.test(source)) return 'फूलगोभी';
      if (/500 g carrots/i.test(source)) return '500 ग्राम गाजर';
      return 'अनुवादित पाठ';
    });
    await route.fulfill({ json: [[[parts.join('\n'), query]]], headers: {'Access-Control-Allow-Origin': '*'} });
  });
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
    assert.match(await hero.locator('.hero-slide').first().evaluate(el => getComputedStyle(el).backgroundImage), /hatri-pantry-header[.]webp/);
    await context.close();
  }
});

test('Back to top appears from the third screen of suggestions on mobile and desktop', async () => {
  for (const width of [390, 1366]) {
    const {page, context} = await open({width, height: 844}, {
      serviceWorkers:'block',
      reducedMotion: width === 390 ? 'reduce' : 'no-preference',
    });
    try {
      const button = page.getByRole('button', {name:'Back to top', includeHidden:true});
      const scrollToSuggestionPage = delta => page.evaluate(offset => {
        const heading = document.getElementById('suggestions-title');
        const pageThree = window.scrollY + heading.getBoundingClientRect().top +
          2 * document.documentElement.clientHeight;
        window.scrollTo(0, Math.ceil(pageThree) + offset);
      }, delta);
      const waitForVisibility = visible => page.waitForFunction(expected => {
        return (document.getElementById('suggestions-up').getClientRects().length > 0) === expected;
      }, visible);

      assert.equal(await button.isVisible(), false, 'hidden on the first screen');
      await scrollToSuggestionPage(-10);
      await waitForVisibility(false);
      await scrollToSuggestionPage(10);
      await waitForVisibility(true);
      await scrollToSuggestionPage(900);
      assert.equal(await button.isVisible(), true, 'visible beyond the third screen');
      await scrollToSuggestionPage(-10);
      await waitForVisibility(false);
      await scrollToSuggestionPage(10);
      await waitForVisibility(true);

      await button.focus();
      await page.keyboard.press('Enter');
      await page.waitForFunction(() => window.scrollY === 0);
      await waitForVisibility(false);
      assert.equal(await page.locator('.nav .logo').evaluate(el => el === document.activeElement), true);

      await scrollToSuggestionPage(10);
      await waitForVisibility(true);
      await page.locator('.tabbar [data-view="order"]').click();
      await waitForVisibility(false);

      if (width === 390) {
        await page.keyboard.press('Escape');
        await context.route(translationPattern, route => route.abort());
        await page.evaluate(() => setLang('hi'));
        await page.getByRole('heading', {name:'सुझाव', exact:true}).waitFor();
        // Translating the page can shift the heading while the browser anchors the scroll position.
        await scrollToSuggestionPage(300);
        await page.getByRole('button', {name:'पेज के ऊपर जाएँ'}).waitFor();
      }
    } finally { await context.close(); }
  }
});

test('all 1096+ recipes have categories, match Excel, and have no total browsing cap', async () => {
  const {page, context} = await open({width:390,height:844},{serviceWorkers:'block'});
  try {
    const audit = await page.evaluate(() => {
      const valid = new Set(Object.keys(CLX));
      const catalog = MEALS.map(m => ({name:m[0],categories:cats(m)}));
      return {
        catalog, count:categoryCounts().all, enabled:MEALS.filter(matchesModes).length,
        invalid:catalog.filter(r => !r.categories.length || r.categories.some(c => !valid.has(c))),
      };
    });
    assert.ok(audit.catalog.length >= 1096);
    assert.deepEqual(audit.invalid,[], 'each recipe is assigned to a real category');
    assert.equal(audit.count,audit.enabled,'All dishes category shows every dish allowed by Veg/Hostel Mode');

    const checker=spawnSync('python3',[path.join(root,'scripts/check-catalog-workbook.py')],{
      input:JSON.stringify(audit.catalog),encoding:'utf8',maxBuffer:8*1024*1024,
    });
    assert.equal(checker.status,0,(checker.stderr||'')+'\n'+(checker.stdout||''));

    const filtered = await page.evaluate(() => {
      Object.keys(TS).forEach(key=>delete TS[key]);TS.t1=1;
      Object.keys(OS).forEach(key=>delete OS[key]);OS.Vrat=1;
      Object.keys(RS).forEach(key=>delete RS[key]);RS.Rajasthani=1;
      syncT();renderResults();
      return {suggestions:MEALS.filter(m=>matchesFilters(m,false)).length,badge:categoryCounts().all};
    });
    assert.ok(filtered.suggestions<audit.enabled,'the advanced filters really narrow suggestions');
    assert.equal(filtered.badge,audit.enabled,'the category counter is not reduced by advanced filters');

    await page.locator('#slides [data-crs="all"]').click();
    const initial=await page.evaluate(()=>({total:score(true).length,rendered:document.querySelectorAll('#results details.tile').length}));
    assert.equal(initial.total,audit.enabled,'All dishes disregards time, region and occasion filters');
    assert.equal(initial.rendered,100,'progressively render the first batch to keep mobile fast');
    await page.locator('#results [data-more-sentinel]').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelectorAll('#results details.tile').length >= 200);
    assert.ok(await page.locator('#results [data-load-more]').isVisible(),'show-all fallback remains available');
    await page.locator('#results [data-load-more]').click();
    assert.equal(await page.locator('#results details.tile').count(),audit.enabled,'every allowed dish can be rendered');
    assert.equal(await page.locator('#results [data-more-sentinel]').count(),0,'no hidden later page');

    await page.locator('#rq').fill('a');
    const searched=await page.evaluate(()=>({shown:document.querySelectorAll('#results details.tile').length,
      matching:MEALS.filter(m=>matchesModes(m)&&searchLabels(m).join(' ').toLowerCase().includes('a')).length}));
    assert.equal(searched.shown,Math.min(100,searched.matching),'search progressively loads matches');
    if(searched.matching>100){
      await page.locator('#results [data-load-more]').click();
      assert.equal(await page.locator('#results details.tile').count(),searched.matching,'search has no result cap');
    }
  } finally { await context.close(); }
});

test('the top Veg Mode switch categorizes every veg and non-veg dish without diet carousel tiles', async () => {
  const {page, context} = await open({width:390,height:844},{serviceWorkers:'block'});
  try {
    const catalog=await page.evaluate(() => {
      const veg=MEALS.filter(isVegetarianDish), nonvegRecipes=MEALS.filter(m=>!isVegetarianDish(m));
      const hostelRecipes=MEALS.filter(m=>HOSTEL[m[0]]);
      return {total:MEALS.length,veg:veg.length,nonveg:nonvegRecipes.length,
        hostel:hostelRecipes.length,hostelVeg:hostelRecipes.filter(isVegetarianDish).length,
        hostelNonVeg:hostelRecipes.filter(m=>!isVegetarianDish(m)).length,
        hostelNames:Object.keys(HOSTEL).filter(name=>!MEALS.some(m=>m[0]===name)),
        before:categoryCounts(),allCategorized:MEALS.every(recipe=>cats(recipe).some(id=>CRS.some(([key])=>key===id)))};
    });
    assert.equal(catalog.veg+catalog.nonveg,catalog.total,'every recipe belongs to exactly one diet');
    assert.deepEqual(catalog.hostelNames,[],'every Hostel recipe belongs to the full catalog');
    assert.ok(catalog.hostelVeg>0 && catalog.hostelNonVeg>0,'both diets have Hostel recipes');
    assert.equal(catalog.veg,1036,'the complete 1,036 vegetarian recipes remain in the current catalog');
    assert.equal(catalog.nonveg,60);
    assert.equal(catalog.before.all,catalog.veg);
    assert.equal(catalog.allCategorized,true,'no recipe is orphaned from the carousel types');
    assert.equal(await page.locator('#slides [data-crs="Veg"],#slides [data-crs="NonVeg"]').count(),0);

    await page.locator('#slides [data-crs="Main"]').click();
    const typed=await page.evaluate(()=>({selected:sel,correct:score(true).every(dish=>cats(dish.recipe).includes('Main'))}));
    assert.equal(typed.selected.meal,undefined,'dish category replaces the default Whole meal selection');
    assert.equal(typed.correct,true);
    await page.locator('#slides [data-crs="all"]').click();
    assert.equal(await page.evaluate(()=>score(true).length),catalog.veg,'all veg dishes are browseable');

    await page.locator('#nvBtn').click();
    const both=await page.evaluate(()=>({count:score(true).length,veg:score(true).filter(d=>d.v).length,
      nv:score(true).filter(d=>!d.v).length,uncategorized:MEALS.filter(m=>!cats(m).some(id=>CRS.some(([key])=>key===id))).length}));
    assert.equal(both.count,catalog.total,'Veg Mode off includes the entire catalog');
    assert.equal(both.veg,catalog.veg);
    assert.equal(both.nv,catalog.nonveg);
    assert.equal(both.uncategorized,0);

    await page.evaluate(()=>{hostel=true;app={K:1,R:1,I:1,T:1,N:1};renderModes();renderResults()});
    const filtered=await page.evaluate(()=>({names:score(true).map(m=>m.n),counts:categoryCounts()}));
    assert.equal(filtered.names.length,catalog.hostel,'Hostel Mode includes every Hostel recipe with equipment');
    assert.equal(filtered.counts.all,catalog.hostel);
    await page.evaluate(()=>{hostel=false;renderModes();renderResults()});
    assert.equal(await page.evaluate(()=>score(true).length),catalog.total,'Hostel dishes remain in normal diet categories');
  } finally {await context.close();}
});

test('Add to Table selects recipes without changing the cart, persists, and can be removed', async () => {
  const {page, context} = await open({width: 375, height: 844}, {serviceWorkers:'block'});
  try {
    await page.locator('#rq').fill('aloo jeera');
    const tile = page.locator('#results details.tile').first();
    assert.ok(await tile.count(), 'an individual recipe is visible');
    const selectedName = await tile.locator('.tx b').innerText();
    await tile.locator('summary .table-add').click();
    assert.equal(await page.locator('#dtray').evaluate(dialog => dialog.open), false, 'the Table action must not open recipe details');
    assert.equal(await tile.evaluate(details => details.open), false, 'the Table action must not expand its tile');
    assert.equal(await page.locator('#tbadge').innerText(), '1');
    assert.equal(await tile.locator('summary .table-add').getAttribute('aria-pressed'), 'true');
    assert.deepEqual(await page.evaluate(() => ({cart:cart,cartMeals:cartMeals})), {cart:{},cartMeals:[]}, 'Table does not modify shopping list');
    await page.locator('.tabbar [data-view="table"]').click();
    assert.equal(await page.locator('[data-vs="table"]').isVisible(), true);
    assert.ok((await page.locator('#table-list').innerText()).includes(selectedName));
    await page.reload({waitUntil:'domcontentloaded'});
    await page.waitForFunction(() => window.MFREADY === true);
    await page.locator('.tabbar [data-view="table"]').click();
    assert.equal(await page.locator('#table-list .table-selection').count(), 1, 'selection survives reload');
    await page.locator('[data-table-remove="0"]').click();
    assert.equal(await page.locator('#table-list .table-selection').count(), 0);
    assert.equal(await page.locator('#tbadge').innerText(), '');
  } finally { await context.close(); }
});

test('a six-dish meal is one saved Table selection and individual recipes stay independent', async () => {
  const {page, context} = await open({width: 390, height: 844}, {serviceWorkers:'block'});
  try {
    const meal = page.locator('#results details.mtile').first();
    assert.ok(await meal.count(), 'a complete meal suggestion exists');
    const mealNames = await page.evaluate(() => {
      const key = decodeURIComponent(document.querySelector('#results details.mtile').dataset.mk);
      return MEALK[key].items.map(item => item.n);
    });
    assert.equal(mealNames.length, 6);
    assert.equal(new Set(mealNames).size, 6);
    await meal.locator('summary .table-add').click();
    assert.equal(await meal.evaluate(details => details.open), false, 'adding a meal must not expand it');
    await page.evaluate(() => { changeTableSelection({kind:'dish',name:tableSelections[0].names[0]}); });
    assert.equal(await page.locator('#tbadge').innerText(), '2');
    await page.locator('.tabbar [data-view="table"]').click();
    assert.equal(await page.locator('#table-list .table-selection').count(), 2);
    assert.equal(await page.locator('#table-list .table-meal .table-dish').count(), 6);
    await page.locator('#table-list [data-table-remove="0"]').click();
    assert.equal(await page.locator('#table-list .table-selection').count(), 1);
    assert.equal(await page.locator('#table-list .table-meal').count(), 0);
    assert.match(await page.locator('#table-list').innerText(), /Individual dish/i);
    assert.deepEqual(await page.evaluate(() => ({cart:cart,cartMeals:cartMeals})), {cart:{},cartMeals:[]});
  } finally { await context.close(); }
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

test('Hindi localizes Pahadi, new UI text and accessibility labels, and restores English', async () => {
  const requests = [];
  const {page, context} = await open(undefined, {serviceWorkers: 'block'}, requests);
  try {
    await page.locator('#langBtn').click();
    await page.locator('[data-mf-open]').click();
    const pahadi = page.locator('[data-mf-option="r|Pahadi"]');
    await page.waitForFunction(() => document.querySelector('[data-mf-option="r|Pahadi"]').textContent.includes('पहाड़ी'));
    assert.doesNotMatch(await pahadi.innerText(), /Pahadi/);
    await pahadi.click();
    assert.equal(await pahadi.getAttribute('aria-pressed'), 'true');
    await page.locator('[data-mf-apply]').click();
    await page.locator('#rq').fill('mandua cheela');
    await page.locator('#results [data-recipe="Uttarakhand%20Mandua%20Cheela"] > summary').click();
    await page.waitForFunction(() => document.querySelector('#dtray .meta')?.textContent.includes('पहाड़ी'));
    await page.locator('#dish-detail-close').click();
    await page.evaluate(() => {
      const style = document.createElement('style');
      style.id = 'late-style';
      style.textContent = '.late-translation { display: block; }';
      document.body.append(style);
      const label = document.createElement('button');
      label.id = 'late-translation';
      label.textContent = 'Pahadi';
      label.setAttribute('aria-label', 'Pahadi');
      document.body.append(label);
    });
    await page.waitForFunction(() => document.querySelector('#late-translation').getAttribute('aria-label') === 'पहाड़ी');
    assert.equal(await page.locator('#late-style').textContent(), '.late-translation { display: block; }');
    await page.locator('#langBtn').click();
    assert.equal(await page.locator('#late-translation').textContent(), 'Pahadi');
    assert.equal(await page.locator('#late-translation').getAttribute('aria-label'), 'Pahadi');
    assert.equal(await page.evaluate(() => HatriTranslation.lookup('Pahadi')), 'पहाड़ी');
  } finally { await context.close(); }
});

test('Hindi searches use built-in catalog translations and keep entered queries local', async () => {
  const requests = [];
  const {page, context} = await open(undefined, {serviceWorkers: 'block'}, requests);
  try {
    await page.locator('#langBtn').click();
    const query = 'गाजर हलवा';
    await page.locator('#rq').fill(query);
    const recipe = page.locator('#results [data-recipe="Gajar%20Halwa"] summary');
    await recipe.first().waitFor();
    await page.waitForFunction(() => document.querySelector('#results [data-recipe="Gajar%20Halwa"] summary').textContent.includes('हलवा'));
    assert.equal(await page.evaluate(() => HatriTranslation.lookup('Gajar Halwa')), 'गाजर का हलवा');
    assert.ok(requests.every(request => !request.includes(query)), 'search terms stay on the device');
    assert.ok(requests.every(request => !request.includes(query)));
    await context.route(translationPattern, route => route.abort());
    await page.reload({waitUntil: 'domcontentloaded'});
    await page.locator('#rq').fill(query);
    await page.waitForFunction(() => document.querySelector('#results [data-recipe="Gajar%20Halwa"] summary')?.textContent.includes('हलवा'));
  } finally { await context.close(); }
});

test('Hindi essentials work offline and survive reload; English restores cleanly', async () => {
  const {page, context} = await open(undefined, {serviceWorkers: 'block'});
  try {
    await context.route(translationPattern, route => route.abort());
    await page.locator('#langBtn').click();
    await page.waitForFunction(() => document.querySelector('h2')?.textContent.includes('सामग्री') ||
      document.querySelector('#rq')?.getAttribute('placeholder')?.includes('छोले'));
    assert.equal(await page.locator('#rq').getAttribute('placeholder'), '"छोले भटूरे" खोजें');
    assert.equal(await page.locator('#nvBtn').getAttribute('aria-label'), 'शाकाहारी मोड');
    assert.equal(await page.locator('#hostelBtn').getAttribute('aria-label'), 'हॉस्टल मोड');
    await page.locator('#rq').fill('गाजर');
    await page.locator('#results [data-recipe="Gajar%20Halwa"] summary').first().waitFor();
    await page.waitForFunction(() => document.querySelector('#results [data-recipe="Gajar%20Halwa"] summary')?.textContent.includes('गाजर का हलवा'));
    await page.reload({waitUntil:'domcontentloaded'});
    await page.waitForFunction(() => window.MFREADY === true && document.querySelector('#nvBtn')?.getAttribute('aria-label') === 'शाकाहारी मोड');
    await page.locator('#langBtn').click();
    assert.equal(await page.locator('#nvBtn').getAttribute('aria-label'), 'Veg mode');
    assert.equal(await page.locator('#rq').getAttribute('placeholder'), 'Search "chole bhature"');
  } finally { await context.close(); }
});

test('Hindi recipe amounts and every cooking step render with Google Translate blocked', async () => {
  const requests = [];
  const {page, context} = await open(undefined, {serviceWorkers: 'block'}, requests);
  try {
    await context.route(translationPattern, route => route.abort());
    await page.locator('#langBtn').click();
    await page.locator('#rq').fill('gajar halwa');
    await page.locator('#results [data-recipe="Gajar%20Halwa"] summary').first().click();
    await page.waitForFunction(() => {
      const steps = [...document.querySelectorAll('#dtray .steps ol li')];
      const amounts = [...document.querySelectorAll('#dtray .steps ul li')];
      return steps.length >= 3 && amounts.length >= 3 && [...steps, ...amounts]
        .every(item => /\p{Script=Devanagari}/u.test(item.textContent));
    });
    assert.match(await page.locator('#dtray .steps ul').innerText(), /गाजर/);
    assert.doesNotMatch(await page.locator('#dtray .steps ol').innerText(), /Peel and grate the carrots/);
    assert.ok(requests.every(request => !request.includes('Gajar Halwa')));
    await page.locator('#dtray [data-recipe-language="en"]').click();
    await page.waitForFunction(() => document.querySelector('#dtray .steps ol')?.textContent.includes('Peel and grate the carrots'));
  } finally { await context.close(); }
});

test('Google login package shares the runtime translator', async () => {
  const {page, context} = await open({width: 1366, height: 844});
  try {
    await page.goto(url + 'Raman_Rasoi_Google_Login_Configured/index.html', {waitUntil: 'domcontentloaded'});
    await page.waitForFunction(() => !!globalThis.HatriTranslation && window.MFREADY === true);
    await page.evaluate(() => {
      setLang('hi');
      const mark = document.createElement('p');
      mark.id = 'region-probe';
      mark.textContent = 'Pahadi';
      document.body.append(mark);
    });
    await page.waitForFunction(() => document.querySelector('#region-probe').textContent === 'पहाड़ी');
  } finally { await context.close(); }
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

test('Clear all time remains cleared across reload; individual suggestions share one 100-dish limit', async () => {
  const {page, context} = await open();
  await page.evaluate(() => document.querySelector('[data-sf="t|#none"]').click());
  assert.equal(await page.evaluate(() => Object.keys(TS).length), 0);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(() => window.MFREADY === true);
  assert.equal(await page.evaluate(() => Object.keys(TS).length), 0);
  await page.evaluate(() => { sel = {all:1}; renderResults(); });
  assert.equal(await page.locator('#results .suggestion-block > .tgrid > details.tile').count(), 100);
  await page.locator('#rq').fill('a');
  assert.equal(await page.locator('#results details.tile').count(), 100);
  await context.close();
});

test('saved heaviness selections do not restrict recipes or appear in filters or recipe cards', async () => {
  const {page, context} = await open();
  try {
    const filters = {
      r: { 'North Indian': 1 }, o: { Festive: 1 }, t: { t3: 1 },
      seasonal: true, winter: true,
    };
    await page.evaluate(filters => {
      localStorage.setItem('rr-filters-v2', JSON.stringify({ ...filters, h: { Light: 1 } }));
    }, filters);
    await page.reload({waitUntil: 'domcontentloaded'});
    await page.waitForFunction(() => window.MFREADY === true);

    const more = page.locator('[data-mf-open]');
    assert.equal(await more.locator('.mf-count').innerText(), '2');
    await more.click();
    const dialog = page.locator('#moreFiltersDialog');
    assert.deepEqual(await dialog.locator('h3').allTextContents(), ['Region', 'Occasion']);
    await dialog.locator('[data-mf-apply]').click();
    assert.deepEqual(await page.evaluate(() => JSON.parse(localStorage.getItem('rr-filters-v2'))), filters);

    await page.locator('#rq').fill('shahi paneer');
    const recipe = page.locator('#results details.tile').filter({ hasText: 'Shahi Paneer' }).first();
    assert.equal(await recipe.isVisible(), true);
    assert.doesNotMatch(await recipe.textContent(), /🪶 Light|⚖️ Medium|🔥 Heavy/);
  } finally {
    await context.close();
  }
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

test('recipe details cover the entire live catalog and render measured methods in search', async () => {
  const {page, context} = await open(undefined, {serviceWorkers: 'block'});
  try {
    const audit = await page.evaluate(() => {
      const dishes = new Set(MEALS.map(recipe => recipe[0]));
      const overrides = Object.entries(HATRI_RECIPE_DETAILS);
      const missing = [], invalid = [];
      const panel = document.createElement("div");
      for (const language of ["en", "hi"]) {
        LANG = language;
        for (const recipe of MEALS) {
          const [n, v, , c, , ing, , , oc] = recipe;
          panel.innerHTML = recipePanel({n, v, c, ing, oc});
          if (![...panel.querySelectorAll(".steps ol li")].some(li => li.textContent.trim())) missing.push([n, language]);
          if (!panel.querySelector(".steps ul li")) invalid.push([n, language, "ingredients"]);
          if (panel.innerHTML.includes("undefined")) invalid.push([n, language, "undefined"]);
        }
      }
      LANG = "en";
      return {
        total: dishes.size,
        measured: [...dishes].filter(name => HATRI_RECIPE_DETAILS[name] || MEASURED_RECIPES[name]).length,
        missing,
        invalid,
        orphaned: overrides.filter(([name, data]) => !dishes.has(name) || data.serves < 1 ||
          data.amounts.en.length < 2 || (data.steps && data.steps.en.length < 3)).map(([name]) => name),
      };
    });
    assert.ok(audit.total >= 887);
    assert.equal(audit.measured, audit.total);
    assert.deepEqual(audit.missing, []);
    assert.deepEqual(audit.invalid, []);
    assert.deepEqual(audit.orphaned, []);

    await page.locator('#rq').fill('gobi pakora');
    const recipe = page.locator('#results .steps').first();
    await expectRecipe(recipe, false);
    await page.locator('#results details.tile > summary').first().click();
    await page.locator('#dtray [data-recipe-language="hi"]').click();
    await page.waitForFunction(() => document.querySelector('#dtray .steps ul').textContent.includes('फूलगोभी') &&
      /\p{Script=Devanagari}/u.test(document.querySelector('#dtray .steps ol').textContent));
    await expectRecipe(page.locator('#dtray .steps'), true);
    assert.equal(await page.locator('#dtray .steps ol').locator('..').getAttribute('lang'), 'hi');
    await page.locator('#dish-detail-close').click();
    await page.locator('#rq').fill('gajar halwa');
    await page.locator('#results details.tile > summary').first().click();
    await page.waitForFunction(() => document.querySelector('#dtray .steps ul').textContent.includes('500 ग्राम गाजर'));

    async function expectRecipe(recipe, hindi) {
      if (hindi) {
        assert.match(await recipe.textContent(), /फूलगोभी/);
        assert.doesNotMatch(await recipe.textContent(), /Blanch the florets/);
      } else {
        assert.match(await recipe.textContent(), /250 g small cauliflower florets/);
        assert.match(await recipe.textContent(), /170–175°C/);
      }
      assert.equal(await recipe.locator("ol li").count(), 3);
    }
  } finally {
    await context.close();
  }
});

test('whole meals show every possible themed six-dish set and clearly separate the ready subset', async () => {
  for (const width of [320, 1024]) {
    const {page, context} = await open({width, height: 844});
    try {
      await page.evaluate(() => setView('recipes'));
      const section = page.locator('#results .meal-sets');
      const cards = section.locator('details.mtile');
      await section.locator('summary img').first().waitFor();
      const total = await page.evaluate(() => Object.keys(MEALK).length);
      assert.ok(total >= 25);
      assert.equal(await cards.count(), total,'do not cap the rendered complete meal list');
      assert.equal(await section.getAttribute('data-total-meals'),String(total));
      assert.match(await section.locator(':scope > h2').innerText(),new RegExp(`${total} complete sets`));
      const ready=await page.evaluate(() => Object.values(MEALK).filter(meal=>meal.miss.length===0).length);
      assert.match(await section.locator('.meal-summary').innerText(),new RegExp(`${ready} ready with your pantry`));
      const audit = await page.evaluate(() => Object.values(MEALK).every(({items,theme}) =>
        items.length === 6 && new Set(items.map(d => d.n)).size === 6 &&
        items.slice(0, 2).every(d => regionOf(d.recipe) === theme && course(d.n) === 'Main') &&
        course(items[2].n) === 'Bread' && mealRole(items[3]) === 'Rice' &&
        items[4].ing.includes('curd') && course(items[5].n) === 'Sweet'));
      assert.equal(audit, true);
      const allDishKeys = await page.evaluate(() => Object.values(MEALK).flatMap(meal =>
        meal.items.concat(meal.salad || []).map(dish => mealDishKey(dish.n))));
      assert.equal(new Set(allDishKeys).size, allDishKeys.length);
      const grid = cards.first().locator('summary .mos');
      const photos = grid.locator('.mc img');
      assert.equal(await photos.count(), 6);
      await photos.evaluateAll(images => Promise.all(images.map(image => image.decode())));
      assert.equal(new Set(await grid.locator('.meal-caption').allTextContents()).size, 6);
      assert.equal(await grid.evaluate(el => getComputedStyle(el).gridTemplateColumns.split(' ').length), 3);
      await cards.first().locator('summary').first().click();
      const dishes = cards.first().locator('.mbody details.tile');
      await dishes.first().waitFor();
      assert.equal(await dishes.count(), 6);
    } finally {
      await context.close();
    }
  }
});

test('meal photos and expanded dishes work without a photo index on mobile', async () => {
  const context = await browser.newContext({viewport:{width:390,height:844}});
  try {
    await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, route => route.abort());
    await context.route('**/images/photos.json', route => route.fulfill({status:503,body:'Unavailable'}));
    const page = await context.newPage();
    await page.goto(url, {waitUntil:'domcontentloaded'});
    await page.waitForFunction(() => window.MFREADY === true);
    await page.evaluate(() => setView('recipes'));
    const meal = page.locator('#results .mtile').first();
    const photos = meal.locator('summary .mc img');
    assert.equal(await photos.count(), 6);
    await photos.evaluateAll(images => Promise.all(images.map(image => image.decode())));
    await meal.locator('summary').first().click();
    const firstDish = meal.locator('.mbody details.tile > summary').first();
    await firstDish.click();
    await page.locator('#dtray[open] .dt-photo img').evaluate(image => image.decode());
    assert.ok(await page.locator('#dtray .steps ol li').count() > 0);
  } finally { await context.close(); }
});

test('meal photos are visible on first render with all full-size photos blocked', async () => {
  const context = await browser.newContext({viewport:{width:390,height:844}, serviceWorkers:'block'});
  try {
    await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, route => route.abort());
    await context.route(url => /\.(webp|png)$/i.test(url.pathname) &&
      !url.pathname.endsWith('/meal-previews.webp'), route => route.abort());
    const page = await context.newPage();
    const previewResponse = page.waitForResponse(response =>
      new URL(response.url()).pathname.endsWith('/images/meal-previews.webp'));
    await page.goto(url, {waitUntil:'domcontentloaded'});
    const cells = page.locator('#results .mtile').first().locator('summary .mc');
    await cells.first().waitFor();
    assert.equal(await cells.count(), 6);
    assert.equal((await previewResponse).ok(), true);
    const previews = await cells.evaluateAll(async elements => {
      const source = new Image();
      source.src = elements[0].querySelector('.meal-preview image').getAttribute('href');
      await source.decode();
      return elements.every(el => {
        const filename = new URL(el.querySelector('img').src).pathname.split('/').pop();
        const index = mealPhotoPreviews['images/' + filename];
        const box = el.querySelector('.meal-preview').viewBox.baseVal;
        return box.width === 72 && box.height === 72 &&
          box.x === (index % mealPreviewColumns) * 72 &&
          box.y === Math.floor(index / mealPreviewColumns) * 72 &&
          box.x + box.width <= source.naturalWidth && box.y + box.height <= source.naturalHeight;
      });
    });
    assert.equal(previews, true);
  } finally { await context.close(); }
});

test('a visible meal photo recovers from an interrupted request while still online', async () => {
  const context = await browser.newContext({viewport:{width:390,height:844}, serviceWorkers:'block'});
  try {
    await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, route => route.abort());
    const page = await context.newPage();
    await page.goto(url, {waitUntil:'domcontentloaded'});
    await page.waitForFunction(() => window.MFREADY === true);
    const photo = page.locator('#results .mtile summary .mc img').first();
    const target = new URL(await photo.getAttribute('src'), url);
    target.searchParams.set('recovery-test', '1');
    let requests = 0;
    await page.route(url => url.pathname === target.pathname && url.searchParams.has('recovery-test'), route => ++requests === 1 ? route.abort() : route.continue());
    await photo.scrollIntoViewIfNeeded();
    await photo.evaluate((img, src) => { img.src = src; }, target.href);
    await page.waitForFunction(src => {
      const img = document.querySelector('#results .mtile summary .mc img');
      const retry = new URL(src);
      retry.searchParams.set('photo-retry', '1');
      return img.src === retry.href && img.complete && img.naturalWidth > 0 && !img.hidden;
    }, target.href);
    assert.equal(requests, 2);
  } finally { await context.close(); }
});

test('every live recipe has a decodable full-size dish photo', {timeout: 60_000}, async () => {
  const {page, context} = await open();
  try {
    await page.waitForFunction(() => Object.keys(IMG).length > 0);
    const audit = await page.evaluate(async () => {
      const missing = [];
      const invalid = [];
      const files = new Map();
      for (const [name] of MEALS) {
        const photo = IMG[pslug(name)];
        if (photo) files.set(photoSrc(photo), name);
        else missing.push(name);
      }
      const entries = [...files];
      for (let batch = 0; batch < entries.length; batch += 24) {
        await Promise.all(entries.slice(batch, batch + 24).map(async ([src, name]) => {
          const photo = new Image();
          photo.src = src;
          try {
            await photo.decode();
            if (Math.min(photo.naturalWidth, photo.naturalHeight) < 300) {
              invalid.push([name, src, `${photo.naturalWidth}×${photo.naturalHeight}`]);
            }
          } catch {
            invalid.push([name, src, 'could not decode']);
          }
        }));
      }
      return {missing: [...new Set(missing)], invalid, photoCount: files.size};
    });
    assert.deepEqual(audit.missing, []);
    assert.deepEqual(audit.invalid, []);
    assert.ok(audit.photoCount > 0);
  } finally {
    await context.close();
  }
});

test('Dahi ke Kebab uses its updated full-resolution photo in search and recipe details', async () => {
  const {page, context} = await open();
  try {
    await page.waitForFunction(() => IMG['dahi-ke-kebab']);
    await page.locator('#rq').fill('dahi ke kebab');
    const photo = page.locator('#results [data-recipe="Dahi%20ke%20Kebab"] > summary img');
    await photo.evaluate(img => img.decode());
    const source = await photo.getAttribute('src');
    assert.match(source, /^images\/dahi-ke-kebab[.]webp[?]v=\d+$/);
    await photo.click();
    const detail = page.locator('#dtray[open] .dt-photo img');
    const displayed = await detail.evaluate(async img => {
      await img.decode();
      return {width: img.naturalWidth, height: img.naturalHeight, fit: getComputedStyle(img).objectFit};
    });
    assert.equal(await detail.getAttribute('src'), source);
    assert.ok(displayed.width >= 800);
    assert.equal(displayed.height, displayed.width);
    assert.equal(displayed.fit, 'contain');
  } finally {
    await context.close();
  }
});

test('a failed recipe photo falls back on the recipe card and in the detail dialog', async () => {
  const {page, context} = await open();
  try {
    await page.waitForFunction(() => IMG['bhindi-masala']);
    await page.evaluate(() => { IMG['bhindi-masala'] = 'images/audit-missing-bhindi-masala.webp'; });
    await page.locator('#rq').fill('bhindi masala');
    const card = page.locator('#results [data-recipe="Bhindi%20Masala"] > summary');
    const thumbnail = card.locator('img');
    await card.scrollIntoViewIfNeeded();
    await card.locator('.recipe-photo-fallback').waitFor();
    assert.equal(await thumbnail.getAttribute('hidden'), '');
    await card.click();
    const dialog = page.locator('#dtray[open]');
    await dialog.locator('.dt-photo .recipe-photo-fallback').waitFor();
    assert.equal(await dialog.locator('.dt-photo img').getAttribute('hidden'), '');
    assert.equal(await dialog.locator('#dish-title').innerText(), 'Bhindi Masala');
  } finally {
    await context.close();
  }
});

test('dish photo and text open the same full recipe on mobile and desktop', async () => {
  for (const width of [390, 1366]) {
    const {page, context} = await open({width, height: 844});
    try {
      await page.locator('#rq').fill('gobi pakora');
      const summary = page.locator('#results details.tile[data-recipe="Gobi%20Pakora"] > summary');
      const thumbnail = summary.locator('img');
      await thumbnail.evaluate(img => img.decode());
      const thumbWidth = (await thumbnail.boundingBox()).width;
      const modal = page.getByRole('dialog', {name: 'Gobi Pakora'});

      async function details() {
        assert.equal(await page.locator('dialog[open]').count(), 1);
        assert.equal(await modal.isVisible(), true);
        const image = modal.locator('.dt-photo img');
        await image.evaluate(img => img.decode());
        assert.equal(await image.getAttribute('src'), await thumbnail.getAttribute('src'));
        assert.ok((await image.boundingBox()).width > thumbWidth);
        assert.match(await modal.locator('.meta').textContent(), /Prep \d+ min.*Cook \d+ min/);
        assert.equal(await modal.locator('details.steps').getAttribute('open'), '');
        assert.match(await modal.locator('.steps ul').innerText(), /250 g small cauliflower florets/);
        assert.match(await modal.locator('.steps ol').innerText(), /170–175°C/);
        return modal.locator('.dt-b').textContent();
      }

      await thumbnail.click();
      const fromPhoto = await details();
      await modal.getByRole('button', {name: 'Close recipe'}).click();
      await modal.waitFor({state: 'hidden'});
      await summary.locator('.tx b').click();
      assert.equal(await details(), fromPhoto);
      const ingredient = modal.locator('.shop-item').first();
      await ingredient.click();
      assert.equal(await ingredient.getAttribute('aria-pressed'), 'true');
      assert.equal(await modal.isVisible(), true);
      await page.keyboard.press('Escape');
      await modal.waitFor({state: 'hidden'});
      assert.equal(await summary.evaluate(el => el === document.activeElement), true);
      await summary.press('Enter');
      await details();
    } finally {
      await context.close();
    }
  }
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
  await context.setOffline(true);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(() => window.MFREADY === true);
  assert.equal(await page.evaluate(async () => {
    const preview = new Image();
    preview.src = document.querySelector('#results .meal-preview image').getAttribute('href');
    await preview.decode();
    return preview.naturalWidth === mealPreviewSize * mealPreviewColumns;
  }), true);
  await page.locator('#rq').fill('gobi pakora');
  assert.match(await page.locator('#results .steps').first().textContent(), /250 g small cauliflower florets/);
  await context.close();
});

test('closed browse cards render full recipe content only when opened', async () => {
  const {page, context} = await open();
  try {
    const recipe = page.locator('#results details.tile').first();
    assert.equal(await recipe.getAttribute('data-lazy-card'), '');
    assert.equal(await recipe.locator('.steps').count(), 0);
    await recipe.locator('summary').click();
    const dialog = page.locator('#dtray[open]');
    assert.ok(await dialog.locator('.steps ol li').count() > 0);
    await page.locator('#dish-detail-close').click();
    await recipe.evaluate(el => { el.open = true; });
    await page.waitForFunction(() => document.querySelector('#results details.tile[open] .steps ol li'));
    await page.evaluate(() => renderResults());
    assert.ok(await recipe.locator('.steps ol li').count() > 0);
  } finally { await context.close(); }
});

test('community video code loads once when opening Reels', async () => {
  const context = await browser.newContext({ serviceWorkers: 'block' });
  try {
    await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, route => route.abort());
    let loads = 0;
    await context.route('**/recipe-reels.js', route => {
      loads++;
      return route.fulfill({
        contentType: 'text/javascript',
        body: 'document.getElementById("reels-feed").textContent = "Community videos ready";',
      });
    });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    assert.equal(loads, 0);
    await page.locator('.tabbar [data-view="reels"]').click();
    await page.getByText('Community videos ready').waitFor();
    await page.evaluate(() => setView('recipes'));
    await page.locator('.tabbar [data-view="reels"]').click();
    assert.equal(loads, 1);
    assert.equal(await page.locator('#reels-upload-open').isEnabled(), true);
  } finally { await context.close(); }
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
    for (const option of ['r|Punjabi', 'o|Daily']) {
      const choice = dialog.locator(`[data-mf-option="${option}"]`);
      await choice.tap();
      assert.equal(await choice.getAttribute('aria-pressed'), 'true');
    }
    assert.deepEqual(await regionChoices.evaluateAll(positions), before);
    await dialog.locator('[data-mf-apply]').tap();
    assert.equal(await dialog.isVisible(), false);
    assert.equal(await more.locator('.mf-count').innerText(), '2');
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

test('the cart rotates 1–2 missing-ingredient dishes in a two-column mobile grid', async () => {
  const {page, context} = await open({width: 390, height: 844}, {isMobile: true, hasTouch: true});
  try {
    await page.evaluate(() => {
      have = {carrot: 1};
      cart = {milk: 1, ghee: 1, sugar: 1};
      cartMeals = [];
      all();
      setView('order');
    });
    const suggestion = page.locator('.cart-suggestion');
    const dishes = suggestion.locator('.cart-dish-card');
    assert.equal(await dishes.count(), await page.evaluate(() => cartDishes(Infinity).length));
    const firstTwo = await dishes.evaluateAll(cards => cards.slice(0, 2).map(el => ({
      x: Math.round(el.getBoundingClientRect().left),
      y: Math.round(el.getBoundingClientRect().top),
    })));
    assert.equal(firstTwo[0].y, firstTwo[1].y, 'first two dishes share a row');
    assert.ok(firstTwo[1].x > firstTwo[0].x, 'second dish is to the right');
    assert.equal(await suggestion.locator('.cart-dishes').evaluate(el =>
      getComputedStyle(el).gridTemplateColumns.split(' ').length), 2);
    assert.equal(await dishes.evaluateAll(cards => cards.every(card => {
      const rows = [...card.querySelectorAll('[data-cart-add-ingredient]')];
      return rows.length >= 1 && rows.length <= 2 &&
        rows.every(button => !have[button.dataset.cartAddIngredient] && !cartQuantity(button.dataset.cartAddIngredient));
    })), true);

    const opener = dishes.locator('button.dish-opener:has(img)').first();
    const name = await opener.locator('.cart-dish-name').textContent();
    const modal = page.locator('#dtray');
    await opener.locator('img').tap();
    assert.equal(await modal.locator('h2').textContent(), name);
    const fromPhoto = await modal.locator('.dt-b').textContent();
    assert.equal(await modal.locator('.steps').getAttribute('open'), '');
    await modal.getByRole('button', {name: 'Close recipe'}).tap();
    await opener.locator('.cart-dish-name').tap();
    assert.equal(await modal.locator('.dt-b').textContent(), fromPhoto);
    await page.keyboard.press('Escape');
    await modal.waitFor({state:'hidden'});

    const before = await dishes.locator('.cart-dish-name').allTextContents();
    const firstNeeded = await dishes.first().locator('[data-cart-add-ingredient]').evaluateAll(buttons =>
      buttons.map(button => button.dataset.cartAddIngredient));
    await dishes.first().locator('.cart-add-dish').tap();
    const after = await dishes.locator('.cart-dish-name').allTextContents();
    assert.equal(after.includes(before[0]), false, 'selected dish disappears');
    assert.equal(new Set(after).size, await page.evaluate(() => cartDishes(Infinity).length));
    assert.ok(after.every(name => name !== before[0]), 'selected dish is removed without trimming the remaining suggestions');
    assert.equal(await page.locator('.cart-group').filter({hasText: before[0]}).count(), 1);
    assert.deepEqual(await page.evaluate(ids => ids.map(id => cartQuantity(id)), firstNeeded),
      firstNeeded.map(() => 1));
    assert.deepEqual(await page.evaluate(() => ['milk', 'ghee', 'sugar'].map(cartQuantity)), [1, 1, 1]);

    const partialName = await dishes.evaluateAll(cards => cards.find(card =>
      card.querySelectorAll('[data-cart-add-ingredient]').length === 2)?.querySelector('.cart-dish-name')?.textContent || '');
    assert.ok(partialName, 'a dish requiring two more items remains available');
    await dishes.filter({hasText: partialName}).locator('[data-cart-add-ingredient]').first().tap();
    assert.equal((await dishes.locator('.cart-dish-name').allTextContents()).includes(partialName), false);
    const partialGroup = page.locator('.cart-group').filter({hasText: partialName});
    assert.equal(await partialGroup.count(), 1);
    assert.equal(await partialGroup.locator('[data-cart-add-listed]').count(), 1,
      'the unadded ingredient stays accessible in the selected dish');

    const milkRow = page.locator('.cart-items [data-cart-item="milk"]').first();
    await milkRow.getByRole('button', {name: 'Increase quantity for Milk'}).tap();
    assert.equal(await milkRow.locator('output').textContent(), '2');

    const snapshot = () => page.locator('.cart-group').evaluateAll(groups => groups.map(group => ({
      name: group.querySelector('.cart-dish-name').textContent,
      rows: [...group.querySelectorAll('li')].map(row => [
        row.dataset.cartItem || row.querySelector('[data-cart-add-listed]').dataset.cartAddListed,
        Number(row.querySelector('output')?.textContent || 0)
      ])
    })));
    const saved = await snapshot();
    const pending = await partialGroup.locator('[data-cart-add-listed]').getAttribute('data-cart-add-listed');
    await page.reload({waitUntil: 'domcontentloaded'});
    await page.waitForFunction(() => window.MFREADY === true);
    await page.locator('.tabbar [data-view="order"]').tap();
    assert.deepEqual(await snapshot(), saved);
    const total = Number(await page.locator('#cbadge').textContent());
    await partialGroup.locator('[data-cart-add-listed]').tap();
    assert.equal(await partialGroup.locator('[data-cart-item="' + pending + '"] output').textContent(), '1');
    const rowCount = await partialGroup.locator('li').count();
    assert.equal(await partialGroup.locator('.cart-group-heading small').textContent(), rowCount+' of '+rowCount+' ingredients in cart');
    assert.equal(Number(await page.locator('#cbadge').textContent()), total + 1);
    assert.equal(await page.locator('.cart-items [data-cart-item="milk"]').first().locator('output').textContent(), '2');

    const order = page.getByRole('link', {name: 'Order from Blinkit'});
    assert.equal(await order.isVisible(), true);
    assert.equal(await order.getAttribute('href'), 'https://blinkit.com/');
    assert.equal(await page.locator('#cart > :last-child').textContent(), 'Order from Blinkit');
    assert.equal(await page.locator('#cartCard input, #cartCard li a').count(), 0);

    while (await page.locator('[data-cart-remove-dish]').count())
      await page.locator('[data-cart-remove-dish]').first().tap();
    const decrease = page.locator('[data-cart-quantity="-1"]');
    while (await decrease.count()) await decrease.first().tap();
    assert.equal(await page.locator('#cbadge').textContent(), '');
    assert.equal(await page.locator('#cartCount').textContent(), '');
    assert.equal(await order.count(), 0);
    assert.equal(await dishes.count(), await page.evaluate(() => cartDishes(Infinity).length), 'an empty cart offers all eligible shopping suggestions');
  } finally {
    await context.close();
  }
});

test('the home carousel rotates, supports manual navigation and opens Christmas recipes', async () => {
  const {page, context} = await open({width: 390, height: 844}, {reducedMotion: 'no-preference', hasTouch: true, serviceWorkers: 'block'});
  try {
    const dots = page.locator('.hero-dot');
    assert.equal(await dots.count(), 4);
    await page.waitForFunction(() => document.querySelectorAll('.hero-dot')[1].ariaCurrent === 'true');
    await page.waitForFunction(() => document.querySelectorAll('.hero-dot')[2].ariaCurrent === 'true');
    await dots.nth(0).tap();
    assert.equal(await dots.nth(0).getAttribute('aria-current'), 'true');

    await page.emulateMedia({reducedMotion: 'reduce'});
    await dots.nth(3).tap();
    await page.locator('#winter-link').tap();
    await page.locator('#winter-recipes article').first().waitFor();
    await page.locator('#winter-back').tap();
    await page.locator('#winter-page').waitFor({state:'hidden'});
    assert.deepEqual(await page.evaluate(() => MEALS.filter(m => m[0] === 'Oats Idli').map(recipeLabels)), [['South Indian', 'Kids Lunchbox']]);
    await dots.nth(2).tap();
    assert.equal(await dots.nth(2).getAttribute('aria-current'), 'true');
    await page.locator('.hero-christmas').tap({position:{x:340,y:40}});
    const collection = page.locator('#christmas-page');
    await collection.waitFor();
    assert.equal(new URL(page.url()).hash, '#christmas');
    const cards = collection.locator('article');
    assert.deepEqual((await cards.locator('h3').allTextContents()).sort(),
      await page.evaluate(() => MEALS.filter(m => m[8].includes('Christmas')).map(m => m[0]).sort()));
    assert.equal(await cards.count(), 12);
    const boxes = await cards.evaluateAll(nodes => nodes.slice(0,3).map(n => ({x:n.offsetLeft,y:n.offsetTop})));
    assert.equal(boxes[0].y, boxes[1].y);
    assert.ok(boxes[1].x > boxes[0].x && boxes[2].y > boxes[0].y);
    await page.waitForFunction(() => document.querySelectorAll('#christmas-recipes .recipe-photo').length === 12);
    await cards.first().locator('img').evaluate(img => img.decode());
    assert.equal(await page.locator('#planner').isVisible(), false);

    const cooler = cards.filter({hasText:'Christmas Orange Mint Cooler'});
    await page.evaluate(() => { have.orange = 1; delete have.mint; delete cart.mint; all(); });
    assert.match(await cooler.locator('p').first().innerText(), /Orange/i);
    await cooler.getByRole('button', {name:'Add missing ingredients'}).tap();
    assert.deepEqual(await page.evaluate(() => [cartQuantity('mint'), cartQuantity('orange')]), [1,0]);
    await cooler.getByRole('button', {name:'View recipe'}).tap();
    assert.equal(await page.locator('#dish-title').innerText(), 'Christmas Orange Mint Cooler');
    const modal = page.locator('#dtray');
    await modal.locator('[data-recipe-language="hi"]').tap();
    await page.waitForFunction(() => /\p{Script=Devanagari}/u.test(document.querySelector('#dtray .steps ol').textContent));
    assert.match(await modal.locator('.steps ol').innerText(), /[अ-ह]/);
    await modal.getByRole('button', {name:'English', exact:true}).tap();
    assert.equal(await modal.locator('.steps ol').locator('..').getAttribute('lang'), 'en');
    await page.locator('#dish-detail-close').tap();
    await collection.getByRole('button', {name:'Shopping list'}).tap();
    await page.locator('[data-vs="order"][role="dialog"]').waitFor();
    await page.keyboard.press('Escape');
    await page.reload();
    await collection.waitFor();
    assert.equal(await cooler.getByRole('button', {name:'Added ✓'}).isDisabled(), true);
    await collection.getByRole('link', {name:'Back to home'}).tap();
    await collection.waitFor({state:'hidden'});
    assert.equal(await page.locator('#rq').inputValue(), '');
    await page.goForward();
    await collection.waitFor();
    await page.goBack();
    await collection.waitFor({state:'hidden'});

    const audit = await page.evaluate(() => ({
      missing: SEASONAL_RECIPES.flatMap(recipe => recipe.pantry.filter(id => !NAME[id.replace(/\?$/, '')])),
      sindhi: MEALS.filter(recipe => regionOf(recipe) === 'Sindhi').map(recipe => recipe[0]),
    }));
    assert.deepEqual(audit.missing, []);
    assert.ok(audit.sindhi.includes('Dal Pakwan'));
    assert.ok(audit.sindhi.includes('Sai Bhaji'));
  } finally {
    await context.close();
  }
});

test('recipe selection preserves shared milk and decrementing to zero survives reload', async () => {
  const {page, context} = await open();
  try {
    await page.evaluate(() => {
      const halwa = MEALS.find(m => m[0] === 'Gajar Halwa');
      have = Object.fromEntries(requiredCartIngredients(halwa[5]).filter(id => id !== 'milk').map(id => [id, 1]));
      cart = {milk: 3};
      cartMeals = [{name: 'Milk for breakfast', ingredients: ['milk'], added: ['milk']}];
      all();
    });
    await page.locator('#rq').fill('gajar halwa');
    await page.locator('#results [data-recipe="Gajar%20Halwa"] > summary').first().click();
    const toggle = page.locator('#dtray [data-add="Gajar Halwa"]');
    assert.equal(await toggle.textContent(), 'Add dish to cart');
    await toggle.click();
    assert.equal(await toggle.textContent(), 'Added ✓');
    await toggle.click();
    await page.reload();
    await page.locator('.tabbar [data-view="order"]').click();
    const group = page.locator('.cart-group');
    assert.equal(await group.locator('.cart-dish-name').textContent(), 'Milk for breakfast');
    const decrease = group.locator('[data-cart-quantity="-1"]');
    for (const n of [3, 2, 1]) {
      assert.equal(await group.locator('output').textContent(), String(n));
      assert.equal(await page.locator('#cbadge').textContent(), String(n));
      await decrease.click();
    }
    await page.reload();
    await page.locator('.tabbar [data-view="order"]').click();
    assert.equal(await group.locator('[data-cart-add-listed]').getAttribute('data-cart-add-listed'), 'milk');
    assert.equal(await page.locator('#cartCount').textContent(), '');
    assert.equal(await page.locator('#cbadge').textContent(), '');
    assert.equal(await page.locator('.order-blinkit').count(), 0);
  } finally { await context.close(); }
});

test('cart recomputes exact alternatives under vegetarian and Christmas filters', async () => {
  const {page, context} = await open();
  try {
    await page.evaluate(() => {
      const dish = (name, ids, occasion = 'Christmas') => [name, 1, 5, 0, 0, ids, 'Everyday', 0, [occasion], ''];
      MEALS = [
        dish('Carrot dish', ['carrot', 'milk']), dish('Milk dish', ['milk']),
        dish('Holiday rice', ['milk', 'rice', 'peas']), dish('Egg curry', ['eggs']),
        dish('Daily oats', ['oats'], 'Daily')
      ];
      nonveg = false; OS = {Christmas: 1}; TS = {}; RS = {};
      have = {carrot: 1}; cart = {}; cartMeals = [];
      setView('order');
    });
    const cards = page.locator('.cart-dish-card');
    const choices = () => cards.evaluateAll(nodes => nodes.map(card => [
      card.querySelector('.cart-dish-name').textContent,
      [...card.querySelectorAll('[data-cart-add-ingredient]')].map(button => button.dataset.cartAddIngredient)
    ]));
    assert.deepEqual(await choices(), [['Carrot dish', ['milk']], ['Milk dish', ['milk']]]);
    await cards.first().locator('.cart-add-dish').click();
    assert.deepEqual(await choices(), [['Holiday rice', ['rice', 'peas']]]);
    await cards.first().locator('.cart-add-dish').click();
    assert.deepEqual(await choices(), []);
    assert.equal(await page.locator('.cart-group').count(), 2);
  } finally { await context.close(); }
});

test('v28 installed cart upgrades and can finish a saved dish offline', async () => {
  servePreviousRelease = true;
  let context;
  try {
    const opened = await open(); context = opened.context;
    const page = opened.page;
    await page.evaluate(() => navigator.serviceWorker.register('./sw.js'));
    await page.evaluate(() => navigator.serviceWorker.ready.then(() => true));
    await page.evaluate(() => caches.open('other-app-cache').then(() => true));
    await page.waitForFunction(() => !!navigator.serviceWorker.controller);
    assert.ok((await page.evaluate(() => caches.keys())).includes('hatri-v28-dynamic-cart-dishes'));
    await page.evaluate(() => {
      have = {carrot: 1}; cart = {milk: 2, ghee: 1};
      const recipe = MEALS.find(m => m[0] === 'Gajar Halwa');
      cartMeals = [{name: recipe[0], ingredients: requiredCartIngredients(recipe[5]), added: ['milk','ghee']}];
      all();
    });
    // Prior releases stored viewed recipe photos alongside the app shell.
    await page.evaluate(async () => {
      const photo = 'images/gajar-halwa.webp?v=38';
      const oldShell = await caches.open('hatri-v28-dynamic-cart-dishes');
      await oldShell.put(photo, await fetch(photo));
    });
    servePreviousRelease = false;
    await page.evaluate(async () => {
      const changed = new Promise(resolve => navigator.serviceWorker.addEventListener('controllerchange', resolve, {once:true}));
      await (await navigator.serviceWorker.ready).update();
      await changed;
      const worker = navigator.serviceWorker.controller;
      await new Promise(resolve => {
        const activated = () => { if (worker.state === 'activated') resolve(); };
        worker.addEventListener('statechange', activated);
        activated();
      });
    });
    const upgraded = await page.evaluate(() => caches.keys());
    assert.ok(upgraded.includes('other-app-cache'));
    assert.equal(upgraded.includes('hatri-v28-dynamic-cart-dishes'), false);
    await context.setOffline(true);
    await page.reload({waitUntil:'domcontentloaded'});
    await page.waitForFunction(() => window.MFREADY === true);
    await page.locator('.tabbar [data-view="order"]').click();
    const group = page.locator('.cart-group');
    assert.equal(await group.locator('.cart-dish-name').textContent(), 'Gajar Halwa');
    await group.locator('[data-cart-add-listed="sugar"]').click();
    assert.equal(await group.locator('[data-cart-item="milk"] output').textContent(), '2');
    assert.equal(await group.locator('[data-cart-item="sugar"] output').textContent(), '1');
    await group.locator('.dish-opener').click();
    assert.equal(await page.locator('#dtray h2').textContent(), 'Gajar Halwa');
    await page.locator('#dtray[open] .dt-photo img').evaluate(image => image.decode());
    assert.ok(await page.locator('#dtray .steps ol li').count() > 0);
  } finally { servePreviousRelease = false; await context?.close(); }
});

test('Hindi cart controls remain tappable at 320 and 390 pixels with a failed photo', async () => {
  for (const width of [320, 390]) {
    const {page, context} = await open({width, height: 844}, {isMobile: true, hasTouch: true, serviceWorkers: 'block'});
    try {
      await page.evaluate(() => {
        const recipe = MEALS.find(m => m[0] === 'Gajar Halwa');
        MEALS = [recipe];
        TS = {}; OS = {}; RS = {};
        have = {carrot: 1, sugar: 1}; cart = {}; cartMeals = [];
        IMG[pslug(recipe[0])] = 'missing-cart-regression.webp';
        setLang('hi'); setView('order');
      });
      const card = page.locator('.cart-dish-card');
      const photo = card.locator('.cart-thumbnail img');
      await card.scrollIntoViewIfNeeded();
      assert.equal(await photo.count(), 1);
      await photo.waitFor({state:'hidden'});
      assert.equal(await card.locator('.cart-thumbnail').isVisible(), true);
      await page.waitForFunction(() => document.querySelector('.cart-dish-name').textContent.includes('हलवा'));
      assert.match(await card.locator('.cart-dish-name').textContent(), /हलवा/);
      const buttons = card.locator('button');
      assert.equal(await buttons.count(), 4);
      for (const button of await buttons.all()) {
        await button.tap({trial:true});
        const rect = await button.boundingBox(), outer = await card.boundingBox();
        assert.ok(rect.x >= outer.x - 1 && rect.x + rect.width <= Math.min(width, outer.x + outer.width) + 1);
      }
      await card.locator('[data-cart-add-ingredient]').first().tap();
      await page.locator('.cart-group [data-cart-add-listed]').tap();
      assert.equal(await page.locator('.cart-group output').count(), 2);
    } finally { await context.close(); }
  }
});

async function openWinterCollection(page) {
  await page.getByRole('button', {name: 'Show winter recipes slide'}).click();
  await page.getByRole('link', {name: 'Winter recipes & soups'}).click();
}

test('winter collection registers 50 unique recipes with working images and pantry ingredients', async () => {
  const {page, context} = await open();
  try {
    await openWinterCollection(page);
    const winter = page.locator('#winter-page');
    await winter.waitFor();
    assert.equal(new URL(page.url()).hash, '#winter');
    assert.equal(await winter.locator('article').count(), 45);
    assert.equal(await winter.getByRole('heading', {name: 'Soups', exact: true}).count(), 1);
    await winter.getByLabel('Include meat and egg recipes').check();
    assert.equal(await winter.locator('article').count(), 50);

    await page.waitForFunction(() => WINTER_RECIPES.every(recipe => IMG[pslug(recipe.name)]));
    const audit = await page.evaluate(async () => {
      const groups = WINTER_RECIPES.map(recipe => MEALS.filter(m => m[0] === recipe.name));
      const missing = WINTER_RECIPES.flatMap(recipe => recipe.pantry.filter(id => !NAME[id.replace(/\?$/, '')]));
      const filenames = WINTER_RECIPES.map(recipe => photoSrc(IMG[pslug(recipe.name)]));
      const pictures = await Promise.all(filenames.map(async filename => {
        const photo = new Image();
        photo.src = filename;
        await photo.decode();
        return [photo.naturalWidth, photo.naturalHeight];
      }));
      return {
        counts: groups.map(group => group.length),
        missing,
        tagged: groups.every(group => group[0]?.[8].includes('Winter')),
        soups: WINTER_RECIPES.filter(recipe => recipe.soup).length,
        images: new Set(filenames).size,
        dimensions: pictures.every(([width, height]) => width >= 500 && height >= 500)
      };
    });
    assert.deepEqual(audit, {counts: Array(50).fill(1), missing: [], tagged: true,
      soups: 24, images: 50, dimensions: true});
    const soup = winter.locator('article').filter({has: page.getByRole('heading', {name: 'Carrot Ginger Soup', exact: true})});
    await soup.getByRole('button', {name: 'View recipe'}).click();
    await page.locator('#dtray[open]').waitFor();
    assert.match(await page.locator('#dish-detail-body').innerText(), /500 g carrots/);
    assert.match(await page.locator('#dish-detail-body').innerText(), /Simmer covered/);
    await page.locator('#dish-detail-close').click();
    await soup.getByRole('button', {name: 'Add missing ingredients'}).click();
    assert.equal(await soup.getByRole('button', {name: 'Added ✓'}).isDisabled(), true);
    await winter.getByRole('link', {name: 'Back to home'}).click();
    await winter.waitFor({state: 'hidden'});
    await page.goForward();
    await winter.waitFor();
  } finally {
    await context.close();
  }
});

test('activity writes are opt-in, scoped to the signed-in account and omit search text', async () => {
  const {page, context} = await open();
  try {
    // Exercise auth.js and activity.js together with a local Firebase transport.
    const modules = {
      'firebase-app.js': 'export const initializeApp = () => ({});',
      'firebase-auth.js': `
        const auth = { currentUser: { uid: "test-one" } };
        export const getAuth = () => auth, browserLocalPersistence = {}, setPersistence = async () => {};
        export const GoogleAuthProvider = class {}, signInWithPopup = async () => {}, connectAuthEmulator = () => {};
        export function onAuthStateChanged(auth, callback) {
          window.testAuth = uid => { auth.currentUser = uid ? { uid } : null; return callback(auth.currentUser); };
          window.testAuth(auth.currentUser.uid);
        }
        export const signOut = () => window.testAuth(null);
      `,
      'firebase-firestore.js': `
        window.activityWrites = [];
        export const getFirestore = () => ({}), doc = (db, ...path) => path;
        export const getDoc = async () => ({exists: () => false});
        export const serverTimestamp = () => "server-time", Timestamp = { fromMillis: millis => millis };
        export const collection = () => ({}), addDoc = async () => ({id: "test-video"});
        export const limit = value => value, onSnapshot = () => () => {}, orderBy = value => value;
        export const query = (...values) => values, connectFirestoreEmulator = () => {};
        export const setDoc = async (path, data) => {
          if (path[2] === "activityEvents") window.activityWrites.push({path, data});
        };
      `
    };
    await context.route('https://www.gstatic.com/firebasejs/**', route => {
      const filename = new URL(route.request().url()).pathname.split('/').at(-1);
      return route.fulfill({contentType: 'text/javascript', headers: {'Access-Control-Allow-Origin': '*'}, body: modules[filename]});
    });
    await page.reload({waitUntil: 'domcontentloaded'});
    await page.waitForFunction(() => typeof window.testAuth === 'function');

    const profile = page.locator('[data-rr-profile-open]');
    const consent = page.getByLabel('Share activity to help improve Hatri');
    await profile.click();
    assert.equal(await consent.isChecked(), false);
    assert.deepEqual(await page.evaluate(() => activityWrites), []);
    await consent.check();
    await page.getByRole('button', {name: 'Close profile'}).click();
    await page.locator('#rq').fill('test-only search text');
    await page.waitForFunction(() => activityWrites.some(({data}) => data.event === 'recipe_search'));
    await page.locator('#rq').fill('');
    await openWinterCollection(page);
    await page.locator('#winter-recipes').getByRole('button', {name: 'View recipe'}).first().click();
    const records = await page.evaluate(() => activityWrites);
    assert.deepEqual(records.map(({data}) => [data.event, data.surface, data.detail]), [
      ['page_view', 'recipes', ''], ['recipe_search', 'recipes', ''],
      ['page_view', 'winter', ''], ['recipe_open', 'winter', 'roasted-cauliflower-soup']
    ]);
    assert.ok(records.every(({path, data}, index) =>
      path.join('/') === `users/test-one/activityEvents/${records[0].data.sessionId}-${index + 1}`
      && data.createdAt === 'server-time' && data.expiresAt > Date.now()
    ));
    await page.locator('#dish-detail-close').click();
    await page.locator('#winter-back').click();
    await profile.click();
    await consent.uncheck();
    const beforeOptOut = await page.evaluate(() => activityWrites.length);
    await page.getByRole('button', {name: 'Close profile'}).click();
    await openWinterCollection(page);
    await page.evaluate(() => testAuth('test-two'));
    await page.locator('#winter-back').click();
    await profile.click();
    assert.equal(await consent.isChecked(), false);
    assert.equal(await page.evaluate(() => activityWrites.length), beforeOptOut);
  } finally {
    await context.close();
  }
});
