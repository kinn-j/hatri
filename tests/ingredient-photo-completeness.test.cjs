/* Prevent adding a pantry selector option without an actual local or mapped image. */
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const mapped={};
vm.runInNewContext(fs.readFileSync(path.join(root,'ingredient-images.js'),'utf8')+
  '\n;this.images=INGREDIENT_IMAGES;this.local=INGREDIENT_LOCAL_IMAGES;',mapped);
const ctx={};
vm.runInNewContext(html.slice(html.indexOf('var CATS='),html.indexOf('\nvar NAME='))+';this.groups=CATS;',ctx);
const names=new Set(ctx.groups.flatMap(group=>group[1].map(item=>item[0])));
for(const [file,key] of [
 ['rajasthani-recipes.js','RAJASTHANI_PANTRY'],
 ['seasonal-recipes.js','SEASONAL_PANTRY'],
 ['winter-recipes.js','WINTER_PANTRY'],
 ['international-recipes.js','INTERNATIONAL_PANTRY']
]){
 const data={};
 vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8')+';this.pantry='+key,data);
 (Array.isArray(data.pantry)?data.pantry:Object.values(data.pantry).flat()).forEach(item=>names.add(item[0]));
}
const ni=html.match(/var NI=(\[[\s\S]*?\]),FIX=/);
assert.ok(ni,'North Indian pantry registration found');
const extra={};vm.runInNewContext('this.groups='+ni[1],extra);
extra.groups.forEach(item=>names.add(item[0]));
for(const m of html.matchAll(/CATS\[\d+\]\[1\]\.push\(([^;]+)\);/g)){
 for(const match of m[1].matchAll(/\["([a-z][a-z0-9]*)",/g))names.add(match[1]);
}
const newCtx={};
vm.runInNewContext(fs.readFileSync(path.join(root,'north-chaat-recipes.js'),'utf8')+
 '\n;this.pantry=NORTH_CHAAT_PANTRY;',newCtx);
for(const item of newCtx.pantry){
 names.add(item[0]);
 mapped.local[item[0]]='images/ingredients/hatri-'+item[0]+'.webp';
}
const noCook={};
vm.runInNewContext(fs.readFileSync(path.join(root,'no-cook-recipes.js'),'utf8')+
 '\n;this.pantry=NO_COOK_PANTRY;',noCook);
for(const item of noCook.pantry){
 names.add(item[0]);
 mapped.local[item[0]]=item[2];
}
test('all registered core, regional and specialty pantry ingredients have photo mappings',()=>{
 assert.ok(names.size>=190);
 const missing=[...names].filter(id=>!mapped.images[id]&&!mapped.local[id]);
 assert.deepEqual(missing,[],`${missing.length} ingredients have no photo source`);
});
test('every local ingredient thumbnail exists in the repository',()=>{
 const missing=Object.entries(mapped.local).filter(([,relative])=>!fs.existsSync(path.join(root,relative)));
 assert.deepEqual(missing,[],`${missing.length} local ingredient photos absent`);
});
