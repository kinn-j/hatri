# Hatri rule book

## Whole meals

Each six-dish meal must contain six distinct dishes. Across one set of whole-meal suggestions, each dish may appear only once. This includes both mains, bread, rice, curd, sweets, and any optional salad. The rule covers all result groups and the featured meal shown alongside the list.

Use the same recipe identity across categories and languages. Reserve dishes only when a complete meal meets the active filters. When a required course runs out of eligible dishes, show the complete meals available. With the full catalog and default filters, offer at least 25 themed six-dish meals. Pair two mains from the same region and prefer local accompaniments. Savory rice-based one-pot recipes can fill the rice course, and yogurt-based dishes such as kadhi and chaas can fill the curd course.

## Suggestion limits

Show up to 50 complete six-dish meal sets for the Meals filter, including the featured meal. For individual dishes, show up to 100 matching dishes per filter selection across all readiness groups combined. Apply the same dish limit to search and cart suggestions. Rank eligible matches before applying either limit. Show all qualifying matches when fewer are available.

## Recipe filters

Recipe cards, filters, and the recipe catalog omit heaviness ratings. Ignore saved heaviness selections when loading preferences and omit them when saving preferences.

## Language

Author app text and recipe content in English and retain stable recipe and ingredient IDs across all languages. All published recipe names, measured ingredient lines, and cooking steps must have a packaged Hindi translation in `hindi-catalog.js` before release. App navigation, accessibility labels, regions, filters, ingredient names, and recipe text must work in Hindi with Google Translate completely unavailable. The Hindi pack must be loaded and cached with the app shell; do not use a network call for catalog content. When source instructions change, regenerate and review their translations before merging, with automated coverage tests to identify missing source text. Machine translations are drafts: review numerical quantities, temperature, timing, negation and food-safety terminology. Never silently replace a missing or unsafe method with an invented Hindi instruction. Keep account identities and form entries verbatim. Hindi search uses packaged and cached catalog terms and keeps the entered query on the device. Reserve optional runtime translation for uncataloged or user-generated content, with failure cooldown.

## Community recipe videos

Community recipe videos are public once published. A signed-in user may upload an MP4, WebM, or MOV video up to 100 MB, with the binary stored in Firebase Storage and only its metadata stored in Firestore. Anonymous users may browse public videos but may not upload, edit, or delete posts. The feed shows one video per viewport, advances by vertical scroll, and loads at most 30 newest posts per initial query.
