/* North and central Indian vegetarian street-food recipes, 27 November 2026.
 * Source names, measured ingredients and cooking methods are authored in English.
 * The matching offline Hindi strings are in north-chaat-hindi.js.
 */
const NORTH_CHAAT_RECIPES = [
  [
    "Delhi Bhalla Papdi Chaat",
    "North Indian",
    "dahi-vada.webp",
    [
      "urad",
      "papdi",
      "curd",
      "greenchutney",
      "tamarindchutney",
      "chaatmasala"
    ],
    "½ cup soaked urad dal; 8 papdi; ½ cup curd; 1 tbsp each chutney; ½ tsp chaat masala",
    "Grind drained urad dal, beat until airy and fry small bhallas until golden; soak briefly in warm water and squeeze gently. Arrange with papdi, whisked curd, chutneys and chaat masala."
  ],
  [
    "Delhi Chole Tikki Chaat",
    "North Indian",
    "aloo-tikki-chaat.webp",
    [
      "boiledpotato",
      "cookedchickpeas",
      "onion",
      "greenchutney",
      "chaatmasala"
    ],
    "2 boiled potatoes; ¾ cup cooked chickpeas; ¼ onion; 2 tbsp green chutney; ½ tsp chaat masala",
    "Mash potato with salt, form four patties and shallow-fry on a hot tawa until both sides are crisp. Warm fully cooked chickpeas with a splash of water, spoon over tikki and finish with onion, chutney and chaat masala."
  ],
  [
    "Old Delhi Chana Jor Garam",
    "North Indian",
    "chana-chaat.webp",
    [
      "chanajorgaram",
      "onion",
      "tomato",
      "lemon",
      "chaatmasala"
    ],
    "1 cup ready-to-eat chana jor garam; ¼ onion; ½ tomato; 1 tsp lemon juice; ¼ tsp chaat masala",
    "Finely chop onion and deseeded tomato. Toss with crispy chana jor garam, lemon and chaat masala just before eating so the flakes remain crunchy."
  ],
  [
    "Delhi Moonglet Chaat",
    "North Indian",
    "besan-cheela-roll.webp",
    [
      "moong",
      "onion",
      "gchilli",
      "curd",
      "chaatmasala"
    ],
    "½ cup moong dal soaked 2 hours; ¼ onion; 1 green chilli; 3 tbsp curd; ¼ tsp chaat masala",
    "Drain and grind dal to a thick batter, fold in chopped onion and chilli and cook a thick pancake covered on a greased tawa until set; flip to brown. Slice and serve with curd and chaat masala."
  ],
  [
    "Delhi Chur Chur Kulcha Chaat",
    "North Indian",
    "amritsari-chole.webp",
    [
      "kulcha",
      "cookedchickpeas",
      "butter",
      "onion",
      "lemon"
    ],
    "2 cooked kulchas; ¾ cup fully cooked chickpeas; 1 tsp butter; ¼ onion; 1 tsp lemon juice",
    "Toast cooked kulchas in butter and crush into bite-size flakes. Warm chickpeas with salt and a little water until saucy, then toss with kulcha pieces, onion and lemon immediately before serving."
  ],
  [
    "Delhi Corn Masala Cup",
    "North Indian",
    "corn-chaat.webp",
    [
      "corn",
      "butter",
      "lemon",
      "chaatmasala",
      "gchilli"
    ],
    "1 cup cooked sweet corn; 1 tsp butter; 1 tsp lemon juice; ¼ tsp chaat masala; ½ green chilli",
    "Steam the corn until tender and drain completely. Toss hot kernels with butter, finely chopped chilli, lemon and chaat masala; serve warm in cups."
  ],
  [
    "Agra Dahi Bhalla Chaat",
    "North Indian",
    "dahi-vada.webp",
    [
      "urad",
      "curd",
      "tamarindchutney",
      "cumin",
      "chaatmasala"
    ],
    "½ cup urad dal soaked 4 hours; ¾ cup curd; 2 tbsp tamarind chutney; ¼ tsp roasted cumin; ¼ tsp chaat masala",
    "Grind soaked dal with minimal water, beat until light and deep-fry spoonfuls until cooked through. Soak in warm water, squeeze, then cover with beaten curd, tamarind chutney, cumin and chaat masala."
  ],
  [
    "Kanpur Basket Chaat",
    "North Indian",
    "aloo-katori-chaat.webp",
    [
      "potato",
      "boiledpotato",
      "cookedchickpeas",
      "curd",
      "tamarindchutney"
    ],
    "1 grated raw potato; 1 boiled potato; ½ cup cooked chickpeas; ¼ cup curd; 2 tbsp tamarind chutney",
    "Press squeezed grated potato into small oiled metal moulds and fry carefully until the baskets hold their shape and are cooked; cool. Fill with diced boiled potato and chickpeas; add curd and chutney just before serving."
  ],
  [
    "Lucknow Matar Tikki Chaat",
    "North Indian",
    "aloo-tikki-chaat.webp",
    [
      "peas",
      "boiledpotato",
      "onion",
      "greenchutney",
      "chaatmasala"
    ],
    "¾ cup cooked peas; 1 boiled potato; ¼ onion; 2 tbsp green chutney; ½ tsp chaat masala",
    "Coarsely mash cooked peas with potato and salt, shape four patties and shallow-fry until firm and browned. Top with chopped onion, green chutney and chaat masala while hot."
  ],
  [
    "Prayagraj Masala Churmura",
    "North Indian",
    "bhel-chaat.webp",
    [
      "murmura",
      "roastedpeanuts",
      "onion",
      "tomato",
      "lemon"
    ],
    "2 cups crisp puffed rice; ¼ cup roasted peanuts; ¼ onion; ½ deseeded tomato; 1 tbsp lemon juice",
    "Chop the onion and deseeded tomato very small. Toss with peanuts, dry puffed rice, salt and lemon just before serving to avoid soggy churmura."
  ],
  [
    "Banarasi Chana Chaat",
    "North Indian",
    "chana-chaat.webp",
    [
      "cookedchickpeas",
      "boiledpotato",
      "onion",
      "lemon",
      "chaatmasala"
    ],
    "1 cup boiled chickpeas; 1 small boiled potato; ¼ onion; 1 tbsp lemon juice; ½ tsp chaat masala",
    "Drain fully cooked chickpeas and dice the potato. Mix with chopped onion, lemon, salt and chaat masala; let stand for 3 minutes before serving."
  ],
  [
    "Meerut Moong Sprout Chaat",
    "North Indian",
    "sprouts-chaat.webp",
    [
      "sprouts",
      "onion",
      "tomato",
      "lemon",
      "chaatmasala"
    ],
    "1 cup mung sprouts; ¼ onion; ½ tomato; 1 tbsp lemon juice; ¼ tsp chaat masala",
    "Steam sprouts until tender and piping hot; cool slightly. Toss with finely chopped onion, deseeded tomato, lemon and chaat masala; serve promptly."
  ],
  [
    "Mathura Hing Aloo Chaat",
    "North Indian",
    "aloo-chaat.webp",
    [
      "boiledpotato",
      "hing",
      "cumin",
      "lemon",
      "chaatmasala"
    ],
    "2 boiled potatoes; a pinch hing; ¼ tsp cumin; 1 tsp lemon juice; ½ tsp chaat masala",
    "Dice cooled boiled potatoes and brown them in a lightly oiled pan with hing and cumin. Sprinkle over lemon, salt and chaat masala and toss while hot."
  ],
  [
    "Varanasi Chooda Matar Chaat",
    "North Indian",
    "banarasi-chooda-matar.webp",
    [
      "poha",
      "peas",
      "ginger",
      "lemon",
      "coriander"
    ],
    "1 cup thick poha; ¾ cup cooked peas; ½ tsp grated ginger; 1 tsp lemon juice; 1 tbsp coriander",
    "Rinse thick poha briefly and drain. Sauté ginger and cooked peas in a little oil, fold in poha with salt and steam covered for 3 minutes; finish with lemon and coriander."
  ],
  [
    "Amritsari Chole Samosa Chaat",
    "Punjabi",
    "samosa-chaat.webp",
    [
      "samosa",
      "cookedchickpeas",
      "curd",
      "onion",
      "tamarindchutney"
    ],
    "2 cooked vegetable samosas; ¾ cup cooked chickpeas; ¼ cup curd; ¼ onion; 2 tbsp tamarind chutney",
    "Warm fully cooked chickpeas with salt and a few spoons of water until saucy. Break hot samosas into bowls; cover with chole, curd, chopped onion and tamarind chutney."
  ],
  [
    "Punjabi Paneer Tikka Chaat",
    "Punjabi",
    "paneer-tikka.webp",
    [
      "paneer",
      "curd",
      "capsicum",
      "onion",
      "chaatmasala"
    ],
    "150 g paneer cubes; 2 tbsp curd; ½ capsicum; ¼ onion; ½ tsp chaat masala",
    "Coat paneer and capsicum with seasoned curd; rest for 10 minutes, then cook on a hot oiled tawa until browned and heated through. Toss with sliced onion and chaat masala."
  ],
  [
    "Patiala Kala Chana Chaat",
    "Punjabi",
    "kala-chana-chaat.webp",
    [
      "kalachana",
      "onion",
      "tomato",
      "lemon",
      "chaatmasala"
    ],
    "1 cup fully boiled black chickpeas; ¼ onion; ½ tomato; 1 tbsp lemon; ½ tsp chaat masala",
    "Drain tender boiled black chickpeas, and chop onion and tomato. Combine with lemon juice, salt and chaat masala; serve warm or at room temperature."
  ],
  [
    "Ludhiana Tandoori Aloo Chaat",
    "Punjabi",
    "aloo-chaat.webp",
    [
      "boiledpotato",
      "curd",
      "ginger",
      "lemon",
      "chaatmasala"
    ],
    "2 boiled potatoes; 2 tbsp curd; ½ tsp ginger; 1 tsp lemon; ½ tsp chaat masala",
    "Coat potato chunks in seasoned curd and grated ginger; roast on a hot lightly oiled pan until browned on the edges. Drizzle with lemon and chaat masala."
  ],
  [
    "Punjabi Mooli Pakora Chaat",
    "Punjabi",
    "mixed-veg-pakora.webp",
    [
      "mooli",
      "besan",
      "gchilli",
      "curd",
      "chaatmasala"
    ],
    "½ cup squeezed grated radish; ½ cup besan; ½ green chilli; 3 tbsp curd; ¼ tsp chaat masala",
    "Mix squeezed radish with besan, chilli, salt and enough water to bind. Drop small spoonfuls into medium-hot oil and fry until golden and cooked; serve with curd and chaat masala."
  ],
  [
    "Jalandhar Chole Kulcha Chaat",
    "Punjabi",
    "amritsari-chole.webp",
    [
      "kulcha",
      "cookedchickpeas",
      "onion",
      "tomato",
      "lemon"
    ],
    "2 cooked kulchas; 1 cup cooked chickpeas; ¼ onion; ½ tomato; 1 tsp lemon",
    "Simmer cooked chickpeas with chopped tomato, salt and a splash of water until thick. Warm kulchas on a tawa; tear into pieces and top with chickpeas, onion and lemon."
  ],
  [
    "Jodhpur Mirchi Bada Chaat",
    "Rajasthani",
    "mirchi-bhajiya.webp",
    [
      "bigchilli",
      "boiledpotato",
      "besan",
      "curd",
      "tamarindchutney"
    ],
    "2 large mild chillies; 1 boiled potato; ½ cup besan; ¼ cup curd; 2 tbsp tamarind chutney",
    "Slit and deseed chillies, stuff with spiced mashed potato and dip in besan batter. Deep-fry until the batter is fully cooked; slice and dress with curd and chutney."
  ],
  [
    "Jaipur Pyaaz Kachori Chaat",
    "Rajasthani",
    "bihari-sattu-kachori.webp",
    [
      "kachori",
      "onion",
      "curd",
      "greenchutney",
      "tamarindchutney"
    ],
    "2 cooked onion kachoris; ¼ sliced onion; ¼ cup curd; 1 tbsp green chutney; 1 tbsp tamarind chutney",
    "Warm crisp onion kachoris in the oven or a dry tawa; break into bite-size pieces. Spoon on whisked curd, onion and both chutneys immediately before eating."
  ],
  [
    "Bikaneri Bhujia Chaat",
    "Rajasthani",
    "bhel-chaat.webp",
    [
      "bhujia",
      "boiledpotato",
      "onion",
      "tomato",
      "lemon"
    ],
    "¾ cup Bikaneri bhujia; 1 boiled potato; ¼ onion; ½ tomato; 1 tsp lemon",
    "Dice potato, onion and deseeded tomato; season with salt and lemon. Scatter bhujia generously on top only when serving so it stays crisp."
  ],
  [
    "Kota Dal Kachori Chaat",
    "Rajasthani",
    "moong-dal-kachori.webp",
    [
      "kachori",
      "curd",
      "greenchutney",
      "tamarindchutney",
      "sev"
    ],
    "2 cooked dal kachoris; ½ cup curd; 1 tbsp green chutney; 1 tbsp tamarind chutney; 2 tbsp sev",
    "Crack open warm crisp dal kachoris and lay them in shallow bowls. Add whisked curd, both chutneys and sev; serve immediately."
  ],
  [
    "Marwari Papad Chaat",
    "Rajasthani",
    "chaat-papdi.webp",
    [
      "papad",
      "onion",
      "tomato",
      "lemon",
      "chaatmasala"
    ],
    "2 roasted papads; ¼ onion; ½ deseeded tomato; 1 tsp lemon; ¼ tsp chaat masala",
    "Roast papads until entirely crisp and cool flat. Scatter finely chopped onion and tomato over them; season with lemon and chaat masala just before eating."
  ],
  [
    "Jaisalmer Khichiya Chaat",
    "Rajasthani",
    "chaat-papdi.webp",
    [
      "khichiya",
      "onion",
      "tomato",
      "greenchutney",
      "sev"
    ],
    "2 roasted khichiya papads; ¼ onion; ½ tomato; 1 tbsp green chutney; 2 tbsp sev",
    "Roast khichiya papads until light and crisp. Top with finely chopped vegetables, dots of green chutney and sev right before serving."
  ],
  [
    "Rajasthani Gatte Chaat",
    "Rajasthani",
    "gatte-ki-sabzi.webp",
    [
      "besan",
      "curd",
      "onion",
      "greenchutney",
      "chaatmasala"
    ],
    "½ cup besan; ¼ cup curd; ¼ onion; 1 tbsp green chutney; ½ tsp chaat masala",
    "Knead besan with salt, a spoon of curd and water into firm logs; boil 12–15 minutes until cooked, then slice and pan-sear. Toss with remaining curd, onion, chutney and chaat masala."
  ],
  [
    "Jaipur Matar Kachori Chaat",
    "Rajasthani",
    "lilva-kachori.webp",
    [
      "kachori",
      "peas",
      "curd",
      "tamarindchutney",
      "sev"
    ],
    "2 cooked plain kachoris; ½ cup cooked spiced peas; ¼ cup curd; 1 tbsp tamarind chutney; 2 tbsp sev",
    "Warm kachoris and lightly crush their centres; spoon in hot cooked peas. Top with whisked curd, tamarind chutney and sev and eat at once."
  ],
  [
    "Surti Locho Chaat",
    "Gujarati",
    "besan-cheela-roll.webp",
    [
      "chanadal",
      "ginger",
      "gchilli",
      "sev",
      "lemon"
    ],
    "½ cup chana dal soaked 4 hours; ½ tsp ginger; ½ green chilli; 2 tbsp sev; 1 tsp lemon",
    "Grind soaked dal with ginger, chilli, salt and a little water; steam a shallow tray of batter 15–20 minutes until set and cooked through. Scrape loose pieces, add lemon and sev and serve warm."
  ],
  [
    "Gujarati Sev Usal Chaat",
    "Gujarati",
    "sev-tamatar.webp",
    [
      "peas",
      "onion",
      "tomato",
      "sev",
      "lemon"
    ],
    "1 cup cooked dry peas; ¼ onion; 1 tomato; ¼ cup sev; 1 tsp lemon",
    "Cook chopped onion and tomato with spices and a splash of water; add fully cooked peas and simmer until thick. Ladle into bowls and crown with sev and lemon."
  ],
  [
    "Kutchi Dabeli Chaat",
    "Gujarati",
    "veg-samosa.webp",
    [
      "pav",
      "boiledpotato",
      "roastedpeanuts",
      "tamarindchutney",
      "pomegranate"
    ],
    "2 pav; 1 boiled potato; 2 tbsp roasted peanuts; 2 tbsp tamarind chutney; 2 tbsp pomegranate",
    "Mash potato with salt and a spoon of chutney; warm in a pan. Fill split toasted pav with potato, crunchy peanuts, remaining chutney and pomegranate."
  ],
  [
    "Bhavnagar Gathiya Chaat",
    "Gujarati",
    "bhel-chaat.webp",
    [
      "gathiya",
      "onion",
      "tomato",
      "lemon",
      "greenchutney"
    ],
    "1 cup crisp gathiya; ¼ onion; ½ tomato; 1 tsp lemon; 1 tbsp green chutney",
    "Dice onion and deseeded tomato and toss with lemon and chutney. Fold in the gathiya at the last moment, leaving some crisp pieces on top."
  ],
  [
    "Gujarati Khakhra Chaat",
    "Gujarati",
    "chaat-papdi.webp",
    [
      "khakhra",
      "boiledpotato",
      "onion",
      "tamarindchutney",
      "sev"
    ],
    "2 plain khakhras; 1 boiled potato; ¼ onion; 1 tbsp tamarind chutney; 2 tbsp sev",
    "Lay crisp khakhras flat, spread finely diced boiled potato and onion evenly. Drizzle with tamarind chutney and sprinkle sev right before serving."
  ],
  [
    "Surat Fafda Chaat",
    "Gujarati",
    "chaat-papdi.webp",
    [
      "fafda",
      "onion",
      "greenchutney",
      "lemon",
      "chaatmasala"
    ],
    "4 crisp fafda strips; ¼ onion; 2 tbsp green chutney; 1 tsp lemon; ¼ tsp chaat masala",
    "Break fresh crisp fafda into generous pieces. Top with sliced onion, green chutney, lemon and chaat masala just before eating."
  ],
  [
    "Indori Ratlami Sev Chaat",
    "Madhya Pradesh",
    "bhel-chaat.webp",
    [
      "sev",
      "boiledpotato",
      "onion",
      "tomato",
      "lemon"
    ],
    "¾ cup Ratlami sev; 1 boiled potato; ¼ onion; ½ tomato; 1 tsp lemon",
    "Mix diced boiled potato, onion and deseeded tomato with lemon and salt. Top lavishly with Ratlami sev and serve without letting it soften."
  ],
  [
    "Indori Bhutte Kees Chaat",
    "Madhya Pradesh",
    "bhutte-ka-kees.webp",
    [
      "corn",
      "milk",
      "ginger",
      "lemon",
      "coriander"
    ],
    "1 cup grated sweet corn; ¼ cup milk; ½ tsp ginger; 1 tsp lemon; 1 tbsp coriander",
    "Sauté grated corn and ginger in a little oil for 3 minutes; add milk and simmer 6–8 minutes until corn is tender and mixture thick. Finish with lemon and coriander."
  ],
  [
    "Bhopal Chana Masala Chaat",
    "Madhya Pradesh",
    "chana-chaat.webp",
    [
      "cookedchickpeas",
      "onion",
      "tomato",
      "greenchutney",
      "lemon"
    ],
    "1 cup fully cooked chickpeas; ¼ onion; ½ tomato; 1 tbsp green chutney; 1 tsp lemon",
    "Drain chickpeas and warm briefly with salt and spices. Fold in chopped onion, deseeded tomato, green chutney and lemon off the heat."
  ],
  [
    "Ujjain Sabudana Khichdi Chaat",
    "Madhya Pradesh",
    "sabudana-khichdi.webp",
    [
      "sabudana",
      "roastedpeanuts",
      "boiledpotato",
      "lemon",
      "coriander"
    ],
    "½ cup soaked and drained sabudana; 2 tbsp peanuts; 1 boiled potato; 1 tsp lemon; 1 tbsp coriander",
    "Drain soaked sabudana thoroughly; stir-fry with diced potato and crushed peanuts on low heat until pearls turn translucent. Remove from heat, season with lemon and coriander."
  ],
  [
    "Bihari Ghugni Chaat",
    "Bihari",
    "chana-chaat.webp",
    [
      "peas",
      "onion",
      "tomato",
      "ginger",
      "lemon"
    ],
    "1 cup fully cooked dried white peas; ¼ onion; ½ tomato; ½ tsp ginger; 1 tsp lemon",
    "Fry onion, ginger and tomato with salt and spices; add soft fully cooked dried peas and a splash of water, simmer until thick. Serve with lemon."
  ],
  [
    "Patna Sattu Litti Chaat",
    "Bihari",
    "bihari-sattu-kachori.webp",
    [
      "atta",
      "sattu",
      "onion",
      "lemon",
      "curd"
    ],
    "½ cup atta; ¼ cup sattu; ¼ onion; 1 tsp lemon; ¼ cup curd",
    "Knead atta with water; mix sattu with onion, lemon, salt and water to a moist filling. Stuff two small balls and bake or roast until the dough is fully cooked; break into pieces and serve with whisked curd."
  ],
  [
    "Bihar Chura Dahi Chaat",
    "Bihari",
    "dahi-poha.webp",
    [
      "poha",
      "curd",
      "roastedpeanuts",
      "pomegranate",
      "chaatmasala"
    ],
    "1 cup thick poha; ½ cup curd; 2 tbsp peanuts; 2 tbsp pomegranate; ¼ tsp chaat masala",
    "Rinse thick poha quickly, drain and let soften for 5 minutes. Fold in beaten curd and top with roasted peanuts, pomegranate and chaat masala."
  ],
  [
    "Ranchi Dhuska Chaat",
    "Jharkhand",
    "moong-dal-kachori.webp",
    [
      "rice",
      "chanadal",
      "boiledpotato",
      "greenchutney",
      "onion"
    ],
    "½ cup soaked rice; ¼ cup soaked chana dal; 1 boiled potato; 1 tbsp green chutney; ¼ onion",
    "Grind soaked rice and dal with water to thick batter, season and fry small discs on medium heat until golden and fully cooked. Top with mashed boiled potato, chopped onion and chutney."
  ],
  [
    "Jharkhand Chana Jhal Chaat",
    "Jharkhand",
    "kala-chana-chaat.webp",
    [
      "kalachana",
      "mustardoil",
      "onion",
      "gchilli",
      "lemon"
    ],
    "1 cup fully boiled black chickpeas; ½ tsp food-grade mustard oil; ¼ onion; ½ green chilli; 1 tsp lemon",
    "Drain tender cooked chickpeas and mix with chopped onion and chilli. Add food-grade mustard oil, salt and lemon; toss well and serve."
  ],
  [
    "Kolkata Dahi Phuchka",
    "Bengali",
    "dahi-puri.webp",
    [
      "golgappashells",
      "boiledpotato",
      "curd",
      "tamarindchutney",
      "sev"
    ],
    "8 crisp golgappa shells; 1 boiled potato; ½ cup curd; 2 tbsp tamarind chutney; 2 tbsp sev",
    "Make a small opening in each crisp shell and fill with mashed seasoned potato. Add chilled beaten curd, tamarind chutney and sev; eat at once."
  ],
  [
    "Kolkata Ghugni Papdi Chaat",
    "Bengali",
    "chaat-papdi.webp",
    [
      "peas",
      "papdi",
      "onion",
      "tamarindchutney",
      "chaatmasala"
    ],
    "¾ cup cooked dried peas; 8 papdi; ¼ onion; 2 tbsp tamarind chutney; ¼ tsp chaat masala",
    "Simmer fully cooked dried peas with a splash of water, salt and spices until spoonable. Layer with papdi, chopped onion, chutney and chaat masala just before eating."
  ],
  [
    "Bengal Chana Sundal Chaat",
    "Bengali",
    "chana-chaat.webp",
    [
      "cookedchickpeas",
      "coconut",
      "mustardoil",
      "lemon",
      "coriander"
    ],
    "1 cup boiled chickpeas; 2 tbsp grated coconut; ½ tsp mustard oil; 1 tsp lemon; 1 tbsp coriander",
    "Drain cooked chickpeas and toss warm with grated coconut and a little food-grade mustard oil. Finish with lemon and coriander."
  ],
  [
    "Jammu Kaladi Kulcha Chaat",
    "Kashmiri",
    "paneer-tikka.webp",
    [
      "kaladi",
      "kulcha",
      "onion",
      "greenchutney",
      "lemon"
    ],
    "100 g kaladi cheese; 2 cooked kulchas; ¼ onion; 1 tbsp green chutney; 1 tsp lemon",
    "Pan-sear kaladi on medium heat until browned and melted inside; warm the cooked kulchas separately. Sandwich cheese with onion, green chutney and lemon and serve hot."
  ],
  [
    "Kashmiri Nadru Chaat",
    "Kashmiri",
    "crispy-arbi-chaat.webp",
    [
      "lotusstem",
      "besan",
      "curd",
      "cumin",
      "lemon"
    ],
    "150 g cleaned lotus stem; 2 tbsp besan; ¼ cup curd; ¼ tsp roasted cumin; 1 tsp lemon",
    "Slice and boil cleaned lotus stem until tender, drain, coat lightly in seasoned besan and pan-fry until crisp. Finish with curd, cumin and lemon."
  ],
  [
    "Kumaoni Aloo Gutke Chaat",
    "Pahadi",
    "aloo-chaat.webp",
    [
      "boiledpotato",
      "mustardoil",
      "cumin",
      "lemon",
      "coriander"
    ],
    "2 boiled potatoes; 1 tsp mustard oil; ½ tsp cumin; 1 tsp lemon; 1 tbsp coriander",
    "Cube boiled potato. Heat food-grade mustard oil, crackle cumin and sauté potatoes until edges are crisp; toss with lemon, salt and coriander."
  ],
  [
    "Garhwali Mandua Tikki Chaat",
    "Pahadi",
    "sweet-potato-tikki.webp",
    [
      "ragi",
      "boiledpotato",
      "curd",
      "greenchutney",
      "chaatmasala"
    ],
    "¼ cup mandua/ragi flour; 1 boiled potato; ¼ cup curd; 1 tbsp green chutney; ¼ tsp chaat masala",
    "Mix ragi flour with mashed boiled potato, salt and a little water, form four thin patties and cook both sides thoroughly on an oiled tawa. Top with curd, chutney and chaat masala."
  ],
  [
    "Himachali Siddu Chaat",
    "Pahadi",
    "veg-momos.webp",
    [
      "atta",
      "urad",
      "curd",
      "greenchutney",
      "chaatmasala"
    ],
    "½ cup atta; ¼ cup soaked ground urad dal; ¼ cup curd; 1 tbsp green chutney; ¼ tsp chaat masala",
    "Make a soft wheat dough, rest, fill with seasoned ground urad and seal into two buns; steam 15–20 minutes until dough and filling are cooked. Slice and top with curd, chutney and chaat masala."
  ],
  [
    "Himachali Chana Madra Chaat",
    "Pahadi",
    "chana-chaat.webp",
    [
      "cookedchickpeas",
      "curd",
      "cumin",
      "ginger",
      "coriander"
    ],
    "1 cup fully cooked chickpeas; ½ cup curd; ¼ tsp cumin; ½ tsp ginger; 1 tbsp coriander",
    "Temper cumin and ginger in a little oil, lower the heat and stir in whisked curd gradually; add chickpeas and simmer gently until hot. Scatter coriander and serve in small bowls."
  ],
  [
    "Assamese Tangy Chickpea Chaat",
    "Assam & NE",
    "chana-chaat.webp",
    [
      "cookedchickpeas",
      "tomato",
      "lemon",
      "coriander",
      "gchilli"
    ],
    "1 cup fully boiled chickpeas; 1 tomato; 1 tsp lemon; 1 tbsp coriander; ½ green chilli",
    "Cook chopped tomato and chilli with salt in a splash of water until soft; fold in cooked chickpeas and heat through. Finish with fresh lemon and coriander for a tangy vegetarian bowl."
  ],
  [
    "Shillong Black Sesame Potato Chaat",
    "Assam & NE",
    "aloo-chaat.webp",
    [
      "boiledpotato",
      "blacksesame",
      "lemon",
      "gchilli",
      "coriander"
    ],
    "2 boiled potatoes; 1 tbsp black sesame; 1 tsp lemon; ½ green chilli; 1 tbsp coriander",
    "Dry-roast black sesame and crush coarsely. Toss warm diced potatoes with sesame, minced chilli, lemon and coriander."
  ],
  [
    "Sikkim Veg Momo Chaat",
    "Assam & NE",
    "veg-momos.webp",
    [
      "cabbage",
      "carrot",
      "maida",
      "greenchutney",
      "curd"
    ],
    "½ cup chopped cabbage; ¼ cup grated carrot; ½ cup maida; 1 tbsp green chutney; ¼ cup curd",
    "Knead flour into dough, fill thin wrappers with salted sautéed cabbage and carrot and seal; steam 10–12 minutes until wrappers are cooked. Halve steamed momos and toss with chutney and curd."
  ],
  [
    "Tripura Chana Cucumber Chaat",
    "Assam & NE",
    "chana-chaat.webp",
    [
      "cookedchickpeas",
      "cucumber",
      "lemon",
      "gchilli",
      "coriander"
    ],
    "¾ cup boiled chickpeas; ½ cucumber; 1 tsp lemon; ½ green chilli; 1 tbsp coriander",
    "Drain chickpeas and dice peeled cucumber. Toss with finely chopped green chilli, coriander, salt and lemon; serve cool."
  ]
];

const NORTH_CHAAT_CATALOG = NORTH_CHAAT_RECIPES.map(function(row){
  // Cooked legumes and roasted peanuts are distinct ready-to-eat products:
  // uncooked chickpeas cannot safely satisfy a ready-to-eat chaat ingredient.
  var aliases={boiledpotato:"potato",kalachana:"blackchickpeas",hing:"asafoetida"};
  var boilPotato=row[3].includes("boiledpotato");
  var potatoPreparation="Boil the raw potatoes in water until fork-tender (about 20 minutes), drain and cool before using them in this chaat.";
  var ownPhoto="north-chaat-"+row[0].toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".webp";
  return {name:row[0],region:row[1],course:"Snack",prep:12,cook:boilPotato?32:12,serves:2,
    pantry:Array.from(new Set(row[3].map(function(id){return aliases[id]||id}))),amounts:{en:[row[4]]},steps:{en:boilPotato?[potatoPreparation,row[5]]:[row[5]]},photo:ownPhoto};
});
const NORTH_CHAAT_PANTRY = [
  ["papdi","Papdi (crispy wheat wafers)","chaat-papdi.webp"],
  ["greenchutney","Green coriander-mint chutney","coriander-coconut-chutney.webp"],
  ["tamarindchutney","Sweet tamarind chutney","imli-chutney.webp"],
  ["chanajorgaram","Chana jor garam flakes","chana-chaat.webp"],
  ["kulcha","Kulcha bread","amritsari-chole.webp"],
  ["samosa","Prepared vegetarian samosa","veg-samosa.webp"],
  ["kachori","Prepared savory kachori","kachori.webp"],
  ["bhujia","Bikaneri bhujia","ratlami-sev.webp"],
  ["khichiya","Khichiya papad","baked-masala-khakhra.webp"],
  ["gathiya","Gathiya","ratlami-sev.webp"],
  ["khakhra","Khakhra","baked-masala-khakhra.webp"],
  ["fafda","Fafda","ratlami-sev.webp"],
  ["golgappashells","Golgappa/puchka shells","dahi-puri.webp"],
  ["kaladi","Kaladi cheese","paneer-tikka.webp"],
  ["blacksesame","Black sesame seeds","til-chutney.webp"]
];
