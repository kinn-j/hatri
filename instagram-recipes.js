// Short recipe adaptations with links to the creator's Reel and published method.
const INSTAGRAM_RECIPES = [
  {
    name: "Kala Chana Chaat",
    creator: "Kunal Kapur",
    reel: "https://www.instagram.com/reel/C3zIyOLr4Dx/",
    written: "https://www.chefkunalkapur.com/recipe/kala-chana-chaat-2/",
    recipe: {
      hindi: "काला चना चाट",
      course: "Snack",
      region: "North Indian",
      prep: 15,
      cook: 35,
      soak: [480, "black chickpeas"],
      ingredients: ["blackchickpeas", "potato", "onion", "tomato", "cucumber", "chaatmasala", "lemon", "ginger?", "gchilli?", "coriander?", "blacksalt?", "kasurimethi?"],
      steps: {
        en: [
          "Soak the black chickpeas overnight and cook in fresh water until tender. Set aside about 2 cups of cooked chickpeas and boil and dice a small potato.",
          "Warm a little oil in a pan. Fry chopped ginger and green chilli if using, then add the chickpeas, chaat masala and a splash of water. Simmer until the spices coat the chickpeas.",
          "Toss the warm chickpeas with the potato and chopped onion, tomato and cucumber. Finish with lemon juice and your choice of coriander, black salt or a pinch of crushed kasuri methi."
        ],
        hi: [
          "काले चने रात भर भिगोएँ और ताज़े पानी में नरम होने तक पकाएँ। लगभग 2 कप उबले चने रखें और एक छोटा आलू उबालकर काट लें।",
          "कड़ाही में थोड़ा तेल गरम करें। चाहें तो कटा अदरक और हरी मिर्च भूनें। चने, चाट मसाला और थोड़ा पानी डालकर मसाला चनों पर चढ़ने तक पकाएँ।",
          "गरम चनों में आलू, कटा प्याज़, टमाटर और खीरा मिलाएँ। नींबू निचोड़ें और चाहें तो धनिया, काला नमक या चुटकी भर कुटी कसूरी मेथी डालें।"
        ]
      }
    }
  },
  {
    name: "No-Oil Paneer Mayo",
    creator: "Kunal Kapur",
    reel: "https://www.instagram.com/reel/C7uA8ghvAPN/",
    written: "https://www.chefkunalkapur.com/recipe/no-oil-mayonnaise/",
    recipe: {
      hindi: "बिना तेल की पनीर मेयो",
      course: "Side",
      region: "Everyday",
      prep: 10,
      cook: 0,
      soak: [120, "cashews"],
      ingredients: ["paneer", "cashews", "milk", "lemon", "garlic?", "blackpepper?"],
      steps: {
        en: [
          "Soak a handful of cashews for at least 2 hours, until they soften. Drain them and crumble about 100 g paneer.",
          "Blend the paneer and cashews with a pinch of salt and optional garlic and black pepper. Add milk gradually until the mixture is thick and smooth.",
          "Blend in a squeeze of lemon, taste and adjust. Serve chilled as a dip or sandwich spread."
        ],
        hi: [
          "एक मुट्ठी काजू कम से कम 2 घंटे नरम होने तक भिगोएँ। पानी निकालें और लगभग 100 ग्राम पनीर मसलें।",
          "पनीर, काजू और चुटकी भर नमक पीसें। चाहें तो लहसुन और काली मिर्च डालें। दूध थोड़ा-थोड़ा डालकर गाढ़ा और चिकना पीसें।",
          "थोड़ा नींबू निचोड़कर फिर पीसें और स्वाद ठीक करें। ठंडी डिप या सैंडविच स्प्रेड की तरह परोसें।"
        ]
      }
    }
  },
  {
    name: "Chocolate Honey Spread",
    creator: "Kunal Kapur",
    reel: "https://www.instagram.com/reel/C-MhEZlPi0Y/",
    written: "https://www.chefkunalkapur.com/recipe/chocolate-honey-spread/",
    recipe: {
      hindi: "चॉकलेट शहद स्प्रेड",
      course: "Sweet",
      region: "Everyday",
      prep: 8,
      cook: 0,
      ingredients: ["honey", "cocoa", "vanillaextract?"],
      steps: {
        en: [
          "Whip ½ cup honey in a clean, dry bowl with an electric whisk for 4–5 min, until it looks lighter and thicker.",
          "Sift in 2 tablespoons unsweetened cocoa and add a little vanilla if you like. Beat again just until smooth and spreadable."
        ],
        hi: [
          "साफ़ और सूखे बर्तन में ½ कप शहद इलेक्ट्रिक व्हिस्क से 4–5 मिनट फेंटें, जब तक रंग हल्का और शहद गाढ़ा हो जाए।",
          "2 बड़े चम्मच बिना चीनी वाला कोको छानकर डालें। चाहें तो थोड़ा वनीला डालें और चिकना व फैलाने लायक होने तक फिर फेंटें।"
        ]
      }
    }
  },
  {
    name: "Grilled Masala Paneer Bowl",
    creator: "Kriti Dhiman",
    reel: "https://www.instagram.com/reel/DIamLlazRzT/",
    written: "https://www.whosthat360.com/food/masterchef-kriti-dhimans-15-minute-masala-paneer-bowl-8233767",
    recipe: {
      hindi: "ग्रिल्ड मसाला पनीर बाउल",
      course: "Complete",
      region: "Everyday",
      prep: 10,
      cook: 8,
      ingredients: ["paneer", "curd", "carrot", "cucumber", "mustardoil", "garlic?", "blackpepper?", "blacksalt?", "kasurimethi?"],
      appliances: ["T"],
      steps: {
        en: [
          "Stir thin strips of carrot and cucumber into a bowl of thick or hung curd. Season with black pepper, black salt and grated garlic if using.",
          "Coat thick slices of paneer lightly in mustard oil, salt, turmeric, red chilli powder and a pinch of garam masala. Add crushed kasuri methi if you have it.",
          "Sear the paneer on a hot tawa for 2–3 min per side, until the edges brown. Set it on top of the cold yogurt salad and serve straight away."
        ],
        hi: [
          "गाजर और खीरे की पतली लंबी कतरनें गाढ़े या टँगे हुए दही में मिलाएँ। चाहें तो काली मिर्च, काला नमक और कद्दूकस किया लहसुन डालें।",
          "पनीर के मोटे टुकड़ों पर हल्का सरसों का तेल, नमक, हल्दी, लाल मिर्च और चुटकी भर गरम मसाला लगाएँ। हो तो कुटी कसूरी मेथी डालें।",
          "गरम तवे पर दोनों ओर 2–3 मिनट सेंकें, जब तक किनारे सुनहरे हों। ठंडे दही-सलाद पर रखकर तुरंत परोसें।"
        ]
      }
    }
  },
  {
    name: "Bhutte ka Kees",
    creator: "Kunal Kapur",
    reel: "https://www.instagram.com/reel/C5vcIY8v9Lp/",
    written: "https://www.chefkunalkapur.com/recipe/bhutte-ka-kees/"
  }
];
