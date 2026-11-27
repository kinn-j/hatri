const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const code=fs.readFileSync(path.join(root,'north-chaat-recipes.js'),'utf8');
const sandbox={};
vm.runInNewContext(code+'\n;this.data=JSON.parse(JSON.stringify(NORTH_CHAAT_CATALOG));this.extra=JSON.parse(JSON.stringify(NORTH_CHAAT_PANTRY));',sandbox);
const list=sandbox.data;
test('56 non-duplicated vegetarian street dishes have recipes, regional tags and photos',()=>{
 assert.equal(list.length,56);
 assert.equal(new Set(list.map(r=>r.name.toLowerCase())).size,list.length);
 for(const r of list){
  assert.equal(r.course,'Snack');
  assert.ok(r.region && r.pantry.length>=4,r.name);
  assert.ok(r.amounts.en[0].length>20 && r.steps.en[0].length>80,r.name);
  assert.ok(!r.nonveg,r.name);
  assert.ok(fs.existsSync(path.join(root,'images',r.photo)),`${r.name}: ${r.photo}`);
 }
});
test('new pantry ingredients all receive photographs and Hindi names',()=>{
 const pack=fs.readFileSync(path.join(root,'north-chaat-hindi.js'),'utf8');
 for(const item of sandbox.extra){
  assert.ok(fs.existsSync(path.join(root,'images',item[2])),item[0]);
  assert.ok(pack.includes(item[0]),item[0]);
 }
});
test('offline Hindi recipe addition has precisely one translation per new dish',()=>{
 const code=fs.readFileSync(path.join(root,'north-chaat-hindi.js'),'utf8');
 const context={};
 vm.runInNewContext(code.split('/* Offline Hindi additions;')[0]+'\n;this.hi=JSON.parse(JSON.stringify(NORTH_CHAAT_HINDI_ROWS));',context);
 assert.equal(context.hi.length,list.length);
 for(const entry of context.hi)assert.ok(entry.every(value=>/\p{Script=Devanagari}/u.test(value)));
});
