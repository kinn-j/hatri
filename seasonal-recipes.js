// Sindhi home dishes and Christmas recipes, with English and Hindi instructions.
const SEASONAL_PANTRY = {
  "Kitchen basics & spices": [["groundginger", "Ground ginger (sonth)"]],
  "Specialty & other": [["applejuice", "Unsweetened apple juice"]]
};

const SEASONAL_RECIPES = [
  {
    name: "Sai Bhaji", region: "Sindhi", course: "Main", prep: 15, cook: 25,
    serves: 4, soak: [30, "chana dal"], appliances: ["I"],
    pantry: ["spinach", "chanadal", "onion", "tomato", "ginger", "garlic", "gchilli?", "turmeric"],
    amounts: {
      en: ["300 g spinach and ⅓ cup chana dal", "1 onion, 2 tomatoes, 1 tsp grated ginger, 3 garlic cloves and 1 optional green chilli", "1 tbsp oil, ½ tsp turmeric, ½ tsp salt and 1 cup water"]
    },
    steps: {
      en: ["Rinse and soak the dal for 30 min. Wash and chop the spinach while it soaks.", "In a pressure cooker, soften the chopped onion in oil. Add ginger, garlic, chilli and tomatoes and cook until the tomatoes break down.", "Add drained dal, spinach, turmeric, salt and water. Pressure-cook for 12 min at high pressure and let the pressure release naturally. Mash lightly and simmer uncovered if it needs thickening."]
    }
  },
  {
    name: "Sindhi Koki", region: "Sindhi", course: "Bread", prep: 15, cook: 20,
    serves: 4, appliances: ["I"], pantry: ["atta", "onion", "coriander", "gchilli?", "ajwain", "ghee"],
    amounts: {
      en: ["2 cups atta, 1 small finely chopped onion, ¼ cup chopped coriander and 1 optional green chilli", "½ tsp ajwain, ½ tsp salt, 3 tbsp ghee and about ½ cup water"]
    },
    steps: {
      en: ["Rub 1 tbsp ghee into the atta. Mix in the onion, coriander, chilli, ajwain and salt. Add water a little at a time to make a firm dough.", "Divide into four portions and roll into thick rounds. Score each surface lightly with a knife.", "Cook on a medium-low tawa, flipping as needed. Brush with the remaining ghee and cook until both sides are golden and crisp."]
    }
  },
  {
    name: "Aloo Tuk", region: "Sindhi", course: "Side", prep: 10, cook: 22,
    serves: 4, appliances: ["I"], pantry: ["potato", "amchur", "redchillipowder", "corianderpowder"],
    amounts: {
      en: ["4 medium potatoes and neutral oil for frying", "½ tsp each amchur, ground coriander and salt, plus ¼ tsp red chilli powder"]
    },
    steps: {
      en: ["Peel the potatoes and cut them into thick rounds. Pat dry and fry over medium heat until tender but still pale.", "Lift out, drain and gently flatten each round. Fry again over medium-high heat until crisp and golden.", "Drain and toss the hot potatoes with amchur, coriander, chilli and salt."]
    }
  },
  {
    name: "Sindhi Kadhi", region: "Sindhi", course: "Main", prep: 15, cook: 35,
    serves: 4, appliances: ["I"], pantry: ["besan", "tamarind", "potato", "okra", "beans", "currylv", "cuminseeds", "turmeric", "redchillipowder"],
    amounts: {
      en: ["¼ cup besan, 2 tbsp oil, ½ tsp cumin seeds and 8 curry leaves", "1 potato, 100 g okra, 100 g green beans, ½ tsp turmeric, ¼ tsp red chilli powder and ¾ tsp salt", "1 tbsp seedless tamarind and 4 cups water, divided"]
    },
    steps: {
      en: ["Soak the tamarind in ¼ cup warm water. Chop the vegetables. Sizzle cumin and curry leaves in oil, then stir in besan and roast over low heat until nutty.", "Gradually whisk in the remaining water. Add turmeric, chilli and salt. Simmer the potatoes and beans for 12 min, then add okra and cook until tender.", "Squeeze and strain the tamarind into the kadhi. Simmer for 5 min and serve with rice."]
    }
  },
  {
    name: "Eggless Christmas Plum Cake", region: "International / National", course: "Baked",
    occasion: "Christmas", prep: 20, cook: 50, serves: 8,
    pantry: ["maida", "raisins", "dates", "orange", "curd", "butter", "sugar", "bakingpowder", "bakingsoda", "cinnamon"],
    amounts: {
      en: ["1½ cups maida, 1 tsp baking powder, ½ tsp baking soda, 1 tsp ground cinnamon and a pinch of salt", "½ cup raisins, ½ cup chopped dates, ½ cup orange juice and 1 tsp orange zest", "½ cup plain curd, ½ cup melted butter and ½ cup sugar"]
    },
    steps: {
      en: ["Heat the oven to 170°C and line a 20 cm loaf tin. Warm the raisins and dates in orange juice for 3 min, then cool.", "Whisk curd, cooled butter, sugar and zest. Fold in the sifted dry ingredients, fruit and any remaining juice just until combined.", "Transfer to the tin and bake for 40–48 min, until a skewer in the centre comes out without wet batter. Cool before slicing."]
    }
  },
  {
    name: "Eggless Gingerbread Stars", region: "International / National", course: "Baked",
    occasion: "Christmas", prep: 20, cook: 12, serves: 6,
    pantry: ["maida", "butter", "jaggery", "groundginger", "cinnamon", "bakingsoda", "milk?"],
    amounts: {
      en: ["1¼ cups maida, 1 tsp ground ginger, ½ tsp ground cinnamon, ¼ tsp baking soda and a pinch of salt", "⅓ cup softened butter, ½ cup finely grated jaggery and up to 1 tbsp milk if needed"]
    },
    steps: {
      en: ["Beat the butter and jaggery. Mix in flour, spices, soda and salt until it forms a dough, adding milk only if it crumbles.", "Roll between sheets of baking paper to about 5 mm thick. Chill for 15 min while the oven heats to 175°C, then cut into stars.", "Bake on a lined tray for 9–12 min, until the edges are firm. Cool on the tray for 5 min before moving to a rack."]
    }
  },
  {
    name: "Goan Neureos", region: "Goan & Konkan", course: "Sweet",
    occasion: "Christmas", prep: 30, cook: 25, serves: 6, appliances: ["I"],
    pantry: ["maida", "suji", "coconut", "sugar", "ghee", "cardamom"],
    amounts: {
      en: ["1 cup maida, 2 tbsp fine suji, 1 tbsp ghee, a pinch of salt and about ⅓ cup water", "1 cup grated coconut, ⅓ cup sugar, ¼ tsp ground cardamom and neutral oil for frying"]
    },
    steps: {
      en: ["Rub ghee into the maida, suji and salt. Add water gradually to make a firm dough and cover for 15 min.", "Cook coconut and sugar together until the mixture looks dry. Stir in cardamom and cool completely.", "Roll thin dough circles. Place a spoonful of filling on each, dampen the edge, fold and press shut. Fry in batches over medium heat until evenly golden."]
    }
  },
  {
    name: "Christmas Spiced Apple Punch", region: "International / National", course: "Drink",
    occasion: "Christmas", prep: 5, cook: 15, serves: 4, appliances: ["I"],
    pantry: ["applejuice", "orange", "cinnamon", "cloves", "ginger?"],
    amounts: {
      en: ["3 cups unsweetened apple juice, 1 sliced orange and ½ cup water", "1 cinnamon stick, 3 whole cloves and 3 optional thin slices of ginger"]
    },
    steps: {
      en: ["Combine the juice, water, orange and spices in a saucepan.", "Bring to a gentle simmer, cover and cook on low for 12–15 min.", "Strain out the spices and serve warm."]
    }
  },
  {
    "name": "Orange & Almond Christmas Cake",
    "region": "International / National",
    "course": "Baked",
    "occasion": "Christmas",
    "prep": 15,
    "cook": 35,
    "serves": 6,
    "pantry": [
      "maida",
      "almonds",
      "orange",
      "sugar",
      "curd",
      "butter",
      "bakingpowder"
    ],
    "amounts": {
      "en": [
        "1 cup flour, ¼ cup ground almonds, 1½ tsp baking powder, ½ cup sugar, ⅓ cup each curd and melted butter, zest and ¼ cup juice of an orange"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C. Line an 18 cm round tin. Whisk curd, sugar, butter, juice and zest.",
        "Fold in flour, almonds and baking powder. Bake for 30–35 minutes until a skewer comes out clean. Cool before slicing."
      ]
    }
  },
  {
    "name": "Chocolate Cinnamon Christmas Cupcakes",
    "region": "International / National",
    "course": "Baked",
    "occasion": "Christmas",
    "prep": 10,
    "cook": 20,
    "serves": 6,
    "pantry": [
      "maida",
      "cocoa",
      "cinnamon",
      "sugar",
      "milk",
      "butter",
      "bakingpowder"
    ],
    "amounts": {
      "en": [
        "¾ cup flour, 2 tbsp cocoa, ½ tsp cinnamon, 1 tsp baking powder, ⅓ cup sugar, ½ cup milk and 3 tbsp melted butter"
      ]
    },
    "steps": {
      "en": [
        "Line six muffin cups and heat oven to 175°C. Sift flour, cocoa, cinnamon and baking powder together.",
        "Stir sugar into milk and butter. Fold into dry ingredients, divide between cups and bake 17–20 minutes until a skewer comes out clean."
      ]
    }
  },
  {
    "name": "Christmas Gingerbread Hot Chocolate",
    "region": "International / National",
    "course": "Drink",
    "occasion": "Christmas",
    "prep": 3,
    "cook": 7,
    "serves": 2,
    "pantry": [
      "milk",
      "cocoa",
      "sugar",
      "groundginger",
      "cinnamon"
    ],
    "amounts": {
      "en": [
        "2 cups milk, 2 tbsp cocoa, 2 tbsp sugar and ¼ tsp each ground ginger and cinnamon"
      ]
    },
    "steps": {
      "en": [
        "Mix cocoa, sugar and spices with a splash of cold milk until smooth.",
        "Whisk in the remaining milk. Warm over low heat, stirring until steaming, then pour into mugs."
      ]
    },
    "appliances": [
      "I"
    ]
  },
  {
    "name": "Christmas Orange Mint Cooler",
    "region": "International / National",
    "course": "Drink",
    "occasion": "Christmas",
    "prep": 8,
    "cook": 0,
    "serves": 2,
    "pantry": [
      "orange",
      "lemon",
      "mint",
      "sugar"
    ],
    "amounts": {
      "en": [
        "3 oranges, ½ lemon, 8 mint leaves, 2 tsp sugar and ½ cup chilled water"
      ]
    },
    "steps": {
      "en": [
        "Gently crush mint with sugar and lemon juice in a jug.",
        "Squeeze in the oranges, add chilled water and stir until the sugar dissolves. Divide between two glasses."
      ]
    },
    "appliances": [
      "N"
    ]
  },
  {
    "name": "Christmas Tree Toast Pizzas",
    "region": "International / National",
    "course": "Snack",
    "occasion": "Christmas",
    "prep": 10,
    "cook": 10,
    "serves": 2,
    "pantry": [
      "bread",
      "tomato",
      "capsicum",
      "cheese",
      "butter"
    ],
    "amounts": {
      "en": [
        "4 bread slices, 1 finely chopped tomato, ½ thinly sliced green capsicum, ½ cup grated cheese and 2 tsp butter"
      ]
    },
    "steps": {
      "en": [
        "Cut bread into large triangles. Butter the undersides and set in a cool skillet.",
        "Top with cheese. Arrange capsicum strips as tree branches and tomato pieces as ornaments. Cover and cook on low for 6–10 minutes until crisp underneath and melted on top."
      ]
    },
    "appliances": [
      "I"
    ]
  },
  {
    "name": "Christmas Wreath Flatbread Pizza",
    "region": "International / National",
    "course": "Main",
    "occasion": "Christmas",
    "prep": 15,
    "cook": 18,
    "serves": 2,
    "pantry": [
      "atta",
      "curd",
      "bakingpowder",
      "tomato",
      "spinach",
      "cheese"
    ],
    "amounts": {
      "en": [
        "1 cup atta, ½ tsp baking powder, ⅓ cup curd, 2 tomatoes grated, ½ cup chopped spinach, ½ cup grated cheese and a pinch of salt"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 220°C. Knead flour, baking powder, salt and curd, adding water by teaspoons as needed. Roll into two thin discs on baking paper and cut a hole in each centre.",
        "Simmer tomatoes until thick. Spread over the rings, scatter with spinach and cheese and bake 12–15 minutes until the edges brown."
      ]
    }
  },
  {
    "name": "Red & Green Christmas Pasta",
    "region": "International / National",
    "course": "Main",
    "occasion": "Christmas",
    "prep": 10,
    "cook": 18,
    "serves": 2,
    "pantry": [
      "pasta",
      "tomato",
      "spinach",
      "garlic",
      "butter"
    ],
    "amounts": {
      "en": [
        "160 g short pasta, 3 chopped tomatoes, 2 cups shredded spinach, 3 minced garlic cloves, 1 tbsp butter and salt to taste"
      ]
    },
    "steps": {
      "en": [
        "Boil pasta in salted water until just tender. Reserve half a cup of cooking water before draining.",
        "Soften garlic in butter, add tomatoes and cook until saucy. Wilt the spinach in the sauce. Toss with pasta and enough cooking water to coat."
      ]
    },
    "appliances": [
      "I"
    ]
  },
  {
    "name": "Christmas Beetroot Cream Pasta",
    "region": "International / National",
    "course": "Main",
    "occasion": "Christmas",
    "prep": 10,
    "cook": 25,
    "serves": 2,
    "pantry": [
      "pasta",
      "beetroot",
      "cream",
      "garlic",
      "butter"
    ],
    "amounts": {
      "en": [
        "160 g pasta, 1 small peeled and grated beetroot, ¼ cup cream, 2 minced garlic cloves, 1 tbsp butter and salt to taste"
      ]
    },
    "steps": {
      "en": [
        "Soften garlic in butter. Add beetroot, salt and a splash of water. Cover and cook 12–15 minutes until tender.",
        "Meanwhile boil pasta, saving half a cup of cooking water. Stir cream into the beetroot over low heat and toss with drained pasta, loosening with the reserved water."
      ]
    },
    "appliances": [
      "I"
    ]
  }
];
