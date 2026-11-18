# 🍛 Raman Rasoi — Pantry-first meal planner

https://kinn-j.github.io/hatri/


Static HTML/CSS/JavaScript website with an installable Progressive Web App (PWA) manifest and bundled food photos. Updated using the latest supplied Claude HTML (`Raman Rasoi — Pantry-first meal planner 2.html`).

## Included

- `index.html` — latest Raman Rasoi app from Claude, adapted for independent website hosting and bundled photo paths.
- `images/` — **582 unique, web-optimized food photos** in WebP format, built from previously created individual-dish photo archives.
- `images/photos.json` — automatic dish-slug-to-photo mapping. Includes every image stored under `images/`.
- `images/IMAGE_INVENTORY.csv` — records original image name and source ZIP for auditing.
- `icons/` — favicon and home-screen icons from original HTML.
- `manifest.webmanifest` — installable-app configuration.
- `sw.js` — basic offline caching for site shell and previously visited images.

## Deploy free via GitHub Pages

1. Create a GitHub **public** repository (or use an existing public repository).
2. Upload the **contents of this folder to the repository root** (not an extra containing folder).
3. In GitHub Settings → Pages, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and Save.
4. GitHub will publish your site at `https://USERNAME.github.io/REPOSITORY/`.
5. Changes pushed to `main` will trigger publication. The app uses relative paths to support project-site subdirectories.

Alternatively, connect this repo to Cloudflare Pages / Netlify. It requires no build command; use the repository root as the publish directory.

## Test locally

Run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Known limitations

- Claude cloud storage and account authentication are **not available** on the independent website. Local pantry and list settings persist per browser/device.
- Only the photos available in the archived ZIP batches are included. Photos uploaded *only inside Claude cloud storage* cannot be exported from an HTML file.
- Photos have been optimized to WebP (not pixel-identical originals); original JPEGs remain in the existing archive ZIPs in your ChatGPT Library.
- A PWA is not a signed Android `.apk` or iOS `.ipa` package.
- GitHub Pages repositories are public. Do not upload credentials, personal data, or confidential records.
- Recheck recipes, image accuracy and ingredients before public commercial release.

## Image inventory

- 28 source photo archives inspected
- 582 unique images included, with duplicate dish names resolved by preferring newer photo batches
- 331 duplicate photo names skipped
- 0 image files skipped due to format/content issues


## Matching coverage

- Photo matching was audited for the previous Claude version. The new HTML may have added or renamed recipes, so exact coverage may differ.
- 60 included photos currently have no matching recipe slug. They are kept for future menu expansion.
- Check `images/MISSING_RECIPE_PHOTOS.csv` and `images/EXTRA_PHOTOS_NOT_CURRENTLY_USED.csv` for details.

