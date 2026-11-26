// Small-batch adaptations for Hatri. Prep and cook times assume the ingredients listed.
const QUICK_NORTH_RECIPES = [
  {
    name: "Rajasthani Dahi Tikhari", region: "Rajasthani", course: "Side", prep: 6, cook: 4, serves: 2, appliances: ["I"],
    pantry: ["curd", "garlic", "mustardoil", "cuminseeds", "coriander?"],
    source: ["Pakwanpedia", "https://pakwanpedia.in/hi/recipe/dahi-tikhari"],
    amounts: {
      en: ["1 cup plain full-fat curd", "2 garlic cloves, finely chopped", "2 tsp mustard oil, ½ tsp cumin seeds, ¼ tsp Kashmiri chilli powder and ¼ tsp salt", "1 tbsp chopped coriander (optional)"]
    },
    steps: {
      en: ["Whisk the curd with the salt until smooth and spread it in a shallow serving bowl.", "Heat the mustard oil in a small pan over medium heat. Sizzle the cumin, then stir in the garlic until just golden.", "Turn off the heat, swirl the chilli powder into the hot oil and spoon the tempering over the curd. Scatter over the coriander if using and serve with roti."]
    }
  },
  {
    name: "Hare Pyaz Besan Sabzi", region: "Rajasthani", course: "Side", prep: 7, cook: 10, serves: 2, appliances: ["I"],
    pantry: ["springonion", "besan", "gchilli?", "lemon?"],
    source: ["Zayka Ka Tadka", "https://www.zaykakatadka.com/recipe/besan-hare-pyaaz-ki-sabji/"],
    amounts: {
      en: ["200 g spring onions", "3 tbsp besan and 1 tbsp neutral oil", "½ tsp cumin seeds, ¼ tsp turmeric, ¼ tsp chilli powder and ¼ tsp salt", "1 green chilli, chopped, and 1 tsp lemon juice (both optional)"]
    },
    steps: {
      en: ["Wash the spring onions well. Thinly slice the white and green parts, keeping them separate.", "Dry-toast the besan over low heat for 2–3 min, stirring until it smells nutty. Transfer it to a plate.", "Heat the oil in the same pan. Sizzle the cumin and optional green chilli, then fry the whites for 2 min. Stir in the greens, turmeric, chilli powder and salt until the greens wilt.", "Scatter in the besan and toss over low heat for 2 min. If the flour looks dusty, add a teaspoon of water and toss until the coating is crumbly. Finish with lemon if using."]
    }
  },
  {
    name: "Rajasthani Rabodi ki Sabzi", region: "Rajasthani", course: "Main", prep: 10, cook: 10, serves: 2, appliances: ["I"],
    pantry: ["rabodi", "curd", "ghee", "cuminseeds", "coriander?"],
    source: ["The New Indian Express", "https://www.newindianexpress.com/amp/story/lifestyle/food/2026/Apr/26/more-than-meets-the-thali"],
    amounts: {
      en: ["50 g thin, quick-softening dried rabodi (maize wafers)", "½ cup plain curd, ½ cup water for the gravy and boiling water for soaking", "2 tsp ghee, ½ tsp cumin seeds, ½ tsp ground coriander, ¼ tsp turmeric, ¼ tsp chilli powder and ¼ tsp salt", "1 tbsp chopped coriander (optional)"]
    },
    steps: {
      en: ["Break the thin rabodi into bite-sized pieces. Cover with boiling water for 10 min while you prepare the gravy. Drain once pliable. Thicker rabodi needs a longer soak, so soften it in advance for the 20-minute version.", "Whisk the curd, gravy water, ground coriander, turmeric and chilli powder until smooth.", "Heat ghee and sizzle the cumin. Turn the heat to low and slowly stir in the curd mixture. Keep stirring until the gravy starts to simmer gently.", "Add the drained rabodi and salt. Simmer gently for 4–5 min until the pieces are tender throughout. Add optional coriander and serve with roti."]
    }
  },
  {
    name: "Kumaoni Kheere ka Raita", region: "Pahadi", course: "Side", prep: 10, cook: 0, serves: 2, appliances: ["N"],
    pantry: ["cucumber", "curd", "mustardseeds", "gchilli?", "coriander?"],
    source: ["Basket of Pahad", "https://basketofpahad.com/recipes/pahadi-kheere-ka-raita"],
    amounts: {
      en: ["1 small cucumber and 1 cup thick plain curd", "½ tsp yellow mustard seeds, a pinch of turmeric and ¼ tsp salt", "½ green chilli and 1 tbsp chopped coriander (both optional)"]
    },
    steps: {
      en: ["Coarsely grate the cucumber and squeeze out the excess juice. Pound the mustard to a fine powder in a mortar, then crush in the green chilli if using.", "Whisk the curd with the mustard, turmeric and salt. Fold in the grated cucumber.", "Let it stand for 3 min while you set the table. Taste, then add the optional coriander and serve cool."]
    }
  },
  {
    name: "Kumaoni Nimbu Saan", region: "Pahadi", course: "Snack", prep: 12, cook: 3, serves: 2, appliances: ["I"],
    pantry: ["lemon", "curd", "sesame", "jaggery", "blacksalt?"],
    source: ["GOYA", "https://www.goya.in/blog/a-tangy-winter-snack-from-kumaon"],
    amounts: {
      en: ["1 large pahadi nimbu or 1 sweet lime plus 1 tsp lemon juice", "½ cup thick curd and 1 tbsp sesame seeds", "2 tsp grated jaggery, ¼ tsp salt and a pinch of chilli powder", "1 pinch black salt (optional)"]
    },
    steps: {
      en: ["Peel the citrus, pull away the membranes and discard the seeds. Break the segments into rough bite-sized pieces over a bowl.", "Toast the sesame in a dry pan over medium-low heat for 2 min, then crush it coarsely.", "Stir the sesame, jaggery, salt and chilli into the curd. Fold in the citrus and any juice. If using sweet lime, mix in the lemon juice. Taste, add optional black salt and serve right away."]
    }
  },
  {
    name: "Garhwali Thechwani", region: "Pahadi", course: "Main", prep: 7, cook: 13, serves: 2,
    pantry: ["mooli", "potato", "tomato", "mustardoil", "cuminseeds", "garlic?", "ginger?"],
    source: ["eUttaranchal", "https://www.euttaranchal.com/culture/thechwani.php"],
    amounts: {
      en: ["1 small radish, 1 small potato and 1 small tomato", "2 tsp mustard oil, ½ tsp cumin seeds and ½ cup water (or your cooker's minimum)", "¼ tsp each turmeric and chilli powder, ½ tsp ground coriander and ¼ tsp salt", "1 garlic clove and 1 cm ginger, crushed (optional)"]
    },
    steps: {
      en: ["Peel the radish and potato. Cut small, then lightly crush the pieces with a pestle so the edges are ragged. Chop the tomato.", "Heat the oil in a pressure cooker. Sizzle the cumin and optional ginger and garlic, then toss in the radish and potato for 2 min. Stir in the tomato, ground spices, salt and water.", "Cook at high pressure for 3 min. Release the pressure according to the cooker instructions for a quick release. When it is safe to open, check that a fork pierces the vegetables easily.", "Mash a few pieces into the broth and stir. Simmer briefly if it is very thin, then serve hot with rice or roti."]
    }
  },
  {
    name: "Uttarakhand Mandua Cheela", region: "Pahadi", course: "Snack", prep: 7, cook: 10, serves: 2, appliances: ["T"],
    pantry: ["ragi", "besan", "onion", "ajwain", "coriander?", "gchilli?"],
    source: ["Uttarakhand millet recipe collection", "https://gbpihedenvis.nic.in/Special%20publication/final%20millets%20book_new.pdf"],
    amounts: {
      en: ["½ cup mandua (ragi flour), ¼ cup besan and about ¾ cup water", "¼ small onion, finely chopped, and ¼ tsp ajwain", "¼ tsp salt and 2 tsp oil for the tawa", "1 tbsp chopped coriander and ½ chopped green chilli (both optional)"]
    },
    steps: {
      en: ["Whisk the flours, ajwain and salt together. Add water gradually to make a smooth batter that pours easily. Stir in the onion and optional herbs and chilli.", "Heat a tawa over medium heat and wipe it with a little oil. Pour half the batter in the centre and spread it into a thin round.", "Drizzle a little oil around the edge. Cook for 2–3 min until the top loses its wet sheen and the edges lift. Flip and cook for another 1–2 min. Repeat for the second cheela and serve hot."]
    }
  },
  {
    name: "Kashmiri Doon Chetin", region: "Kashmiri", course: "Side", prep: 10, cook: 0, serves: 4, appliances: ["N"],
    pantry: ["walnuts", "curd", "mint", "gchilli", "lemon?"],
    source: ["Valley Origin", "https://valleyorigin.in/journal/doon-chetin-recipe"],
    amounts: {
      en: ["½ cup walnut halves and ½ cup plain curd", "2 tbsp mint leaves, ½ green chilli and ¼ tsp salt", "½ tsp lemon juice (optional)"]
    },
    steps: {
      en: ["Crush the walnuts with the mint, chilli and salt in a mortar or briefly pulse in a small grinder. Stop while the walnuts still have a little texture.", "Whisk the curd in a bowl and fold in the walnut mixture. If very thick, stir in a teaspoon of water.", "Taste for salt and add the lemon if you want a sharper finish. Spoon into a small bowl and serve with flatbread or as part of a meal."]
    }
  },
  {
    name: "Kashmiri Nadru Monje", region: "Kashmiri", course: "Snack", prep: 8, cook: 12, serves: 2,
    pantry: ["lotusstem", "riceflour", "cuminseeds"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-kashmiri-nadru-monje-955153"],
    amounts: {
      en: ["150 g fresh lotus stem and ⅓ cup rice flour", "¼ tsp cumin seeds, ½ tsp Kashmiri chilli powder and ¼ tsp salt", "2–3 tbsp water and about ½ cup neutral oil for shallow-frying"]
    },
    steps: {
      en: ["Peel the lotus stem, rinse thoroughly through its holes and pat it dry. Cut it lengthwise into thin matchsticks about 4 cm long.", "Mix the rice flour, cumin, chilli and salt. Add just enough water to make a thick coating, then toss in the lotus stem.", "Heat a shallow layer of oil over medium-high heat. A dab of batter should sizzle on contact. Fry small loose clusters in two batches for about 4 min per batch, turning until crisp and golden on both sides.", "Lift out with a slotted spoon, drain on a rack or paper towel and serve hot."]
    }
  },
  {
    name: "Old Delhi Kulle Chaat", region: "North Indian", course: "Snack", prep: 15, cook: 0, serves: 2, appliances: ["N"],
    pantry: ["cucumber", "tomato", "cookedchickpeas", "pomegranate", "lemon", "chaatmasala", "blacksalt?"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-kulle-ki-chaat-954424"],
    amounts: {
      en: ["1 large cucumber and 2 firm tomatoes", "½ cup fully cooked, drained chickpeas and ¼ cup pomegranate seeds", "1 tbsp lemon juice and ½ tsp chaat masala", "1 pinch black salt (optional)"]
    },
    steps: {
      en: ["Use canned or already-cooked chickpeas. Cut the cucumber into thick rounds and halve the tomatoes. Scoop out the centres with a teaspoon, leaving a base and walls on each piece.", "Toss the chickpeas and pomegranate with the lemon, chaat masala and optional black salt. Taste and stir in a little more lemon if the filling needs it.", "Blot the vegetable cups dry and set them upright. Spoon in the filling just before eating so the cups stay crisp."]
    }
  },
  {
    name: "Delhi Moth Dal Chaat", region: "North Indian", course: "Snack", prep: 10, cook: 4, serves: 2, appliances: ["I"],
    pantry: ["cookedmothbeans", "onion", "tomato", "lemon", "chaatmasala", "coriander", "gchilli?"],
    source: ["Nisha Madhulika", "https://www.nishamadhulika.com/en/2006-sprouted_moth_chaat_recipe.html"],
    amounts: {
      en: ["1½ cups fully cooked, drained moth beans (matki)", "½ small red onion and 1 small firm tomato, finely diced", "1 tbsp lemon juice, ½ tsp chaat masala, ¼ tsp roasted cumin powder and ¼ tsp salt", "2 tbsp chopped coriander and ½ chopped green chilli (chilli optional)"]
    },
    steps: {
      en: ["Start with moth beans that are already cooked until tender. Warm them in a pan over medium heat with a tablespoon of water for 3–4 min, until steaming and the extra water has evaporated.", "Put the beans in a bowl. Mix in the lemon, chaat masala, cumin and salt while the beans are warm.", "Toss in the diced onion and tomato, coriander and optional chilli. Divide into bowls and eat warm."]
    }
  },
  {
    name: "Bihari Sattu Chutney", region: "Bihari", course: "Side", prep: 10, cook: 0, serves: 4, appliances: ["N"],
    pantry: ["sattu", "onion", "coriander", "lemon", "mustardoil", "gchilli?"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-bihari-style-sattu-chutney-958039"],
    amounts: {
      en: ["½ cup chana sattu (roasted chickpea flour) and ¼–⅓ cup drinking water", "¼ small red onion, finely diced, and 2 tbsp chopped coriander", "1 tbsp lemon juice, 1 tsp food-grade mustard oil and ¼ tsp salt", "½ chopped green chilli (optional)"]
    },
    steps: {
      en: ["Put the sattu in a bowl. Stir in ¼ cup water a spoonful at a time, pressing out lumps, to make a thick paste.", "Stir in the onion, coriander, lemon, mustard oil, salt and optional chilli. Add the remaining water a little at a time if you prefer a softer chutney.", "Taste and serve freshly mixed with dal and rice or alongside paratha."]
    }
  },
  {
    name: "Bihari Murhi Lai", region: "Bihari", course: "Sweet", prep: 8, cook: 10, serves: 4, appliances: ["I"],
    pantry: ["murmura", "jaggery", "ghee", "cardamom?"],
    source: ["Indian Cooking Manual", "https://www.indiancookingmanual.com/murmurekumure-ka-laddu-lai-puffed-rice-ball/"],
    amounts: {
      en: ["2 cups puffed rice (murmura), 90 g chopped jaggery and 2 tbsp water", "1 tsp ghee, plus a little to grease your hands", "1 pinch ground cardamom (optional)"]
    },
    steps: {
      en: ["Dry-toast the puffed rice in a wide pan over medium-low heat for 2–3 min until crisp. Tip it into a bowl.", "Melt the jaggery with the water and ghee in the pan, then bubble it gently. Drop a little syrup into cold water. It is ready when it gathers into a firm ball. Stir in the cardamom if using.", "Turn off the heat, quickly fold in the puffed rice and spread the mixture on a greased plate. When cool enough to handle but still pliable, grease your hands and press small handfuls into 6–8 tight balls. Cool before serving."]
    }
  },
  {
    name: "Punjabi Mooli Bhurji", region: "Punjabi", course: "Side", prep: 8, cook: 10, serves: 2, appliances: ["I"],
    pantry: ["mooli", "radishgreens", "mustardoil", "cuminseeds", "gchilli", "lemon?"],
    source: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/mooli-ki-bhurji-punjabi-mooli-bhurji/"],
    amounts: {
      en: ["200 g white radish and 1 cup chopped tender radish leaves", "1 tbsp mustard oil, ½ tsp cumin seeds and 1 green chilli, finely chopped", "¼ tsp turmeric and ¼ tsp salt", "1 tsp lemon juice (optional)"]
    },
    steps: {
      en: ["Wash the leaves well and discard the tough stems. Chop the tender leaves finely. Peel and coarsely grate the radish.", "Heat the oil in a wide pan over medium-high heat. Sizzle the cumin and chilli, then add the radish, leaves, turmeric and salt.", "Toss for about 7 min until the radish is tender and the moisture has evaporated. Turn off the heat, add optional lemon juice and serve with roti."]
    }
  },
  {
    name: "Himachali Chamba Chukh", region: "Pahadi", course: "Side", prep: 8, cook: 10, serves: 6, appliances: ["I"],
    pantry: ["freshredchilli", "mustardoil", "mustardseeds", "fenugreekseeds", "garlic?", "ginger?", "lemon"],
    source: ["Cuisine India", "https://www.cuisineindiasociety.in/recipes/chukh/"],
    amounts: {
      en: ["60 g fresh red chillies and 1½ tbsp food-grade mustard oil", "¼ tsp mustard seeds, ⅛ tsp fenugreek seeds and ¼ tsp salt", "1 tbsp lemon juice", "2 garlic cloves and 1 cm ginger (both optional)"]
    },
    steps: {
      en: ["Remove the chilli stems. For less heat, scrape out some of the seeds and ribs. Grind the chillies to a coarse paste with the optional ginger and garlic, adding only a splash of water if needed.", "Heat the oil in a small pan. Add the mustard and fenugreek. When the mustard sputters, lower the heat and stir in the chilli paste and salt.", "Cook gently for 6–8 min, stirring frequently, until the paste thickens and turns glossy. Stir in the lemon juice off the heat. Let this small-batch relish cool before serving a little alongside dal and rice."]
    }
  },
  {
    name: "Punjabi Gur ki Roti", region: "Punjabi", course: "Bread", prep: 10, cook: 8, serves: 2, appliances: ["T"],
    pantry: ["atta", "jaggery", "ghee", "fennel?", "sesame?"],
    source: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/gur-ki-roti-recipe-jaggery-roti/"],
    amounts: {
      en: ["¾ cup whole-wheat atta and ¼ cup finely grated jaggery", "About ¼ cup warm water and 2 tsp ghee", "¼ tsp fennel seeds and 1 tsp sesame seeds (both optional)"]
    },
    steps: {
      en: ["Dissolve the jaggery in the warm water. Stir the optional fennel and sesame into the atta, add the syrup gradually and knead to a smooth, firm dough.", "Divide into two balls. Pat or roll each between sheets of baking paper into a round about 4 mm thick.", "Peel off the paper and cook each roti on a medium-hot tawa. Flip when the underside has brown spots, then brush with ghee and cook the other side until spotted and set. Serve warm."]
    }
  },
  {
    name: "Haryanvi Hara Dhania Cholia", region: "North Indian", course: "Main", prep: 8, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["greenchickpeas", "coriander", "onion", "mustardoil", "cuminseeds", "gchilli?", "lemon?"],
    source: ["Desi Food Khazana", "https://desifoodkhazana.com/recipes/hara-dhania-cholia"],
    amounts: {
      en: ["1½ cups fresh, tender, already-shelled green chickpeas (cholia)", "½ cup coriander leaves and fine stems, ½ small onion and ⅓ cup water", "1 tbsp mustard oil, ½ tsp cumin seeds, ¼ tsp turmeric and ¼ tsp salt", "½ green chilli and 1 tsp lemon juice (both optional)"]
    },
    steps: {
      en: ["Rinse the shelled cholia. Finely chop the onion. Grind the coriander with optional chilli and 2 tbsp of the measured water to make a coarse green paste.", "Heat the oil and sizzle the cumin. Fry the onion for 3 min until soft. Add the cholia, turmeric, salt and remaining water.", "Cover and simmer for 6–7 min, until a chickpea crushes easily between two spoons. Stir in the coriander paste and cook uncovered for 1–2 min until the chickpeas are coated. Finish with optional lemon."]
    }
  },
  {
    name: "Matar Besan Cheela", region: "North Indian", course: "Snack", prep: 8, cook: 10, serves: 2, appliances: ["T"],
    pantry: ["peas", "besan", "ajwain", "ginger?", "gchilli?", "coriander?"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/green-pea-pancake-recipe-matar-ka-cheela"],
    amounts: {
      en: ["¾ cup thawed green peas, ½ cup besan and about ½ cup water", "¼ tsp ajwain, ¼ tsp salt and 2 tsp neutral oil", "1 cm ginger, ½ green chilli and 1 tbsp chopped coriander (all optional)"]
    },
    steps: {
      en: ["Pulse the thawed peas with a few spoonfuls of the measured water and optional ginger and chilli. Leave a little texture in the peas.", "Whisk the pea mixture with the besan, ajwain, salt and optional coriander. Add the remaining water gradually until the batter drops easily from a ladle.", "Oil a medium-hot tawa. Spread half the batter into a thin pancake. Cook for 2–3 min until the edges lift, then flip and cook for 2 min until the centre is set. Repeat with the rest of the batter."]
    }
  },
  {
    name: "Bihari Parwal Chokha", region: "Bihari", course: "Side", prep: 8, cook: 10, serves: 2, appliances: ["I"],
    pantry: ["pointedgourd", "mustardoil", "gchilli", "lemon?", "coriander?"],
    source: ["The Steaming Pot", "https://www.steamingpot.com/parval-chokha/"],
    amounts: {
      en: ["250 g young pointed gourd (parwal)", "1 tsp food-grade mustard oil, 1 small green chilli, chopped, and ¼ tsp salt", "1 tsp lemon juice and 1 tbsp chopped coriander (both optional)"]
    },
    steps: {
      en: ["Trim and wash the gourds, then split them lengthwise. Remove any tough seeds and chop the flesh into small pieces.", "Steam over boiling water with the lid on for 7–8 min until a fork goes through easily. Drain well.", "Coarsely mash the hot parwal with the chilli, mustard oil and salt. Add optional lemon and coriander and serve alongside dal and rice."]
    }
  },
  {
    name: "Singhara Atta Cheela", region: "North Indian", course: "Snack", prep: 8, cook: 10, serves: 2, appliances: ["T"],
    pantry: ["singhara", "ghee", "cuminseeds", "gchilli?", "coriander?"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/singhara-atta-cheela-recipe-no-onion-no-garlic-navratri-fasting-vrat-recipe"],
    amounts: {
      en: ["¾ cup singhara atta (water chestnut flour) and ½–¾ cup water", "½ tsp cumin seeds, ¼ tsp salt and 2 tsp ghee", "½ chopped green chilli and 2 tbsp chopped coriander (both optional)"]
    },
    steps: {
      en: ["Whisk the flour, cumin and salt with enough water to make a smooth, pourable batter. Stir in the optional chilli and coriander.", "Heat a nonstick tawa over medium heat and brush it with ghee. Stir the batter again, then spread half into a thin round.", "Cook for 2–3 min until the edges release and the top is set. Flip gently and cook for 1–2 min until golden in spots. Repeat with the rest of the batter and serve hot."]
    }
  },
  {
    name: "Varanasi Malai Toast", region: "Uttar Pradesh", course: "Snack", prep: 4, cook: 5, serves: 2, appliances: ["T"],
    pantry: ["bread", "malai", "sugar"],
    source: ["NDTV Food", "https://food.ndtv.com/food-drinks/chai-malai-toast-the-banarsi-way-of-having-a-mazedar-nashta-3507263"],
    amounts: {
      en: ["2 thick slices of white bread", "3 tbsp chilled, thick malai skimmed from milk, or clotted cream", "2 tsp granulated sugar"]
    },
    steps: {
      en: ["Heat a dry tawa on medium. Toast the bread on both sides until golden and crisp, pressing lightly with a spatula where needed.", "Transfer to a plate and spread the malai over one side of each warm slice. Sprinkle the sugar evenly over the top.", "Serve open-faced right away, while the toast still crunches. It goes well with hot chai."]
    }
  },
  {
    name: "Bihari Khatai Mirchai Chokha", region: "Bihari", course: "Side", prep: 8, cook: 5, serves: 4, appliances: ["I"],
    pantry: ["gchilli", "garlic", "amchur", "coriander", "mustardoil"],
    source: ["Sailaja Kitchen", "https://www.sailajakitchen.org/2025/09/bihari-style-khatai-chokha-recipe.html"],
    amounts: {
      en: ["4 green chillies and 3 garlic cloves", "2 tbsp coriander leaves and soft stems", "½ tsp amchur (dried mango powder), 1 tsp food-grade mustard oil and ¼ tsp salt"]
    },
    steps: {
      en: ["Remove the chilli stems and peel the garlic. Dry-roast both on a medium-hot tawa, turning for 3–5 min until they soften and blister in spots.", "Pound the roasted chillies and garlic with the salt in a mortar. Add the coriander and pound again just until the mixture is coarse.", "Mix in the amchur and mustard oil. Taste and serve a small spoonful with dal and rice or alongside roti."]
    }
  }
];
