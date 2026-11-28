/* Static and isolated-function checks: run without a browser.
 * Run: node --test tests/static-regression.cjs
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');
const src = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const desiSrc = fs.readFileSync(path.resolve(__dirname, '../desi-recipes.js'), 'utf8');
const sw = fs.readFileSync(path.resolve(__dirname, '../sw.js'), 'utf8');

function fn(start, end, globals = {}) {
  const from = src.indexOf(start), to = src.indexOf(end, from + start.length);
  assert.ok(from >= 0 && to > from, `source range for ${start}`);
  const ctx = vm.createContext(globals);
  vm.runInContext(src.slice(from, to), ctx);
  return ctx;
}

test('category cards report catalog totals, not truncated suggestions or hidden advanced filters', () => {
  const recipes = [['Aloo Jeera',1], ['Egg Curry',0], ['Chole Bhature',1]];
  const c = fn('function categoryCounts(){', 'fit=function(', {
    MEALS:recipes, matchesModes:m=>!!m[1], matchesFilters:()=>false,
    dietCategory:m=>m[1]?'Veg':'NonVeg',
    cats:m=>m[0]==='Chole Bhature'?['Complete','Snack']:['Main'],
    wholeMealDish:()=>true,
  });
  const counts = c.categoryCounts();
  assert.equal(counts.all,2);
  assert.equal(counts.Veg,undefined,'diet is controlled by the header, not category cards');
  assert.equal(counts.NonVeg,undefined);
  assert.equal(counts.Main,1);
  assert.equal(counts.Snack,1);
  assert.equal(counts.Complete,1);
  assert.equal(counts.Main+counts.Snack,2,'all available recipes are included under dish types');

  const score = fn('function score(singleDishes){', 'function isLong(', {
    sel:{all:1},crs:'all',MEALS:recipes,matchesModes:m=>!!m[1],
    matchesFilters:()=>false,vratOnly:()=>false,dishState:m=>({n:m[0],x:[],h:[],tot:1}),
    fit:()=>0,hsh:()=>0,inSel:()=>false,
  });
  assert.deepEqual(Array.from(score.score(true),m=>m.n), ['Aloo Jeera','Chole Bhature']);
  score.sel={Main:1};
  assert.equal(score.score(true).length,0,'ordinary filtered suggestions still honor active filters');
});

test('the complete catalog and search results automatically render every batch, with a show-all fallback', () => {
  const c=fn('var DISH_BATCH=100,', 'function searchText(', {});
  assert.equal(c.dishPage('browse:all'),100);
  assert.match(c.dishPageFooter(100,1096), /data-load-more='1'/);
  assert.match(c.dishPageFooter(100,1096), /data-more-sentinel='1'/);
  assert.match(c.dishPageFooter(100,1096), /Show all 996 remaining dishes/);
  c.dishPageLimit+=100;
  assert.equal(c.dishPage('browse:all'),200);
  assert.equal(c.dishPage('search:paneer'),100,'a new query resets pagination');
  assert.equal(c.dishPageFooter(1096,1096),'');
  assert.match(src, /new IntersectionObserver\(function\(entries\)/);
  assert.doesNotMatch(src, /\["Veg","🥬 Vegetarian"\]|\["NonVeg","🍗 Non-vegetarian"\]/);
  assert.doesNotMatch(src, /DISH_LIMIT|MEAL_LIMIT/);
});

test('every inline script parses', () => {
  let count = 0;
  for (const match of src.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    new vm.Script(match[1]); count++;
  }
  assert.ok(count >= 10);
});

test('the app and recipe catalog use English source text with one runtime translator', () => {
  const context = {};
  new vm.Script(desiSrc);
  vm.runInNewContext(desiSrc.replace(/^const DESI_RECIPES/, 'DESI_RECIPES'), context);
  assert.equal(context.DESI_RECIPES.length, 72);
  const frontend = fs.readdirSync(path.resolve(__dirname, '..'))
    .filter(name => name.endsWith('-recipes.js') || ['recipe-details.js', 'hero-carousel.js'].includes(name));
  for (const name of frontend) {
    const code = fs.readFileSync(path.resolve(__dirname, '..', name), 'utf8');
    assert.doesNotMatch(code, /\p{Script=Devanagari}/u, name);
    assert.doesNotMatch(code, /translate\.googleapis\.com/, name);
  }
  const translation = fs.readFileSync(path.resolve(__dirname, '../translation.js'), 'utf8');
  new vm.Script(translation);
  assert.match(translation, /translate\.googleapis\.com\/translate_a\/single/);
  assert.match(translation, /const offline = new Map/);
  assert.match(translation, /seedCatalog\(recipes\)/);
  assert.doesNotMatch(src, /\p{Script=Devanagari}/u);
  assert.match(src, /<script src="\.\/translation\.js"><\/script>/);
  const legacy = fs.readFileSync(path.resolve(__dirname, '../Raman_Rasoi_Google_Login_Configured/index.html'), 'utf8');
  assert.doesNotMatch(legacy, /\p{Script=Devanagari}/u);
  assert.match(legacy, /import\(translationUrl.href\)/);
});

test('meal pairing rules exclude incompatible sauces and cross-cuisine staples', () => {
  const c = fn('function pairOK(', 'function mealTime(', {
    course: n => /Roti|Chapati|Bread|Paratha/.test(n) ? 'Bread' : /Sauce|Soup/.test(n) ? 'Side' : 'Main',
    REG: ['Rajasthani','Punjabi'], regionOf: () => 'Italian', onlyV: () => false,
    isV: () => false
  });
  const main = { n: 'Kurkuri Bhindi', cu: 'Rajasthani' };
  assert.equal(c.pairOK(main, {n: 'Pizza Sauce', cu: 'Italian'}), false);
  assert.equal(c.pairOK(main, {n: 'Italian Garlic Bread', cu: 'Italian'}), false);
  assert.equal(c.pairOK({n: 'Sarson da Saag', cu: 'Punjabi'}, {n: 'Makki di Roti', cu: 'Punjabi'}), true);
  assert.equal(c.pairOK(main, {n: 'Carrot Paratha',cu:'International / National'}), true);
  assert.equal(c.pairOK(main, {n: 'Beetroot Paratha',cu:'International / National'}), true);
});

test('whole meals exhaust distinct courses before reusing any dish', () => {
  const dishes = [];
  for (const [role, count] of Object.entries({Main: 8, Bread: 4, Rice: 4, Raita: 2, Sweet: 4, Salad: 1})) {
    for (let i = 1; i <= count; i++) {
      dishes.push({n: role + ' ' + i, ing: ['curd'], recipe: {}, x: [], p: 1, c: 1});
    }
  }
  dishes.push({...dishes.find(d => d.n === 'Raita 1'), n: 'RAITA 1'});
  const c = fn('function mealTime(', 'function mealTileHTML(', {
    score: () => dishes, course: name => name.split(' ')[0], isLong: () => false,
    pairOK: () => true, regionOf: () => 'Punjabi', REG: ['Punjabi'], INTL: 'International',
    tmax: 0, fitsTime: () => true, wProt: false, wSide: true, pslug: n => n.toLowerCase()
  });
  const meals = c.buildMeals();
  assert.equal(meals.length, 4,'continue with four-dish sets once the curd course runs out');
  assert.deepEqual(Array.from(meals,meal=>meal.items.length),[6,6,4,4]);
  const keys = meals.flatMap(meal => meal.items.concat(meal.salad || []).map(d => c.pslug(d.n)));
  assert.equal(keys.length, 21);
  assert.equal(new Set(keys).size, keys.length);

  for (const role of ['Main', 'Bread', 'Rice', 'Raita', 'Sweet']) {
    const count = role === 'Main' ? 104 : 52;
    for (let i = 0; i < count; i++) {
      dishes.push({n: role + ' extra ' + i, ing: ['curd'], recipe: {}, x: [], p: 1, c: 1});
    }
  }
  assert.ok(c.buildMeals().length > 50, 'the available complete meals are not cut off at 50');
});

test('whole meals fall back from six to five and finally four dishes without repeating recipes', () => {
  const dishes=[];
  for (const [role,count] of Object.entries({Main:10,Bread:5,Rice:1,Raita:2,Sweet:5})) {
    for(let n=0;n<count;n++)dishes.push({n:role+' '+n,ing:['curd'],recipe:{},x:[],p:1,c:1});
  }
  const c=fn('function mealTime(', 'function mealTileHTML(', {
    score:()=>dishes,course:name=>name.split(' ')[0],isLong:()=>false,
    pairOK:()=>true,regionOf:()=> 'Punjabi',REG:['Punjabi'],INTL:'International',
    tmax:0,fitsTime:()=>true,wProt:false,wSide:false,
    pslug:name=>name.toLowerCase()
  });
  const meals=c.buildMeals();
  assert.deepEqual(Array.from(meals,meal=>meal.items.length),[6,5,4,4,4]);
  const all=meals.flatMap(m=>m.items.map(d=>d.n));
  assert.equal(new Set(all).size,all.length);
  for(const meal of meals){
    assert.equal(meal.items.filter(d=>d.n.startsWith('Main ')).length,2);
    assert.equal(meal.items.filter(d=>d.n.startsWith('Bread ')).length,1);
    assert.equal(meal.items.filter(d=>d.n.startsWith('Sweet ')).length,1);
    assert.equal(meal.items.filter(d=>d.n.startsWith('Rice ')).length,meal.items.length===6?1:0);
    assert.equal(meal.items.filter(d=>d.n.startsWith('Raita ')).length,meal.items.length>=5?1:0);
  }
});

test('whole meals retry a faster accompaniment when the first choice cannot complete six courses', () => {
  const item = (name, prep, missing = []) => ({n:name, ing:['curd'], recipe:{}, x:missing, p:prep, c:1});
  const dishes = [item('Main A',1),item('Main B',1),item('Bread Slow',7),
    item('Bread Fast',1,['tomato']),item('Rice A',1),item('Raita A',1),item('Sweet A',1)];
  const c=fn('function mealTime(', 'function mealTileHTML(', {
    score:()=>dishes,course:name=>name.split(' ')[0],isLong:()=>false,
    pairOK:()=>true,regionOf:()=> 'Punjabi',REG:['Punjabi'],INTL:'International',
    tmax:10,fitsTime:minutes=>minutes<=10,wProt:false,wSide:false,
    pslug:name=>name.toLowerCase()
  });
  const meals=c.buildMeals();
  assert.equal(meals.length,1,'try another bread instead of silently losing the whole meal');
  assert.equal(meals[0].items[2].n,'Bread Fast');
  assert.equal(new Set(meals[0].items.map(d=>d.n)).size,6);
});

test('whole meals search beyond six cheap but incompatible rice choices', () => {
  const item=(name,prep,missing=[])=>({n:name,ing:['curd'],recipe:{},x:missing,p:prep,c:1});
  const dishes=[item('Main A',1),item('Main B',1),item('Bread A',1),
    ...Array.from({length:6},(_,i)=>item('Rice Slow '+i,5)),
    item('Rice Fast',1,['tomato']),item('Raita A',1),item('Sweet A',1)];
  const c=fn('function mealTime(', 'function mealTileHTML(', {
    score:()=>dishes,course:name=>name.split(' ')[0],isLong:()=>false,
    pairOK:()=>true,regionOf:()=> 'Punjabi',REG:['Punjabi'],INTL:'International',
    tmax:10,fitsTime:minutes=>minutes<=10,wProt:false,wSide:false,
    pslug:name=>name.toLowerCase()
  });
  const meals=c.buildMeals();
  assert.equal(meals.length,1,'the seventh viable option must not be silently excluded');
  assert.equal(meals[0].items[3].n,'Rice Fast');
});

test('whole meals reallocate scarce region-compatible rice to maximize complete meals', () => {
  const item=(name,region,missing=[])=>({n:name,ing:['curd'],recipe:{region},cu:region,x:missing,p:1,c:1});
  const dishes=[item('Main A1','A'),item('Main A2','A'),item('Main B1','B'),item('Main B2','B'),
    item('Rice Universal','Everyday'),item('Rice A','A'),item('Bread A','A'),item('Bread B','B'),
    item('Raita A','A'),item('Raita B','B'),item('Sweet A','A'),item('Sweet B','B')];
  const c=fn('function mealTime(', 'function mealTileHTML(', {
    score:()=>dishes,course:name=>name.split(' ')[0],isLong:()=>false,
    pairOK:(main,dish,role)=>role!=='Rice'||dish.n!=='Rice A'||main.recipe.region==='A',
    regionOf:recipe=>recipe.region,REG:['A','B'],INTL:'International',
    tmax:0,fitsTime:()=>true,wProt:false,wSide:false,
    pslug:name=>name.toLowerCase()
  });
  const meals=c.buildMeals();
  assert.equal(meals.length,2,'reserve the region-specific rice for its only valid main pair');
  assert.equal(new Set(meals.flatMap(m=>m.items.map(d=>d.n))).size,12);
  assert.ok(meals.every(meal=>meal.items.slice(0,2).every(d=>d.recipe.region===meal.theme)));
});

test('diet, search, unlimited shopping suggestions and clear-all code guards are present', () => {
  assert.match(src, /NV=\[[^\]]*"chickenstock"/);
  assert.match(src, /return sel\.all\?matchesModes\(m\):matchesFilters\(m,false\);/);
  assert.match(src, /body\.classList\.toggle\("searching",!!rq\)/);
  assert.match(src, /cartDishes\(Infinity\)/);
  assert.match(src, /L\.slice\(0,visible\)/);
  assert.match(src, /else if\(v==="#none"\)Object\.keys\(st\)/);
  assert.doesNotMatch(src, /if\(!anyOn\(st\)\)selAll\(k\)\}\}\}catch/);
});

test('a whole meal can take a faster bread when the most pantry-friendly choice is too slow', () => {
  const dishes = [
    ['Main A',5,[]],['Main B',5,[]],['Bread Slow',30,[]],['Bread Fast',5,['atta']],
    ['Rice One',5,[]],['Raita One',5,[]],['Sweet One',5,[]],
  ].map(([n,p,x]) => ({n,p,x,c:0,ing:['curd'],recipe:{}}));
  const ctx=fn('function mealTime(', 'function mealTileHTML(', {
    score:()=>dishes,course:name=>name.split(' ')[0],isLong:()=>false,
    pairOK:()=>true,regionOf:()=>'Punjabi',REG:['Punjabi'],INTL:'International',
    tmax:40,fitsTime:time=>time<=40,wProt:false,wSide:false,pslug:name=>name.toLowerCase()
  });
  const [meal]=ctx.buildMeals();
  assert.equal(meal.t,30);
  assert.equal(meal.items[2].n,'Bread Fast');
});

test('vegetarian panna cotta guidance excludes animal gelatin', () => {
  const eggless = src.match(/\["Eggless Panna Cotta"[^\n]*/)?.[0] || '';
  const mango = src.match(/\["Mango Panna Cotta"[^\n]*/)?.[0] || '';
  for (const recipe of [eggless, mango]) {
    assert.ok(recipe.includes('agar-agar'));
    assert.ok(recipe.includes('never') || recipe.includes('not animal'));
    assert.ok(!recipe.includes('or gelatin'));
  }
});

test('Gajar Halwa has needed sugar and an explicit English recipe', () => {
  assert.match(src, /\["Gajar Halwa",1,20,45,0,\["carrot","milk","ghee","sugar"/);
  assert.match(src, /STEPS\["Gajar Halwa"\]=\{"en":\[/);
});

test('pantry image fallback and grocery-style grain category exist', () => {
  assert.match(src, /class='pantry-fallback'/);
  assert.match(src, /document\.addEventListener\("error",function\(e\)/);
  assert.match(src, /"Atta, Rice & Dal":\[\]/);
  assert.match(src, /\.pantry-photo:focus-visible/);
});

test('pantry retains the existing subcategory pills with four produce groups and grocery subcategories', () => {
  assert.match(src, /"Vegetables & Fruits":\[\]/);
  const expected={
    'Vegetables & Fruits':['Fresh Vegetables','Fresh Fruits','Coriander & Others','Exotics'],
    'Atta, Rice & Dal':['Rice & Poha','Dal & Pulses','Atta & Flours','Grains & Staples','Noodles & Batters'],
    'Oil, Ghee & Masala':['Oil & Ghee','Ground Masala','Khada Masala','Kitchen Basics'],
    'Dairy & Bread':['Milk & Dairy','Paneer & Cheese','Bread & Flatbreads','Plant Proteins','Eggs']
  };
  const section=src.slice(src.indexOf('var PANTRY_SUBCATEGORIES='),src.indexOf('function pantrySubcategory('));
  for(const [category,subgroups] of Object.entries(expected)){
    const ctx={};vm.runInNewContext(section,ctx);
    assert.deepEqual(Array.from(ctx.PANTRY_SUBCATEGORIES[category]),subgroups,category);
  }
  assert.ok(!expected['Vegetables & Fruits'].includes('Seasonal'));
  assert.match(src, /subgroups=\(PANTRY_SUBCATEGORIES\[c\[0\]\]\|\|\[\]\)/);
  assert.match(src, /data-pantry-sub/);
  assert.match(src, /pantrySubcategory\(c\[0\],x\[0\]\)===chosen/);
  assert.match(src, /class='ft/);
  assert.match(src, /class='pantry-subtabs'/);
});

test('pantry mapping places essential groceries correctly and preserves unique ingredient IDs', () => {
  const example = [
    ['Daily vegetables', [['potato','Potato'], ['tomato','Tomato'], ['broccoli','Broccoli']]],
    ['Fruits & coconut', [['apple','Apple'], ['banana','Banana']]],
    ['Herbs, chillies & aromatics', [['coriander','Coriander']]],
    ['Grains & flours', [['bajra','Bajra flour'], ['rice','Rice'], ['bread','Bread']]],
    ['Dairy', [['milk','Milk'], ['eggs','Eggs'], ['ghee','Ghee']]],
    ['Kitchen basics & spices', [['greenchutney','Green chutney'], ['cumin','Cumin']]],
    ['Non-veg — eggs, meat & fish', [['chicken','Chicken'], ['fish','Fish']]]
  ];
  const c = fn('/* ===== Smart pantry groups ===== */','function pantryGroupLabel(', {
    CATS: example, NAME:{}, NV:['eggs','chicken','fish']
  });
  const lookup = Object.fromEntries(c.CATS.flatMap(group => group[1].map(item => [item[0],group[0]])));
  assert.equal(Object.keys(lookup).length,16);
  assert.equal(lookup.potato,'Vegetables & Fruits');
  assert.equal(lookup.apple,'Vegetables & Fruits');
  assert.equal(lookup.coriander,'Vegetables & Fruits');
  assert.equal(lookup.rice,'Atta, Rice & Dal');
  assert.equal(lookup.bajra,'Atta, Rice & Dal');
  assert.equal(lookup.ghee,'Oil, Ghee & Masala');
  assert.equal(lookup.cumin,'Oil, Ghee & Masala');
  assert.equal(lookup.greenchutney,'Sauces & Spreads');
  assert.equal(lookup.milk,'Dairy & Bread');
  assert.equal(lookup.eggs,'Dairy & Bread');
  assert.equal(lookup.chicken,'Meat & Fish');
  assert.equal(lookup.fish,'Meat & Fish');
  assert.equal(c.CATS.find(g => g[0]==='Meat & Fish')[3],1);
});

test('every core pantry item maps to one relevant subcategory and similar produce stays adjacent', () => {
  const base=src.slice(src.indexOf('var CATS=['),src.indexOf('var NAME={}'));
  const classifier=src.slice(src.indexOf('/* ===== Smart pantry groups ===== */'),src.indexOf('function pantryGroupLabel('));
  const ctx=vm.createContext({NAME:{},NV:['eggs','chicken','fish','mutton','prawn']});
  vm.runInContext(base+classifier,ctx);
  const subsection=src.slice(src.indexOf('var PANTRY_SUBCATEGORIES='),src.indexOf('function renderPantrySlides'));
  vm.runInContext(subsection,ctx);
  const sub=(group,id)=>ctx.pantrySubcategory(group,id);
  for(const category of ctx.CATS){
    if(!ctx.PANTRY_SUBCATEGORIES[category[0]])continue;
    for(const [id] of category[1])assert.ok(ctx.PANTRY_SUBCATEGORIES[category[0]].includes(sub(category[0],id)),`${id}: ${category[0]}`);
  }
  assert.equal(sub('Vegetables & Fruits','cauliflower'),'Fresh Vegetables');
  assert.equal(sub('Vegetables & Fruits','peas'),'Fresh Vegetables');
  assert.equal(sub('Vegetables & Fruits','mango'),'Fresh Fruits');
  assert.equal(sub('Vegetables & Fruits','garlic'),'Coriander & Others');
  assert.equal(sub('Vegetables & Fruits','mushroom'),'Exotics');
  assert.equal(sub('Atta, Rice & Dal','rice'),'Rice & Poha');
  assert.equal(sub('Atta, Rice & Dal','toor'),'Dal & Pulses');
  assert.equal(sub('Atta, Rice & Dal','bajra'),'Atta & Flours');
  assert.equal(sub('Oil, Ghee & Masala','ghee'),'Oil & Ghee');
  assert.equal(sub('Oil, Ghee & Masala','redchillipowder'),'Ground Masala');
  assert.equal(sub('Oil, Ghee & Masala','cuminseeds'),'Khada Masala');
  assert.equal(sub('Dairy & Bread','milk'),'Milk & Dairy');
  assert.equal(sub('Dairy & Bread','paneer'),'Paneer & Cheese');
  assert.equal(sub('Dairy & Bread','bread'),'Bread & Flatbreads');
  assert.equal(sub('Dairy & Bread','eggs'),'Eggs');
  const produce=ctx.CATS.find(g=>g[0]==='Vegetables & Fruits')[1];
  produce.push(['pearlonion','Pearl onions'],['springonion','Spring onions']);
  ctx.pantrySortItems('Vegetables & Fruits',produce);
  assert.deepEqual(Array.from(produce.slice(0,3),item=>item[0]),['onion','pearlonion','springonion']);
  assert.match(src, /CATS\.filter\(function\(c\)\{return nonveg\|\|!c\[3\]\}\)/,
    'the main pantry must also hide the meat group in vegetarian mode');
});

test('raw potato and bajra flour replace prepared pantry items with explicit cooking steps', () => {
  const load=(file,name,variable)=>{
    const js=fs.readFileSync(path.resolve(__dirname,'..',file),'utf8');
    const c={};vm.runInNewContext(js+`\nthis.recipe=${variable}.find(r=>r.name===${JSON.stringify(name)});`,c);
    return c.recipe;
  };
  const bajra=load('rajasthani-recipes.js','Bajra Churma','RAJASTHANI_RECIPES');
  const kachori=load('street-food-recipes.js','Raj Kachori Chaat','STREET_FOOD_RECIPES');
  const puff=load('desi-recipes.js','Achari Aloo Puff','DESI_RECIPES');
  assert.ok(bajra.pantry.includes('bajra')&&!bajra.pantry.includes('cookedbajraroti'));
  assert.match(bajra.steps.en.join(' '),/Cook each roti.*Rest uncovered for 5 minutes/);
  for(const recipe of [kachori,puff]){
    assert.ok(recipe.pantry.includes('potato')&&!recipe.pantry.includes('boiledpotato'));
    assert.match(recipe.steps.en[0],/Boil the raw potato/);
    assert.ok(recipe.cook>=25);
  }
  assert.ok(kachori.pantry.includes('cookedchickpeas'),
    'chaat uses the distinct, explicitly ready-to-eat chickpea product');
  assert.doesNotMatch(src,/\["boiledpotato","Boiled potato"\]/);
  const northJs=fs.readFileSync(path.resolve(__dirname,'../north-chaat-recipes.js'),'utf8');
  const north={};vm.runInNewContext(northJs+'\nthis.recipes=NORTH_CHAAT_CATALOG;',north);
  for(const recipe of north.recipes){
    assert.equal(new Set(recipe.pantry).size,recipe.pantry.length,recipe.name);
    assert.ok(!recipe.pantry.includes('boiledpotato'),recipe.name);
    if(recipe.steps.en.length>1)assert.match(recipe.steps.en[0],/^Boil the raw potatoes/);
  }
});

test('cart suggestions prefer recipes that need fewer extra ingredients and use more of the cart', () => {
  const recipes = [
    ['Fully covered', true, 10, 0, 0, ['tomato']],
    ['Still missing', true, 5, 0, 0, ['tomato', 'onion', 'paneer']],
    ['Covered by pantry and cart', true, 15, 0, 0, ['tomato', 'onion', 'rice', 'garlic?']],
    ['Two more', true, 20, 0, 0, ['paneer', 'lemon']],
    ['Excluded by filters', false, 1, 0, 0, ['tomato', 'onion']],
    ['Optional only', true, 1, 0, 0, ['rice', 'tomato?']],
  ];
  const c = fn('function requiredCartIngredients(', 'function cartDishCard(', {
    MEALS: recipes, cart: { tomato: 1, onion: 1 }, have: { rice: 1 }, cartMeals: [],
    matchesFilters: recipe => recipe[1], effP: recipe => recipe[2],
  });
  const matches = c.cartDishes(4);
  const match = matches[0];
  assert.deepEqual(Array.from(matches, dish => dish.name), ['Still missing', 'Two more']);
  assert.equal(match.missing, 1);
  assert.deepEqual([...match.ingredients], ['paneer']);
  c.have = {};
  assert.equal(c.cartDishes(4)[0].name, 'Still missing');
  c.cart = { carrot: 1 };
  assert.deepEqual(Array.from(c.cartDishes(4), dish => dish.name).sort(), ['Fully covered', 'Optional only', 'Two more']);
});

test('adding all recipe ingredients preserves existing and legacy cart quantities', () => {
  const c = fn('function requiredCartIngredients(', 'function changeCartQuantity(', {
    cart: { tomato: 3, rice: true }, have: {}, cartMeals: [], all: () => {},
  });
  assert.equal(c.cartQuantity('rice'), 1);
  c.toggleRecipeIngredients(['tomato', 'onion']);
  assert.deepEqual(c.cart, { tomato: 3, rice: true, onion: 1 });
  c.toggleRecipeIngredients(['tomato', 'onion']);
  assert.deepEqual(c.cart, { rice: true });
});

test('PWA registers offline worker and caches the required shell files', () => {
  assert.match(src, /navigator\.serviceWorker\.register\("\.\/sw\.js"\)/);
  assert.match(sw, /const CACHE = 'hatri-v\d+[^']*'/);
  assert.match(sw, /'\.\/hindi-catalog\.js'/);
  assert.ok(sw.includes("'./translation.js'"));
  for (const item of ['preferences.js','auth.js','recipe-reels.js','ingredient-images.js','recipe-details.js','index.html','manifest.webmanifest','images/hatri-pantry-header.webp','seasonal-recipes.js','winter-recipes.js','desi-recipes.js','additional-recipes.js','activity.js','international-recipes.js','hero-carousel.js','images/hatri-dinner-header.webp','images/hatri-christmas-header.webp','images/mushroom-barley-soup.webp']) assert.ok(sw.includes(`'./${item}'`));
  new vm.Script(sw);
});

test('cloud preferences ignore and omit saved heaviness selections', () => {
  for (const folder of ['..', '../Raman_Rasoi_Google_Login_Configured']) {
    const auth = fs.readFileSync(path.resolve(__dirname, folder, 'auth.js'), 'utf8');
    const start = auth.indexOf('function localSnapshot()');
    const end = auth.indexOf('function queueSave()', start);
    assert.ok(start >= 0 && end > start);
    const core = { have: { paneer: 1 } };
    const filters = { r: { 'North Indian': 1 }, o: { Festive: 1 }, t: { t3: 1 } };
    const window = {
      applyState: state => assert.deepEqual(state, core),
      stateObj: () => core,
      migrateWinterOccasion() {}, syncT() {}, saveF() {}, all() {},
    };
    const context = vm.createContext({ window });
    vm.runInContext(fs.readFileSync(path.resolve(__dirname, '../preferences.js'), 'utf8'), context);
    vm.runInContext(auth.slice(start, end), context);
    context.applyCloud({
      core, filters: { ...filters, h: { Light: 1 } },
      choices: { occasion: 'Festive', heaviness: 'Light' },
    });
    assert.equal('HS' in window || 'hv' in window, false);
    const saved = JSON.parse(JSON.stringify(context.localSnapshot()));
    const expected = folder === '..' ? { ...filters, winter: true } : filters;
    assert.deepEqual(saved.filters, expected);
    assert.deepEqual(saved.choices, { occasion: 'Festive' });
  }
});

test('community video feed keeps media out of Firestore and enforces its upload contract', () => {
  const reels = fs.readFileSync(path.resolve(__dirname, '../recipe-reels.js'), 'utf8');
  const rules = fs.readFileSync(path.resolve(__dirname, '../firestore.rules'), 'utf8');
  const storage = fs.readFileSync(path.resolve(__dirname, '../storage.rules'), 'utf8');
  assert.match(src, /id="reels-page"/);
  assert.match(reels, /collection\(db,\s*'publicRecipeVideos'\)/);
  assert.match(reels, /MAX_BYTES = 100 \* 1024 \* 1024/);
  assert.match(reels, /where\('status','==','published'\).*limit\(30\)/);
  assert.match(src, /id="reels-recipe-input"[^>]*list="reels-recipe-options"/);
  assert.match(src, /body\[data-v="reels"\]:not\(\[class\*="sh-"\]\)>\.tabbar\{display:flex!important/);
  assert.match(reels, /tile\.dataset\.openDish = String\(recipe\.index\)/);
  assert.match(reels, /document\.getElementById\('dtray'\)\.addEventListener\('close'/);
  const backend = fs.readFileSync(path.resolve(__dirname,'../functions/index.cjs'),'utf8');
  assert.match(backend,/title,recipeName,caption,credit,subtitles,subtitleLanguage/);
  assert.match(backend,/validated\(reelRecipe,request\.data\)/);
  const auth = fs.readFileSync(path.resolve(__dirname, '../auth.js'), 'utf8');
  assert.match(auth, /connectAuthEmulator\(auth, `http:\/\/\$\{location\.hostname\}:9099`/);
  assert.match(auth, /connectFirestoreEmulator\(database, location\.hostname, 8080\)/);
  assert.match(rules, /match \/publicRecipeVideos\/{videoId}/);
  assert.match(rules, /allow get: if resource\.data\.version == 2 && resource\.data\.status == 'published'/);
  assert.match(storage, /allow read, write: if false/);
});

test('the first-render recipe photo paths match the published photo index', () => {
  const catalog = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../images/photos.json')));
  const ctx = fn('var photoAliases=', 'function slug(n)');
  for (const [slug, filename] of Object.entries(catalog)) {
    assert.equal(ctx.bundledPhotoPath(slug), 'images/' + filename);
  }
});

test('all mapped recipe photos and local ingredient photos exist', () => {
  const photos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../images/photos.json')));
  // Sparse test checkouts leave most photo blobs out of the working tree.
  let tracked = new Set();
  try {
    tracked = new Set(execFileSync('git', ['ls-tree', '-r', '--name-only', 'HEAD', 'images'],
      {cwd: path.resolve(__dirname, '..'), encoding: 'utf8'}).trim().split('\n'));
  } catch { /* Full release ZIPs do not necessarily have git metadata. */ }
  let count = 0;
  for (const image of Object.values(photos)) {
    if (typeof image !== 'string' || !image.includes('.webp')) continue;
    const candidate = path.resolve(__dirname, '../images', image);
    assert.ok(fs.existsSync(candidate) || tracked.has(`images/${image}`), `Missing ${image}`);
    count++;
  }
  assert.ok(count > 500);
});

test('a failed photo decode can replace a bad cached image and reuse the repaired copy', async () => {
  const scope = 'https://example.org/hatri/';
  const src = scope + 'images/paneer-pulao.webp?v=38';
  const entries = new Map([[src, new Response('old')]]), handlers = {};
  const cache = {match: async key => entries.get(key)?.clone(), put: async (key, response) => entries.set(key, response),
    keys: async () => [...entries.keys()].map(key => new Request(key))};
  let downloads = 0;
  vm.runInNewContext(sw, {
    URL, self: {registration: {scope}, location: new URL(scope), addEventListener: (name, cb) => { handlers[name] = cb; }},
    caches: {open: async () => cache, match: async () => undefined},
    fetch: async (req, options) => {
      downloads++;
      assert.equal(options.cache, 'reload');
      return new Response('fresh', {headers: {'Content-Type':'image/webp'}});
    }
  });
  function request(url) {
    let result;
    handlers.fetch({request: new Request(url), respondWith: value => { result = value; }});
    return result;
  }
  assert.equal(await (await request(src)).text(), 'old');
  assert.equal(await (await request(src + '&photo-retry=1')).text(), 'fresh');
  assert.equal(await (await request(src)).text(), 'fresh');
  assert.equal(downloads, 1);
});

test('the service worker falls back on a server outage and leaves unrelated navigation alone', async () => {
  const scope='https://example.test/hatri/';
  const handlers={};
  let writes=0;
  vm.runInNewContext(sw,{
    URL,self:{registration:{scope},location:new URL(scope),addEventListener:(name,callback)=>{handlers[name]=callback}},
    caches:{open:async()=>({match:async()=>new Response('Hatri shell'),put:async()=>{writes++}})},
    fetch:async()=>new Response('Maintenance',{status:503}),
  });
  const navigate=relative=>{
    let response;
    handlers.fetch({request:{method:'GET',mode:'navigate',url:new URL(relative,scope).href},respondWith:value=>{response=value}});
    return response;
  };
  assert.equal(await (await navigate('?reels=1')).text(),'Hatri shell');
  assert.equal(navigate('legacy/index.html'),undefined);
  assert.equal(writes,0);
});

test('every catalog image has a unique slot in the shared WebP preview', () => {
  const { mealPhotoPreviews, mealPreviewSize, mealPreviewColumns, mealPreviewRows, mealPreviewAsset } =
    fn('var mealPreviewSize=', 'var bundledPhotos=');
  const catalog = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../images/photos.json')));
  const paths = [...new Set(Object.values(catalog))].sort().map(filename => 'images/' + filename);
  assert.deepEqual(Object.entries(mealPhotoPreviews), paths.map((filename, i) => [filename, i]));
  assert.equal(mealPreviewSize, 72);
  assert.equal(mealPreviewRows, Math.ceil(paths.length / mealPreviewColumns));
  const atlas = fs.readFileSync(path.resolve(__dirname, '../images/meal-previews.webp'));
  assert.equal(atlas.toString('ascii', 8, 12), 'WEBP');
  assert.equal(atlas.readUInt32LE(4) + 8, atlas.length);
  const revision = require('node:crypto').createHash('sha256').update(atlas).digest('hex').slice(0, 12);
  assert.equal(mealPreviewAsset, `./images/meal-previews.webp?v=${revision}`);
  assert.ok(sw.includes(`const MEAL_PREVIEW = '${mealPreviewAsset}';`));
});

