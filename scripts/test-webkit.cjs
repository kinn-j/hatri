const {spawnSync} = require('node:child_process');

const result = spawnSync(process.execPath, [
  '--test',
  // The CLI timeout covers the entire browser test file, not each test.\n  // CI runs many browser contexts; keep individual per-test timeouts intact.\n  '--test-timeout=300000',
  'tests/regression.cjs',
], {
  stdio: 'inherit',
  env: {...process.env, HATRI_BROWSER: 'webkit'},
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
