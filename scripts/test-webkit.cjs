const {spawnSync} = require('node:child_process');

const pattern = 'Back to top|home carousel|cart rotates|recipe selection preserves|cart recomputes|Hindi cart controls|Google Translate localizes|Hindi searches|Dahi ke Kebab|meal photos and expanded dishes|meal photos are visible|interrupted request';
const result = spawnSync(process.execPath, [
  '--test',
  `--test-name-pattern=${pattern}`,
  'tests/regression.cjs',
], {
  stdio: 'inherit',
  env: {...process.env, HATRI_BROWSER: 'webkit'},
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
