# Raman Rasoi — Google login and cloud saving

The app runs on GitHub Pages. Its Firebase web configuration for project
`hatri-5b44d` has already been entered in `auth.js`. **Login will not work
until Google Authentication and Firestore are enabled below.**

## 1. Finish configuring your existing Firebase project

1. Open https://console.firebase.google.com/ and choose `hatri-5b44d`.
2. The project's **Web app configuration is already present in `auth.js`**.
   Do not add service-account private keys or administrator credentials to
   the website or GitHub repository.
3. In **Authentication > Sign-in method**, enable **Google** only.
   Select a Google support email.
4. In **Authentication > Settings > Authorized domains**, add
   `kinn-j.github.io` (and your own domain if you use one later).
5. In **Firestore Database**, create a Standard edition database in
   production mode. In the **Rules** tab, paste the contents of
   `firestore.rules` and **Publish**. Do not use open/public access rules.

Google sign-in does not require paid SMS verification. Firestore and other
Firebase services have free usage allowances; review quotas if the app grows.

## 2. Publish the updated app

From this package, place **both** `index.html` and `auth.js` in the repository
root (next to the existing `sw.js` and `manifest.webmanifest`). Keep the
existing `images/`, `images/photos.json`, and `icons/` folders untouched.

You can also commit `firestore.rules` and this setup guide for version history,
but uploading `firestore.rules` to GitHub does **not** deploy those rules to
Firebase. Publish the rules separately in Firebase Console.

Create a feature branch and open a pull request to `main`. When the PR is
merged and GitHub Pages finishes deployment, reload
https://kinn-j.github.io/hatri/ with Ctrl+Shift+R.

## 3. What will be saved

- Pantry ingredient selections, shopping cart, cuisine and appliance choices
- Meal and cooking-time filters, diet preferences, side/sweet/protein toggles
- Recipe ratings stored in My Kitchen

Saved data lives in Firestore under the signed-in user's Firebase UID.
The security rules prevent one user from reading or changing another user's
profile. The browser also keeps a local copy for use while not signed in.

On the **first login to a new account**, the app imports the current local
selections. On subsequent logins, the account's saved data takes precedence.
Signing out clears the signed-in account's preferences from the browser.

The Account panel offers **Continue with Google** and **Sign out**.
Mobile-number login and OTP have been intentionally excluded from this version.

Personal photo uploads and existing Claude-hosted photo assets are *not*
transferred to Firebase Storage by this change. Recipe images already stored
in the public `images/` directory still work as before.

## 4. Test before accepting real users

1. Sign in with Google; choose ingredients; refresh; confirm they remain.
2. Sign in on a second device with the same account; confirm the same data.
3. Sign out; check that the previous user's selections are cleared.
4. Sign in as another user; confirm their data is separate.
5. Check the browser console and Firestore Rules when a cloud save fails.

Firebase documentation:
- https://firebase.google.com/docs/auth/web/google-signin
- https://firebase.google.com/docs/firestore/security/get-started
- https://firebase.google.com/pricing/
