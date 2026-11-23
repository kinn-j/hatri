// Measured ingredients and dish-specific methods for Hatri. When steps are
// omitted, the recipe card uses the existing method for that dish.
const HATRI_RECIPE_DETAILS = {
  "Dry Fruit Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup mixed almonds and cashews",
        "¾ cup soft pitted dates",
        "1 tsp ghee, optional"
      ]
    },
    "steps": {
      "en": [
        "Toast the nuts over medium-low heat for 4–5 min. Cool and pulse to coarse crumbs.",
        "Mash or pulse the dates to a paste. Knead into the nuts with the ghee, if using.",
        "Press firmly into 8 balls. If crumbly, add another soft date and knead again."
      ]
    }
  },
  "Atta Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup atta",
        "⅓ cup ghee",
        "½ cup finely grated jaggery",
        "¼ tsp cardamom"
      ]
    },
    "steps": {
      "en": [
        "Roast the atta in ghee over low heat for 15–20 min, stirring constantly, until nutty and a shade darker.",
        "Take off the heat and let cool until comfortably warm. Stir in jaggery and cardamom.",
        "Squeeze a spoonful firmly in your palm. If it crumbles, knead in a teaspoon of melted ghee. Shape 8 ladoos."
      ]
    }
  },
  "Moong Dal Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup split yellow moong",
        "¼ cup ghee",
        "½ cup powdered sugar",
        "¼ tsp cardamom",
        "2 tbsp chopped nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Dry-roast the dal over medium-low heat for 12–15 min until evenly golden. Cool completely and grind finely.",
        "Mix with sugar, cardamom and optional nuts. Add warm melted ghee gradually.",
        "Press into 8–10 rounds while the mixture is warm. Add a little extra ghee if it will not hold."
      ]
    }
  },
  "Sheer Khurma": {
    "serves": 4,
    "amounts": {
      "en": [
        "50 g fine vermicelli",
        "750 ml whole milk",
        "2 tbsp ghee",
        "6 soft dates",
        "3 tbsp sliced almonds and pistachios",
        "2–3 tbsp sugar",
        "¼ tsp ground cardamom"
      ]
    },
    "steps": {
      "en": [
        "Pit and chop the dates. Fry the nuts and dates in half the ghee for 2 min and set aside.",
        "Toast the broken vermicelli in the remaining ghee until golden. Pour in hot milk and simmer gently for 6–10 min, until the strands are soft.",
        "Stir in dates, nuts, sugar and cardamom. Simmer 3–5 min, leaving it a little loose because it thickens as it cools."
      ]
    }
  },
  "Badam Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup almonds",
        "½ cup milk",
        "¼ cup ghee",
        "⅓ cup sugar",
        "¼ tsp cardamom"
      ]
    },
    "steps": {
      "en": [
        "Cover almonds with boiling water for 15 min, drain and slip off the skins. Blend with milk to a fine paste.",
        "Cook paste in half the ghee over low heat for 8–10 min, stirring and scraping the bottom.",
        "Add sugar and the remaining ghee in stages. Cook 8–12 min until glossy and pulling away from the pan. Stir in cardamom."
      ]
    }
  },
  "Beetroot Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "400 g peeled beetroot, grated",
        "400 ml whole milk",
        "2 tbsp ghee",
        "3–4 tbsp sugar",
        "¼ tsp cardamom",
        "2 tbsp chopped nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Fry the beetroot in ghee for 5 min over medium heat.",
        "Add milk and simmer uncovered for 20–25 min, stirring more often as the liquid evaporates. The beetroot should be tender.",
        "Add sugar and cook 5–8 min until glossy and thick enough to leave a clear trail. Finish with cardamom and nuts."
      ]
    }
  },
  "Bread Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "5 slices white bread",
        "2 tbsp ghee",
        "1 cup milk",
        "3 tbsp sugar",
        "¼ tsp cardamom"
      ]
    },
    "steps": {
      "en": [
        "Cube the bread and toast in ghee over medium-low heat until golden on several sides.",
        "Add warm milk, mash lightly and simmer 5 min.",
        "Add sugar and cardamom. Stir over low heat until a spatula leaves a trail across the pan. Serve warm."
      ]
    }
  },
  "Besan Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup besan",
        "¼ cup ghee",
        "1 cup milk",
        "½ cup water",
        "⅓ cup sugar",
        "¼ tsp cardamom"
      ]
    },
    "steps": {
      "en": [
        "Warm milk, water and sugar in a small pan until dissolved.",
        "Roast besan in ghee over low heat for 12–15 min, stirring until it turns golden and smells nutty.",
        "Whisk in the warm liquid in stages, taking care around the steam. Stir 4–6 min until smooth and glossy. Finish with cardamom."
      ]
    }
  },
  "Mohanthal": {
    "serves": 6,
    "amounts": {
      "en": [
        "1 cup coarse besan",
        "½ cup ghee",
        "2 tbsp milk",
        "⅔ cup sugar",
        "¼ cup water",
        "¼ tsp cardamom"
      ]
    },
    "steps": {
      "en": [
        "Rub besan with milk and 1 tbsp ghee. Rest 10 min, then rub through a coarse sieve for even crumbs.",
        "Roast the crumbs in remaining ghee on low heat until golden and nutty, 12–18 min. Remove from heat.",
        "Simmer sugar and water to a one-thread syrup, about 106–110°C. Stir into the besan with cardamom, press into a greased tin and cut when cool."
      ]
    }
  },
  "Namak Pare": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup maida",
        "2 tbsp oil or ghee",
        "½ tsp ajwain",
        "½ tsp salt",
        "about ¼ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Rub oil into the flour, ajwain and salt until a handful holds when squeezed. Add water gradually to make a firm dough. Rest covered 15 min.",
        "Roll 2–3 mm thick and cut into thin strips or diamonds.",
        "Fry in small batches at 155–165°C, turning until even gold and crisp. Drain and cool completely."
      ]
    }
  },
  "Methi Mathri": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup maida",
        "½ cup finely chopped fresh methi",
        "3 tbsp ghee",
        "½ tsp ajwain",
        "½ tsp salt",
        "about ¼ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Rub ghee into maida, methi, ajwain and salt. Add just enough water for a stiff dough. Rest 15 min.",
        "Divide into 12 small discs about 5 mm thick and prick both faces with a fork.",
        "Fry slowly at 150–160°C until golden all the way through, then drain and cool on a rack."
      ]
    }
  },
  "Pyaz Kachori": {
    "serves": 4,
    "amounts": {
      "en": [
        "1½ cups maida",
        "3 tbsp ghee",
        "½ tsp salt",
        "about ½ cup water",
        "2 onions, chopped",
        "2 tbsp besan",
        "1 tbsp oil",
        "½ tsp each fennel, cumin and amchur",
        "1 green chilli, optional",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Rub ghee and salt into flour, then add water for a soft, firm dough. Cover for 20 min.",
        "Sizzle fennel and cumin in 1 tbsp oil. Add onions and chilli and cook until soft. Stir in besan, amchur and salt to taste. Cook until dry and cool.",
        "Enclose filling in 8 dough rounds and flatten gently. Fry in batches at 150–160°C, turning until crisp and golden."
      ]
    }
  },
  "Matar Kachori": {
    "serves": 4,
    "amounts": {
      "en": [
        "1½ cups maida",
        "3 tbsp ghee",
        "½ tsp salt",
        "about ½ cup water",
        "1 cup peas",
        "1 tsp oil",
        "½ tsp each cumin, fennel and amchur",
        "1 green chilli, optional",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Rub ghee and salt into flour. Add water and knead to a smooth dough. Rest covered 20 min.",
        "Crush the peas. Sauté cumin, fennel and chilli in 1 tsp oil. Add peas, amchur and salt to taste and stir until dry. Cool.",
        "Fill and seal 8 dough rounds and flatten gently. Fry at 150–160°C until the shells are uniformly golden and firm."
      ]
    }
  },
  "Mixed Veg Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup besan",
        "1 small onion and 1 small potato, thinly sliced",
        "½ cup shredded spinach, optional",
        "½ tsp each ajwain and salt",
        "¼ tsp chilli powder",
        "3–5 tbsp water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Toss the vegetables with besan and spices. Rest 5 min, then add water a spoon at a time until the flour clings as a thick coating.",
        "Drop loose spoonfuls into 170–175°C oil in small batches. Fry 4–6 min, turning, until the potato is tender and the edges are crisp.",
        "Drain on a rack and serve hot."
      ]
    }
  },
  "Gobi Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g small cauliflower florets",
        "¾ cup besan",
        "2 tbsp rice flour",
        "½ tsp salt",
        "¼ tsp each turmeric and chilli powder",
        "about ½ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Blanch the florets for 2 min, drain and pat dry. Whisk flours, seasonings and enough water for a batter that coats a spoon.",
        "Dip each floret in batter and fry at 170–175°C in batches for 4–6 min, turning until crisp and golden.",
        "Drain. Split one to check the stem is tender before serving."
      ]
    }
  },
  "Aloo Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 medium potatoes",
        "¾ cup besan",
        "½ tsp ajwain",
        "½ tsp salt",
        "¼ tsp chilli powder",
        "about ½ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Slice potatoes into 3 mm rounds and pat dry. Whisk the besan, seasonings and water into a thick coating batter.",
        "Dip each slice and fry at 170–175°C for 4–5 min per batch, turning midway.",
        "Drain and split one. The potato should yield easily and the coating should be crisp."
      ]
    }
  },
  "Mirchi Bhajiya": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 broad mild green chillies",
        "¾ cup besan",
        "2 tbsp rice flour",
        "¼ tsp ajwain",
        "½ tsp salt",
        "about ½ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Slit chillies lengthwise, scrape out the ribs and seeds and dry thoroughly. Whisk the flours, spices and water to a clinging batter.",
        "Coat and fry in 170°C oil, turning until the coating is golden and the flesh softens, about 4–6 min.",
        "Drain on a rack and let the steam escape before serving."
      ]
    }
  },
  "Bread Roll": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 sandwich bread slices",
        "2 boiled potatoes",
        "1 chopped green chilli, optional",
        "½ tsp each cumin, amchur and salt",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Mash dry, cooled potatoes with the seasoning and shape 4 logs. Trim the bread, dip each slice briefly in water and squeeze flat between your palms.",
        "Wrap each slice around a potato log and pinch every seam shut.",
        "Fry at 170–175°C, rotating until golden all over. Drain well."
      ]
    }
  },
  "Veg Nuggets": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 boiled potatoes",
        "¼ cup finely diced cooked carrot",
        "¼ cup cooked peas",
        "¾ cup breadcrumbs",
        "2 tbsp cornflour",
        "½ tsp salt",
        "¼ tsp pepper",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Mash potatoes with carrot, peas, salt, pepper and 2 tbsp breadcrumbs. Shape 10 small nuggets.",
        "Mix cornflour with 3 tbsp water. Dip nuggets in the slurry and roll in remaining crumbs. Chill 10 min if soft.",
        "Shallow-fry over medium heat until crisp and golden on both sides, about 3 min per side."
      ]
    }
  },
  "Corn Cheese Balls": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup cooked corn, drained",
        "¾ cup mashed potato",
        "½ cup grated low-moisture mozzarella",
        "2 tbsp cornflour",
        "½ cup breadcrumbs",
        "¼ tsp each salt and pepper",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Dry the corn. Mix with potato, cheese, salt, pepper and 1 tbsp cornflour. Shape 10 tightly packed balls and chill 15 min.",
        "Mix remaining cornflour with 2 tbsp water. Roll balls in slurry and breadcrumbs.",
        "Fry at 175°C in batches until golden, about 3 min. Fry a single ball first and reseal any cracks in the rest if cheese leaks."
      ]
    }
  },
  "Aloo Tikki Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g boiled potatoes",
        "2 tbsp rice flour",
        "½ tsp cumin",
        "½ tsp salt",
        "2 tbsp oil",
        "½ cup whisked curd",
        "2 tbsp tamarind chutney",
        "1 tbsp mint chutney",
        "½ tsp chaat masala"
      ]
    },
    "steps": {
      "en": [
        "Mash dry boiled potatoes with flour, cumin and salt. Press into 4 tight patties.",
        "Shallow-fry over medium heat, 4–5 min per side, until deeply golden and crisp.",
        "Top with curd, both chutneys and chaat masala just before serving."
      ]
    }
  },
  "Ragda Pattice": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup dried white peas",
        "300 g boiled potato",
        "2 tbsp rice flour",
        "2 tbsp oil",
        "¼ tsp turmeric",
        "½ tsp salt, plus more for patties",
        "1 small onion",
        "1 tomato",
        "2 tbsp tamarind chutney"
      ]
    },
    "steps": {
      "en": [
        "Soak peas 8 hours, drain and cook in 2½ cups fresh water with turmeric and salt until crushably soft, about 20–25 min at high pressure with natural release.",
        "Lightly mash some peas and simmer uncovered to a spoonable stew. Mash potatoes with rice flour and a pinch of salt; make 4 patties and shallow-fry 4 min per face.",
        "Spoon hot ragda over patties. Add finely chopped onion and tomato and the tamarind chutney."
      ]
    }
  },
  "Pesarattu": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup whole green moong",
        "1 cm ginger",
        "1 green chilli",
        "½ tsp cumin",
        "½ tsp salt",
        "1 small onion, optional",
        "2 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Soak moong for 4–6 hours and drain. Blend with ginger, chilli, cumin and enough water for a spreadable, slightly grainy batter. Stir in salt.",
        "Spread one ladle into a thin circle on a hot greased tawa. Sprinkle chopped onion if using and drizzle oil around the rim.",
        "Cook on medium until the edge lifts and underside browns. Flip briefly, then repeat with remaining batter."
      ]
    }
  },
  "Mixed Veg Uttapam": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups fermented idli or dosa batter",
        "½ small onion, diced",
        "1 small carrot, grated",
        "¼ capsicum, diced",
        "1 green chilli, optional",
        "2 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Bring thick batter to room temperature while you prepare the vegetables. Heat and lightly grease a tawa.",
        "Pour four small thick rounds in batches. Scatter the vegetables immediately and press them gently into the batter.",
        "Cook covered on medium-low until the top loses its wet sheen. Flip for 1–2 min to brown the toppings."
      ]
    }
  },
  "Vermicelli Upma": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup thin wheat vermicelli",
        "1¾ cups water",
        "1 small onion",
        "½ carrot",
        "8 curry leaves",
        "½ tsp mustard seeds",
        "1 green chilli, optional",
        "1 tbsp oil",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Toast vermicelli dry until pale gold, unless already roasted. Dice onion and carrot.",
        "Heat oil, pop mustard seeds and add curry leaves, onion, carrot and chilli. Cook about 4 min.",
        "Bring water and salt to a boil in the pan. Add vermicelli and simmer uncovered until tender and the liquid is absorbed, about 4–6 min. Rest 2 min and fluff."
      ]
    }
  },
  "Oats Cheela": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup rolled oats",
        "2 tbsp besan",
        "¾–1 cup water",
        "2 tbsp finely chopped onion",
        "2 tbsp deseeded diced tomato",
        "½ tsp cumin",
        "½ tsp salt",
        "2 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Grind oats to flour, then whisk with besan, water, cumin and salt. Rest 10 min and stir in onion and tomato.",
        "Thin to a thick pouring consistency. Pour small rounds on a lightly oiled medium-hot tawa.",
        "Cook until the top is set and the edge releases, about 2–3 min. Flip and cook 1–2 min."
      ]
    }
  },
  "Suji Cheela": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup fine suji",
        "½ cup plain curd",
        "½ cup water, plus as needed",
        "1 small onion",
        "1 green chilli, optional",
        "½ tsp salt",
        "2 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Whisk suji, curd and water and rest 15 min. Add chopped onion, chilli and salt.",
        "Stir in water by the tablespoon if the batter will not spread. Ladle into small circles on a greased medium-hot tawa.",
        "Cook 2–3 min until the top sets. Flip and cook until the second side is lightly browned."
      ]
    }
  },
  "Palak Cheela": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup besan",
        "1 cup finely chopped spinach",
        "about ¾ cup water",
        "½ tsp ajwain",
        "½ tsp salt",
        "1 green chilli, optional",
        "2 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Whisk besan, salt, ajwain and water without lumps. Fold in spinach and chilli and rest 5 min.",
        "Spread a ladle thinly on a medium-hot lightly oiled tawa.",
        "Cook 2–3 min until the top dries and the base has brown spots. Flip for another minute."
      ]
    }
  },
  "Rava Dhokla": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup fine suji",
        "½ cup curd",
        "½ cup water",
        "½ tsp salt",
        "1 tsp plain fruit salt",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "1 green chilli, optional"
      ]
    },
    "steps": {
      "en": [
        "Mix suji, curd, water and salt and rest 15 min. Bring steamer water to a boil and grease a shallow pan.",
        "Stir fruit salt gently into batter just before pouring. Steam covered for 12–15 min, until a skewer comes out clean.",
        "Cool 5 min and cut. Sizzle mustard, curry leaves and chilli in oil and spoon over."
      ]
    }
  },
  "Moong Dal Dhokla": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup split yellow moong",
        "1 cm ginger",
        "1 green chilli",
        "2 tbsp curd",
        "½ tsp salt",
        "1 tsp plain fruit salt",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 4 hours, drain and blend with ginger, chilli and curd. Add just enough water for a thick batter. Season and get the steamer boiling.",
        "Fold in fruit salt, transfer immediately to a greased shallow pan and steam 15–18 min, until a skewer comes out clean.",
        "Rest 5 min before slicing. Heat oil, pop mustard seeds and curry leaves and pour over."
      ]
    }
  },
  "Jowar Bhakri": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup jowar flour",
        "about ⅔ cup hot water",
        "¼ tsp salt",
        "extra jowar flour for dusting"
      ]
    },
    "steps": {
      "en": [
        "Mix flour and salt. Stir in hot water gradually, then knead while warm until smooth and pliable.",
        "Divide into 4 and pat into 3–4 mm discs with floured hands. Patch cracks as you go.",
        "Set on a hot tawa and dab the top with water. When dry, flip, cook until spotted, then flip again and press gently to finish."
      ]
    }
  },
  "Bajra Roti": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup bajra flour",
        "about ½ cup hot water",
        "¼ tsp salt",
        "2 tsp ghee, optional"
      ]
    },
    "steps": {
      "en": [
        "Stir hot water gradually into flour and salt. Knead while comfortably warm until the dough holds together.",
        "Pat four discs between sheets of parchment or with damp hands. Transfer carefully to a hot tawa.",
        "Cook about 1–2 min per side, until dry, firm and spotted. Brush with ghee if desired."
      ]
    }
  },
  "Methi Puri": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "¾ cup finely chopped methi",
        "½ tsp ajwain",
        "½ tsp salt",
        "1 tsp oil",
        "about ⅓ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Mix atta, methi, ajwain, salt and 1 tsp oil. Add water gradually for a firm dough and rest 15 min.",
        "Roll into 8 small even rounds, keeping unused dough covered.",
        "Slip into 175–180°C oil. Press lightly until puffed, flip and fry until golden. Drain."
      ]
    }
  },
  "Palak Puri": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "75 g spinach",
        "¼ tsp ajwain",
        "½ tsp salt",
        "1 tsp oil",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Blanch spinach 45 seconds, cool and squeeze well. Purée with 1–2 tbsp water.",
        "Mix with flour, ajwain, salt and 1 tsp oil. Add water a teaspoon at a time if needed for a firm dough. Rest 15 min.",
        "Roll 8 even rounds and fry one at a time at 175–180°C. Gently press to puff, then flip and drain when golden."
      ]
    }
  },
  "Masala Puri": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "1 tbsp suji",
        "½ tsp each ajwain, ground cumin and salt",
        "¼ tsp chilli powder",
        "1 tbsp chopped coriander, optional",
        "about ⅓ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, suji, spices and coriander. Add water gradually to form a firm dough. Cover for 15 min.",
        "Divide into 8 balls and roll into even 10 cm rounds.",
        "Fry at 175–180°C, gently pressing with a slotted spoon so each puffs. Flip briefly and drain."
      ]
    }
  },
  "Bhatura": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups maida",
        "½ cup plain curd",
        "½ tsp baking powder",
        "⅛ tsp baking soda",
        "½ tsp each sugar and salt",
        "1 tbsp oil",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Mix dry ingredients, stir in curd and 1 tbsp oil and knead, adding water a spoonful at a time. Cover and rest about 1 hour.",
        "Divide into 6 balls and roll each into a 3 mm oval. Keep the others covered.",
        "Fry at 175–185°C one at a time, gently pressing to puff. Flip and drain when both faces are golden."
      ]
    }
  },
  "Amritsari Kulcha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups maida",
        "⅓ cup curd",
        "½ tsp baking powder",
        "½ tsp salt",
        "2 tbsp ghee",
        "225 g boiled potatoes",
        "½ small onion",
        "½ tsp each ajwain and amchur",
        "1 tbsp coriander"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, curd, baking powder, salt and enough water for a soft dough. Knead and rest 30 min.",
        "Mash potatoes with finely chopped onion, ajwain, amchur, coriander and salt to taste. Divide into four portions and enclose each in dough.",
        "Roll gently, brush with ghee and cook on a medium-hot heavy tawa for 2–3 min per side, until puffed in spots and browned."
      ]
    }
  },
  "Garlic Naan": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups maida",
        "⅓ cup curd",
        "½ tsp baking powder",
        "⅛ tsp baking soda",
        "½ tsp salt",
        "about ¼ cup water",
        "3 garlic cloves",
        "2 tbsp butter"
      ]
    },
    "steps": {
      "en": [
        "Knead flour, curd, leaveners, salt and water into a soft dough. Cover 30 min. Melt butter and mix with minced garlic.",
        "Roll 4 ovals. Cook on a hot dry tawa until bubbles rise and the underside spots, about 1–2 min.",
        "Flip for about 1 min. Brush with garlic butter while hot and cover with a clean towel."
      ]
    }
  },
  "Ajwain Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "½ tsp ajwain",
        "¼ tsp salt",
        "about ½ cup water",
        "1 tbsp oil or ghee"
      ]
    },
    "steps": {
      "en": [
        "Knead flour, crushed ajwain, salt and water to a soft dough. Cover and rest 20 min.",
        "Roll four discs, brush lightly with ghee, fold into quarters and roll again.",
        "Cook on a medium-hot tawa, flipping when bubbles appear. Brush each side with ghee and cook until golden spots develop."
      ]
    }
  },
  "Plain Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "¼ tsp salt",
        "about ½ cup water",
        "1½ tbsp ghee or oil"
      ]
    },
    "steps": {
      "en": [
        "Knead atta, salt and water to a soft, smooth dough. Cover for 20 min.",
        "Roll four rounds, brush with ghee, fold into quarters and roll again.",
        "Cook on a medium-hot tawa, turning and brushing lightly with ghee, until both sides have golden spots."
      ]
    }
  },
  "Dal Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "½ cup thick cooked toor dal",
        "½ tsp cumin",
        "½ tsp salt",
        "1 green chilli, optional",
        "1 tbsp ghee or oil"
      ]
    },
    "steps": {
      "en": [
        "Simmer the dal uncovered if loose, then cool. Mix with flour, cumin, salt and minced chilli. Add water gradually to make soft dough, then rest 15 min.",
        "Divide into four and roll on a lightly floured surface.",
        "Cook on a medium-hot tawa, brushing with ghee and turning until both sides have brown spots."
      ]
    }
  },
  "Palak Kofta Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g spinach",
        "½ cup besan",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "½ tsp each cumin and coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt",
        "oil for frying and 1 tbsp for gravy"
      ]
    },
    "steps": {
      "en": [
        "Blanch spinach, squeeze it thoroughly and chop. Mix with besan and a pinch of salt. Shape 8 balls and fry at 170°C until crisp.",
        "Sizzle cumin in 1 tbsp oil. Brown the chopped onion, add paste and spices, then cook puréed tomatoes until thick.",
        "Add ¾ cup water and salt, simmer 5 min and spoon over the koftas just before serving."
      ]
    }
  },
  "Cabbage Kofta Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g grated cabbage",
        "½ cup besan",
        "1 onion",
        "2 tomatoes",
        "½ tsp each cumin and coriander powder",
        "¼ tsp turmeric",
        "salt",
        "frying oil and 1 tbsp for gravy"
      ]
    },
    "steps": {
      "en": [
        "Salt cabbage lightly, rest 10 min and squeeze dry. Mix with besan and shape 8 firm balls. Fry at 170°C until golden.",
        "In 1 tbsp oil, sizzle cumin and brown the finely chopped onion. Add puréed tomatoes and dry spices, then reduce to a paste.",
        "Add ¾ cup water and salt to taste and simmer 5 min. Add koftas just before serving."
      ]
    }
  },
  "Mixed Veg Kofta Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 boiled potatoes",
        "½ carrot, grated",
        "¼ cup cooked peas",
        "3 tbsp cornflour",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "½ tsp garam masala",
        "salt",
        "frying oil and 1 tbsp for gravy"
      ]
    },
    "steps": {
      "en": [
        "Mash potatoes, carrot and peas with cornflour and a pinch of salt. Form 8 firm balls and shallow-fry, turning, until golden.",
        "Brown chopped onion in 1 tbsp oil. Add paste and puréed tomatoes and reduce until thick. Stir in ¾ cup water, garam masala and salt.",
        "Simmer 5 min and add koftas at the table so they stay crisp."
      ]
    }
  },
  "Masoor Dal Tadka": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup split red lentils",
        "2½ cups water",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 small onion",
        "1 tomato",
        "2 garlic cloves",
        "1 tbsp ghee",
        "½ tsp cumin"
      ]
    },
    "steps": {
      "en": [
        "Rinse lentils and simmer with water and turmeric for 15–20 min, until they collapse. Stir in salt.",
        "Heat ghee. Sizzle cumin and fry sliced garlic and onion until lightly golden. Cook diced tomato until soft.",
        "Stir the tadka into the dal and simmer 2 min. Add hot water if needed for a pourable consistency."
      ]
    }
  },
  "Urad Dal Tadka": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup split skinned urad",
        "2 cups water",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 onion",
        "1 tomato",
        "2 garlic cloves",
        "1 tbsp ghee",
        "½ tsp cumin"
      ]
    },
    "steps": {
      "en": [
        "Soak urad 2 hours and drain. Simmer in water with turmeric until tender, about 25–35 min, stirring as it thickens.",
        "Heat ghee and sizzle cumin. Fry chopped onion and garlic until golden. Add diced tomato and cook to a paste.",
        "Stir into dal with salt. Simmer 3–5 min and serve once thick but spoonable."
      ]
    }
  },
  "Gujarati Dal": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup toor dal",
        "2½ cups water",
        "¼ tsp turmeric",
        "1 tbsp grated jaggery",
        "1 tbsp tamarind pulp",
        "½ tsp salt",
        "1 tsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "1 green chilli, optional"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 30 min and drain. Pressure-cook with 1½ cups fresh water and turmeric 10–12 min at high pressure. Let pressure drop naturally.",
        "Whisk smooth. Add remaining water, jaggery, tamarind and salt and simmer 8–10 min. Taste for a clear sweet-sour balance.",
        "Pop mustard seeds in oil, add curry leaves and slit chilli and pour over the dal."
      ]
    }
  },
  "Lasuni Dal": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup toor dal",
        "2½ cups water",
        "¼ tsp turmeric",
        "½ tsp salt",
        "6 garlic cloves, sliced",
        "1 tomato, optional",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp chilli powder"
      ]
    },
    "steps": {
      "en": [
        "Rinse dal and pressure-cook with water and turmeric 12–15 min at high pressure. Let pressure drop naturally, then whisk and salt it.",
        "Sizzle cumin in the ghee. Fry garlic over medium-low until pale gold. Set some aside. Add tomato if using and cook until soft.",
        "Take tadka off the heat before adding chilli powder. Stir into the dal, simmer 3 min and scatter reserved garlic on top."
      ]
    }
  },
  "Panchmel Dal": {
    "serves": 3,
    "amounts": {
      "en": [
        "¼ cup each toor, yellow moong and chana dal",
        "2 tbsp each split urad and masoor dal",
        "3 cups water",
        "¼ tsp turmeric",
        "¾ tsp salt",
        "1 tbsp ghee",
        "½ tsp cumin",
        "1 tomato",
        "2 garlic cloves",
        "¼ tsp chilli powder"
      ]
    },
    "steps": {
      "en": [
        "Rinse all five dals, soak 30 min and drain. Pressure-cook with water and turmeric 15 min at high pressure and release naturally.",
        "Sizzle cumin in ghee, fry chopped garlic until pale gold, then cook chopped tomato and chilli powder until pulpy.",
        "Stir tadka and salt into dal and simmer 5 min. Add hot water for a thick, pourable texture."
      ]
    }
  },
  "Palak Saag": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g spinach",
        "1 small onion",
        "3 garlic cloves",
        "1 green chilli, optional",
        "1 tbsp ghee",
        "½ tsp cumin",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Wash spinach well, remove tough stems and chop. Wilt covered with 2 tbsp water for 3–4 min, then chop or blend coarsely.",
        "Sizzle cumin in ghee and brown finely chopped onion and garlic. Add chilli if using.",
        "Stir in spinach and salt and simmer uncovered 4–6 min to a thick, coarse purée."
      ]
    }
  },
  "Methi Saag": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g methi leaves",
        "1 medium potato, 1 cm dice",
        "3 garlic cloves",
        "1 tbsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Wash methi in several changes of water and chop. Fry cumin and chopped garlic in oil until fragrant.",
        "Add potato, turmeric, salt and 3 tbsp water. Cover and cook 8–10 min until nearly tender.",
        "Add methi, cover 3 min to wilt, then uncover and cook 3–5 min until the potato is tender and the pan looks dry."
      ]
    }
  },
  "Bharwa Bhindi": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g okra",
        "2 tbsp besan",
        "1 tsp coriander powder",
        "½ tsp each amchur and ground cumin",
        "¼ tsp each turmeric and chilli powder",
        "½ tsp salt",
        "2 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Wash and dry okra completely. Trim and slit lengthwise without cutting through.",
        "Toast besan 2–3 min until fragrant. Mix with spices, salt and 1 tsp oil. Pack a little into each slit.",
        "Lay in a single layer in remaining oil on medium-low. Cover 5 min, then uncover and turn gently for 8–10 min until tender and spotted."
      ]
    }
  },
  "Bharwa Karela": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 small bitter gourds",
        "1 onion",
        "2 tbsp besan",
        "1 tsp each fennel and coriander powder",
        "½ tsp amchur",
        "½ tsp salt plus more for brining",
        "2 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Slit karela and scrape out hard seeds. Rub with salt, rest 20 min, rinse and squeeze dry.",
        "Fry grated onion in 1 tbsp oil until dry. Stir in besan, spices and salt for 2 min. Cool, stuff into the slits and tie with kitchen twine.",
        "Pan-fry in remaining oil over medium-low heat, partly covered. Turn every few minutes until all sides brown and the flesh is soft, 15–20 min. Remove twine."
      ]
    }
  },
  "Stuffed Capsicum": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 medium capsicums",
        "250 g boiled potato",
        "50 g paneer, optional",
        "½ onion",
        "½ tsp each cumin, amchur and salt",
        "1 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Cut tops from capsicums, remove seeds and halve lengthwise. Fry finely chopped onion with cumin in half the oil until soft.",
        "Mash potato with onion, amchur, salt and crumbled paneer. Pack firmly into the capsicum halves.",
        "Cook covered in remaining oil on medium-low for 12–18 min. Turn briefly to brown the filling and serve when the capsicum yields to a knife."
      ]
    }
  },
  "Stuffed Tomato": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 firm tomatoes",
        "150 g paneer",
        "1 small boiled potato",
        "½ tsp each cumin and garam masala",
        "½ tsp salt",
        "1 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Slice off tomato tops and scoop out seeds, leaving walls intact. Mash paneer and potato with cumin, garam masala and salt.",
        "Fill the tomatoes and place upright in an oiled oven dish. Replace the tops and brush with remaining oil.",
        "Bake at 190°C for 15–20 min, until the skins wrinkle and the shells soften without collapsing."
      ]
    }
  },
  "Gobi Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g cauliflower florets",
        "1 onion",
        "2 tomatoes",
        "1 tsp grated ginger",
        "1½ tbsp oil",
        "½ tsp cumin",
        "1 tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Brown the cauliflower in half the oil over medium-high heat for 5 min and set aside.",
        "Sizzle cumin in remaining oil. Brown chopped onion, stir in ginger and spices, then cook chopped tomatoes down to a paste.",
        "Return cauliflower with salt and ⅓ cup water. Cover 8–12 min, until a knife enters the stems, then uncover to thicken."
      ]
    }
  },
  "Gobi Matar": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g cauliflower florets",
        "¾ cup peas",
        "1 tomato",
        "1 small onion, optional",
        "1 tbsp oil",
        "½ tsp cumin",
        "½ tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin in oil, soften chopped onion if using, then add chopped tomato and spices. Cook until pulpy.",
        "Stir in cauliflower, salt and ¼ cup water, cover and cook on medium-low for 6 min.",
        "Add peas and cook 4–6 min more until tender. Uncover and reduce any excess liquid."
      ]
    }
  },
  "Dum Aloo": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g baby potatoes",
        "½ cup plain full-fat curd",
        "1 onion",
        "1 tomato",
        "1 tsp grated ginger",
        "1½ tbsp oil",
        "½ tsp each cumin and fennel powder",
        "¼ tsp Kashmiri chilli powder",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Boil potatoes until barely tender. Drain, peel, prick and pan-fry in half the oil until spotted.",
        "Fry cumin and finely chopped onion in remaining oil. Add ginger and tomato and cook to a paste. Combine whisked curd with fennel and chilli.",
        "Lower heat and stir curd in gradually. Add potatoes, salt and ½ cup water. Cover and simmer gently 10–12 min until the gravy coats them."
      ]
    }
  },
  "Aloo Tamatar": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g potatoes",
        "2 ripe tomatoes",
        "1 tbsp oil",
        "½ tsp cumin",
        "½ tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 cup water"
      ]
    },
    "steps": {
      "en": [
        "Dice potatoes into 2 cm pieces. Sizzle cumin in oil and cook finely chopped tomatoes and spices until pulpy.",
        "Add potatoes, salt and water. Cover and simmer 12–18 min until easily pierced.",
        "Mash a few pieces into the gravy and simmer uncovered to your preferred thickness."
      ]
    }
  },
  "Aloo Shimla Mirch": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 potatoes",
        "2 small capsicums",
        "1 small onion, optional",
        "1½ tbsp oil",
        "½ tsp each cumin and coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Cut potatoes and capsicums into 1½ cm pieces. Sizzle cumin in oil and soften sliced onion if using.",
        "Add potatoes, turmeric, coriander, salt and 2 tbsp water. Cover on medium-low 8–12 min until nearly tender.",
        "Add capsicum and cook uncovered 4–6 min. Stop when the potatoes are tender and the capsicum still has bite."
      ]
    }
  },
  "Kurkuri Bhindi": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g okra",
        "3 tbsp besan",
        "2 tbsp rice flour",
        "½ tsp each amchur and coriander powder",
        "¼ tsp chilli powder",
        "½ tsp salt",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Dry the okra thoroughly, then quarter lengthwise. Toss with flours, spices and salt right before frying.",
        "Fry loosely in batches at 170–175°C for 3–5 min until crisp and lightly browned.",
        "Drain on a rack, leave uncovered and serve at once."
      ]
    }
  },
  "Turai ki Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g ridge gourd",
        "1 small onion, optional",
        "1 tomato",
        "1 tbsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Peel ridges, taste a small raw piece and discard any bitter gourd. Cut into 2 cm chunks.",
        "Sizzle cumin in oil and soften chopped onion. Add tomato and turmeric and cook to a paste.",
        "Add turai and salt and cover on low 10–15 min. Uncover and reduce juices until the gourd is tender and lightly sauced."
      ]
    }
  },
  "Cabbage Matar": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g shredded cabbage",
        "¾ cup peas",
        "1 tbsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 green chilli, optional"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin and sliced chilli in hot oil. Stir in cabbage, peas, turmeric and salt.",
        "Cover and cook 4–5 min over medium-low. Add a splash of water only if the pan dries before the peas soften.",
        "Uncover and stir-fry until the liquid has evaporated and the cabbage is tender-crisp."
      ]
    }
  },
  "Gajar Matar": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g carrots, diced",
        "¾ cup peas",
        "1 tsp grated ginger",
        "1 tbsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin and ginger in oil. Add carrots, turmeric, salt and 2 tbsp water.",
        "Cover on medium-low 5–7 min, then stir in the peas.",
        "Cover 4–5 min more until carrots are fork-tender. Remove lid and stir briefly to dry the pan."
      ]
    }
  },
  "Palak Aloo": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g spinach",
        "250 g potatoes, cubed",
        "1 small onion",
        "2 garlic cloves",
        "1 tbsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Wash and chop spinach. Sizzle cumin in oil, soften chopped onion and garlic and add potatoes, turmeric and salt.",
        "Add ¼ cup water, cover and cook 10–12 min until potatoes are almost tender.",
        "Fold in spinach and cook uncovered 4–6 min, until wilted and most moisture has evaporated."
      ]
    }
  },
  "Paneer Jalfrezi": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g paneer",
        "1 capsicum",
        "1 small onion",
        "1 firm tomato",
        "1 tbsp oil",
        "½ tsp cumin",
        "½ tsp coriander powder",
        "¼ tsp chilli powder",
        "½ tsp salt",
        "1 tsp vinegar"
      ]
    },
    "steps": {
      "en": [
        "Cut paneer, capsicum and deseeded tomato into batons and slice the onion.",
        "Over high heat, sizzle cumin in oil. Stir-fry onion and capsicum for 2–3 min so they keep their bite.",
        "Add tomato, paneer, spices, salt and vinegar. Toss for 2 min, just until hot and lightly coated."
      ]
    }
  },
  "Veg Jalfrezi": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 capsicum",
        "1 carrot",
        "100 g French beans",
        "1 onion",
        "1 firm tomato",
        "1 tbsp oil",
        "½ tsp each cumin and coriander powder",
        "½ tsp salt",
        "1 tsp vinegar"
      ]
    },
    "steps": {
      "en": [
        "Cut vegetables into thin matchsticks. Blanch carrot and beans 2 min, drain and dry.",
        "Sizzle cumin in hot oil and toss onion and capsicum on high heat for 2 min. Add carrot and beans and stir-fry another 2 min.",
        "Add tomato strips, coriander, salt and vinegar. Toss briefly until hot and tender-crisp."
      ]
    }
  },
  "Veg Korma": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 potato",
        "1 carrot",
        "½ cup peas",
        "80 g French beans",
        "1 onion",
        "12 cashews",
        "½ cup plain curd",
        "1 tbsp ghee",
        "½ tsp each coriander powder and garam masala",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Dice vegetables. Soak cashews in hot water 15 min, then blend with curd until smooth.",
        "Soften chopped onion in ghee and stir in spices. Add potato, carrot, beans and ½ cup water and cover 8 min.",
        "Add peas and cashew mixture on low heat, stirring. Simmer gently until the potatoes are tender and the gravy coats a spoon."
      ]
    }
  },
  "Kaju Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup cashews, divided",
        "1 onion",
        "2 tomatoes",
        "1 tbsp ghee",
        "½ cup milk",
        "½ tsp each coriander powder and garam masala",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Toast half the cashews in ghee until golden and set aside. Soak the rest in hot water for 15 min.",
        "In the same pan cook chopped onion and tomatoes until soft. Cool slightly, then blend with the soaked cashews and milk.",
        "Return to a low simmer with spices and salt for 5–8 min, stirring until silky. Add toasted cashews just before serving."
      ]
    }
  },
  "Paneer Lababdar": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "1 onion",
        "3 ripe tomatoes",
        "10 cashews",
        "1 tbsp butter",
        "1 tsp ginger-garlic paste",
        "½ tsp Kashmiri chilli powder",
        "½ tsp salt",
        "½ tsp kasuri methi"
      ]
    },
    "steps": {
      "en": [
        "Simmer chopped tomatoes and cashews in ½ cup water until soft. Cool slightly and blend smooth.",
        "Brown chopped onion in butter. Cook paste and chilli briefly, then add tomato purée and salt. Simmer 7–10 min until thick.",
        "Grate ¼ of the paneer and cube the rest. Simmer both in the sauce 2–3 min with crushed kasuri methi."
      ]
    }
  },
  "Soya Keema": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup dried soya granules",
        "½ cup peas",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "1 tbsp oil",
        "½ tsp cumin",
        "½ tsp garam masala",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Cook granules according to the packet, drain, rinse and squeeze. If using chunks, mince them after squeezing.",
        "Sizzle cumin in oil, brown chopped onion, then stir in paste and tomatoes. Cook until the tomatoes break down.",
        "Add soya, peas, garam masala, salt and ¼ cup water. Simmer 7–10 min until tender and just moist."
      ]
    }
  },
  "Baingan Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g small brinjals",
        "1 onion",
        "2 tomatoes",
        "2 tbsp oil",
        "½ tsp cumin",
        "1 tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt",
        "2 tbsp roasted peanut powder, optional"
      ]
    },
    "steps": {
      "en": [
        "Cut brinjals into wedges and brown in 1 tbsp oil for 4–5 min. Set aside.",
        "Sizzle cumin in remaining oil. Brown chopped onion, add tomatoes and spices and cook until thick.",
        "Add brinjals, salt, peanut powder if using and ⅓ cup water. Cover over low heat until silky and tender, about 10 min."
      ]
    }
  },
  "Mirch ka Salan": {
    "serves": 2,
    "amounts": {
      "en": [
        "6 mild long green chillies",
        "3 tbsp peanuts",
        "1 tbsp sesame",
        "1 tbsp desiccated coconut",
        "1 small onion",
        "1 tbsp tamarind pulp",
        "2 tbsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Dry-toast peanuts, sesame and coconut separately. Grind with ½ cup water. Slit and dry chillies, then blister in 1 tbsp oil and set aside.",
        "Sizzle cumin and cook chopped onion in remaining oil until golden. Add nut paste and turmeric and stir on low for 4 min.",
        "Add ¾ cup water, tamarind, salt and chillies. Simmer 8–10 min until chillies soften and the sauce thickens."
      ]
    }
  },
  "Veg Biryani": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup basmati",
        "1 potato",
        "1 carrot",
        "½ cup peas",
        "½ cup beans",
        "1 onion",
        "½ cup plain curd",
        "2 tbsp ghee",
        "1 tsp ginger-garlic paste",
        "1 tsp biryani masala",
        "¼ cup mint",
        "salt"
      ]
    },
    "steps": {
      "en": [
        "Soak rice 20 min. Boil in plenty of salted water until the outside softens but each grain has a firm centre, about 5–6 min. Drain.",
        "Brown sliced onion in ghee and reserve half. Fry paste and masala, then add diced vegetables, curd and salt. Cook covered until vegetables are almost tender.",
        "Layer rice over vegetables. Top with reserved onion and mint, cover tightly and steam over low heat 15 min. Rest 5 min and fluff gently."
      ]
    }
  },
  "Masala Khichdi": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup rice",
        "½ cup split moong",
        "1 tomato",
        "½ carrot",
        "¼ cup peas",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt",
        "3 cups water"
      ]
    },
    "steps": {
      "en": [
        "Rinse rice and dal and drain. Sizzle cumin in ghee and soften finely chopped tomato.",
        "Stir in diced carrot, peas, rice, dal, turmeric, salt and water. Pressure-cook 9 min on high and let pressure release naturally.",
        "Stir gently. The dal should collapse into the rice. Add hot water if you prefer a looser khichdi."
      ]
    }
  },
  "Palak Khichdi": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup rice",
        "½ cup split moong",
        "150 g spinach",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt",
        "3 cups water"
      ]
    },
    "steps": {
      "en": [
        "Rinse rice and moong. Pressure-cook with water, turmeric and salt for 9 min on high, releasing naturally.",
        "Wash and chop spinach. Sizzle cumin in ghee and wilt the spinach 2–3 min.",
        "Fold into the soft rice and dal and simmer 3–5 min. Add a splash of hot water if too thick."
      ]
    }
  },
  "Dal Khichdi": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup rice",
        "¼ cup split moong",
        "¼ cup toor dal",
        "3 cups water",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Rinse rice and dals, soak 20 min and drain. Pressure-cook with water, turmeric and salt on high for 12 min, then release naturally.",
        "Stir to break up the soft grains and add hot water if too thick.",
        "Sizzle cumin in hot ghee and pour over the khichdi just before serving."
      ]
    }
  },
  "Coconut Rice": {
    "serves": 2,
    "amounts": {
      "en": [
        "2½ cups freshly cooked rice",
        "¾ cup grated coconut",
        "2 tbsp peanuts",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "1 green chilli, optional",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Spread warm rice on a plate to let steam escape. Lightly toast the peanuts in oil.",
        "Add mustard and let it pop, then add curry leaves and sliced chilli. Stir coconut over medium-low for 1–2 min, keeping it pale.",
        "Fold in rice and salt over low heat until hot and evenly coated."
      ]
    }
  },
  "Masala Daliya": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup coarse broken wheat",
        "1 onion",
        "1 tomato",
        "½ cup peas",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt",
        "2¼ cups water"
      ]
    },
    "steps": {
      "en": [
        "Toast daliya in a dry pan 3–4 min until nutty. Sizzle cumin in ghee and soften chopped onion.",
        "Cook tomato with turmeric until pulpy. Add peas, daliya, salt and water and bring to a boil.",
        "Cover on low for 15–20 min, until the grains are tender and water is absorbed. Rest 5 min before fluffing."
      ]
    }
  },
  "Meethi Chutney (Date-Tamarind)": {
    "serves": 4,
    "amounts": {
      "en": [
        "½ cup pitted soft dates",
        "2 tbsp tamarind pulp",
        "¼ cup jaggery",
        "1 cup water",
        "½ tsp roasted cumin powder",
        "¼ tsp black salt"
      ]
    },
    "steps": {
      "en": [
        "Chop dates and simmer with tamarind, jaggery and water for 8–10 min until soft.",
        "Blend smooth when cool enough to handle and strain if fibrous. Stir in cumin and black salt.",
        "Simmer briefly if thin. Cool before serving. It should flow slowly from a spoon."
      ]
    }
  },
  "Karuveppilai Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 packed cup curry leaves",
        "¼ cup coconut",
        "1 green chilli",
        "2 tbsp roasted chana dal",
        "1 tsp tamarind pulp",
        "1 tsp oil",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Wash and dry the leaves. Fry them with chilli in oil over medium-low about 2 min, until fragrant.",
        "Cool and blend with coconut, roasted dal, tamarind, salt and 3–4 tbsp water.",
        "Adjust with water until spoonable. Taste for salt and serve with idli or dosa."
      ]
    }
  },
  "Til Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "¼ cup sesame seeds",
        "1 green chilli",
        "1 garlic clove, optional",
        "1 tbsp lemon juice",
        "¼ tsp salt",
        "¼ cup water"
      ]
    },
    "steps": {
      "en": [
        "Dry-toast sesame over medium-low until fragrant and a few seeds pop. Tip out and cool.",
        "Pulse with chilli and garlic, then blend with lemon, salt and enough water for a coarse paste.",
        "Taste and thin a teaspoon at a time to your preferred texture."
      ]
    }
  },
  "Adrak Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "40 g peeled ginger",
        "1 tbsp tamarind pulp",
        "2 tbsp jaggery",
        "1 dried red chilli",
        "1 tsp oil",
        "¼ tsp salt",
        "¼ cup water"
      ]
    },
    "steps": {
      "en": [
        "Slice ginger thinly. Sauté with the dried chilli in oil over low heat for 3–4 min, until fragrant.",
        "Cool, then blend with tamarind, jaggery, salt and enough water to make a smooth paste.",
        "Taste after blending. Add a little jaggery if the ginger is particularly sharp."
      ]
    }
  },
  "Sweet Mango Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 large firm raw mango",
        "½ cup jaggery",
        "¼ cup water",
        "½ tsp roasted cumin powder",
        "¼ tsp salt",
        "1 green chilli, optional"
      ]
    },
    "steps": {
      "en": [
        "Peel and grate the mango. Simmer in water with slit chilli for 5 min until tender.",
        "Stir in jaggery and salt. Cook uncovered 8–12 min until a spatula briefly reveals the bottom.",
        "Remove chilli and add cumin. Cool before serving and refrigerate leftovers."
      ]
    }
  },
  "Coriander Coconut Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 packed cup coriander leaves and tender stems",
        "½ cup coconut",
        "1 green chilli",
        "1 tbsp lemon juice",
        "¼ tsp salt",
        "¼ cup water"
      ]
    },
    "steps": {
      "en": [
        "Wash coriander and drain well. Roughly chop the stems.",
        "Blend coriander, coconut and chilli with lemon, salt and just enough water to move the blades.",
        "Taste and adjust salt. Serve immediately or cover and refrigerate."
      ]
    }
  },
  "Mango Pickle (Aam ka Achar)": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g firm raw mango",
        "2 tbsp mustard oil",
        "1 tbsp 5% vinegar",
        "1½ tsp salt",
        "1 tsp ground mustard",
        "½ tsp each crushed fennel, fenugreek and chilli powder"
      ]
    },
    "steps": {
      "en": [
        "Wash and dry the mango. Cut into 1 cm pieces. Toss with salt and vinegar and rest 15 min.",
        "Warm oil over medium heat. Add spices off the heat and stir into mango.",
        "Put in a clean covered container and refrigerate overnight. Keep refrigerated and use within 3 days."
      ]
    }
  },
  "Lemon Pickle": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 thin-skinned lemons",
        "1 tbsp lemon juice",
        "1 tbsp mustard oil",
        "1½ tsp salt",
        "½ tsp each mustard seeds and chilli powder"
      ]
    },
    "steps": {
      "en": [
        "Scrub and dry lemons. Cut into 12 small wedges and remove seeds.",
        "Sizzle mustard in oil, then add wedges, juice and salt. Cover and cook 8–10 min, until the peel begins to soften. Stir in chilli off the heat.",
        "Cool and refrigerate in a covered container. Let the flavour develop overnight and use within 3 days."
      ]
    }
  },
  "Stuffed Green Chilli Pickle": {
    "serves": 4,
    "amounts": {
      "en": [
        "6 mild green chillies",
        "1 tbsp lemon juice",
        "1 tbsp mustard oil",
        "1 tsp crushed mustard seeds",
        "½ tsp each fennel and salt",
        "¼ tsp turmeric"
      ]
    },
    "steps": {
      "en": [
        "Wash and thoroughly dry chillies, slit and scrape out some seeds.",
        "Mix mustard, fennel, turmeric, salt and juice into a paste. Fill the slits. Sear in oil on medium for about 2 min per side.",
        "Cool, refrigerate overnight in a covered container and use within 3 days."
      ]
    }
  },
  "Mixed Vegetable Pickle": {
    "serves": 4,
    "amounts": {
      "en": [
        "100 g carrot",
        "100 g cauliflower",
        "100 g radish",
        "½ cup 5% vinegar",
        "½ cup water",
        "1 tbsp mustard oil",
        "1 tsp salt",
        "1 tsp crushed mustard seeds",
        "½ tsp chilli powder"
      ]
    },
    "steps": {
      "en": [
        "Cut vegetables into bite-size pieces. Bring vinegar, water and salt to a boil and simmer vegetables 2–3 min until crisp-tender.",
        "Warm oil, take off heat and stir in crushed mustard and chilli. Stir into vegetables and brine.",
        "Cool promptly, cover and refrigerate. Let stand overnight and use within 3 days."
      ]
    }
  },
  "Garlic Pickle": {
    "serves": 4,
    "amounts": {
      "en": [
        "100 g peeled garlic cloves",
        "½ cup 5% vinegar",
        "½ cup water",
        "1 tsp salt",
        "2 tsp mustard oil",
        "½ tsp each mustard seeds and chilli powder"
      ]
    },
    "steps": {
      "en": [
        "Simmer garlic, vinegar, water and salt for 5–8 min, until the cloves are barely tender.",
        "Warm oil, sizzle mustard and stir in chilli off the heat. Mix into the garlic and brine.",
        "Cool promptly, refrigerate in a clean covered container and use within 3 days."
      ]
    }
  },
  "Amla Pickle": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g amla",
        "1 tbsp 5% vinegar",
        "1½ tbsp mustard oil",
        "1 tsp crushed mustard seeds",
        "½ tsp fennel",
        "¼ tsp each turmeric and chilli powder",
        "1 tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Steam the amla 8–12 min until the segments separate easily. Cool, remove the stones and dry the segments.",
        "Warm mustard oil, remove from heat and stir in spices. Toss with amla, vinegar and salt.",
        "Refrigerate covered overnight and use within 3 days."
      ]
    }
  },
  "Sweet Mango Pickle (Meetha Achar)": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g raw mango",
        "½ cup grated jaggery",
        "¼ cup water",
        "½ tsp each crushed fennel, chilli powder and salt"
      ]
    },
    "steps": {
      "en": [
        "Peel and dice mango. Simmer in water until almost tender, about 6–8 min.",
        "Add jaggery, fennel, chilli and salt. Simmer uncovered until the fruit is translucent and the syrup lightly coats a spoon.",
        "Cool and store covered in the refrigerator for up to 3 days."
      ]
    }
  },
  "Amla Murabba": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g amla",
        "200 g sugar",
        "¾ cup water",
        "¼ tsp cardamom"
      ]
    },
    "steps": {
      "en": [
        "Steam amla 10–12 min until just tender, then prick several times with a fork.",
        "Dissolve sugar in water. Add fruit and simmer gently 15–25 min until translucent and syrupy. Add cardamom.",
        "Cool in the syrup. Cover, refrigerate and use within 1 week."
      ]
    }
  },
  "Mango Jam": {
    "serves": 4,
    "amounts": {
      "en": [
        "500 g ripe mango flesh",
        "250 g sugar",
        "2 tbsp lemon juice"
      ]
    },
    "steps": {
      "en": [
        "Purée mango and simmer with sugar and lemon juice in a wide heavy pan.",
        "Cook over medium-low 20–35 min, stirring often. When a spoonful on a cold plate wrinkles slightly when pushed, remove from heat.",
        "Transfer to a clean heatproof container, cool promptly and refrigerate. Use within 1 week or freeze."
      ]
    }
  },
  "Apple Jam": {
    "serves": 4,
    "amounts": {
      "en": [
        "500 g peeled cored apples",
        "225 g sugar",
        "2 tbsp lemon juice",
        "¼ cup water"
      ]
    },
    "steps": {
      "en": [
        "Dice apples and simmer with water and lemon until they mash easily, about 12 min.",
        "Mash to your preferred texture. Add sugar, dissolve and simmer 15–25 min, stirring. Stop when a cold-plate sample wrinkles when pushed.",
        "Cool in a clean covered container, refrigerate and use within 1 week or freeze."
      ]
    }
  },
  "Eggless Vanilla Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "180 g maida",
        "150 g plain curd",
        "110 g sugar",
        "75 g melted unsalted butter",
        "1½ tsp baking powder",
        "¼ tsp baking soda",
        "1 tsp vanilla",
        "¼ tsp salt",
        "2–4 tbsp milk"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and line an 18 cm round tin. Whisk curd, sugar, butter and vanilla. Sift flour, leaveners and salt.",
        "Fold dry ingredients into wet just until no flour patches remain. Add enough milk for thick, dropping batter.",
        "Bake 30–38 min until a centre skewer comes out without wet batter. Cool 10 min in tin before turning out."
      ]
    }
  },
  "Suji Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "180 g fine suji",
        "150 g plain curd",
        "100 g sugar",
        "70 g melted butter",
        "100 ml milk",
        "1½ tsp baking powder",
        "¼ tsp baking soda",
        "¼ tsp salt",
        "2 tbsp chopped nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Mix suji, curd, milk, sugar and butter. Rest 20 min to hydrate. Heat oven to 175°C and line an 18 cm round tin.",
        "Fold in baking powder, soda, salt and nuts. Pour and level the batter.",
        "Bake 30–38 min until golden and a centre skewer comes out clean. Cool 10 min before unmoulding."
      ]
    }
  },
  "Banana Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "220 g mashed ripe banana",
        "170 g maida",
        "80 g sugar",
        "75 g melted butter",
        "1½ tsp baking powder",
        "¼ tsp baking soda",
        "¼ tsp salt",
        "60 g plain curd"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and line a 20 × 10 cm loaf tin. Mix bananas, sugar, butter and curd.",
        "Whisk flour, leaveners and salt separately. Fold into wet mixture until just combined.",
        "Bake 40–50 min, until the centre springs back and a skewer has only moist crumbs. Rest 10 min in tin and cool before slicing."
      ]
    }
  },
  "Banana Muffins": {
    "serves": 6,
    "amounts": {
      "en": [
        "180 g ripe mashed banana",
        "140 g atta",
        "65 g sugar",
        "60 g melted butter",
        "60 g curd",
        "1½ tsp baking powder",
        "¼ tsp baking soda",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 180°C and line 6 muffin wells. Mix banana, sugar, butter and curd.",
        "Whisk atta, baking powder, soda and salt, then fold into wet mix until just combined. Fill liners about three-quarters full.",
        "Bake 18–23 min, until domed and a skewer shows no wet batter. Rest 5 min before lifting out."
      ]
    }
  },
  "Atta Cookies": {
    "serves": 6,
    "amounts": {
      "en": [
        "130 g atta",
        "85 g softened butter",
        "65 g finely powdered jaggery",
        "¼ tsp salt",
        "¼ tsp cardamom",
        "1–2 tsp milk if needed"
      ]
    },
    "steps": {
      "en": [
        "Beat butter and jaggery until creamy. Mix in flour, salt and cardamom. Add milk only if the dough will not hold.",
        "Divide into 12, press to 6 mm and chill 15 min. Heat oven to 170°C and line a tray.",
        "Bake 14–18 min until the edges turn golden. Leave on the tray 5 min, then cool on a rack to crisp."
      ]
    }
  },
  "Pav Buns (Ladi Pav)": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g maida",
        "160 ml lukewarm milk",
        "1 tsp instant yeast",
        "1 tbsp sugar",
        "¾ tsp salt",
        "25 g softened butter"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, milk, yeast, sugar and salt. Knead in butter and continue kneading until smooth and stretchy, 8–10 min.",
        "Cover and let rise until doubled, usually 60–90 min. Shape 8 tight balls, set close in a greased tin and proof until puffy, 35–60 min.",
        "Brush with milk and bake at 190°C for 18–23 min until golden. Brush lightly with butter if desired and cool on a rack."
      ]
    }
  },
  "Masala Chai": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup water",
        "1 cup milk",
        "2 tsp black tea leaves",
        "2 crushed cardamom pods",
        "1 cm ginger",
        "2 tsp sugar, optional"
      ]
    },
    "steps": {
      "en": [
        "Boil water with crushed cardamom and ginger for 2 min. Add tea and simmer 1 min.",
        "Pour in milk and sugar. Bring back to a gentle boil, then lower the heat before it foams over.",
        "Simmer 2–3 min and strain into two cups."
      ]
    }
  },
  "Haldi Doodh": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups milk",
        "½ tsp turmeric",
        "pinch of ground black pepper",
        "2 tsp sugar, optional"
      ]
    },
    "steps": {
      "en": [
        "Whisk turmeric and pepper into cold milk in a small saucepan.",
        "Heat gently, stirring, until it starts to steam, then hold at a gentle simmer for 3 min.",
        "Sweeten if desired and strain into mugs."
      ]
    }
  },
  "Badam Milk": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups milk",
        "¼ cup almonds",
        "2 tbsp sugar",
        "¼ tsp cardamom"
      ]
    },
    "steps": {
      "en": [
        "Soak almonds in boiling water for 15 min, slip off skins and thoroughly blend with ¼ cup of the milk.",
        "Simmer the paste and remaining milk 8–10 min over low heat, stirring to prevent scorching.",
        "Stir in sugar and cardamom. Serve hot or cool promptly and chill."
      ]
    }
  },
  "Banana Shake": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 ripe bananas",
        "1½ cups cold milk",
        "¼ tsp cinnamon, optional"
      ]
    },
    "steps": {
      "en": [
        "Peel and slice the bananas. For a thicker shake, freeze the slices first.",
        "Blend with milk and optional cinnamon for 30–45 seconds, until no lumps remain.",
        "Add a splash of milk if needed to pour and serve right away."
      ]
    }
  },
  "Mango Lassi": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup ripe mango flesh",
        "1 cup chilled plain curd",
        "¼ cup cold water",
        "1–2 tsp sugar, optional"
      ]
    },
    "steps": {
      "en": [
        "Blend mango and curd until silky. Taste before adding sugar.",
        "Add cold water a little at a time until the lassi is thick but pourable.",
        "Pour into two chilled glasses and serve immediately."
      ]
    }
  },
  "Sattu Sharbat": {
    "serves": 2,
    "amounts": {
      "en": [
        "¼ cup roasted chana sattu",
        "2 cups chilled drinking water",
        "1½ tbsp lemon juice",
        "½ tsp roasted cumin powder",
        "¼ tsp black salt",
        "1 tbsp mint, optional"
      ]
    },
    "steps": {
      "en": [
        "Whisk sattu with ¼ cup water into a lump-free paste.",
        "Whisk in remaining water, lemon juice, cumin and salt. Taste and adjust.",
        "Pour over ice if desired, add mint and stir before drinking because sattu settles."
      ]
    }
  },
  "Aloo Matar Malai Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g potato, diced",
        "¾ cup peas",
        "1 onion",
        "1 tomato",
        "¼ cup cream",
        "1 tbsp oil",
        "½ tsp cumin",
        "½ tsp coriander powder",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin in oil and brown chopped onion. Add tomato and coriander and cook until pulpy.",
        "Add potato, salt and ¾ cup water. Cover for 10 min, then add peas and cook until the potatoes are tender.",
        "Reduce over medium heat until lightly thick. Lower heat, stir in cream and warm gently for 2 min."
      ]
    }
  },
  "Matar Makhani": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups peas",
        "2 tomatoes",
        "½ onion",
        "10 cashews",
        "1½ tbsp butter",
        "¼ tsp Kashmiri chilli powder",
        "½ tsp kasuri methi",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Simmer chopped onion, tomatoes and cashews in ½ cup water until soft. Cool slightly and blend smooth.",
        "Melt butter and stir chilli powder into it briefly, then add purée and salt. Simmer until glossy.",
        "Add peas and cook 5–8 min, until tender. Crush kasuri methi into the gravy and stir."
      ]
    }
  },
  "Paneer Changezi": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "1 onion",
        "2 tomatoes",
        "¼ cup plain curd",
        "10 cashews",
        "1 tsp ginger-garlic paste",
        "1 tbsp oil",
        "½ tsp each Kashmiri chilli and garam masala",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Toast paneer cubes lightly in half the oil. Fry sliced onion in the rest until deep gold and blend with cashews and a splash of water.",
        "Cook paste and tomato purée until thick, then add onion paste and spices. Lower heat and whisk in curd.",
        "Simmer with ½ cup water and salt until smooth and thick. Add paneer for 2–3 min."
      ]
    }
  },
  "Paneer Makhana Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "175 g paneer",
        "1½ cups makhana",
        "2 tomatoes",
        "10 cashews",
        "1 tsp grated ginger",
        "1½ tbsp ghee",
        "½ tsp cumin",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Toast makhana in ½ tbsp ghee until crisp. Simmer chopped tomatoes and cashews in ½ cup water until soft, cool slightly and blend.",
        "Sizzle cumin and ginger in remaining ghee. Add purée, salt and ½ cup water and simmer 5–7 min until thick.",
        "Add paneer cubes to warm through and fold in makhana just before serving."
      ]
    }
  },
  "Paneer Nargisi Kofta Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g paneer",
        "2 boiled potatoes",
        "2 tbsp cornflour",
        "¼ tsp turmeric",
        "1 onion",
        "2 tomatoes",
        "10 cashews",
        "1 tsp ginger",
        "½ tsp garam masala",
        "salt",
        "frying oil and 1 tbsp for gravy"
      ]
    },
    "steps": {
      "en": [
        "Mash half the paneer with turmeric and a pinch of salt, form 4 centres. Mix remaining paneer with mashed potatoes, cornflour and another pinch of salt to wrap each centre.",
        "Fry in 170°C oil until golden. Brown onion in 1 tbsp oil, add ginger, tomatoes and cashews and cook until soft. Cool slightly and blend.",
        "Simmer purée with garam masala, salt and water until spoon-coating. Halve koftas to reveal centres and add at serving."
      ]
    }
  },
  "Malai Kofta": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g paneer",
        "150 g boiled potato",
        "2 tbsp cornflour",
        "1 onion",
        "2 tomatoes",
        "12 cashews",
        "2 tbsp cream",
        "½ tsp garam masala",
        "½ tsp salt",
        "frying oil and 1 tbsp for gravy"
      ]
    },
    "steps": {
      "en": [
        "Mash paneer and potato with cornflour and a pinch of salt. Make 8 firm balls and fry at 170°C until golden.",
        "Soften chopped onion in 1 tbsp oil, add tomato and cashews and cook until soft. Cool slightly and blend smooth.",
        "Simmer with ½ cup water, garam masala and salt until thick. Stir in cream off the heat and spoon over koftas to serve."
      ]
    }
  },
  "Shahi Paneer": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "1 onion",
        "1 small tomato",
        "15 cashews",
        "½ cup milk",
        "1 tbsp ghee",
        "2 green cardamom pods",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Simmer chopped onion, tomato and cashews in ½ cup water until tender. Cool slightly and blend smooth.",
        "Bloom crushed cardamom in ghee. Add purée and salt and stir 5 min on low heat. Pour in milk and simmer gently until smooth.",
        "Add cubed paneer and warm 2–3 min without a rolling boil."
      ]
    }
  },
  "Paneer Butter Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "3 ripe tomatoes",
        "½ onion",
        "12 cashews",
        "2 tbsp butter",
        "1 tsp ginger-garlic paste",
        "½ tsp Kashmiri chilli powder",
        "½ tsp kasuri methi",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Simmer chopped tomatoes, onion and cashews in ½ cup water until soft. Cool slightly and blend until silky.",
        "Fry paste and chilli in melted butter briefly. Stir in purée and salt and simmer until it coats a spoon, about 8 min.",
        "Stir in paneer and crushed kasuri methi and simmer gently 2–3 min."
      ]
    }
  },
  "Paneer Do Pyaza": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "2 onions",
        "2 tomatoes",
        "1 tbsp oil",
        "½ tsp cumin",
        "½ tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Dice one onion finely and cut the other into petals. Sear petals in half the oil over high heat for 2 min and set aside.",
        "Sizzle cumin in remaining oil, brown diced onion and fry chopped tomatoes with spices and salt until thick.",
        "Add ¼ cup water, paneer and onion petals. Cook 3–4 min, keeping a little bite in the petals."
      ]
    }
  },
  "Methi Matar Malai": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup packed chopped methi",
        "1 cup peas",
        "½ onion",
        "12 cashews",
        "½ cup milk",
        "2 tbsp cream",
        "1 tbsp ghee",
        "½ tsp cumin",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Soften onion and cashews in half the ghee, cool and blend with milk. Wash and drain methi very well.",
        "Sizzle cumin in remaining ghee and sauté methi for 3 min. Add peas and a splash of water and cook until almost tender.",
        "Add cashew mixture and salt. Simmer gently to thicken, then stir in cream and serve."
      ]
    }
  },
  "Mushroom Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g button mushrooms",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "1½ tbsp oil",
        "½ tsp each cumin and coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Slice mushrooms thickly and sauté over high heat in half the oil until browned and their water evaporates. Set aside.",
        "Sizzle cumin in remaining oil. Brown chopped onion, add paste and spices, then cook tomatoes until thick.",
        "Stir in mushrooms, salt and ¼ cup water. Simmer 4–5 min until the gravy clings."
      ]
    }
  },
  "Soya Chunks Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups dried soya chunks",
        "1 onion",
        "2 tomatoes",
        "1 potato, optional",
        "1 tsp ginger-garlic paste",
        "1 tbsp oil",
        "½ tsp each cumin and garam masala",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Simmer chunks in water according to the packet, drain, rinse and squeeze firmly.",
        "Sizzle cumin in oil, brown chopped onion and add paste. Add diced tomato and cook until thick.",
        "Add chunks, optional diced potato, salt, garam masala and ¾ cup water. Cover and simmer until the chunks absorb the sauce and any potato is tender, 10–15 min."
      ]
    }
  },
  "Stuffed Tinda Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 small tinda",
        "1 onion",
        "2 tomatoes",
        "2 tbsp besan",
        "1 tsp coriander powder",
        "½ tsp each cumin, amchur and salt",
        "1½ tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Peel tinda and cross-slit almost to the base. Toast besan, then mix with coriander, amchur, half the salt and 1 tsp oil. Pack into slits.",
        "Sizzle cumin in remaining oil, brown chopped onion and cook diced tomatoes down.",
        "Add tinda, ½ cup water and remaining salt. Cover and simmer 15–20 min, turning once, until tender."
      ]
    }
  },
  "Besan Karela Fry": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g karela",
        "1 small onion",
        "3 tbsp besan",
        "1½ tbsp oil",
        "½ tsp each cumin and amchur",
        "¼ tsp turmeric",
        "½ tsp salt plus more for salting"
      ]
    },
    "steps": {
      "en": [
        "Slice karela, remove hard seeds, salt lightly and rest 15 min. Rinse and squeeze dry.",
        "Sizzle cumin in oil. Fry sliced onion and karela with turmeric over medium heat until tender and browned, 10–14 min.",
        "Sprinkle besan, amchur and remaining salt. Stir-fry 3–4 min until the flour smells toasted and coats the slices."
      ]
    }
  },
  "Baingan Fry Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g brinjal",
        "1 small onion",
        "1 tomato",
        "1½ tbsp oil",
        "½ tsp each cumin and coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Cut brinjal into 1 cm slices. Toss with turmeric and salt and pan-fry in most of the oil until brown and tender on both sides.",
        "Remove, add remaining oil and cumin and cook finely chopped onion and tomato with coriander until thick and nearly dry.",
        "Return brinjal and turn carefully to coat. Cook 2 min and serve."
      ]
    }
  },
  "Suran (Jimikand) Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g peeled elephant foot yam",
        "2 tbsp tamarind pulp, divided",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "2 tbsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Wear gloves if the yam irritates your skin. Dice into 2 cm cubes and boil in plenty of water with 1 tbsp tamarind until fully tender, about 15–20 min. Drain and discard cooking water.",
        "Brown yam in half the oil and remove. Sizzle cumin in remaining oil, brown chopped onion and fry paste, turmeric and tomato until thick.",
        "Add yam, remaining tamarind, salt and ½ cup water. Simmer 6–8 min until the gravy clings."
      ]
    }
  },
  "Annakut Sabzi": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 potato",
        "150 g pumpkin",
        "150 g brinjal",
        "80 g beans",
        "2 tomatoes",
        "1 tbsp ghee",
        "½ tsp cumin",
        "1 tsp coriander powder",
        "¼ tsp turmeric",
        "¾ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Cut vegetables into even chunks. Sizzle cumin in ghee and cook tomatoes and spices until pulpy.",
        "Add potato, beans, salt and ½ cup water and cover for 8 min. Add brinjal and pumpkin, then cover another 10–15 min.",
        "Uncover when all vegetables are tender and simmer off excess liquid. Fold gently to keep the pumpkin intact."
      ]
    }
  },
  "Mix Vegetable": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 potato",
        "150 g cauliflower",
        "1 carrot",
        "½ cup peas",
        "80 g beans",
        "1 onion",
        "1 tomato",
        "1½ tbsp oil",
        "½ tsp cumin",
        "1 tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Dice vegetables evenly and chop onion and tomato. Sizzle cumin in oil, soften onion and cook tomato with spices until pulpy.",
        "Add potato, carrot, cauliflower, beans and ¼ cup water. Cover over medium-low heat for 8 min.",
        "Stir in peas and salt and cook until all vegetables are tender. Uncover to reduce any excess moisture."
      ]
    }
  },
  "Aloo Matar": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g potatoes",
        "¾ cup peas",
        "1 onion",
        "2 tomatoes",
        "1 tsp grated ginger",
        "1 tbsp oil",
        "½ tsp cumin",
        "½ tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin in oil. Brown chopped onion and stir in ginger, tomato and spices. Cook until thick.",
        "Add diced potatoes, salt and ¾ cup water. Cover and simmer until almost tender, about 10–12 min.",
        "Add peas and simmer 5–7 min more. Mash a potato cube into the gravy if you want it thicker."
      ]
    }
  },
  "Aloo Baingan": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g potato",
        "250 g brinjal",
        "1 small onion",
        "1 tomato",
        "1½ tbsp oil",
        "½ tsp cumin",
        "½ tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Cut potato and brinjal into 2 cm pieces. Sizzle cumin in oil and soften chopped onion. Cook tomato and spices until pulpy.",
        "Add potatoes, salt and ¼ cup water. Cover 8 min, then stir in brinjal.",
        "Cover another 6–10 min until both vegetables are tender. Uncover and cook briefly if too wet."
      ]
    }
  },
  "Lauki ki Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "450 g bottle gourd",
        "1 tomato",
        "1 small onion, optional",
        "1 green chilli, optional",
        "1 tbsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Peel lauki and discard any gourd that tastes bitter. Remove hard seeds and dice.",
        "Sizzle cumin in oil, soften onion and cook tomato, chilli and turmeric until pulpy.",
        "Add lauki and salt with 2 tbsp water. Cover 12–16 min until soft. Uncover to evaporate excess moisture."
      ]
    }
  },
  "Lauki Kofta Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g bottle gourd",
        "½ cup besan",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger",
        "½ tsp cumin",
        "½ tsp garam masala",
        "½ tsp salt",
        "frying oil and 1 tbsp for gravy"
      ]
    },
    "steps": {
      "en": [
        "Discard any bitter lauki. Peel, grate and squeeze very dry. Mix with besan and a pinch of salt, shape small balls and fry at 170°C until golden.",
        "Sizzle cumin in 1 tbsp oil, brown chopped onion and cook ginger and puréed tomatoes until thick.",
        "Add ¾ cup water, garam masala and remaining salt and simmer 5 min. Add koftas just before eating."
      ]
    }
  },
  "Arbi Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g arbi",
        "1 small onion, optional",
        "1½ tbsp oil",
        "½ tsp ajwain",
        "½ tsp each amchur and coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Boil washed arbi in its skin until just fork-tender, about 12–18 min. Cool, peel and slice thickly.",
        "Sizzle ajwain in oil, soften sliced onion and add arbi with spices and salt.",
        "Pan-fry in one layer until both sides are crisp and the centres are fully soft. Add amchur off the heat."
      ]
    }
  },
  "Palak Chana Dal Tadka": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup chana dal",
        "150 g spinach",
        "1 onion",
        "1 tomato",
        "2 garlic cloves",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt",
        "2½ cups water"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 30 min. Drain and pressure-cook with fresh water and turmeric for 15 min at high pressure, releasing naturally.",
        "Sizzle cumin in ghee, brown onion and garlic and cook chopped tomato until soft. Add chopped spinach and wilt.",
        "Stir into tender dal with salt and simmer 4–5 min. Thin with hot water as needed."
      ]
    }
  },
  "Dal Palak": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup toor dal",
        "200 g spinach",
        "1 small onion",
        "3 garlic cloves",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt",
        "2 cups water"
      ]
    },
    "steps": {
      "en": [
        "Rinse dal and pressure-cook with water and turmeric on high 12–15 min with natural release.",
        "Sizzle cumin in ghee and brown finely chopped onion and garlic. Stir in washed chopped spinach and cook 2–3 min.",
        "Add the soft dal and salt and simmer gently 4 min. Stir or whisk lightly for a creamy texture."
      ]
    }
  },
  "Chana Dal Tadka": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup chana dal",
        "2½ cups water",
        "1 onion",
        "1 tomato",
        "3 garlic cloves",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 1 hour, drain and pressure-cook in fresh water with turmeric 12–15 min on high. Let pressure drop naturally.",
        "Sizzle cumin in ghee. Brown chopped onion and garlic, then cook tomato until soft.",
        "Add dal and salt and simmer 5 min. The dal should be tender with some intact grains."
      ]
    }
  },
  "Moong Dal Tadka": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup split yellow moong",
        "2½ cups water",
        "1 small onion",
        "1 tomato",
        "2 garlic cloves",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Rinse moong and simmer in water with turmeric, partly covered, for 15–20 min until soft. Stir in salt.",
        "Sizzle cumin in ghee, fry chopped onion and garlic until golden and cook chopped tomato until soft.",
        "Stir into the dal and simmer 2 min. Add water if it thickens too much."
      ]
    }
  },
  "Bedmi Puri with Aloo Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "⅓ cup split urad",
        "350 g potatoes",
        "2 tomatoes",
        "1 tsp each fennel and cumin",
        "½ tsp each turmeric, amchur and salt, plus to taste",
        "1 tbsp oil plus frying oil"
      ]
    },
    "steps": {
      "en": [
        "Soak urad 2 hours, drain and grind coarsely. Fry it in 1 tsp oil with crushed fennel, amchur and a pinch of salt until dry. Cool.",
        "Mix dal into atta, add just enough water for a firm dough and rest 15 min. Roll 8 rounds and fry at 175–180°C until puffed and golden.",
        "Meanwhile sizzle cumin in remaining oil, cook chopped tomatoes with turmeric until soft, then add diced potato, salt and 1 cup water. Cover 15–18 min until tender and roughly mash a few cubes."
      ]
    }
  },
  "Missi Roti": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup atta",
        "½ cup besan",
        "¼ cup minced onion",
        "1 tbsp coriander",
        "½ tsp each ajwain and salt",
        "about ½ cup water",
        "2 tsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Mix flours, onion, coriander, ajwain and salt. Add water gradually and knead to a soft dough. Rest 15 min.",
        "Divide into 4, dust with atta and roll 3 mm thick.",
        "Cook on a hot tawa, turning once the underside spots. Brush with ghee and cook until both sides are browned."
      ]
    }
  },
  "Gobi Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "180 g finely grated cauliflower",
        "1 green chilli, optional",
        "1 tbsp coriander",
        "½ tsp each ajwain and salt",
        "1 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Knead atta with about ½ cup water and a pinch of salt. Rest 20 min.",
        "Squeeze moisture from cauliflower. Mix with chilli, coriander, ajwain and remaining salt just before filling.",
        "Wrap four portions in dough, roll gently and cook on a medium-hot tawa with ghee until golden on both sides."
      ]
    }
  },
  "Paneer Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "150 g paneer",
        "1 tbsp coriander",
        "1 green chilli, optional",
        "½ tsp each ajwain and salt",
        "1 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Knead atta with a pinch of salt and about ½ cup water. Rest 20 min.",
        "Crumble paneer finely and mix with coriander, chilli, ajwain and remaining salt. Enclose in 4 dough rounds.",
        "Dust, roll gently and fry on a medium-hot tawa, brushing with ghee and turning until browned on both sides."
      ]
    }
  },
  "Mooli Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "200 g grated radish",
        "1 tbsp coriander",
        "1 green chilli, optional",
        "½ tsp each ajwain and salt",
        "1 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Salt radish lightly, rest 10 min and squeeze well. Use the squeezed liquid plus fresh water to knead atta into a soft dough. Rest 15 min.",
        "Season squeezed radish with coriander, chilli and ajwain. Enclose in 4 dough rounds and roll carefully.",
        "Toast with ghee on a medium-hot tawa until both sides are spotted and crisp."
      ]
    }
  },
  "Palak Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "100 g spinach",
        "1 green chilli, optional",
        "½ tsp each cumin and salt",
        "1 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Blanch spinach 45 seconds, cool, squeeze and purée with chilli and a splash of water.",
        "Knead into atta with cumin and salt. Add water as needed for soft dough. Rest 15 min.",
        "Roll four discs and toast on a medium-hot tawa, brushing with ghee until both sides are browned."
      ]
    }
  },
  "Matar Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "1 cup peas",
        "1 tsp grated ginger",
        "½ tsp each cumin and salt",
        "1 tsp oil",
        "1 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Knead atta with a pinch of salt and about ½ cup water and rest 20 min.",
        "Steam peas until tender and mash. Fry cumin, ginger and mashed peas in oil until dry, season and cool.",
        "Enclose filling in four dough rounds, roll gently and cook with ghee until both sides are spotted."
      ]
    }
  },
  "Lachha Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1¼ cups atta",
        "½ tsp salt",
        "about ½ cup water",
        "2 tbsp ghee, plus flour for dusting"
      ]
    },
    "steps": {
      "en": [
        "Knead flour, salt and water to a soft dough. Cover 20 min.",
        "Roll each of four portions thin, brush with ghee and dust with flour. Pleat like a fan, coil and roll lightly.",
        "Toast with remaining ghee on a medium-hot tawa until golden on both sides. Clap gently between your hands to loosen the layers."
      ]
    }
  },
  "Tawa Naan": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups maida",
        "⅓ cup curd",
        "½ tsp baking powder",
        "⅛ tsp baking soda",
        "½ tsp salt",
        "about ¼ cup water",
        "1 tbsp butter"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, leaveners, salt and curd. Add just enough water to knead a soft dough. Cover and rest 30 min.",
        "Roll four ovals. Cook on a hot tawa 1–2 min until bubbles rise and the base spots.",
        "Flip and cook another minute until the second side is browned. Brush with butter while hot."
      ]
    }
  },
  "Mumbai Tawa Pulao": {
    "serves": 2,
    "amounts": {
      "en": [
        "2½ cups cooked cooled rice",
        "1 onion",
        "2 tomatoes",
        "1 capsicum",
        "½ cup cooked peas",
        "1½ tbsp butter",
        "1 tbsp pav bhaji masala",
        "½ tsp salt",
        "½ lemon"
      ]
    },
    "steps": {
      "en": [
        "Chop vegetables small. Sauté onion and capsicum in butter over medium-high heat 3 min. Add tomatoes and masala and cook until jammy.",
        "Stir in peas and rice. Toss 3–5 min on high until steaming and evenly coated.",
        "Taste for salt and finish with lemon."
      ]
    }
  },
  "Matar Pulao": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup basmati",
        "¾ cup peas",
        "1 small onion",
        "1 tbsp ghee",
        "½ tsp cumin",
        "1 bay leaf",
        "½ tsp salt",
        "1½ cups water"
      ]
    },
    "steps": {
      "en": [
        "Rinse rice, soak 20 min and drain. Bloom cumin and bay leaf in ghee, then soften sliced onion.",
        "Stir in peas and rice, add water and salt and bring to a simmer. Cover tightly on low for 12–15 min.",
        "When water is absorbed, turn off the heat and rest covered 10 min. Fluff with a fork."
      ]
    }
  },
  "Paneer Pulao": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup basmati",
        "150 g paneer",
        "½ cup peas",
        "1 small onion",
        "1½ tbsp ghee",
        "½ tsp cumin",
        "1 bay leaf",
        "½ tsp salt",
        "1½ cups water"
      ]
    },
    "steps": {
      "en": [
        "Rinse, soak rice 20 min and drain. Brown paneer cubes in half the ghee and set aside.",
        "Bloom cumin and bay leaf in remaining ghee. Soften sliced onion, then add rice, peas, salt and water. Simmer covered on low 12–15 min.",
        "Once water is absorbed, add paneer and rest covered off the heat for 10 min. Fluff gently."
      ]
    }
  },
  "Vegetable Daliya": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup broken wheat",
        "1 carrot",
        "½ cup peas",
        "1 small onion",
        "1 tomato",
        "1 tbsp ghee",
        "½ tsp cumin",
        "½ tsp salt",
        "2¼ cups water"
      ]
    },
    "steps": {
      "en": [
        "Dry-toast broken wheat 3–4 min until fragrant. Sizzle cumin in ghee and soften diced onion.",
        "Add finely chopped carrot and tomato, peas, wheat, salt and water. Bring to a boil.",
        "Cover and simmer 15–20 min until tender. Rest 5 min, then fluff."
      ]
    }
  },
  "Veg Fried Rice": {
    "serves": 2,
    "amounts": {
      "en": [
        "2½ cups cooked promptly chilled rice",
        "½ carrot",
        "60 g beans",
        "½ capsicum",
        "2 spring onions",
        "2 garlic cloves",
        "1½ tbsp oil",
        "1 tbsp soy sauce",
        "1 tsp rice vinegar"
      ]
    },
    "steps": {
      "en": [
        "Finely dice vegetables and break up cold rice. Heat a wok over high heat and fry garlic and spring onion whites in oil for 20 seconds.",
        "Stir-fry carrot and beans 2 min, add capsicum for another minute, then add rice and toss until steaming throughout.",
        "Add soy and vinegar around the edge of the wok. Toss briefly and finish with spring onion greens."
      ]
    }
  },
  "Chilli Paneer": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "1 capsicum",
        "1 onion",
        "2 garlic cloves",
        "1 green chilli",
        "2 tbsp cornflour, divided",
        "2 tbsp oil",
        "1 tbsp soy sauce",
        "1 tbsp chilli sauce",
        "1 tsp vinegar"
      ]
    },
    "steps": {
      "en": [
        "Coat paneer cubes in 1½ tbsp cornflour and pan-fry in oil until lightly crisp. Set aside.",
        "Stir-fry chopped garlic, chilli, onion petals and capsicum on high for 2 min. Add sauces, vinegar and ¼ cup water.",
        "Mix remaining cornflour with 1 tbsp cold water and stir in. Once glossy, toss in paneer and serve."
      ]
    }
  },
  "Veg Manchurian": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g cabbage",
        "1 carrot",
        "2 spring onions",
        "2 garlic cloves",
        "3 tbsp cornflour, divided",
        "2 tbsp maida",
        "½ tsp salt",
        "1 tbsp each soy and chilli sauce",
        "1 tsp vinegar",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Finely grate cabbage and carrot and squeeze dry. Add maida, 2 tbsp cornflour and salt. Shape small firm balls and fry at 170°C until golden.",
        "Fry chopped spring onion whites and garlic in 1 tsp oil. Add sauces, vinegar and ½ cup water.",
        "Thicken with remaining cornflour mixed with 2 tbsp cold water. Once glossy, add balls and chopped spring onion greens immediately before serving."
      ]
    }
  },
  "Crispy Corn": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups cooked corn",
        "2 tbsp cornflour",
        "1 tbsp besan",
        "½ tsp salt",
        "½ tsp chaat masala",
        "1 tbsp chopped onion, optional",
        "1 tsp lemon juice",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Drain and dry the corn well. Toss with cornflour, besan and salt, knocking off excess.",
        "Shallow-fry in small batches over medium-high heat until crisp, using a splatter screen since kernels can pop.",
        "Drain well and toss with chaat masala, onion and lemon just before serving."
      ]
    }
  },
  "Macaroni (Indian Style)": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g dry macaroni",
        "1 onion",
        "2 tomatoes",
        "½ capsicum",
        "½ cup peas",
        "1 tbsp oil",
        "½ tsp each cumin and garam masala",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Boil macaroni in salted water until just firm to the bite. Reserve ½ cup cooking water and drain.",
        "Sizzle cumin, then soften chopped onion in oil. Add diced tomatoes, capsicum, peas, garam masala and salt. Cook until tomato turns saucy.",
        "Add macaroni and a splash of cooking water. Toss and cook 2 min until coated."
      ]
    }
  },
  "Dahi Vada": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup split skinned urad",
        "1½ cups plain curd",
        "1 tsp sugar",
        "½ tsp salt",
        "2 tbsp tamarind chutney",
        "½ tsp roasted cumin",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Soak urad 4 hours, drain and grind with minimal water. Beat until fluffy and fry spoonfuls at 170–175°C until pale gold and cooked through.",
        "Soak fried vadas in warm drinking water for 10 min, then squeeze gently between your palms.",
        "Whisk curd, sugar and salt. Pour over vadas, chill 20 min and finish with chutney and roasted cumin."
      ]
    }
  },
  "Dahi Aloo Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g boiled potato",
        "¾ cup curd",
        "2 tbsp tamarind chutney",
        "1 tbsp mint chutney",
        "½ tsp chaat masala",
        "1 tbsp coriander"
      ]
    },
    "steps": {
      "en": [
        "Cut cooked potato into bite-size cubes. For crisp edges, brown in 1 tsp oil and let cool slightly.",
        "Whisk curd and coat potatoes. Drizzle with both chutneys and sprinkle chaat masala.",
        "Scatter coriander and serve immediately."
      ]
    }
  },
  "Sprouts Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups moong sprouts",
        "1 small onion",
        "1 tomato",
        "1 tbsp lemon juice",
        "1 tbsp coriander",
        "½ tsp chaat masala",
        "¼ tsp salt",
        "1 green chilli, optional"
      ]
    },
    "steps": {
      "en": [
        "Steam sprouts until thoroughly cooked and steaming throughout, about 5–8 min. Drain and cool.",
        "Finely dice onion, tomato and chilli. Toss with sprouts, lemon, chaat masala and salt.",
        "Fold in coriander just before serving."
      ]
    }
  },
  "Corn Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups corn kernels",
        "½ small onion",
        "1 small tomato",
        "1 tbsp lemon juice",
        "1 tbsp coriander",
        "½ tsp chaat masala",
        "pinch of salt"
      ]
    },
    "steps": {
      "en": [
        "Boil corn 4–6 min until tender and drain thoroughly. Let cool slightly.",
        "Finely dice onion and tomato. Toss with corn, chaat masala, lemon and salt.",
        "Finish with chopped coriander and serve warm or chilled."
      ]
    }
  },
  "Bhel Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups murmura",
        "¼ cup sev",
        "½ small onion",
        "1 small tomato",
        "2 tbsp tamarind chutney",
        "1 tbsp mint chutney",
        "½ tsp chaat masala"
      ]
    },
    "steps": {
      "en": [
        "Dry-toast murmura briefly if it has softened, then cool. Finely dice onion and deseeded tomato.",
        "Toss murmura, vegetables, half the sev and chaat masala. Add both chutneys gradually until lightly coated.",
        "Top with remaining sev and serve at once before the murmura softens."
      ]
    }
  },
  "Banarasi Tamatar Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 ripe tomatoes",
        "1 boiled potato",
        "1 tbsp ghee",
        "1 tsp grated ginger",
        "½ tsp cumin",
        "½ tsp chaat masala",
        "½ tsp salt",
        "2 tsp sugar",
        "2 tbsp crushed namak pare",
        "coriander, optional"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin and ginger in ghee. Add chopped tomatoes, salt and sugar and cook 8–12 min until broken down.",
        "Mash potato into the tomatoes. Add chaat masala and a splash of water and simmer to a thick, scoopable consistency.",
        "Spoon into bowls and top with crunchy namak pare and coriander."
      ]
    }
  },
  "Samosa": {
    "serves": 4,
    "amounts": {
      "en": [
        "1½ cups maida",
        "3 tbsp oil",
        "½ tsp each ajwain and salt",
        "about ⅓ cup water",
        "300 g boiled potato",
        "½ cup peas",
        "½ tsp each cumin, amchur and garam masala",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Rub oil, ajwain and salt into flour. Add water gradually for a firm dough and rest 25 min.",
        "Toast cumin in 1 tsp oil, stir in peas, crumbled potato and remaining spices until dry, then cool. Divide dough into 4 ovals, halve each and seal into cones.",
        "Fill and seal cones with a dab of water. Fry at 150–160°C until crisp and evenly golden, about 10–14 min per batch."
      ]
    }
  },
  "Moong Dal Kachori": {
    "serves": 4,
    "amounts": {
      "en": [
        "1½ cups maida",
        "3 tbsp ghee",
        "½ tsp salt",
        "about ½ cup water",
        "½ cup split moong",
        "1 tbsp oil",
        "½ tsp each cumin, fennel and amchur",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Rub ghee and salt into flour. Add water to form dough and rest covered for 20 min.",
        "Soak dal 2 hours, drain and grind coarsely. Fry in 1 tbsp oil with spices until dry and crumbly, then cool.",
        "Enclose filling in 8 rounds and press lightly. Fry in batches at 150–160°C until crisp all over."
      ]
    }
  },
  "Mathri": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup maida",
        "3 tbsp ghee",
        "½ tsp ajwain",
        "½ tsp salt",
        "about ¼ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Rub ghee, ajwain and salt into flour until crumbly. Add water gradually for a stiff dough and rest 15 min.",
        "Pat or roll 12 small 5 mm discs and prick each with a fork.",
        "Fry at 150–160°C until golden and crisp. Cool completely on a rack."
      ]
    }
  },
  "Aloo Bonda": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g boiled potato",
        "¾ cup besan",
        "1 green chilli",
        "½ tsp mustard seeds",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tsp oil plus frying oil"
      ]
    },
    "steps": {
      "en": [
        "Pop mustard seeds in 1 tsp oil. Fry chopped chilli, add mashed potato, turmeric and half the salt and stir until dry. Cool and shape six balls.",
        "Whisk besan, remaining salt and about ½ cup water into a thick batter. Coat the balls.",
        "Fry at 170–175°C in batches, turning until crisp and golden. Drain."
      ]
    }
  },
  "Bread Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 bread slices",
        "250 g boiled potatoes",
        "¾ cup besan",
        "½ tsp ajwain",
        "½ tsp salt",
        "1 green chilli, optional",
        "about ½ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Mash potato with chopped chilli and half the salt. Spread between pairs of bread slices and cut into triangles.",
        "Whisk besan, ajwain, remaining salt and water into a pourable coating batter.",
        "Dip each triangle and fry at 170–175°C on both sides until golden and crisp. Drain before serving."
      ]
    }
  },
  "Palak Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g spinach",
        "¾ cup besan",
        "1 small onion, thinly sliced",
        "½ tsp ajwain",
        "½ tsp salt",
        "¼ tsp chilli powder",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Wash and dry spinach, then chop. Toss with onion, besan, ajwain, salt and chilli.",
        "Add water 1 tbsp at a time until vegetables hold together in loose clusters.",
        "Fry small spoonfuls at 170–175°C, turning until crisp, about 4 min per batch. Drain on a rack."
      ]
    }
  },
  "Paneer Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g paneer",
        "¾ cup besan",
        "2 tbsp rice flour",
        "½ tsp ajwain",
        "½ tsp salt",
        "¼ tsp chilli powder",
        "about ½ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Cut paneer into 1 cm slabs. Whisk besan, rice flour, spices and salt with water into a thick batter.",
        "Coat paneer and fry in batches at 170–175°C for 3–5 min, turning once.",
        "Drain when the coating is golden and firm. Serve hot."
      ]
    }
  },
  "Green Moong Dal Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup whole green moong",
        "1 green chilli",
        "1 cm ginger",
        "1 tbsp coriander",
        "½ tsp salt",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Soak moong 4–6 hours until plump. Drain and pulse with ginger and chilli to a coarse paste using very little water.",
        "Stir in salt and chopped coriander and beat for 1 min. Drop small spoonfuls into 170–175°C oil.",
        "Fry about 4–6 min per batch, until crisp outside and cooked through. Drain on a rack."
      ]
    }
  },
  "Hara Bhara Kabab": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g spinach",
        "½ cup peas",
        "1 boiled potato",
        "2 tbsp besan",
        "1 green chilli, optional",
        "½ tsp garam masala",
        "½ tsp salt",
        "2 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Blanch spinach and peas, drain and squeeze spinach dry. Pulse together with chilli, leaving some texture.",
        "Mash with potato, besan, garam masala and salt. Shape 6 small patties. If soft, chill 15 min.",
        "Shallow-fry on medium heat until both sides brown and the patties hold when lifted."
      ]
    }
  },
  "Veg Cutlet": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g boiled potato",
        "½ cup cooked diced carrot and peas",
        "½ cup breadcrumbs",
        "2 tbsp cornflour",
        "½ tsp each garam masala and salt",
        "2 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Mash potatoes with drained vegetables, 1 tbsp cornflour and seasonings. Shape six firm patties.",
        "Mix remaining cornflour with 2 tbsp water. Brush on cutlets and coat with breadcrumbs.",
        "Shallow-fry on medium heat for 3–4 min per face until golden and crisp."
      ]
    }
  },
  "Paneer 65": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "2 tbsp curd",
        "2 tbsp rice flour",
        "2 tbsp cornflour",
        "½ tsp Kashmiri chilli powder",
        "½ tsp salt",
        "1 tsp ginger-garlic paste",
        "8 curry leaves",
        "1 green chilli",
        "3 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Mix curd, flours, chilli powder, salt and paste. Coat paneer cubes and rest 10 min.",
        "Shallow-fry in most of the oil over medium-high heat until crisp, turning each piece.",
        "In remaining oil fry curry leaves and slit chilli briefly. Toss fried paneer through and serve hot."
      ]
    }
  },
  "Bread Upma": {
    "serves": 2,
    "amounts": {
      "en": [
        "5 bread slices",
        "1 small onion",
        "1 tomato",
        "8 curry leaves",
        "1 green chilli, optional",
        "½ tsp mustard seeds",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Cube and lightly toast bread. Heat oil, pop mustard seeds and add curry leaves, chilli and chopped onion.",
        "Cook until onion softens, then add chopped tomato, turmeric and salt and cook until jammy.",
        "Toss bread through for 1–2 min until lightly coated. Serve before it softens."
      ]
    }
  },
  "Rava Idli": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup suji",
        "¾ cup curd",
        "about ½ cup water",
        "½ tsp salt",
        "1 tsp plain fruit salt",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves"
      ]
    },
    "steps": {
      "en": [
        "Pop mustard seeds and fry curry leaves in oil. Add suji and roast lightly. Cool, mix with curd, water and salt and rest 15 min.",
        "Heat steamer and grease moulds. Fold fruit salt into batter and spoon into moulds immediately.",
        "Steam 10–14 min, until puffed and a skewer comes out clean. Rest 3 min before unmoulding."
      ]
    }
  },
  "Instant Rava Dosa": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup fine suji",
        "½ cup rice flour",
        "¼ cup maida",
        "2½–3 cups water",
        "¼ cup finely chopped onion",
        "½ tsp cumin",
        "½ tsp salt",
        "1 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Whisk flours, water, onion, cumin and salt into a thin batter. Rest 20 min and stir before each dosa.",
        "Drizzle the batter from the outside inward onto a hot lightly greased tawa, leaving small holes. Add a little oil around the rim.",
        "Cook until dry, golden and crisp around the edge. Lift and fold, without flipping if fully crisp."
      ]
    }
  },
  "Onion Uttapam": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups fermented idli or dosa batter",
        "1 small onion, finely chopped",
        "1 green chilli, optional",
        "1 tbsp coriander",
        "2 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Heat a greased tawa over medium. Pour a small thick pancake and scatter onion, chilli and coriander immediately.",
        "Press toppings lightly, cover and cook 2–3 min until top sets and underside browns.",
        "Flip for 1–2 min to brown onion. Repeat with remaining batter."
      ]
    }
  },
  "Chana Dal Vada": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup chana dal",
        "1 small onion",
        "1 green chilli",
        "8 curry leaves",
        "½ tsp fennel",
        "½ tsp salt",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 2 hours and drain completely. Reserve 2 tbsp whole dal and pulse the remainder with chilli and fennel to a coarse paste.",
        "Mix in reserved dal, chopped onion, curry leaves and salt. Shape 8 squat discs.",
        "Fry at 170–175°C for 4–6 min per batch until deep gold and crisp. Drain well."
      ]
    }
  },
  "Besan Barfi": {
    "serves": 6,
    "amounts": {
      "en": [
        "1 cup besan",
        "½ cup ghee",
        "¾ cup sugar",
        "⅓ cup water",
        "¼ tsp cardamom",
        "2 tbsp sliced nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Roast besan in ghee on low 15–20 min, stirring until deeply fragrant and golden.",
        "Boil sugar and water to one-thread stage, about 106–110°C. Take both pans off heat and mix syrup into besan with cardamom.",
        "Press into a lined tin, scatter nuts and cut once cool and set."
      ]
    }
  },
  "Moong Dal Barfi": {
    "serves": 6,
    "amounts": {
      "en": [
        "¾ cup split yellow moong",
        "⅓ cup ghee",
        "½ cup milk",
        "½ cup sugar",
        "¼ tsp cardamom",
        "2 tbsp nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Soak dal for 2 hours, drain and grind coarsely with very little water.",
        "Roast paste in ghee on low, stirring continuously for 18–25 min until crumbly and nutty. Stir in warm milk and sugar.",
        "Cook, stirring, until the mixture leaves the pan. Add cardamom, press into a greased tin, top with nuts and cut when set."
      ]
    }
  },
  "Coconut Barfi": {
    "serves": 6,
    "amounts": {
      "en": [
        "2 cups fresh grated coconut",
        "¾ cup sugar",
        "½ cup milk",
        "1 tsp ghee",
        "¼ tsp cardamom"
      ]
    },
    "steps": {
      "en": [
        "Combine coconut, milk and sugar in a heavy pan. Cook over medium-low, stirring often, until thick, about 15–20 min.",
        "Add ghee and cardamom. Keep stirring until the mass pulls away from the sides.",
        "Press into a greased dish and cut when cool and firm."
      ]
    }
  },
  "Chana Dal Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup chana dal",
        "¼ cup ghee",
        "½ cup powdered sugar",
        "¼ tsp cardamom",
        "2 tbsp chopped nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Dry-roast chana dal over medium-low until deep gold and nutty, 14–18 min. Cool completely and grind very finely.",
        "Mix the flour with sugar, cardamom and nuts. Gradually add melted ghee.",
        "Press into eight ladoos while warm. Add another teaspoon of ghee if needed to bind."
      ]
    }
  },
  "Phirni": {
    "serves": 4,
    "amounts": {
      "en": [
        "¼ cup basmati",
        "600 ml whole milk",
        "¼ cup sugar",
        "¼ tsp cardamom",
        "2 tbsp sliced pistachios"
      ]
    },
    "steps": {
      "en": [
        "Soak rice 30 min, drain and grind coarsely. Whisk with a few spoonfuls of cold milk.",
        "Bring remaining milk to a simmer. Slowly whisk in rice and stir on low 18–25 min until cooked and custardy.",
        "Add sugar and cardamom, cook another 2 min, then cool, pour into bowls and chill. Top with pistachios."
      ]
    }
  },
  "Lauki Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "500 g peeled bottle gourd",
        "400 ml milk",
        "2 tbsp ghee",
        "¼ cup sugar",
        "¼ tsp cardamom",
        "2 tbsp nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Discard any bitter gourd. Remove hard seeds, grate and fry in ghee for 5 min.",
        "Add milk and simmer uncovered 25–35 min, stirring often until lauki is soft and most liquid is gone.",
        "Stir in sugar and cook until glossy and thick. Add cardamom and optional nuts."
      ]
    }
  },
  "Lapsi": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup coarse daliya",
        "½ cup grated jaggery",
        "3 tbsp ghee",
        "2 cups hot water",
        "¼ tsp cardamom"
      ]
    },
    "steps": {
      "en": [
        "Roast daliya in ghee over medium-low 6–8 min until golden. Carefully stir in hot water.",
        "Cover and simmer until the wheat is tender and nearly all the water is absorbed, about 15–20 min.",
        "Stir in jaggery and cardamom and cook uncovered until glossy and spoonable."
      ]
    }
  },
  "Peanut Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "½ cup roasted unsalted peanuts",
        "1 green chilli",
        "1 tsp tamarind pulp",
        "¼ tsp salt",
        "about ⅓ cup water"
      ]
    },
    "steps": {
      "en": [
        "Rub skins from peanuts if desired. Blend with chilli, tamarind, salt and half the water.",
        "Add water a little at a time until the chutney is creamy but holds on a spoon.",
        "Taste for salt and tamarind. Cover and refrigerate if making ahead."
      ]
    }
  },
  "Onion Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 onions, sliced",
        "1 green chilli",
        "1 tsp tamarind pulp",
        "1 tbsp oil",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Sauté onions and chilli over medium heat in oil until soft and golden, about 8–10 min.",
        "Cool slightly, then blend with tamarind, salt and 2–3 tbsp water.",
        "Taste, thin as needed and serve with dosa or idli."
      ]
    }
  },
  "Onion Raita": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup chilled plain curd",
        "½ small red onion",
        "½ tsp roasted cumin powder",
        "¼ tsp salt",
        "1 tbsp coriander, optional"
      ]
    },
    "steps": {
      "en": [
        "Finely dice onion. Whisk curd until smooth.",
        "Fold onion and coriander into curd. Season with cumin and salt.",
        "Serve chilled. If preparing ahead, add onion shortly before serving for more crunch."
      ]
    }
  },
  "Beetroot Raita": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup plain curd",
        "100 g cooked cooled beetroot",
        "½ tsp roasted cumin powder",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Peel and grate beetroot. Press lightly if it is watery.",
        "Whisk curd with cumin and salt and fold in beetroot.",
        "Chill covered before serving. Stir again if some whey separates."
      ]
    }
  },
  "Lauki Raita": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g bottle gourd",
        "1 cup plain curd",
        "½ tsp roasted cumin",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Peel and grate lauki, discarding any that tastes bitter. Simmer with a splash of water for 6–8 min until tender.",
        "Drain very well and cool completely. Whisk curd with cumin and salt.",
        "Fold in cooled lauki and serve chilled."
      ]
    }
  },
  "Kachumber Salad": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cucumber",
        "1 tomato",
        "½ onion",
        "1 tbsp lemon juice",
        "1 tbsp coriander",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Dice cucumber, tomato and onion into similar small cubes.",
        "Toss with chopped coriander and lemon juice.",
        "Add salt just before serving so the vegetables retain their crunch."
      ]
    }
  },
  "Instant Hari Mirch Achar": {
    "serves": 4,
    "amounts": {
      "en": [
        "6 mild green chillies",
        "1 tbsp lemon juice",
        "1 tbsp mustard oil",
        "½ tsp crushed mustard seeds",
        "½ tsp salt",
        "¼ tsp turmeric"
      ]
    },
    "steps": {
      "en": [
        "Wash and dry chillies, then chop. Heat oil on medium and cook chillies, mustard and turmeric for 2–3 min.",
        "Remove from heat and add lemon juice and salt. Let cool promptly.",
        "Refrigerate in a clean covered container and use within 3 days."
      ]
    }
  },
  "Jaljeera": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups cold drinking water",
        "¼ cup mint",
        "1 tbsp lemon juice",
        "1 tsp tamarind pulp",
        "¾ tsp roasted cumin",
        "¼ tsp black salt"
      ]
    },
    "steps": {
      "en": [
        "Blend mint, tamarind and lemon with ½ cup water, then strain if desired.",
        "Stir in remaining cold water, cumin and black salt. Taste for tartness.",
        "Pour over ice and serve cold."
      ]
    }
  },
  "Sweet Lassi": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups plain curd",
        "½ cup chilled milk or water",
        "2 tbsp sugar",
        "pinch of cardamom"
      ]
    },
    "steps": {
      "en": [
        "Blend curd and sugar until smooth and dissolved.",
        "Blend in cold milk or water to a thick drinking consistency.",
        "Add cardamom, pour into two glasses and serve chilled."
      ]
    }
  },
  "Thandai": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups whole milk",
        "2 tbsp almonds",
        "1 tbsp melon seeds",
        "1 tsp poppy seeds",
        "½ tsp fennel",
        "3 peppercorns",
        "2 tbsp sugar"
      ]
    },
    "steps": {
      "en": [
        "Soak almonds and seeds in hot water 30 min. Drain, peel almonds and blend with fennel, pepper and ¼ cup milk.",
        "Simmer paste with remaining milk and sugar for 5–8 min, stirring. Cool promptly.",
        "Chill at least 1 hour, stir and strain if a smoother texture is preferred."
      ]
    }
  },
  "Veg Maggi (Noodles)": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 packets instant noodles and their seasoning",
        "½ small onion",
        "1 small tomato",
        "¼ cup peas",
        "1 tsp oil",
        "water per packet"
      ]
    },
    "steps": {
      "en": [
        "Soften finely chopped onion and tomato in oil. Add peas and the packet-directed water and bring to a boil.",
        "Add noodles and seasoning. Simmer for the package time, separating the strands gently.",
        "Serve once the noodles are tender and the sauce coats them."
      ]
    }
  },
  "Masala Oats": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup rolled oats",
        "2 cups water",
        "1 small onion",
        "1 tomato",
        "½ carrot",
        "¼ cup peas",
        "1 tsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin in oil. Sauté finely chopped onion, carrot and tomato for 3 min.",
        "Add peas, oats, water, turmeric and salt. Simmer uncovered 5–7 min, stirring occasionally.",
        "Stop when oats are tender and creamy. Add hot water if too thick."
      ]
    }
  },
  "Kairi Chutney (Raw Mango)": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 small firm raw mango",
        "1 green chilli",
        "1 tbsp grated jaggery",
        "¼ cup mint",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Peel and dice mango, removing the stone. Rinse and drain mint.",
        "Pulse mango, mint, chilli, jaggery and salt with 1–2 tbsp water until coarse.",
        "Taste and adjust the jaggery based on the mango’s tartness. Serve chilled."
      ]
    }
  },
  "Aam Panna": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 medium raw mangoes",
        "¼ cup jaggery",
        "¼ cup mint",
        "1 tsp roasted cumin",
        "½ tsp black salt",
        "3 cups cold drinking water"
      ]
    },
    "steps": {
      "en": [
        "Simmer whole mangoes in water until soft (15–20 min, depending on size), then cool and scoop out pulp.",
        "Blend pulp with jaggery, mint, cumin, salt and ½ cup cold water. Strain if fibrous.",
        "Add remaining cold water gradually, taste for sweet-sour balance and serve over ice."
      ]
    }
  },
  "Suji Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup suji",
        "⅓ cup ghee",
        "½ cup sugar",
        "1¾ cups water",
        "¼ tsp cardamom",
        "2 tbsp chopped nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Heat water with sugar until dissolved. Separately roast suji in ghee on low 8–10 min until golden and nutty.",
        "Pour the hot syrup in gradually, stirring and standing back from the steam.",
        "Cook 3–5 min until the halwa pulls away from the pan. Add cardamom and nuts."
      ]
    }
  },
  "Moong Dal Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup split yellow moong",
        "½ cup ghee",
        "¾ cup milk",
        "½ cup water",
        "½ cup sugar",
        "¼ tsp cardamom",
        "2 tbsp nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Soak dal at least 2 hours, drain and grind to a grainy paste. Warm milk and water separately.",
        "Roast paste in ghee on low 25–35 min, scraping constantly until golden, crumbly and fragrant.",
        "Add the hot liquid slowly. Stir until absorbed, then add sugar and cook until glossy. Finish with cardamom and nuts."
      ]
    }
  },
  "Besan Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup besan",
        "⅓ cup ghee",
        "½ cup powdered sugar",
        "¼ tsp cardamom",
        "2 tbsp nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Roast besan in ghee on low for 15–20 min, stirring until deep golden and fragrant. Take off heat.",
        "Let it cool until just warm before adding sugar, cardamom and chopped nuts.",
        "Shape 8 ladoos, squeezing each portion firmly. Add a teaspoon of melted ghee only if needed to bind."
      ]
    }
  },
  "Rava Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup fine suji",
        "⅓ cup desiccated coconut",
        "¼ cup ghee",
        "½ cup powdered sugar",
        "¼ tsp cardamom",
        "1–2 tbsp warm milk as needed"
      ]
    },
    "steps": {
      "en": [
        "Roast suji in ghee over low heat for 8–10 min until fragrant. Add coconut and toast another 2 min.",
        "Cool to warm and stir in sugar and cardamom. Add warm milk, a teaspoon at a time, until a handful holds together.",
        "Shape 8 ladoos. Refrigerate if you used milk."
      ]
    }
  },
  "Coconut Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "1½ cups fresh grated coconut",
        "½ cup milk",
        "⅓ cup sugar",
        "¼ tsp cardamom",
        "¼ cup desiccated coconut for coating"
      ]
    },
    "steps": {
      "en": [
        "Stir fresh coconut, milk and sugar in a heavy pan on medium-low for 10–15 min until thick and almost dry.",
        "Add cardamom and let cool until comfortable to handle.",
        "Roll into eight balls and coat with desiccated coconut. Refrigerate leftovers."
      ]
    }
  },
  "Til Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup white sesame seeds",
        "½ cup jaggery",
        "1 tsp ghee",
        "1 tbsp water"
      ]
    },
    "steps": {
      "en": [
        "Toast sesame dry until fragrant and beginning to pop, then cool.",
        "Heat jaggery, ghee and water until a drop of syrup makes a soft ball in cold water.",
        "Remove from heat and stir in sesame. When cool enough to handle but still pliable, shape 8 balls with lightly greased hands."
      ]
    }
  },
  "Rice Kheer": {
    "serves": 4,
    "amounts": {
      "en": [
        "¼ cup basmati",
        "750 ml whole milk",
        "¼ cup sugar",
        "¼ tsp cardamom",
        "2 tbsp chopped nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Rinse rice, soak 15 min and drain. Bring milk to a simmer in a heavy pan.",
        "Add rice and simmer uncovered 30–40 min, stirring and scraping until the grains mash easily and the milk thickens.",
        "Add sugar, cardamom and nuts and simmer 3 min. Cool slightly before serving or chill."
      ]
    }
  },
  "Seviyan Kheer": {
    "serves": 4,
    "amounts": {
      "en": [
        "½ cup fine vermicelli",
        "600 ml milk",
        "1 tbsp ghee",
        "3 tbsp sugar",
        "¼ tsp cardamom",
        "2 tbsp chopped nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Toast broken vermicelli in ghee over medium-low until light golden. If already roasted, toss briefly in the ghee.",
        "Add warm milk and simmer gently until strands are soft, about 8–12 min.",
        "Stir in sugar, cardamom and nuts. Simmer 2 min, keeping it loose enough to thicken as it cools."
      ]
    }
  },
  "Atte ka Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup atta",
        "⅓ cup ghee",
        "½ cup sugar",
        "1¾ cups water",
        "¼ tsp cardamom"
      ]
    },
    "steps": {
      "en": [
        "Dissolve sugar in hot water and keep warm. Roast atta in ghee over low heat for 10–14 min until nutty and evenly brown.",
        "Stir in sugar water in stages, avoiding the steam. Keep stirring until lumps disappear.",
        "Cook 3–5 min until glossy and pulling away from the sides. Stir in cardamom."
      ]
    }
  },
  "Shahi Tukda": {
    "serves": 4,
    "amounts": {
      "en": [
        "4 slices white bread",
        "500 ml whole milk",
        "¼ cup sugar for syrup plus 1 tbsp for milk",
        "¼ cup water",
        "3 tbsp ghee",
        "¼ tsp cardamom",
        "2 tbsp pistachios"
      ]
    },
    "steps": {
      "en": [
        "Simmer milk in a wide heavy pan until reduced by about half, scraping the sides. Sweeten with 1 tbsp sugar and cardamom.",
        "Cut bread into triangles and shallow-fry in ghee until crisp. Bring remaining sugar and water to a boil and simmer 4 min.",
        "Dip each triangle briefly in warm syrup and set on a plate. Spoon over thickened milk and sprinkle with pistachios."
      ]
    }
  },
  "Puran Poli": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup chana dal",
        "¾ cup jaggery",
        "1¼ cups atta",
        "¼ tsp cardamom",
        "¼ tsp salt",
        "2 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 1 hour and pressure-cook in fresh water for 15 min on high, releasing naturally. Drain very well. Mash with jaggery and simmer until stiff enough to roll. Stir in cardamom and cool.",
        "Knead atta, salt, 1 tsp ghee and about ½ cup water to a soft dough. Rest 20 min and divide dough and filling into 8 portions.",
        "Enclose each filling ball in dough and roll gently. Cook on a medium-hot tawa, brushing both sides with ghee until golden."
      ]
    }
  },
  "Bengali Payesh": {
    "serves": 4,
    "amounts": {
      "en": [
        "¼ cup gobindobhog or other short-grain aromatic rice",
        "750 ml whole milk",
        "¼ cup sugar or grated date-palm jaggery",
        "2 cardamom pods",
        "2 tbsp cashews, optional"
      ]
    },
    "steps": {
      "en": [
        "Rinse rice and drain. Simmer milk with crushed cardamom, then add rice.",
        "Cook on low, stirring, until rice is soft and milk has thickened, about 35–45 min.",
        "Stir sugar into the last few minutes of cooking, or let the milk cool slightly off heat before stirring in grated jaggery. Finish with nuts."
      ]
    }
  },
  "Dhokla": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup besan",
        "¼ cup plain curd",
        "½ cup water",
        "1 tbsp lemon juice",
        "1 tsp sugar",
        "½ tsp salt",
        "1 tsp plain fruit salt",
        "1 tbsp oil",
        "½ tsp mustard seed",
        "8 curry leaves"
      ]
    },
    "steps": {
      "en": [
        "Whisk besan, curd, water, lemon, sugar and salt until smooth. Grease a shallow tin and get steamer water boiling.",
        "Fold fruit salt into batter just before pouring. Steam 15–18 min, until a skewer comes out clean.",
        "Cool 5 min and slice. Pop mustard and curry leaves in oil, then spoon over the pieces."
      ]
    }
  },
  "Khandvi": {
    "serves": 4,
    "amounts": {
      "en": [
        "½ cup besan",
        "½ cup plain curd",
        "1 cup water",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "2 tbsp grated coconut"
      ]
    },
    "steps": {
      "en": [
        "Whisk besan, curd, water, turmeric and salt. Cook on low, stirring constantly, until thick and smooth.",
        "Spread a dab thinly on a plate. If it peels and rolls when cool, spread the rest in thin sheets on clean trays immediately.",
        "Cool 5 min, cut into strips and roll. Sizzle mustard and curry leaves in oil, pour over and add coconut."
      ]
    }
  },
  "Undhiyu": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g potatoes",
        "1 raw banana",
        "4 small brinjals",
        "150 g surti papdi or broad beans",
        "½ cup peas",
        "½ cup grated coconut",
        "½ cup coriander",
        "1 tbsp ginger-garlic paste",
        "2 green chillies",
        "2 tbsp oil",
        "½ tsp ajwain",
        "¾ tsp salt",
        "6 cooked methi muthias, optional"
      ]
    },
    "steps": {
      "en": [
        "Chop banana, trim beans and cross-slit brinjals and potatoes. Mix coconut, coriander, paste, chillies and salt and pack some into the slits.",
        "Sizzle ajwain in oil. Layer beans and peas underneath the potatoes, banana and brinjal. Sprinkle on remaining masala and pour in ½ cup water.",
        "Cover over low heat for 30–40 min until potatoes are tender. Add muthias for the final 8 min. Shake the pot gently to mix."
      ]
    }
  },
  "Gujarati Kadhi": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup plain curd",
        "2 tbsp besan",
        "2 cups water",
        "1 tbsp jaggery",
        "½ tsp salt",
        "1 tsp grated ginger",
        "1 green chilli",
        "1 tbsp ghee",
        "½ tsp each cumin and mustard seed",
        "8 curry leaves"
      ]
    },
    "steps": {
      "en": [
        "Whisk curd, besan, water and salt smooth. Add ginger and slit chilli.",
        "Bring slowly to a simmer while stirring. Stir in jaggery and simmer 12–15 min to cook the besan.",
        "Sizzle cumin, mustard and curry leaves in ghee and pour over. The finished kadhi should pour easily."
      ]
    }
  },
  "Methi Thepla": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "¼ cup besan",
        "¾ cup chopped methi",
        "¼ cup curd",
        "½ tsp each ajwain and salt",
        "¼ tsp turmeric",
        "1 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Mix flours, methi, curd and spices. Add water gradually and knead soft. Rest 15 min.",
        "Roll 6 thin rounds, dusting lightly with atta.",
        "Toast on a medium-hot tawa, flipping and brushing with oil, until brown spots form on both sides."
      ]
    }
  },
  "Dudhi Muthia": {
    "serves": 3,
    "amounts": {
      "en": [
        "350 g bottle gourd",
        "¾ cup atta",
        "½ cup besan",
        "½ tsp each ajwain and salt",
        "¼ tsp turmeric",
        "1 tbsp oil",
        "1 tsp sesame",
        "½ tsp mustard seeds"
      ]
    },
    "steps": {
      "en": [
        "Discard bitter gourd. Peel, grate and squeeze lightly. Mix with flours, ajwain, turmeric and salt. Shape into three short logs, adding flour if very wet.",
        "Steam for 18–22 min, until a skewer comes out clean. Cool and slice into 1 cm rounds.",
        "Sizzle mustard and sesame in oil. Toss in slices and fry until lightly crisp on both faces."
      ]
    }
  },
  "Sev Usal": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup dried matki",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "1 tbsp oil",
        "½ tsp cumin",
        "1 tsp goda or usal masala",
        "½ tsp salt",
        "½ cup sev"
      ]
    },
    "steps": {
      "en": [
        "Soak matki 8 hours and drain. Pressure-cook in 2 cups fresh water 12–15 min on high and release naturally.",
        "Sizzle cumin in oil and brown chopped onion. Add paste, tomatoes and masala and reduce to a thick paste.",
        "Add cooked matki, salt and enough cooking liquid for a loose gravy. Simmer 6–8 min and top with sev just before serving."
      ]
    }
  },
  "Stuffed Ringna Bharelo": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g baby brinjals",
        "2 tbsp roasted besan",
        "¼ cup roasted ground peanuts",
        "2 tbsp coconut",
        "1 tsp coriander powder",
        "½ tsp each cumin and salt",
        "2 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Cut a cross into each brinjal without cutting through. Mix besan, peanut, coconut, coriander, salt and 1 tsp oil. Pack into slits.",
        "Sizzle cumin in remaining oil and brown brinjals lightly. Add ¼ cup water and cover.",
        "Cook on low 15–20 min, turning carefully once, until completely tender. Reduce any liquid uncovered."
      ]
    }
  },
  "Misal Pav": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup dried matki",
        "4 pav",
        "1 onion plus more to serve",
        "2 tomatoes",
        "2 tbsp dry coconut",
        "1 tsp ginger-garlic paste",
        "1 tbsp misal masala",
        "1½ tbsp oil",
        "½ cup farsan",
        "½ lemon",
        "salt"
      ]
    },
    "steps": {
      "en": [
        "Soak matki 8 hours and pressure-cook in 2 cups fresh water 12–15 min on high, releasing naturally.",
        "Fry sliced onion and coconut in oil until golden, stir in paste and tomatoes and cook soft. Cool slightly and blend. Return to pot with masala, salt and matki with its cooking liquid.",
        "Simmer 8–10 min to a thin spicy gravy. Top with farsan and chopped onion, squeeze over lemon and serve with warm pav."
      ]
    }
  },
  "Pav Bhaji": {
    "serves": 3,
    "amounts": {
      "en": [
        "350 g potatoes",
        "150 g cauliflower",
        "½ cup peas",
        "½ capsicum",
        "1 onion",
        "3 tomatoes",
        "2 tbsp butter",
        "1 tbsp pav bhaji masala",
        "¾ tsp salt",
        "6 pav",
        "½ lemon"
      ]
    },
    "steps": {
      "en": [
        "Boil chopped potatoes, cauliflower and peas until very soft. Drain and reserve some liquid.",
        "Cook finely chopped onion and capsicum in butter until soft. Add tomatoes and masala and cook to a paste.",
        "Mash drained vegetables into the pan. Add salt and cooking liquid to make a thick mash. Simmer 8–10 min. Serve with toasted buttered pav and lemon."
      ]
    }
  },
  "Vada Pav": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 pav",
        "300 g boiled potato",
        "¾ cup besan",
        "¼ tsp turmeric",
        "½ tsp mustard seeds",
        "2 garlic cloves",
        "1 green chilli",
        "8 curry leaves",
        "½ tsp salt",
        "1 tsp oil plus frying oil",
        "dry garlic chutney, optional"
      ]
    },
    "steps": {
      "en": [
        "Pop mustard in 1 tsp oil. Add chopped garlic, chilli and curry leaves, then mash in potato, turmeric and half the salt. Cool and form 4 patties.",
        "Whisk besan, remaining salt and about ½ cup water to a thick batter. Dip patties and fry at 170–175°C until crisp and golden.",
        "Split pav, sprinkle garlic chutney if using and tuck in a hot vada."
      ]
    }
  },
  "Thalipeeth": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup jowar flour",
        "¼ cup besan",
        "¼ cup atta",
        "1 small onion",
        "2 tbsp coriander",
        "½ tsp each cumin and salt",
        "1 green chilli, optional",
        "1 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Mix flours, finely chopped onion, coriander, cumin and chilli and add warm water to make a soft dough.",
        "Pat four portions onto parchment with wet fingers. Make a small hole in the centre of each and transfer to a hot tawa.",
        "Drizzle oil into the hole and around the edge. Cover on medium until the underside browns, then flip and cook until set and spotted."
      ]
    }
  },
  "Zunka Bhakar": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup besan",
        "1 onion",
        "1 green chilli",
        "2 garlic cloves",
        "½ tsp mustard seeds",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tbsp oil",
        "1 cup jowar flour"
      ]
    },
    "steps": {
      "en": [
        "Toast besan over low heat until fragrant. Pop mustard in oil and soften chopped onion, chilli and garlic. Add turmeric, besan and half the salt.",
        "Sprinkle in water 1 tbsp at a time, stirring over low heat for 4–6 min, until soft, cooked and crumbly.",
        "For bhakar, knead jowar and remaining salt with about ⅔ cup hot water, pat four discs and toast on a hot tawa until dry and spotted on both sides."
      ]
    }
  },
  "Varan Bhaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup toor dal",
        "¾ cup rice",
        "¼ tsp turmeric",
        "½ tsp salt, divided",
        "1 tbsp ghee",
        "½ lemon"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 30 min and drain. Pressure-cook with 1½ cups fresh water and turmeric 12–15 min on high, releasing naturally.",
        "Separately rinse rice and simmer covered with 1¼ cups water until absorbed, about 12–15 min. Rest 5 min.",
        "Whisk the dal until smooth and season. Serve over fluffed rice with ghee and lemon."
      ]
    }
  },
  "Bharli Vangi": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g small brinjals",
        "¼ cup roasted peanuts",
        "¼ cup coconut",
        "1 small onion",
        "1 tsp goda masala",
        "1 tsp tamarind pulp",
        "½ tsp mustard seeds",
        "½ tsp salt",
        "2 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Grind peanuts and coconut coarsely. Mix with chopped onion, masala, tamarind, salt and 1 tsp oil. Cross-slit the brinjals and fill.",
        "Pop mustard in remaining oil and lightly sear brinjals. Add leftover stuffing and ½ cup water.",
        "Cover and simmer 15–20 min, turning once, until tender. Spoon the thickened sauce over the brinjals."
      ]
    }
  },
  "Shorshe Maach (Mustard Fish)": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g fish steaks",
        "2 tbsp yellow mustard seeds",
        "1 green chilli",
        "2 tbsp edible mustard oil",
        "½ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Soak mustard 20 min, drain and blend with chilli, half the salt and a splash of water. Coat fish with turmeric and remaining salt.",
        "Warm oil and sear fish briefly on both sides. Stir mustard paste and ½ cup water into the pan.",
        "Cover and simmer gently 6–10 min until fish reaches 63°C in the thickest part. Spoon sauce over without breaking the steaks."
      ]
    }
  },
  "Macher Jhol": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g fish steaks",
        "200 g potato",
        "1 tomato",
        "1 tsp grated ginger",
        "2 tbsp edible mustard oil",
        "½ tsp cumin",
        "½ tsp turmeric",
        "½ tsp salt",
        "1 green chilli"
      ]
    },
    "steps": {
      "en": [
        "Rub fish with some turmeric and salt and sear on both sides in half the oil. Remove.",
        "Sizzle cumin in remaining oil and brown potato wedges. Add ginger, tomato, chilli, remaining turmeric, salt and 1 cup water. Simmer until potato is almost tender.",
        "Add fish and simmer gently until the thickest part reaches 63°C and the broth is lightly flavoured."
      ]
    }
  },
  "Aloo Posto": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g potatoes",
        "3 tbsp white poppy seeds",
        "1 green chilli",
        "1½ tbsp edible mustard oil",
        "½ tsp nigella seeds",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Soak poppy seeds in hot water 25 min, drain and grind with chilli and a little fresh water.",
        "Sizzle nigella seeds in oil. Sauté diced potatoes 4 min. Add paste, salt and ½ cup water.",
        "Cover and simmer 12–16 min until tender. Uncover and reduce until the poppy paste coats the potato cubes."
      ]
    }
  },
  "Cholar Dal": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup chana dal",
        "2½ cups water",
        "2 tbsp diced coconut",
        "1 tsp ginger",
        "1 tsp jaggery",
        "1 tbsp ghee",
        "½ tsp cumin",
        "1 bay leaf",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 1 hour. Drain and pressure-cook in fresh water with turmeric 12–15 min on high, releasing naturally. Grains should be soft and mostly intact.",
        "Fry coconut in ghee until gold and set aside. Sizzle cumin and bay leaf and add ginger briefly.",
        "Stir the seasoning into dal with salt and jaggery. Simmer to a thick consistency and top with coconut."
      ]
    }
  },
  "Begun Bhaja": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 medium globe brinjal",
        "2 tbsp edible mustard oil",
        "½ tsp turmeric",
        "½ tsp salt",
        "1 tbsp rice flour, optional"
      ]
    },
    "steps": {
      "en": [
        "Cut brinjal into 1 cm rounds. Rub with turmeric and salt and rest 5 min. Blot dry and dust with rice flour if desired.",
        "Heat oil over medium and fry in one layer for 3–5 min per side.",
        "Remove when deep golden and soft all the way to the centre. Drain and serve hot."
      ]
    }
  },
  "Kosha Mangsho": {
    "serves": 3,
    "amounts": {
      "en": [
        "500 g bone-in goat or lamb",
        "2 onions",
        "½ cup plain curd",
        "1 tbsp ginger-garlic paste",
        "2 tbsp edible mustard oil",
        "1 tsp each cumin and coriander powder",
        "½ tsp garam masala",
        "¾ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Marinate meat with curd, paste and ground spices in the fridge for 1–4 hours.",
        "Brown thinly sliced onions in oil. Add the meat and marinade and stir over medium heat until thick and clinging, 15–20 min.",
        "Add ½–¾ cup hot water, cover and simmer 60–90 min or until fork-tender. Uncover towards the end for a dark, thick gravy and finish with garam masala."
      ]
    }
  },
  "Chingri Malai Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g raw peeled prawns",
        "1 small onion",
        "200 ml coconut milk",
        "1 tsp grated ginger",
        "1 green chilli",
        "1 tbsp edible mustard oil",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Pat prawns dry, toss with turmeric and a little salt and sear briefly on each side. Set aside.",
        "Cook finely grated onion in remaining oil until golden. Add ginger and slit chilli, then add coconut milk and remaining salt. Simmer gently 5 min.",
        "Return prawns and simmer until pearly and opaque throughout, about 2–4 min depending on size."
      ]
    }
  },
  "Bengali Khichuri": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup short-grain rice",
        "½ cup yellow moong dal",
        "1 potato",
        "150 g cauliflower",
        "½ cup peas",
        "1 tsp ginger",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "¾ tsp salt",
        "4 cups water"
      ]
    },
    "steps": {
      "en": [
        "Dry-roast moong until fragrant, then rinse with rice and drain. Sizzle cumin and ginger in ghee.",
        "Add diced potato, cauliflower, rice, dal, turmeric, salt and water. Bring to a simmer and cover about 20 min.",
        "Add peas and cook until dal breaks down and rice and vegetables are soft. Add hot water if needed for a spoonable texture."
      ]
    }
  },
  "Aloor Dom": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g baby potatoes",
        "2 tomatoes",
        "1 tsp ginger",
        "1½ tbsp edible mustard oil",
        "½ tsp cumin",
        "½ tsp each coriander powder and garam masala",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Boil potatoes until barely tender. Drain, peel and pan-fry in half the oil until spotted.",
        "Sizzle cumin in remaining oil, stir in ginger, coriander and chopped tomatoes. Cook until pulpy.",
        "Add potatoes, turmeric, salt and ½ cup water. Cover 10 min until tender and lightly sauced. Add garam masala off heat."
      ]
    }
  },
  "Dhokar Dalna": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup chana dal",
        "1 potato",
        "2 tomatoes",
        "2 tsp grated ginger",
        "½ tsp each cumin and coriander powder",
        "¼ tsp turmeric",
        "½ tsp garam masala",
        "¾ tsp salt",
        "3 tbsp edible mustard oil"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 3 hours and drain. Grind with 1 tsp ginger and a little water. Stir-fry in 1 tbsp oil until a thick mass forms. Press into a plate, cool and cut into diamonds.",
        "Shallow-fry the diamonds in oil until golden. In remaining oil sizzle cumin, fry potato cubes and then cook tomatoes with remaining ginger and spices.",
        "Add 1 cup water and salt, cover and cook until potato is tender. Add dhoka and garam masala and simmer gently 2–3 min."
      ]
    }
  },
  "Punjabi Mutton Curry": {
    "serves": 3,
    "amounts": {
      "en": [
        "500 g goat or lamb pieces",
        "2 onions",
        "3 tomatoes",
        "¼ cup curd",
        "1 tbsp ginger-garlic paste",
        "2 tbsp oil",
        "1 tsp coriander powder",
        "½ tsp each turmeric and garam masala",
        "¾ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Brown sliced onions in oil. Add paste, then cook chopped tomatoes, coriander and turmeric down to a thick masala.",
        "Add meat and salt and brown well. Lower heat and stir whisked curd in gradually. Add ¾ cup hot water.",
        "Cover and simmer gently for 60–90 min or until fork-tender, adding water if needed. Finish with garam masala and reduce to your preferred thickness."
      ]
    }
  },
  "Dal Baati": {
    "serves": 3,
    "amounts": {
      "en": [
        "1½ cups atta",
        "¼ cup suji",
        "¼ cup melted ghee plus more to serve",
        "½ cup mixed toor, moong and chana dal",
        "1 onion",
        "1 tomato",
        "2 garlic cloves",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "salt"
      ]
    },
    "steps": {
      "en": [
        "Soak mixed dal 1 hour. Drain and pressure-cook with 2 cups fresh water and turmeric 15 min on high, releasing naturally.",
        "Rub most of the ghee and ½ tsp salt into flour and suji. Add water to form a firm dough. Make 6 balls and bake at 200°C for 28–35 min, turning once, until dry and golden.",
        "Sizzle cumin and garlic in remaining ghee. Fry chopped onion and tomato until soft, add to dal and season. Crack baati open and drizzle with ghee to serve with dal."
      ]
    }
  },
  "Laal Maas": {
    "serves": 3,
    "amounts": {
      "en": [
        "500 g bone-in goat or lamb",
        "8 dried Mathania or mild Kashmiri red chillies",
        "2 onions",
        "½ cup curd",
        "5 garlic cloves",
        "2 tbsp ghee",
        "½ tsp cumin",
        "¾ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Soak dried chillies in hot water 20 min, drain and grind with garlic. Sizzle cumin in ghee and brown sliced onion.",
        "Add meat and sear, then stir in chilli paste and salt. Lower heat and add whisked curd gradually, stirring until the gravy is thick.",
        "Add ¾ cup hot water and simmer covered until meat is fork-tender, roughly 60–90 min. Uncover to reduce until red and glossy."
      ]
    }
  },
  "Bisi Bele Bath": {
    "serves": 3,
    "amounts": {
      "en": [
        "½ cup rice",
        "½ cup toor dal",
        "1 carrot",
        "80 g beans",
        "½ cup peas",
        "1 tbsp tamarind pulp",
        "1½ tbsp bisi bele bath powder",
        "1 tbsp ghee",
        "½ tsp mustard seed",
        "8 curry leaves",
        "¾ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 30 min and drain. Pressure-cook with rinsed rice and 3 cups fresh water for 12 min on high, releasing naturally.",
        "Simmer diced vegetables until nearly tender. Add tamarind, spice powder and salt and simmer 3 min.",
        "Fold into soft rice and dal with enough hot water for a loose texture. Pop mustard and curry leaves in ghee and pour over."
      ]
    }
  },
  "Avial": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 raw banana",
        "1 carrot",
        "80 g beans",
        "1 drumstick pod, optional",
        "½ cup grated coconut",
        "½ cup plain curd",
        "½ tsp cumin",
        "1 green chilli",
        "8 curry leaves",
        "1 tbsp coconut oil",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Cut vegetables into batons and simmer with salt and ½ cup water, adding beans last so all stay intact.",
        "Grind coconut, cumin and chilli coarsely. Add to tender vegetables and simmer 3 min.",
        "Take off heat and fold in whisked curd. Finish with curry leaves and coconut oil."
      ]
    }
  },
  "Kerala Fish Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g firm fish pieces",
        "200 ml coconut milk",
        "1 small onion",
        "1 tbsp tamarind pulp",
        "1 tsp each ginger and garlic",
        "1 tbsp coconut oil",
        "8 curry leaves",
        "½ tsp chilli powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Soften sliced onion, ginger, garlic and curry leaves in coconut oil. Stir in spices, tamarind and ½ cup water and simmer 5 min.",
        "Stir in coconut milk, add fish and simmer gently. Swirl the pan instead of stirring.",
        "Once fish reaches 63°C in the thickest part, turn off the heat. Rest covered 5 min before serving."
      ]
    }
  },
  "Chicken Chettinad": {
    "serves": 3,
    "amounts": {
      "en": [
        "500 g chicken pieces",
        "1 onion",
        "2 tomatoes",
        "1 tbsp ginger-garlic paste",
        "¼ cup grated coconut",
        "1 tsp each coriander and fennel seed",
        "½ tsp each cumin and peppercorns",
        "2 dried chillies",
        "8 curry leaves",
        "2 tbsp oil",
        "¾ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Dry-toast the seeds, pepper and dried chillies until fragrant. Toast coconut separately until gold. Grind together with a little water.",
        "Fry curry leaves and sliced onion in oil until golden. Cook paste and tomatoes down, then stir in chicken and spice paste.",
        "Add salt and ½ cup water, cover and simmer until the thickest piece reaches 74°C. Uncover to thicken the sauce."
      ]
    }
  },
  "Chicken Biryani": {
    "serves": 4,
    "amounts": {
      "en": [
        "500 g chicken pieces",
        "1½ cups basmati",
        "2 onions",
        "½ cup curd",
        "1 tbsp ginger-garlic paste",
        "2 tsp biryani masala",
        "¼ cup each mint and coriander",
        "3 tbsp ghee",
        "salt"
      ]
    },
    "steps": {
      "en": [
        "Marinate chicken with curd, paste, masala and ¾ tsp salt in the fridge 30 min. Soak rice 20 min, then boil in plenty of salted water until about two-thirds done and drain.",
        "Brown sliced onions in ghee and reserve half. Stir chicken and marinade into the pan. Simmer until chicken reaches 74°C and gravy is thick.",
        "Layer rice over chicken, scatter herbs and reserved onion and cover tightly. Steam over very low heat 15–20 min, until rice is tender. Rest 5 min."
      ]
    }
  },
  "Aloo Gobi": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g potatoes",
        "300 g cauliflower",
        "1 onion",
        "1 tomato",
        "1 tsp grated ginger",
        "1½ tbsp oil",
        "½ tsp each cumin and coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Cut potato into 2 cm cubes and cauliflower into small florets. Sizzle cumin in oil, soften onion and cook tomato, ginger and spices until pulpy.",
        "Add potatoes, salt and ¼ cup water. Cover 7–9 min, then add cauliflower and toss.",
        "Cover another 7–9 min until both yield to a knife. Uncover and stir gently until the masala clings."
      ]
    }
  },
  "Palak Paneer": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g spinach",
        "200 g paneer",
        "1 small onion",
        "1 tomato",
        "2 garlic cloves",
        "1 tsp ginger",
        "1 tbsp ghee",
        "½ tsp cumin",
        "½ tsp salt"
      ],
      "hi": [
        "350 ग्राम पालक",
        "200 ग्राम पनीर",
        "1 छोटा प्याज़",
        "1 टमाटर",
        "लहसुन की 2 कलियाँ",
        "1 छोटा चम्मच अदरक",
        "1 बड़ा चम्मच घी",
        "½ छोटा चम्मच जीरा",
        "½ छोटा चम्मच नमक"
      ]
    },
    "steps": {
      "en": [
        "Blanch spinach 1 min, cool in cold water, drain and blend with a splash of fresh water.",
        "Sizzle cumin in ghee, brown chopped onion then add garlic, ginger and chopped tomato. Cook down to a paste.",
        "Add spinach purée and salt. Simmer 4–5 min, then add paneer cubes and warm gently for 2–3 min."
      ],
      "hi": [
        "पालक 1 मिनट उबालकर ठंडे पानी में डालें। निथारकर थोड़ा पानी डालकर पीसें।",
        "घी में जीरा चटकाएँ और कटा प्याज़ भूरा करें। लहसुन, अदरक और कटा टमाटर डालकर गाढ़ा पकाएँ।",
        "पालक का पेस्ट और नमक डालकर 4–5 मिनट पकाएँ। पनीर के टुकड़े डालकर धीमी आँच पर 2–3 मिनट गरम करें।"
      ]
    }
  },
  "Paneer Bhurji": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "1 onion",
        "1 tomato",
        "1 green chilli, optional",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin in ghee and soften finely chopped onion and chilli for 3 min.",
        "Add chopped tomato, turmeric and salt and cook until tomato is soft and excess water has evaporated.",
        "Crumble paneer into the pan. Toss for 2–3 min until hot and still moist."
      ]
    }
  },
  "Matar Paneer": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "¾ cup peas",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "1 tbsp oil",
        "½ tsp each cumin and coriander powder",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin in oil, brown chopped onion, then add paste, tomatoes and coriander. Cook until thick.",
        "Add peas, salt and ¾ cup water and simmer until peas are tender, about 6–10 min.",
        "Add paneer and simmer gently for 2–3 min. The gravy should just coat the cubes."
      ]
    }
  },
  "Kadhai Paneer": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "1 capsicum",
        "1 onion",
        "3 tomatoes",
        "1 tsp coriander seeds",
        "1 dried red chilli",
        "1 tsp ginger",
        "1½ tbsp oil",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Toast coriander seed and dried chilli, cool and crush coarsely. Sear onion petals and capsicum in half the oil and set aside.",
        "Fry ginger in remaining oil, add chopped tomatoes and the spice mix and cook down to a thick masala.",
        "Add salt, paneer and seared vegetables. Toss 2–3 min, keeping capsicum slightly crisp."
      ]
    }
  },
  "Chana Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup dried chickpeas",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "1 tbsp oil",
        "½ tsp cumin",
        "2 tsp chana masala",
        "½ tsp salt",
        "½ lemon"
      ]
    },
    "steps": {
      "en": [
        "Soak chickpeas overnight and drain. Pressure-cook with 2½ cups fresh water for 25–35 min at high pressure, releasing naturally, until easily crushed.",
        "Sizzle cumin in oil. Brown chopped onion, add paste, tomatoes and chana masala and cook until thick.",
        "Add chickpeas, salt and about ¾ cup cooking liquid. Simmer 10 min, mashing a spoonful to thicken. Finish with lemon."
      ]
    }
  },
  "Rajma Chawal": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup dried red kidney beans",
        "1 cup basmati",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "1½ tbsp oil",
        "½ tsp cumin",
        "1 tsp coriander powder",
        "¾ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Soak beans overnight and discard soaking water. Cover with fresh water, boil vigorously for at least 30 min, then simmer until fully tender. Keep water above the beans.",
        "Rinse rice and simmer separately, covered, in 1½ cups water until absorbed. Rest 10 min.",
        "Brown chopped onion with cumin in oil. Add paste, tomatoes and coriander and reduce. Add cooked beans, salt and enough cooking liquid for gravy. Simmer 10 min and serve over rice."
      ]
    }
  },
  "Dal Makhani": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup whole black urad",
        "2 tbsp dried kidney beans",
        "2 tomatoes",
        "1 small onion",
        "1 tbsp ginger-garlic paste",
        "2 tbsp butter",
        "½ tsp cumin",
        "½ tsp chilli powder",
        "¾ tsp salt",
        "2 tbsp cream, optional"
      ]
    },
    "steps": {
      "en": [
        "Soak both pulses 8 hours and discard soaking water. Add plenty of fresh water, boil vigorously for at least 30 min and simmer until completely tender.",
        "Sizzle cumin in butter and brown chopped onion. Fry paste, chilli and puréed tomatoes until thick.",
        "Add pulses with cooking liquid and salt. Mash lightly and simmer gently at least 30 min, stirring often. Finish with cream if using."
      ]
    }
  },
  "Lobia Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup dried black-eyed peas",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "1 tbsp oil",
        "½ tsp each cumin and garam masala",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Soak peas 4 hours and drain. Pressure-cook in 2½ cups fresh water on high 12–15 min, releasing naturally, until tender.",
        "Sizzle cumin in oil, brown chopped onion and cook paste and tomatoes until thick.",
        "Add peas, salt, garam masala and ½–¾ cup cooking liquid. Simmer 6–8 min until lightly thick."
      ]
    }
  },
  "Kadhi Pakora": {
    "serves": 3,
    "amounts": {
      "en": [
        "1½ cups plain curd",
        "¼ cup besan for kadhi plus ¾ cup for pakoras",
        "3 cups water",
        "1 sliced onion",
        "½ tsp each ajwain and mustard seeds",
        "¼ tsp turmeric",
        "¾ tsp salt",
        "1 tbsp oil plus frying oil"
      ]
    },
    "steps": {
      "en": [
        "Whisk curd, ¼ cup besan, water, turmeric and half the salt. Sizzle mustard in 1 tbsp oil, stir in curd mixture and bring slowly to a simmer, whisking. Simmer uncovered 18–25 min.",
        "Toss onion with remaining besan, ajwain and salt. Add water spoon by spoon until it clings. Fry small clusters in 170–175°C oil until crisp.",
        "Drain pakoras and add to simmering kadhi for 3 min. Serve once the gravy coats a spoon."
      ]
    }
  },
  "Sarson da Saag": {
    "serves": 3,
    "amounts": {
      "en": [
        "400 g mustard greens",
        "200 g spinach",
        "2 tbsp makki flour",
        "4 garlic cloves",
        "1 tsp ginger",
        "1 green chilli",
        "2 tbsp ghee or butter",
        "¾ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Wash greens well, remove tough stems and chop. Simmer covered with ½ cup water, ginger and chilli until very soft, about 20–25 min.",
        "Mash or pulse coarsely. Whisk makki flour with ¼ cup cold water and stir in with salt. Simmer and stir 8–10 min.",
        "Fry sliced garlic in ghee until golden, then stir into the thick saag. Serve with makki roti."
      ]
    }
  },
  "Makki di Roti": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup fine makki flour",
        "¼ tsp salt",
        "about ⅔ cup hot water",
        "2 tsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Mix flour and salt, stir in hot water gradually and knead while comfortably warm until pliable.",
        "Pat four discs between sheets of parchment. Peel off one sheet and transfer each disc to a hot tawa.",
        "Cook until the edges dry, flip and cook until both sides are spotted and the centre is firm. Brush with ghee."
      ]
    }
  },
  "Baingan Bharta": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 large globe brinjal, about 450 g",
        "1 onion",
        "2 tomatoes",
        "3 garlic cloves",
        "1 green chilli",
        "1½ tbsp oil",
        "½ tsp cumin",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Prick brinjal and broil or roast over a flame, turning, until charred and collapsed. Cool, peel and mash the soft flesh.",
        "Sizzle cumin in oil, brown finely chopped onion and garlic, then cook tomato and chilli until the excess moisture is gone.",
        "Stir in brinjal and salt and cook 5–8 min, stirring, until thick and smoky."
      ]
    }
  },
  "Butter Chicken": {
    "serves": 3,
    "amounts": {
      "en": [
        "450 g boneless chicken",
        "⅓ cup curd",
        "1 tbsp ginger-garlic paste",
        "1 tsp garam masala",
        "3 tomatoes",
        "10 cashews",
        "2 tbsp butter",
        "¼ cup cream",
        "½ tsp each Kashmiri chilli powder, kasuri methi and salt"
      ],
      "hi": [
        "450 ग्राम बिना हड्डी का चिकन",
        "⅓ कप दही",
        "1 बड़ा चम्मच अदरक-लहसुन का पेस्ट",
        "1 छोटा चम्मच गरम मसाला",
        "3 टमाटर",
        "10 काजू",
        "2 बड़े चम्मच मक्खन",
        "¼ कप क्रीम",
        "½ छोटा चम्मच प्रत्येक कश्मीरी मिर्च, कसूरी मेथी और नमक"
      ]
    },
    "steps": {
      "en": [
        "Coat cubed chicken in curd, half the paste, garam masala and half the salt. Refrigerate at least 30 min.",
        "Simmer chopped tomatoes and cashews with ½ cup water until soft. Cool slightly and blend. Sear chicken in 1 tbsp butter in a single layer.",
        "Fry remaining paste and chilli briefly in remaining butter. Add purée, chicken and remaining salt. Simmer until chicken reaches 74°C. Stir in cream and crushed kasuri methi off heat."
      ],
      "hi": [
        "चिकन में दही, आधा पेस्ट, गरम मसाला और आधा नमक मिलाकर कम से कम 30 मिनट फ्रिज में रखें।",
        "टमाटर और काजू ½ कप पानी में नरम होने तक पकाकर थोड़ा ठंडा करें और पीसें। 1 बड़े चम्मच मक्खन में चिकन को एक परत में हल्का भूरा करें।",
        "बचे मक्खन में बाकी पेस्ट और मिर्च कुछ सेकंड भूनें। टमाटर का पेस्ट, चिकन और बचा नमक डालें। चिकन के सबसे मोटे हिस्से का तापमान 74°C होने तक पकाएँ। आँच बंद कर क्रीम और मसलकर कसूरी मेथी मिलाएँ।"
      ]
    }
  },
  "Mirchi ke Tipore": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g mild broad green chillies",
        "2 tbsp besan",
        "1½ tbsp oil",
        "½ tsp each mustard seed, fennel and amchur",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Dry chillies and cut into bite-size pieces. Remove some seeds for less heat.",
        "Sizzle mustard and fennel in oil, then stir-fry chilli with turmeric and salt 4–6 min until slightly tender.",
        "Add besan and stir over low heat until nutty and clinging, about 3–4 min. Finish with amchur."
      ]
    }
  },
  "Mirchi Vada": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 broad mild green chillies",
        "250 g boiled potatoes",
        "¾ cup besan",
        "½ tsp each cumin, amchur, ajwain and salt",
        "1 tbsp coriander",
        "about ½ cup water",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Dry chillies and slit lengthwise, removing seeds. Mash potato with cumin, amchur, coriander and half the salt. Fill each slit and press closed.",
        "Whisk besan, ajwain, remaining salt and water to a clinging batter.",
        "Coat chillies and fry at 170–175°C in batches until crisp and golden, about 5–7 min. Drain and cool briefly before serving."
      ]
    }
  },
  "Gatte ki Sabzi": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup besan",
        "1 cup plain curd",
        "2 tbsp oil",
        "½ tsp each ajwain, cumin, coriander powder and chilli powder",
        "¼ tsp turmeric",
        "¾ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Mix besan with ajwain, half the salt, 1 tbsp oil, 2 tbsp curd and just enough water to make firm dough. Roll into 4 ropes and simmer in water 12–15 min until cooked through. Slice and reserve 1 cup cooking water.",
        "Whisk remaining curd with coriander, chilli, turmeric and the reserved water. Sizzle cumin in the remaining oil and pour in curd mixture while stirring continuously.",
        "Once simmering, add sliced gatte and remaining salt. Cook 8–10 min until the gravy lightly thickens."
      ]
    }
  },
  "Rajasthani Kadhi": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup sour plain curd",
        "2 tbsp besan",
        "2½ cups water",
        "1 dried red chilli",
        "1 green chilli, optional",
        "½ tsp each cumin and mustard seeds",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Whisk curd, besan, water, turmeric and salt smooth. Add slit green chilli if using.",
        "Bring to a gentle boil while stirring. Simmer uncovered 15–20 min until lightly thick and the raw flour smell is gone.",
        "Sizzle cumin, mustard and dried chilli in ghee and stir into kadhi just before serving."
      ]
    }
  },
  "Ker Sangri": {
    "serves": 3,
    "amounts": {
      "en": [
        "½ cup dried sangri",
        "¼ cup dried ker berries",
        "¼ cup plain curd",
        "2 tbsp edible mustard oil",
        "½ tsp each cumin, coriander powder and amchur",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 dried red chilli"
      ]
    },
    "steps": {
      "en": [
        "Rinse ker and sangri separately. Soak overnight, drain and rinse again. Simmer in fresh water until tender and drain well.",
        "Sizzle cumin and dried chilli in oil. Stir in ker, sangri, turmeric, coriander and salt.",
        "Reduce heat and stir in whisked curd. Cook uncovered until nearly dry, then stir in amchur."
      ]
    }
  },
  "Idli with Coconut Chutney": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups fermented idli batter",
        "½ cup grated coconut",
        "1 green chilli",
        "2 tbsp roasted chana dal",
        "¼ tsp salt",
        "1 tsp oil",
        "½ tsp mustard seeds",
        "6 curry leaves"
      ]
    },
    "steps": {
      "en": [
        "Bring steamer water to a boil. Fill lightly greased idli moulds with batter to three-quarters full. Steam 10–13 min until a skewer comes out clean.",
        "Rest 3 min before unmoulding. Blend coconut, chilli, roasted dal and salt with enough water for a spoonable chutney.",
        "Pop mustard in oil, briefly fry curry leaves and pour over the chutney. Serve with warm idlis."
      ]
    }
  },
  "Masala Dosa": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups fermented dosa batter",
        "300 g boiled potatoes",
        "1 onion",
        "8 curry leaves",
        "½ tsp mustard seeds",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tbsp oil plus more for the tawa"
      ]
    },
    "steps": {
      "en": [
        "Pop mustard and curry leaves in oil, soften sliced onion and fold in crumbled potato, turmeric and salt. Cook 3 min until the filling holds together.",
        "Spread a ladle of batter thinly on a lightly greased hot tawa. Drizzle oil and cook until the edges lift and underside turns gold.",
        "Pile some potato filling in the centre, fold and serve. Let the tawa cool slightly before spreading the next dosa if batter sets too quickly."
      ]
    }
  },
  "Sambar": {
    "serves": 3,
    "amounts": {
      "en": [
        "½ cup toor dal",
        "1 tomato",
        "1 small onion",
        "1 carrot",
        "1 tbsp tamarind pulp",
        "1½ tbsp sambar powder",
        "½ tsp salt",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 30 min and pressure-cook in 1½ cups fresh water 12–15 min on high, releasing naturally. Mash smooth.",
        "Simmer chopped carrot and onion in 1 cup water until nearly tender. Add tomatoes, tamarind, spice powder and salt and simmer 5 min.",
        "Stir in dal and simmer 5 min, adding water for a pourable consistency. Pop mustard and curry leaves in oil and stir in."
      ]
    }
  },
  "Tomato Rasam": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 ripe tomatoes",
        "1 tbsp tamarind pulp",
        "2 cups water",
        "2 garlic cloves",
        "½ tsp each cumin and peppercorns",
        "½ tsp salt",
        "1 tsp ghee",
        "½ tsp mustard seeds",
        "6 curry leaves"
      ]
    },
    "steps": {
      "en": [
        "Crush cumin, pepper and garlic. Simmer chopped tomatoes with tamarind, water and salt 8–10 min until soft.",
        "Mash tomatoes roughly, stir in the crushed seasoning and heat until foamy at the edges.",
        "Pop mustard and curry leaves in ghee and pour over. Serve hot without prolonged boiling."
      ]
    }
  },
  "Lemon Rice": {
    "serves": 2,
    "amounts": {
      "en": [
        "2½ cups cooked rice",
        "2 tbsp lemon juice",
        "2 tbsp peanuts",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "¼ tsp turmeric",
        "8 curry leaves",
        "1 green chilli",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Spread cooked rice briefly so steam escapes. Toast peanuts in oil and remove.",
        "Pop mustard in the same oil. Add curry leaves, chilli and turmeric. Fold in rice and salt and toss gently until hot.",
        "Turn off heat. Fold in lemon juice and the peanuts and adjust salt or lemon to taste."
      ]
    }
  },
  "Tamarind Rice (Pulihora)": {
    "serves": 2,
    "amounts": {
      "en": [
        "2½ cups cooked rice",
        "2 tbsp tamarind pulp",
        "2 tbsp peanuts",
        "1½ tbsp oil",
        "½ tsp mustard seeds",
        "¼ tsp turmeric",
        "2 dried red chillies",
        "8 curry leaves",
        "½ tsp salt",
        "1 tsp jaggery, optional"
      ]
    },
    "steps": {
      "en": [
        "Spread cooked rice briefly to release steam. Roast peanuts in oil and remove.",
        "Pop mustard and fry chillies and curry leaves. Add tamarind, turmeric, salt, jaggery and ¼ cup water. Simmer to a thick paste.",
        "Fold the paste and peanuts into rice without mashing. Rest 5 min before serving."
      ]
    }
  },
  "Medu Vada": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup split skinned urad",
        "¼ cup finely chopped onion",
        "1 tsp ginger",
        "1 green chilli",
        "6 curry leaves",
        "½ tsp salt",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Soak urad 4 hours and drain. Grind until smooth and thick, adding cold water by the teaspoon only as needed. Beat 2–3 min until fluffy.",
        "Mix in finely chopped onion, ginger, chilli, curry leaves and salt. Shape small rings with damp hands.",
        "Fry at 170–175°C for 5–7 min, turning until golden and cooked through. Drain on a rack."
      ]
    }
  },
  "Curd Rice": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups freshly cooked rice",
        "1 cup chilled plain curd",
        "¼ cup milk",
        "½ tsp salt",
        "1 tsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "1 green chilli, optional"
      ]
    },
    "steps": {
      "en": [
        "Mash warm rice lightly with milk and let it cool briefly until barely warm. Whisk in curd and salt.",
        "Pop mustard in oil, add curry leaves and slit chilli and fry briefly.",
        "Pour tempering over the rice and stir. Add a little milk or curd if too stiff. Serve promptly or refrigerate."
      ]
    }
  },
  "Upma": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup suji",
        "1 small onion",
        "½ carrot",
        "1 green chilli",
        "8 curry leaves",
        "½ tsp mustard seeds",
        "1 tbsp ghee or oil",
        "½ tsp salt",
        "2¼ cups water"
      ]
    },
    "steps": {
      "en": [
        "Dry-roast suji 4–5 min until nutty, then set aside. Pop mustard in oil and fry curry leaves, chilli, chopped onion and carrot until softened.",
        "Add water and salt and bring to a boil. Slowly rain in suji while stirring constantly.",
        "Cover and cook on low for 3–4 min, until tender and the water is absorbed. Rest 2 min and fluff."
      ]
    }
  },
  "Aloo Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g boiled potato",
        "1½ tbsp oil",
        "½ small onion",
        "1 tbsp lemon juice",
        "½ tsp chaat masala",
        "¼ tsp roasted cumin powder",
        "1 tbsp coriander",
        "1 green chilli, optional"
      ]
    },
    "steps": {
      "en": [
        "Cut cooled potato into bite-size cubes and pat dry. Pan-fry over medium-high heat, turning, until crisp and golden.",
        "Dice onion and chilli and toss with the hot potatoes, chaat masala and cumin.",
        "Add lemon and chopped coriander at the last moment. Taste before adding extra salt."
      ]
    }
  },
  "Aloo Tikki": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potatoes",
        "2 tbsp breadcrumbs plus more to coat",
        "1 green chilli, optional",
        "1 tbsp coriander",
        "½ tsp cumin",
        "½ tsp salt",
        "2 tbsp oil"
      ]
    },
    "steps": {
      "en": [
        "Mash well-drained cooled potatoes. Mix in breadcrumbs, finely chopped chilli, coriander, cumin and salt.",
        "Shape 6 firm discs and lightly dust with crumbs. Chill 10 min if soft.",
        "Shallow-fry over medium heat for 3–5 min per face, until golden and crisp and the patties release cleanly."
      ]
    }
  },
  "Lobia Dal Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup dried black-eyed peas",
        "1 small onion",
        "1 tomato",
        "1 tbsp lemon juice",
        "½ tsp chaat masala",
        "¼ tsp salt",
        "1 tbsp coriander"
      ]
    },
    "steps": {
      "en": [
        "Soak peas 4 hours and drain. Pressure-cook in fresh water on high 12–15 min, releasing naturally, until soft but intact.",
        "Drain well and cool. Dice onion and deseeded tomato and chop coriander.",
        "Toss all with lemon, chaat masala and salt just before serving."
      ]
    }
  },
  "Chana Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup dried chickpeas",
        "1 small onion",
        "1 tomato",
        "1 tbsp lemon juice",
        "½ tsp chaat masala",
        "¼ tsp black salt",
        "1 tbsp coriander"
      ]
    },
    "steps": {
      "en": [
        "Soak chickpeas overnight, drain and pressure-cook in fresh water on high 25–35 min, releasing naturally. Check that they crush easily.",
        "Drain and cool. Dice onion and tomato and chop coriander.",
        "Toss with lemon, chaat masala and black salt. Serve chilled or at room temperature."
      ]
    }
  },
  "Sev Tamatar": {
    "serves": 2,
    "amounts": {
      "en": [
        "3 ripe tomatoes",
        "¾ cup thick sev",
        "1 small onion, optional",
        "1 green chilli",
        "1 tbsp oil",
        "½ tsp cumin",
        "½ tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin in oil, soften chopped onion if using and add chilli, tomatoes, spices and salt.",
        "Cook tomatoes down until thick, then add ½ cup water and simmer 3–5 min.",
        "Fold in half the sev immediately before serving and scatter remaining sev over the top for crunch."
      ]
    }
  },
  "Moong Dal Chilla": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup split yellow moong",
        "1 small onion",
        "1 green chilli, optional",
        "1 tbsp coriander",
        "½ tsp cumin",
        "½ tsp salt",
        "2 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 2 hours and drain. Blend with chilli, cumin and about ¼ cup fresh water to a thick but spreadable batter.",
        "Stir in salt, minced onion and coriander. Ladle onto a medium-hot greased tawa and spread thinly.",
        "Cook until the top is set and the base golden. Flip and toast the second face for about 1 min."
      ]
    }
  },
  "Onion Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 onions, thinly sliced",
        "¾ cup besan",
        "2 tbsp rice flour",
        "½ tsp each ajwain and salt",
        "1 green chilli, optional",
        "frying oil"
      ]
    },
    "steps": {
      "en": [
        "Toss onions with salt and rest 5 min. Add flours, ajwain and sliced chilli and squeeze lightly. Add water by the teaspoon only if needed.",
        "Drop small loose clumps into 170–175°C oil. Fry in batches, turning, until crisp and golden, about 4–5 min.",
        "Drain on a rack and serve immediately."
      ]
    }
  },
  "Dhaniya Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 packed cup coriander",
        "1 green chilli",
        "1 tbsp lemon juice",
        "1 cm ginger",
        "¼ tsp salt",
        "2–4 tbsp water"
      ]
    },
    "steps": {
      "en": [
        "Wash coriander and chop leaves and tender stems. Blend with chilli, lemon, ginger and salt.",
        "Add just enough water to move the blades and blend to a smooth, spoonable chutney.",
        "Taste for acidity and salt. Serve fresh or refrigerate covered."
      ]
    }
  },
  "Mint Chutney (Pudina)": {
    "serves": 4,
    "amounts": {
      "en": [
        "½ cup packed mint leaves",
        "½ cup coriander",
        "1 green chilli",
        "1 tbsp lemon juice",
        "¼ tsp roasted cumin",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Remove tough mint stems, then wash and drain herbs.",
        "Blend with chilli, lemon, cumin and salt, adding cold water one tablespoon at a time until spoonable.",
        "Taste and adjust lemon or salt. Cover and refrigerate until serving."
      ]
    }
  },
  "Lahsun Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "8 garlic cloves",
        "2 mild red or green chillies",
        "1 tbsp lemon juice",
        "¼ tsp cumin",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Peel garlic and remove chilli stems. Remove seeds if you prefer less heat.",
        "Pound garlic, chilli, cumin and salt into a coarse paste. Add lemon and water by the teaspoon to loosen.",
        "Serve in small spoonfuls with snacks. Cover and refrigerate leftovers."
      ]
    }
  },
  "Coconut Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup grated coconut",
        "2 tbsp roasted chana dal",
        "1 green chilli",
        "¼ tsp salt",
        "⅓ cup water",
        "1 tsp oil",
        "½ tsp mustard seeds",
        "6 curry leaves"
      ]
    },
    "steps": {
      "en": [
        "Blend coconut, roasted dal, chilli and salt, adding water gradually until smooth and thick enough to spoon.",
        "Heat oil, pop mustard seeds and briefly fry curry leaves.",
        "Pour tempering over the chutney and serve with idli or dosa."
      ]
    }
  },
  "Imli Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 tbsp unsweetened tamarind pulp",
        "⅓ cup jaggery",
        "¾ cup water",
        "½ tsp roasted cumin",
        "¼ tsp each chilli powder and black salt"
      ]
    },
    "steps": {
      "en": [
        "Simmer tamarind, jaggery and water 8–12 min, until dissolved and lightly syrupy. Strain if fibrous.",
        "Stir in cumin, chilli and black salt. Simmer a little longer if it runs off a spoon like water.",
        "Cool before using. Thin with a little water if it thickens too much."
      ]
    }
  },
  "Tomato Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "3 ripe tomatoes",
        "2 garlic cloves",
        "1 green chilli",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Heat half the oil and sauté chopped garlic and chilli. Add chopped tomatoes and salt, then cook down until thick.",
        "Cool slightly and blend or mash coarsely.",
        "Pop mustard in remaining oil and stir into the chutney. Serve with dosa or rice."
      ]
    }
  },
  "Pudina Raita": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup chilled plain curd",
        "¼ cup mint leaves",
        "½ tsp roasted cumin",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Wash and dry mint. Chop finely or grind with a spoonful of curd.",
        "Whisk remaining curd smooth and fold in mint, cumin and salt.",
        "Serve chilled. Thin with a tablespoon of cold water if needed."
      ]
    }
  },
  "Methi Aloo": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g potatoes",
        "1 packed cup chopped methi",
        "1 green chilli, optional",
        "1 tbsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Wash methi thoroughly and drain. Sizzle cumin and chilli in oil, then add diced potatoes and turmeric.",
        "Add salt and 2 tbsp water, cover 8–12 min until almost tender.",
        "Stir in methi and cook uncovered 4–6 min, until potatoes are fully tender and the greens no longer release liquid."
      ]
    }
  },
  "Veg Pulao": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup basmati",
        "½ cup peas",
        "½ carrot",
        "1 small onion",
        "1 tbsp ghee",
        "½ tsp cumin",
        "1 bay leaf",
        "½ tsp salt",
        "1½ cups water"
      ]
    },
    "steps": {
      "en": [
        "Rinse rice, soak 20 min and drain. Sizzle cumin and bay leaf in ghee and soften sliced onion.",
        "Add diced carrot, peas and rice, then water and salt. Bring to a simmer and cover tightly.",
        "Cook on low 12–15 min until water is absorbed. Rest covered 10 min and fluff gently."
      ]
    }
  },
  "Moong Dal Khichdi": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup rice",
        "½ cup split yellow moong",
        "3 cups water",
        "1 tbsp ghee",
        "½ tsp cumin",
        "1 tsp grated ginger",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Rinse rice and dal and soak 30 min. Drain. Sizzle cumin and ginger in ghee.",
        "Add drained rice and dal, fresh water, turmeric and salt. Pressure-cook 9 min on high and release naturally.",
        "Stir until creamy. If too thick, stir in hot water. Serve warm with curd or pickle."
      ]
    }
  },
  "Poha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups thick poha",
        "1 small onion",
        "2 tbsp peanuts",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "1 green chilli",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tbsp lemon juice"
      ],
      "hi": [
        "1½ कप मोटा पोहा",
        "1 छोटा प्याज़",
        "2 बड़े चम्मच मूँगफली",
        "1 बड़ा चम्मच तेल",
        "½ छोटा चम्मच राई",
        "8 करी पत्ते",
        "1 हरी मिर्च",
        "¼ छोटा चम्मच हल्दी",
        "½ छोटा चम्मच नमक",
        "1 बड़ा चम्मच नींबू का रस"
      ]
    },
    "steps": {
      "en": [
        "Rinse poha in a sieve and drain 5 min. It should soften enough to crush between two fingers.",
        "Fry peanuts in oil and remove. Pop mustard, add curry leaves and chilli and soften diced onion. Stir in turmeric.",
        "Fold in poha and salt. Cover on low 2 min to heat through. Finish with lemon and peanuts."
      ],
      "hi": [
        "पोहा छलनी में धोकर 5 मिनट निथारें। दाना उँगलियों के बीच आसानी से मसल जाना चाहिए।",
        "तेल में मूँगफली तलकर निकालें। उसी तेल में राई, करी पत्ते और मिर्च चटकाएँ। कटा प्याज़ नरम करें और हल्दी डालें।",
        "पोहा और नमक मिलाकर धीमी आँच पर 2 मिनट ढकें। नींबू और मूँगफली डालकर परोसें।"
      ]
    }
  },
  "Besan Chilla": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup besan",
        "about ¾ cup water",
        "¼ cup finely chopped onion",
        "¼ cup deseeded chopped tomato",
        "1 green chilli, optional",
        "½ tsp each ajwain and salt",
        "2 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Whisk flour and water smooth. Add vegetables, ajwain and salt and rest 5 min.",
        "Spread a ladle into a thin circle on a lightly oiled medium-hot tawa.",
        "When the top sets and the edges release, flip and cook the other side until golden in spots."
      ]
    }
  },
  "Bhindi Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g okra",
        "1 onion",
        "1 tomato",
        "1½ tbsp oil",
        "½ tsp each cumin and coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Dry okra completely and slice. Fry in half the oil, uncovered, until lightly browned and no longer stringy, about 7–9 min. Remove.",
        "Sizzle cumin in remaining oil, soften sliced onion, then cook chopped tomato and spices to a dry masala.",
        "Return okra, add salt and toss 2–3 min until coated and tender."
      ]
    }
  },
  "Cabbage Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g cabbage, sliced",
        "½ carrot, optional",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 green chilli, optional"
      ]
    },
    "steps": {
      "en": [
        "Pop mustard seeds in oil and add slit chilli. Stir in cabbage, grated carrot, turmeric and salt.",
        "Cover on medium-low 4–5 min until cabbage begins to soften.",
        "Uncover and stir-fry until extra liquid evaporates and cabbage is tender-crisp."
      ]
    }
  },
  "Egg Bhurji": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 eggs",
        "1 small onion",
        "1 small tomato",
        "1 green chilli",
        "1 tbsp oil",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Beat eggs briefly. Soften chopped onion and chilli in oil, then add tomato, turmeric and salt and cook until jammy.",
        "Lower heat, add eggs and gently fold them with a spatula.",
        "Cook until just set with no runny egg remaining, about 2–4 min, then serve hot."
      ]
    }
  },
  "Bread Omelette": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 eggs",
        "4 bread slices",
        "¼ cup finely chopped onion",
        "1 green chilli, optional",
        "¼ tsp salt",
        "2 tsp butter"
      ]
    },
    "steps": {
      "en": [
        "Beat eggs with onion, chilli and salt. Melt 1 tsp butter in a nonstick pan over medium-low heat.",
        "Add half the eggs and place two bread slices on top while wet. When eggs are set underneath, flip and toast the bread side.",
        "Fold the egg edges in, close the sandwich and toast till golden. Repeat with remaining eggs and bread."
      ]
    }
  },
  "Egg Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 eggs",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "1½ tbsp oil",
        "½ tsp each cumin and garam masala",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Boil eggs 10–12 min until hard-set, cool and peel. Prick each egg a few times.",
        "Sizzle cumin in oil, brown chopped onion, fry paste briefly and cook chopped tomatoes and turmeric until thick.",
        "Add salt, garam masala and ¾ cup water. Simmer 5 min, add eggs and cook 4–5 min, spooning gravy over them."
      ]
    }
  },
  "Chicken Curry": {
    "serves": 3,
    "amounts": {
      "en": [
        "500 g chicken pieces",
        "1 onion",
        "2 tomatoes",
        "1 tbsp ginger-garlic paste",
        "2 tbsp oil",
        "½ tsp cumin",
        "1 tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp garam masala",
        "¾ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin in oil. Brown finely chopped onion, add paste and cook chopped tomatoes with coriander and turmeric until thick.",
        "Add chicken and salt and stir-fry 4–5 min to coat. Add ¾ cup water, cover and simmer gently.",
        "Cook until the thickest piece reaches 74°C away from bone. Simmer uncovered to thicken and add garam masala."
      ]
    }
  },
  "Kaju Barfi": {
    "serves": 6,
    "amounts": {
      "en": [
        "200 g unsalted cashews",
        "100 g sugar",
        "60 ml water",
        "1 tsp ghee for the paper, optional"
      ],
      "hi": [
        "200 ग्राम बिना नमक के काजू",
        "100 ग्राम चीनी",
        "60 मिली पानी",
        "कागज़ पर लगाने के लिए 1 छोटा चम्मच घी (वैकल्पिक)"
      ]
    },
    "steps": {
      "en": [
        "Pulse room-temperature cashews in short bursts to a fine powder. Stop before the nuts release oil. Sift and regrind any large pieces.",
        "Dissolve sugar in water and bring just to a light simmer. Add cashew powder and stir over low heat for 5–8 min, until a cooled pinch forms a smooth ball.",
        "Transfer to parchment. When cool enough to handle, knead briefly, roll between two sheets to about 5 mm thick and cut into diamonds when set."
      ],
      "hi": [
        "काजू को रुक-रुककर बारीक पीसें। तेल निकलने से पहले रुकें। बड़े टुकड़े छानकर दोबारा पीसें।",
        "चीनी और पानी को हल्का उबालें। काजू का पाउडर डालकर धीमी आँच पर 5–8 मिनट चलाएँ। थोड़ा मिश्रण ठंडा करके देखें, उसकी चिकनी गोली बन जानी चाहिए।",
        "मिश्रण बेकिंग पेपर पर निकालें। छूने लायक ठंडा होने पर हल्का गूँथें और दो कागज़ों के बीच 5 मिमी मोटा बेलें। जमने पर हीरे के आकार में काटें।"
      ]
    }
  },
  "Chole Bhature": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup dry chickpeas",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "2 tsp chole masala",
        "1 tbsp oil",
        "¾ tsp salt, divided",
        "1½ cups maida",
        "½ cup plain curd",
        "½ tsp baking powder",
        "⅛ tsp baking soda",
        "½ tsp sugar",
        "frying oil"
      ],
      "hi": [
        "¾ कप सूखे काबुली चने",
        "1 प्याज़",
        "2 टमाटर",
        "1 छोटा चम्मच अदरक-लहसुन का पेस्ट",
        "2 छोटे चम्मच छोले मसाला",
        "1 बड़ा चम्मच तेल",
        "कुल ¾ छोटा चम्मच नमक",
        "1½ कप मैदा",
        "½ कप सादा दही",
        "½ छोटा चम्मच बेकिंग पाउडर",
        "⅛ छोटा चम्मच बेकिंग सोडा",
        "½ छोटा चम्मच चीनी",
        "तलने का तेल"
      ]
    },
    "steps": {
      "en": [
        "Soak chickpeas overnight, drain and pressure-cook in 2½ cups fresh water for 25–35 min at high pressure. Release naturally. They should crush easily.",
        "Brown chopped onion in 1 tbsp oil. Stir in paste, tomatoes and chole masala and cook down. Add chickpeas, ½ tsp salt and enough cooking water to make a gravy. Simmer 10–15 min.",
        "Mix flour, leaveners, sugar, remaining salt, curd and enough water to make a soft dough. Cover and rest 1 hour.",
        "Roll dough into 6 ovals, about 3 mm thick. Fry one at a time at 175–185°C, pressing lightly to puff and turning once."
      ],
      "hi": [
        "चने रात भर भिगोकर पानी फेंकें। 2½ कप ताज़े पानी में तेज़ प्रेशर पर 25–35 मिनट पकाएँ। प्रेशर अपने आप उतरने दें। चना आसानी से मसल जाना चाहिए।",
        "1 बड़े चम्मच तेल में कटा प्याज़ भूरा करें। पेस्ट, टमाटर और छोले मसाला डालकर गाढ़ा होने तक पकाएँ। चने, ½ छोटा चम्मच नमक और पकाने का थोड़ा पानी डालकर 10–15 मिनट उबालें।",
        "मैदा, बेकिंग पाउडर, सोडा, चीनी, बचा नमक और दही मिलाएँ। ज़रूरत भर पानी से नरम आटा गूँथकर 1 घंटा ढकें।",
        "6 अंडाकार भटूरे 3 मिमी मोटे बेलें। 175–185°C के तेल में एक-एक करके तलें। हल्का दबाकर फुलाएँ और एक बार पलटें।"
      ]
    }
  },
  "Gajar Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "500 g carrots",
        "500 ml whole milk",
        "2 tbsp ghee",
        "3–4 tbsp sugar",
        "¼ tsp ground cardamom",
        "2 tbsp chopped nuts, optional"
      ],
      "hi": [
        "500 ग्राम गाजर",
        "500 मिली फुल-फैट दूध",
        "2 बड़े चम्मच घी",
        "3–4 बड़े चम्मच चीनी",
        "¼ छोटा चम्मच इलायची पाउडर",
        "2 बड़े चम्मच कटे मेवे (वैकल्पिक)"
      ]
    },
    "steps": {
      "en": [
        "Peel and grate the carrots. Simmer the grated carrots in milk in a heavy pan, stirring often, until the carrots soften and most milk evaporates, about 25–35 min.",
        "Stir in ghee and cook over medium-low heat for 8–10 min until glossy and fragrant. Do not let it catch on the bottom.",
        "Add sugar and cardamom and stir until the released liquid has cooked off. Finish with nuts if desired."
      ],
      "hi": [
        "गाजर छीलकर कद्दूकस करें। भारी तले की कड़ाही में दूध के साथ 25–35 मिनट पकाएँ। बीच-बीच में चलाएँ, जब तक गाजर नरम हो जाए और ज़्यादातर दूध सूख जाए।",
        "घी मिलाकर मध्यम से धीमी आँच पर 8–10 मिनट भूनें। मिश्रण चमकदार और खुशबूदार होने तक चलाते रहें।",
        "चीनी और इलायची मिलाएँ। चीनी से निकला पानी सूखने तक पकाएँ। चाहें तो मेवे डालें।"
      ]
    }
  },
  "Gulab Jamun": {
    "serves": 6,
    "amounts": {
      "en": [
        "200 g soft mawa",
        "2 tbsp maida",
        "¼ tsp baking powder",
        "1–2 tsp milk, only if needed",
        "200 g sugar",
        "250 ml water",
        "3 crushed cardamom pods",
        "frying oil"
      ],
      "hi": [
        "200 ग्राम नरम मावा",
        "2 बड़े चम्मच मैदा",
        "¼ छोटा चम्मच बेकिंग पाउडर",
        "ज़रूरत पर 1–2 छोटे चम्मच दूध",
        "200 ग्राम चीनी",
        "250 मिली पानी",
        "3 कुटी इलायची",
        "तलने का तेल"
      ]
    },
    "steps": {
      "en": [
        "Crumble mawa and mix gently with sifted maida and baking powder. Add milk only if crumbly. Divide into 12 smooth, crack-free balls.",
        "Simmer sugar, water and cardamom for 5 min. Keep syrup warm and pourable.",
        "Fry balls in small batches at 145–155°C, turning often until evenly deep golden. Drain briefly, then soak in warm syrup at least 1 hour."
      ],
      "hi": [
        "मावा मसलें। छना मैदा और बेकिंग पाउडर हल्के हाथ से मिलाएँ। मिश्रण बिखरे तो थोड़ा दूध डालें। 12 चिकने, बिना दरार के गोले बनाएँ।",
        "चीनी, पानी और इलायची 5 मिनट उबालें। चाशनी हल्की और गरम रखें।",
        "गोलों को 145–155°C के तेल में थोड़े-थोड़े करके तलें। पलटते रहें, ताकि सब तरफ़ गहरा सुनहरा रंग आए। निकालकर गरम चाशनी में कम से कम 1 घंटा भिगोएँ।"
      ]
    }
  },
  "Mini Gulab Jamun": {
    "serves": 6,
    "amounts": {
      "en": [
        "200 g soft mawa",
        "2 tbsp maida",
        "¼ tsp baking powder",
        "1–2 tsp milk, only if needed",
        "200 g sugar",
        "250 ml water",
        "3 cardamom pods",
        "frying oil"
      ],
      "hi": [
        "200 ग्राम नरम मावा",
        "2 बड़े चम्मच मैदा",
        "¼ छोटा चम्मच बेकिंग पाउडर",
        "ज़रूरत पर 1–2 छोटे चम्मच दूध",
        "200 ग्राम चीनी",
        "250 मिली पानी",
        "3 इलायची",
        "तलने का तेल"
      ]
    },
    "steps": {
      "en": [
        "Mix crumbled mawa with sifted maida and baking powder. Add a little milk only if crumbly. Roll 24 small smooth balls.",
        "Simmer sugar, water and crushed cardamom for 5 min. Keep the syrup warm.",
        "Fry in small batches at 145–155°C, turning often for even browning. Drain briefly and soak in warm syrup for at least 45 min."
      ],
      "hi": [
        "मावा मसलकर छना मैदा और बेकिंग पाउडर मिलाएँ। मिश्रण बिखरे तो थोड़ा दूध डालें। 24 छोटे, बिना दरार के गोले बनाएँ।",
        "चीनी, पानी और कुटी इलायची 5 मिनट उबालें। चाशनी गरम रखें।",
        "145–155°C पर छोटे बैच में तलें और बराबर भूरा होने तक पलटते रहें। निकालकर गरम चाशनी में कम से कम 45 मिनट रखें।"
      ]
    }
  },
  "Rasgulla": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 litre whole milk",
        "2 tbsp lemon juice diluted with 2 tbsp water",
        "1 cup sugar",
        "4 cups water for syrup"
      ],
      "hi": [
        "1 लीटर फुल-फैट दूध",
        "2 बड़े चम्मच नींबू का रस और 2 बड़े चम्मच पानी",
        "1 कप चीनी",
        "चाशनी के लिए 4 कप पानी"
      ]
    },
    "steps": {
      "en": [
        "Bring the milk to a boil and take off heat. Add diluted lemon gradually until curds separate and whey is greenish. Strain through muslin and rinse curds with clean cold water.",
        "Hang curds 25–35 min until damp but no longer dripping. Knead until smooth and roll into 10 small, crack-free balls.",
        "Boil sugar and water in a wide pot. Add balls, cover and maintain a lively boil for 14–18 min, until doubled. Cool fully in syrup and refrigerate."
      ],
      "hi": [
        "दूध उबालकर आँच बंद करें। पानी में मिला नींबू धीरे-धीरे डालें। दूध फट जाए और हल्का हरा पानी अलग हो जाए तो मलमल में छानकर छैना ठंडे पानी से धोएँ।",
        "25–35 मिनट टाँगें। छैना नम रहे और पानी टपकना बंद हो जाए। चिकना गूँथकर 10 छोटे, बिना दरार के गोले बनाएँ।",
        "चौड़े बर्तन में चीनी और पानी उबालें। गोले डालकर ढकें और तेज़ उबाल पर 14–18 मिनट पकाएँ, जब तक आकार दुगना हो जाए। चाशनी में ठंडा करके फ्रिज में रखें।"
      ]
    }
  },
  "Rasmalai": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 litre whole milk for chhena",
        "2 tbsp lemon juice diluted with 2 tbsp water",
        "1 cup sugar and 4 cups water for syrup",
        "600 ml whole milk for rabri",
        "3 tbsp sugar for rabri",
        "¼ tsp cardamom",
        "pinch saffron",
        "2 tbsp pistachios"
      ],
      "hi": [
        "छैने के लिए 1 लीटर फुल-फैट दूध",
        "2 बड़े चम्मच नींबू का रस और 2 बड़े चम्मच पानी",
        "चाशनी के लिए 1 कप चीनी और 4 कप पानी",
        "रबड़ी के लिए 600 मिली दूध और 3 बड़े चम्मच चीनी",
        "¼ छोटा चम्मच इलायची",
        "चुटकी भर केसर",
        "2 बड़े चम्मच पिस्ता"
      ]
    },
    "steps": {
      "en": [
        "Bring the litre of milk to a boil. Take off heat and add diluted lemon gradually until curds form. Strain, rinse and hang 25–35 min. Knead smooth and shape 10 small discs.",
        "Boil syrup sugar and water. Add discs and cook covered at a lively boil about 15 min until expanded. Cool in syrup.",
        "Separately simmer milk until reduced by about a third. Add sugar, saffron and cardamom. Cool, then gently press syrup from the discs and place them in the milk.",
        "Refrigerate at least 2 hours and top with pistachios."
      ],
      "hi": [
        "1 लीटर दूध उबालकर आँच बंद करें। पानी में मिला नींबू धीरे-धीरे डालकर फाड़ें। छैना छानें, धोएँ और 25–35 मिनट टाँगें। चिकना गूँथकर 10 छोटी टिकियाँ बनाएँ।",
        "चाशनी उबालें। टिकियाँ डालकर ढकें और तेज़ उबाल पर करीब 15 मिनट पकाएँ, जब तक फूल जाएँ। चाशनी में ठंडा करें।",
        "रबड़ी का दूध अलग से उबालें, जब तक लगभग एक तिहाई कम हो जाए। चीनी, केसर और इलायची मिलाकर ठंडा करें। टिकियाँ हल्के से दबाकर रबड़ी में डालें।",
        "कम से कम 2 घंटे फ्रिज में रखें। पिस्ता छिड़ककर परोसें।"
      ]
    }
  },
  "Shrikhand": {
    "serves": 4,
    "amounts": {
      "en": [
        "500 g plain full-fat curd",
        "50 g powdered sugar, plus to taste",
        "¼ tsp cardamom",
        "pinch saffron dissolved in 1 tsp warm milk",
        "2 tbsp pistachios"
      ],
      "hi": [
        "500 ग्राम गाढ़ा सादा दही",
        "50 ग्राम पिसी चीनी",
        "¼ छोटा चम्मच इलायची",
        "1 छोटे चम्मच गरम दूध में भीगा चुटकी भर केसर",
        "2 बड़े चम्मच पिस्ता"
      ]
    },
    "steps": {
      "en": [
        "Drain curd in muslin in a strainer over a bowl in the refrigerator for 4–6 hours, until thick and scoopable.",
        "Whisk with sugar, cardamom and saffron milk until smooth. Taste before adding additional sugar.",
        "Chill for 30 min and serve topped with chopped pistachios."
      ],
      "hi": [
        "दही मलमल में रखकर कटोरे के ऊपर छलनी में रखें। फ्रिज में 4–6 घंटे पानी निकलने दें, जब तक दही गाढ़ा हो जाए।",
        "दही में चीनी, इलायची और केसर वाला दूध डालकर चिकना फेंटें। चखकर ज़रूरत हो तो चीनी बढ़ाएँ।",
        "30 मिनट ठंडा करें और कटा पिस्ता डालकर परोसें।"
      ]
    }
  },
  "Malai Kulfi": {
    "serves": 4,
    "amounts": {
      "en": [
        "750 ml whole milk",
        "¼ cup sugar",
        "¼ tsp cardamom",
        "2 tbsp chopped almonds and pistachios, optional"
      ],
      "hi": [
        "750 मिली फुल-फैट दूध",
        "¼ कप चीनी",
        "¼ छोटा चम्मच इलायची",
        "2 बड़े चम्मच कटे बादाम और पिस्ता (वैकल्पिक)"
      ]
    },
    "steps": {
      "en": [
        "Simmer milk in a wide heavy pan 30–45 min until about half remains, stirring often and scraping in the milk solids.",
        "Stir in sugar and cardamom, cook 3 min and stir in nuts. Cool promptly.",
        "Pour into 4 moulds and freeze 6–8 hours. Dip moulds briefly in lukewarm water to unmould."
      ],
      "hi": [
        "चौड़ी, भारी तले की कड़ाही में दूध 30–45 मिनट उबालें, जब तक लगभग आधा रह जाए। चलाते रहें और किनारों की मलाई वापस मिलाएँ।",
        "चीनी और इलायची डालकर 3 मिनट पकाएँ। मेवे मिलाएँ और जल्दी ठंडा करें।",
        "4 साँचों में भरकर 6–8 घंटे फ़्रीज़र में रखें। निकालने के लिए साँचे कुछ सेकंड गुनगुने पानी में डुबोएँ।"
      ]
    }
  },
  "White Sauce Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g dry pasta",
        "1½ tbsp butter",
        "1½ tbsp maida",
        "1½ cups milk",
        "¼ tsp black pepper",
        "¼ tsp dried oregano",
        "salt",
        "¼ cup grated cheese, optional"
      ],
      "hi": [
        "160 ग्राम सूखा पास्ता",
        "1½ बड़े चम्मच मक्खन",
        "1½ बड़े चम्मच मैदा",
        "1½ कप दूध",
        "¼ छोटा चम्मच काली मिर्च",
        "¼ छोटा चम्मच ओरेगैनो",
        "नमक",
        "¼ कप कद्दूकस चीज़ (वैकल्पिक)"
      ]
    },
    "steps": {
      "en": [
        "Boil pasta in salted water until al dente. Save ¼ cup cooking water, then drain.",
        "Melt butter on medium-low heat. Whisk in flour for 1 min without browning. Gradually whisk in milk and simmer 4–6 min, until the sauce coats a spoon.",
        "Season with salt, pepper and oregano. Stir in optional cheese and pasta. Loosen with a little cooking water and serve hot."
      ],
      "hi": [
        "पास्ता नमक वाले पानी में उबालें, जब तक अंदर हल्का कड़ा रहे। ¼ कप पकाने का पानी बचाकर छानें।",
        "मध्यम से धीमी आँच पर मक्खन पिघलाएँ। मैदा डालकर बिना भूरा किए 1 मिनट चलाएँ। दूध धीरे-धीरे फेंटते हुए डालें और 4–6 मिनट पकाएँ, जब तक सॉस चम्मच पर टिके।",
        "नमक, काली मिर्च और ओरेगैनो डालें। पास्ता और चाहें तो चीज़ मिलाएँ। ज़रूरत पर थोड़ा बचा पानी डालकर गरम परोसें।"
      ]
    }
  },
  "Pakhala Bhata": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups freshly cooked plain rice",
        "1½ cups cold drinking water",
        "¼ cup plain curd, optional",
        "½ tsp roasted cumin",
        "¼ tsp salt",
        "½ lemon, optional"
      ]
    },
    "steps": {
      "en": [
        "For a same-day version, spread rice in a shallow container and refrigerate within 1 hour of cooking.",
        "Once chilled, add cold drinking water, roasted cumin, salt and whisked curd if using. Cover and keep refrigerated until serving.",
        "Serve cold within 24 hours of cooking. Add lemon if desired and serve with a cooked vegetable side."
      ]
    }
  },
  "Sattu Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1¼ cups atta",
        "¾ cup sattu",
        "¼ cup finely diced onion",
        "1 green chilli",
        "1 tbsp lemon juice",
        "1 tbsp edible mustard oil",
        "½ tsp ajwain",
        "½ tsp salt",
        "1 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Knead atta with about ½ cup water and a pinch of salt until soft. Rest covered at least 15 min.",
        "Mix sattu with onion, chilli, lemon, mustard oil, ajwain and remaining salt. Sprinkle in water until a squeezed handful holds together.",
        "Enclose filling in 4 dough rounds, roll gently and cook on a medium-hot tawa. Turn and brush with ghee until both sides are spotted."
      ]
    }
  },
  "Tomato Rice": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup basmati",
        "2 ripe tomatoes",
        "1 small onion",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "1 tsp sambar powder",
        "½ tsp salt",
        "1¼ cups water"
      ]
    },
    "steps": {
      "en": [
        "Rinse rice, soak for 20 min and drain. Heat oil, pop mustard and add curry leaves.",
        "Soften sliced onion. Add chopped tomatoes, sambar powder and salt and cook to a thick paste.",
        "Add rice and water, bring to a simmer and cover on low for 12–15 min until absorbed. Rest covered 10 min before fluffing."
      ]
    }
  },
  "Air Fryer Chicken Tikka": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boneless chicken thighs",
        "¼ cup thick plain curd",
        "1 tsp ginger-garlic paste",
        "1 tbsp lemon juice",
        "2 tsp tikka masala",
        "1 tsp oil",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Cut chicken into even 3 cm chunks. Toss with all remaining ingredients and marinate covered in the refrigerator for at least 30 min.",
        "Preheat air fryer to 190°C. Arrange pieces in a single layer with gaps and cook 10–15 min, turning halfway.",
        "Check the thickest piece with a thermometer and continue cooking until it reaches 74°C. Rest 3 min before serving."
      ]
    }
  },
  "Air Fryer Chicken Wings": {
    "serves": 2,
    "amounts": {
      "en": [
        "500 g chicken wings, split at joints",
        "1 tbsp oil",
        "1 tsp minced garlic",
        "½ tsp each chilli powder and salt",
        "¼ tsp black pepper",
        "1 tbsp lemon juice"
      ]
    },
    "steps": {
      "en": [
        "Pat wings dry. Toss with oil, garlic, chilli, salt and pepper.",
        "Preheat air fryer to 200°C. Arrange wings in a single layer and cook for 18–24 min, turning halfway.",
        "Check for 74°C in the thickest part away from bone. Add a few minutes for extra crispness and finish with lemon."
      ]
    }
  },
  "Air Fryer Fish Fry": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g firm fish fillets",
        "1 tbsp besan",
        "1 tsp ginger-garlic paste",
        "2 tsp lemon juice",
        "1 tsp oil",
        "½ tsp each chilli powder and salt",
        "¼ tsp turmeric"
      ]
    },
    "steps": {
      "en": [
        "Pat the fish dry. Coat with paste, lemon and spices and refrigerate 10–15 min. Dust lightly with besan and brush with oil.",
        "Air-fry in a single layer at 190°C, flipping gently if needed. Start checking after 7 min.",
        "Remove when the thickest part reaches 63°C. Thicker fillets may take 12 min or more."
      ]
    }
  },
  "Air Fryer Prawn Fry": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g large raw peeled prawns",
        "1 tsp oil",
        "1 tsp minced garlic",
        "½ tsp Kashmiri chilli powder",
        "¼ tsp turmeric",
        "¼ tsp salt",
        "½ lemon"
      ]
    },
    "steps": {
      "en": [
        "Pat prawns dry and toss with oil, garlic, chilli, turmeric and salt.",
        "Preheat air fryer to 190°C. Cook in one layer for 5–8 min, shaking halfway.",
        "Remove as soon as the prawns are pearly and opaque throughout. Finish with lemon."
      ]
    }
  },
  "Overnight Oats": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup rolled oats",
        "1½ cups milk",
        "1 tsp honey, optional",
        "1 banana",
        "2 tbsp chopped nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Stir oats and milk in a covered container. Add honey if desired.",
        "Refrigerate at least 4 hours or overnight. In the morning stir and add a splash of milk if needed.",
        "Divide between two bowls and add sliced banana and nuts just before eating."
      ]
    }
  },
  "Singhare ka Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "½ cup water chestnut flour",
        "3 tbsp ghee",
        "⅓ cup sugar",
        "1¼ cups water",
        "¼ tsp cardamom if permitted"
      ]
    },
    "steps": {
      "en": [
        "Heat water and sugar until dissolved. Roast flour in ghee over low heat, stirring until evenly golden and nutty, 7–10 min.",
        "Pour syrup in slowly, standing back from the steam. Stir continuously so it stays smooth.",
        "Cook another 3–5 min until thick and pulling away from the pan. Finish with cardamom if using."
      ]
    }
  },
  "Sabudana Khichdi": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup medium sabudana",
        "¾ cup soaking water, or as packet directs",
        "1 medium boiled potato",
        "⅓ cup roasted peanuts",
        "1½ tbsp ghee",
        "½ tsp sendha namak",
        "1 green chilli and ½ lemon, optional"
      ],
      "hi": [
        "¾ कप मध्यम साबूदाना",
        "भिगोने के लिए ¾ कप पानी या पैकेट के अनुसार",
        "1 उबला आलू",
        "⅓ कप भुनी मूँगफली",
        "1½ बड़े चम्मच घी",
        "½ छोटा चम्मच सेंधा नमक",
        "1 हरी मिर्च और ½ नींबू (वैकल्पिक)"
      ]
    },
    "steps": {
      "en": [
        "Rinse pearls to remove surface starch. Soak 4–6 hours until they crush easily between two fingers, then drain thoroughly.",
        "Crush peanuts and mix with drained pearls and salt. Dice potato and fry it in ghee with slit chilli until the edges colour.",
        "Fold in sabudana. Cook on medium-low for 4–6 min, turning gently until most pearls are translucent. Finish with lemon if using."
      ],
      "hi": [
        "साबूदाना धोकर 4–6 घंटे भिगोएँ, जब तक दाना उँगलियों में आसानी से दब जाए। अच्छी तरह निथारें।",
        "मूँगफली दरदरी कूटकर साबूदाने और नमक में मिलाएँ। आलू काटकर घी और चाहें तो हरी मिर्च के साथ हल्का सुनहरा भूनें।",
        "साबूदाना डालकर मध्यम से धीमी आँच पर 4–6 मिनट हल्के हाथ से चलाएँ। ज़्यादातर दाने पारदर्शी हो जाएँ तो आँच बंद करें और चाहें तो नींबू डालें।"
      ]
    }
  },
  "Sabudana Vada": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup medium sabudana",
        "¾ cup soaking water, or as packet directs",
        "250 g boiled potatoes",
        "⅓ cup roasted peanuts",
        "½ tsp sendha namak",
        "1 green chilli, optional",
        "permitted frying oil"
      ],
      "hi": [
        "¾ कप मध्यम साबूदाना",
        "भिगोने के लिए ¾ कप पानी या पैकेट के अनुसार",
        "250 ग्राम उबले आलू",
        "⅓ कप भुनी मूँगफली",
        "½ छोटा चम्मच सेंधा नमक",
        "1 हरी मिर्च (वैकल्पिक)",
        "व्रत में मान्य तलने का तेल"
      ]
    },
    "steps": {
      "en": [
        "Rinse and soak pearls 4–6 hours until easily crushed. Drain well. Mash dry cooked potatoes and crush peanuts.",
        "Mix with drained pearls, salt and finely chopped chilli. Press into 8 firm flat patties with no cracks.",
        "Fry one test patty at 170–175°C. If it breaks, mash and compress the remaining mixture more firmly. Fry in batches until evenly golden and drain."
      ],
      "hi": [
        "साबूदाना धोकर 4–6 घंटे भिगोएँ। दाना आसानी से दब जाए तो अच्छी तरह निथारें। आलू मसलें और मूँगफली कूटें।",
        "साबूदाना, आलू, मूँगफली, नमक और चाहें तो कटी मिर्च मिलाएँ। 8 चपटी, कसी हुई टिकियाँ बनाएँ।",
        "170–175°C के तेल में पहले एक टिकिया तलें। टूटे तो बाकी मिश्रण थोड़ा और मसलकर कसें। बैच में सुनहरा तलकर निथारें।"
      ]
    }
  },
  "Sabudana Kheer": {
    "serves": 4,
    "amounts": {
      "en": [
        "⅓ cup sabudana",
        "650 ml whole milk",
        "¼ cup sugar",
        "¼ tsp cardamom, optional",
        "2 tbsp chopped nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Rinse pearls and soak according to the packet until they crush easily, then drain.",
        "Simmer milk in a heavy pan. Stir in pearls and simmer gently for 12–18 min, stirring to prevent sticking, until translucent and tender.",
        "Add sugar and optional cardamom and simmer 2–3 min. Serve warm or chilled with nuts if desired."
      ]
    }
  },
  "Makhana Kheer": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 cups makhana",
        "650 ml milk",
        "3 tbsp sugar",
        "1 tsp ghee",
        "¼ tsp cardamom, optional",
        "2 tbsp pistachios, optional"
      ]
    },
    "steps": {
      "en": [
        "Toast makhana in ghee over low heat until a cooled piece snaps. Cool, then crush half coarsely.",
        "Simmer whole and crushed makhana in milk, stirring frequently, until the whole pieces soften and the milk thickens, 12–18 min.",
        "Add sugar and optional cardamom and cook 2 min. Garnish with pistachios if using."
      ]
    }
  },
  "Aloo Jeera": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g potatoes",
        "1 tbsp ghee",
        "1 tsp cumin seeds",
        "½ tsp sendha namak",
        "1 green chilli and 1 tsp lemon juice, optional"
      ],
      "hi": [
        "350 ग्राम आलू",
        "1 बड़ा चम्मच घी",
        "1 छोटा चम्मच जीरा",
        "½ छोटा चम्मच सेंधा नमक",
        "1 हरी मिर्च और 1 छोटा चम्मच नींबू का रस (वैकल्पिक)"
      ]
    },
    "steps": {
      "en": [
        "Boil potatoes until just tender, drain, peel and cut into bite-size chunks.",
        "Heat ghee and sizzle cumin until fragrant. Add slit chilli if using, then add potato and salt.",
        "Cook over medium heat for 5–7 min, turning gently until the sides colour. Finish with lemon if desired."
      ],
      "hi": [
        "आलू हल्के नरम होने तक उबालें। पानी निथारकर छीलें और टुकड़े काटें।",
        "घी में जीरा चटकाएँ। चाहें तो चीरी हुई मिर्च डालें। आलू और सेंधा नमक मिलाएँ।",
        "मध्यम आँच पर धीरे पलटते हुए 5–7 मिनट सेंकें, जब तक किनारे सुनहरे हों। चाहें तो नींबू डालें।"
      ]
    }
  },
  "Kele ki Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 medium raw bananas",
        "1 tbsp permitted oil",
        "½ tsp sendha namak",
        "1 green chilli and ½ tsp cumin, optional"
      ]
    },
    "steps": {
      "en": [
        "Simmer whole raw bananas until just tender, 12–18 min depending on size. Drain, cool enough to handle, peel and cube.",
        "Warm oil and fry optional cumin and chilli until fragrant. Add banana and salt.",
        "Pan-fry over medium heat for 5–7 min until lightly golden on several sides."
      ]
    }
  },
  "Vrat Lauki Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "450 g bottle gourd",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "½ tsp cumin and a pinch of black pepper, optional"
      ]
    },
    "steps": {
      "en": [
        "Peel the bottle gourd, discard if bitter, remove hard seeds and cut into 2 cm cubes.",
        "Sizzle optional cumin in ghee and toss gourd for 2 min. Add salt and 2 tbsp water.",
        "Cover on medium-low for 12–16 min until fork-tender. Uncover to reduce excess moisture and serve with optional pepper."
      ]
    }
  },
  "Pizza Sauce": {
    "serves": 4,
    "amounts": {
      "en": [
        "400 g ripe tomatoes or crushed tomatoes",
        "2 garlic cloves",
        "1 tbsp olive oil",
        "½ tsp dried oregano",
        "½ tsp salt",
        "pinch chilli flakes, optional"
      ]
    },
    "steps": {
      "en": [
        "If using fresh tomatoes, chop and blend roughly. Sauté minced garlic in oil on low heat for 30 seconds.",
        "Add tomatoes, oregano, salt and optional chilli. Simmer uncovered, stirring until the sauce can be spread without pooling, about 15–25 min.",
        "Cool before spreading on pizza. Taste and adjust salt once cool."
      ]
    }
  },
  "Garlic Bread": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 thick slices baguette or country bread",
        "2 tbsp soft butter",
        "2 garlic cloves",
        "1 tbsp chopped parsley",
        "pinch of salt"
      ],
      "hi": [
        "बैगेट या सफ़ेद ब्रेड के 4 मोटे स्लाइस",
        "2 बड़े चम्मच नरम मक्खन",
        "लहसुन की 2 कलियाँ",
        "1 बड़ा चम्मच कटी पार्सले",
        "चुटकी भर नमक"
      ]
    },
    "steps": {
      "en": [
        "Grate garlic and mix into butter with parsley and salt. Spread thinly across the bread.",
        "Toast on a tawa, buttered side down over medium-low heat, until golden, about 2–3 min. Flip briefly to crisp the underside.",
        "Alternatively bake buttered side up at 200°C for 7–10 min. Serve hot."
      ],
      "hi": [
        "लहसुन कद्दूकस कर मक्खन, पार्सले और नमक में मिलाएँ। ब्रेड पर पतली परत लगाएँ।",
        "मध्यम से धीमी आँच पर मक्खन वाली सतह नीचे रखकर 2–3 मिनट सुनहरा सेंकें। पलटकर दूसरी तरफ़ भी कुरकुरी करें।",
        "या मक्खन वाली सतह ऊपर रखकर 200°C पर 7–10 मिनट बेक करें। गरम परोसें।"
      ]
    }
  },
  "Garlic Potato Wedges": {
    "serves": 2,
    "amounts": {
      "en": [
        "450 g potatoes",
        "1½ tbsp oil",
        "2 garlic cloves",
        "½ tsp each oregano and salt",
        "¼ tsp chilli flakes"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 220°C. Scrub potatoes, cut into even wedges and pat thoroughly dry.",
        "Toss with oil, salt, oregano and flakes. Roast in one layer for 25–35 min, turning once.",
        "Toss with finely grated garlic for the final 4 min. Remove when golden outside and tender in the centre."
      ]
    }
  },
  "Air Fryer Roasted Cauliflower": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g cauliflower",
        "1 tbsp oil",
        "½ tsp salt",
        "¼ tsp each black pepper and chilli powder"
      ]
    },
    "steps": {
      "en": [
        "Cut into 3 cm florets and pat dry. Toss with oil and spices.",
        "Air-fry at 200°C in one layer for 12–18 min, shaking halfway.",
        "Stop when the tops are browned and a knife enters the stems easily."
      ]
    }
  },
  "Air Fryer Roasted Peanuts": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup raw shelled peanuts",
        "½ tsp oil, optional",
        "¼ tsp salt",
        "¼ tsp chaat masala"
      ]
    },
    "steps": {
      "en": [
        "Spread peanuts in an even layer. Air-fry at 160°C for 8–12 min, shaking every 3–4 min.",
        "Check for a golden centre by splitting one after it cools slightly. Tip out immediately once toasted.",
        "Toss with seasoning and optional oil. Cool fully for the final crunch."
      ]
    }
  },
  "Air Fryer Sweet Potato Roast": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g sweet potatoes",
        "1 tbsp oil",
        "½ tsp salt",
        "¼ tsp chilli powder",
        "½ lemon, optional"
      ]
    },
    "steps": {
      "en": [
        "Cut sweet potatoes into 2 cm chunks, pat dry and toss with oil, salt and chilli.",
        "Air-fry at 190°C in one layer for 15–20 min, shaking halfway.",
        "Check that the centres are tender and edges browned. Add lemon if desired."
      ]
    }
  },
  "Air Fryer Bhindi Fry": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g okra",
        "1 tbsp oil",
        "2 tbsp besan",
        "½ tsp amchur",
        "½ tsp salt",
        "¼ tsp chilli powder"
      ]
    },
    "steps": {
      "en": [
        "Wash and dry okra thoroughly. Quarter it lengthwise and toss with oil, besan and spices.",
        "Arrange loosely in the basket. Air-fry at 180°C for 12–16 min, shaking once or twice.",
        "Cook until the tips are crisp and browned. Serve right away to keep them crunchy."
      ]
    }
  },
  "Air Fryer Mushroom Tikka": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g button mushrooms",
        "¼ cup thick curd",
        "2 tsp tikka masala",
        "1 tsp oil",
        "½ tsp salt",
        "1 small capsicum, optional"
      ]
    },
    "steps": {
      "en": [
        "Wipe mushrooms dry and halve large ones. Toss with curd, spices, oil and capsicum. Refrigerate 20 min.",
        "Shake off excess marinade and arrange in one layer. Air-fry at 190°C for 10–14 min, turning once.",
        "Remove when edges are well browned and mushrooms are tender."
      ]
    }
  },
  "Air Fryer Paneer Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g firm paneer",
        "3 tbsp besan",
        "1½ tbsp rice flour",
        "½ tsp ajwain",
        "½ tsp salt",
        "¼ tsp turmeric",
        "1 tbsp oil",
        "1–2 tbsp water"
      ]
    },
    "steps": {
      "en": [
        "Cut paneer into thick slabs and pat dry. Mix flours, spices, oil and just enough water to form a thick paste. Spread a thin layer on each slab.",
        "Preheat air fryer to 180°C and lightly grease the basket. Place pieces apart and mist with oil if dry.",
        "Air-fry for 10–14 min, turning after the coating sets. Remove when golden and crisp."
      ]
    }
  },
  "Air Fryer Raw Banana Chips": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 firm raw plantains",
        "2 tsp permitted oil",
        "¼ tsp sendha namak"
      ]
    },
    "steps": {
      "en": [
        "Peel plantains and slice into 1–2 mm rounds. Blot dry and toss with oil and salt.",
        "Lay in a single layer and air-fry at 170°C for 10–15 min. Shake every few minutes and remove pieces that brown faster.",
        "Cool on a rack to crisp fully before serving."
      ]
    }
  },
  "Air Fryer Roasted Makhana": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups makhana",
        "1 tsp ghee, optional",
        "¼ tsp sendha namak"
      ]
    },
    "steps": {
      "en": [
        "Toss makhana with ghee if using and spread in a shallow layer.",
        "Air-fry at 150°C for 5–7 min, shaking halfway. Set one aside briefly to cool and check that it snaps.",
        "Toss with salt and cool completely before storing."
      ]
    }
  },
  "Air Fryer Baingan Fry": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g brinjal",
        "1 tbsp oil",
        "2 tbsp rice flour or besan",
        "½ tsp salt",
        "¼ tsp each turmeric and chilli powder"
      ]
    },
    "steps": {
      "en": [
        "Cut brinjal into 1 cm rounds and pat dry. Toss with oil, then dust lightly with flour, spices and salt.",
        "Air-fry in one layer at 190°C for 12–16 min, turning halfway.",
        "Remove when both faces are golden and the centres are soft. Serve while crisp."
      ]
    }
  },
  "Air Fryer Idli Fry": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 cooked chilled idlis",
        "2 tsp oil",
        "½ tsp Kashmiri chilli powder",
        "¼ tsp salt",
        "½ tsp idli podi, optional"
      ]
    },
    "steps": {
      "en": [
        "Cut idlis into bite-size wedges. Toss gently with oil and salt.",
        "Air-fry at 190°C for 8–12 min, shaking once, until crisp at the edges and hot in the centre.",
        "Toss with chilli powder and optional podi while hot."
      ]
    }
  },
  "Ragi Dosa": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup ragi flour",
        "¼ cup rice flour",
        "¼ cup plain curd",
        "1¼–1½ cups water",
        "½ tsp cumin",
        "½ tsp salt",
        "2 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Whisk flours, curd, salt, cumin and water to a thin batter. Rest 15 min and stir before pouring each dosa.",
        "Heat a lightly oiled tawa and drizzle batter into a thin lacy circle. Add a few drops of oil at the edge.",
        "Cook until the underside is crisp and the edges lift, then flip briefly if the top is still wet."
      ]
    }
  },
  "Chickpea Cucumber Salad": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups cooked chickpeas",
        "1 cucumber",
        "1 tomato",
        "½ red onion",
        "1 tbsp lemon juice",
        "½ tsp chaat masala",
        "1 tbsp coriander",
        "salt to taste"
      ]
    },
    "steps": {
      "en": [
        "Rinse and drain chickpeas. Dice cucumber, deseeded tomato and onion into similar-size pieces.",
        "Toss with chickpeas, lemon and chaat masala.",
        "Taste for salt, then scatter chopped coriander and serve."
      ]
    }
  },
  "Boiled Peanut Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup raw shelled peanuts",
        "3 cups water",
        "½ tsp salt",
        "½ onion",
        "1 tomato",
        "1 tbsp lemon juice",
        "½ tsp chaat masala",
        "1 green chilli, optional"
      ]
    },
    "steps": {
      "en": [
        "Simmer peanuts in salted water until they are tender with a slight bite, about 30–45 min, or pressure-cook on high for 15–20 min and release naturally.",
        "Drain and cool. Dice onion, tomato and chilli.",
        "Toss with peanuts, lemon and chaat masala. Taste before adding salt."
      ]
    }
  },
  "Paneer Wrap": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 prepared rotis",
        "175 g paneer",
        "½ onion",
        "½ capsicum",
        "1 tsp oil",
        "¼ tsp each black pepper and salt",
        "2 tsp mint chutney"
      ]
    },
    "steps": {
      "en": [
        "Thinly slice onion and capsicum. Toss over high heat in oil for 2 min so they stay crisp.",
        "Add crumbled paneer, salt and pepper and stir once or twice to warm.",
        "Spread warm rotis with chutney, pile filling in the centre, fold in the ends and roll tightly."
      ]
    }
  },
  "Beetroot Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "100 g beetroot, finely grated",
        "½ tsp cumin",
        "½ tsp salt",
        "up to ¼ cup water",
        "1 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, beetroot, cumin and salt. Add water gradually and knead to a smooth soft dough. Rest covered 15 min.",
        "Divide into four and roll on a floured surface.",
        "Toast on a medium-hot tawa, flipping and brushing with ghee, until cooked through and spotted on both sides."
      ]
    }
  },
  "Carrot Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "100 g finely grated carrot",
        "1 tbsp coriander",
        "½ tsp each ajwain and salt",
        "about ⅓ cup water",
        "1 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, carrot, chopped coriander, ajwain and salt. Add water gradually and knead into a soft dough. Rest 15 min.",
        "Divide into four and roll evenly, adding flour only as needed.",
        "Cook on a medium-hot tawa with ghee until brown spots form on both faces."
      ]
    }
  },
  "Fruit Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 apple",
        "1 banana",
        "1 small orange",
        "1 tbsp lemon juice",
        "½ tsp chaat masala",
        "pinch of black salt"
      ]
    },
    "steps": {
      "en": [
        "Core the apple and cut it and the banana into bite-size pieces. Peel and separate the orange segments.",
        "Toss with lemon immediately after cutting.",
        "Sprinkle with chaat masala and black salt just before serving."
      ]
    }
  },
  "Sweet Corn Sandwich": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 bread slices",
        "¾ cup cooked corn",
        "½ cup grated cheese",
        "2 tbsp finely diced capsicum",
        "1 tbsp butter",
        "¼ tsp black pepper",
        "pinch of salt"
      ]
    },
    "steps": {
      "en": [
        "Drain and dry corn. Mash one-third to help the filling hold. Mix with remaining corn, cheese, capsicum, pepper and salt.",
        "Divide filling between two sandwiches. Lightly butter the outsides.",
        "Toast on a tawa over medium-low heat, pressing gently and turning once, until both sides are crisp and cheese has melted."
      ]
    }
  },
  "Egg Fried Rice": {
    "serves": 2,
    "amounts": {
      "en": [
        "2½ cups cooked promptly chilled rice",
        "2 eggs",
        "½ carrot",
        "60 g French beans",
        "2 spring onions",
        "1½ tbsp oil",
        "1 tbsp soy sauce",
        "¼ tsp white pepper"
      ]
    },
    "steps": {
      "en": [
        "Dice vegetables and break up the cold rice. Scramble beaten eggs in ½ tbsp oil until fully set and transfer to a plate.",
        "Heat remaining oil on high. Stir-fry diced carrot, beans and spring onion whites for 2–3 min. Add rice and toss until steaming throughout.",
        "Stir in soy, pepper and eggs. Toss briefly and sprinkle spring onion greens on top."
      ]
    }
  },
  "Ragi Roti": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup ragi flour",
        "about ¾ cup hot water",
        "½ tsp salt",
        "¼ cup finely diced onion and 1 tbsp coriander, optional",
        "2 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Mix flour and salt with optional onion and coriander. Add hot water gradually to make a soft, pliable dough.",
        "Pat four rounds with damp fingers on parchment. Peel each onto a hot tawa and drizzle lightly with oil.",
        "Cook over medium heat until the base firms and browns. Flip and cook the second side until fully set."
      ]
    }
  },
  "Kashmiri Pulao": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup basmati",
        "1½ cups water",
        "1 tbsp ghee",
        "1 cinnamon stick",
        "3 cardamom pods",
        "pinch of saffron in 2 tbsp warm milk",
        "½ tsp salt",
        "¼ cup cashews and raisins",
        "½ cup diced apple or pomegranate, optional"
      ]
    },
    "steps": {
      "en": [
        "Rinse and soak rice 20 min, then drain. Fry nuts and raisins in ghee until golden and plump and set aside.",
        "Sizzle cinnamon and cardamom in the same ghee. Add rice, water, saffron milk and salt. Cover on low 12–15 min until absorbed.",
        "Turn off heat and rest covered 10 min. Fluff and fold in nuts, raisins and optional fruit just before serving."
      ]
    }
  },
  "Chocolate Cake (Eggless)": {
    "serves": 6,
    "amounts": {
      "en": [
        "170 g maida",
        "30 g cocoa",
        "140 g sugar",
        "150 g plain curd",
        "80 ml neutral oil",
        "100 ml milk",
        "1 tsp baking powder",
        "½ tsp baking soda",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C. Grease and line an 18 cm round tin. Whisk curd, sugar, oil and milk until smooth.",
        "Sift flour, cocoa, leaveners and salt. Fold into wet ingredients until just combined and pour into the tin.",
        "Bake 32–40 min, until the centre springs back and a skewer shows no wet batter. Cool in tin 10 min, then rack-cool."
      ]
    }
  },
  "Banana Bread": {
    "serves": 6,
    "amounts": {
      "en": [
        "250 g ripe mashed banana",
        "175 g atta",
        "85 g sugar",
        "75 g melted butter",
        "60 g curd",
        "1 tsp baking powder",
        "½ tsp baking soda",
        "¼ tsp salt",
        "40 g chopped walnuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 170°C and line a 20 × 10 cm loaf tin. Whisk banana, sugar, butter and curd.",
        "Mix flour, leaveners, salt and walnuts. Fold into banana mixture until no dry streaks remain.",
        "Bake 45–55 min until a skewer comes out with only a few moist crumbs. Cool 10 min in tin, then cool on a rack before slicing."
      ]
    }
  },
  "Mawa Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "170 g maida",
        "125 g plain mawa",
        "90 g soft butter",
        "120 g sugar",
        "100 ml milk",
        "1½ tsp baking powder",
        "¼ tsp ground cardamom",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 170°C and line an 18 cm round tin. Beat butter and sugar until pale, then beat in crumbled mawa and cardamom.",
        "Whisk flour, baking powder and salt. Add dry ingredients alternately with milk to make a smooth thick batter.",
        "Bake 35–45 min, until the top is golden and a skewer comes out clean. Cool 10 min before unmoulding."
      ]
    }
  },
  "Carrot Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "180 g atta",
        "160 g finely grated carrot",
        "100 g grated jaggery",
        "90 ml neutral oil",
        "110 g plain curd",
        "1½ tsp baking powder",
        "½ tsp baking soda",
        "1 tsp cinnamon",
        "¼ tsp salt",
        "30 g walnuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and line an 18 cm round tin. Whisk jaggery, oil and curd until jaggery dissolves. Fold in carrot.",
        "Mix flour, leaveners, salt and cinnamon, then fold into wet ingredients with walnuts if using.",
        "Bake 35–45 min until the centre springs back and a skewer comes out clean. Cool fully before slicing."
      ]
    }
  },
  "Rava Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "180 g fine suji",
        "150 g curd",
        "100 ml milk",
        "110 g sugar",
        "70 g melted butter",
        "1½ tsp baking powder",
        "¼ tsp baking soda",
        "¼ tsp salt",
        "30 g nuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Mix suji, curd, sugar, milk and butter and let hydrate for 20 min. Heat oven to 175°C and line an 18 cm tin.",
        "Fold baking powder, soda and salt through batter with nuts if using. Pour and level.",
        "Bake 32–40 min, until golden and a skewer comes out clean. Rest 10 min in the tin before turning out."
      ]
    }
  },
  "Chocolate Mug Cake": {
    "serves": 1,
    "amounts": {
      "en": [
        "4 tbsp maida",
        "1 tbsp cocoa",
        "2 tbsp sugar",
        "¼ tsp baking powder",
        "pinch of salt",
        "3 tbsp milk",
        "1 tbsp melted butter"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, cocoa, sugar, baking powder and salt in a 300 ml microwave-safe mug. Mix in milk and butter, scraping the bottom.",
        "Microwave at 800 W for 60 seconds. Continue in 10-second bursts until the top is springy and there is no wet batter in the centre.",
        "Rest 2 min before eating. The mug will be hot."
      ]
    }
  },
  "Fudgy Brownies": {
    "serves": 8,
    "amounts": {
      "en": [
        "120 g dark chocolate",
        "85 g unsalted butter",
        "130 g sugar",
        "90 g plain curd",
        "80 g maida",
        "15 g cocoa",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and line a 16 cm square tin. Melt chocolate and butter together gently. Whisk in sugar and then curd.",
        "Sift in flour, cocoa and salt and fold only until combined. Spread in the tin.",
        "Bake 20–26 min until edges set and a skewer in the centre shows moist crumbs rather than liquid batter. Cool completely before cutting."
      ]
    }
  },
  "Oats Banana Cookies": {
    "serves": 4,
    "amounts": {
      "en": [
        "200 g ripe mashed banana",
        "100 g rolled oats",
        "30 g chopped nuts, optional",
        "¼ tsp cinnamon"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 180°C and line a tray. Mix banana, oats, cinnamon and nuts, if using. Rest 5 min.",
        "Scoop into 8 small mounds and flatten to about 8 mm.",
        "Bake 14–18 min until set and browned at the edges. Cool on the tray for 5 min before moving."
      ]
    }
  },
  "Choco Chip Cookies": {
    "serves": 6,
    "amounts": {
      "en": [
        "150 g maida",
        "90 g softened butter",
        "90 g light brown sugar",
        "1 tbsp milk",
        "½ tsp vanilla",
        "¼ tsp baking soda",
        "¼ tsp salt",
        "75 g chocolate chips"
      ]
    },
    "steps": {
      "en": [
        "Beat butter and sugar until creamy. Stir in milk and vanilla. Mix in flour, soda, salt and chocolate chips.",
        "Divide into 12 balls and chill 25 min. Heat oven to 175°C and line a tray.",
        "Space cookies apart and bake 11–14 min until edges set and lightly brown. Leave on the tray 5 min, then cool on a rack."
      ]
    }
  },
  "Nankhatai": {
    "serves": 6,
    "amounts": {
      "en": [
        "100 g maida",
        "35 g besan",
        "20 g fine suji",
        "90 g soft ghee",
        "70 g powdered sugar",
        "¼ tsp cardamom",
        "¼ tsp baking powder",
        "1 tbsp sliced pistachios"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 160°C and line a tray. Beat ghee and sugar until pale. Mix in flours, cardamom and baking powder to a soft dough.",
        "Shape 12 small balls and flatten slightly. Press pistachio onto each.",
        "Bake 17–22 min until pale golden at the bottom. Let cool on the tray until firm before moving."
      ]
    }
  },
  "Jeera Biscuits": {
    "serves": 6,
    "amounts": {
      "en": [
        "150 g maida",
        "75 g cold butter",
        "1½ tsp cumin seeds",
        "½ tsp salt",
        "1 tsp sugar",
        "2–3 tbsp cold water"
      ]
    },
    "steps": {
      "en": [
        "Toast cumin briefly and cool. Rub butter into flour with salt, sugar and cumin until sandy.",
        "Add water gradually until the dough holds. Roll 4–5 mm thick, cut and chill for 15 min.",
        "Bake at 175°C for 16–20 min, until the edges turn golden. Cool on a rack."
      ]
    }
  },
  "Milk Bread Loaf": {
    "serves": 8,
    "amounts": {
      "en": [
        "300 g bread flour or maida",
        "190 ml lukewarm milk",
        "1¼ tsp instant yeast",
        "2 tbsp sugar",
        "¾ tsp salt",
        "25 g soft butter"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, yeast, sugar, salt and milk. Knead in butter and continue 8–12 min until smooth and elastic.",
        "Cover until doubled, 60–90 min. Shape tightly into a loaf and put in a greased 20 × 10 cm tin. Let rise until puffy, 35–60 min.",
        "Bake at 180°C for 30–35 min until golden and the centre reaches about 93°C. Cool on a rack before slicing."
      ]
    }
  },
  "Soft Dinner Rolls": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g maida",
        "165 ml lukewarm milk",
        "1 tsp instant yeast",
        "1 tbsp sugar",
        "¾ tsp salt",
        "25 g soft butter",
        "1 tbsp milk for brushing"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, milk, yeast, sugar and salt. Knead in butter for 8–10 min until smooth. Cover until roughly doubled.",
        "Shape 8 tight balls and arrange in a greased tin. Cover and proof until noticeably puffy, 35–60 min.",
        "Brush with milk and bake at 185°C for 18–22 min, until tops are golden. Cool on a rack."
      ]
    }
  },
  "Veg Puffs": {
    "serves": 4,
    "amounts": {
      "en": [
        "320 g ready-rolled puff pastry, thawed but cold",
        "250 g boiled potato",
        "½ cup peas",
        "1 tsp oil",
        "½ tsp each cumin, garam masala and salt",
        "1 tbsp milk"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin in oil. Add peas, mashed potato, garam masala and salt. Cook until dry and chill completely.",
        "Heat oven to 200°C. Cut pastry into eight squares. Add a spoonful of filling to each, fold and seal the edges. Brush tops with milk.",
        "Bake 20–25 min, until risen and deep golden. Cool briefly before eating."
      ]
    }
  },
  "Paneer Puffs": {
    "serves": 4,
    "amounts": {
      "en": [
        "320 g ready-rolled puff pastry, thawed but cold",
        "200 g paneer",
        "1 onion",
        "1 tsp oil",
        "½ tsp each cumin, garam masala and salt",
        "1 tbsp milk"
      ]
    },
    "steps": {
      "en": [
        "Sizzle cumin and soften minced onion in oil. Add crumbled paneer, masala and salt and cook until dry. Cool completely.",
        "Heat oven to 200°C. Cut pastry into eight squares, add filling, fold and seal. Brush tops with milk.",
        "Bake 20–25 min until puffed, crisp and deep gold. Cool briefly before serving."
      ]
    }
  },
  "Cinnamon Rolls": {
    "serves": 6,
    "amounts": {
      "en": [
        "280 g maida",
        "170 ml lukewarm milk",
        "1¼ tsp instant yeast",
        "25 g sugar",
        "½ tsp salt",
        "35 g soft butter for dough",
        "35 g soft butter for filling",
        "55 g brown sugar",
        "2 tsp cinnamon"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, milk, yeast, sugar and salt. Knead in dough butter until smooth. Cover until doubled, about 60–90 min.",
        "Roll into a 25 × 30 cm rectangle. Spread filling butter and sprinkle cinnamon sugar. Roll up tightly, slice into 8 and place in a greased tin.",
        "Proof until puffy, 30–50 min. Bake at 180°C for 20–25 min, until lightly golden and the middle rolls are set."
      ]
    }
  },
  "Baked Doughnuts": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g maida",
        "155 ml lukewarm milk",
        "1 tsp instant yeast",
        "30 g sugar",
        "½ tsp salt",
        "30 g softened butter",
        "1 tbsp melted butter and 2 tbsp cinnamon sugar for coating"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, milk, yeast, sugar and salt. Knead in soft butter until smooth. Cover and rise until doubled.",
        "Roll dough 1–1½ cm thick and cut 8 rings. Place on a lined tray and proof until puffy, about 30–40 min.",
        "Bake at 190°C for 10–14 min until lightly golden. Brush with melted butter and dip in cinnamon sugar while warm."
      ]
    }
  },
  "Vanilla Cupcakes": {
    "serves": 6,
    "amounts": {
      "en": [
        "125 g maida",
        "90 g plain curd",
        "80 g sugar",
        "55 g melted butter",
        "50 ml milk",
        "1 tsp vanilla",
        "1 tsp baking powder",
        "¼ tsp baking soda",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and line 6 muffin wells. Whisk curd, sugar, butter, milk and vanilla.",
        "Sift flour, leaveners and salt. Fold into wet just until smooth, then fill liners about two-thirds full.",
        "Bake 17–22 min until the tops spring back. Cool 5 min in the tin, then transfer to a rack."
      ]
    }
  },
  "Apple Pie": {
    "serves": 6,
    "amounts": {
      "en": [
        "250 g maida",
        "150 g cold unsalted butter",
        "½ tsp salt",
        "60–80 ml ice water",
        "600 g peeled sliced apples",
        "75 g sugar",
        "1 tbsp lemon juice",
        "1 tsp cinnamon",
        "1½ tbsp cornflour"
      ]
    },
    "steps": {
      "en": [
        "Rub butter into flour and salt until uneven crumbs form. Stir in just enough ice water to bind, divide into two discs and chill 30 min.",
        "Roll one disc into a 20 cm pie tin. Toss apples with sugar, lemon, cinnamon and cornflour and pile into pastry. Add a top crust, seal and cut vents.",
        "Bake at 200°C for 15 min, then 180°C for 30–40 min, until golden and filling bubbles through vents. Cool at least 1 hour to set."
      ]
    }
  },
  "Bread Pudding": {
    "serves": 4,
    "amounts": {
      "en": [
        "180 g day-old bread",
        "350 ml milk",
        "20 g cornflour",
        "55 g sugar",
        "1 tsp vanilla",
        "1 tbsp butter",
        "2 tbsp raisins, optional"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and grease a small dish with butter. Cube bread and set in the dish with raisins if using.",
        "Whisk cornflour into cold milk with sugar and vanilla. Heat gently, stirring until it just thickens. Pour over bread and soak 10 min. Press exposed cubes down to moisten.",
        "Bake 30–40 min until puffed, and the centre is just set without liquid pooling. Rest 10 min before serving."
      ]
    }
  },
  "Cheese Straws": {
    "serves": 6,
    "amounts": {
      "en": [
        "150 g maida",
        "80 g cold butter",
        "90 g sharp vegetarian cheddar",
        "¼ tsp salt",
        "¼ tsp black pepper",
        "1–2 tbsp cold water"
      ]
    },
    "steps": {
      "en": [
        "Rub butter into flour, salt and pepper. Stir in finely grated cheese and add just enough water to bind.",
        "Roll 5 mm thick and cut narrow strips. Chill on a tray for 15 min while oven heats to 190°C.",
        "Bake 12–16 min until golden and firm. Cool on a rack to crisp fully."
      ]
    }
  },
  "Eggless Red Velvet Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "170 g maida",
        "12 g cocoa",
        "130 g sugar",
        "130 g curd",
        "75 ml neutral oil",
        "75 ml milk",
        "1 tsp vanilla",
        "1 tsp baking powder",
        "½ tsp baking soda",
        "¼ tsp salt",
        "red food colouring as directed",
        "150 g cream cheese and 40 g powdered sugar, optional"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and line an 18 cm tin. Whisk sugar, curd, oil, milk, vanilla and colouring.",
        "Sift flour, cocoa, leaveners and salt and fold into the liquid. Bake 30–38 min until a skewer comes out clean.",
        "Cool fully. For frosting, beat soft cream cheese with powdered sugar just until smooth and spread over the cake."
      ]
    }
  },
  "Lemon Drizzle Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "175 g maida",
        "120 g sugar",
        "130 g curd",
        "75 ml neutral oil",
        "50 ml milk",
        "zest of 1 lemon",
        "2 tbsp lemon juice, divided",
        "1½ tsp baking powder",
        "¼ tsp baking soda",
        "40 g powdered sugar for glaze"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and line a small loaf tin. Rub zest into sugar. Whisk in curd, oil, milk and 1 tbsp juice.",
        "Fold in sifted flour and leaveners. Bake 35–45 min until a centre skewer comes out clean.",
        "Mix powdered sugar and remaining juice. Prick the warm cake and spoon glaze over it. Cool before slicing."
      ]
    }
  },
  "Orange Tea Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "180 g maida",
        "105 g sugar",
        "100 g curd",
        "80 ml orange juice",
        "zest of 1 orange",
        "75 ml neutral oil",
        "1½ tsp baking powder",
        "¼ tsp baking soda",
        "¼ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C. Line a small loaf tin. Rub zest into sugar and whisk in juice, curd and oil.",
        "Sift flour, leaveners and salt into wet ingredients. Fold gently and pour into tin.",
        "Bake 35–45 min until risen and a skewer shows no wet batter. Cool 10 min in tin, then rack-cool."
      ]
    }
  },
  "Eggless Marble Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "180 g maida",
        "115 g sugar",
        "140 g curd",
        "70 ml neutral oil",
        "60 ml milk",
        "1 tsp vanilla",
        "1½ tsp baking powder",
        "¼ tsp baking soda",
        "15 g cocoa"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and line a small loaf tin. Whisk sugar, curd, oil, vanilla and most of the milk.",
        "Fold in sifted flour and leaveners. Put a third of the batter in another bowl and mix in cocoa and remaining milk.",
        "Alternate spoonfuls in the tin and swirl once or twice. Bake 35–45 min, until a centre skewer comes out clean. Cool before slicing."
      ]
    }
  },
  "Whole Wheat Jaggery Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "180 g atta",
        "110 g grated jaggery",
        "140 g curd",
        "75 ml neutral oil",
        "60 ml milk",
        "1½ tsp baking powder",
        "½ tsp baking soda",
        "¼ tsp cardamom",
        "30 g walnuts, optional"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and line an 18 cm tin. Warm milk just enough to dissolve the jaggery. Cool slightly and whisk with curd and oil.",
        "Mix atta, leaveners and cardamom. Fold into wet ingredients with walnuts if using.",
        "Bake 32–42 min until the centre springs back and a skewer comes out clean. Cool fully."
      ]
    }
  },
  "Eggless Blueberry Muffins": {
    "serves": 6,
    "amounts": {
      "en": [
        "165 g maida",
        "85 g sugar",
        "90 g curd",
        "75 ml milk",
        "60 ml neutral oil",
        "1½ tsp baking powder",
        "¼ tsp baking soda",
        "100 g blueberries",
        "zest of ½ lemon, optional"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 190°C and line six muffin wells. Mix flour, sugar and leaveners. Separately whisk curd, milk, oil and zest.",
        "Combine just until no flour streaks remain and gently fold in blueberries. Divide among liners.",
        "Bake 17–22 min until golden and a skewer inserted away from a berry comes out clean. Cool 5 min before removing."
      ]
    }
  },
  "Double Chocolate Muffins": {
    "serves": 6,
    "amounts": {
      "en": [
        "135 g maida",
        "25 g cocoa",
        "95 g sugar",
        "90 g curd",
        "90 ml milk",
        "60 ml neutral oil",
        "1½ tsp baking powder",
        "¼ tsp baking soda",
        "65 g chocolate chips"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 185°C and line six muffin wells. Sift flour, cocoa and leaveners. Whisk curd, milk, oil and sugar separately.",
        "Fold mixtures together, then fold in chips. Fill liners about three-quarters full.",
        "Bake 17–22 min until domed and a skewer shows no wet batter. Cool 5 min in the tray."
      ]
    }
  },
  "Eggless Strawberry Cupcakes": {
    "serves": 6,
    "amounts": {
      "en": [
        "135 g maida",
        "90 g sugar",
        "90 g curd",
        "50 ml milk",
        "55 ml neutral oil",
        "1 tsp vanilla",
        "1 tsp baking powder",
        "¼ tsp baking soda",
        "80 g strawberries"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 180°C and line six muffin wells. Pat strawberries dry and dice small.",
        "Whisk sugar, curd, milk, oil and vanilla. Fold in sifted flour and leaveners, then berries.",
        "Fill liners two-thirds full and bake 17–22 min, until the tops spring back. Cool completely before decorating."
      ]
    }
  },
  "Peanut Butter Cookies": {
    "serves": 6,
    "amounts": {
      "en": [
        "110 g atta",
        "90 g creamy peanut butter",
        "55 g softened butter",
        "70 g sugar",
        "½ tsp baking powder",
        "¼ tsp salt",
        "1 tbsp milk only if needed"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C and line a tray. Cream butters and sugar until smooth.",
        "Mix in flour, baking powder and salt. Add milk if the dough crumbles. Shape 12 balls and flatten slightly with a fork.",
        "Bake 11–14 min until the edges colour. Let firm on the tray for at least 5 min before moving."
      ]
    }
  },
  "Coconut Macaroons (Eggless)": {
    "serves": 6,
    "amounts": {
      "en": [
        "160 g unsweetened desiccated coconut",
        "180 g sweetened condensed milk",
        "1 tbsp maida",
        "½ tsp vanilla",
        "pinch of salt"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 165°C and line a tray. Stir coconut, condensed milk, flour, vanilla and salt to a sticky mixture.",
        "Pack 12 neat mounds onto the tray, spaced apart.",
        "Bake 14–19 min until the tips and bases turn gold. Cool completely before lifting."
      ]
    }
  },
  "Garlic Herb Breadsticks": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g maida",
        "160 ml lukewarm water",
        "1 tsp instant yeast",
        "¾ tsp salt",
        "2 tbsp olive oil, divided",
        "2 garlic cloves",
        "½ tsp dried mixed herbs"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, water, yeast, salt and 1 tbsp oil. Knead 8 min and cover until doubled, about 60–90 min.",
        "Divide into 10 ropes, set on a lined tray and proof 20–35 min. Heat oven to 200°C.",
        "Brush with remaining oil and bake 12–16 min until golden. Rub with cut garlic or brush with garlic-infused oil while warm and scatter herbs."
      ]
    }
  },
  "Spinach and Cheese Quiche (Eggless)": {
    "serves": 4,
    "amounts": {
      "en": [
        "160 g maida",
        "80 g cold butter",
        "½ tsp salt, divided",
        "3 tbsp cold water",
        "200 g spinach",
        "200 ml milk",
        "2 tbsp cornflour",
        "100 g grated vegetarian cheese",
        "¼ tsp black pepper"
      ]
    },
    "steps": {
      "en": [
        "Rub butter and half the salt into flour. Bind with cold water and chill 30 min. Roll into a 20 cm tin, prick and bake at 190°C with parchment and weights for 15 min. Remove weights and bake 5 min.",
        "Wilt spinach, squeeze dry and chop. Whisk cold milk and cornflour, then warm until thickened. Stir in spinach, cheese, pepper and remaining salt.",
        "Fill shell and bake at 180°C for 25–30 min until the centre is just set. Rest 15 min before slicing."
      ]
    }
  },
  "Chocolate Babka (Eggless)": {
    "serves": 8,
    "amounts": {
      "en": [
        "300 g maida",
        "165 ml lukewarm milk",
        "1¼ tsp instant yeast",
        "40 g sugar",
        "½ tsp salt",
        "55 g softened butter",
        "100 g dark chocolate",
        "30 g butter for filling"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, milk, yeast, sugar and salt. Knead in soft butter until elastic and cover until doubled. Melt chocolate and filling butter and cool to a spreadable paste.",
        "Roll dough into a rectangle, spread filling, roll up, split lengthwise and twist cut sides up. Place in a lined loaf tin and proof until puffy, about 40–60 min.",
        "Bake at 175°C for 32–42 min, until golden and the centre is about 93°C. Cool before slicing."
      ]
    }
  },
  "Eggless Pineapple Upside-Down Cake": {
    "serves": 6,
    "amounts": {
      "en": [
        "4 pineapple rings, drained",
        "35 g butter and 55 g brown sugar for topping",
        "175 g maida",
        "100 g sugar",
        "130 g curd",
        "65 ml neutral oil",
        "60 ml milk",
        "1½ tsp baking powder",
        "¼ tsp baking soda"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C. Swirl melted butter and brown sugar over an 18 cm tin base and lay pineapple rings on top.",
        "Whisk sugar, curd, oil and milk. Fold in sifted flour and leaveners. Spread over pineapple without moving rings.",
        "Bake 35–42 min until a skewer comes out clean. Rest 10 min, loosen the edge and carefully invert while warm."
      ]
    }
  },
  "Baked Cheesecake (Eggless)": {
    "serves": 8,
    "amounts": {
      "en": [
        "130 g digestive biscuits",
        "55 g melted butter",
        "400 g full-fat cream cheese",
        "200 g sweetened condensed milk",
        "100 g thick plain curd",
        "20 g cornflour",
        "1 tsp vanilla"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 160°C. Crush biscuits, mix with butter and press into an 18 cm springform tin. Bake 9 min and cool.",
        "Stir room-temperature cream cheese until smooth. Mix in condensed milk, curd, sifted cornflour and vanilla without whipping. Pour onto the base.",
        "Bake 35–45 min, until edges set but centre jiggles slightly. Cool gradually, then refrigerate at least 6 hours before slicing."
      ]
    }
  },
  "Tutti Frutti Bread": {
    "serves": 8,
    "amounts": {
      "en": [
        "300 g maida",
        "190 ml lukewarm milk",
        "1¼ tsp instant yeast",
        "40 g sugar",
        "½ tsp salt",
        "30 g softened butter",
        "75 g tutti frutti"
      ]
    },
    "steps": {
      "en": [
        "Mix flour, milk, yeast, sugar and salt. Knead in butter until elastic, then knead in tutti frutti. Cover and rise until doubled.",
        "Shape into a tight loaf and place in a greased 20 × 10 cm tin. Cover until puffy, about 35–60 min.",
        "Bake at 180°C for 30–38 min until golden and about 93°C inside. Cool fully before slicing."
      ]
    }
  },
  "Oats Idli": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup rolled oats",
        "½ cup suji",
        "¾ cup plain curd",
        "about ½ cup water",
        "¼ cup grated carrot",
        "½ tsp salt",
        "1 tsp plain fruit salt",
        "1 tsp oil"
      ]
    },
    "steps": {
      "en": [
        "Dry-roast oats 3–4 min, cool and grind. Mix with suji, curd, water, carrot and salt. Rest 15 min.",
        "Bring steamer water to a boil and grease idli moulds. Add water to the batter if needed so it drops thickly from a spoon. Fold in fruit salt just before filling moulds.",
        "Steam 10–14 min until a skewer comes out clean. Rest 3 min before lifting out."
      ]
    }
  },
  "Cheese Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1¼ cups atta",
        "about ½ cup water",
        "¼ tsp salt",
        "120 g grated low-moisture cheese",
        "¼ tsp black pepper",
        "pinch of chilli flakes, optional",
        "1 tbsp ghee"
      ]
    },
    "steps": {
      "en": [
        "Knead flour, salt and water to a soft dough and rest covered 20 min. Mix cheese with pepper and any chilli flakes.",
        "Divide dough and filling into four. Enclose the filling, pinch shut and roll gently on a floured surface.",
        "Toast on a medium-hot tawa with ghee until golden spots appear on both sides and the cheese melts."
      ]
    }
  },
  "Egg Carbonara-style Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g spaghetti",
        "2 pasteurised eggs",
        "40 g finely grated hard cheese",
        "½ tsp black pepper",
        "1 garlic clove",
        "1 tsp olive oil",
        "salt"
      ]
    },
    "steps": {
      "en": [
        "Boil spaghetti in salted water until al dente and reserve ½ cup cooking water. Whisk eggs, cheese and pepper.",
        "Sauté sliced garlic in oil. Add pasta, then move the pan off the heat. Gradually whisk a little warm pasta water into the eggs, then toss the egg mixture through the pasta.",
        "Return to low heat and toss continuously until the sauce reaches 71°C and coats the pasta. Loosen with reserved water by the spoonful and serve."
      ]
    }
  },
  "Chicken Alfredo Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g pasta",
        "250 g boneless chicken",
        "1 tsp neutral oil",
        "1½ tbsp butter",
        "1½ tbsp maida",
        "1½ cups milk",
        "2 garlic cloves",
        "40 g grated hard cheese",
        "¼ tsp pepper",
        "salt"
      ]
    },
    "steps": {
      "en": [
        "Boil pasta until al dente and reserve ½ cup water. Season cubed chicken with salt and pepper and sear in oil until it reaches 74°C. Set aside.",
        "Melt butter and gently fry chopped garlic. Stir in maida for 1 min. Whisk in milk gradually and simmer until thick enough to coat a spoon.",
        "Stir in cheese, pasta and chicken on low. Loosen with reserved water and serve hot."
      ]
    }
  },
  "Chicken Tikka Pizza": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g prepared pizza dough",
        "220 g boneless chicken",
        "¼ cup plain curd",
        "2 tsp tikka masala",
        "¼ tsp salt",
        "1 tsp oil",
        "¼ cup pizza sauce",
        "100 g grated mozzarella",
        "½ small onion",
        "½ capsicum"
      ]
    },
    "steps": {
      "en": [
        "Toss bite-size chicken with curd, masala and salt. Refrigerate 30 min. Sear in oil until the thickest piece reaches 74°C.",
        "Heat oven and a heavy tray to 230°C. Stretch dough to a 26 cm round on parchment. Spread sauce, then add chicken, sliced vegetables and cheese.",
        "Slide onto hot tray and bake 10–14 min until the base is browned and cheese bubbles."
      ]
    }
  },
  "Prawn Garlic Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g spaghetti",
        "240 g raw peeled prawns",
        "4 garlic cloves",
        "2 tbsp olive oil",
        "¼ tsp chilli flakes",
        "1 tbsp lemon juice",
        "1 tbsp parsley",
        "salt"
      ]
    },
    "steps": {
      "en": [
        "Boil spaghetti until al dente. Reserve ½ cup cooking water and drain.",
        "Pat prawns dry. Soften sliced garlic in warm oil, then add chilli flakes and prawns. Turn once and cook until pearly and opaque throughout.",
        "Toss in spaghetti, a splash of reserved water and lemon. Finish with parsley and salt to taste."
      ]
    }
  },
  "Chicken Red Sauce Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g pasta",
        "250 g boneless chicken",
        "300 g tomato passata",
        "1 small onion",
        "2 garlic cloves",
        "1½ tbsp oil",
        "½ tsp oregano",
        "¼ tsp chilli flakes",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Boil pasta until al dente and reserve some cooking water. Cut chicken into 2 cm cubes and brown in half the oil.",
        "Soften finely chopped onion and garlic in remaining oil. Add passata, oregano, chilli and salt and simmer until thickening.",
        "Add chicken and simmer until it reaches 74°C. Stir in drained pasta and loosen with a splash of its cooking water."
      ]
    }
  },
  "Chicken Lasagna": {
    "serves": 4,
    "amounts": {
      "en": [
        "8 lasagna sheets",
        "400 g minced chicken",
        "400 g tomato passata",
        "1 onion",
        "2 garlic cloves",
        "1 tbsp oil",
        "2 tbsp butter",
        "2 tbsp maida",
        "400 ml milk",
        "150 g mozzarella",
        "¾ tsp salt, divided"
      ]
    },
    "steps": {
      "en": [
        "Brown chicken in oil with chopped onion, garlic and half the salt. Add passata, simmer until thick and check the chicken reaches 74°C.",
        "Melt butter, stir in flour 1 min and gradually whisk in milk. Simmer until it coats a spoon and add remaining salt. Prepare sheets as their packet directs.",
        "Layer tomato sauce, sheets, white sauce and cheese in a small baking dish. Cover and bake at 190°C for 25 min, then uncover for 10 min until bubbling and golden. Rest 10 min."
      ]
    }
  },
  "Chicken Parmesan Cutlet": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 thin chicken breast cutlets, about 300 g",
        "3 tbsp maida",
        "½ cup breadcrumbs",
        "½ tsp each salt and black pepper",
        "3 tbsp frying oil",
        "½ cup tomato sauce",
        "80 g mozzarella"
      ]
    },
    "steps": {
      "en": [
        "Pat cutlets dry and season. Whisk flour with about 4 tbsp water to make a clinging slurry. Dip chicken and coat evenly with crumbs.",
        "Shallow-fry over medium heat until both sides are golden and the thickest part reaches 74°C.",
        "Top with hot tomato sauce and mozzarella and cover briefly on low until cheese melts."
      ]
    }
  },
  "Lemon Garlic Fish": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 firm fish fillets, about 300 g total",
        "2 tbsp butter",
        "3 garlic cloves",
        "1 tbsp lemon juice",
        "½ tsp salt",
        "¼ tsp pepper"
      ]
    },
    "steps": {
      "en": [
        "Pat fish dry and season. Heat half the butter on medium and sear fillets, turning once when they release easily.",
        "Lower heat. Add remaining butter and minced garlic and baste until the fish reaches 63°C in its thickest part.",
        "Take off the heat, add lemon juice and spoon the butter over the fillets."
      ]
    }
  },
  "Chicken Piccata": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g chicken breast cutlets",
        "¼ cup maida",
        "½ tsp salt",
        "¼ tsp pepper",
        "1 tbsp oil",
        "2 tbsp butter",
        "½ cup chicken stock",
        "2 tbsp lemon juice",
        "1 tbsp drained capers, optional"
      ]
    },
    "steps": {
      "en": [
        "Pat cutlets dry, season and dredge lightly in maida. Pan-sear in oil and 1 tbsp butter over medium heat until browned on both sides.",
        "Add stock, lemon and capers and simmer gently until chicken reaches 74°C. Transfer chicken to plates.",
        "Reduce sauce briefly, take off the heat and whisk in remaining butter. Spoon over cutlets."
      ]
    }
  },
  "Bean and Pasta Soup": {
    "serves": 3,
    "amounts": {
      "en": [
        "1½ cups cooked kidney beans, or one 400 g tin drained",
        "100 g small dry pasta",
        "2 tomatoes",
        "1 carrot",
        "1 onion",
        "2 garlic cloves",
        "1 tbsp olive oil",
        "750 ml vegetable stock",
        "½ tsp oregano"
      ]
    },
    "steps": {
      "en": [
        "Soften diced onion, garlic and carrot in oil for 5 min. Add chopped tomatoes and oregano and cook until pulpy.",
        "Add stock and prepared cooked beans and simmer 10 min. Mash a few beans to thicken.",
        "Add pasta and simmer until tender per pack, stirring occasionally. Add hot water if too thick."
      ]
    }
  },
  "Pumpkin Dal (Pressure Cooker)": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup toor dal",
        "250 g pumpkin",
        "2 cups water",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tbsp ghee",
        "½ tsp cumin",
        "2 garlic cloves"
      ]
    },
    "steps": {
      "en": [
        "Rinse dal until water is mostly clear. Peel pumpkin and cut into 2 cm cubes.",
        "Pressure-cook dal and pumpkin with water and turmeric at high pressure for 12–15 min. Release naturally. Stir in salt and mash lightly.",
        "Sizzle cumin in ghee and fry sliced garlic until pale gold. Pour over dal and serve once thick but pourable."
      ]
    }
  },
  "Pumpkin Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g pumpkin",
        "1 small onion",
        "2 tomatoes",
        "1 tbsp oil",
        "½ tsp cumin",
        "½ tsp coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Peel and cube pumpkin. Sizzle cumin in oil and soften chopped onion, then cook chopped tomatoes and spices until pulpy.",
        "Add pumpkin, salt and just enough water for your pressure cooker’s minimum. Cook on high pressure for 3 min and release as directed by the cooker.",
        "Simmer uncovered if needed. Mash two or three pieces to thicken the sauce and leave the rest intact."
      ]
    }
  },
  "Whole Green Moong Dal": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup whole moong",
        "2½ cups water",
        "1 onion",
        "1 tomato",
        "2 garlic cloves",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    },
    "steps": {
      "en": [
        "Rinse moong and soak 2–4 hours. Drain and pressure-cook in fresh water with turmeric 15–20 min on high. Release naturally and check the grains crush easily.",
        "Sizzle cumin in ghee. Brown chopped onion and garlic and cook chopped tomato to a paste.",
        "Add cooked moong and salt. Simmer 5 min and add hot water if needed for a spoonable texture."
      ]
    }
  },
  "Chana Biryani": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup basmati",
        "1½ cups cooked chickpeas",
        "1 onion",
        "½ cup curd",
        "2 tbsp ghee",
        "1½ tsp biryani masala",
        "¼ cup mint",
        "½ tsp salt, plus for rice"
      ]
    },
    "steps": {
      "en": [
        "Rinse and soak rice 20 min. Boil in plenty of salted water until about two-thirds done, then drain.",
        "Brown sliced onion in ghee. Reserve half and add chickpeas, curd, biryani masala and salt to the pan. Cook until thick.",
        "Layer rice over the chickpeas. Top with mint and reserved onion, cover tightly and steam over low heat for 15 min until the rice is tender. Rest 5 min."
      ]
    }
  },
  "Chickpea Coconut Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups cooked chickpeas",
        "200 ml coconut milk",
        "1 small onion",
        "1 tomato",
        "1 tsp ginger-garlic paste",
        "1 tbsp oil",
        "½ tsp ground cumin",
        "1 tsp coriander powder",
        "½ tsp salt",
        "½ lemon"
      ]
    },
    "steps": {
      "en": [
        "Soften chopped onion in oil. Add paste, dry spices and chopped tomato and cook until soft and reduced.",
        "Stir in drained chickpeas, coconut milk, salt and ¼ cup water. Simmer gently 8–12 min until the gravy coats a spoon.",
        "Finish with lemon off the heat and adjust salt."
      ]
    }
  },
  "Pumpkin Soup": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g pumpkin",
        "1 small onion",
        "1 tbsp butter",
        "450 ml vegetable stock",
        "¼ tsp black pepper",
        "pinch nutmeg, optional",
        "salt"
      ]
    },
    "steps": {
      "en": [
        "Peel and dice pumpkin and chop onion. Soften onion in butter for 4 min.",
        "Add pumpkin and stock. Simmer 15–20 min, or pressure-cook on high 6 min and release naturally, until pumpkin yields easily.",
        "Blend until smooth using an immersion blender. Add pepper, nutmeg and salt and thin with hot stock if needed."
      ]
    }
  },
  "Creamy Tomato Soup": {
    "serves": 2,
    "amounts": {
      "en": [
        "500 g ripe tomatoes",
        "1 small onion",
        "½ carrot",
        "350 ml vegetable stock",
        "1 tbsp butter",
        "2 tbsp cream, optional",
        "¼ tsp black pepper",
        "salt"
      ]
    },
    "steps": {
      "en": [
        "Chop tomatoes, onion and carrot. Soften onion in butter, add the rest and pour in stock.",
        "Simmer 20 min or pressure-cook on high for 6 min and release naturally. Blend smooth with an immersion blender and strain if desired.",
        "Return to a gentle simmer, season, then stir in cream off heat if using."
      ]
    }
  },
  "Lauki Chana Dal": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup chana dal",
        "350 g bottle gourd",
        "1 tomato",
        "1 tbsp ghee",
        "½ tsp cumin",
        "pinch asafoetida",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1½ cups water"
      ]
    },
    "steps": {
      "en": [
        "Soak dal 30 min and drain. Peel lauki, discard if bitter, remove hard seeds and dice. Chop tomato.",
        "Pressure-cook dal with fresh water, lauki, tomato and turmeric for 12–15 min on high, then release naturally. Check dal crushes easily.",
        "Sizzle cumin and asafoetida in ghee, stir into dal with salt and briefly simmer to thicken."
      ]
    }
  },
  "Gajar ki Kanji": {
    "serves": 4,
    "amounts": {
      "en": [
        "200 g carrots",
        "75 g beetroot, optional",
        "1 litre drinking water",
        "30 g fine pickling salt",
        "1 tbsp coarsely ground yellow mustard seeds",
        "¼ tsp red chilli powder"
      ],
      "hi": [
        "200 ग्राम गाजर",
        "75 ग्राम चुकंदर (वैकल्पिक)",
        "1 लीटर पीने का पानी",
        "30 ग्राम बारीक अचार वाला नमक",
        "1 बड़ा चम्मच दरदरी पिसी पीली सरसों",
        "¼ छोटा चम्मच लाल मिर्च पाउडर"
      ]
    },
    "steps": {
      "en": [
        "Wash and peel carrots and optional beetroot, and cut into thin sticks. Dissolve salt completely in water. Add mustard and chilli to a clean glass fermentation jar, then add vegetables and enough brine to cover.",
        "Hold the vegetables completely under the brine with a clean fermentation weight. Fit an airlock or a lid that can vent gas. Ferment away from sunlight at about 20–22°C until the liquid is tangy and measures pH 4.6 or below with a calibrated meter. Start checking after 3 days.",
        "Refrigerate as soon as it reaches that acidity. Discard the batch if you see mould, notice a slimy texture or cannot verify the acidity. Serve cold."
      ],
      "hi": [
        "गाजर और चुकंदर धोकर छीलें और पतली लंबी फाँकें काटें। पानी में नमक घोलें। साफ़ काँच के किण्वन वाले जार में सरसों, मिर्च और सब्ज़ियाँ डालें। इतना नमकीन पानी डालें कि सब्ज़ियाँ पूरी तरह डूब जाएँ।",
        "साफ़ किण्वन भार से सब्ज़ियाँ पानी में डुबोकर रखें। गैस निकलने वाला ढक्कन लगाएँ। धूप से दूर लगभग 20–22°C पर रखें। 3 दिन बाद से कैलिब्रेट किए हुए मीटर से जाँचें। पानी खट्टा हो और pH 4.6 या कम हो जाए तो किण्वन पूरा है।",
        "इस अम्लता तक पहुँचते ही जार फ्रिज में रखें। अगर फफूँद दिखे, मिश्रण लिसलिसा हो या अम्लता की पुष्टि न हो सके, तो मिश्रण फेंक दें। ठंडा परोसें।"
      ]
    },
    "source": [
      "University of Minnesota Extension fermentation guidance",
      "https://extension.umn.edu/food/preparing/cooking-at-home/food-preservation/fermentation"
    ]
  },
  "Petha (Agra Style)": {
    "serves": 6,
    "amounts": {
      "en": [
        "500 g peeled and deseeded ash gourd",
        "½ tsp food-grade pickling lime",
        "1 litre water for the lime soak",
        "300 g sugar",
        "150 ml water for syrup",
        "½ tsp rose water, optional"
      ],
      "hi": [
        "500 ग्राम छिला, बीज निकाला सफ़ेद पेठा",
        "½ छोटा चम्मच खाने योग्य अचार वाला चूना",
        "भिगोने के लिए 1 लीटर पानी",
        "300 ग्राम चीनी",
        "चाशनी के लिए 150 मिली पानी",
        "½ छोटा चम्मच गुलाब जल (वैकल्पिक)"
      ]
    },
    "steps": {
      "en": [
        "Cut gourd into 2 cm cubes and prick with a fork. Dissolve pickling lime in the litre of water and soak the gourd for 1 hour. Drain and discard lime water and rinse gourd thoroughly in several changes of fresh water.",
        "Simmer in fresh water until the cubes are just tender and translucent at the edges, about 8–12 min. Drain thoroughly.",
        "Bring sugar and 150 ml water to a simmer. Add gourd and cook gently until the cubes are translucent and syrup thickens, about 15–25 min. Add rose water off heat if using. Lift pieces onto a rack and refrigerate once cool."
      ],
      "hi": [
        "पेठे के 2 सेमी टुकड़े काटें और काँटे से छेद करें। 1 लीटर पानी में खाने योग्य चूना घोलकर टुकड़े 1 घंटा भिगोएँ। चूने का पानी फेंकें और कई बार ताज़े पानी से अच्छी तरह धोएँ।",
        "टुकड़े ताज़े पानी में 8–12 मिनट उबालें, जब तक हल्के नरम हों और किनारे पारदर्शी होने लगें। अच्छी तरह निथारें।",
        "चीनी और 150 मिली पानी उबालें। पेठा डालकर धीमी आँच पर 15–25 मिनट पकाएँ, जब तक टुकड़े पारदर्शी हों और चाशनी गाढ़ी हो जाए। चाहें तो आँच बंद कर गुलाब जल डालें। टुकड़े जाली पर निकालें और ठंडा होने पर फ्रिज में रखें।"
      ]
    },
    "source": [
      "Niru Gupta",
      "https://www.niruskitchen.com/recipes/details.asp?category_id=2&recipe_id=4"
    ]
  },
  "Veg Pizza (Tawa)": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g maida",
        "60 g curd",
        "¼ tsp baking soda",
        "¼ tsp salt",
        "water as needed",
        "¼ cup pizza sauce",
        "½ capsicum",
        "½ small onion",
        "1 small firm tomato",
        "90 g grated mozzarella"
      ]
    }
  },
  "Red Sauce Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g dry pasta",
        "350 g tomatoes",
        "1 small onion",
        "2 garlic cloves",
        "1 tbsp olive oil",
        "½ tsp dried oregano",
        "¼ tsp chilli flakes",
        "salt and pepper",
        "basil and grated cheese, optional"
      ]
    }
  },
  "Pink Sauce Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g dry pasta",
        "250 g tomato purée",
        "1 small onion",
        "1 tbsp butter",
        "100 ml cream",
        "½ tsp oregano",
        "¼ tsp pepper",
        "salt",
        "25 g grated cheese, optional"
      ]
    }
  },
  "Pesto Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g dry pasta",
        "1 packed cup basil",
        "1 small garlic clove",
        "3 tbsp roasted peanuts",
        "3 tbsp olive oil",
        "1 tsp lemon juice",
        "¼ tsp salt",
        "30 g grated vegetarian hard cheese, optional"
      ]
    }
  },
  "Spinach Alfredo Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g dry pasta",
        "150 g spinach",
        "1 tbsp each butter and maida",
        "250 ml milk",
        "1 garlic clove",
        "30 g grated hard cheese",
        "salt and pepper"
      ]
    }
  },
  "Mac and Cheese": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g macaroni",
        "1½ tbsp butter",
        "1½ tbsp maida",
        "300 ml milk",
        "120 g grated cheddar",
        "¼ tsp black pepper",
        "salt"
      ]
    }
  },
  "Aglio e Olio": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g spaghetti",
        "4 garlic cloves",
        "3 tbsp olive oil",
        "¼ tsp chilli flakes",
        "2 tbsp chopped parsley",
        "1 tsp lemon juice, optional",
        "salt for pasta water"
      ]
    }
  },
  "Arrabbiata Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g dry pasta",
        "350 g crushed tomatoes",
        "3 garlic cloves",
        "1½ tbsp olive oil",
        "½ tsp chilli flakes",
        "½ tsp salt",
        "basil, optional"
      ]
    }
  },
  "Pasta Primavera": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g pasta",
        "1 small carrot",
        "80 g French beans",
        "½ capsicum",
        "¼ cup corn, optional",
        "2 garlic cloves",
        "1½ tbsp olive oil",
        "½ tsp oregano",
        "salt and pepper"
      ]
    }
  },
  "Baked Veg Pasta": {
    "serves": 3,
    "amounts": {
      "en": [
        "200 g pasta",
        "250 g crushed tomatoes",
        "2 garlic cloves",
        "1 capsicum",
        "100 g mushrooms, optional",
        "1½ tbsp each butter and maida",
        "250 ml milk",
        "120 g mozzarella",
        "½ tsp oregano",
        "salt"
      ]
    }
  },
  "Veg Lasagna": {
    "serves": 4,
    "amounts": {
      "en": [
        "8 lasagna sheets",
        "300 g spinach",
        "400 g tomato sauce",
        "1 onion",
        "1 tsp oil",
        "2 tbsp each butter and maida",
        "400 ml milk",
        "150 g grated mozzarella",
        "salt"
      ]
    }
  },
  "Margherita Pizza": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 g maida",
        "115 ml water",
        "¾ tsp instant yeast",
        "½ tsp each salt and sugar",
        "1 tsp olive oil",
        "200 g chopped tomatoes",
        "1 garlic clove",
        "¼ tsp oregano",
        "100 g mozzarella",
        "6 basil leaves"
      ]
    }
  },
  "Paneer Tikka Pizza": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 g maida",
        "115 ml water",
        "¾ tsp yeast",
        "½ tsp salt",
        "1 tsp oil",
        "150 g paneer",
        "¼ cup curd",
        "1½ tsp tikka masala",
        "¼ cup tomato sauce",
        "½ onion",
        "½ capsicum",
        "90 g mozzarella"
      ]
    }
  },
  "Atta Roti Pizza": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "about ½ cup water",
        "pinch of salt",
        "3 tbsp tomato sauce",
        "½ capsicum",
        "2 tbsp corn, optional",
        "80 g grated mozzarella"
      ]
    }
  },
  "Bread Pizza": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 bread slices",
        "4 tbsp pizza sauce",
        "½ capsicum",
        "½ small onion",
        "¼ cup cooked corn, optional",
        "½ tsp oregano",
        "80 g grated mozzarella"
      ]
    }
  },
  "Tomato Bruschetta": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 thick baguette slices",
        "2 ripe tomatoes",
        "1 garlic clove",
        "1 tbsp olive oil",
        "¼ small onion, optional",
        "6 basil leaves",
        "salt and pepper"
      ]
    }
  },
  "Creamy Mushroom Toast": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 slices bread",
        "250 g mushrooms",
        "1½ tbsp butter",
        "2 garlic cloves",
        "2 tbsp milk",
        "30 g grated cheese, optional",
        "salt and pepper"
      ]
    }
  },
  "Minestrone Soup": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 onion",
        "1 carrot",
        "80 g French beans",
        "1 potato",
        "2 tomatoes",
        "2 garlic cloves",
        "1 tbsp olive oil",
        "750 ml water or stock",
        "60 g small pasta",
        "½ tsp oregano",
        "salt and pepper"
      ]
    }
  },
  "Tomato Basil Soup": {
    "serves": 2,
    "amounts": {
      "en": [
        "500 g tomatoes",
        "1 small onion",
        "1 tbsp butter",
        "250 ml water",
        "6 basil leaves",
        "2 tbsp cream, optional",
        "pinch of sugar",
        "salt and pepper"
      ]
    }
  },
  "Veg Risotto": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g rice",
        "600–700 ml hot vegetable stock",
        "1 small onion",
        "125 g mushrooms",
        "½ cup peas",
        "1½ tbsp butter",
        "30 g grated vegetarian hard cheese",
        "2 tbsp milk, optional",
        "pepper"
      ]
    }
  },
  "Arancini-style Rice Balls": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups cooked promptly chilled rice",
        "1 small boiled potato",
        "70 g mozzarella",
        "3 tbsp maida",
        "4 tbsp water for slurry",
        "½ cup breadcrumbs",
        "¼ tsp oregano",
        "½ tsp salt",
        "frying oil"
      ]
    }
  },
  "Potato Gnocchi": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g floury potatoes",
        "90–120 g maida",
        "½ tsp salt",
        "1½ tbsp butter or ½ cup tomato sauce",
        "30 g grated cheese, optional"
      ]
    }
  },
  "Herbed Baby Potatoes": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g baby potatoes",
        "1½ tbsp butter",
        "2 garlic cloves",
        "½ tsp oregano",
        "¼ tsp chilli flakes",
        "½ tsp salt",
        "25 g grated cheese, optional"
      ]
    }
  },
  "Cheesy Stuffed Mushrooms": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g large button mushrooms",
        "75 g grated cheese",
        "¼ capsicum",
        "¼ onion",
        "2 tbsp cooked corn, optional",
        "1 tsp oil",
        "salt and pepper"
      ]
    }
  },
  "Italian Pasta Salad": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g dry pasta",
        "½ cucumber",
        "1 firm tomato",
        "½ capsicum",
        "¼ cup cooked corn",
        "1½ tbsp olive oil",
        "1 tbsp lemon juice",
        "½ tsp oregano",
        "salt and pepper"
      ]
    }
  },
  "Eggless Panna Cotta": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 ml whole milk",
        "250 ml cream",
        "45 g sugar",
        "1 tsp vanilla",
        "vegetarian agar-agar in the packet quantity for 500 ml of liquid"
      ]
    },
    "steps": {
      "en": [
        "Read the packet for the amount of vegetarian agar-agar needed to softly set 500 ml of dairy. Whisk it into some cold milk and heat as directed until completely dissolved.",
        "Warm the remaining milk, cream, sugar and vanilla in a saucepan. Whisk in the dissolved agar and heat as directed on the packet. Pour into four cups before it begins to set.",
        "Cool briefly, then refrigerate for at least 3 hours until set and cold. Serve in the cups."
      ]
    }
  },
  "Desi Masala Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g pasta",
        "1 onion",
        "2 tomatoes",
        "½ capsicum",
        "½ cup peas, optional",
        "1 tbsp oil",
        "½ tsp cumin",
        "¼ tsp each turmeric and chilli powder",
        "½ tsp garam masala",
        "salt",
        "1 tbsp coriander"
      ]
    }
  },
  "Paneer Tikka Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g pasta",
        "150 g paneer",
        "½ capsicum",
        "¼ cup curd",
        "2 tsp tikka masala",
        "2 tsp oil",
        "250 g tomato purée",
        "2 garlic cloves",
        "2 tbsp cream",
        "salt"
      ]
    }
  },
  "One-Pot Spinach Tomato Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g short dry pasta",
        "2 tomatoes",
        "100 g spinach",
        "2 garlic cloves",
        "1 tbsp oil",
        "2 cups water, plus as needed",
        "½ tsp each salt and oregano",
        "¼ tsp pepper",
        "25 g grated cheese, optional"
      ]
    }
  },
  "Creamy Mushroom Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g pasta",
        "250 g mushrooms",
        "1½ tbsp butter",
        "2 garlic cloves",
        "1 tbsp maida",
        "250 ml milk",
        "30 g grated hard cheese",
        "salt and pepper"
      ]
    }
  },
  "Veg Calzone": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 g maida",
        "115 ml water",
        "¾ tsp instant yeast",
        "½ tsp salt",
        "2 tsp oil",
        "⅓ cup cooked corn",
        "½ capsicum",
        "3 tbsp tomato sauce",
        "100 g mozzarella"
      ]
    }
  },
  "Mushroom Pizza": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 g maida",
        "115 ml water",
        "¾ tsp instant yeast",
        "½ tsp salt",
        "2 tsp oil",
        "¼ cup pizza sauce",
        "150 g mushrooms",
        "½ small onion",
        "100 g mozzarella"
      ]
    }
  },
  "Corn Cheese Pizza": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 g maida",
        "115 ml water",
        "¾ tsp instant yeast",
        "½ tsp salt",
        "1 tsp oil",
        "¼ cup pizza sauce",
        "½ cup cooked corn",
        "½ capsicum",
        "100 g mozzarella"
      ]
    }
  },
  "Focaccia": {
    "serves": 4,
    "amounts": {
      "en": [
        "300 g maida",
        "235 ml warm water",
        "1 tsp instant yeast",
        "1 tsp each sugar and salt",
        "3 tbsp olive oil, divided",
        "½ onion",
        "8 cherry tomatoes",
        "½ tsp oregano"
      ]
    }
  },
  "Cheesy Garlic Knots": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g maida",
        "80 ml each lukewarm milk and water",
        "1 tsp instant yeast",
        "¾ tsp salt",
        "1 tbsp oil",
        "2 tbsp butter",
        "3 garlic cloves",
        "40 g finely grated cheese"
      ]
    }
  },
  "Caprese Paneer Salad": {
    "serves": 2,
    "amounts": {
      "en": [
        "175 g fresh paneer",
        "2 ripe tomatoes",
        "8 basil leaves",
        "1 tbsp olive oil",
        "1 tsp lemon juice",
        "¼ tsp salt",
        "black pepper"
      ]
    }
  },
  "Italian Stuffed Capsicum": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 large capsicums",
        "½ cup dry rice",
        "1 tomato",
        "¼ cup tomato sauce",
        "80 g grated cheese",
        "½ tsp oregano",
        "½ tsp salt"
      ]
    }
  },
  "Baingan Parmesan": {
    "serves": 3,
    "amounts": {
      "en": [
        "450 g brinjal",
        "¾ cup tomato sauce",
        "120 g mozzarella",
        "30 g grated vegetarian hard cheese",
        "½ tsp salt",
        "2–3 tbsp oil"
      ]
    }
  },
  "Penne in Tomato Mushroom Sauce": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g penne",
        "200 g mushrooms",
        "250 g tomato purée",
        "2 garlic cloves",
        "½ onion",
        "1½ tbsp olive oil",
        "½ tsp oregano",
        "salt and pepper"
      ]
    }
  },
  "Veg Bolognese Spaghetti": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g spaghetti",
        "½ cup dried soya granules",
        "300 g tomato purée",
        "1 small onion",
        "1 small carrot",
        "2 garlic cloves",
        "1 tbsp olive oil",
        "½ tsp oregano",
        "salt and pepper"
      ]
    }
  },
  "Pesto Pizza": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 g maida",
        "115 ml water",
        "¾ tsp instant yeast",
        "½ tsp salt",
        "1 tsp olive oil",
        "3 tbsp basil pesto",
        "100 g mozzarella",
        "1 small firm tomato, optional"
      ]
    }
  },
  "No-Yeast Pizza": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 g maida",
        "100 g plain curd",
        "1 tsp baking powder",
        "½ tsp salt",
        "1 tsp oil",
        "water as needed",
        "¼ cup tomato sauce",
        "½ capsicum",
        "100 g mozzarella"
      ]
    }
  },
  "Whole Wheat Pizza": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 g atta",
        "130 ml warm water",
        "¾ tsp instant yeast",
        "½ tsp salt",
        "1 tbsp olive oil",
        "¼ cup tomato sauce",
        "100 g mozzarella",
        "½ capsicum, optional"
      ]
    }
  },
  "Tomato Pasta Bake (Baked Ziti)": {
    "serves": 3,
    "amounts": {
      "en": [
        "200 g ziti or penne",
        "350 g crushed tomatoes",
        "1 small onion",
        "2 garlic cloves",
        "1 tbsp olive oil",
        "120 g mozzarella",
        "½ tsp oregano",
        "salt"
      ]
    }
  },
  "Garlic Butter Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g pasta",
        "2 tbsp butter",
        "4 garlic cloves",
        "½ tsp oregano",
        "¼ tsp pepper",
        "30 g grated cheese, optional",
        "salt"
      ]
    }
  },
  "Marinara Sauce": {
    "serves": 4,
    "amounts": {
      "en": [
        "500 g ripe tomatoes",
        "3 garlic cloves",
        "1½ tbsp olive oil",
        "½ tsp oregano",
        "½ tsp salt",
        "pinch of sugar, optional"
      ]
    }
  },
  "Mango Panna Cotta": {
    "serves": 4,
    "amounts": {
      "en": [
        "200 ml milk",
        "200 ml cream",
        "35 g sugar",
        "vegetarian agar-agar in the packet quantity for 400 ml of liquid",
        "1 large ripe mango"
      ]
    },
    "steps": {
      "en": [
        "Read the packet for the amount of vegetarian agar-agar needed to softly set 400 ml of dairy. Whisk it into some cold milk and heat as directed until dissolved.",
        "Warm the remaining milk, cream and sugar. Whisk in the dissolved agar and heat as directed on the packet. Divide between four cups.",
        "Refrigerate at least 3 hours. Blend half the mango smooth and dice the rest. Spoon the purée and cubes over the set panna cotta just before serving."
      ]
    }
  },
  "Eggless Tiramisu": {
    "serves": 4,
    "amounts": {
      "en": [
        "6 soft white bread slices",
        "250 ml cold whipping cream",
        "35 g sugar, divided",
        "100 ml strong coffee",
        "60 ml milk",
        "1 tbsp unsweetened cocoa"
      ]
    }
  },
  "Pumpkin Paneer Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g pasta",
        "250 g peeled pumpkin",
        "125 g paneer",
        "2 garlic cloves",
        "100 ml milk",
        "1½ tbsp olive oil",
        "¼ tsp chilli flakes",
        "salt and pepper"
      ]
    }
  },
  "Brinjal Pasta (Alla Norma)": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g dry pasta",
        "300 g brinjal",
        "300 g crushed tomatoes",
        "2 garlic cloves",
        "2 tbsp olive oil",
        "40 g vegetarian ricotta salata or other firm cheese",
        "salt"
      ]
    }
  },
  "Mushroom Ravioli in Butter Sauce": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 g maida",
        "85–95 ml water",
        "1 tsp olive oil",
        "½ tsp salt, divided",
        "200 g mushrooms",
        "100 g ricotta",
        "2 tbsp butter",
        "1 garlic clove",
        "4 sage leaves, optional"
      ]
    }
  },
  "Spinach Ricotta Cannelloni": {
    "serves": 3,
    "amounts": {
      "en": [
        "10 cannelloni tubes",
        "250 g spinach",
        "250 g ricotta",
        "400 g tomato passata",
        "100 g grated mozzarella",
        "2 garlic cloves",
        "1 tbsp olive oil",
        "salt and pepper"
      ]
    }
  },
  "Eggplant Caponata": {
    "serves": 3,
    "amounts": {
      "en": [
        "450 g brinjal",
        "250 g tomatoes",
        "1 onion",
        "1 celery rib",
        "¼ cup pitted olives",
        "1 tbsp drained capers",
        "2 tbsp vinegar",
        "1 tsp sugar",
        "2 tbsp olive oil",
        "salt"
      ]
    }
  },
  "Mushroom Truffle Risotto": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g arborio rice",
        "200 g mushrooms",
        "650 ml hot vegetable stock",
        "1 small onion",
        "2 tbsp butter",
        "35 g vegetarian hard cheese",
        "½ tsp truffle oil, optional",
        "pepper"
      ]
    }
  },
  "Pasta e Ceci": {
    "serves": 3,
    "amounts": {
      "en": [
        "120 g small pasta",
        "1½ cups cooked chickpeas",
        "200 g crushed tomatoes",
        "2 garlic cloves",
        "600 ml vegetable stock",
        "1 tbsp olive oil",
        "½ tsp rosemary",
        "salt and pepper"
      ]
    }
  },
  "Tuscan White Bean Soup": {
    "serves": 3,
    "amounts": {
      "en": [
        "2 cups cooked white beans",
        "250 g tomatoes",
        "1 carrot",
        "1 celery rib",
        "650 ml vegetable stock",
        "1 tbsp olive oil",
        "75 g spinach, optional",
        "½ tsp rosemary"
      ]
    }
  },
  "Polenta with Mushroom Ragù": {
    "serves": 3,
    "amounts": {
      "en": [
        "120 g coarse polenta",
        "400 ml water",
        "200 ml milk",
        "1 tbsp butter",
        "300 g mushrooms",
        "250 g tomatoes",
        "1 small onion",
        "1 tbsp olive oil",
        "30 g grated vegetarian hard cheese, optional",
        "½ tsp thyme"
      ]
    }
  },
  "Italian Lemon Ricotta Pancakes": {
    "serves": 2,
    "amounts": {
      "en": [
        "120 g maida",
        "125 g ricotta",
        "110 ml milk",
        "zest of 1 lemon",
        "1½ tsp baking powder",
        "1 tbsp sugar",
        "pinch of salt",
        "1 tsp oil for the pan"
      ]
    }
  },
  "Panzanella Bread Salad": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g stale country bread",
        "300 g ripe tomatoes",
        "½ cucumber",
        "½ small red onion",
        "2 tbsp olive oil",
        "1 tbsp red wine vinegar",
        "8 basil leaves",
        "¼ tsp salt"
      ]
    }
  },
  "Stuffed Shell Pasta": {
    "serves": 3,
    "amounts": {
      "en": [
        "15 jumbo pasta shells",
        "250 g ricotta",
        "150 g spinach",
        "350 g tomato sauce",
        "100 g mozzarella",
        "1 garlic clove",
        "salt and pepper"
      ]
    }
  },
  "Roasted Red Pepper Pasta": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g pasta",
        "2 large red capsicums",
        "2 garlic cloves",
        "80 ml cream",
        "1 tbsp olive oil",
        "25 g grated vegetarian hard cheese, optional",
        "basil and salt to taste"
      ]
    }
  },
  "Virgin Mojito": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 limes",
        "12 mint leaves",
        "2 tbsp sugar or simple syrup",
        "350 ml chilled soda water",
        "ice"
      ]
    }
  },
  "Virgin Mango Mojito": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup ripe mango purée",
        "1 lime",
        "12 mint leaves",
        "1–2 tsp sugar",
        "300 ml chilled soda water",
        "ice"
      ]
    }
  },
  "Watermelon Mint Cooler": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g seedless watermelon",
        "8 mint leaves",
        "1 tbsp lemon juice",
        "ice"
      ]
    }
  },
  "Green Apple Mojito": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 green apple",
        "10 mint leaves",
        "1½ tbsp lemon juice",
        "2 tsp sugar",
        "300 ml chilled soda water",
        "ice"
      ]
    }
  },
  "Shirley Temple": {
    "serves": 2,
    "amounts": {
      "en": [
        "360 ml chilled soda water",
        "3 tbsp rose syrup or grenadine",
        "1 tbsp lemon juice",
        "ice"
      ]
    }
  },
  "Cinderella Mocktail": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 ml orange juice",
        "150 ml pineapple juice",
        "1 tbsp lemon juice",
        "100 ml chilled soda water",
        "ice"
      ]
    }
  },
  "Virgin Piña Colada": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g pineapple chunks",
        "150 ml coconut milk",
        "1 cup ice",
        "1 tsp sugar, optional"
      ]
    }
  },
  "Virgin Mary": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g ripe tomatoes",
        "1½ tbsp lemon juice",
        "1 tsp light soy sauce",
        "¼ tsp black salt",
        "¼ tsp black pepper",
        "ice"
      ]
    }
  },
  "Cucumber Mint Cooler": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 medium cucumber",
        "10 mint leaves",
        "1 tbsp lemon juice",
        "¼ cup cold water",
        "200 ml chilled soda water",
        "ice"
      ]
    }
  },
  "Sparkling Pomegranate Spritzer": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 ml pomegranate juice",
        "180 ml chilled soda water",
        "1 tbsp lemon juice",
        "ice"
      ]
    }
  },
  "Orange Spritzer": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 ml fresh orange juice",
        "200 ml chilled soda water",
        "2 mint sprigs",
        "ice"
      ]
    }
  },
  "Masala Jeera Soda": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml chilled soda water",
        "1½ tbsp lemon juice",
        "¾ tsp roasted cumin powder",
        "¼ tsp each black salt and chaat masala",
        "2 tsp sugar, optional",
        "ice"
      ]
    }
  },
  "Homemade Ginger Lemon Fizz": {
    "serves": 2,
    "amounts": {
      "en": [
        "15 g grated ginger",
        "60 ml water",
        "3 tbsp sugar",
        "2 tbsp lemon juice",
        "350 ml chilled soda water",
        "ice"
      ]
    }
  },
  "Fruit Punch": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 ml orange juice",
        "150 ml pineapple juice",
        "½ apple",
        "100 ml chilled soda water",
        "1 tsp sugar, optional"
      ]
    }
  },
  "Rose Lemonade": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tbsp lemon juice",
        "2 tbsp rose syrup",
        "350 ml cold water",
        "4 mint leaves",
        "ice"
      ]
    }
  },
  "Cold Coffee": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tsp instant coffee",
        "400 ml cold milk",
        "2–3 tsp sugar",
        "½ cup ice",
        "2 small scoops vanilla ice cream, optional"
      ]
    }
  },
  "South Indian Filter Coffee": {
    "serves": 2,
    "amounts": {
      "en": [
        "3 tbsp South Indian filter coffee",
        "120 ml just-boiled water",
        "320 ml whole milk",
        "2–4 tsp sugar, optional"
      ]
    }
  },
  "Dalgona Coffee": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tbsp instant coffee",
        "2 tbsp sugar",
        "2 tbsp hot water",
        "350 ml milk",
        "ice, optional"
      ]
    }
  },
  "Iced Latte": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 espresso shots or 60 ml strong coffee",
        "320 ml cold milk",
        "1 cup ice"
      ]
    }
  },
  "Cold Brew Coffee": {
    "serves": 2,
    "amounts": {
      "en": [
        "50 g coarsely ground coffee",
        "400 ml cold drinking water",
        "milk, ice and sweetener to serve"
      ]
    }
  },
  "Home Cappuccino": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 espresso shots or 60 ml strong coffee",
        "240 ml milk"
      ]
    }
  },
  "Iced Mocha": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tsp instant coffee",
        "2 tsp cocoa",
        "2–4 tsp sugar",
        "3 tbsp hot water",
        "330 ml cold milk",
        "ice"
      ]
    }
  },
  "Hot Chocolate": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml milk",
        "2 tbsp unsweetened cocoa",
        "2 tbsp sugar",
        "30 g dark chocolate, optional"
      ]
    }
  },
  "Coffee Float": {
    "serves": 2,
    "amounts": {
      "en": [
        "320 ml chilled coffee",
        "2 scoops vanilla ice cream"
      ]
    }
  },
  "Coffee Frappe": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 espresso shots or 2 tsp instant coffee dissolved in 30 ml hot water",
        "300 ml milk",
        "1 cup ice",
        "2 tsp sugar",
        "1 tbsp chocolate syrup, optional"
      ]
    }
  },
  "Mango Milkshake": {
    "serves": 2,
    "amounts": {
      "en": [
        "220 g ripe mango flesh",
        "320 ml cold milk",
        "1–2 tsp sugar, optional"
      ]
    }
  },
  "Chocolate Milkshake": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 ml cold milk",
        "1½ tbsp cocoa",
        "2 scoops vanilla ice cream",
        "1–2 tsp sugar, optional"
      ]
    }
  },
  "Apple Shake": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 large apple, peeled and cored",
        "350 ml cold milk",
        "1–2 tsp sugar, optional",
        "pinch of cinnamon"
      ]
    }
  },
  "Dry Fruit Milkshake": {
    "serves": 2,
    "amounts": {
      "en": [
        "¼ cup mixed almonds and cashews",
        "4 pitted dates",
        "350 ml cold milk",
        "1 tsp sugar, optional"
      ]
    }
  },
  "Kesar Badam Shake": {
    "serves": 2,
    "amounts": {
      "en": [
        "¼ cup almonds",
        "400 ml milk",
        "6 saffron strands",
        "¼ tsp cardamom",
        "2 tsp sugar"
      ]
    }
  },
  "Oats Banana Smoothie": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 small ripe bananas",
        "⅓ cup rolled oats",
        "350 ml milk",
        "1 tsp honey, optional"
      ]
    }
  },
  "Spinach Banana Smoothie": {
    "serves": 2,
    "amounts": {
      "en": [
        "50 g washed spinach",
        "2 ripe bananas",
        "300 ml cold milk or water"
      ]
    }
  },
  "Banana Peanut Smoothie": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 ripe bananas",
        "3 tbsp unsalted roasted peanuts",
        "350 ml cold milk"
      ]
    }
  },
  "Orange Juice": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 large oranges",
        "pinch of black salt, optional"
      ]
    }
  },
  "Watermelon Juice": {
    "serves": 2,
    "amounts": {
      "en": [
        "450 g seedless watermelon",
        "1 tbsp lemon juice, optional",
        "ice"
      ]
    }
  },
  "Pineapple Juice": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g peeled ripe pineapple",
        "120 ml cold water",
        "1 tsp sugar, optional"
      ]
    }
  },
  "Pomegranate Juice": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups pomegranate arils",
        "2 tbsp cold water if needed",
        "pinch of black salt, optional"
      ]
    }
  },
  "Mosambi Juice": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 large mosambi",
        "pinch of black salt, optional"
      ]
    }
  },
  "ABC Juice (Apple Beetroot Carrot)": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 apple",
        "½ small beetroot",
        "2 carrots",
        "1 cm ginger",
        "180 ml cold water",
        "2 tsp lemon juice"
      ]
    }
  },
  "Carrot Juice": {
    "serves": 2,
    "amounts": {
      "en": [
        "3 carrots",
        "240 ml cold water",
        "1 cm ginger",
        "1 tbsp lemon juice"
      ]
    }
  },
  "Amla Juice": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 amla",
        "300 ml cold water",
        "1 cm ginger, optional",
        "1 tsp honey or pinch of black salt"
      ]
    }
  },
  "Green Detox Juice": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cucumber",
        "40 g washed spinach",
        "1 apple",
        "1 tbsp lemon juice",
        "180 ml cold water"
      ]
    }
  },
  "Masala Chai Kadak": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 ml water",
        "220 ml milk",
        "2½ tsp black tea leaves",
        "2 cm ginger",
        "sugar to taste"
      ]
    }
  },
  "Adrak Elaichi Chai": {
    "serves": 2,
    "amounts": {
      "en": [
        "240 ml water",
        "240 ml milk",
        "2 tsp black tea leaves",
        "2 cm ginger",
        "3 cardamom pods",
        "2 tsp sugar, optional"
      ]
    }
  },
  "Iced Lemon Tea": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tsp black tea leaves",
        "400 ml water",
        "2 tbsp lemon juice",
        "2 tsp sugar",
        "mint and ice"
      ]
    }
  },
  "Honey Lemon Green Tea": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 green tea bags",
        "400 ml hot water",
        "2 tsp honey",
        "2 tsp lemon juice"
      ]
    }
  },
  "Tulsi Ginger Kadha": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml water",
        "10 washed tulsi leaves",
        "2 cm ginger",
        "3 peppercorns",
        "1 tsp jaggery or honey, optional"
      ]
    }
  },
  "Irani Chai": {
    "serves": 2,
    "amounts": {
      "en": [
        "2½ tsp black tea leaves",
        "250 ml water",
        "300 ml whole milk",
        "2 crushed cardamom pods",
        "2–4 tsp sugar"
      ]
    }
  },
  "Rose Milk": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml chilled milk",
        "3 tbsp rose syrup",
        "1 tsp sugar, optional"
      ]
    }
  },
  "Falooda": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml chilled milk",
        "2 tsp sabja seeds",
        "40 g falooda vermicelli",
        "3 tbsp rose syrup",
        "2 scoops vanilla ice cream, optional"
      ]
    }
  },
  "Kesar Doodh": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml whole milk",
        "8 saffron strands",
        "2 crushed cardamom pods",
        "1 tbsp sugar",
        "2 tbsp sliced nuts, optional"
      ]
    }
  },
  "Neer Mor (South Indian Buttermilk)": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g plain curd",
        "250 ml cold water",
        "1 cm ginger",
        "6 curry leaves",
        "½ small green chilli, optional",
        "¼ tsp salt"
      ]
    }
  },
  "Punjabi Chhach": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g plain curd",
        "250 ml cold water",
        "½ tsp roasted cumin",
        "¼ tsp black salt",
        "5 mint leaves, optional"
      ]
    }
  },
  "Panakam": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml cold water",
        "3 tbsp grated jaggery",
        "¼ tsp dry ginger powder",
        "¼ tsp cardamom",
        "1 tbsp lemon juice"
      ]
    }
  },
  "Imli Cooler": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tbsp tamarind pulp",
        "2 tbsp grated jaggery",
        "400 ml cold water",
        "½ tsp roasted cumin",
        "¼ tsp black salt",
        "mint, optional"
      ]
    }
  },
  "Pudina Nimbu Pani": {
    "serves": 2,
    "amounts": {
      "en": [
        "¼ cup mint leaves",
        "2 tbsp lemon juice",
        "400 ml cold water",
        "1 tbsp sugar",
        "¼ tsp black salt",
        "ice"
      ]
    }
  },
  "Ragi Ambli": {
    "serves": 2,
    "amounts": {
      "en": [
        "3 tbsp ragi flour",
        "250 ml water",
        "200 ml plain buttermilk",
        "¼ tsp salt"
      ]
    }
  },
  "Tender Coconut Mojito": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml cold coconut water",
        "1 lime",
        "10 mint leaves",
        "ice"
      ]
    }
  },
  "Coconut Water Lemon Cooler": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml chilled coconut water",
        "1½ tbsp lemon juice",
        "pinch of salt",
        "ice"
      ]
    }
  },
  "Coconut Pineapple Cooler": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g peeled pineapple",
        "300 ml chilled coconut water",
        "ice"
      ]
    }
  },
  "Coconut Sabja Drink": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml chilled coconut water",
        "2 tsp sabja seeds",
        "½ cup soaking water",
        "2 tsp lemon juice",
        "1 tsp honey, optional"
      ]
    }
  },
  "Coconut Malai Shake": {
    "serves": 2,
    "amounts": {
      "en": [
        "100 g tender coconut flesh",
        "300 ml cold milk",
        "2 tsp sugar, optional"
      ]
    }
  },
  "Masala Chaas with Curry Leaves": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g plain curd",
        "250 ml cold water",
        "½ tsp roasted cumin",
        "¼ tsp black salt",
        "6 curry leaves",
        "1 tsp oil",
        "½ green chilli, optional"
      ]
    }
  },
  "Beetroot Chaas": {
    "serves": 2,
    "amounts": {
      "en": [
        "100 g cooked beetroot",
        "200 g plain curd",
        "250 ml cold water",
        "½ tsp roasted cumin",
        "¼ tsp black salt",
        "mint, optional"
      ]
    }
  },
  "Cucumber Chaas": {
    "serves": 2,
    "amounts": {
      "en": [
        "100 g cucumber",
        "200 g plain curd",
        "250 ml cold water",
        "½ tsp roasted cumin",
        "¼ tsp black salt",
        "mint or ginger, optional"
      ]
    }
  },
  "Mint Coriander Chaas": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g plain curd",
        "250 ml cold water",
        "¼ cup mint",
        "¼ cup coriander",
        "¼ tsp black salt",
        "¼ tsp roasted cumin, optional"
      ]
    }
  },
  "Basil Seed Lemonade": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tsp sabja seeds",
        "½ cup water for soaking",
        "400 ml cold water for mixing",
        "2 tbsp lemon juice",
        "1 tbsp sugar",
        "mint, optional"
      ]
    }
  },
  "Kiwi Mint Mocktail": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 peeled kiwis",
        "10 mint leaves",
        "1 tbsp lemon juice",
        "2 tsp sugar",
        "300 ml chilled soda water",
        "ice"
      ]
    }
  },
  "Blue Lagoon Mocktail": {
    "serves": 2,
    "amounts": {
      "en": [
        "3 tbsp non-alcoholic blue curaçao syrup",
        "2 tbsp lemon juice",
        "350 ml lemon-lime soda",
        "ice"
      ]
    }
  },
  "Passion Fruit Mojito (Virgin)": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup passion-fruit pulp",
        "10 mint leaves",
        "1 lime",
        "2 tsp sugar",
        "300 ml chilled soda water",
        "ice"
      ]
    }
  },
  "Lychee Rose Fizz": {
    "serves": 2,
    "amounts": {
      "en": [
        "10 peeled pitted lychees",
        "1 tbsp lemon juice",
        "2 tbsp rose syrup",
        "300 ml chilled soda water",
        "ice"
      ]
    }
  },
  "Peach Iced Tea": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tsp black tea leaves",
        "400 ml water",
        "2 ripe peaches",
        "2 tbsp sugar",
        "1 tbsp lemon juice",
        "ice"
      ]
    }
  },
  "Hibiscus Iced Tea": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tbsp dried food-grade hibiscus petals",
        "450 ml hot water",
        "1–2 tbsp sugar",
        "1 tbsp lemon juice",
        "ice"
      ]
    }
  },
  "Ginger Peach Sparkler": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 ripe peaches",
        "1 cm ginger",
        "2 tbsp sugar",
        "75 ml water",
        "1 tbsp lemon juice",
        "300 ml chilled soda water"
      ]
    }
  },
  "Tamarind Date Cooler": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 tbsp tamarind pulp",
        "6 soft pitted dates",
        "400 ml water",
        "½ tsp roasted cumin",
        "¼ tsp black salt, optional"
      ]
    }
  },
  "Pineapple Basil Cooler": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g pineapple",
        "6 basil leaves",
        "1 tbsp lemon juice",
        "300 ml chilled soda water",
        "1 tsp sugar, optional",
        "ice"
      ]
    }
  },
  "Guava Chilli Mocktail": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 ml guava juice",
        "1½ tbsp lemon juice",
        "150 ml chilled soda water",
        "¼ tsp each black salt and chilli powder",
        "ice"
      ]
    }
  },
  "Cranberry Orange Fizz": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 ml cranberry juice",
        "150 ml orange juice",
        "150 ml chilled soda water",
        "ice",
        "2 orange slices, optional"
      ]
    }
  },
  "Watermelon Coconut Slush": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g frozen seedless watermelon cubes",
        "150 ml coconut water",
        "1 tbsp lime juice",
        "mint, optional"
      ]
    }
  },
  "Pomegranate Mint Chaas": {
    "serves": 2,
    "amounts": {
      "en": [
        "180 g plain curd",
        "120 ml pomegranate juice",
        "180 ml cold water",
        "6 mint leaves",
        "¼ tsp black salt",
        "pinch of roasted cumin, optional"
      ]
    }
  },
  "Espresso Tonic": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cooled espresso shots",
        "300 ml cold tonic water",
        "ice",
        "lemon peel, optional"
      ]
    }
  },
  "Affogato (Eggless)": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 scoops vanilla ice cream",
        "2 hot espresso shots",
        "10 g grated dark chocolate, optional"
      ]
    }
  },
  "Rava Kesari": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup suji",
        "⅓ cup ghee",
        "¾ cup sugar",
        "2 cups water",
        "¼ tsp cardamom",
        "2 tbsp cashews and raisins, optional"
      ]
    }
  },
  "Boondi Ladoo": {
    "serves": 5,
    "amounts": {
      "en": [
        "1 cup besan",
        "½–⅔ cup water for batter",
        "¾ cup sugar",
        "⅓ cup water for syrup",
        "¼ tsp cardamom",
        "ghee or neutral oil for frying"
      ]
    }
  },
  "Malpua": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup atta",
        "2 tbsp fine suji",
        "about ¾ cup milk",
        "½ tsp crushed fennel",
        "½ cup sugar and ½ cup water for syrup",
        "ghee for shallow-frying"
      ]
    }
  },
  "Balushahi": {
    "serves": 4,
    "amounts": {
      "en": [
        "1½ cups maida",
        "¼ cup ghee",
        "¼ cup curd",
        "¼ tsp baking soda",
        "cold water as needed",
        "1 cup sugar and ½ cup water for syrup",
        "frying oil"
      ]
    }
  },
  "Basundi": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 litre whole milk",
        "¼ cup sugar",
        "¼ tsp cardamom",
        "pinch of nutmeg and saffron",
        "2 tbsp sliced nuts, optional"
      ]
    }
  },
  "Til Chikki": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup sesame seeds",
        "½ cup grated jaggery",
        "1 tsp ghee"
      ]
    }
  },
  "Khasta Kachori": {
    "serves": 4,
    "amounts": {
      "en": [
        "1½ cups maida",
        "3 tbsp ghee",
        "½ tsp salt",
        "up to ½ cup water",
        "½ cup split moong",
        "½ tsp each fennel, cumin and amchur",
        "1 green chilli, optional",
        "frying oil"
      ]
    }
  },
  "Appam": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups fermented appam batter",
        "¼ cup coconut milk to thin",
        "¼ tsp salt if batter is unsalted"
      ]
    }
  },
  "Veg Momos": {
    "serves": 3,
    "amounts": {
      "en": [
        "1½ cups maida",
        "about ½ cup water",
        "200 g cabbage",
        "1 small carrot",
        "1 tsp grated ginger",
        "½ tsp salt, divided",
        "¼ tsp black pepper"
      ]
    }
  },
  "Masala Toast": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 slices bread",
        "1 small onion",
        "1 firm tomato",
        "½ capsicum",
        "1 green chilli, optional",
        "½ tsp chaat masala",
        "2 tsp butter",
        "salt"
      ]
    }
  },
  "Litti Chokha": {
    "serves": 3,
    "amounts": {
      "en": [
        "1½ cups atta",
        "about ¾ cup water",
        "¾ cup sattu",
        "1 small chopped onion",
        "2 garlic cloves",
        "1 tsp ginger",
        "1 tbsp lemon juice",
        "½ tsp ajwain",
        "1 tbsp edible mustard oil",
        "300 g brinjal",
        "1 tomato",
        "1 potato",
        "salt",
        "ghee to finish"
      ]
    }
  },
  "Sweet Corn Soup": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups corn",
        "500 ml water or stock",
        "½ carrot",
        "1 tsp grated ginger",
        "1 tbsp cornflour dissolved in 2 tbsp cold water",
        "½ tsp salt",
        "¼ tsp pepper"
      ]
    }
  },
  "Kaddu ki Khatti Meethi Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g pumpkin",
        "¼ cup water",
        "½ tsp sendha namak",
        "1 tbsp jaggery and 1 tsp tamarind pulp, if permitted",
        "1 green chilli, optional"
      ]
    }
  },
  "Puri": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "¼ tsp salt",
        "1 tsp oil for dough",
        "about ⅓ cup water",
        "frying oil"
      ]
    }
  },
  "Veg Chowmein": {
    "serves": 2,
    "amounts": {
      "en": [
        "160 g dry noodles",
        "120 g cabbage",
        "1 carrot",
        "½ onion",
        "½ capsicum",
        "2 garlic cloves",
        "1½ tbsp oil",
        "1 tbsp soy sauce",
        "1 tsp vinegar",
        "¼ tsp pepper"
      ]
    }
  },
  "Tomato Soup": {
    "serves": 2,
    "amounts": {
      "en": [
        "500 g tomatoes",
        "1 small onion",
        "½ carrot",
        "1 tsp grated ginger",
        "1 tbsp butter",
        "350 ml water",
        "salt and pepper"
      ]
    }
  },
  "Veg Sandwich": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 slices bread",
        "1 firm tomato",
        "½ cucumber",
        "¼ onion, optional",
        "1 tbsp butter",
        "salt, pepper and chaat masala to taste"
      ]
    }
  },
  "Makhana Dry Fruit Barfi": {
    "serves": 6,
    "amounts": {
      "en": [
        "2 cups makhana",
        "½ cup chopped mixed nuts",
        "½ cup sugar",
        "¼ cup water",
        "1 tbsp ghee"
      ]
    }
  },
  "Sandesh": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 litre whole milk",
        "2 tbsp lemon juice diluted with 2 tbsp water",
        "¼ cup powdered sugar",
        "1 tbsp pistachios, optional"
      ]
    }
  },
  "Atta Modak": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup atta",
        "¾ cup fresh grated coconut",
        "½ cup grated jaggery",
        "¼ tsp cardamom",
        "about ¾ cup water",
        "1 tsp ghee",
        "pinch of salt"
      ]
    }
  },
  "Gujiya": {
    "serves": 5,
    "amounts": {
      "en": [
        "1½ cups maida",
        "3 tbsp ghee for dough",
        "about ½ cup water",
        "150 g mawa",
        "¼ cup sugar",
        "2 tbsp chopped nuts",
        "¼ tsp cardamom",
        "frying ghee or oil"
      ]
    }
  },
  "Kaddu Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "450 g peeled pumpkin",
        "2 tbsp ghee",
        "¼ cup sugar or grated jaggery",
        "¼ tsp cardamom, optional"
      ]
    }
  },
  "Shakarkandi Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "400 g sweet potatoes",
        "2 tbsp ghee",
        "3 tbsp sugar",
        "2–4 tbsp milk, optional"
      ]
    }
  },
  "Peanut Chikki": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup raw shelled peanuts",
        "½ cup grated jaggery",
        "1 tsp ghee"
      ]
    }
  },
  "Aloo Raita": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g boiled potato",
        "1 cup cold plain curd",
        "¼ tsp sendha namak"
      ]
    }
  },
  "Shikanji (Nimbu Pani)": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml cold drinking water",
        "2 tbsp lemon juice",
        "1 tbsp sugar or ¼ tsp sendha namak",
        "mint and ice, optional"
      ]
    }
  },
  "Masala Chaas": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup plain curd",
        "1 cup cold water",
        "¼ tsp sendha namak",
        "1 tbsp chopped mint or coriander, optional"
      ]
    }
  },
  "Sabudana Thalipeeth": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup sabudana",
        "200 g boiled potato",
        "⅓ cup roasted peanuts",
        "½ tsp sendha namak",
        "1 green chilli, optional",
        "1 tbsp ghee"
      ]
    }
  },
  "Singhare ki Puri": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup water chestnut flour",
        "150 g boiled potato",
        "½ tsp sendha namak",
        "water as needed",
        "permitted frying oil"
      ]
    }
  },
  "Farali Pattice": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potato",
        "2 tbsp water chestnut flour",
        "⅓ cup roasted peanuts",
        "2 tbsp grated coconut, optional",
        "½ tsp sendha namak",
        "2 tbsp ghee or permitted oil"
      ]
    }
  },
  "Kuttu Dosa": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup buckwheat flour",
        "¼ cup plain curd, optional",
        "¾–1 cup water, adjusted to batter consistency",
        "½ tsp sendha namak",
        "1 boiled potato, optional",
        "2 tsp ghee"
      ]
    }
  },
  "Chapati (Roti)": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "about ½ cup water",
        "pinch of salt",
        "2 tsp ghee, optional"
      ]
    }
  },
  "Steamed Rice": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup raw rice",
        "2 cups water for ordinary long-grain rice, or packet ratio for other varieties",
        "pinch of salt"
      ]
    }
  },
  "Jeera Rice": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup basmati rice",
        "1½ cups water",
        "1 tbsp ghee or oil",
        "1 tsp cumin seeds",
        "½ tsp salt"
      ]
    }
  },
  "Rice Cooker Rice + Tadka Dal": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup rice",
        "2 cups water for rice",
        "½ cup toor dal",
        "2 cups water for dal, plus as needed",
        "½ onion",
        "1 tomato",
        "1 tsp ginger",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "salt"
      ]
    }
  },
  "Kuttu Puri": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup buckwheat flour",
        "150 g boiled potato",
        "½ tsp sendha namak",
        "1 green chilli, optional",
        "water as needed",
        "permitted frying oil"
      ]
    }
  },
  "Singhare ke Atte ke Pakode": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 medium potatoes",
        "¾ cup water chestnut flour",
        "about ½ cup water",
        "½ tsp sendha namak",
        "chopped coriander and green chilli, optional",
        "permitted frying oil"
      ]
    }
  },
  "Samak Rice Khichdi": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup samak millet",
        "1¼ cups water",
        "1 small potato",
        "2 tbsp roasted peanuts",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "1 green chilli and 1 tsp lemon juice, optional"
      ]
    }
  },
  "Vrat Aloo Tikki": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g boiled potatoes",
        "2 tbsp water chestnut flour",
        "2 tbsp roasted peanut crumbs, optional",
        "½ tsp sendha namak",
        "2 tbsp ghee or permitted oil"
      ]
    }
  },
  "Vrat Kadhi": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup plain curd",
        "2 tbsp water chestnut flour",
        "1½ cups water",
        "½ tsp sendha namak",
        "1 green chilli, optional"
      ]
    }
  },
  "Makhana Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups makhana",
        "3 tomatoes",
        "1 tbsp ghee",
        "¼ cup plain curd, optional",
        "1 green chilli, optional",
        "½ tsp sendha namak",
        "about ½ cup water"
      ]
    }
  },
  "Kolhapuri Chicken": {
    "serves": 3,
    "amounts": {
      "en": [
        "500 g chicken pieces",
        "2 onions",
        "2 tomatoes",
        "1 tbsp ginger-garlic paste",
        "1–2 tbsp Kolhapuri masala",
        "2 dried red chillies, optional",
        "2 tbsp grated coconut",
        "1 tsp sesame seeds",
        "2 tbsp oil",
        "¼ tsp turmeric",
        "¾ tsp salt"
      ]
    }
  },
  "Dal Tadka": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup toor dal",
        "2 cups water",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 onion",
        "1 tomato",
        "2 garlic cloves",
        "1 tbsp ghee",
        "½ tsp cumin",
        "1 green chilli and coriander, optional"
      ]
    }
  },
  "Aloo Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1¼ cups atta",
        "about ½ cup water",
        "2 medium potatoes",
        "½ tsp each cumin and salt",
        "1 green chilli and 1 tbsp coriander, optional",
        "1 tbsp butter or ghee"
      ]
    }
  },
  "Bajra Roti with Lahsun Chutney": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup bajra flour",
        "½–⅔ cup warm water",
        "¼ tsp salt for dough",
        "6 garlic cloves",
        "1 green chilli",
        "1 tbsp lemon juice",
        "¼ tsp salt for chutney"
      ]
    }
  },
  "Cucumber Raita": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup plain curd",
        "1 small cucumber",
        "¼ tsp sendha namak"
      ]
    }
  },
  "Air Fryer Onion Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 onions",
        "¾ cup besan",
        "½ tsp each ajwain and salt",
        "1 green chilli, optional",
        "1–2 tbsp water if needed",
        "2 tsp oil"
      ]
    }
  },
  "Air Fryer Paneer Tikka": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "1 capsicum",
        "1 small onion",
        "¼ cup thick curd",
        "2 tsp tikka masala",
        "1 tbsp besan",
        "1 tsp oil",
        "¼ tsp salt"
      ]
    }
  },
  "Air Fryer Malai Broccoli": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g broccoli",
        "¼ cup thick curd",
        "2 tbsp grated cheese",
        "1 tsp ginger-garlic paste",
        "¼ tsp each salt and pepper",
        "1 tsp oil"
      ]
    }
  },
  "Air Fryer Aloo Tikki": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potatoes",
        "2 tbsp breadcrumbs or crushed poha",
        "¼ cup cooked peas, optional",
        "1 tbsp coriander",
        "½ tsp each cumin, garam masala and salt",
        "2 tsp oil"
      ]
    }
  },
  "Air Fryer Veg Samosa": {
    "serves": 4,
    "amounts": {
      "en": [
        "1½ cups maida",
        "3 tbsp oil for dough plus 1 tsp for brushing",
        "½ tsp each salt and ajwain",
        "about ⅓ cup water",
        "250 g boiled potato",
        "½ cup cooked peas",
        "½ tsp each cumin, amchur and garam masala"
      ]
    }
  },
  "Air Fryer Crispy Corn": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups cooked corn, well drained",
        "2 tbsp cornflour or besan",
        "1 tsp oil",
        "¼ tsp each salt and pepper",
        "½ tsp chaat masala",
        "1 tsp lemon juice"
      ]
    }
  },
  "Air Fryer Veg Cutlet": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g boiled potato",
        "½ cup cooked diced carrots, beans and peas",
        "½ cup breadcrumbs",
        "½ tsp each garam masala and salt",
        "2 tsp oil"
      ]
    }
  },
  "Air Fryer Bread Pakora": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 bread slices",
        "250 g boiled potato",
        "¾ cup besan",
        "½ tsp each ajwain and salt",
        "¼ tsp chilli powder",
        "about ½ cup water",
        "2 tsp oil"
      ]
    }
  },
  "Air Fryer Potato Wedges": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g potatoes",
        "1 tbsp oil",
        "½ tsp salt",
        "¼ tsp each black pepper and paprika"
      ]
    }
  },
  "Air Fryer French Fries": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g floury potatoes",
        "1 tbsp oil",
        "½ tsp salt"
      ]
    }
  },
  "Air Fryer Spring Rolls": {
    "serves": 4,
    "amounts": {
      "en": [
        "8 thin spring-roll wrappers",
        "180 g shredded cabbage",
        "1 carrot",
        "1 tbsp soy sauce",
        "¼ tsp pepper",
        "1 tbsp maida and 1 tbsp water for sealing",
        "2 tsp oil"
      ]
    }
  },
  "Ragi Malt": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tbsp ragi flour",
        "½ cup cold water",
        "1½ cups milk",
        "1–2 tbsp jaggery, optional"
      ]
    }
  },
  "Millet Pongal": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup millet",
        "¼ cup split yellow moong",
        "2¼ cups water",
        "1 tbsp ghee",
        "½ tsp each cumin seeds, crushed pepper and salt"
      ]
    }
  },
  "Millet Fried Rice": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup dry millet",
        "1½ cups water or packet amount",
        "1 carrot",
        "80 g French beans",
        "2 garlic cloves",
        "1 tbsp oil",
        "1 tbsp soy sauce",
        "¼ tsp black pepper"
      ]
    }
  },
  "Samai Upma": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup little millet",
        "1 small onion",
        "½ carrot",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "½ tsp salt",
        "1½ cups water or packet amount"
      ]
    }
  },
  "Sweet Potato Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g sweet potato",
        "¼ tsp sendha namak",
        "1 tbsp lemon juice and 1 tbsp coriander, optional"
      ]
    }
  },
  "Drumstick Soup": {
    "serves": 2,
    "amounts": {
      "en": [
        "3 drumstick pods",
        "1 small onion",
        "1 tomato",
        "500 ml water",
        "1 tsp ghee",
        "¼ tsp pepper",
        "½ tsp salt"
      ]
    }
  },
  "Chana Sundal": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup dried chickpeas",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "1 green chilli",
        "¼ cup grated coconut",
        "½ tsp salt"
      ]
    }
  },
  "Cucumber Cheese Sandwich": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 bread slices",
        "½ cucumber",
        "80 g cream cheese or thick hung curd",
        "¼ tsp each salt and pepper",
        "1 tbsp chopped herbs, optional"
      ]
    }
  },
  "Onion Tomato Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 onion",
        "2 tomatoes",
        "2 garlic cloves",
        "2 dried red chillies",
        "1½ tbsp oil, divided",
        "½ tsp salt",
        "½ tsp mustard seeds",
        "6 curry leaves"
      ]
    }
  },
  "Green Tomato Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 firm green tomatoes",
        "¼ cup coriander",
        "1 green chilli",
        "1 garlic clove",
        "¼ tsp salt",
        "1 tsp lemon juice or sugar, optional"
      ]
    }
  },
  "One Pot Rasam Rice": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup rice",
        "¼ cup toor dal",
        "2 tomatoes",
        "2½ cups water",
        "1 tsp rasam powder",
        "1 tsp tamarind pulp",
        "½ tsp salt",
        "1 tsp ghee",
        "½ tsp mustard seeds"
      ]
    }
  },
  "Poha Chivda": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 cups poha",
        "⅓ cup raw peanuts",
        "1 tbsp oil",
        "8 curry leaves",
        "1 green chilli",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    }
  },
  "Veg Kathi Roll": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup atta",
        "2 tbsp maida",
        "about ½ cup water",
        "2 boiled potatoes",
        "1 small onion",
        "½ capsicum",
        "½ tsp each chaat masala and salt",
        "1 tbsp oil"
      ]
    }
  },
  "Mini Suji Uttapam": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup suji",
        "½ cup curd",
        "about ½ cup water",
        "½ carrot",
        "½ small onion",
        "½ tsp salt",
        "2 tsp oil"
      ]
    }
  },
  "Suji Cheese Pizza Bites": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup suji",
        "½ cup curd",
        "about ⅓ cup water",
        "½ tsp salt",
        "3 tbsp pizza sauce",
        "70 g grated cheese",
        "1 tsp oil"
      ]
    }
  },
  "Besan Cheela Roll": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup besan",
        "about ¾ cup water",
        "½ tsp ajwain",
        "½ tsp salt",
        "125 g paneer",
        "½ small onion, optional",
        "2 tsp oil"
      ]
    }
  },
  "Banana Peanut Sandwich": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 bread slices",
        "1 large banana",
        "¼ cup roasted peanuts",
        "1 tbsp honey or jaggery syrup"
      ]
    }
  },
  "Egg Roll": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 prepared rotis",
        "2 eggs",
        "½ small onion",
        "¼ tsp each salt and pepper",
        "2 tsp oil",
        "2 tsp green chutney"
      ]
    }
  },
  "Air Fryer Gobi Manchurian": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g cauliflower",
        "2 tbsp each maida and cornflour",
        "3–4 tbsp water",
        "2 tsp oil",
        "2 garlic cloves",
        "½ onion",
        "1 tbsp each soy and chilli sauce",
        "¼ tsp each salt and pepper"
      ]
    }
  },
  "Air Fryer Tandoori Aloo": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g baby potatoes",
        "¼ cup thick curd",
        "2 tsp tikka masala",
        "½ tsp salt",
        "1 tsp oil"
      ]
    }
  },
  "Air Fryer Methi Mathri": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup maida",
        "2 tbsp oil",
        "1 tbsp kasuri methi",
        "½ tsp each ajwain and salt",
        "about ¼ cup water"
      ]
    }
  },
  "Air Fryer Namak Pare": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup maida",
        "2 tbsp oil",
        "½ tsp each ajwain and salt",
        "about ¼ cup water"
      ]
    }
  },
  "Air Fryer Veg Momos": {
    "serves": 3,
    "amounts": {
      "en": [
        "1½ cups maida",
        "about ½ cup water",
        "200 g cabbage",
        "1 carrot",
        "1 tsp ginger",
        "½ tsp salt",
        "2 tsp oil"
      ]
    }
  },
  "Dhuska": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup rice",
        "½ cup chana dal",
        "1 tsp grated ginger",
        "1 green chilli",
        "½ tsp salt",
        "¼–½ cup water for grinding as needed",
        "frying oil"
      ]
    }
  },
  "Thekua": {
    "serves": 4,
    "amounts": {
      "en": [
        "1½ cups atta",
        "½ cup jaggery",
        "¼ cup water",
        "2 tbsp ghee",
        "1 tsp fennel seeds",
        "frying oil"
      ]
    }
  },
  "Tilkut": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup white sesame seeds",
        "½ cup jaggery",
        "1 tbsp water"
      ]
    }
  },
  "Aloo Chokha": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potatoes",
        "1 small onion",
        "1 green chilli",
        "2 tbsp coriander",
        "2 tsp edible mustard oil",
        "½ tsp salt"
      ]
    }
  },
  "Dalma": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup toor dal",
        "200 g pumpkin",
        "100 g brinjal",
        "3 cups water",
        "1 tbsp ghee",
        "½ tsp panch phoron",
        "1 dried red chilli",
        "¼ tsp turmeric",
        "½ tsp salt",
        "2 tbsp grated coconut, optional"
      ]
    }
  },
  "Chhena Poda": {
    "serves": 6,
    "amounts": {
      "en": [
        "400 g fresh soft chhena",
        "110 g sugar",
        "2 tbsp fine suji",
        "2 tsp ghee for the tin",
        "¼ tsp cardamom",
        "2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Santula": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 potato",
        "150 g brinjal",
        "100 g beans",
        "1 carrot",
        "250 ml water",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tbsp oil",
        "½ tsp panch phoron",
        "2 garlic cloves",
        "2 tbsp milk, optional"
      ]
    }
  },
  "Aloo ke Gutke": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potatoes",
        "1½ tbsp oil",
        "½ tsp jakhiya or cumin",
        "1 dried red chilli",
        "pinch asafoetida",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    }
  },
  "Kafuli": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g spinach",
        "100 g fresh methi",
        "1½ tbsp rice flour",
        "½ cup water",
        "2 garlic cloves",
        "1 green chilli",
        "1 tbsp ghee",
        "½ tsp salt"
      ]
    }
  },
  "Chana Madra": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups cooked chickpeas",
        "1 cup full-fat curd",
        "1 tbsp besan",
        "1 tbsp ghee",
        "½ tsp cumin",
        "2 cloves",
        "1 cardamom pod",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    }
  },
  "Jhangora Kheer": {
    "serves": 4,
    "amounts": {
      "en": [
        "¼ cup barnyard millet",
        "650 ml whole milk",
        "¼ cup sugar",
        "¼ tsp cardamom",
        "2 tbsp sliced nuts"
      ]
    }
  },
  "Kashmiri Dum Aloo": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g baby potatoes",
        "¾ cup thick curd",
        "½ tsp each ground fennel and dry ginger",
        "½ tsp Kashmiri chilli powder",
        "½ tsp salt",
        "2 tbsp edible mustard oil",
        "½ cup water"
      ]
    }
  },
  "Kahwa": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 ml water",
        "2 tsp loose green tea",
        "1 small cinnamon stick",
        "2 cardamom pods",
        "4 saffron strands",
        "1 tbsp chopped almonds",
        "2 tsp sugar, optional"
      ]
    }
  },
  "Sol Kadhi": {
    "serves": 2,
    "amounts": {
      "en": [
        "8 dried kokum pieces",
        "1 cup grated coconut",
        "1½ cups water",
        "1 garlic clove",
        "1 green chilli",
        "¼ tsp salt"
      ]
    }
  },
  "Goan Prawn Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g raw peeled prawns",
        "½ cup grated coconut",
        "2 dried red chillies",
        "2 garlic cloves",
        "¼ tsp turmeric",
        "1 tbsp tamarind pulp",
        "½ tsp salt",
        "¾ cup water"
      ]
    }
  },
  "Aloo Pitika": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potatoes",
        "1 small onion",
        "1 green chilli",
        "2 tbsp coriander",
        "2 tsp edible mustard oil",
        "½ tsp salt"
      ]
    }
  },
  "Masor Tenga": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g firm fish steaks",
        "3 ripe tomatoes",
        "1 tsp ginger",
        "½ tsp turmeric",
        "½ tsp salt",
        "2 tbsp edible mustard oil",
        "1 cup water",
        "1 tbsp lemon juice"
      ]
    }
  },
  "Til Pitha": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup fine rice flour",
        "water as needed for shaping",
        "½ cup sesame seeds",
        "⅓ cup grated jaggery"
      ]
    }
  },
  "Kothimbir Vadi": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup besan",
        "1 packed cup chopped coriander",
        "1 green chilli",
        "½ tsp each cumin and salt",
        "¼ tsp turmeric",
        "about ½ cup water",
        "2 tbsp oil for shallow-frying"
      ]
    }
  },
  "Batata Bhaji": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potatoes",
        "1 small onion",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tbsp lemon juice"
      ]
    }
  },
  "Handvo": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 cups fermented rice-and-dal batter",
        "200 g grated squeezed bottle gourd",
        "1 tsp grated ginger",
        "1 green chilli",
        "½ tsp salt if batter is unsalted",
        "2 tbsp oil",
        "1 tsp sesame seeds"
      ]
    }
  },
  "Dabeli": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 pav",
        "300 g boiled potatoes",
        "2 tsp dabeli masala",
        "2 tbsp tamarind chutney",
        "¼ cup roasted peanuts",
        "¼ cup sev",
        "1 tbsp butter"
      ]
    }
  },
  "Methi na Gota": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup besan",
        "1 cup chopped fresh methi",
        "½ tsp each crushed coriander seeds and salt",
        "1 green chilli",
        "about ½ cup water",
        "frying oil"
      ]
    }
  },
  "Lasaniya Batata": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled baby potatoes",
        "5 garlic cloves",
        "1 tsp Kashmiri chilli powder",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1½ tbsp oil"
      ]
    }
  },
  "Mangodi Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup dried moong mangodi",
        "1 onion",
        "2 tomatoes",
        "1½ tbsp oil",
        "½ tsp each cumin and coriander powder",
        "¼ tsp turmeric",
        "½ tsp salt",
        "up to 1 cup water"
      ]
    }
  },
  "Besan Chakki": {
    "serves": 6,
    "amounts": {
      "en": [
        "1 cup besan",
        "½ cup ghee",
        "¾ cup sugar",
        "⅓ cup water",
        "¼ tsp cardamom, optional"
      ]
    }
  },
  "Dal Pakwan": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup chana dal",
        "2½ cups water for dal",
        "¼ tsp turmeric",
        "1 tbsp oil and ½ tsp cumin for tadka",
        "1½ cups maida",
        "½ tsp ajwain",
        "½ cup water as needed for dough",
        "salt",
        "frying oil"
      ]
    }
  },
  "Kuzhi Paniyaram": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups fermented idli batter",
        "1 small onion",
        "1 green chilli",
        "8 curry leaves",
        "2 tsp oil",
        "salt if batter is unsalted"
      ]
    }
  },
  "Ragi Mudde": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup ragi flour",
        "2 cups water",
        "¼ tsp salt"
      ]
    }
  },
  "Mor Kuzhambu": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup plain curd",
        "½ cup water",
        "½ cup grated coconut",
        "1 green chilli",
        "½ tsp cumin",
        "150 g okra, optional",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "½ tsp salt"
      ]
    }
  },
  "Beans Poriyal": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g French beans",
        "⅓ cup grated coconut",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "1 tsp urad dal",
        "8 curry leaves",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    }
  },
  "Pazham Pori": {
    "serves": 3,
    "amounts": {
      "en": [
        "2 ripe plantains",
        "¾ cup maida",
        "1 tbsp sugar",
        "¼ tsp turmeric",
        "pinch of salt",
        "about ½ cup water",
        "frying oil"
      ]
    }
  },
  "Luchi": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup maida",
        "2 tsp oil or ghee for dough",
        "¼ tsp salt",
        "about ⅓ cup water",
        "frying oil"
      ]
    }
  },
  "Ghugni": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup dried yellow peas",
        "1 small potato",
        "1 onion plus 2 tbsp chopped onion to serve",
        "1½ tbsp oil",
        "½ tsp each cumin and turmeric",
        "½ tsp salt",
        "½ lemon",
        "coriander"
      ]
    }
  },
  "Beguni": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g brinjal",
        "¾ cup besan",
        "2 tbsp rice flour",
        "½ tsp salt",
        "¼ tsp turmeric",
        "about ½ cup water",
        "frying oil"
      ]
    }
  },
  "Mishti Doi": {
    "serves": 4,
    "amounts": {
      "en": [
        "750 ml whole milk",
        "75 g sugar",
        "2 tbsp plain curd with live cultures"
      ]
    }
  },
  "Pinni": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup atta",
        "⅓ cup ghee",
        "½ cup finely grated jaggery or powdered sugar",
        "¼ cup chopped nuts"
      ]
    }
  },
  "Kokum Sharbat": {
    "serves": 2,
    "amounts": {
      "en": [
        "8 dried kokum pieces",
        "400 ml water, divided",
        "2 tbsp sugar",
        "¼ tsp black salt",
        "¼ tsp roasted cumin, optional"
      ]
    }
  },
  "Bel Sharbat": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup ripe bael pulp",
        "400 ml cold water",
        "1–2 tbsp jaggery",
        "black salt and lemon, optional"
      ]
    }
  },
  "Nannari Sharbat": {
    "serves": 2,
    "amounts": {
      "en": [
        "3 tbsp nannari syrup",
        "1½ tbsp lemon juice",
        "400 ml cold water",
        "ice",
        "1 tsp soaked sabja seeds, optional"
      ]
    }
  },
  "Jigarthanda (Madurai Style)": {
    "serves": 2,
    "amounts": {
      "en": [
        "500 ml whole milk",
        "2 tsp almond gum",
        "water for soaking",
        "2 tbsp nannari syrup",
        "2 tsp sugar",
        "2 scoops ice cream"
      ]
    }
  },
  "Mango Mastani": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g ripe mango flesh",
        "250 ml cold milk",
        "2 scoops vanilla ice cream",
        "1–2 tsp sugar, optional",
        "1 tbsp chopped pistachios"
      ]
    }
  },
  "Masala Sattu Chaas": {
    "serves": 2,
    "amounts": {
      "en": [
        "¼ cup roasted chana sattu",
        "200 g plain curd",
        "250 ml cold water",
        "½ tsp toasted cumin",
        "¼ tsp black salt",
        "chopped onion and coriander, optional"
      ]
    }
  },
  "Mirchi ka Salan": {
    "serves": 2,
    "amounts": {
      "en": [
        "6 mild long chillies",
        "3 tbsp peanuts",
        "1 tbsp each sesame and dry coconut",
        "1 tbsp tamarind pulp",
        "2 tbsp oil",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt",
        "¾ cup water"
      ]
    }
  },
  "Indori Khopra Patties": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potato",
        "½ cup desiccated coconut",
        "1 green chilli",
        "1 tbsp coriander",
        "½ cup breadcrumbs",
        "1 tbsp raisins, optional",
        "1 tbsp cashews, optional",
        "½ tsp salt",
        "2 tbsp oil"
      ]
    }
  },
  "Bhutte ka Kees": {
    "serves": 2,
    "amounts": {
      "en": [
        "3 fresh corn cobs",
        "½ cup milk",
        "1 tbsp ghee",
        "½ tsp mustard seeds",
        "1 green chilli",
        "½ tsp salt",
        "2 tbsp grated coconut and 1 tsp lemon juice, optional"
      ]
    }
  },
  "Dal Bafla": {
    "serves": 3,
    "amounts": {
      "en": [
        "1½ cups atta",
        "2 tbsp curd",
        "3 tbsp ghee, plus to serve",
        "about ½ cup water for dough",
        "¾ cup toor dal",
        "2½ cups water for dal",
        "¼ tsp turmeric",
        "½ tsp cumin",
        "2 garlic cloves",
        "salt"
      ]
    }
  },
  "Indori Poha with Jeeravan": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups thick poha",
        "1 small onion",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "¼ tsp turmeric",
        "½ tsp salt",
        "½ tsp jeeravan",
        "¼ cup sev",
        "lemon and pomegranate, optional"
      ]
    }
  },
  "Indori Garadu Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g peeled garadu yam",
        "oil for frying",
        "½ tsp jeeravan",
        "¼ tsp black salt",
        "1 tbsp lemon juice",
        "chopped coriander, optional"
      ]
    }
  },
  "Ratlami Sev": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup besan",
        "½ tsp each crushed black pepper and ajwain",
        "⅛ tsp ground clove",
        "½ tsp salt",
        "1 tbsp oil for dough",
        "about ¼ cup water",
        "frying oil"
      ]
    }
  },
  "Mawa Bati": {
    "serves": 5,
    "amounts": {
      "en": [
        "200 g mawa",
        "2 tbsp maida",
        "¼ tsp baking powder",
        "up to 2 tsp milk",
        "3 tbsp chopped nuts",
        "¾ cup sugar",
        "¾ cup water",
        "¼ tsp cardamom",
        "ghee or oil for frying"
      ]
    }
  },
  "Mawa Jalebi": {
    "serves": 4,
    "amounts": {
      "en": [
        "150 g mawa",
        "½ cup maida",
        "¼ cup plain curd",
        "2–4 tbsp water",
        "¾ cup sugar",
        "⅓ cup water for syrup",
        "¼ tsp cardamom",
        "ghee for frying"
      ]
    }
  },
  "Chakki ki Shaak": {
    "serves": 3,
    "amounts": {
      "en": [
        "2 cups atta",
        "water for kneading and washing",
        "¾ cup plain curd",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger",
        "1½ tbsp oil",
        "½ tsp garam masala",
        "½ tsp salt",
        "coriander to finish"
      ]
    }
  },
  "Bhopali Gosht Korma": {
    "serves": 3,
    "amounts": {
      "en": [
        "500 g goat or lamb pieces",
        "2 onions",
        "½ cup curd",
        "1 tbsp ginger-garlic paste",
        "2 tbsp ghee",
        "1 tsp garam masala",
        "12 cashews, optional",
        "¾ tsp salt",
        "½–1 cup hot water"
      ]
    }
  },
  "Shahi Shikanji (Indori)": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup thick plain curd",
        "¾ cup cold whole milk",
        "2 tbsp sugar",
        "6 saffron strands",
        "¼ tsp cardamom",
        "1 tbsp chopped nuts or ¼ cup rabri, optional"
      ]
    }
  },
  "Malpua Rabri (Malwa Style)": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup maida",
        "about ¾ cup milk",
        "½ tsp fennel",
        "½ cup sugar and ½ cup water for syrup",
        "¼ tsp cardamom",
        "ghee for shallow-frying",
        "¾ cup chilled rabri"
      ]
    }
  },
  "Matar ka Nimona": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups peas",
        "1 medium potato",
        "1 small onion",
        "1 tomato",
        "1 tsp ginger",
        "½ tsp cumin",
        "1 tbsp oil",
        "½ tsp salt",
        "¾ cup water",
        "coriander, optional"
      ]
    }
  },
  "Banarasi Chooda Matar": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups thick poha",
        "½ cup milk",
        "¾ cup peas",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp garam masala",
        "½ tsp salt",
        "1 tbsp coriander"
      ]
    }
  },
  "Banarasi Kachori Sabzi": {
    "serves": 3,
    "amounts": {
      "en": [
        "1½ cups atta",
        "½ cup split urad",
        "½ tsp each crushed fennel and salt",
        "pinch asafoetida",
        "1 green chilli",
        "about ½ cup water for dough",
        "350 g boiled potatoes",
        "2 tomatoes",
        "½ tsp turmeric",
        "1 tbsp oil plus frying oil"
      ]
    }
  },
  "Agra Bedai with Aloo Sabzi": {
    "serves": 3,
    "amounts": {
      "en": [
        "1½ cups atta",
        "½ cup split urad",
        "½ tsp crushed fennel",
        "pinch asafoetida",
        "1 green chilli",
        "½ tsp salt",
        "about ½ cup water for dough",
        "350 g boiled potato",
        "2 tomatoes",
        "1 tsp amchur",
        "1 tbsp oil plus frying oil"
      ]
    }
  },
  "Mathura Dubki Wale Aloo": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potato",
        "2 tomatoes",
        "1 tbsp oil",
        "½ tsp cumin",
        "pinch asafoetida",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 green chilli",
        "1½ cups water",
        "coriander, optional"
      ]
    }
  },
  "Tehri (UP Vegetable Rice)": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup basmati",
        "1 potato",
        "½ cup peas",
        "150 g cauliflower",
        "1 small carrot",
        "1 tbsp ghee",
        "½ tsp cumin",
        "½ tsp turmeric",
        "½ tsp garam masala",
        "¾ tsp salt",
        "1½ cups water"
      ]
    }
  },
  "Kanpuri Sultani Dal": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup toor dal",
        "2 cups fresh water",
        "½ cup milk",
        "2 tbsp cream",
        "1 tbsp ghee",
        "½ tsp cumin",
        "2 garlic cloves",
        "1 cardamom pod, optional",
        "½ tsp salt"
      ]
    }
  },
  "Lucknowi Galouti Kebab (Mutton)": {
    "serves": 3,
    "amounts": {
      "en": [
        "350 g finely minced lamb or goat",
        "1 tbsp raw papaya paste",
        "2 tbsp finely minced fried onion",
        "1 tbsp roasted besan",
        "1 tsp garam masala",
        "½ tsp salt",
        "2 tbsp ghee"
      ]
    }
  },
  "Awadhi Chicken Yakhni Pulao": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup basmati",
        "450 g bone-in chicken",
        "1 onion",
        "¼ cup curd",
        "3 cups water for stock",
        "1 cinnamon stick, 4 cloves, 3 green cardamom pods",
        "1 tsp ginger-garlic paste",
        "1 tbsp ghee",
        "¾ tsp salt"
      ]
    }
  },
  "Lucknowi Sheermal": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 g maida",
        "150 ml lukewarm milk",
        "6 saffron strands",
        "1 tsp instant yeast",
        "1½ tbsp sugar",
        "½ tsp salt",
        "30 g ghee",
        "1 tbsp milk to brush"
      ]
    }
  },
  "Banarasi Malaiyo": {
    "serves": 4,
    "amounts": {
      "en": [
        "500 ml whole milk",
        "2 tbsp sugar",
        "6 saffron strands",
        "¼ tsp cardamom",
        "1 tbsp chopped pistachios, optional"
      ]
    }
  },
  "Makkhan Malai (Lucknow)": {
    "serves": 4,
    "amounts": {
      "en": [
        "250 ml whole milk",
        "250 ml heavy cream",
        "3 tbsp powdered sugar",
        "6 saffron strands",
        "¼ tsp cardamom",
        "1 tbsp chopped pistachios"
      ]
    }
  },
  "Dal Pitha (Bihari)": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup rice flour",
        "about ¾ cup hot water",
        "½ cup chana dal",
        "1 tsp ginger",
        "1 green chilli",
        "½ tsp cumin",
        "½ tsp salt",
        "1 tbsp coriander, optional"
      ]
    }
  },
  "Bihari Chana Ghugni": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup dried black chickpeas",
        "1 onion",
        "2 tomatoes",
        "1 tsp ginger",
        "1 tbsp oil",
        "½ tsp cumin",
        "½ tsp salt",
        "½ lemon",
        "coriander, optional"
      ]
    }
  },
  "Bihari Dalpuri": {
    "serves": 3,
    "amounts": {
      "en": [
        "1½ cups atta",
        "about ⅔ cup water",
        "½ cup chana dal",
        "1 tsp ginger",
        "½ tsp cumin",
        "1 green chilli",
        "½ tsp salt",
        "2 tbsp oil"
      ]
    }
  },
  "Bihari Kadhi Badi": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup curd",
        "2 tbsp besan for kadhi plus ¾ cup for badi",
        "2½ cups water for kadhi",
        "¼ tsp turmeric",
        "½ tsp mustard seeds",
        "¾ tsp salt",
        "1 tbsp oil plus frying oil",
        "8 curry leaves, optional"
      ]
    }
  },
  "Bihari Parwal ki Mithai": {
    "serves": 4,
    "amounts": {
      "en": [
        "8 small pointed gourds",
        "¾ cup sugar and 1 cup water for syrup",
        "150 g mawa",
        "2 tbsp sugar for filling",
        "¼ tsp cardamom",
        "pistachios, optional"
      ]
    }
  },
  "Khaja (Bihari Layered Sweet)": {
    "serves": 5,
    "amounts": {
      "en": [
        "1½ cups maida",
        "1½ tbsp ghee plus 2 tbsp for layers",
        "2 tbsp cornflour",
        "about ½ cup water",
        "¾ cup sugar and ½ cup water for syrup",
        "¼ tsp cardamom",
        "frying oil"
      ]
    }
  },
  "Anarsa (Bihar Style)": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup fine rice flour",
        "½ cup grated jaggery",
        "2 tbsp poppy seeds",
        "¼ tsp cardamom, optional",
        "1–2 tsp water if needed",
        "ghee for shallow-frying"
      ]
    }
  },
  "Bihari Sattu Kachori": {
    "serves": 4,
    "amounts": {
      "en": [
        "1½ cups atta",
        "about ⅔ cup water",
        "¾ cup roasted chana sattu",
        "1 small onion",
        "1 tbsp edible mustard oil",
        "½ tsp each ajwain and salt",
        "1 tsp pickle masala, optional",
        "frying oil"
      ]
    }
  },
  "Bihari Fish Curry (Machhli Jhor)": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g firm fish",
        "2 tbsp edible mustard oil",
        "1½ tbsp mustard paste",
        "2 tomatoes",
        "½ tsp turmeric",
        "½ tsp salt",
        "¾ cup water",
        "1 green chilli, optional"
      ]
    }
  },
  "Bihari Chicken Champaran": {
    "serves": 3,
    "amounts": {
      "en": [
        "500 g chicken",
        "2 sliced onions",
        "6 cloves garlic",
        "¼ cup plain curd",
        "2 tbsp edible mustard oil",
        "1 cinnamon stick, 3 cloves and 2 cardamom pods",
        "½ tsp turmeric",
        "¾ tsp salt"
      ]
    }
  },
  "Bihari Rasiya Kheer": {
    "serves": 4,
    "amounts": {
      "en": [
        "¼ cup rice",
        "750 ml whole milk",
        "⅓ cup grated jaggery",
        "¼ tsp cardamom",
        "2 tbsp chopped cashews and raisins, optional"
      ]
    }
  },
  "Bihari Sattu Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup roasted chana sattu",
        "½ cup powdered jaggery",
        "¼ cup ghee",
        "¼ tsp cardamom",
        "2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Karnataka Akki Roti": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup rice flour",
        "about ¾ cup hot water",
        "½ small onion",
        "1 green chilli",
        "2 tbsp coriander",
        "½ tsp each cumin and salt",
        "2 tsp oil"
      ]
    }
  },
  "Neer Dosa": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup raw rice",
        "1½–2 cups fresh water for grinding and thinning",
        "½ tsp salt",
        "2 tsp coconut oil"
      ]
    }
  },
  "Set Dosa": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup dosa rice",
        "¼ cup split skinned urad",
        "¼ cup thick poha",
        "¼ tsp fenugreek seeds",
        "½ tsp salt",
        "about ¾ cup fresh water for grinding",
        "2 tsp butter or oil"
      ]
    }
  },
  "Mysore Masala Dosa": {
    "serves": 3,
    "amounts": {
      "en": [
        "2 cups fermented dosa batter",
        "300 g boiled potatoes",
        "1 onion",
        "1 tbsp oil",
        "½ tsp each mustard seeds, turmeric and salt",
        "3 dried red chillies",
        "2 garlic cloves",
        "1 tbsp roasted chana dal",
        "2 tsp butter, optional"
      ]
    }
  },
  "Rava Pongal": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup suji",
        "¼ cup yellow moong",
        "2¾ cups water, divided",
        "2 tbsp ghee",
        "½ tsp each cumin, crushed black pepper and salt",
        "1 tsp ginger",
        "8 cashews, optional"
      ]
    }
  },
  "Ven Pongal": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup rice",
        "¼ cup yellow moong",
        "2½ cups water",
        "2 tbsp ghee",
        "½ tsp each cumin, crushed black pepper and salt",
        "1 tsp ginger",
        "8 curry leaves and 8 cashews, optional"
      ]
    }
  },
  "Kerala Kadala Curry": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup dried black chickpeas",
        "½ cup fresh grated coconut",
        "1 onion",
        "2 tomatoes",
        "1 tbsp coconut oil",
        "1 tsp coriander powder",
        "½ tsp salt",
        "8 curry leaves"
      ]
    }
  },
  "Kerala Vegetable Stew": {
    "serves": 3,
    "amounts": {
      "en": [
        "400 g mixed potatoes, carrots, peas and beans",
        "250 ml coconut milk",
        "1 onion",
        "1 tsp ginger",
        "1 cinnamon stick",
        "2 cardamom pods",
        "½ tsp salt",
        "1 tbsp coconut oil",
        "8 curry leaves"
      ]
    }
  },
  "Tamil Nadu Kootu": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g bottle gourd",
        "½ cup split yellow moong",
        "2 cups water",
        "¼ cup grated coconut",
        "½ tsp cumin",
        "1 green chilli",
        "½ tsp salt",
        "1 tsp oil",
        "½ tsp mustard seeds and 6 curry leaves"
      ]
    }
  },
  "Andhra Gongura Pachadi": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 packed cups gongura leaves",
        "3 garlic cloves",
        "3 dried red chillies",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "½ tsp salt",
        "1 tsp sesame, optional"
      ]
    }
  },
  "Andhra Pappu Charu": {
    "serves": 3,
    "amounts": {
      "en": [
        "½ cup toor dal",
        "2½ cups water",
        "1 tbsp tamarind pulp",
        "2 tomatoes",
        "¼ tsp turmeric",
        "½ tsp salt",
        "1 tbsp oil",
        "½ tsp mustard seeds",
        "8 curry leaves",
        "2 garlic cloves"
      ]
    }
  },
  "Hyderabadi Bagara Baingan": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g baby brinjals",
        "3 tbsp peanuts",
        "1 tbsp each sesame and dry coconut",
        "1 onion",
        "1 tbsp tamarind pulp",
        "2 tbsp oil",
        "½ tsp salt",
        "¾ cup water",
        "8 curry leaves"
      ]
    }
  },
  "Andhra Gutti Vankaya": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g baby brinjals",
        "3 tbsp roasted peanuts",
        "1 tbsp sesame",
        "1 tbsp grated coconut, optional",
        "2 dried red chillies",
        "½ tsp coriander seeds",
        "1 tbsp tamarind pulp",
        "½ tsp salt",
        "2 tbsp oil",
        "½ cup water"
      ]
    }
  },
  "Tamil Nadu Adai Dosa": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup rice",
        "¼ cup each chana and toor dal",
        "2 tbsp urad dal",
        "2 dried red chillies",
        "½ tsp salt",
        "about ¾ cup water for grinding",
        "6 curry leaves",
        "2 tbsp oil"
      ]
    }
  },
  "Kerala Puttu": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup roasted puttu rice flour",
        "about ⅓ cup water",
        "½ cup grated coconut",
        "¼ tsp salt"
      ]
    }
  },
  "Karnataka Maddur Vada": {
    "serves": 3,
    "amounts": {
      "en": [
        "½ cup maida",
        "¼ cup each rice flour and suji",
        "1 onion",
        "1 green chilli",
        "6 curry leaves",
        "½ tsp salt",
        "1 tbsp hot oil for dough",
        "frying oil"
      ]
    }
  },
  "Karnataka Ragi Malt (Sweet)": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tbsp ragi flour",
        "1 cup water",
        "1 cup milk",
        "1–2 tbsp grated jaggery",
        "pinch of cardamom",
        "1 tbsp chopped nuts, optional"
      ]
    }
  },
  "Punjabi Amritsari Fish Fry": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g fish fillets",
        "½ cup besan",
        "1 tbsp lemon juice",
        "1 tsp ginger-garlic paste",
        "½ tsp each ajwain and salt",
        "¼ tsp chilli powder",
        "¼ cup water, as needed",
        "frying oil"
      ]
    }
  },
  "Amritsari Chole": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup dried chickpeas",
        "1 tea bag or 1 tsp black tea in muslin",
        "1 onion",
        "2 tomatoes",
        "1 tsp grated ginger",
        "1½ tbsp oil",
        "2 tsp chole masala",
        "½ tsp anardana powder, optional",
        "½ tsp salt"
      ]
    }
  },
  "Punjabi Pindi Chole": {
    "serves": 3,
    "amounts": {
      "en": [
        "¾ cup dried chickpeas",
        "1 tea bag, optional",
        "1½ tbsp oil",
        "1 tsp coriander seeds",
        "½ tsp cumin",
        "1 tsp ground anardana",
        "1 tsp ginger",
        "1 green chilli",
        "½ tsp salt"
      ]
    }
  },
  "Tandoori Mushroom Tikka": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g button mushrooms",
        "¼ cup thick curd",
        "1 tbsp besan",
        "2 tsp tandoori masala",
        "1 tsp ginger-garlic paste",
        "1 tsp oil",
        "½ tsp salt",
        "½ capsicum and ½ onion, optional"
      ]
    }
  },
  "Dahi ke Kebab": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g well-drained hung curd",
        "75 g paneer",
        "2 tbsp roasted besan",
        "1 green chilli",
        "1 tbsp coriander",
        "½ tsp garam masala",
        "½ tsp salt",
        "¼ cup breadcrumbs",
        "2 tbsp oil"
      ]
    }
  },
  "Nawabi Paneer Korma": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "12 cashews",
        "1 onion",
        "½ cup plain curd",
        "2 tbsp cream",
        "1 tbsp ghee",
        "½ tsp garam masala",
        "2 cardamom pods",
        "½ tsp salt"
      ]
    }
  },
  "Mushroom Do Pyaza": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g mushrooms",
        "2 onions",
        "2 tomatoes",
        "1 tsp ginger-garlic paste",
        "1½ tbsp oil",
        "½ tsp each garam masala and salt",
        "½ capsicum, optional"
      ]
    }
  },
  "Tawa Soya Chaap": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g drained soya chaap",
        "¼ cup thick curd",
        "1 tsp ginger-garlic paste",
        "2 tsp tandoori masala",
        "1 tbsp oil",
        "½ tsp salt",
        "1 tsp lemon juice, optional"
      ]
    }
  },
  "Soya Chaap Masala": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g drained soya chaap",
        "1 onion",
        "2 tomatoes",
        "¼ cup plain curd",
        "1 tsp ginger-garlic paste",
        "1½ tbsp oil",
        "½ tsp garam masala",
        "½ tsp salt",
        "2 tbsp cream, optional"
      ]
    }
  },
  "Mughlai Egg Curry": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 eggs",
        "1 onion",
        "12 cashews",
        "½ cup plain curd",
        "1 tsp ginger-garlic paste",
        "1 tbsp ghee",
        "½ tsp each garam masala and salt",
        "2 tbsp cream, optional"
      ]
    }
  },
  "Chicken Seekh Kebab": {
    "serves": 3,
    "amounts": {
      "en": [
        "400 g minced chicken",
        "½ small onion, grated and squeezed",
        "1 tsp ginger-garlic paste",
        "1 tsp garam masala",
        "2 tbsp roasted besan",
        "2 tbsp chopped coriander or mint",
        "¾ tsp salt",
        "2 tsp oil"
      ]
    }
  },
  "Kashmiri Haak Saag": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g haak or collard greens",
        "1 tbsp edible mustard oil",
        "pinch of asafoetida",
        "2 dried red chillies",
        "¾ cup water",
        "½ tsp salt"
      ]
    }
  },
  "Kashmiri Nadru Yakhni": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g lotus stem",
        "1 cup plain curd",
        "1 tsp fennel powder",
        "½ tsp dry ginger powder",
        "1 tbsp ghee",
        "2 crushed cardamom pods, optional",
        "½ tsp salt"
      ]
    }
  },
  "Rajasthani Papad ki Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 plain urad papads, roasted",
        "1 cup plain curd",
        "1 tbsp besan",
        "¾ cup water",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "salt to taste"
      ]
    }
  },
  "Rajasthani Govind Gatte": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup besan",
        "100 g paneer",
        "1 cup curd plus 2 tbsp for dough",
        "2 tbsp ghee",
        "1 tsp coriander powder",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "¾ tsp salt"
      ]
    }
  },
  "Bajre ki Khichdi": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup cracked bajra",
        "¼ cup yellow moong",
        "2½ cups fresh water",
        "1 tbsp ghee",
        "½ tsp cumin",
        "¼ tsp turmeric",
        "½ tsp salt"
      ]
    }
  },
  "Marwari Methi Bajra Thepla": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup bajra flour",
        "½ cup atta",
        "¾ cup chopped methi",
        "¼ cup curd",
        "½ tsp each ajwain and salt",
        "1 tsp sesame, optional",
        "2 tsp oil"
      ]
    }
  },
  "Rajasthani Raab (Bajra Drink)": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 tbsp bajra flour",
        "1 cup plain buttermilk",
        "1 cup water",
        "¼ tsp salt",
        "¼ tsp cumin and 1 tsp ghee, optional"
      ]
    }
  },
  "Rajgira Puri": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup amaranth flour",
        "1 small boiled potato",
        "½ tsp sendha namak",
        "water as needed",
        "permitted frying oil"
      ]
    }
  },
  "Rajgira Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup amaranth flour",
        "1 boiled potato",
        "½ tsp sendha namak",
        "water as needed",
        "1 green chilli, optional",
        "1 tbsp ghee"
      ]
    }
  },
  "Kuttu Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup buckwheat flour",
        "1 boiled potato",
        "½ tsp sendha namak",
        "water as needed",
        "1 tbsp ghee",
        "1 tbsp coriander, optional"
      ]
    }
  },
  "Singhara Paratha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup water chestnut flour",
        "1 boiled potato",
        "½ tsp sendha namak",
        "1 green chilli, optional",
        "water as needed",
        "1 tbsp ghee"
      ]
    }
  },
  "Samak Idli": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup samak millet",
        "¼ cup sabudana",
        "½ cup plain curd",
        "½ tsp sendha namak",
        "1 tsp ghee for the moulds",
        "water as needed"
      ]
    }
  },
  "Samak Dhokla": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup samak millet",
        "½ cup plain curd",
        "½ tsp sendha namak",
        "1 green chilli, optional",
        "1 tsp ghee",
        "1 tbsp coriander, optional"
      ]
    }
  },
  "Farali Dosa": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup samak millet",
        "¼ cup sabudana",
        "¼ cup plain curd",
        "½ tsp sendha namak",
        "about ¾ cup fresh water, as needed",
        "2 tsp ghee"
      ]
    }
  },
  "Samak Uttapam": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup samak millet",
        "½ cup curd",
        "½ tsp sendha namak",
        "1 green chilli and 1 tbsp coriander, optional",
        "2 tsp ghee"
      ]
    }
  },
  "Rajgira Thalipeeth": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup amaranth flour",
        "1 boiled potato",
        "½ tsp sendha namak",
        "water as needed",
        "1 tbsp coriander, optional",
        "1 tbsp ghee"
      ]
    }
  },
  "Kuttu Khichdi": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup buckwheat groats",
        "1 potato",
        "2 cups water",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "2 tbsp roasted peanuts and ½ lemon, optional"
      ]
    }
  },
  "Samak Pulao": {
    "serves": 3,
    "amounts": {
      "en": [
        "1 cup samak millet",
        "1 potato",
        "2 cups water",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "2 tbsp roasted peanuts and ½ tsp cumin, optional"
      ]
    }
  },
  "Dahi Samak": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup samak millet",
        "1¼ cups water",
        "¾ cup plain curd",
        "½ tsp sendha namak",
        "1 tbsp coriander or pinch of black pepper, optional"
      ]
    }
  },
  "Dahi Arbi": {
    "serves": 2,
    "amounts": {
      "en": [
        "250 g arbi",
        "¾ cup plain curd",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "¼ tsp black pepper, optional"
      ]
    }
  },
  "Farali Arbi Fry": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g arbi",
        "1½ tbsp ghee",
        "½ tsp sendha namak",
        "½ tsp cumin and 1 tsp lemon juice, optional"
      ]
    }
  },
  "Dahi Aloo": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 medium potatoes",
        "¾ cup plain curd",
        "¼ cup water",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "½ tsp cumin and 1 green chilli, optional"
      ]
    }
  },
  "Vrat Aloo Tamatar": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 medium potatoes",
        "2 tomatoes",
        "¾ cup water",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "½ tsp cumin or 1 green chilli, optional"
      ]
    }
  },
  "Farali Sukhi Bhaji": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potatoes",
        "¼ cup roasted peanuts",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "2 tbsp grated coconut and 1 tsp lemon juice, optional"
      ]
    }
  },
  "Farali Suran Khichdi": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g peeled elephant foot yam",
        "¼ cup roasted peanuts",
        "1 tbsp ghee",
        "1 tbsp lemon juice",
        "½ tsp sendha namak"
      ]
    }
  },
  "Farali Suran Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g peeled elephant foot yam",
        "1 tbsp ghee",
        "1 tbsp lemon juice, divided",
        "½ tsp sendha namak",
        "½ tsp cumin, optional"
      ]
    }
  },
  "Vrat Sweet Potato Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g sweet potato",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "¼ cup water",
        "black pepper and lemon juice, optional"
      ]
    }
  },
  "Rajgira Kadhi": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup plain curd",
        "2 tbsp amaranth flour",
        "1½ cups water",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "½ tsp cumin and 1 green chilli, optional"
      ]
    }
  },
  "Vrat Kaddu Sabzi": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g pumpkin",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "¼ cup water",
        "½ tsp cumin, 1 tsp lemon juice and 1 tsp jaggery, optional"
      ]
    }
  },
  "Vrat Paneer Bhurji": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g paneer",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "½ tsp cumin, 1 green chilli and 1 tbsp coriander, optional"
      ]
    }
  },
  "Dahi Sabudana": {
    "serves": 2,
    "amounts": {
      "en": [
        "½ cup sabudana",
        "½ cup soaking water, or packet ratio",
        "1 cup plain curd",
        "¼ cup roasted peanuts",
        "1 tsp ghee",
        "½ tsp sendha namak",
        "1 green chilli, optional"
      ]
    }
  },
  "Sabudana Pakoda": {
    "serves": 2,
    "amounts": {
      "en": [
        "¾ cup sabudana",
        "200 g boiled potatoes",
        "⅓ cup roasted peanuts",
        "½ tsp sendha namak",
        "1 green chilli, optional",
        "permitted frying oil"
      ]
    }
  },
  "Sabudana Chivda": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup dry large frying sabudana",
        "¼ cup raw peanuts",
        "½ tsp sendha namak",
        "2 tbsp mixed nuts or raisins, optional",
        "permitted frying oil"
      ]
    }
  },
  "Farali Batata Vada": {
    "serves": 2,
    "amounts": {
      "en": [
        "300 g boiled potatoes",
        "¾ cup water chestnut flour",
        "about ½ cup water",
        "½ tsp sendha namak",
        "1 green chilli and 1 tbsp coriander, optional",
        "permitted frying oil"
      ]
    }
  },
  "Sweet Potato Tikki": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g sweet potato",
        "3 tbsp water chestnut flour",
        "1 tbsp ghee",
        "½ tsp sendha namak",
        "pinch of pepper and 1 tsp lemon juice, optional"
      ]
    }
  },
  "Kele Ka Kofta": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 raw plantains",
        "2 tbsp water chestnut flour",
        "3 tomatoes",
        "2 tbsp ghee, divided",
        "½ tsp sendha namak",
        "½ cup water",
        "1 green chilli, optional"
      ]
    }
  },
  "Vrat Aloo Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "350 g boiled potatoes",
        "1½ tbsp ghee",
        "1 tbsp lemon juice",
        "½ tsp sendha namak",
        "black pepper and coriander, optional"
      ]
    }
  },
  "Farali Peanut Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "½ cup roasted peanuts",
        "½ cup plain curd",
        "¼ tsp sendha namak",
        "1 green chilli and 1 tsp lemon juice, optional",
        "water as needed"
      ]
    }
  },
  "Vrat Coconut Chutney": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup fresh grated coconut",
        "¼ cup coriander",
        "1 tbsp lemon juice",
        "¼ tsp sendha namak",
        "1 green chilli, optional",
        "¼–⅓ cup cold water"
      ]
    }
  },
  "Vrat Beetroot Raita": {
    "serves": 2,
    "amounts": {
      "en": [
        "120 g beetroot",
        "1 cup plain curd",
        "¼ tsp sendha namak",
        "black pepper, optional"
      ]
    }
  },
  "Vrat Lauki Raita": {
    "serves": 2,
    "amounts": {
      "en": [
        "150 g bottle gourd",
        "1 cup plain curd",
        "¼ tsp sendha namak",
        "roasted cumin or black pepper, optional"
      ]
    }
  },
  "Vrat Fruit Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 apple",
        "1 banana",
        "½ cup pomegranate arils, optional",
        "1 tbsp lemon juice",
        "black pepper or sendha namak, optional"
      ]
    }
  },
  "Rajgira Kheer": {
    "serves": 4,
    "amounts": {
      "en": [
        "¼ cup whole amaranth",
        "¾ cup water",
        "1½ cups whole milk",
        "3 tbsp sugar",
        "2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Samak Kheer": {
    "serves": 4,
    "amounts": {
      "en": [
        "¼ cup samak millet",
        "2 cups whole milk",
        "3 tbsp sugar",
        "2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Lauki Kheer": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup grated bottle gourd",
        "2 cups whole milk",
        "1 tbsp ghee",
        "3 tbsp sugar",
        "2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Kaddu Kheer": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup grated pumpkin",
        "2 cups whole milk",
        "1 tbsp ghee",
        "3 tbsp sugar",
        "2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Papaya Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 cups mashed ripe papaya",
        "2 tbsp ghee",
        "2–3 tbsp sugar",
        "2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Vrat Lauki Halwa": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 cups grated bottle gourd",
        "1 cup whole milk",
        "1 tbsp ghee",
        "¼ cup sugar",
        "2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Rajgira Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 cups puffed amaranth",
        "½ cup grated jaggery",
        "1 tbsp water",
        "1 tsp ghee, optional"
      ]
    }
  },
  "Vrat Peanut Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup roasted peanuts",
        "½ cup grated jaggery",
        "1 tsp ghee, if needed"
      ]
    }
  },
  "Farali Dry Fruit Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup pitted dates",
        "1 cup mixed nuts",
        "1 tbsp ghee",
        "2 tbsp grated coconut, optional"
      ]
    }
  },
  "Makhana Ladoo": {
    "serves": 4,
    "amounts": {
      "en": [
        "2 cups makhana",
        "¼ cup grated jaggery",
        "2 tbsp ghee, plus more if needed",
        "2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Panchamrit": {
    "serves": 4,
    "amounts": {
      "en": [
        "½ cup whole milk",
        "2 tbsp plain curd",
        "1 tsp each honey, sugar and melted ghee",
        "1 washed tulsi leaf, optional"
      ]
    }
  },
  "Kesar Badam Doodh": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups milk",
        "2 tbsp almonds",
        "6 saffron strands",
        "2 tsp sugar, optional"
      ]
    }
  },
  "Kala Chana Chaat": {
    "serves": 3,
    "amounts": {
      "en": [
        "2 cups cooked black chickpeas",
        "1 small boiled potato",
        "1 small onion",
        "1 tomato",
        "½ cucumber",
        "1 tsp chaat masala",
        "1 tbsp lemon juice",
        "1 tsp oil",
        "ginger, chilli and chopped coriander to taste"
      ]
    }
  },
  "No-Oil Paneer Mayo": {
    "serves": 4,
    "amounts": {
      "en": [
        "100 g paneer",
        "¼ cup cashews",
        "3–6 tbsp milk",
        "1 tbsp lemon juice",
        "¼ tsp salt",
        "1 garlic clove and a pinch of black pepper, optional"
      ]
    }
  },
  "Chocolate Honey Spread": {
    "serves": 4,
    "amounts": {
      "en": [
        "½ cup honey",
        "2 tbsp unsweetened cocoa",
        "¼ tsp vanilla extract, optional"
      ]
    }
  },
  "Grilled Masala Paneer Bowl": {
    "serves": 2,
    "amounts": {
      "en": [
        "225 g paneer",
        "1 cup thick plain curd",
        "1 carrot",
        "1 small cucumber",
        "1 tbsp edible mustard oil",
        "1 garlic clove",
        "¼ tsp each black pepper and black salt",
        "½ tsp kasuri methi, optional"
      ]
    }
  },
  "Fruit & Curd Cup": {
    "serves": 2,
    "amounts": {
      "en": [
        "1½ cups thick plain curd",
        "½ apple",
        "1 banana",
        "¼ cup pomegranate arils",
        "2 tsp honey and 2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Dahi Poha": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup thick poha",
        "1 cup plain curd",
        "¼ tsp salt",
        "½ cucumber",
        "2 tbsp roasted peanuts",
        "chopped coriander or green chilli, optional"
      ]
    }
  },
  "Peanut Masala Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 cup roasted peanuts",
        "1 small onion",
        "1 firm tomato",
        "1 tbsp lemon juice",
        "½ tsp chaat masala",
        "1 green chilli and 1 tbsp coriander, optional"
      ]
    }
  },
  "Jhalmuri (Kolkata Puffed Rice)": {
    "serves": 2,
    "amounts": {
      "en": [
        "2 cups murmura",
        "¼ cup roasted peanuts",
        "1 small onion",
        "1 firm tomato",
        "1 green chilli",
        "½ tsp chaat masala",
        "1 tsp edible mustard oil",
        "1 tbsp lemon juice",
        "2 tbsp sev, optional"
      ]
    }
  },
  "Peanut Butter Banana Sandwich": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 bread slices",
        "1 banana",
        "3 tbsp peanut butter",
        "1 tsp honey, optional"
      ]
    },
    "steps": {
      "en": [
        "Spread peanut butter evenly on all four bread slices, stopping a little short of the edges.",
        "Slice the banana about 5 mm thick. Layer it on two slices and drizzle with honey if using.",
        "Close and press the sandwiches gently. Slice and serve right away, or wrap tightly and refrigerate until serving."
      ]
    }
  },
  "Mint Cheese Cucumber Sandwich": {
    "serves": 2,
    "amounts": {
      "en": [
        "4 bread slices",
        "4 cheese slices",
        "½ cup mint leaves",
        "½ cucumber",
        "1 small tomato, optional",
        "1 tbsp butter",
        "pinch of salt"
      ]
    }
  },
  "Date & Nut Energy Balls": {
    "serves": 4,
    "amounts": {
      "en": [
        "¾ cup soft pitted dates",
        "¾ cup mixed nuts",
        "1 tbsp cocoa, optional",
        "2 tbsp desiccated coconut for coating"
      ]
    }
  },
  "Sattu Ladoo (No-Cook)": {
    "serves": 4,
    "amounts": {
      "en": [
        "1 cup roasted chana sattu",
        "½ cup finely grated jaggery",
        "¼ cup melted ghee",
        "2 tbsp chopped nuts, optional"
      ]
    }
  },
  "Watermelon Mint Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "400 g seedless watermelon",
        "8 mint leaves",
        "1 tsp lemon juice",
        "¼ tsp each black salt and chaat masala, optional"
      ]
    }
  },
  "Carrot Beetroot Salad": {
    "serves": 2,
    "amounts": {
      "en": [
        "1 carrot",
        "1 small beetroot",
        "1 tbsp lemon juice",
        "¼ tsp each salt and black pepper",
        "2 tbsp roasted peanuts and 1 tbsp coriander, optional"
      ]
    }
  },
  "Raw Paneer Chaat": {
    "serves": 2,
    "amounts": {
      "en": [
        "200 g fresh pasteurised paneer",
        "1 small onion",
        "1 firm tomato",
        "½ capsicum, optional",
        "1 tbsp lemon juice",
        "½ tsp chaat masala",
        "1 tbsp coriander"
      ]
    }
  }
};
