# 🍛 Hatri — Pantry-first meal planner

https://kinn-j.github.io/hatri/

## Testing

Install the test dependencies with `npm ci`, then run `npx playwright install --with-deps chromium webkit`. Run `npm test` for the source and Chromium tests, and `npm run test:webkit` for the full WebKit browser suite. Set `HATRI_BROWSER_PATH` to use a compatible system browser. The PWA upgrade test serves the November 23 v28 commit from Git history and switches the same origin to the working tree. Use a full clone for this test. The local Firebase authorization and publishing checks are documented in [Firebase setup](AUTH_SETUP.md).

GitHub Actions runs these checks on pull requests and pushes to main. The web and installed mobile apps share the same PWA. Actual Android and iOS installation and standalone display still need device verification.

Static HTML/CSS/JavaScript website with an installable Progressive Web App (PWA) manifest and bundled food photos. Updated using the latest supplied Claude HTML (`Raman Rasoi — Pantry-first meal planner 2.html`).

## Winter recipes

Open **Winter recipes & soups** from Cook, or select **Winter** under the
planner’s occasion filters. See the [50 new dishes](WINTER_RECIPES.md).

## Included

- `index.html` — Hatri meal planner, adapted for independent website hosting and bundled photo paths.
- `images/` — Bundled food images in WebP format, including archived photos and newer generated images.
- `images/photos.json` — maps recipe slugs to image files. Recipes with matching dishes can share an image.
- `images/IMAGE_INVENTORY.csv` — records image sources and dimensions, including generated additions and replacements.
- `icons/` — favicon and home-screen icons from original HTML.
- `manifest.webmanifest` — installable-app configuration.
- `sw.js` — basic offline caching for site shell and previously visited images.

## Publish the site

Run `npm run build` and publish the resulting `dist/` folder. The build includes
only the website files, bundles Firebase locally, and adds a content security
policy. See [deployment instructions](README_DEPLOY.md) for hosting and
[Firebase setup](AUTH_SETUP.md) for backend deployment and migration.

## Test locally

Build the site and run `python -m http.server 8000 --bind 127.0.0.1 --directory dist`. Visit `http://127.0.0.1:8000`.

## Known limitations

- The site supports Google sign-in and private preference sync through Firebase. See [Firebase setup](AUTH_SETUP.md) for sign-in, cloud saving, and opt-in activity sharing. Local pantry and list settings also persist per browser.
- Photos stored only in Claude cloud storage require a separate export.
- Photos have been optimized to WebP (not pixel-identical originals); original JPEGs remain in the existing archive ZIPs in your ChatGPT Library.
- A PWA is not a signed Android `.apk` or iOS `.ipa` package.
- GitHub Pages repositories are public. Do not upload credentials, personal data, or confidential records.
- Recheck recipes, image accuracy and ingredients before public commercial release.

## Original photo archive import

- 28 source photo archives inspected
- 582 unique images included, with duplicate dish names resolved by preferring newer photo batches
- 331 duplicate photo names skipped
- 0 image files skipped due to format/content issues

## Recipe image coverage

Every dish in the live catalog has a bundled image. The full-catalog browser
test checks the photo mapping, successful decoding, and a minimum image edge
of 300 pixels. The [missing-image report](images/MISSING_RECIPE_PHOTOS.csv) is
empty. The [unused-image inventory](images/EXTRA_PHOTOS_NOT_CURRENTLY_USED.csv)
lists bundled photos available for future use.
