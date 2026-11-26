// Home-kitchen adaptations. Cuisine keywords let users find dishes by country or region.
const INTERNATIONAL_RECIPES = [
  {
    name: "Mujaddara", keywords: "Lebanese Levantine Middle Eastern lentils rice",
    course: "Complete", prep: 10, cook: 40, serves: 4, pantry: ["masoorwhole", "rice", "onion", "oliveoil", "cumin"],
    amounts: {
      en: ["¾ cup whole brown lentils, ¾ cup rice and 2 large onions", "3 tbsp olive oil, 1 tsp ground cumin, ¾ tsp salt and water"]
    },
    steps: {
      en: ["Rinse the lentils and simmer in 2½ cups water for 15 min. Rinse the rice separately.", "Add rice, cumin and salt to the lentils. Cover and simmer on low until both are tender, about 20 min. Add a splash of hot water if needed.", "Meanwhile, fry thinly sliced onions in oil until deep golden. Fold half into the rice and scatter the rest on top."]
    }
  },
  {
    name: "Egyptian Ful Medames", keywords: "Egyptian North African Middle Eastern mashed fava beans",
    course: "Main", prep: 7, cook: 12, serves: 3, pantry: ["cookedfavabeans", "lemon", "garlic", "cumin", "oliveoil"],
    amounts: {
      en: ["2 cups drained cooked fava beans and ½ cup water", "1 garlic clove, 1 lemon, ¾ tsp ground cumin, 2 tbsp olive oil and salt"]
    },
    steps: {
      en: ["Simmer the cooked beans with water for 8–10 min until piping hot.", "Crush garlic with cumin, salt and lemon juice. Stir into the beans and roughly mash.", "Drizzle with olive oil and serve warm with flatbread."]
    }
  },
  {
    name: "Turkish Red Lentil Soup", keywords: "Turkish mercimek corbasi Turkey",
    course: "Main", prep: 10, cook: 25, serves: 4, pantry: ["masoor", "onion", "carrot", "cumin", "lemon", "oliveoil"],
    amounts: {
      en: ["1 cup split red lentils, 1 onion, 1 carrot and 4 cups water", "1 tbsp olive oil, ½ tsp ground cumin, ½ tsp salt and 1 lemon"]
    },
    steps: {
      en: ["Chop onion and carrot. Soften them in oil and stir in cumin.", "Add rinsed lentils, salt and water. Simmer for 20 min or until the lentils and carrot are tender.", "Blend until smooth using an immersion blender, then season with lemon juice."]
    }
  },
  {
    name: "Spanish Pisto", keywords: "Spanish Spain pisto manchego vegetable stew",
    course: "Main", prep: 15, cook: 35, serves: 4, pantry: ["onion", "capsicum", "zucchini", "tomato", "garlic", "oliveoil"],
    amounts: {
      en: ["1 onion, 2 peppers, 2 small zucchini and 5 ripe tomatoes", "2 garlic cloves, 3 tbsp olive oil and ½ tsp salt"]
    },
    steps: {
      en: ["Dice the vegetables. Cook onion and peppers in oil for 10 min until softened.", "Add garlic and zucchini and cook 7 min, stirring occasionally.", "Add chopped tomatoes and salt. Simmer uncovered for 15–18 min until thick and spoonable."]
    }
  },
  {
    name: "French Ratatouille", keywords: "French France Provencal Provençal tomato vegetable stew",
    course: "Main", prep: 15, cook: 35, serves: 4, pantry: ["brinjal", "zucchini", "capsicum", "tomato", "onion", "garlic", "oliveoil", "thyme"],
    amounts: {
      en: ["1 small eggplant, 1 zucchini, 1 bell pepper, 1 onion and 4 tomatoes", "3 garlic cloves, 3 tbsp olive oil, ½ tsp dried thyme and ½ tsp salt"]
    },
    steps: {
      en: ["Dice the eggplant and zucchini and brown them separately in a little oil. Set aside.", "In the same pan, soften onion and pepper in the remaining oil. Stir in garlic, tomatoes, thyme and salt.", "Return the browned vegetables. Simmer gently for 20 min until tender and the tomato juices thicken."]
    }
  },
  {
    name: "Mexican Esquites", keywords: "Mexican Mexico street corn lime",
    course: "Snack", prep: 10, cook: 10, serves: 3, pantry: ["corn", "butter", "egglessmayonnaise", "lemon", "redchillipowder", "feta"],
    amounts: {
      en: ["2 cups corn kernels, 1 tbsp butter and ¼ tsp salt", "2 tbsp eggless mayonnaise, 1 tbsp lime or lemon juice, ¼ tsp red chilli powder and ¼ cup crumbled vegetarian feta"]
    },
    steps: {
      en: ["Sauté corn in butter over medium-high heat until tender and browned in spots.", "Take off the heat and toss with eggless mayonnaise, citrus juice and salt.", "Spoon into cups and top with chilli and crumbled vegetarian feta."]
    }
  },
  {
    name: "Japanese Miso Onigiri", keywords: "Japanese Japan yaki onigiri grilled rice ball",
    course: "Snack", prep: 10, cook: 25, serves: 3, pantry: ["shortgrainrice", "misopaste", "sesameoil"],
    amounts: {
      en: ["1 cup Japanese short-grain rice and water for cooking", "1 tbsp plain miso paste, 1 tbsp water for the glaze and 1 tsp sesame oil"]
    },
    steps: {
      en: ["Rinse and cook the rice according to the packet. Let it cool just enough to handle.", "Use lightly wet hands to shape the warm rice into six compact triangles. Stir miso and glaze water together.", "Pan-toast the triangles in sesame oil until crisp. Brush thinly with miso and toast briefly on both sides."]
    }
  },
  {
    name: "Korean Vegetable Japchae", keywords: "Korean Korea glass noodles japchae",
    course: "Complete", prep: 20, cook: 15, serves: 3, pantry: ["glassnoodles", "carrot", "spinach", "mushroom", "onion", "soysauce", "sesameoil", "garlic", "sugar"],
    amounts: {
      en: ["150 g sweet potato glass noodles, 1 carrot, 100 g spinach, 150 g mushrooms and 1 onion", "2 garlic cloves, 2 tbsp soy sauce, 1 tbsp sesame oil and 1 tsp sugar"]
    },
    steps: {
      en: ["Cook the noodles according to the packet and drain. Blanch spinach briefly and squeeze dry.", "Slice mushrooms and onion, cut carrot into matchsticks and stir-fry with garlic in half the oil until tender-crisp.", "Toss noodles and spinach with the vegetables, soy sauce, sugar and remaining sesame oil over low heat until evenly coated."]
    }
  },
  {
    name: "Indonesian Gado Gado", keywords: "Indonesian Indonesia peanut sauce vegetable salad",
    course: "Complete", prep: 15, cook: 20, serves: 3, pantry: ["tofu", "potato", "beans", "cabbage", "cucumber", "peanutbutter", "soysauce", "jaggery", "lemon"],
    amounts: {
      en: ["200 g firm tofu, 2 potatoes, 100 g green beans, 150 g cabbage and 1 cucumber", "¼ cup unsweetened peanut butter, 1 tbsp soy sauce, 2 tsp jaggery, juice of ½ lemon and ¼ cup warm water"]
    },
    steps: {
      en: ["Boil potato chunks until tender. Blanch sliced cabbage and green beans until tender-crisp. Drain and slice the cucumber.", "Pat the tofu dry, cube it and pan-sear on a nonstick pan until golden.", "Whisk the sauce ingredients until pourable and spoon over the vegetables and tofu."]
    }
  },
  {
    name: "Vietnamese Tofu Summer Rolls", keywords: "Vietnamese Vietnam goi cuon gỏi cuốn rice paper",
    course: "Snack", prep: 25, cook: 8, serves: 3, pantry: ["ricepaper", "tofu", "carrot", "cucumber", "mint", "soysauce", "lemon"],
    amounts: {
      en: ["6 rice paper wrappers, 180 g firm tofu, 1 carrot, 1 cucumber and one handful mint leaves", "2 tbsp soy sauce, 1 tbsp lemon juice and 1 tbsp water for dipping"]
    },
    steps: {
      en: ["Cut tofu into strips and pan-sear until golden. Thinly slice the carrot and cucumber.", "Dip one wrapper in room-temperature water for a few seconds. Lay flat and add tofu, vegetables and mint. Fold in both sides and roll snugly.", "Repeat with the remaining wrappers. Stir soy sauce, lemon juice and water together for dipping."]
    }
  },
  {
    name: "West African Peanut Stew", keywords: "West African Senegalese mafe mafé groundnut sweet potato",
    course: "Main", prep: 12, cook: 30, serves: 4, pantry: ["sweetpotato", "tomato", "onion", "garlic", "ginger", "peanutbutter", "spinach"],
    amounts: {
      en: ["450 g sweet potato, 3 tomatoes, 1 onion and 100 g spinach", "3 garlic cloves, 1 tbsp grated ginger, ⅓ cup unsweetened peanut butter, 1 tbsp oil, 2 cups water and salt"]
    },
    steps: {
      en: ["Soften chopped onion in oil. Add garlic, ginger and diced tomatoes and simmer until the tomatoes break down.", "Add peeled, diced sweet potato and water. Whisk peanut butter with a ladle of warm broth and stir it back into the pot.", "Simmer until the sweet potato is tender, then stir in chopped spinach and cook until wilted. Season with salt."]
    }
  },
  {
    name: "Moroccan Chickpea Couscous", keywords: "Moroccan Morocco North African",
    course: "Complete", prep: 12, cook: 23, serves: 4, pantry: ["couscous", "cookedchickpeas", "carrot", "zucchini", "onion", "tomato", "cumin", "cinnamon", "oliveoil"],
    amounts: {
      en: ["1 cup instant couscous, 1½ cups cooked chickpeas, 1 onion, 2 carrots, 1 zucchini and 2 tomatoes", "2 tbsp olive oil, 1 tsp ground cumin, ¼ tsp cinnamon, water and salt"]
    },
    steps: {
      en: ["Soften chopped onion in oil, then add cumin, cinnamon, chopped tomatoes and carrots with ½ cup water.", "Cover and simmer for 10 min. Add chickpeas and chopped zucchini and cook until the vegetables are tender.", "Meanwhile hydrate the couscous according to the packet and fluff with a fork. Spoon the chickpeas and vegetables over it."]
    }
  }
];

const INTERNATIONAL_PANTRY = [
  ["masoorwhole", "Whole masoor (brown lentils)"],
  ["zucchini", "Zucchini (courgette)"],
  ["cookedfavabeans", "Cooked fava beans"],
  ["egglessmayonnaise", "Eggless mayonnaise"],
  ["feta", "Vegetarian feta"],
  ["shortgrainrice", "Japanese short-grain rice"],
  ["misopaste", "Plain miso paste"],
  ["glassnoodles", "Sweet potato glass noodles"],
  ["ricepaper", "Rice paper wrappers"],
  ["couscous", "Instant couscous"]
];
