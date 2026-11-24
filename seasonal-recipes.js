// Sindhi home dishes and Christmas recipes, with English and Hindi instructions.
const SEASONAL_PANTRY = {
  "Kitchen basics & spices": [["groundginger", "Ground ginger (sonth)", "सोंठ पाउडर"]],
  "Specialty & other": [["applejuice", "Unsweetened apple juice", "बिना चीनी का सेब रस"]]
};

const SEASONAL_RECIPES = [
  {
    name: "Sai Bhaji", hindi: "साई भाजी", region: "Sindhi", course: "Main", prep: 15, cook: 25,
    serves: 4, soak: [30, "chana dal"], appliances: ["I"],
    pantry: ["spinach", "chanadal", "onion", "tomato", "ginger", "garlic", "gchilli?", "turmeric"],
    amounts: {
      en: ["300 g spinach and ⅓ cup chana dal", "1 onion, 2 tomatoes, 1 tsp grated ginger, 3 garlic cloves and 1 optional green chilli", "1 tbsp oil, ½ tsp turmeric, ½ tsp salt and 1 cup water"],
      hi: ["300 ग्राम पालक और ⅓ कप चना दाल", "1 प्याज़, 2 टमाटर, 1 छोटा चम्मच कद्दूकस अदरक, 3 लहसुन कलियाँ और चाहें तो 1 हरी मिर्च", "1 बड़ा चम्मच तेल, ½ छोटा चम्मच हल्दी, ½ छोटा चम्मच नमक और 1 कप पानी"]
    },
    steps: {
      en: ["Rinse and soak the dal for 30 min. Wash and chop the spinach while it soaks.", "In a pressure cooker, soften the chopped onion in oil. Add ginger, garlic, chilli and tomatoes and cook until the tomatoes break down.", "Add drained dal, spinach, turmeric, salt and water. Pressure-cook for 12 min at high pressure and let the pressure release naturally. Mash lightly and simmer uncovered if it needs thickening."],
      hi: ["दाल धोकर 30 मिनट भिगोएँ। तब तक पालक धोकर काट लें।", "कुकर में तेल गरम कर प्याज़ नरम करें। अदरक, लहसुन, मिर्च और टमाटर डालकर टमाटर गलने तक पकाएँ।", "निथरी दाल, पालक, हल्दी, नमक और पानी डालें। तेज़ प्रेशर पर 12 मिनट पकाएँ और भाप अपने आप निकलने दें। हल्का मसलें और ज़रूरत पड़े तो खुला उबालकर गाढ़ा करें।"]
    }
  },
  {
    name: "Sindhi Koki", hindi: "सिंधी कोकी", region: "Sindhi", course: "Bread", prep: 15, cook: 20,
    serves: 4, appliances: ["I"], pantry: ["atta", "onion", "coriander", "gchilli?", "ajwain", "ghee"],
    amounts: {
      en: ["2 cups atta, 1 small finely chopped onion, ¼ cup chopped coriander and 1 optional green chilli", "½ tsp ajwain, ½ tsp salt, 3 tbsp ghee and about ½ cup water"],
      hi: ["2 कप आटा, 1 बारीक कटा छोटा प्याज़, ¼ कप कटा हरा धनिया और चाहें तो 1 हरी मिर्च", "½ छोटा चम्मच अजवाइन, ½ छोटा चम्मच नमक, 3 बड़े चम्मच घी और लगभग ½ कप पानी"]
    },
    steps: {
      en: ["Rub 1 tbsp ghee into the atta. Mix in the onion, coriander, chilli, ajwain and salt. Add water a little at a time to make a firm dough.", "Divide into four portions and roll into thick rounds. Score each surface lightly with a knife.", "Cook on a medium-low tawa, flipping as needed. Brush with the remaining ghee and cook until both sides are golden and crisp."],
      hi: ["आटे में 1 बड़ा चम्मच घी मसलकर मिलाएँ। प्याज़, धनिया, मिर्च, अजवाइन और नमक मिलाएँ। थोड़ा-थोड़ा पानी देकर सख़्त आटा गूँधें।", "चार हिस्से बनाकर मोटी गोल रोटियाँ बेलें और चाकू से ऊपर हल्की लकीरें बनाएँ।", "मध्यम-धीमी आँच पर तवे पर दोनों तरफ़ सेंकें। बचा घी लगाकर सुनहरा और कुरकुरा होने तक पकाएँ।"]
    }
  },
  {
    name: "Aloo Tuk", hindi: "आलू टुक", region: "Sindhi", course: "Side", prep: 10, cook: 22,
    serves: 4, appliances: ["I"], pantry: ["potato", "amchur", "redchillipowder", "corianderpowder"],
    amounts: {
      en: ["4 medium potatoes and neutral oil for frying", "½ tsp each amchur, ground coriander and salt, plus ¼ tsp red chilli powder"],
      hi: ["4 मध्यम आलू और तलने के लिए तेल", "½ छोटा चम्मच अमचूर, ½ छोटा चम्मच धनिया पाउडर, ½ छोटा चम्मच नमक और ¼ छोटा चम्मच लाल मिर्च पाउडर"]
    },
    steps: {
      en: ["Peel the potatoes and cut them into thick rounds. Pat dry and fry over medium heat until tender but still pale.", "Lift out, drain and gently flatten each round. Fry again over medium-high heat until crisp and golden.", "Drain and toss the hot potatoes with amchur, coriander, chilli and salt."],
      hi: ["आलू छीलकर मोटे गोल टुकड़े काटें। पोंछकर मध्यम आँच पर नरम होने तक तलें, रंग हल्का रखें।", "निकालकर तेल निथारें और हर टुकड़े को हल्का दबाएँ। फिर मध्यम-तेज़ आँच पर सुनहरा और कुरकुरा तलें।", "तेल निथारकर गरम आलुओं पर अमचूर, धनिया पाउडर, मिर्च और नमक मिलाएँ।"]
    }
  },
  {
    name: "Sindhi Kadhi", hindi: "सिंधी कढ़ी", region: "Sindhi", course: "Main", prep: 15, cook: 35,
    serves: 4, appliances: ["I"], pantry: ["besan", "tamarind", "potato", "okra", "beans", "currylv", "cuminseeds", "turmeric", "redchillipowder"],
    amounts: {
      en: ["¼ cup besan, 2 tbsp oil, ½ tsp cumin seeds and 8 curry leaves", "1 potato, 100 g okra, 100 g green beans, ½ tsp turmeric, ¼ tsp red chilli powder and ¾ tsp salt", "1 tbsp seedless tamarind and 4 cups water, divided"],
      hi: ["¼ कप बेसन, 2 बड़े चम्मच तेल, ½ छोटा चम्मच जीरा और 8 करी पत्ते", "1 आलू, 100 ग्राम भिंडी, 100 ग्राम हरी बीन्स, ½ छोटा चम्मच हल्दी, ¼ छोटा चम्मच लाल मिर्च पाउडर और ¾ छोटा चम्मच नमक", "1 बड़ा चम्मच बीजरहित इमली और कुल 4 कप पानी"]
    },
    steps: {
      en: ["Soak the tamarind in ¼ cup warm water. Chop the vegetables. Sizzle cumin and curry leaves in oil, then stir in besan and roast over low heat until nutty.", "Gradually whisk in the remaining water. Add turmeric, chilli and salt. Simmer the potatoes and beans for 12 min, then add okra and cook until tender.", "Squeeze and strain the tamarind into the kadhi. Simmer for 5 min and serve with rice."],
      hi: ["इमली ¼ कप गुनगुने पानी में भिगोएँ। सब्ज़ियाँ काटें। तेल में जीरा और करी पत्ते चटकाएँ, फिर बेसन डालकर धीमी आँच पर खुशबू आने तक भूनें।", "बचा पानी धीरे-धीरे फेंटकर मिलाएँ। हल्दी, मिर्च और नमक डालें। आलू और बीन्स 12 मिनट पकाएँ, फिर भिंडी डालकर नरम होने तक पकाएँ।", "इमली मसलकर छानें और कढ़ी में डालें। 5 मिनट उबालें और चावल के साथ परोसें।"]
    }
  },
  {
    name: "Eggless Christmas Plum Cake", hindi: "अंडारहित क्रिसमस प्लम केक", region: "International / National", course: "Baked",
    occasion: "Christmas", prep: 20, cook: 50, serves: 8,
    pantry: ["maida", "raisins", "dates", "orange", "curd", "butter", "sugar", "bakingpowder", "bakingsoda", "cinnamon"],
    amounts: {
      en: ["1½ cups maida, 1 tsp baking powder, ½ tsp baking soda, 1 tsp ground cinnamon and a pinch of salt", "½ cup raisins, ½ cup chopped dates, ½ cup orange juice and 1 tsp orange zest", "½ cup plain curd, ½ cup melted butter and ½ cup sugar"],
      hi: ["1½ कप मैदा, 1 छोटा चम्मच बेकिंग पाउडर, ½ छोटा चम्मच बेकिंग सोडा, 1 छोटा चम्मच दालचीनी पाउडर और चुटकीभर नमक", "½ कप किशमिश, ½ कप कटे खजूर, ½ कप संतरे का रस और 1 छोटा चम्मच कद्दूकस संतरे का छिलका", "½ कप सादा दही, ½ कप पिघला मक्खन और ½ कप चीनी"]
    },
    steps: {
      en: ["Heat the oven to 170°C and line a 20 cm loaf tin. Warm the raisins and dates in orange juice for 3 min, then cool.", "Whisk curd, cooled butter, sugar and zest. Fold in the sifted dry ingredients, fruit and any remaining juice just until combined.", "Transfer to the tin and bake for 40–48 min, until a skewer in the centre comes out without wet batter. Cool before slicing."],
      hi: ["ओवन 170°C पर गरम करें और 20 सेमी लोफ टिन में बेकिंग पेपर लगाएँ। संतरे के रस में किशमिश और खजूर 3 मिनट गरम करें और ठंडा करें।", "दही, ठंडा मक्खन, चीनी और संतरे का छिलका फेंटें। छनी सूखी सामग्री, मेवे और बचा रस हल्के हाथ से मिलाएँ।", "टिन में डालकर 40–48 मिनट बेक करें। बीच में डाली सींक पर गीला घोल न लगे तो केक तैयार है। काटने से पहले ठंडा करें।"]
    }
  },
  {
    name: "Eggless Gingerbread Stars", hindi: "अंडारहित जिंजरब्रेड सितारे", region: "International / National", course: "Baked",
    occasion: "Christmas", prep: 20, cook: 12, serves: 6,
    pantry: ["maida", "butter", "jaggery", "groundginger", "cinnamon", "bakingsoda", "milk?"],
    amounts: {
      en: ["1¼ cups maida, 1 tsp ground ginger, ½ tsp ground cinnamon, ¼ tsp baking soda and a pinch of salt", "⅓ cup softened butter, ½ cup finely grated jaggery and up to 1 tbsp milk if needed"],
      hi: ["1¼ कप मैदा, 1 छोटा चम्मच सोंठ, ½ छोटा चम्मच दालचीनी पाउडर, ¼ छोटा चम्मच बेकिंग सोडा और चुटकीभर नमक", "⅓ कप नरम मक्खन, ½ कप बारीक कद्दूकस गुड़ और ज़रूरत पर 1 बड़ा चम्मच तक दूध"]
    },
    steps: {
      en: ["Beat the butter and jaggery. Mix in flour, spices, soda and salt until it forms a dough, adding milk only if it crumbles.", "Roll between sheets of baking paper to about 5 mm thick. Chill for 15 min while the oven heats to 175°C, then cut into stars.", "Bake on a lined tray for 9–12 min, until the edges are firm. Cool on the tray for 5 min before moving to a rack."],
      hi: ["मक्खन और गुड़ फेंटें। मैदा, मसाले, सोडा और नमक मिलाकर आटा बनाएँ। बिखरे तो थोड़ा दूध मिलाएँ।", "बेकिंग पेपर की दो परतों के बीच लगभग 5 मिमी मोटा बेलें। ओवन 175°C पर गरम करते समय 15 मिनट ठंडा करें, फिर सितारे काटें।", "पेपर लगी ट्रे पर 9–12 मिनट बेक करें, जब तक किनारे सख़्त हों। 5 मिनट ट्रे पर ठंडा करके जाली पर रखें।"]
    }
  },
  {
    name: "Goan Neureos", hindi: "गोअन नेउरेओस", region: "Goan & Konkan", course: "Sweet",
    occasion: "Christmas", prep: 30, cook: 25, serves: 6, appliances: ["I"],
    pantry: ["maida", "suji", "coconut", "sugar", "ghee", "cardamom"],
    amounts: {
      en: ["1 cup maida, 2 tbsp fine suji, 1 tbsp ghee, a pinch of salt and about ⅓ cup water", "1 cup grated coconut, ⅓ cup sugar, ¼ tsp ground cardamom and neutral oil for frying"],
      hi: ["1 कप मैदा, 2 बड़े चम्मच बारीक सूजी, 1 बड़ा चम्मच घी, चुटकीभर नमक और लगभग ⅓ कप पानी", "1 कप कद्दूकस नारियल, ⅓ कप चीनी, ¼ छोटा चम्मच इलायची पाउडर और तलने के लिए तेल"]
    },
    steps: {
      en: ["Rub ghee into the maida, suji and salt. Add water gradually to make a firm dough and cover for 15 min.", "Cook coconut and sugar together until the mixture looks dry. Stir in cardamom and cool completely.", "Roll thin dough circles. Place a spoonful of filling on each, dampen the edge, fold and press shut. Fry in batches over medium heat until evenly golden."],
      hi: ["मैदा, सूजी और नमक में घी मसलें। थोड़ा-थोड़ा पानी देकर सख़्त आटा गूँधें और 15 मिनट ढकें।", "नारियल और चीनी को मिश्रण सूखा दिखने तक पकाएँ। इलायची मिलाकर पूरी तरह ठंडा करें।", "आटे की पतली पूरियाँ बेलें। हर पूरी में एक चम्मच भरावन रखें, किनारा गीला करें, मोड़ें और दबाकर बंद करें। मध्यम आँच पर थोड़े-थोड़े करके सुनहरा तलें।"]
    }
  },
  {
    name: "Christmas Spiced Apple Punch", hindi: "क्रिसमस मसाला सेब पंच", region: "International / National", course: "Drink",
    occasion: "Christmas", prep: 5, cook: 15, serves: 4, appliances: ["I"],
    pantry: ["applejuice", "orange", "cinnamon", "cloves", "ginger?"],
    amounts: {
      en: ["3 cups unsweetened apple juice, 1 sliced orange and ½ cup water", "1 cinnamon stick, 3 whole cloves and 3 optional thin slices of ginger"],
      hi: ["3 कप बिना चीनी का सेब रस, 1 कटा संतरा और ½ कप पानी", "1 दालचीनी का टुकड़ा, 3 लौंग और चाहें तो अदरक की 3 पतली फाँकें"]
    },
    steps: {
      en: ["Combine the juice, water, orange and spices in a saucepan.", "Bring to a gentle simmer, cover and cook on low for 12–15 min.", "Strain out the spices and serve warm."],
      hi: ["पतीले में सेब रस, पानी, संतरा और मसाले मिलाएँ।", "हल्का उबाल आने पर ढककर धीमी आँच पर 12–15 मिनट पकाएँ।", "मसाले छानें और गरम परोसें।"]
    }
  },
  {
    "name": "Orange & Almond Christmas Cake",
    "hindi": "संतरा बादाम क्रिसमस केक",
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
      ],
      "hi": [
        "1 कप मैदा, ¼ कप पिसे बादाम, 1½ छोटे चम्मच बेकिंग पाउडर, ½ कप चीनी, ⅓ कप दही, ⅓ कप पिघला मक्खन, एक संतरे का कद्दूकस छिलका और ¼ कप रस"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 175°C. Line an 18 cm round tin. Whisk curd, sugar, butter, juice and zest.",
        "Fold in flour, almonds and baking powder. Bake for 30–35 minutes until a skewer comes out clean. Cool before slicing."
      ],
      "hi": [
        "ओवन 175°C पर गरम करें। 18 सेमी के टिन में बेकिंग पेपर लगाएँ। दही, चीनी, मक्खन, रस और छिलका फेंटें।",
        "मैदा, बादाम और बेकिंग पाउडर मिलाएँ। 30–35 मिनट बेक करें। सींक साफ़ निकले तो ठंडा करके काटें।"
      ]
    }
  },
  {
    "name": "Chocolate Cinnamon Christmas Cupcakes",
    "hindi": "चॉकलेट दालचीनी क्रिसमस कपकेक",
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
      ],
      "hi": [
        "¾ कप मैदा, 2 बड़े चम्मच कोको, ½ छोटा चम्मच दालचीनी, 1 छोटा चम्मच बेकिंग पाउडर, ⅓ कप चीनी, ½ कप दूध और 3 बड़े चम्मच पिघला मक्खन"
      ]
    },
    "steps": {
      "en": [
        "Line six muffin cups and heat oven to 175°C. Sift flour, cocoa, cinnamon and baking powder together.",
        "Stir sugar into milk and butter. Fold into dry ingredients, divide between cups and bake 17–20 minutes until a skewer comes out clean."
      ],
      "hi": [
        "छह मफिन कप में लाइनर लगाएँ और ओवन 175°C पर गरम करें। मैदा, कोको, दालचीनी और बेकिंग पाउडर छानें।",
        "दूध और मक्खन में चीनी मिलाएँ। सूखी सामग्री मिलाकर कप में बाँटें। 17–20 मिनट बेक करें जब तक सींक साफ़ निकले।"
      ]
    }
  },
  {
    "name": "Christmas Gingerbread Hot Chocolate",
    "hindi": "जिंजरब्रेड हॉट चॉकलेट",
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
      ],
      "hi": [
        "2 कप दूध, 2 बड़े चम्मच कोको, 2 बड़े चम्मच चीनी, ¼ छोटा चम्मच सोंठ और इतनी ही दालचीनी"
      ]
    },
    "steps": {
      "en": [
        "Mix cocoa, sugar and spices with a splash of cold milk until smooth.",
        "Whisk in the remaining milk. Warm over low heat, stirring until steaming, then pour into mugs."
      ],
      "hi": [
        "कोको, चीनी और मसालों में थोड़ा ठंडा दूध मिलाकर चिकना घोल बनाएँ।",
        "बचा दूध फेंटकर मिलाएँ। धीमी आँच पर चलाते हुए गरम करें और मग में परोसें।"
      ]
    },
    "appliances": [
      "I"
    ]
  },
  {
    "name": "Christmas Orange Mint Cooler",
    "hindi": "क्रिसमस संतरा पुदीना कूलर",
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
      ],
      "hi": [
        "3 संतरे, ½ नींबू, 8 पुदीना पत्ते, 2 छोटे चम्मच चीनी और ½ कप ठंडा पानी"
      ]
    },
    "steps": {
      "en": [
        "Gently crush mint with sugar and lemon juice in a jug.",
        "Squeeze in the oranges, add chilled water and stir until the sugar dissolves. Divide between two glasses."
      ],
      "hi": [
        "जग में पुदीना, चीनी और नींबू का रस हल्के से कूटें।",
        "संतरों का रस निकालकर मिलाएँ। ठंडा पानी डालकर चीनी घुलने तक चलाएँ। दो गिलास में परोसें।"
      ]
    },
    "appliances": [
      "N"
    ]
  },
  {
    "name": "Christmas Tree Toast Pizzas",
    "hindi": "क्रिसमस ट्री टोस्ट पिज़्ज़ा",
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
      ],
      "hi": [
        "4 ब्रेड स्लाइस, 1 बारीक कटा टमाटर, ½ पतली कटी हरी शिमला मिर्च, ½ कप कद्दूकस चीज़ और 2 छोटे चम्मच मक्खन"
      ]
    },
    "steps": {
      "en": [
        "Cut bread into large triangles. Butter the undersides and set in a cool skillet.",
        "Top with cheese. Arrange capsicum strips as tree branches and tomato pieces as ornaments. Cover and cook on low for 6–10 minutes until crisp underneath and melted on top."
      ],
      "hi": [
        "ब्रेड को बड़े तिकोनों में काटें। नीचे मक्खन लगाकर ठंडे तवे पर रखें।",
        "चीज़ फैलाएँ। शिमला मिर्च से टहनियाँ बनाएँ और टमाटर से सजाएँ। धीमी आँच पर ढककर 6–10 मिनट सेंकें जब तक नीचे कुरकुरा हो और चीज़ पिघल जाए।"
      ]
    },
    "appliances": [
      "I"
    ]
  },
  {
    "name": "Christmas Wreath Flatbread Pizza",
    "hindi": "क्रिसमस रीथ फ्लैटब्रेड पिज़्ज़ा",
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
      ],
      "hi": [
        "1 कप आटा, ½ छोटा चम्मच बेकिंग पाउडर, ⅓ कप दही, 2 कद्दूकस टमाटर, ½ कप कटा पालक, ½ कप कद्दूकस चीज़ और चुटकीभर नमक"
      ]
    },
    "steps": {
      "en": [
        "Heat oven to 220°C. Knead flour, baking powder, salt and curd, adding water by teaspoons as needed. Roll into two thin discs on baking paper and cut a hole in each centre.",
        "Simmer tomatoes until thick. Spread over the rings, scatter with spinach and cheese and bake 12–15 minutes until the edges brown."
      ],
      "hi": [
        "ओवन 220°C पर गरम करें। आटा, बेकिंग पाउडर, नमक और दही गूँधें। ज़रूरत पर थोड़ा पानी डालें। बेकिंग पेपर पर दो पतले गोले बेलकर बीच में छेद काटें।",
        "टमाटर गाढ़ा होने तक पकाएँ। गोलों पर फैलाकर पालक और चीज़ डालें। किनारे सुनहरे होने तक 12–15 मिनट बेक करें।"
      ]
    }
  },
  {
    "name": "Red & Green Christmas Pasta",
    "hindi": "लाल हरा क्रिसमस पास्ता",
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
      ],
      "hi": [
        "160 ग्राम पास्ता, 3 कटे टमाटर, 2 कप कटा पालक, 3 कटी लहसुन कलियाँ, 1 बड़ा चम्मच मक्खन और स्वादानुसार नमक"
      ]
    },
    "steps": {
      "en": [
        "Boil pasta in salted water until just tender. Reserve half a cup of cooking water before draining.",
        "Soften garlic in butter, add tomatoes and cook until saucy. Wilt the spinach in the sauce. Toss with pasta and enough cooking water to coat."
      ],
      "hi": [
        "नमकीन पानी में पास्ता नरम होने तक उबालें। छानने से पहले आधा कप पानी बचाएँ।",
        "मक्खन में लहसुन भूनें। टमाटर डालकर गलाएँ और पालक डालकर नरम करें। पास्ता और थोड़ा बचा पानी मिलाकर परोसें।"
      ]
    },
    "appliances": [
      "I"
    ]
  },
  {
    "name": "Christmas Beetroot Cream Pasta",
    "hindi": "क्रिसमस चुकंदर क्रीम पास्ता",
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
      ],
      "hi": [
        "160 ग्राम पास्ता, 1 छोटा छिला और कद्दूकस चुकंदर, ¼ कप क्रीम, 2 कटी लहसुन कलियाँ, 1 बड़ा चम्मच मक्खन और स्वादानुसार नमक"
      ]
    },
    "steps": {
      "en": [
        "Soften garlic in butter. Add beetroot, salt and a splash of water. Cover and cook 12–15 minutes until tender.",
        "Meanwhile boil pasta, saving half a cup of cooking water. Stir cream into the beetroot over low heat and toss with drained pasta, loosening with the reserved water."
      ],
      "hi": [
        "मक्खन में लहसुन भूनें। चुकंदर, नमक और थोड़ा पानी डालें। ढककर 12–15 मिनट नरम होने तक पकाएँ।",
        "इस बीच पास्ता उबालें और आधा कप पानी बचाएँ। धीमी आँच पर चुकंदर में क्रीम मिलाएँ। छना पास्ता डालें और बचे पानी से सॉस पतला करें।"
      ]
    },
    "appliances": [
      "I"
    ]
  }
];
