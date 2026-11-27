# Publish Hatri

Run `npm ci` and `npm run build`. The build produces a static site in `dist/`
with a local Firebase browser bundle, a script hash policy, and the runtime
assets. Use a fresh or empty destination when repeating the build. To use another
directory, run `npm run build -- PATH`.

Publish the resulting folder on a static HTTPS host. Set the publish directory
to `dist` on Netlify or Cloudflare Pages. On GitHub Pages, select **GitHub
Actions** in repository Pages settings and run **Publish Hatri Pages** on main.
The workflow publishes the generated artifact. The app supports project-site
subdirectories. The repository also
contains backend code, tests, documentation, and a historical app package.

See [Firebase setup](AUTH_SETUP.md) for the required backend configuration and
the Reels migration. Deploy and verify Firebase before publishing a website
release that requires new backend behavior.

## Local smoke test

Serve the built site on loopback.

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:8000. Cook, Table, and offline caching work locally. The
app connects sign-in and cloud features to Firebase emulators on localhost.
Use the emulator checks in [AUTH_SETUP.md](AUTH_SETUP.md) for local integration
coverage. Google OAuth and signed Google Cloud Storage transfer use staging or
production services with matching project configuration.

## Install on a device

On Android, use **Install app** or **Add to Home screen** in Chrome. On iOS, use
Safari **Share → Add to Home Screen**. Verify standalone display, update from
the prior release, and offline navigation on both devices.
