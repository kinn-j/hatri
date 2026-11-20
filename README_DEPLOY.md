# Hatri — Website + Installable App (PWA)

READY FOR STATIC HOSTING. No build step, npm, subscription, or domain required.

## Quickest: publish for ₹0

OPTION A — Netlify Drop
1. Go to https://app.netlify.com/drop and sign in.
2. Unzip the website package.
3. Drag the folder containing `index.html` onto the Netlify Drop page.
4. Your site gets a temporary HTTPS `*.netlify.app` URL.

OPTION B — Cloudflare Pages
1. Go to https://dash.cloudflare.com and sign in.
2. Workers & Pages > Create > Pages > Direct Upload (wording may change).
3. Upload the website folder or its ZIP package.
4. Publish to a free HTTPS `*.pages.dev` URL.

IMPORTANT: The upload root must contain **index.html** directly.
If the host shows a file listing or 404, check you did not upload an outer folder by mistake.

## Install on phone
- Android: Open your HTTPS URL in Chrome > three-dot menu > Install app / Add to Home screen.
- iPhone: Open in Safari > Share > Add to Home Screen > Add.
- Check browser permissions and app-installability; support can vary by browser and OS.

This is a PWA, NOT yet a signed APK or native iOS `.ipa`.
For Android Play/iOS App Store projects, reuse index.html and assets with Capacitor.
Google Play and Apple App Store developer enrollment generally cost money.

## What's in this ZIP
- index.html: original app, safely adjusted for web hosting
- manifest.webmanifest: proper installable-app metadata, no Claude destination
- sw.js: offline app-shell caching
- icons/: extracted original app icons
- images/photos.json: optional mapping of recipe slug to uploaded photo file
- images/ADD_PHOTOS_HERE.txt: instructions for packaging public photos

## Known limitations inherited from the Claude Artifact
1. Recipe names, ingredients, steps, filters, and primary UI are embedded in index.html.
2. Pantry selections, shopping cart, filters and backup code work with browser localStorage.
3. Claude cloud sync, Claude-managed dish photo uploads, and personal recipe
   rating/My Kitchen cloud features do NOT automatically work on external hosting.
4. Existing images stored in Claude's `dishImages` collection or `/_blob` asset
   store are NOT inside the HTML upload. Add the image files to images/ and map
   them in images/photos.json to share them with every visitor.
5. A temporary domain is publicly accessible. Do not include private data,
   secrets, or API keys in the HTML.
6. Saved browser data on claude.ai will not migrate to another origin automatically.
   The app's Account > Copy backup code / Restore from code can transfer the
   pantry/cart preferences manually, but cannot transfer cloud photo assets.
7. Offline caching is a basic shell. Browser storage and installation can vary.

## Production notes
- For changes, upload the updated folder; increment CACHE in sw.js if needed.
- Buy your domain only when you choose and attach it in host settings.
- If you later need sign-in, cross-device sync, or user uploads, integrate a
  compatible independent backend (e.g. Supabase or Firebase), with rules and
  privacy protections. Do not place service credentials in browser HTML.
- Code originating from an AI service should be reviewed and thoroughly tested
  for correctness, accessibility, performance, and security before commercial launch.
