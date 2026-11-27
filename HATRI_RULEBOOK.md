# Hatri rule book

## Whole meals

Each six-dish meal must contain six distinct dishes. Across one set of whole-meal suggestions, each dish may appear only once. This includes both mains, bread, rice, curd, sweets, and any optional salad. The rule covers all result groups and the featured meal shown alongside the list.

Use the same recipe identity across categories and languages. Reserve dishes only when a complete meal meets the active filters. When a required course runs out of eligible dishes, show the complete meals available. With the full catalog and default filters, offer at least 25 themed six-dish meals. Pair two mains from the same region and prefer local accompaniments. Savory rice-based one-pot recipes can fill the rice course, and yogurt-based dishes such as kadhi and chaas can fill the curd course.

## Suggestion limits

Show up to 50 complete six-dish meal sets for the Meals filter, including the featured meal. For individual dishes, show up to 100 matching dishes per filter selection across all readiness groups combined. Apply the same dish limit to search and cart suggestions. Rank eligible matches before applying either limit. Show all qualifying matches when fewer are available.

## My Table cooking shortlist

Every individual recipe and six-dish meal suggestion must offer an **Add to Table** action independently of the shopping cart, including ready-to-cook items. A selected meal is saved as one complete, themed six-dish set with six distinct recipe identities. A user may also add an individual recipe, even if the same recipe is part of a selected meal. Repeatedly choosing the same item toggles its selection rather than creating duplicates. The Table page must show all saved selections together, allow opening recipes and removing individual entries, and never change cart ingredients or pantry selections. Save the shortlist locally and through existing signed-in state synchronization; clear it on account switch or sign-out with the other user-specific data.

## Recipe filters

Recipe cards, filters, and the recipe catalog omit heaviness ratings. Ignore saved heaviness selections when loading preferences and omit them when saving preferences.

## Language

Author app text and recipe content in English. Hindi mode must translate the core navigation, filters, common pantry ingredients, and known recipe names locally without any external network request, and preserve previously fetched translations for other content when offline. Google Translate may supplement the local translations for recipe methods and less-common content when reachable, but a CAPTCHA or network failure must not produce repeating error toasts or request storms. Keep account identities and form entries verbatim. Hindi search uses local and cached translated catalog terms and keeps the entered query on the device. Do not present an English fallback recipe method as a completed Hindi translation.

## Community recipe videos

Community recipe videos are public once published. A signed-in user may upload an MP4, WebM, or MOV video up to 100 MB, with the binary stored in Firebase Storage and only its metadata stored in Firestore. Anonymous users may browse public videos but may not upload, edit, or delete posts. The feed shows one video per viewport, advances by vertical scroll, and loads at most 30 newest posts per initial query.
