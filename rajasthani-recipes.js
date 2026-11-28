// Regional home-cooking adaptations. Timings list prep and cook separately from advance soaking.
const RAJASTHANI_PANTRY = {
  "Daily vegetables": [
    ["babypotato", "Baby potatoes"],
    ["clusterbeans", "Cluster beans (gawar phali)"],
    ["freshturmeric", "Fresh turmeric root"],
    ["pearlonion", "Pearl onions"],
    ["radishpods", "Radish pods (mogri)"]
  ],
  "Fruits & coconut": [
    ["gunda", "Fresh gunda (lasoda gum berries)"],
    ["kachri", "Fresh kachri (wild melon)"],
    ["karonda", "Fresh karonda berries"]
  ],
  "Dals, pulses & more": [
    ["cookedblackchickpeas", "Ready-to-eat black chickpeas"],
    ["kumatiya", "Food-grade dried kumatiya seeds"]
  ],
  "Grains & flours": [
    ["barleyflour", "Barley flour"],
    ["crackedmaize", "Cracked maize"],
    ["mothflour", "Moth bean flour"],
    ["sproutedwheatflour", "Sprouted wheat flour"]
  ],
  "Specialty & other": [
    ["ediblegond", "Edible gond crystals"],
    ["mishri", "Rock sugar crystals (mishri)"],
    ["namkeenboondi", "Plain salted boondi"],
    ["nigella", "Nigella seeds (kalonji)"],
    ["panchkutamix", "Dried panchkuta mix"],
    ["plainboondi", "Plain unsalted boondi"],
    ["preparedkanji", "Prepared mustard kanji"]
  ]
};

const RAJASTHANI_RECIPES = [
  {
    name: "Kachri ki Chutney", region: "Rajasthani", course: "Side", prep: 10, cook: 4, serves: 4, appliances: ["I"],
    pantry: ["kachri", "garlic", "dryredchilli", "cuminseeds", "lemon?", "ghee"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-kachri-ki-chutney-549046"],
    amounts: {
      en: ["150 g fresh kachri (wild melon), 3 garlic cloves and 2 dried red chillies", "1 tsp ghee, ½ tsp cumin seeds and ¼ tsp salt", "1 tsp lemon juice if needed"]
    },
    steps: {
      en: ["Peel and chop the kachri, discarding hard seeds. Grind it with the garlic, chillies and salt to a coarse paste.", "Sizzle the cumin in ghee. Add the paste and stir over medium heat for 3–4 min until it thickens.", "Taste for sourness, add lemon if needed and serve with bajra roti."]
    }
  },
  {
    name: "Hara Chana ki Chutney", region: "Rajasthani", course: "Side", prep: 9, cook: 5, serves: 4, appliances: ["I"],
    pantry: ["greenchickpeas", "coriander", "gchilli", "lemon", "roastedcuminpowder"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/green-chana-chutney-recipe-in-hindi"],
    amounts: {
      en: ["¾ cup shelled fresh green chickpeas, ½ cup coriander leaves and tender stems, and 1 green chilli", "1 tbsp lemon juice, ¼ tsp roasted cumin powder and ¼ tsp salt", "2–3 tbsp drinking water"]
    },
    steps: {
      en: ["Simmer the shelled chickpeas in boiling water for about 5 min until just tender. Drain and rinse briefly under cool water.", "Grind the chickpeas, coriander, chilli, lemon, cumin and salt with 2 tbsp water.", "Scrape down the sides and blend briefly again, adding a little more water if necessary. Serve as a thick, textured chutney."]
    }
  },
  {
    name: "Kairi ki Launji", region: "Rajasthani", course: "Side", prep: 7, cook: 12, serves: 4, appliances: ["I"],
    pantry: ["rawmango", "jaggery", "fennel", "nigella"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/kacche-aam-ki-launji-recipe"],
    amounts: {
      en: ["1 medium raw mango, ¼ cup grated jaggery and ¼ cup water", "2 tsp oil, ½ tsp fennel seeds and ¼ tsp nigella seeds", "¼ tsp each turmeric, chilli powder and salt"]
    },
    steps: {
      en: ["Peel and cut the mango into thin wedges. Sizzle the fennel and nigella in oil.", "Add the mango, water, turmeric and salt. Cover for 5–6 min until the mango is almost tender.", "Stir in the jaggery and chilli. Simmer uncovered until the mango looks glossy and the syrup lightly coats a spoon."]
    }
  },
  {
    name: "Gajar ki Launji", region: "Rajasthani", course: "Side", prep: 7, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["carrot", "jaggery", "fennel", "amchur"],
    source: ["Mharo Rajasthan’s Recipes", "https://mharorajasthanrecipes.blogspot.com/2010/07/gajar-ki-launji-sweet-and-sour-carrot.html"],
    amounts: {
      en: ["200 g carrots, 2 tsp oil and ¼ cup water", "½ tsp fennel seeds, ¼ tsp chilli powder and ¼ tsp salt", "1 tbsp grated jaggery and ½ tsp amchur"]
    },
    steps: {
      en: ["Peel the carrots and cut into short, thin batons. Heat oil and sizzle the fennel.", "Toss in the carrots, chilli, salt and water. Cover and simmer for 7–8 min until just tender.", "Add jaggery and amchur. Cook uncovered, stirring until the carrots are coated in a sweet-tart glaze."]
    }
  },
  {
    name: "Karonda Mirch Sabzi", region: "Rajasthani", course: "Side", prep: 8, cook: 8, serves: 2, appliances: ["I"],
    pantry: ["karonda", "bigchilli", "fennel", "mustardoil"],
    source: ["Zayka Ka Tadka", "https://www.zaykakatadka.com/recipe/karonda-mirchi-sabzi/"],
    amounts: {
      en: ["100 g fresh karonda berries and 2 mild long green chillies", "1 tbsp mustard oil and ½ tsp fennel seeds", "¼ tsp each turmeric and salt, and 1 tsp jaggery if very tart"]
    },
    steps: {
      en: ["Halve the berries, remove any hard seeds and slice the chillies.", "Warm mustard oil, sizzle the fennel and stir-fry the chillies for 2 min. Add berries, turmeric and salt with a splash of water.", "Cover for 4–5 min until the berries soften but hold their shape. Taste and add jaggery if needed. Serve a small portion with roti."]
    }
  },
  {
    name: "Mooli Mogri Sabzi", region: "Rajasthani", course: "Side", prep: 8, cook: 10, serves: 2, appliances: ["I"],
    pantry: ["radishpods", "mustardoil", "cuminseeds", "amchur", "gchilli?"],
    source: ["Rekha Rathi on Cookpad", "https://cookpad.com/eng/recipes/11129915"],
    amounts: {
      en: ["200 g tender mogri (radish pods), 2 tsp mustard oil and ½ tsp cumin seeds", "¼ tsp each turmeric and salt, plus ½ tsp amchur", "1 chopped green chilli (optional)"]
    },
    steps: {
      en: ["Trim the pods, discarding woody ones. Wash and cut the tender pods into 2 cm lengths.", "Sizzle the cumin and optional chilli in hot oil. Add the pods, turmeric, salt and a tablespoon of water. Cover for 5 min.", "Lift the lid and stir-fry until the water dries and the pods are tender-crisp. Mix in the amchur and serve."]
    }
  },
  {
    name: "Marwari Mogar Dal", region: "Rajasthani", course: "Side", prep: 6, cook: 14, serves: 2, appliances: ["I"], soak: [30, "split moong dal"],
    pantry: ["moong", "ghee", "cuminseeds", "dryredchilli", "lemon?"],
    source: ["Marwari Rasoi", "https://marwarirasoi.blogspot.com/2010/06/dry-moong-mogar-faraka-mogar.html"],
    amounts: {
      en: ["½ cup split yellow moong dal, soaked 30 min and drained", "1 tbsp ghee, ½ tsp cumin seeds and 1 dried red chilli", "¾ cup water, ¼ tsp each turmeric and salt, and 1 tsp lemon juice (optional)"]
    },
    steps: {
      en: ["Sizzle the cumin and dried chilli in ghee. Stir in the drained dal and turmeric for 1 min.", "Add the water and salt. Cover loosely and cook gently for about 10 min until a grain crushes easily. Add a spoonful of water if needed.", "Uncover and let the excess moisture cook off. Fluff lightly to keep the grains separate and add optional lemon."]
    }
  },
  {
    name: "Gawar Phali Besan", region: "Rajasthani", course: "Side", prep: 8, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["clusterbeans", "besan", "cuminseeds", "amchur"],
    source: ["HerZindagi", "https://www.herzindagi.com/hindi/recipe-tips/rajasthani-besan-wali-gawar-phali-ki-sabji-recipe-article-1026948"],
    amounts: {
      en: ["200 g tender cluster beans and 2 tbsp besan", "1 tbsp oil, ½ tsp cumin seeds and ¼ cup water", "¼ tsp each turmeric, chilli powder and salt, plus ½ tsp amchur"]
    },
    steps: {
      en: ["Trim and chop the beans. In a dry pan stir the besan for 2–3 min over low heat until nutty and set aside.", "Sizzle the cumin in oil, stir in beans, water, turmeric, chilli and salt and cover for 6–7 min until tender.", "Uncover, cook off excess moisture and toss with the roasted besan and amchur until lightly crumbly."]
    }
  },
  {
    name: "Kachri ki Sabzi", region: "Rajasthani", course: "Side", prep: 8, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["kachri", "mustardoil", "cuminseeds", "corianderpowder"],
    source: ["NDTV India", "https://ndtv.in/food/rajasthani-kachri-sabzi-kaise-banaye-how-to-make-authentic-kachri-ki-sabji-recipe-video-12100502"],
    amounts: {
      en: ["250 g fresh kachri (wild melon), 1 tbsp mustard oil and ½ tsp cumin seeds", "½ tsp ground coriander and ¼ tsp each turmeric, chilli powder and salt", "2 tbsp water"]
    },
    steps: {
      en: ["Peel the fruits and halve them. Scrape out tough seeds and slice into thin half-moons.", "Sizzle the cumin in oil, add the kachri, spices, salt and water and stir to coat.", "Cover for 7–8 min, until the pieces yield to a fork. Uncover and fry until the moisture dries and the spices cling. Eat with roti."]
    }
  },
  {
    name: "Tamatar ki Launji", region: "Rajasthani", course: "Side", prep: 5, cook: 10, serves: 3, appliances: ["I"],
    pantry: ["tomato", "jaggery", "fennel", "nigella"],
    source: ["Vanita’s Corner", "https://vanitascorner.com/tamatar-ki-launji/"],
    amounts: {
      en: ["250 g ripe tomatoes, 2 tsp oil, ½ tsp fennel and ¼ tsp nigella seeds", "1 tbsp jaggery and ¼ tsp each chilli powder and salt"]
    },
    steps: {
      en: ["Cut the tomatoes into 2 cm pieces. Heat the oil and sizzle the fennel and nigella.", "Add the tomatoes, salt and chilli. Simmer for 6–7 min, stirring lightly so some pieces stay whole.", "Add the jaggery and cook for another 2 min until the juices turn syrupy. Serve warm or cool."]
    }
  },
  {
    name: "Rajasthani Ghasela", region: "Rajasthani", course: "Side", prep: 7, cook: 13, serves: 2, appliances: ["I"],
    pantry: ["besan", "ghee", "springonion", "cuminseeds", "gchilli?"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/besan-ka-pitta-recipe-in-hindi"],
    amounts: {
      en: ["½ cup besan, 1¼ cups water, 2 tsp ghee and ½ tsp cumin seeds", "2 spring onions, thinly sliced, ¼ tsp each salt, turmeric and red chilli powder", "1 chopped green chilli (optional)"]
    },
    steps: {
      en: ["Whisk besan, water, turmeric, chilli powder and salt into a smooth batter. Slice the spring onions, keeping the white and green parts separate.", "Sizzle cumin and optional chilli in ghee. Stir the onion whites for 1 min, then pour in the batter slowly while stirring.", "Cook over low-medium heat for 10–12 min, stirring and scraping constantly. Add the onion greens towards the end. When the besan is cooked and the mixture holds soft mounds, spoon it into a bowl and serve warm with roti."]
    }
  },
  {
    name: "Rajasthani Makki Kheech", region: "Rajasthani", course: "Complete", prep: 6, cook: 22, serves: 2, soak: [60, "cracked maize"],
    pantry: ["crackedmaize", "ghee", "buttermilk?"],
    source: ["Traditional Makki Khich (video)", "https://www.youtube.com/watch?v=BVJuzEuLvas"],
    amounts: {
      en: ["½ cup cracked maize, rinsed and soaked 1 hour", "2 cups fresh water, ¼ tsp salt and 2 tsp ghee", "Plain buttermilk to serve (optional)"]
    },
    steps: {
      en: ["Drain the soaked maize. Put it in a pressure cooker with the fresh water and salt.", "Cook at high pressure for 10 min and let pressure release naturally. Open only once safe. The grains should crush easily, so cook longer if your maize is coarse.", "Stir well and simmer briefly if loose. Spoon into bowls, add ghee and serve with optional buttermilk."]
    }
  },
  {
    name: "Makki ki Raab", region: "Rajasthani", course: "Drink", prep: 5, cook: 13, serves: 2, appliances: ["I"],
    pantry: ["makki", "buttermilk", "ghee", "cuminseeds"],
    source: ["The Rajasthani Kitchen", "https://www.rajasthanirecipes.com/blog/makki-ki-raab-recipe"],
    amounts: {
      en: ["3 tbsp maize flour, 2 cups plain buttermilk and ½ cup water", "1 tsp ghee, ½ tsp cumin seeds and ¼ tsp salt"]
    },
    steps: {
      en: ["Whisk the maize flour into the cold water, then whisk in the buttermilk until lump-free.", "Cook over low heat, stirring constantly until it comes to a gentle simmer. Continue for 8–10 min until the flour is cooked and the raab lightly coats a spoon. Add salt.", "Sizzle cumin in ghee and pour it in. Thin with a little hot water if needed and serve warm in cups."]
    }
  },
  {
    name: "Gunda Kairi Sabzi", region: "Rajasthani", course: "Side", prep: 12, cook: 14, serves: 2, appliances: ["I"],
    pantry: ["gunda", "rawmango", "fennel", "mustardoil", "fenugreekseeds"],
    source: ["Maayeka", "https://maayeka.com/2021/05/rajasthani-gunda-kairi-ki-sabzi-lasoda-ki-sabji-video.html"],
    amounts: {
      en: ["200 g fresh gunda (lasoda gum berries) and ½ small raw mango, peeled and sliced", "1 tbsp mustard oil, ½ tsp crushed fennel and ⅛ tsp fenugreek seeds", "¼ tsp each turmeric, chilli powder and salt, plus water for blanching"]
    },
    steps: {
      en: ["Blanch whole gunda for 6–7 min until just tender. Drain, cool until you can handle them, then split and remove the sticky pits with a small spoon.", "Sizzle the fennel and fenugreek in oil. Add the sliced mango, turmeric, chilli, salt and a splash of water. Cook for 3–4 min until the mango starts to soften.", "Toss in the gunda and cook uncovered for 2–3 min until the masala clings."]
    }
  },
  {
    name: "Kumatiya Sabzi", region: "Rajasthani", course: "Side", prep: 8, cook: 27, serves: 2, soak: [480, "dried kumatiya seeds"],
    pantry: ["kumatiya", "mustardoil", "amchur", "cuminseeds", "corianderpowder"],
    source: ["Ramjeevan Foods", "https://ramjeevanfoods.com/blogs/recipes/kumatiya-ki-sabji-the-royal-desert-recipe-from-the-heart-of-rajasthan"],
    amounts: {
      en: ["⅓ cup food-grade dried kumatiya seeds, soaked overnight", "1 tbsp mustard oil, ½ tsp cumin seeds, ½ tsp ground coriander and ¼ tsp each turmeric, chilli powder and salt", "½ tsp amchur and water for cooking"]
    },
    steps: {
      en: ["Rinse the soaked seeds and cook in fresh water in a pressure cooker until tender, about 12 min at pressure plus natural release. Drain and discard the water.", "Sizzle cumin in oil. Add the ground spices, seeds, salt and a splash of fresh water.", "Toss for about 5 min until nearly dry. Add amchur and serve with millet roti."]
    }
  },
  {
    name: "Marwari Boondi ki Sabzi", region: "Rajasthani", course: "Main", prep: 6, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["namkeenboondi", "curd", "besan", "ghee", "cuminseeds"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-boondi-ki-sabzi-hindi-955122"],
    amounts: {
      en: ["¾ cup plain salted boondi, ¾ cup plain curd, 1 tsp besan and ½ cup water", "2 tsp ghee, ½ tsp cumin seeds, ¼ tsp each turmeric and chilli powder, and salt to taste"]
    },
    steps: {
      en: ["Whisk the curd with besan, water, turmeric and chilli until no lumps remain.", "Sizzle cumin in ghee. Lower the heat and pour in the curd slowly while stirring. Stir until gently simmering, then simmer for 5–6 min.", "Stir in the boondi during the last minute so it softens but does not dissolve. Taste before adding salt."]
    }
  },
  {
    name: "Sabut Aloo Pyaz Sabzi", region: "Rajasthani", course: "Main", prep: 9, cook: 18, serves: 2, appliances: ["I"],
    pantry: ["babypotato", "pearlonion", "tomato", "ghee", "curd"],
    source: ["Zayka Ka Tadka", "https://www.zaykakatadka.com/recipe/sabut-aloo-pyaz-ki-sabji/"],
    amounts: {
      en: ["200 g small baby potatoes and 120 g small peeled pearl onions", "1 grated tomato, ¼ cup curd and 1 tbsp ghee", "½ tsp each cumin seeds and ground coriander, ¼ tsp each turmeric, chilli powder and salt"]
    },
    steps: {
      en: ["Boil very small potatoes in salted water until a knife goes through, about 10–12 min. Drain. Meanwhile brown the whole onions lightly in ghee.", "Add cumin, tomato and the ground spices. Fry until the tomato thickens, then turn down the heat and stir in the whisked curd.", "Add the potatoes and salt, cover and simmer 5 min so the onions soften and the masala coats all the pieces."]
    }
  },
  {
    name: "Rajasthani Kaju Makhana", region: "Rajasthani", course: "Main", prep: 8, cook: 14, serves: 2, appliances: ["I"],
    pantry: ["cashews", "makhana", "tomato", "ghee", "cream?"],
    source: ["Rajshri Food", "https://rajshrifood.com/rich-and-creamy-kaju-makhana-masala/"],
    amounts: {
      en: ["1½ cups makhana, ¼ cup cashews, 2 tomatoes and 1 tbsp ghee", "½ tsp each cumin seeds and ground coriander, ¼ tsp each chilli powder and salt", "½ cup water and 1 tbsp cream (optional)"]
    },
    steps: {
      en: ["Toast the makhana and half the cashews in half the ghee until lightly golden. Blend the remaining cashews with the chopped tomatoes and water.", "Sizzle cumin in the remaining ghee. Add the tomato-cashew sauce, coriander, chilli and salt. Simmer for 7–8 min until glossy and thick, adding a splash of water if needed.", "Stir in the toasted makhana and cashews. Heat for 1–2 min and finish with optional cream."]
    }
  },
  {
    name: "Jaisalmeri Kala Chana Kadhi", region: "Rajasthani", course: "Main", prep: 7, cook: 15, serves: 2, appliances: ["I"],
    pantry: ["cookedblackchickpeas", "curd", "besan", "ghee", "cuminseeds", "dryredchilli?"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/jaisalmer-kala-chana-kadhi-recipe"],
    amounts: {
      en: ["1 cup fully cooked black chickpeas, ¾ cup plain curd, 1½ tbsp besan and 1 cup water", "2 tsp ghee, ½ tsp cumin seeds, ¼ tsp turmeric, ¼ tsp salt and 1 dried chilli (optional)"]
    },
    steps: {
      en: ["Start with already-cooked chickpeas. Whisk curd, besan, turmeric and water.", "Sizzle cumin and optional chilli in ghee. Pour in the curd mixture over low heat, stirring continuously until gently bubbling.", "Add the chickpeas and salt and simmer 10 min until the gravy coats a spoon and has no raw besan taste."]
    }
  },
  {
    name: "Kacchi Haldi ki Sabzi", region: "Rajasthani", course: "Main", prep: 13, cook: 20, serves: 3, appliances: ["I"],
    pantry: ["freshturmeric", "peas", "curd", "ghee", "garammasala"],
    source: ["ãhãram", "https://aahaaramonline.com/rajasthani-kacchi-haldi-ki-sabzi-turmeric-peas-curry/"],
    amounts: {
      en: ["75 g fresh turmeric root, ½ cup green peas and ¾ cup plain curd", "2½ tbsp ghee, ½ tsp cumin seeds, ½ tsp ground coriander and ¼ tsp each garam masala and salt", "¼ cup water"]
    },
    steps: {
      en: ["Peel and grate the turmeric. Fry it in 2 tbsp ghee for 8–10 min over medium-low heat until fragrant and less sharp.", "Sizzle cumin in the remaining ghee. Add the peas, ground coriander and water and cook covered until tender.", "Turn the heat low. Stir in whisked curd, then add the fried turmeric, salt and garam masala. Keep stirring to a gentle simmer and cook until thick."]
    }
  },
  {
    name: "Rajasthani Gulab Jamun ki Sabzi", region: "Rajasthani", course: "Main", prep: 18, cook: 25, serves: 3, appliances: ["I"],
    pantry: ["mawa", "maida", "tomato", "onion", "curd", "ghee"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/gulab-jamun-ki-sabzi"],
    amounts: {
      en: ["150 g plain unsweetened mawa, 2 tbsp maida and oil for frying", "1 onion, 2 tomatoes, ¼ cup curd, 1 tbsp ghee and ½ cup water", "½ tsp each cumin and ground coriander, plus salt, turmeric and chilli powder to taste"]
    },
    steps: {
      en: ["Knead the mawa and flour into a smooth dough and shape eight small crack-free balls. Fry in medium-low oil, turning often until golden. Drain and keep dry.", "Sizzle cumin in ghee. Fry finely chopped onion until golden, add puréed tomatoes and the ground spices and cook until thick. Lower the heat and stir in the curd.", "Add water and salt and simmer for 5 min. Slide the fried unsweetened balls into the gravy just before serving."]
    }
  },
  {
    name: "Gawar Phali Dhokli", region: "Rajasthani", course: "Complete", prep: 18, cook: 20, serves: 2, appliances: ["I"],
    pantry: ["clusterbeans", "atta", "besan", "curd", "cuminseeds", "ajwain"],
    source: ["Nisha Madhulika", "https://nishamadhulika.com/en/2087-gujarat_and_rajasthan_special_recipe_gawar_phali_dhokli_curry.html"],
    amounts: {
      en: ["180 g cluster beans, trimmed and cut, and ¾ cup curd", "½ cup atta, 2 tbsp besan, ¼ tsp ajwain, 1 tsp oil and water to knead", "1 tbsp oil, ½ tsp cumin, ¼ tsp each turmeric and chilli powder, ½ tsp salt divided, and 1½ cups water for the curry"]
    },
    steps: {
      en: ["Mix both flours with ajwain, half the salt and 1 tsp oil. Knead firm with water, roll a thin sheet and cut into small diamonds.", "Sizzle cumin in 1 tbsp oil. Add beans, turmeric, chilli, remaining salt and the curry water. Simmer 6 min, then scatter in the dhokli pieces.", "Simmer 8–10 min until the beans and dough are cooked. Whisk the curd, stir it in over low heat and bring back to a gentle simmer before serving."]
    }
  },
  {
    name: "Marwari Panchkuta", region: "Rajasthani", course: "Side", prep: 10, cook: 28, serves: 3, soak: [480, "dried panchkuta mix"],
    pantry: ["panchkutamix", "mustardoil", "cuminseeds", "corianderpowder"],
    source: ["Sidhi Marwadi", "https://sidhimarwadi.com/blogs/rajasthani-rasoi/panchkuta-banane-ka-simple-tareeka"],
    amounts: {
      en: ["¾ cup food-grade dried panchkuta blend (ker, sangri, kumatiya, dried kachri and dried mango)", "1 tbsp mustard oil, ½ tsp cumin seeds and ½ tsp ground coriander", "¼ tsp each turmeric, chilli powder and salt, and water for soaking and boiling"]
    },
    steps: {
      en: ["Rinse away any grit and soak the dried mix overnight. Drain and pressure-cook in fresh water until tender, about 10 min at pressure plus natural release. Drain.", "Sizzle cumin in mustard oil. Add the ground spices with a tablespoon of water and then toss in the cooked mix and salt.", "Stir-fry uncovered for about 5 min until almost dry and evenly coated. Serve with roti."]
    }
  },
  {
    name: "Rajasthani Dubki Kadhi", region: "Rajasthani", course: "Main", prep: 10, cook: 20, serves: 3, appliances: ["I"],
    pantry: ["curd", "besan", "ghee", "cuminseeds", "gchilli?"],
    source: ["Nisha Madhulika", "https://www.nishamadhulika.com/en/387-rajsthani-dubaki-kadhi.html"],
    amounts: {
      en: ["1 cup curd, 3 tbsp besan, 2 cups water and ¼ tsp turmeric for the gravy", "½ cup besan and about ¼ cup water for the dumplings", "1 tbsp ghee, ½ tsp cumin, ½ tsp salt divided and 1 finely chopped green chilli (optional)"]
    },
    steps: {
      en: ["Whisk the gravy ingredients with half the salt. In another bowl beat the dumpling besan with the remaining salt and enough water for a thick spoonable batter.", "Sizzle cumin and optional chilli in ghee. Add the gravy while stirring and bring to a gentle but steady boil.", "Drop small half-teaspoonfuls of batter directly into the bubbling gravy. Simmer gently for 12–15 min until the centres are set and the curry has thickened."]
    }
  },
  {
    name: "Jodhpuri Kabuli Pulao", region: "Rajasthani", course: "Complete", prep: 23, cook: 38, serves: 4, appliances: ["I"],
    pantry: ["basmatirice", "potato", "cauliflower", "peas", "bread", "onion", "curd", "ghee", "cashews", "raisins"],
    source: ["Naturally Nidhi", "https://naturallynidhi.com/jodhpuri-kabuli-pulao/"],
    amounts: {
      en: ["1 cup basmati rice, 1 potato, 1 cup cauliflower florets, ½ cup peas and 2 bread slices", "1 large onion, ¾ cup curd, 3 tbsp ghee and ¼ cup water", "2 tbsp cashews, 1 tbsp raisins, 1 bay leaf, 2 cardamom pods, ½ tsp garam masala and ¾ tsp salt divided"]
    },
    steps: {
      en: ["Boil the rice with the bay leaf, cardamom and half the salt until almost tender. Drain. Separately fry thin onion slices, then toast bread cubes, cashews and raisins in portions of the ghee.", "Brown small potato cubes and the cauliflower. Add peas, whisked curd, garam masala, remaining salt and water. Cover and cook until the vegetables are tender and the masala is thick.", "Layer half the rice, the vegetables and the remaining rice in a heavy pot. Scatter over the fried onion, bread and nuts. Cover tightly and steam on very low for 8–10 min before serving in layers."]
    }
  },
  {
    name: "Gatte ka Pulao", region: "Rajasthani", course: "Rice", prep: 19, cook: 23, serves: 3, appliances: ["I"],
    pantry: ["besan", "curd", "basmatirice", "ghee", "onion", "ajwain", "cuminseeds"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/rajasthani-gatte-ka-pulao-recipe"],
    amounts: {
      en: ["½ cup besan, 1 tbsp curd, ¼ tsp ajwain, 1 tsp oil and water to knead", "¾ cup basmati rice, 1 small onion, 1 tbsp ghee, ½ tsp cumin seeds and 1¼ cups cooking liquid", "½ tsp salt divided and ¼ tsp garam masala"]
    },
    steps: {
      en: ["Knead the besan, curd, ajwain, oil and half the salt into a firm dough, adding water by the spoon. Roll thin logs and boil about 8 min until cooked through. Slice the logs and keep the cooking liquid.", "Sizzle cumin in ghee, brown sliced onion and stir in the gatta pieces and rinsed rice.", "Add the remaining salt, garam masala and enough gatta liquid and water to total 1¼ cups. Cover and cook on low until the rice is tender. Rest covered briefly and fluff."]
    }
  },
  {
    name: "Rajasthani Meethe Chawal", region: "Rajasthani", course: "Sweet", prep: 8, cook: 17, serves: 3, appliances: ["I"],
    pantry: ["basmatirice", "ghee", "sugar", "saffron", "almonds", "raisins", "cardamom"],
    source: ["Mints Recipes", "https://www.mintsrecipes.com/rajasthani-sweet-rice-recipes-kesar/"],
    amounts: {
      en: ["¾ cup basmati rice, 1¼ cups water and 1 pinch saffron", "¼ cup sugar, 1 tbsp ghee, 3 green cardamom pods, 1 tbsp sliced almonds and 1 tbsp raisins"]
    },
    steps: {
      en: ["Rinse the rice. Soak saffron in 2 tbsp of the measured warm water. Fry almonds and raisins in the ghee and lift out.", "In the same pan, add crushed cardamom and rice, followed by the remaining water. Cover and cook on low until the rice is nearly tender.", "Scatter sugar over the rice and drizzle in the saffron water. Cover for 4–5 min until sugar dissolves and moisture is absorbed. Fluff gently and top with the nuts and raisins."]
    }
  },
  {
    name: "Khoba Roti", region: "Rajasthani", course: "Bread", prep: 10, cook: 14, serves: 2, appliances: ["T"],
    pantry: ["atta", "ghee", "ajwain?"],
    source: ["Nisha Madhulika", "https://nishamadhulika.com/988-khoba-roti-recipe.html"],
    amounts: {
      en: ["1 cup atta, ½ tsp salt, 1 tbsp ghee plus 2 tsp for brushing", "About ⅓ cup water and ¼ tsp ajwain (optional)"]
    },
    steps: {
      en: ["Rub 1 tbsp ghee into atta, salt and optional ajwain. Add water gradually to knead a firm dough. Divide in two and roll rounds ½ cm thick.", "Set a round on a medium-low tawa. Once the underside sets, pinch little dimples all over the upper surface without breaking through.", "Flip and cook slowly on both sides until browned and cooked through. Brush ghee into the dimples and repeat."]
    }
  },
  {
    name: "Bejad Roti", region: "Rajasthani", course: "Bread", prep: 8, cook: 12, serves: 2, appliances: ["T"],
    pantry: ["atta", "barleyflour", "besan", "ghee"],
    source: ["Zayka Ka Tadka", "https://www.zaykakatadka.com/recipe/bejad-ki-roti-rajasthani-famous-multigrain-roti/"],
    amounts: {
      en: ["½ cup atta, ¼ cup barley flour, ¼ cup besan and ¼ tsp salt", "About ⅓ cup warm water and 2 tsp ghee for brushing"]
    },
    steps: {
      en: ["Mix the flours and salt. Add water gradually and knead until pliable.", "Divide into three balls. Dust with atta and roll gently into thick rounds. Smooth any cracks with your fingers.", "Cook on a hot tawa until bubbles appear. Flip and press the edges. Cook until both sides are spotted, then brush with ghee."]
    }
  },
  {
    name: "Moong Churi Paratha", region: "Rajasthani", course: "Bread", prep: 14, cook: 14, serves: 2, appliances: ["T"], soak: [30, "crushed moong dal"],
    pantry: ["moong", "atta", "curd", "ajwain", "ghee", "gchilli?"],
    source: ["Nisha Madhulika", "https://nishamadhulika.com/en/2140-churi_paratha_rajasthani_moong_churi_masala_paratha_recipe.html"],
    amounts: {
      en: ["½ cup atta, ¼ cup split yellow moong dal and 2 tbsp curd", "¼ tsp each ajwain, turmeric and salt, water to knead and 1 tbsp ghee", "1 chopped chilli (optional)"]
    },
    steps: {
      en: ["Pulse the dry moong coarsely, soak it for 30 min and drain well.", "Mix with atta, curd, spices, salt and optional chilli. Add water by the spoon until soft enough to roll. Divide into three and roll thin.", "Cook on a medium-hot tawa. Flip when bubbles show, brush with ghee and turn until both sides are speckled and the dal is tender."]
    }
  },
  {
    name: "Kala Chana Pyaz Paratha", region: "Rajasthani", course: "Bread", prep: 12, cook: 10, serves: 2, appliances: ["T"],
    pantry: ["cookedblackchickpeas", "onion", "atta", "ghee", "amchur"],
    source: ["ãhãram", "https://aahaaramonline.com/chana-aur-pyaaz-paratha-marwari-recipe/"],
    amounts: {
      en: ["¾ cup atta, about ¼ cup water and ¼ tsp salt", "½ cup cooked black chickpeas, ¼ red onion, ½ tsp amchur, ¼ tsp ground cumin and 2 tsp ghee"]
    },
    steps: {
      en: ["Knead flour, water and half the salt. Mash drained chickpeas with finely chopped onion, amchur, cumin and remaining salt.", "Divide dough and filling in two. Seal each filling portion inside a dough round and roll gently with a little dry flour.", "Cook both sides on a medium-hot tawa, brushing with ghee, until spotted and cooked at the edges."]
    }
  },
  {
    name: "Makki ke Dhokle", region: "Rajasthani", course: "Snack", prep: 13, cook: 17, serves: 3, appliances: ["I"],
    pantry: ["makki", "methi", "curd", "ghee", "ajwain", "bakingsoda"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/rajasthani-makki-ke-dhokle-recipe"],
    amounts: {
      en: ["1 cup makki atta, ¼ cup chopped fresh methi, 2 tbsp curd and about ⅓ cup warm water", "½ tsp ajwain, ¼ tsp baking soda, ½ tsp salt and 2 tsp ghee"]
    },
    steps: {
      en: ["Mix the flour, methi, ajwain, soda and salt. Rub in 1 tsp ghee, then knead with the curd and enough warm water to hold together.", "Shape six flattened balls. Press a thumb dimple into each and set on a greased steamer tray.", "Cover and steam over boiling water for 14–16 min until a skewer comes out clean. Brush with the remaining ghee."]
    }
  },
  {
    name: "Kalmi Vada", region: "Rajasthani", course: "Snack", prep: 15, cook: 20, serves: 3, appliances: ["I"], soak: [240, "chana dal"],
    pantry: ["chanadal", "gchilli", "ginger?", "coriander", "ajwain"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-kalmi-vada-265783"],
    amounts: {
      en: ["¾ cup chana dal, soaked 4 hours and drained, and 1 green chilli", "1 cm ginger (optional), 2 tbsp chopped coriander, ½ tsp ajwain, ½ tsp salt and oil for frying"]
    },
    steps: {
      en: ["Grind the dal, chilli and optional ginger coarsely, adding water only by the teaspoon. Mix in coriander, ajwain and salt and pat into four thick discs.", "Fry over medium heat until lightly golden and set. Drain, cool enough to handle and slice each disc into wedges.", "Fry the wedges again until deep golden and crisp, with cooked centres. Drain and serve with chutney."]
    }
  },
  {
    name: "Kanji Vada", region: "Rajasthani", course: "Snack", prep: 12, cook: 14, serves: 4, appliances: ["I"], soak: [120, "split moong dal"],
    pantry: ["moong", "preparedkanji", "gchilli?", "ginger?"],
    source: ["Chef Kunal Kapur", "https://www.chefkunalkapur.com/recipe/kanji-vada/"],
    amounts: {
      en: ["½ cup split moong dal, soaked 2 hours and drained, and 1½ cups chilled ready fermented mustard kanji", "¼ tsp salt, ½ green chilli and 1 cm ginger (both optional), oil for frying and warm water"]
    },
    steps: {
      en: ["Grind drained dal with salt and optional chilli and ginger into a thick paste. Whisk briefly to lighten.", "Fry small spoonfuls over medium heat until evenly golden and cooked through. Drain and soak in warm water for 5 min, then gently press out water.", "Chill the vadas in the prepared kanji for at least 30 min so they absorb it. Serve with a ladle of kanji."]
    }
  },
  {
    name: "Bikaneri Bhujia", region: "Rajasthani", course: "Snack", prep: 15, cook: 20, serves: 4, appliances: ["I"],
    pantry: ["mothflour", "besan", "blackpepper", "ajwain"],
    source: ["Chorsa Morsa, Bikaner", "https://chorsamorsa.com/process.html"],
    amounts: {
      en: ["¾ cup moth bean flour, ¼ cup besan, ½ tsp ground black pepper and ¼ tsp ground ajwain", "¼ tsp chilli powder, ½ tsp salt, 1 tbsp oil for the dough, about ⅓ cup water and oil for frying"]
    },
    steps: {
      en: ["Mix the flours, spices and salt. Rub in 1 tbsp oil and add water slowly to make a soft, smooth dough for a fine sev press.", "Fill the greased press and squeeze short circles into medium-hot oil in small batches.", "Fry until the bubbles slow and the strands are golden, turning once. Drain, cool completely and break into short strands."]
    }
  },
  {
    name: "Matar Masala Baati", region: "Rajasthani", course: "Bread", prep: 22, cook: 28, serves: 3,
    pantry: ["atta", "suji", "peas", "ghee", "fennel", "amchur"],
    source: ["Nisha Madhulika", "https://nishamadhulika.com/2382-_matar_masala_dal_baati_recipe.html"],
    amounts: {
      en: ["1 cup atta, ¼ cup suji, 2 tbsp ghee, about ⅓ cup water and ½ tsp salt divided", "¾ cup peas, ½ tsp fennel, ½ tsp amchur and ¼ tsp chilli powder", "1 tbsp ghee to finish"]
    },
    steps: {
      en: ["Preheat the oven to 200°C. Rub 2 tbsp ghee into the flours and half the salt. Knead a firm dough with the water.", "Cook peas until tender, drain and mash with fennel, amchur, chilli and remaining salt. Make six dough cups, fill and seal well.", "Arrange seam-down and bake for 23–27 min, turning once, until browned all over. Crack the hot baatis lightly and brush with ghee."]
    }
  },
  {
    name: "Jodhpuri Mawa Kachori", region: "Rajasthani", course: "Sweet", prep: 22, cook: 26, serves: 4, appliances: ["I"],
    pantry: ["maida", "mawa", "sugar", "ghee", "almonds", "cardamom"],
    source: ["Indian Cooking Manual", "https://www.indiancookingmanual.com/jodhapuri-mawa-kachori-sweet-dish-from-rajasthan/"],
    amounts: {
      en: ["1 cup maida, 3 tbsp ghee, a pinch of salt and about ¼ cup water", "100 g unsweetened mawa, 2 tbsp chopped almonds, 1 tbsp sugar and ¼ tsp cardamom for filling", "½ cup sugar and ¼ cup water for syrup, and oil for frying"]
    },
    steps: {
      en: ["Rub ghee and salt into flour until crumbly. Add just enough water to make firm dough. Cover while preparing the filling.", "Roast the crumbled mawa on low heat until fragrant. Cool, mix with almonds, filling sugar and cardamom. Enclose the filling in six dough rounds, seal well and flatten slightly.", "Fry in medium-low oil until crisp and golden all over. Boil the syrup sugar and water until slightly sticky, turn off the heat, then dip and lift each pastry. Cool before serving."]
    }
  },
  {
    name: "Ghevar", region: "Rajasthani", course: "Sweet", prep: 16, cook: 34, serves: 4, appliances: ["I"],
    pantry: ["maida", "ghee", "milk", "sugar", "lemon", "almonds?"],
    source: ["The Rajasthani Kitchen", "https://www.rajasthanirecipes.com/blog/ghevar-recipe-guide"],
    amounts: {
      en: ["¾ cup maida, 2 tbsp softened ghee, ¼ cup cold milk, about ¾ cup ice-cold water and ½ tsp lemon juice", "Ghee or neutral oil for frying, ½ cup sugar and ¼ cup water for syrup", "1 tbsp sliced almonds (optional)"]
    },
    steps: {
      en: ["Whisk the ghee with 2 tbsp of the cold water until creamy. Whisk in flour and milk, then lemon and enough remaining cold water to make a very thin batter. Keep it cold.", "Heat a shallow layer of frying fat in a high-sided, narrow pot, no more than a third full. From just above the surface, trickle in a little batter and wait until foaming subsides. Repeat with small pours so the strands join into a disc, keeping a centre hole.", "Fry until golden and rigid. Lift carefully through the centre hole and drain. For the syrup, boil sugar and water until lightly sticky, then spoon it over the warm discs. Finish with optional almonds."]
    }
  },
  {
    name: "Alwar Milk Cake", region: "Rajasthani", course: "Sweet", prep: 5, cook: 80, serves: 6, appliances: ["I"],
    pantry: ["milk", "sugar", "lemon", "ghee"],
    source: ["Nisha Madhulika", "https://nishamadhulika.com/en/1303-milk-cake-recipe.html?page=1"],
    amounts: {
      en: ["1 litre whole milk, ⅓ cup sugar, ½–1 tsp lemon juice and 1 tsp ghee for the mould"]
    },
    steps: {
      en: ["In a wide heavy pan, boil the milk, stirring and scraping the bottom frequently, until less than half remains.", "Lower the heat and stir in the lemon juice a few drops at a time, just until fine grains appear. Stir in the sugar and cook, scraping constantly, until the grainy mass pulls away and begins to turn golden.", "Pack the hot mixture into a small greased metal mould. Cool it just until it stops steaming, then refrigerate for 3–4 hours until firm. Cut into rectangles."]
    }
  },
  {
    name: "Jaipur Mishri Mawa", region: "Rajasthani", course: "Sweet", prep: 8, cook: 12, serves: 4, appliances: ["I"],
    pantry: ["mawa", "mishri", "milk", "cardamom", "pistachios?"],
    source: ["Wonders of Rajasthan", "https://www.wondersofrajasthan.com/rajasthan-recipes/mawa-misri.html"],
    amounts: {
      en: ["200 g plain mawa, ¼ cup milk, 2 tbsp small mishri crystals and ¼ tsp cardamom", "1 tbsp chopped pistachios (optional)"]
    },
    steps: {
      en: ["Crumble the mawa finely. Stir with the milk in a heavy pan over low heat until it thickens and comes away from the sides without browning.", "Take off the heat. Stir in cardamom, then fold in the mishri once the mixture is warm enough to handle so some crystals stay distinct.", "Press loosely into a shallow dish, add optional pistachios and chill until firm enough to cut, about 30 min."]
    }
  },
  {
    name: "Ajmer Sohan Halwa", region: "Rajasthani", course: "Sweet", prep: 10, cook: 50, serves: 6, appliances: ["I"],
    pantry: ["sproutedwheatflour", "atta", "milk", "sugar", "ghee", "almonds"],
    source: ["Ajmer Rasoi (video)", "https://www.youtube.com/watch?v=KZqRfHhAgnY"],
    amounts: {
      en: ["¼ cup sprouted wheat flour and ¼ cup atta, 1 cup milk and 1 cup water", "½ cup sugar and ¼ cup ghee", "¼ tsp ground cardamom and 2 tbsp slivered almonds"]
    },
    steps: {
      en: ["Whisk both flours into the cold milk and water until smooth. Cook in a heavy pan over medium-low heat, stirring continuously, until thick and bubbling.", "Stir in the sugar. Add the ghee in small portions, working each in before adding more. Keep stirring over low heat until glossy, amber and separating from the pan, about 35–45 min.", "Add cardamom and spread in a greased tin. Press in almonds and mark wedges while warm. Cool completely before lifting them out."]
    }
  },
  {
    name: "Bajra Churma", region: "Rajasthani", course: "Sweet", prep: 12, cook: 20, serves: 3, appliances: ["T"],
    pantry: ["bajra", "jaggery", "ghee", "cardamom?"],
    source: ["Nisha Madhulika", "https://www.nishamadhulika.com/en/184-maleeda-recipe.html"],
    amounts: {
      en: ["150 g bajra flour and about 120 ml warm water to make 2 rotis", "¼ cup grated jaggery and 2 tbsp melted ghee", "1 pinch cardamom (optional)"]
    },
    steps: {
      en: ["Knead bajra flour with warm water and a pinch of salt until it holds together. Pat into two rotis between your palms or sheets of parchment.", "Cook each roti on a hot dry tawa, turning until both sides are cooked through. Rest uncovered for 5 minutes so the rotis dry slightly, then tear and crumble while still warm.", "Mix the crumbs with grated jaggery, melted ghee and optional cardamom. Rub evenly and serve loose, or press into balls while pliable."]
    }
  },
  {
    name: "Magad Churma", region: "Rajasthani", course: "Sweet", prep: 6, cook: 16, serves: 4, appliances: ["I"],
    pantry: ["atta", "ghee", "sugar", "almonds?", "cardamom?"],
    source: ["Nisha Madhulika", "https://www.nishamadhulika.com/2473-rajasthani_kasar_magad_churma_recipe.html"],
    amounts: {
      en: ["¾ cup coarse atta, ¼ cup ghee and ¼ cup powdered sugar", "¼ tsp cardamom and 1 tbsp chopped almonds (both optional)"]
    },
    steps: {
      en: ["Melt the ghee in a heavy pan and stir in the coarse atta. Roast slowly, stirring and scraping the pan for about 13–15 min until evenly golden and nutty.", "Transfer to a bowl immediately to stop the roasting. Let it cool until just warm.", "Stir in powdered sugar and the optional cardamom and almonds. Break up any lumps with your fingertips and serve loose."]
    }
  },
  {
    name: "Bikaneri Gond Pak", region: "Rajasthani", course: "Sweet", prep: 12, cook: 20, serves: 6, appliances: ["I"],
    pantry: ["ediblegond", "atta", "ghee", "jaggery", "almonds"],
    source: ["Nosh Farmaiye", "https://noshfarmaiiye.wordpress.com/2024/12/09/bikaneri-gond-pak/"],
    amounts: {
      en: ["¼ cup food-grade edible gond crystals, ½ cup atta and ⅓ cup ghee", "⅓ cup chopped jaggery, 2 tbsp water, ¼ cup chopped almonds and ¼ tsp cardamom"]
    },
    steps: {
      en: ["Fry the gond a spoonful at a time in ghee over medium-low heat until every piece puffs. Lift out, cool and crush. Discard any unpuffed hard pieces.", "Roast atta in the remaining ghee until golden and fragrant. Mix in the gond, almonds and cardamom.", "In a separate pan melt the jaggery with the water and simmer until a drop forms a soft ball in cold water. Stir into the roasted mix, press into a greased tin, cool and cut into squares."]
    }
  },
  {
    name: "Bikaneri Moti Pak", region: "Rajasthani", course: "Sweet", prep: 8, cook: 18, serves: 6, appliances: ["I"],
    pantry: ["plainboondi", "mawa", "sugar", "ghee", "cardamom", "saffron?"],
    source: ["Taste of City, Bikaner", "https://www.tasteofcity.com/bikaner/jaisraj-shivraj-ka-moti-pak-chai-patti"],
    amounts: {
      en: ["1 cup freshly fried or ready plain unsalted boondi, 100 g unsweetened mawa and 1 tsp ghee", "¼ cup sugar, ¼ cup water, ¼ tsp cardamom and a pinch of saffron (optional)"]
    },
    steps: {
      en: ["Stir the mawa in ghee on low heat until smooth and lightly fragrant. Separately simmer sugar, water and optional saffron until slightly sticky.", "Mix the plain boondi into the warm syrup and let it absorb for 2 min. Stir this into the mawa with cardamom until thick enough to mound.", "Press into a greased tin without crushing all the boondi. Chill for at least 30 min until firm and slice into squares."]
    }
  },
  {
    name: "Junglee Maas", region: "Rajasthani", course: "Main", prep: 10, cook: 65, serves: 3, appliances: ["I"], nonveg: true,
    pantry: ["mutton", "ghee", "dryredchilli", "garlic?"],
    source: ["GOYA", "https://www.goya.in/blog/a-rajputana-recipe-for-junglee-maas"],
    amounts: {
      en: ["500 g bone-in goat meat, 2 tbsp ghee, 6 mild dried Mathania chillies and ¾ tsp salt", "1–1½ cups water and 3 smashed garlic cloves (optional)"]
    },
    steps: {
      en: ["Heat ghee in a heavy pot. Brown the meat in batches, then return all the pieces and stir in the broken chillies, salt and optional garlic.", "Add 1 cup water, cover and simmer gently for 50–60 min or until the meat is fork-tender. Add a splash of hot water if the pot starts drying before the meat is tender.", "Uncover and reduce until the ghee and chilli coat the meat and little liquid remains. Serve with roti."]
    }
  },
  {
    name: "Safed Maas", region: "Rajasthani", course: "Main", prep: 20, cook: 70, serves: 3, appliances: ["I"], nonveg: true,
    pantry: ["mutton", "curd", "cashews", "almonds", "ghee", "onion", "cream"],
    source: ["Khaana", "https://khaana.com/recipes/safed-maas.html"],
    amounts: {
      en: ["500 g bone-in goat meat, 1 small onion, ¾ cup curd, 2 tbsp ghee and 1 cup water", "2 tbsp cashews and 2 tbsp blanched almonds, ground with ¼ cup water", "3 green cardamom pods, ½ tsp ground white pepper, ¾ tsp salt and 2 tbsp cream"]
    },
    steps: {
      en: ["Cook finely sliced onion and cardamom in ghee until the onion is soft but still pale. Add the goat and turn for a few minutes to seal the surfaces without dark browning.", "Lower the heat and stir in the whisked curd, salt, white pepper and 1 cup water. Cover and simmer until the meat is nearly tender.", "Stir in the nut paste and cook gently for 10 min until the meat is fork-tender and the gravy is creamy. Finish with cream over low heat."]
    }
  },
  {
    name: "Rajasthani Bhuna Kukad", region: "Rajasthani", course: "Main", prep: 15, cook: 35, serves: 3, appliances: ["I"], nonveg: true,
    pantry: ["chicken", "onion", "tomato", "curd", "ghee", "ginger?", "garlic?", "dryredchilli"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-bhuna-kukda-230901"],
    amounts: {
      en: ["500 g bone-in chicken pieces, 1 sliced onion, 1 chopped tomato and ¼ cup curd", "1½ tbsp ghee, 2 mild dried red chillies, ½ tsp cumin seeds, ½ tsp ground coriander, ¼ tsp turmeric and ¾ tsp salt", "1 tsp grated ginger and 2 crushed garlic cloves (both optional), and ¼ cup water"]
    },
    steps: {
      en: ["Sizzle cumin and dried chillies in ghee. Fry the onion until golden. Add optional ginger and garlic, then tomato and ground spices. Cook until the tomato turns pulpy.", "Stir in the chicken and salt and brown lightly. Lower the heat, add the whisked curd and water and simmer covered until the thickest piece reaches 165°F (74°C).", "Uncover and stir-fry for several minutes until the masala is dark, glossy and clings to the pieces."]
    }
  },
  {
    name: "Narangi Maas", region: "Rajasthani", course: "Main", prep: 18, cook: 65, serves: 3, appliances: ["I"], nonveg: true,
    pantry: ["mutton", "orange", "curd", "onion", "ghee", "dryredchilli", "garammasala"],
    source: ["The Indian Express", "https://indianexpress.com/article/lifestyle/food-wine/narangi-maas-orange-mutton-recipe-rajasthani-royal-rajput-cuisine-history-9125885/lite/"],
    amounts: {
      en: ["500 g bone-in goat meat, 1 onion, ⅓ cup curd, 2 tbsp ghee and ¾ tsp salt", "2 mild dried red chillies, ½ tsp garam masala and ¾ cup water", "½ cup fresh orange juice and ½ tsp finely grated orange zest"]
    },
    steps: {
      en: ["Fry sliced onion and dried chillies in ghee until the onion is golden. Add the meat, salt and garam masala and turn until lightly browned.", "Turn down the heat, stir in whisked curd and water and cook covered at a gentle simmer until the meat is almost fork-tender.", "Stir in the orange juice and simmer uncovered until the sauce thickens and the meat is tender. Remove from the heat and stir in the zest."]
    }
  },
  {
    name: "Jaisalmeri Ghotua Ladoo", region: "Rajasthani", course: "Sweet", prep: 9, cook: 16, serves: 4, appliances: ["I"],
    pantry: ["plainboondi", "mawa", "sugar", "ghee", "cardamom", "saffron?"],
    source: ["Spicing Your Life", "https://www.spicingyourlife.com/rajasthani-ghotua-ladoo/"],
    amounts: {
      en: ["1 cup fine plain unsalted boondi, 75 g crumbled unsweetened mawa and ¼ cup sugar", "¼ cup water, 1 tbsp ghee, ¼ tsp cardamom and a pinch of saffron (optional)"]
    },
    steps: {
      en: ["Stir the mawa in the ghee over low heat until smooth and fragrant. Separately heat the sugar, water and optional saffron until the syrup is lightly sticky.", "Stir in the boondi and let it soften. Remove from the heat and pound or mash the boondi thoroughly. Fold in the warm mawa and cardamom until the mixture holds together.", "When comfortably warm, grease your hands and roll six ladoos. Let them firm up before serving."]
    }
  }
];
