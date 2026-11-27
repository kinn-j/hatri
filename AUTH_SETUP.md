# Hatri Firebase setup

Hatri's public Firebase identifiers are in `auth.js`. The static website
uses Google Authentication, Firestore, Cloud Functions, and Cloud Storage.
The backend requires a Firebase project plan that supports Cloud Functions.
Use Application Default Credentials for authorized maintenance. Keep private
credentials out of the website and repository.

## Provision and verify

1. In Firebase Authentication, enable Google and add your HTTPS host to
   **Authorized domains**. Keep Firestore in production mode.
2. Give the Functions runtime service account the minimum permissions to read
   and write the app's Firestore records and Storage objects. For signed
   uploads and playback, enable the IAM Service Account Credentials API and
   grant the runtime identity permission to sign with its designated signer
   service account. The signer also needs the required bucket permissions.
   Keep the bucket private with public access prevention.
3. In the bucket CORS configuration, allow the actual website origin to use
   `POST`, `GET`, and `HEAD`. Use the bare origin, including scheme and host.
   Keep the `incoming-reels/` lifecycle rule from
   [cloud-storage-lifecycle.json](cloud-storage-lifecycle.json). Merge it with
   any existing bucket policies.
4. Run `npm ci --prefix functions` and deploy **functions, Firestore rules and
   indexes, and Storage rules** to the intended Firebase project. Use
   `firebase deploy --project PROJECT --only functions,firestore,storage`
   with the correct project specified. Review its deployment diff and existing
   indexes before applying. Verify that the two Reels indexes finish building
   and the TTL overrides become active. GitHub Pages deployment does not
   apply these Firebase settings.
5. Register the website with Firebase App Check using reCAPTCHA Enterprise.
   Build with `HATRI_APP_CHECK_SITE_KEY` set to the public site key. After
   verifying staging traffic, set `HATRI_REQUIRE_APP_CHECK=true` in the Functions
   runtime environment and enable enforcement on the Firebase products you
   use. The local emulator workflow uses the default disabled flag.
6. Test a separate staging instance with Google sign-in, two accounts,
   MP4/WebM/MOV upload and playback, cancel, edit, remove, and account
   switching. Verify that drafts and private preferences are inaccessible as
   a guest. Apply the website deployment after the cloud checks pass.

The app limits starts to five uploads per account per UTC day and allows one
start every 30 seconds. Signed upload policies expire after 15 minutes.
Anonymous playback uses a signed read URL that expires after five minutes.
Moderators can inspect `reelReports/{postId}/reports` using project IAM and
hide a post through the `manageReel` callable with the `reelModerator` custom
claim. Set and review billing alerts and operational quotas separately.

## Migrate existing community videos

The new feed accepts only posts that reference media promoted by the trusted
backend. Run the migration in an authorized environment with the intended
project and bucket.

```sh
node functions/migrate-reels.cjs PROJECT BUCKET
```

That command counts eligible legacy posts by inspecting their original files in
your bucket. After reviewing eligibility, run the same command with
`--apply` to migrate eligible posts and revoke old download tokens under
`communityVideos/`. External media URLs and absent or mismatched files require
manual review. Old public links that used revoked tokens will stop working.
The script keeps original objects for review. A successful migration preserves
post IDs and replaces the old public author fields with the default credit.
Use the new application post links for sharing.

## Preferences and activity

Signed-in preferences synchronize through Firestore transactions. Independent
changes merge on save. The latest edit wins when the same field conflicts.
The app retries pending changes while the user remains signed in. An explicit
sign-out attempts to flush outstanding edits, then clears the local account
data.

Activity is off by default and opt-in per browser and account. The backend
checks that consent, deduplicates events, and limits writes per account. Search
text, pantry items, card quantities, and account identity are excluded from
the event payload. Logs are accessible through project IAM, and Firestore
applies the configured 90-day expiration asynchronously.

## Local integration

Install the Functions dependencies and provide Java 21 and Firebase CLI.
Start a disposable demo project for the authorization regression.

```sh
npm ci --prefix functions
firebase emulators:exec --project demo-hatri-audit --only auth,firestore,storage,functions "npm run test:firebase"
```

The test fixture seeds the private file through the emulator Admin SDK. Live
Cloud IAM signing, bucket CORS, and real Google OAuth require staging.
