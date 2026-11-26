// Small-batch chaat, street snacks and dumplings. Times assume the ingredients listed.
const STREET_FOOD_RECIPES = [
  {
    name: "Raj Kachori Chaat", region: "North Indian", course: "Snack", prep: 12, cook: 0, serves: 2, appliances: ["N"],
    pantry: ["rajkachorishells", "cookedchickpeas", "boiledpotato", "curd", "greenchutney", "tamarindchutney", "sev", "chaatmasala", "pomegranate?"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-raj-kachori-218068"],
    amounts: {
      en: ["2 large ready-made hollow raj kachori shells", "½ cup cooked chickpeas and 1 small boiled potato, diced", "½ cup plain curd, whisked, and ½ tsp chaat masala", "2 tbsp each green chutney, sweet tamarind chutney and sev", "2 tbsp pomegranate seeds (optional)"]
    },
    steps: {
      en: ["Start with crisp ready-made shells and cooled, fully cooked chickpeas and potato. Mix the chickpeas and diced potato with half the chaat masala.", "Set the shells upright in shallow bowls. Tap a small hole in the top of each with the back of a spoon and gently widen it. Divide the potato and chickpea filling between the shells.", "Spoon over curd and both chutneys. Finish with sev, the remaining chaat masala and optional pomegranate. Serve straight away while the shells are crisp."]
    }
  },
  {
    name: "Palak Patta Chaat", region: "North Indian", course: "Snack", prep: 8, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["spinach", "besan", "riceflour", "curd", "greenchutney", "tamarindchutney", "chaatmasala", "sev?"],
    source: ["Chef Kunal Kapur", "https://www.chefkunalkapur.com/recipe/palak-patta-chaat/"],
    amounts: {
      en: ["8 large spinach leaves", "½ cup besan, 1 tbsp rice flour and ⅓ cup water, plus a little extra as needed", "¼ tsp salt, a pinch of chilli powder and about ½ cup neutral oil for shallow-frying", "⅓ cup whisked curd, 2 tbsp each green and tamarind chutney and ½ tsp chaat masala", "2 tbsp sev (optional)"]
    },
    steps: {
      en: ["Rinse the spinach and pat each leaf completely dry. Whisk the flours, salt, chilli and water into a thin batter that lightly coats the back of a spoon.", "Heat a shallow layer of oil over medium-high heat. Dip one leaf at a time, let the excess batter drip off, then lay it flat in the oil. Fry in batches for 2–3 min per batch, turning once, until crisp on both sides. Drain on a rack.", "Spread the leaves in a single layer. Just before serving, drizzle with the curd and chutneys. Scatter over chaat masala and optional sev."]
    }
  },
  {
    name: "Delhi Ram Ladoo Chaat", region: "North Indian", course: "Snack", prep: 9, cook: 10, soak: [120, "moong dal"], serves: 2, appliances: ["I"],
    pantry: ["moong", "mooli", "ginger?", "gchilli", "greenchutney", "lemon", "chaatmasala"],
    source: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/ram-ladoo-recipe/"],
    amounts: {
      en: ["½ cup split yellow moong dal, soaked for 2 hours", "½ small white radish, grated, and 1 green chilli", "1 cm ginger (optional), ¼ tsp salt and neutral oil for frying", "2 tbsp green chutney, 1 tsp lemon juice and ¼ tsp chaat masala"]
    },
    steps: {
      en: ["Soak the dal ahead for 2 hours, then drain thoroughly. Grind with the chilli and optional ginger into a thick, slightly grainy paste, adding water only by the teaspoon if the grinder stalls.", "Beat in the salt for 1 min to lighten the paste. Heat about 3 cm of oil in a small deep pan over medium heat. Drop in heaped teaspoons of batter in two batches. Fry for 3–4 min per batch, turning until evenly golden and cooked through.", "Drain the fritters. Divide into bowls and top with grated radish, green chutney, lemon and chaat masala. Serve hot."]
    }
  },
  {
    name: "Kolkata Jhal Muri", region: "Bengali", course: "Snack", prep: 10, cook: 0, serves: 2, appliances: ["N"],
    pantry: ["murmura", "roastedpeanuts", "onion", "tomato", "gchilli", "mustardoil", "lemon", "coriander?", "chaatmasala"],
    source: ["Bong Eats", "https://www.bongeats.com/recipe/jhal-muri"],
    amounts: {
      en: ["2½ cups crisp puffed rice and ¼ cup roasted peanuts", "¼ red onion, ½ firm tomato and 1 green chilli, finely chopped", "2 tsp food-grade mustard oil, 1 tbsp lemon juice and ½ tsp chaat masala", "2 tbsp chopped coriander (optional)"]
    },
    steps: {
      en: ["Remove the juicy tomato seeds before dicing so the mixture stays crisp. Toss the tomato, onion, chilli and peanuts in a large dry bowl.", "Add the puffed rice and chaat masala. Drizzle the mustard oil and lemon around the bowl and toss briskly so no patch gets soggy.", "Taste, fold in the coriander if using and divide into bowls or clean paper cones. Eat as soon as it is mixed."]
    }
  },
  {
    name: "Mumbai Masala Pav", region: "Maharashtrian", course: "Snack", prep: 6, cook: 12, serves: 2, appliances: ["T"],
    pantry: ["pav", "butter", "onion", "tomato", "capsicum", "pavbhajimasala", "lemon?", "coriander?"],
    source: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/masala-pav-recipe-mumbai-masala-pav/"],
    amounts: {
      en: ["2 pav rolls and 1½ tbsp butter", "½ small onion, 1 tomato and ½ small green capsicum, finely chopped", "1 tsp pav bhaji masala, ¼ tsp salt and 2 tbsp water", "1 tsp lemon juice and 1 tbsp coriander (both optional)"]
    },
    steps: {
      en: ["Melt 1 tbsp butter on a tawa or wide skillet. Fry the onion and capsicum over medium-high heat for 3 min.", "Add the tomato, pav bhaji masala, salt and water. Cook for 5–6 min, pressing with the spatula until the tomatoes break down into a thick masala.", "Push the masala to one side. Split the pav without cutting all the way through. Toast the cut sides in the remaining butter, spoon in the masala and roll the outside lightly through any extra masala. Finish with optional lemon and coriander."]
    }
  },
  {
    name: "Amritsari Bun Chole", region: "Punjabi", course: "Snack", prep: 6, cook: 10, serves: 2, appliances: ["T"],
    pantry: ["pav", "cookedchickpeas", "onion", "tomato", "cholemasala", "butter", "lemon"],
    source: ["NDTV Food", "https://food.ndtv.com/food-drinks/how-to-make-amritsari-bun-chole-a-street-style-delicacy-you-must-try-3136751"],
    amounts: {
      en: ["2 soft buns or pav and 1 cup fully cooked chickpeas", "½ small red onion, 1 small tomato and ¼ cup water", "1 tbsp butter, 1 tsp chole masala and ¼ tsp salt", "1 tsp lemon juice"]
    },
    steps: {
      en: ["Use drained canned or already-boiled chickpeas. Finely chop half the onion and thinly slice the rest for topping. Chop the tomato.", "Melt half the butter in a skillet. Fry the chopped onion for 2 min, add tomato and chole masala and cook until the tomato softens. Add the chickpeas, salt and water. Simmer for 3–4 min, mashing some chickpeas until the filling is thick enough to sit in a bun.", "Split the buns and toast the cut faces in the remaining butter. Fill with hot chole, sliced onion and lemon juice."]
    }
  },
  {
    name: "Irani Cafe Bun Maska", region: "Maharashtrian", course: "Snack", prep: 5, cook: 0, serves: 2, appliances: ["N"],
    pantry: ["pav", "butter", "cream?"],
    source: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/bun-maska/"],
    amounts: {
      en: ["2 soft bakery buns or pav", "3 tbsp softened salted butter", "2 tsp thick cream (optional)"]
    },
    steps: {
      en: ["Start with butter soft enough to spread easily. Beat it with a fork for about 1 min until smooth, then whip in the optional cream.", "Split each bun horizontally. Keep the crust and crumb soft and spread the butter thickly over the cut surfaces.", "Close the buns and cut each in half. Serve at room temperature with hot chai."]
    }
  },
  {
    name: "Cantonese Shrimp Siu Mai", region: "Chinese", course: "Snack", prep: 15, cook: 8, serves: 2, nonveg: true, appliances: ["I"],
    keywords: "dim sum dimsum",
    pantry: ["prawn", "wontonwrappers", "springonion", "cornflour", "soysauce", "sesameoil", "carrot?"],
    source: ["Souped Up Recipes", "https://curatedkitchenware.com/en-nz/blogs/soupeduprecipes/cantonese-shrimp-siu-mai-recipe"],
    amounts: {
      en: ["160 g thawed peeled raw shrimp and 10 thin wonton wrappers", "1 spring onion, finely chopped, and 2 tsp cornflour", "1 tsp light soy sauce, ½ tsp toasted sesame oil and a pinch of salt", "1 tbsp finely diced carrot (optional)"]
    },
    steps: {
      en: ["Pat the shrimp dry. Finely mince half and chop the rest into small pieces. Stir them together with spring onion, cornflour, soy, sesame oil and salt until the mixture feels sticky.", "Place about a rounded tablespoon of filling on each wrapper. Cup the wrapper around it, pleat the sides and flatten the bottom, leaving the top open. Add a little diced carrot to each top if using.", "Place upright in a lightly oiled steamer basket without crowding. Steam over boiling water for 7–8 min, until the centres reach 145°F (63°C) and the shrimp is firm and opaque. Serve hot."]
    }
  },
  {
    name: "Hong Kong Street Cheung Fun", region: "Chinese", course: "Snack", prep: 6, cook: 6, serves: 2, appliances: ["I"],
    keywords: "dim sum dimsum rice noodle rolls",
    pantry: ["ricenoodlerolls", "hoisinsauce", "peanutbutter", "soysauce", "sesame?"],
    source: ["Hung’s Noodles", "https://hungsnoodles.com/rice-rolls-aka-cheung-fun-hong-kong-street-vendor-style/"],
    amounts: {
      en: ["250 g prepared plain rice noodle rolls, chilled or at room temperature", "1½ tbsp hoisin sauce and 1 tbsp smooth peanut butter", "1 tsp light soy sauce and 2–3 tbsp hot water", "1 tsp toasted sesame seeds (optional)"]
    },
    steps: {
      en: ["Cut the ready-made rice noodle rolls into bite-sized pieces. Steam on a heatproof plate over boiling water for about 5 min until hot, supple and easy to separate.", "Stir the peanut butter with 1–2 tbsp hot water to make a pourable sauce. In another bowl, loosen the hoisin and soy sauce with the remaining hot water.", "Divide the rolls between two plates. Drizzle over both sauces and sprinkle with optional sesame seeds. Serve immediately."]
    }
  },
  {
    name: "Sichuan Chicken Chilli Oil Wontons", region: "Chinese", course: "Snack", prep: 17, cook: 8, serves: 2, nonveg: true, appliances: ["I"],
    keywords: "dumplings dim sum dimsum",
    pantry: ["chicken", "wontonwrappers", "springonion", "soysauce", "chillioil", "vinegar", "ginger?", "sugar"],
    source: ["Red House Spice", "https://redhousespice.com/sichuan-spicy-wonton-in-chili-oil/"],
    amounts: {
      en: ["120 g ground chicken and 12 square wonton wrappers", "1 finely sliced spring onion, 1 tsp light soy sauce and 1 tbsp cold water for the filling", "1 tsp grated ginger (optional)", "1 tbsp chilli oil, 1 tbsp light soy sauce, 2 tsp black or rice vinegar and ½ tsp sugar for the dressing"]
    },
    steps: {
      en: ["Mix the chicken, half the spring onion, the filling soy sauce, cold water and optional ginger until sticky. Set a heaped teaspoon in the centre of each wrapper.", "Wet the edges, fold each wrapper into a triangle and press out the air while sealing. Wet the two corners on the long edge and pinch them together.", "Lower the wontons into gently boiling water and stir once. Cook at a gentle boil for 4–6 min, until the filling reaches 165°F (74°C). Lift out with a slotted spoon.", "Stir the chilli oil, dressing soy sauce, vinegar and sugar into two shallow bowls. Add a spoonful of hot cooking water to each. Divide the wontons between the bowls and finish with the remaining spring onion."]
    }
  },
  {
    name: "Garlic Chive and Egg Dumplings", region: "Chinese", course: "Snack", prep: 15, cook: 10, serves: 2, nonveg: true, appliances: ["I"],
    keywords: "dim sum dimsum potstickers jiaozi",
    pantry: ["dumplingwrappers", "garlicchives", "eggs", "sesameoil", "soysauce?"],
    source: ["The North Grove Kitchen", "https://www.thenorthgrove.ca/post/from-the-north-grove-kitchen-emily-s-garlic-chive-egg-dumplings"],
    amounts: {
      en: ["12 round dumpling wrappers, 2 eggs and ¾ cup finely chopped garlic chives", "2 tsp neutral oil, 1 tsp sesame oil and ¼ tsp salt", "¼ cup water for the pan and 1 tbsp soy sauce for dipping (soy sauce optional)"]
    },
    steps: {
      en: ["Beat the eggs and scramble in 1 tsp neutral oil until set. Break into small pieces and spread on a plate to cool. Toss the chives with sesame oil, then mix in the cooled egg and salt.", "Place a small spoonful of filling on each wrapper. Wet the edge, fold into a half-moon and press the seams firmly closed.", "Heat the remaining oil in a wide nonstick pan. Stand the dumplings on their flat sides and cook for 2 min until lightly browned underneath.", "Pour in the water, cover and steam for 4–5 min. Uncover and cook until the water has evaporated and the bottoms are crisp. Serve with optional soy sauce."]
    }
  },
  {
    name: "Hong Kong Curry Fish Balls", region: "Chinese", course: "Snack", prep: 5, cook: 12, serves: 2, nonveg: true, appliances: ["I"],
    keywords: "street food gaa lei jyu daan",
    pantry: ["fishballs", "onion", "currypowder", "soysauce", "cornflour", "sugar"],
    source: ["Lee Kum Kee", "https://usa.lkk.com/en/foodservices/homecooks/recipes/hong-kong-style-curry-street-food"],
    amounts: {
      en: ["250 g fully cooked fish balls, thawed if frozen", "¼ small onion, finely chopped, and 2 tsp neutral oil", "2 tsp mild curry powder, 1 tsp light soy sauce and ½ tsp sugar", "¾ cup water plus 1 tbsp cold water, and 1 tsp cornflour"]
    },
    steps: {
      en: ["Fry the onion in oil over medium heat for 2–3 min until softened. Add curry powder and stir briefly, then add the ¾ cup water, soy sauce and sugar.", "Bring to a simmer. Add the fully cooked fish balls and simmer for 5–7 min, or as directed on the package, until steaming hot throughout.", "Mix the cornflour and cold water. Stir it into the bubbling sauce and simmer for 1 min until glossy and thick enough to coat the balls. Serve in small bowls or on skewers."]
    }
  },
  {
    name: "Steamed Mushroom Tofu Dumplings", region: "Chinese", course: "Snack", prep: 15, cook: 11, serves: 2, appliances: ["I"],
    keywords: "vegetarian dim sum dimsum dumplings",
    pantry: ["dumplingwrappers", "tofu", "mushroom", "springonion", "soysauce", "sesameoil", "ginger?"],
    source: ["Everyday Gourmet", "https://everydaygourmet.tv/recipes/mushroom-vegetable-and-tofu-dumplings"],
    amounts: {
      en: ["12 round egg-free dumpling wrappers and 100 g firm tofu", "60 g fresh shiitake or button mushrooms, finely chopped, and 1 finely sliced spring onion", "1 tsp light soy sauce, ½ tsp toasted sesame oil and 1 tsp neutral oil", "½ tsp grated ginger (optional)"]
    },
    steps: {
      en: ["Pat the tofu dry and crumble it. Heat the neutral oil in a small skillet. Fry the mushrooms over medium-high heat for 3–4 min until their liquid evaporates. Stir in the tofu, spring onion, soy, sesame oil and optional ginger. Spread on a plate to cool.", "Put a heaped teaspoon of cooled filling in each wrapper. Wet the rim, fold into a half-moon and press the edges together firmly. Keep the wrappers under a damp towel as you work.", "Space the dumplings on a lightly oiled steamer basket. Cover and steam over boiling water for 6–7 min until the wrappers are tender and the filling is piping hot. Serve immediately."]
    }
  }
];
