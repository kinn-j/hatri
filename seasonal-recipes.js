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
  }
];
