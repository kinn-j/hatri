# Hatri rule book

## Whole meals

Each six-dish meal must contain six distinct dishes. Across one set of whole-meal suggestions, each dish may appear only once. This includes both mains, bread, rice, curd, sweets, and any optional salad. The rule covers all result groups and the featured meal shown alongside the list.

Use the same recipe identity across categories and languages. Reserve dishes only when a complete meal meets the active filters. When a required course runs out of eligible dishes, show the complete meals available. With the full catalog and default filters, offer at least 25 themed six-dish meals. Pair two mains from the same region and prefer local accompaniments. Savory rice-based one-pot recipes can fill the rice course, and yogurt-based dishes such as kadhi and chaas can fill the curd course.

## Complete suggestions and diet categories

Never impose a maximum on eligible individual dishes, search matches, complete six-dish meal sets, or cart suggestions. All complete meal sets must remain available without cutting off at 50; all cart suggestions must remain available without cutting off at 100. Dish and search cards may progressively render in batches for mobile performance, but must automatically load the rest as the user scrolls and provide a **Show all remaining dishes** fallback. Show the full match count and never silently omit a dish because it already appears inside a suggested six-dish meal or featured suggestion.

Every unique dish must belong to at least one valid dish-type category **and** exactly one diet category: Vegetarian or Non-vegetarian. Eggs, meat, fish, poultry, seafood, animal gelatin and meat stock are non-vegetarian, including optional ingredients; "eggless" recipes without animal ingredients remain vegetarian. The Vegetarian and Non-vegetarian category cards filter recipes by their true ingredients, not simply their imported flags. Selecting a diet category replaces the initial default Whole meal category; users may subsequently combine category cards explicitly. Clicking Non-vegetarian while Veg Mode is on must enable non-vegetarian results. Turning Veg Mode off shows both vegetarian and non-vegetarian dishes unless a specific category is selected; Veg Mode on shows only vegetarian dishes. A dish may belong to more than one dish-type category, and no category imposes a numeric cap.

Hostel recipes must also belong to the same ordinary dish-type and Vegetarian/Non-vegetarian categories as all other recipes. Hostel Mode is an additional equipment filter; switching it off restores the same Hostel recipes to the ordinary categories, not a separate exclusive catalog. Category-card counts represent all catalog entries available in the current Veg/Hostel Mode, without limiting the count by time, region, occasion, or the number initially rendered. Choosing **All dishes** must show the complete catalog for the current Veg/Hostel Mode, regardless of saved time, region, and occasion filters. Keep every match discoverable as users scroll even when it exceeds 100 recipes.

## My Table cooking shortlist

Every individual recipe and six-dish meal suggestion must offer an **Add to Table** action independently of the shopping cart, including ready-to-cook items. A selected meal is saved as one complete, themed six-dish set with six distinct recipe identities. A user may also add an individual recipe, even if the same recipe is part of a selected meal. Repeatedly choosing the same item toggles its selection rather than creating duplicates. The Table page must show all saved selections together, allow opening recipes and removing individual entries, and never change cart ingredients or pantry selections. Save the shortlist locally and through existing signed-in state synchronization; clear it on account switch or sign-out with the other user-specific data.

## Recipe filters

Recipe cards, filters, and the recipe catalog omit heaviness ratings. Ignore saved heaviness selections when loading preferences and omit them when saving preferences.

## Language

Author app text and recipe content in English and retain stable recipe and ingredient IDs across all languages. All published recipe names, measured ingredient lines, and cooking steps must have a packaged Hindi translation in `hindi-catalog.js` before release. App navigation, accessibility labels, regions, filters, ingredient names, and recipe text must work in Hindi with Google Translate completely unavailable. The Hindi pack must be loaded and cached with the app shell; do not use a network call for catalog content. When source instructions change, regenerate and review their translations before merging, with automated coverage tests to identify missing source text. Machine translations are drafts: review numerical quantities, temperature, timing, negation and food-safety terminology. Never silently replace a missing or unsafe method with an invented Hindi instruction. Keep account identities and form entries verbatim. Hindi search uses packaged and cached catalog terms and keeps the entered query on the device. Reserve optional runtime translation for uncataloged or user-generated content, with failure cooldown.

## Community recipe videos

Community recipe videos are public once published. A signed-in user may upload an MP4, WebM, or MOV video up to 100 MB, with the binary stored in Firebase Storage and only its metadata stored in Firestore. Anonymous users may browse public videos but may not upload, edit, or delete posts. The feed shows one video per viewport, advances by vertical scroll, and loads at most 30 newest posts per initial query.
