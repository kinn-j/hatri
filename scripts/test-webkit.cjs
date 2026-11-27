const {spawnSync} = require('node:child_process');

const result = spawnSync(process.execPath, [
  '--test',
  '--test-timeout=90000',
  'tests/regression.cjs',
], {
  stdio: 'inherit',
  env: {...process.env, HATRI_BROWSER: 'webkit'},
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
