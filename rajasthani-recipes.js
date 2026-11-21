// Regional home-cooking adaptations. Timings list prep and cook separately from advance soaking.
const RAJASTHANI_PANTRY = {
  "Daily vegetables": [
    ["babypotato", "Baby potatoes", "छोटे आलू"],
    ["clusterbeans", "Cluster beans (gawar phali)", "ग्वार फली"],
    ["freshturmeric", "Fresh turmeric root", "कच्ची हल्दी"],
    ["pearlonion", "Pearl onions", "छोटे साबुत प्याज़"],
    ["radishpods", "Radish pods (mogri)", "मूली की फलियाँ (मोगरी)"]
  ],
  "Fruits & coconut": [
    ["gunda", "Fresh gunda (lasoda gum berries)", "ताज़े गूंदे (लसोड़े)"],
    ["kachri", "Fresh kachri (wild melon)", "ताज़ी काचरी"],
    ["karonda", "Fresh karonda berries", "ताज़े करौंदे"]
  ],
  "Dals, pulses & more": [
    ["cookedblackchickpeas", "Cooked black chickpeas", "उबले काले चने"],
    ["kumatiya", "Food-grade dried kumatiya seeds", "खाने योग्य सूखे कुमटिया"]
  ],
  "Grains & flours": [
    ["barleyflour", "Barley flour", "जौ का आटा"],
    ["crackedmaize", "Cracked maize", "दरदरा मक्का"],
    ["mothflour", "Moth bean flour", "मोठ का आटा"],
    ["sproutedwheatflour", "Sprouted wheat flour", "अंकुरित गेहूँ का आटा"]
  ],
  "Specialty & other": [
    ["cookedbajraroti", "Cooked bajra rotis", "बनी हुई बाजरे की रोटी"],
    ["ediblegond", "Edible gond crystals", "खाने योग्य गोंद"],
    ["mishri", "Rock sugar crystals (mishri)", "मिश्री"],
    ["namkeenboondi", "Plain salted boondi", "सादी नमकीन बूंदी"],
    ["nigella", "Nigella seeds (kalonji)", "कलौंजी"],
    ["panchkutamix", "Dried panchkuta mix", "सूखा पंचकूटा मिश्रण"],
    ["plainboondi", "Plain unsalted boondi", "बिना नमक की सादी बूंदी"],
    ["preparedkanji", "Prepared mustard kanji", "तैयार सरसों की कांजी"]
  ]
};

const RAJASTHANI_RECIPES = [
  {
    name: "Kachri ki Chutney", hindi: "काचरी की चटनी",
    region: "Rajasthani", course: "Side", prep: 10, cook: 4, serves: 4, appliances: ["I"],
    pantry: ["kachri", "garlic", "dryredchilli", "cuminseeds", "lemon?", "ghee"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-kachri-ki-chutney-549046"],
    amounts: {
      en: ["150 g fresh kachri (wild melon), 3 garlic cloves and 2 dried red chillies", "1 tsp ghee, ½ tsp cumin seeds and ¼ tsp salt", "1 tsp lemon juice if needed"],
      hi: ["150 ग्राम ताज़ी काचरी, 3 लहसुन की कलियाँ और 2 सूखी लाल मिर्च", "1 छोटा चम्मच घी, ½ छोटा चम्मच जीरा और ¼ छोटा चम्मच नमक", "ज़रूरत पर 1 छोटा चम्मच नींबू रस"]
    },
    steps: {
      en: ["Peel and chop the kachri, discarding hard seeds. Grind it with the garlic, chillies and salt to a coarse paste.", "Sizzle the cumin in ghee. Add the paste and stir over medium heat for 3–4 min until it thickens.", "Taste for sourness, add lemon if needed and serve with bajra roti."],
      hi: ["काचरी छीलकर काटें और सख़्त बीज निकालें। लहसुन, मिर्च व नमक के साथ दरदरा पीसें।", "घी में जीरा चटकाएँ। लेप डालकर मध्यम आँच पर 3–4 मिनट गाढ़ा होने तक चलाएँ।", "खट्टापन चखें, ज़रूरत पर नींबू डालें और बाजरा रोटी के साथ परोसें।"]
    }
  },
  {
    name: "Hara Chana ki Chutney", hindi: "हरे चने की चटनी",
    region: "Rajasthani", course: "Side", prep: 9, cook: 5, serves: 4, appliances: ["I"],
    pantry: ["greenchickpeas", "coriander", "gchilli", "lemon", "roastedcuminpowder"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/green-chana-chutney-recipe-in-hindi"],
    amounts: {
      en: ["¾ cup shelled fresh green chickpeas, ½ cup coriander leaves and tender stems, and 1 green chilli", "1 tbsp lemon juice, ¼ tsp roasted cumin powder and ¼ tsp salt", "2–3 tbsp drinking water"],
      hi: ["¾ कप छिले ताज़े हरे चने, ½ कप हरा धनिया और कोमल डंठल, और 1 हरी मिर्च", "1 बड़ा चम्मच नींबू रस, ¼ छोटा चम्मच भुना जीरा पाउडर और ¼ छोटा चम्मच नमक", "2–3 बड़े चम्मच पीने का पानी"]
    },
    steps: {
      en: ["Simmer the shelled chickpeas in boiling water for about 5 min until just tender. Drain and rinse briefly under cool water.", "Grind the chickpeas, coriander, chilli, lemon, cumin and salt with 2 tbsp water.", "Scrape down the sides and blend briefly again, adding a little more water if necessary. Serve as a thick, textured chutney."],
      hi: ["छिले चने उबलते पानी में लगभग 5 मिनट हल्के नरम होने तक पकाएँ। निथारकर थोड़ा ठंडा पानी डालें।", "चने, धनिया, मिर्च, नींबू, जीरा और नमक 2 बड़े चम्मच पानी के साथ पीसें।", "मिक्सर की दीवार से मिश्रण नीचे करें। ज़रूरत पर थोड़ा पानी डालकर फिर पीसें और गाढ़ी, दरदरी चटनी परोसें।"]
    }
  },
  {
    name: "Kairi ki Launji", hindi: "कैरी की लौंजी",
    region: "Rajasthani", course: "Side", prep: 7, cook: 12, serves: 4, appliances: ["I"],
    pantry: ["rawmango", "jaggery", "fennel", "nigella"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/kacche-aam-ki-launji-recipe"],
    amounts: {
      en: ["1 medium raw mango, ¼ cup grated jaggery and ¼ cup water", "2 tsp oil, ½ tsp fennel seeds and ¼ tsp nigella seeds", "¼ tsp each turmeric, chilli powder and salt"],
      hi: ["1 मध्यम कच्चा आम, ¼ कप कद्दूकस गुड़ और ¼ कप पानी", "2 छोटे चम्मच तेल, ½ छोटा चम्मच सौंफ और ¼ छोटा चम्मच कलौंजी", "¼ छोटा चम्मच हल्दी, लाल मिर्च पाउडर और नमक"]
    },
    steps: {
      en: ["Peel and cut the mango into thin wedges. Sizzle the fennel and nigella in oil.", "Add the mango, water, turmeric and salt. Cover for 5–6 min until the mango is almost tender.", "Stir in the jaggery and chilli. Simmer uncovered until the mango looks glossy and the syrup lightly coats a spoon."],
      hi: ["कैरी छीलकर पतली फाँकें काटें। तेल में सौंफ और कलौंजी चटकाएँ।", "कैरी, पानी, हल्दी और नमक डालकर 5–6 मिनट ढकें, जब तक फाँकें लगभग नरम हों।", "गुड़ और मिर्च मिलाकर खुला पकाएँ, जब तक कैरी चमकने लगे और चाशनी चम्मच पर हल्की परत छोड़े।"]
    }
  },
  {
    name: "Gajar ki Launji", hindi: "गाजर की लौंजी",
    region: "Rajasthani", course: "Side", prep: 7, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["carrot", "jaggery", "fennel", "amchur"],
    source: ["Mharo Rajasthan’s Recipes", "https://mharorajasthanrecipes.blogspot.com/2010/07/gajar-ki-launji-sweet-and-sour-carrot.html"],
    amounts: {
      en: ["200 g carrots, 2 tsp oil and ¼ cup water", "½ tsp fennel seeds, ¼ tsp chilli powder and ¼ tsp salt", "1 tbsp grated jaggery and ½ tsp amchur"],
      hi: ["200 ग्राम गाजर, 2 छोटे चम्मच तेल और ¼ कप पानी", "½ छोटा चम्मच सौंफ, ¼ छोटा चम्मच लाल मिर्च और ¼ छोटा चम्मच नमक", "1 बड़ा चम्मच कद्दूकस गुड़ और ½ छोटा चम्मच अमचूर"]
    },
    steps: {
      en: ["Peel the carrots and cut into short, thin batons. Heat oil and sizzle the fennel.", "Toss in the carrots, chilli, salt and water. Cover and simmer for 7–8 min until just tender.", "Add jaggery and amchur. Cook uncovered, stirring until the carrots are coated in a sweet-tart glaze."],
      hi: ["गाजर छीलकर छोटी पतली डंडियाँ काटें। तेल में सौंफ चटकाएँ।", "गाजर, मिर्च, नमक और पानी डालकर 7–8 मिनट ढकें, जब तक गाजर हल्की नरम हो।", "गुड़ और अमचूर डालें। बिना ढके चलाते हुए पकाएँ, जब तक खट्टी-मीठी परत चढ़ जाए।"]
    }
  },
  {
    name: "Karonda Mirch Sabzi", hindi: "करौंदा मिर्च की सब्ज़ी",
    region: "Rajasthani", course: "Side", prep: 8, cook: 8, serves: 2, appliances: ["I"],
    pantry: ["karonda", "bigchilli", "fennel", "mustardoil"],
    source: ["Zayka Ka Tadka", "https://www.zaykakatadka.com/recipe/karonda-mirchi-sabzi/"],
    amounts: {
      en: ["100 g fresh karonda berries and 2 mild long green chillies", "1 tbsp mustard oil and ½ tsp fennel seeds", "¼ tsp each turmeric and salt, and 1 tsp jaggery if very tart"],
      hi: ["100 ग्राम ताज़े करौंदे और 2 कम तीखी लंबी हरी मिर्च", "1 बड़ा चम्मच सरसों का तेल और ½ छोटा चम्मच सौंफ", "¼ छोटा चम्मच हल्दी और नमक, बहुत खट्टा हो तो 1 छोटा चम्मच गुड़"]
    },
    steps: {
      en: ["Halve the berries, remove any hard seeds and slice the chillies.", "Warm mustard oil, sizzle the fennel and stir-fry the chillies for 2 min. Add berries, turmeric and salt with a splash of water.", "Cover for 4–5 min until the berries soften but hold their shape. Taste and add jaggery if needed. Serve a small portion with roti."],
      hi: ["करौंदे आधे कर सख़्त बीज निकालें और मिर्च काटें।", "सरसों के तेल में सौंफ चटकाकर मिर्च 2 मिनट भूनें। करौंदे, हल्दी, नमक और थोड़ा पानी डालें।", "4–5 मिनट ढकें, जब तक करौंदे नरम हों लेकिन टूटें नहीं। चखकर ज़रूरत पर गुड़ डालें। रोटी के साथ थोड़ा परोसें।"]
    }
  },
  {
    name: "Mooli Mogri Sabzi", hindi: "मूली की मोगरी की सब्ज़ी",
    region: "Rajasthani", course: "Side", prep: 8, cook: 10, serves: 2, appliances: ["I"],
    pantry: ["radishpods", "mustardoil", "cuminseeds", "amchur", "gchilli?"],
    source: ["Rekha Rathi on Cookpad", "https://cookpad.com/eng/recipes/11129915"],
    amounts: {
      en: ["200 g tender mogri (radish pods), 2 tsp mustard oil and ½ tsp cumin seeds", "¼ tsp each turmeric and salt, plus ½ tsp amchur", "1 chopped green chilli (optional)"],
      hi: ["200 ग्राम कोमल मोगरी, 2 छोटे चम्मच सरसों का तेल और ½ छोटा चम्मच जीरा", "¼ छोटा चम्मच हल्दी और नमक, और ½ छोटा चम्मच अमचूर", "1 कटी हरी मिर्च (वैकल्पिक)"]
    },
    steps: {
      en: ["Trim the pods, discarding woody ones. Wash and cut the tender pods into 2 cm lengths.", "Sizzle the cumin and optional chilli in hot oil. Add the pods, turmeric, salt and a tablespoon of water. Cover for 5 min.", "Lift the lid and stir-fry until the water dries and the pods are tender-crisp. Mix in the amchur and serve."],
      hi: ["मोगरी के सिरे काटें और कड़ी फलियाँ हटाएँ। कोमल फलियाँ धोकर 2 सेमी काटें।", "तेल में जीरा और चाहें तो मिर्च चटकाएँ। मोगरी, हल्दी, नमक और 1 बड़ा चम्मच पानी डालकर 5 मिनट ढकें।", "ढक्कन हटाकर नमी सूखने और फलियाँ हल्की करारी रहने तक भूनें। अमचूर मिलाकर परोसें।"]
    }
  },
  {
    name: "Marwari Mogar Dal", hindi: "मारवाड़ी मोगर दाल",
    region: "Rajasthani", course: "Side", prep: 6, cook: 14, serves: 2, appliances: ["I"], soak: [30, "split moong dal"],
    pantry: ["moong", "ghee", "cuminseeds", "dryredchilli", "lemon?"],
    source: ["Marwari Rasoi", "https://marwarirasoi.blogspot.com/2010/06/dry-moong-mogar-faraka-mogar.html"],
    amounts: {
      en: ["½ cup split yellow moong dal, soaked 30 min and drained", "1 tbsp ghee, ½ tsp cumin seeds and 1 dried red chilli", "¾ cup water, ¼ tsp each turmeric and salt, and 1 tsp lemon juice (optional)"],
      hi: ["½ कप धुली पीली मूँग दाल, 30 मिनट भिगोकर निथारी", "1 बड़ा चम्मच घी, ½ छोटा चम्मच जीरा और 1 सूखी लाल मिर्च", "¾ कप पानी, ¼ छोटा चम्मच हल्दी और नमक, और 1 छोटा चम्मच नींबू रस (वैकल्पिक)"]
    },
    steps: {
      en: ["Sizzle the cumin and dried chilli in ghee. Stir in the drained dal and turmeric for 1 min.", "Add the water and salt. Cover loosely and cook gently for about 10 min until a grain crushes easily. Add a spoonful of water if needed.", "Uncover and let the excess moisture cook off. Fluff lightly to keep the grains separate and add optional lemon."],
      hi: ["घी में जीरा और सूखी मिर्च चटकाएँ। निथारी दाल और हल्दी डालकर 1 मिनट चलाएँ।", "पानी और नमक डालकर ढीला ढकें। लगभग 10 मिनट धीमी आँच पर पकाएँ, जब तक दाना आसानी से दबे। ज़रूरत पर चम्मच भर पानी डालें।", "ढक्कन हटाकर अतिरिक्त नमी सुखाएँ। दाने अलग रखने के लिए हल्का उलटें और चाहें तो नींबू डालें।"]
    }
  },
  {
    name: "Gawar Phali Besan", hindi: "ग्वार फली बेसन",
    region: "Rajasthani", course: "Side", prep: 8, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["clusterbeans", "besan", "cuminseeds", "amchur"],
    source: ["HerZindagi", "https://www.herzindagi.com/hindi/recipe-tips/rajasthani-besan-wali-gawar-phali-ki-sabji-recipe-article-1026948"],
    amounts: {
      en: ["200 g tender cluster beans and 2 tbsp besan", "1 tbsp oil, ½ tsp cumin seeds and ¼ cup water", "¼ tsp each turmeric, chilli powder and salt, plus ½ tsp amchur"],
      hi: ["200 ग्राम कोमल ग्वार फली और 2 बड़े चम्मच बेसन", "1 बड़ा चम्मच तेल, ½ छोटा चम्मच जीरा और ¼ कप पानी", "¼ छोटा चम्मच हल्दी, लाल मिर्च और नमक, और ½ छोटा चम्मच अमचूर"]
    },
    steps: {
      en: ["Trim and chop the beans. In a dry pan stir the besan for 2–3 min over low heat until nutty and set aside.", "Sizzle the cumin in oil, stir in beans, water, turmeric, chilli and salt and cover for 6–7 min until tender.", "Uncover, cook off excess moisture and toss with the roasted besan and amchur until lightly crumbly."],
      hi: ["ग्वार के सिरे काटकर फलियाँ काटें। सूखे पैन में बेसन 2–3 मिनट धीमी आँच पर महकने तक चलाएँ और अलग रखें।", "तेल में जीरा चटकाकर फली, पानी, हल्दी, मिर्च और नमक डालें। नरम होने तक 6–7 मिनट ढकें।", "ढक्कन हटाकर बची नमी सुखाएँ। भुना बेसन और अमचूर डालकर हल्का भुरभुरा होने तक मिलाएँ।"]
    }
  },
  {
    name: "Kachri ki Sabzi", hindi: "काचरी की सब्ज़ी",
    region: "Rajasthani", course: "Side", prep: 8, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["kachri", "mustardoil", "cuminseeds", "corianderpowder"],
    source: ["NDTV India", "https://ndtv.in/food/rajasthani-kachri-sabzi-kaise-banaye-how-to-make-authentic-kachri-ki-sabji-recipe-video-12100502"],
    amounts: {
      en: ["250 g fresh kachri (wild melon), 1 tbsp mustard oil and ½ tsp cumin seeds", "½ tsp ground coriander and ¼ tsp each turmeric, chilli powder and salt", "2 tbsp water"],
      hi: ["250 ग्राम ताज़ी काचरी, 1 बड़ा चम्मच सरसों का तेल और ½ छोटा चम्मच जीरा", "½ छोटा चम्मच धनिया पाउडर और ¼ छोटा चम्मच हल्दी, लाल मिर्च व नमक", "2 बड़े चम्मच पानी"]
    },
    steps: {
      en: ["Peel the fruits and halve them. Scrape out tough seeds and slice into thin half-moons.", "Sizzle the cumin in oil, add the kachri, spices, salt and water and stir to coat.", "Cover for 7–8 min, until the pieces yield to a fork. Uncover and fry until the moisture dries and the spices cling. Eat with roti."],
      hi: ["काचरी छीलकर आधी करें। सख़्त बीज निकालकर पतले अर्धचंद्र काटें।", "तेल में जीरा चटकाकर काचरी, मसाले, नमक और पानी मिलाएँ।", "काँटा आसानी से जाने तक 7–8 मिनट ढकें। फिर खुला भूनकर नमी सुखाएँ और मसाला चढ़ने पर रोटी के साथ परोसें।"]
    }
  },
  {
    name: "Tamatar ki Launji", hindi: "टमाटर की लौंजी",
    region: "Rajasthani", course: "Side", prep: 5, cook: 10, serves: 3, appliances: ["I"],
    pantry: ["tomato", "jaggery", "fennel", "nigella"],
    source: ["Vanita’s Corner", "https://vanitascorner.com/tamatar-ki-launji/"],
    amounts: {
      en: ["250 g ripe tomatoes, 2 tsp oil, ½ tsp fennel and ¼ tsp nigella seeds", "1 tbsp jaggery and ¼ tsp each chilli powder and salt"],
      hi: ["250 ग्राम पके टमाटर, 2 छोटे चम्मच तेल, ½ छोटा चम्मच सौंफ और ¼ छोटा चम्मच कलौंजी", "1 बड़ा चम्मच गुड़ और ¼ छोटा चम्मच लाल मिर्च व नमक"]
    },
    steps: {
      en: ["Cut the tomatoes into 2 cm pieces. Heat the oil and sizzle the fennel and nigella.", "Add the tomatoes, salt and chilli. Simmer for 6–7 min, stirring lightly so some pieces stay whole.", "Add the jaggery and cook for another 2 min until the juices turn syrupy. Serve warm or cool."],
      hi: ["टमाटर 2 सेमी काटें। तेल गरम करके सौंफ और कलौंजी चटकाएँ।", "टमाटर, नमक और मिर्च डालें। कुछ टुकड़े साबुत रखने के लिए हल्का चलाते हुए 6–7 मिनट पकाएँ।", "गुड़ डालकर रस गाढ़ा होने तक 2 मिनट और पकाएँ। गरम या ठंडा परोसें।"]
    }
  },
  {
    name: "Rajasthani Ghasela", hindi: "राजस्थानी घसेला",
    region: "Rajasthani", course: "Side", prep: 7, cook: 13, serves: 2, appliances: ["I"],
    pantry: ["besan", "ghee", "springonion", "cuminseeds", "gchilli?"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/besan-ka-pitta-recipe-in-hindi"],
    amounts: {
      en: ["½ cup besan, 1¼ cups water, 2 tsp ghee and ½ tsp cumin seeds", "2 spring onions, thinly sliced, ¼ tsp each salt, turmeric and red chilli powder", "1 chopped green chilli (optional)"],
      hi: ["½ कप बेसन, 1¼ कप पानी, 2 छोटे चम्मच घी और ½ छोटा चम्मच जीरा", "2 पतले कटे हरे प्याज़, ¼ छोटा चम्मच नमक, हल्दी और लाल मिर्च पाउडर", "1 कटी हरी मिर्च (वैकल्पिक)"]
    },
    steps: {
      en: ["Whisk besan, water, turmeric, chilli powder and salt into a smooth batter. Slice the spring onions, keeping the white and green parts separate.", "Sizzle cumin and optional chilli in ghee. Stir the onion whites for 1 min, then pour in the batter slowly while stirring.", "Cook over low-medium heat for 10–12 min, stirring and scraping constantly. Add the onion greens towards the end. When the besan is cooked and the mixture holds soft mounds, spoon it into a bowl and serve warm with roti."],
      hi: ["बेसन, पानी, हल्दी, लाल मिर्च और नमक फेंटकर चिकना घोल बनाएँ। हरे प्याज़ के सफ़ेद और हरे भाग अलग काटें।", "घी में जीरा और चाहें तो मिर्च चटकाएँ। सफ़ेद प्याज़ 1 मिनट चलाएँ। घोल धीरे-धीरे डालें और चलाते रहें।", "धीमी-मध्यम आँच पर लगातार चलाते व तली खुरचते हुए 10–12 मिनट पकाएँ। अंत में हरा प्याज़ डालें। बेसन पककर नरम गाढ़ा हो जाए तो कटोरे में निकालकर रोटी के साथ गरम परोसें।"]
    }
  },
  {
    name: "Rajasthani Makki Kheech", hindi: "राजस्थानी मक्की का खीच",
    region: "Rajasthani", course: "Complete", prep: 6, cook: 22, serves: 2, soak: [60, "cracked maize"],
    pantry: ["crackedmaize", "ghee", "buttermilk?"],
    source: ["Traditional Makki Khich (video)", "https://www.youtube.com/watch?v=BVJuzEuLvas"],
    amounts: {
      en: ["½ cup cracked maize, rinsed and soaked 1 hour", "2 cups fresh water, ¼ tsp salt and 2 tsp ghee", "Plain buttermilk to serve (optional)"],
      hi: ["½ कप दरदरा मक्का, धोकर 1 घंटा भिगोया", "2 कप ताज़ा पानी, ¼ छोटा चम्मच नमक और 2 छोटे चम्मच घी", "परोसने के लिए सादी छाछ (वैकल्पिक)"]
    },
    steps: {
      en: ["Drain the soaked maize. Put it in a pressure cooker with the fresh water and salt.", "Cook at high pressure for 10 min and let pressure release naturally. Open only once safe. The grains should crush easily, so cook longer if your maize is coarse.", "Stir well and simmer briefly if loose. Spoon into bowls, add ghee and serve with optional buttermilk."],
      hi: ["भीगा मक्का निथारें। ताज़े पानी और नमक के साथ प्रेशर कुकर में डालें।", "तेज़ दबाव पर 10 मिनट पकाएँ और दबाव अपने आप उतरने दें। सुरक्षित होने पर खोलें। दाने आसानी से दबने चाहिए, मोटा मक्का हो तो थोड़ा और पकाएँ।", "अच्छी तरह हिलाएँ और पतला लगे तो थोड़ा उबालें। कटोरियों में घी डालें और चाहें तो छाछ के साथ परोसें।"]
    }
  },
  {
    name: "Makki ki Raab", hindi: "मक्की की राब",
    region: "Rajasthani", course: "Drink", prep: 5, cook: 13, serves: 2, appliances: ["I"],
    pantry: ["makki", "buttermilk", "ghee", "cuminseeds"],
    source: ["The Rajasthani Kitchen", "https://www.rajasthanirecipes.com/blog/makki-ki-raab-recipe"],
    amounts: {
      en: ["3 tbsp maize flour, 2 cups plain buttermilk and ½ cup water", "1 tsp ghee, ½ tsp cumin seeds and ¼ tsp salt"],
      hi: ["3 बड़े चम्मच मक्के का आटा, 2 कप सादी छाछ और ½ कप पानी", "1 छोटा चम्मच घी, ½ छोटा चम्मच जीरा और ¼ छोटा चम्मच नमक"]
    },
    steps: {
      en: ["Whisk the maize flour into the cold water, then whisk in the buttermilk until lump-free.", "Cook over low heat, stirring constantly until it comes to a gentle simmer. Continue for 8–10 min until the flour is cooked and the raab lightly coats a spoon. Add salt.", "Sizzle cumin in ghee and pour it in. Thin with a little hot water if needed and serve warm in cups."],
      hi: ["मक्के का आटा ठंडे पानी में फेंटें। फिर छाछ मिलाकर गाँठें हटाएँ।", "धीमी आँच पर लगातार चलाते हुए हल्का उबाल लाएँ। 8–10 मिनट और पकाएँ, जब तक आटा पक जाए और राब चम्मच पर हल्की परत छोड़े। नमक डालें।", "घी में जीरा चटकाकर डालें। ज़रूरत पर थोड़ा गरम पानी मिलाकर कप में गरम परोसें।"]
    }
  },
  {
    name: "Gunda Kairi Sabzi", hindi: "गूंदा कैरी की सब्ज़ी",
    region: "Rajasthani", course: "Side", prep: 12, cook: 14, serves: 2, appliances: ["I"],
    pantry: ["gunda", "rawmango", "fennel", "mustardoil", "fenugreekseeds"],
    source: ["Maayeka", "https://maayeka.com/2021/05/rajasthani-gunda-kairi-ki-sabzi-lasoda-ki-sabji-video.html"],
    amounts: {
      en: ["200 g fresh gunda (lasoda gum berries) and ½ small raw mango, peeled and sliced", "1 tbsp mustard oil, ½ tsp crushed fennel and ⅛ tsp fenugreek seeds", "¼ tsp each turmeric, chilli powder and salt, plus water for blanching"],
      hi: ["200 ग्राम ताज़े गूंदे (लसोड़े) और ½ छोटा कच्चा आम, छीलकर कटा", "1 बड़ा चम्मच सरसों का तेल, ½ छोटा चम्मच कुटी सौंफ और ⅛ छोटा चम्मच मेथी दाना", "¼ छोटा चम्मच हल्दी, लाल मिर्च व नमक, और उबालने के लिए पानी"]
    },
    steps: {
      en: ["Blanch whole gunda for 6–7 min until just tender. Drain, cool until you can handle them, then split and remove the sticky pits with a small spoon.", "Sizzle the fennel and fenugreek in oil. Add the sliced mango, turmeric, chilli, salt and a splash of water. Cook for 3–4 min until the mango starts to soften.", "Toss in the gunda and cook uncovered for 2–3 min until the masala clings."],
      hi: ["साबुत गूंदे 6–7 मिनट हल्के नरम होने तक उबालें। निथारकर हाथ लगाने लायक ठंडे करें, चीरें और चम्मच से चिपचिपी गुठली निकालें।", "तेल में सौंफ और मेथी चटकाएँ। कैरी, हल्दी, मिर्च, नमक और थोड़ा पानी डालें। कैरी नरम होने तक 3–4 मिनट पकाएँ।", "गूंदे डालकर 2–3 मिनट खुला पकाएँ, जब तक मसाला चढ़ जाए।"]
    }
  },
  {
    name: "Kumatiya Sabzi", hindi: "कुमटिया की सब्ज़ी",
    region: "Rajasthani", course: "Side", prep: 8, cook: 27, serves: 2, soak: [480, "dried kumatiya seeds"],
    pantry: ["kumatiya", "mustardoil", "amchur", "cuminseeds", "corianderpowder"],
    source: ["Ramjeevan Foods", "https://ramjeevanfoods.com/blogs/recipes/kumatiya-ki-sabji-the-royal-desert-recipe-from-the-heart-of-rajasthan"],
    amounts: {
      en: ["⅓ cup food-grade dried kumatiya seeds, soaked overnight", "1 tbsp mustard oil, ½ tsp cumin seeds, ½ tsp ground coriander and ¼ tsp each turmeric, chilli powder and salt", "½ tsp amchur and water for cooking"],
      hi: ["⅓ कप खाने योग्य सूखे कुमटिया के बीज, रात भर भिगोए", "1 बड़ा चम्मच सरसों का तेल, ½ छोटा चम्मच जीरा व धनिया पाउडर, और ¼ छोटा चम्मच हल्दी, लाल मिर्च व नमक", "½ छोटा चम्मच अमचूर और पकाने के लिए पानी"]
    },
    steps: {
      en: ["Rinse the soaked seeds and cook in fresh water in a pressure cooker until tender, about 12 min at pressure plus natural release. Drain and discard the water.", "Sizzle cumin in oil. Add the ground spices, seeds, salt and a splash of fresh water.", "Toss for about 5 min until nearly dry. Add amchur and serve with millet roti."],
      hi: ["भीगे बीज धोकर ताज़े पानी में कुकर में नरम होने तक पकाएँ। दबाव पर लगभग 12 मिनट पकाकर दबाव अपने आप उतरने दें। पानी निथारकर फेंकें।", "तेल में जीरा चटकाएँ। पिसे मसाले, बीज, नमक और थोड़ा ताज़ा पानी डालें।", "लगभग 5 मिनट चलाकर लगभग सूखा करें। अमचूर मिलाकर बाजरे की रोटी के साथ परोसें।"]
    }
  },
  {
    name: "Marwari Boondi ki Sabzi", hindi: "मारवाड़ी बूंदी की सब्ज़ी",
    region: "Rajasthani", course: "Main", prep: 6, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["namkeenboondi", "curd", "besan", "ghee", "cuminseeds"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-boondi-ki-sabzi-hindi-955122"],
    amounts: {
      en: ["¾ cup plain salted boondi, ¾ cup plain curd, 1 tsp besan and ½ cup water", "2 tsp ghee, ½ tsp cumin seeds, ¼ tsp each turmeric and chilli powder, and salt to taste"],
      hi: ["¾ कप सादी नमकीन बूंदी, ¾ कप सादा दही, 1 छोटा चम्मच बेसन और ½ कप पानी", "2 छोटे चम्मच घी, ½ छोटा चम्मच जीरा, ¼ छोटा चम्मच हल्दी व लाल मिर्च और स्वादानुसार नमक"]
    },
    steps: {
      en: ["Whisk the curd with besan, water, turmeric and chilli until no lumps remain.", "Sizzle cumin in ghee. Lower the heat and pour in the curd slowly while stirring. Stir until gently simmering, then simmer for 5–6 min.", "Stir in the boondi during the last minute so it softens but does not dissolve. Taste before adding salt."],
      hi: ["दही, बेसन, पानी, हल्दी और मिर्च बिना गाँठ के फेंटें।", "घी में जीरा चटकाएँ। आँच धीमी करके दही थोड़ा-थोड़ा डालें और चलाएँ। हल्का उबाल आने तक चलाएँ और 5–6 मिनट पकाएँ।", "आख़िरी मिनट में बूंदी डालें, ताकि नरम हो पर घुले नहीं। नमक डालने से पहले चखें।"]
    }
  },
  {
    name: "Sabut Aloo Pyaz Sabzi", hindi: "साबुत आलू प्याज़ की सब्ज़ी",
    region: "Rajasthani", course: "Main", prep: 9, cook: 18, serves: 2, appliances: ["I"],
    pantry: ["babypotato", "pearlonion", "tomato", "ghee", "curd"],
    source: ["Zayka Ka Tadka", "https://www.zaykakatadka.com/recipe/sabut-aloo-pyaz-ki-sabji/"],
    amounts: {
      en: ["200 g small baby potatoes and 120 g small peeled pearl onions", "1 grated tomato, ¼ cup curd and 1 tbsp ghee", "½ tsp each cumin seeds and ground coriander, ¼ tsp each turmeric, chilli powder and salt"],
      hi: ["200 ग्राम छोटे आलू और 120 ग्राम छिले छोटे प्याज़", "1 कद्दूकस टमाटर, ¼ कप दही और 1 बड़ा चम्मच घी", "½ छोटा चम्मच जीरा व धनिया पाउडर, और ¼ छोटा चम्मच हल्दी, लाल मिर्च व नमक"]
    },
    steps: {
      en: ["Boil very small potatoes in salted water until a knife goes through, about 10–12 min. Drain. Meanwhile brown the whole onions lightly in ghee.", "Add cumin, tomato and the ground spices. Fry until the tomato thickens, then turn down the heat and stir in the whisked curd.", "Add the potatoes and salt, cover and simmer 5 min so the onions soften and the masala coats all the pieces."],
      hi: ["बहुत छोटे आलू नमकीन पानी में लगभग 10–12 मिनट उबालें, जब तक चाकू आसानी से जाए। निथारें। इसी बीच साबुत प्याज़ घी में हल्के सुनहरे करें।", "जीरा, टमाटर और पिसे मसाले डालें। टमाटर गाढ़ा होने पर आँच धीमी करें और फेंटा दही मिलाएँ।", "आलू और नमक डालकर 5 मिनट ढकें, ताकि प्याज़ नरम हों और मसाला चढ़ जाए।"]
    }
  },
  {
    name: "Rajasthani Kaju Makhana", hindi: "राजस्थानी काजू मखाना",
    region: "Rajasthani", course: "Main", prep: 8, cook: 14, serves: 2, appliances: ["I"],
    pantry: ["cashews", "makhana", "tomato", "ghee", "cream?"],
    source: ["Rajshri Food", "https://rajshrifood.com/rich-and-creamy-kaju-makhana-masala/"],
    amounts: {
      en: ["1½ cups makhana, ¼ cup cashews, 2 tomatoes and 1 tbsp ghee", "½ tsp each cumin seeds and ground coriander, ¼ tsp each chilli powder and salt", "½ cup water and 1 tbsp cream (optional)"],
      hi: ["1½ कप मखाने, ¼ कप काजू, 2 टमाटर और 1 बड़ा चम्मच घी", "½ छोटा चम्मच जीरा व धनिया पाउडर, ¼ छोटा चम्मच लाल मिर्च व नमक", "½ कप पानी और 1 बड़ा चम्मच क्रीम (वैकल्पिक)"]
    },
    steps: {
      en: ["Toast the makhana and half the cashews in half the ghee until lightly golden. Blend the remaining cashews with the chopped tomatoes and water.", "Sizzle cumin in the remaining ghee. Add the tomato-cashew sauce, coriander, chilli and salt. Simmer for 7–8 min until glossy and thick, adding a splash of water if needed.", "Stir in the toasted makhana and cashews. Heat for 1–2 min and finish with optional cream."],
      hi: ["आधे घी में मखाने और आधे काजू हल्के सुनहरे भूनें। बचे काजू कटे टमाटर और पानी के साथ पीसें।", "बचे घी में जीरा चटकाएँ। टमाटर-काजू का घोल, धनिया, मिर्च और नमक डालें। 7–8 मिनट चमकदार और गाढ़ा होने तक पकाएँ। ज़रूरत पर थोड़ा पानी डालें।", "भुने मखाने और काजू मिलाकर 1–2 मिनट गरम करें और चाहें तो क्रीम डालें।"]
    }
  },
  {
    name: "Jaisalmeri Kala Chana Kadhi", hindi: "जैसलमेरी काला चना कढ़ी",
    region: "Rajasthani", course: "Main", prep: 7, cook: 15, serves: 2, appliances: ["I"],
    pantry: ["cookedblackchickpeas", "curd", "besan", "ghee", "cuminseeds", "dryredchilli?"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/jaisalmer-kala-chana-kadhi-recipe"],
    amounts: {
      en: ["1 cup fully cooked black chickpeas, ¾ cup plain curd, 1½ tbsp besan and 1 cup water", "2 tsp ghee, ½ tsp cumin seeds, ¼ tsp turmeric, ¼ tsp salt and 1 dried chilli (optional)"],
      hi: ["1 कप पूरी तरह उबले काले चने, ¾ कप सादा दही, 1½ बड़ा चम्मच बेसन और 1 कप पानी", "2 छोटे चम्मच घी, ½ छोटा चम्मच जीरा, ¼ छोटा चम्मच हल्दी, ¼ छोटा चम्मच नमक और 1 सूखी मिर्च (वैकल्पिक)"]
    },
    steps: {
      en: ["Start with already-cooked chickpeas. Whisk curd, besan, turmeric and water.", "Sizzle cumin and optional chilli in ghee. Pour in the curd mixture over low heat, stirring continuously until gently bubbling.", "Add the chickpeas and salt and simmer 10 min until the gravy coats a spoon and has no raw besan taste."],
      hi: ["पहले से उबले चने लें। दही, बेसन, हल्दी और पानी फेंटें।", "घी में जीरा और चाहें तो मिर्च चटकाएँ। धीमी आँच पर दही का घोल लगातार चलाते हुए डालें और हल्का उबाल लाएँ।", "चने और नमक डालकर 10 मिनट पकाएँ, जब तक कढ़ी चम्मच पर टिके और कच्चे बेसन का स्वाद न रहे।"]
    }
  },
  {
    name: "Kacchi Haldi ki Sabzi", hindi: "कच्ची हल्दी की सब्ज़ी",
    region: "Rajasthani", course: "Main", prep: 13, cook: 20, serves: 3, appliances: ["I"],
    pantry: ["freshturmeric", "peas", "curd", "ghee", "garammasala"],
    source: ["ãhãram", "https://aahaaramonline.com/rajasthani-kacchi-haldi-ki-sabzi-turmeric-peas-curry/"],
    amounts: {
      en: ["75 g fresh turmeric root, ½ cup green peas and ¾ cup plain curd", "2½ tbsp ghee, ½ tsp cumin seeds, ½ tsp ground coriander and ¼ tsp each garam masala and salt", "¼ cup water"],
      hi: ["75 ग्राम कच्ची हल्दी, ½ कप हरी मटर और ¾ कप सादा दही", "2½ बड़े चम्मच घी, ½ छोटा चम्मच जीरा, ½ छोटा चम्मच धनिया पाउडर, ¼ छोटा चम्मच गरम मसाला और नमक", "¼ कप पानी"]
    },
    steps: {
      en: ["Peel and grate the turmeric. Fry it in 2 tbsp ghee for 8–10 min over medium-low heat until fragrant and less sharp.", "Sizzle cumin in the remaining ghee. Add the peas, ground coriander and water and cook covered until tender.", "Turn the heat low. Stir in whisked curd, then add the fried turmeric, salt and garam masala. Keep stirring to a gentle simmer and cook until thick."],
      hi: ["हल्दी छीलकर कद्दूकस करें। 2 बड़े चम्मच घी में धीमी-मध्यम आँच पर 8–10 मिनट भूनें, जब तक महक आए और तीखापन कम हो।", "बचे घी में जीरा चटकाएँ। मटर, धनिया पाउडर और पानी डालकर नरम होने तक ढकें।", "आँच धीमी कर फेंटा दही मिलाएँ। भुनी हल्दी, नमक और गरम मसाला डालें। लगातार चलाते हुए हल्का उबाल लाकर गाढ़ा होने तक पकाएँ।"]
    }
  },
  {
    name: "Rajasthani Gulab Jamun ki Sabzi", hindi: "राजस्थानी गुलाब जामुन की सब्ज़ी",
    region: "Rajasthani", course: "Main", prep: 18, cook: 25, serves: 3, appliances: ["I"],
    pantry: ["mawa", "maida", "tomato", "onion", "curd", "ghee"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/gulab-jamun-ki-sabzi"],
    amounts: {
      en: ["150 g plain unsweetened mawa, 2 tbsp maida and oil for frying", "1 onion, 2 tomatoes, ¼ cup curd, 1 tbsp ghee and ½ cup water", "½ tsp each cumin and ground coriander, plus salt, turmeric and chilli powder to taste"],
      hi: ["150 ग्राम बिना मीठा मावा, 2 बड़े चम्मच मैदा और तलने के लिए तेल", "1 प्याज़, 2 टमाटर, ¼ कप दही, 1 बड़ा चम्मच घी और ½ कप पानी", "½ छोटा चम्मच जीरा व धनिया पाउडर, और स्वादानुसार नमक, हल्दी व लाल मिर्च"]
    },
    steps: {
      en: ["Knead the mawa and flour into a smooth dough and shape eight small crack-free balls. Fry in medium-low oil, turning often until golden. Drain and keep dry.", "Sizzle cumin in ghee. Fry finely chopped onion until golden, add puréed tomatoes and the ground spices and cook until thick. Lower the heat and stir in the curd.", "Add water and salt and simmer for 5 min. Slide the fried unsweetened balls into the gravy just before serving."],
      hi: ["मावा और मैदा गूँथकर आठ छोटी बिना दरार वाली गोलियाँ बनाएँ। मध्यम से धीमे गरम तेल में पलटते हुए सुनहरी तलें। निथारकर सूखी रखें।", "घी में जीरा चटकाएँ। बारीक प्याज़ सुनहरा भूनें, पिसे टमाटर और मसाले डालकर गाढ़ा करें। आँच धीमी कर दही मिलाएँ।", "पानी और नमक डालकर 5 मिनट उबालें। परोसने से ठीक पहले तली बिना मीठी गोलियाँ रसे में डालें।"]
    }
  },
  {
    name: "Gawar Phali Dhokli", hindi: "ग्वार फली ढोकली",
    region: "Rajasthani", course: "Complete", prep: 18, cook: 20, serves: 2, appliances: ["I"],
    pantry: ["clusterbeans", "atta", "besan", "curd", "cuminseeds", "ajwain"],
    source: ["Nisha Madhulika", "https://nishamadhulika.com/en/2087-gujarat_and_rajasthan_special_recipe_gawar_phali_dhokli_curry.html"],
    amounts: {
      en: ["180 g cluster beans, trimmed and cut, and ¾ cup curd", "½ cup atta, 2 tbsp besan, ¼ tsp ajwain, 1 tsp oil and water to knead", "1 tbsp oil, ½ tsp cumin, ¼ tsp each turmeric and chilli powder, ½ tsp salt divided, and 1½ cups water for the curry"],
      hi: ["180 ग्राम ग्वार फली, सिरे काटकर कटी, और ¾ कप दही", "½ कप आटा, 2 बड़े चम्मच बेसन, ¼ छोटा चम्मच अजवाइन, 1 छोटा चम्मच तेल और गूँथने का पानी", "1 बड़ा चम्मच तेल, ½ छोटा चम्मच जीरा, ¼ छोटा चम्मच हल्दी व लाल मिर्च, कुल ½ छोटा चम्मच नमक और रसे के लिए 1½ कप पानी"]
    },
    steps: {
      en: ["Mix both flours with ajwain, half the salt and 1 tsp oil. Knead firm with water, roll a thin sheet and cut into small diamonds.", "Sizzle cumin in 1 tbsp oil. Add beans, turmeric, chilli, remaining salt and the curry water. Simmer 6 min, then scatter in the dhokli pieces.", "Simmer 8–10 min until the beans and dough are cooked. Whisk the curd, stir it in over low heat and bring back to a gentle simmer before serving."],
      hi: ["दोनों आटे में अजवाइन, आधा नमक और 1 छोटा चम्मच तेल मिलाएँ। पानी से सख़्त गूँथें, पतला बेलें और छोटी चौकोर ढोकली काटें।", "1 बड़ा चम्मच तेल में जीरा चटकाएँ। फली, हल्दी, मिर्च, बचा नमक और रसे का पानी डालकर 6 मिनट उबालें। ढोकली अलग-अलग करके डालें।", "फली और ढोकली पकने तक 8–10 मिनट उबालें। दही फेंटकर धीमी आँच पर मिलाएँ और हल्का उबाल आने पर परोसें।"]
    }
  },
  {
    name: "Marwari Panchkuta", hindi: "मारवाड़ी पंचकूटा",
    region: "Rajasthani", course: "Side", prep: 10, cook: 28, serves: 3, soak: [480, "dried panchkuta mix"],
    pantry: ["panchkutamix", "mustardoil", "cuminseeds", "corianderpowder"],
    source: ["Sidhi Marwadi", "https://sidhimarwadi.com/blogs/rajasthani-rasoi/panchkuta-banane-ka-simple-tareeka"],
    amounts: {
      en: ["¾ cup food-grade dried panchkuta blend (ker, sangri, kumatiya, dried kachri and dried mango)", "1 tbsp mustard oil, ½ tsp cumin seeds and ½ tsp ground coriander", "¼ tsp each turmeric, chilli powder and salt, and water for soaking and boiling"],
      hi: ["¾ कप खाने योग्य सूखा पंचकूटा मिश्रण (केर, सांगरी, कुमटिया, सूखी काचरी और अमचूर के टुकड़े)", "1 बड़ा चम्मच सरसों का तेल, ½ छोटा चम्मच जीरा और ½ छोटा चम्मच धनिया पाउडर", "¼ छोटा चम्मच हल्दी, लाल मिर्च व नमक और भिगोने व उबालने का पानी"]
    },
    steps: {
      en: ["Rinse away any grit and soak the dried mix overnight. Drain and pressure-cook in fresh water until tender, about 10 min at pressure plus natural release. Drain.", "Sizzle cumin in mustard oil. Add the ground spices with a tablespoon of water and then toss in the cooked mix and salt.", "Stir-fry uncovered for about 5 min until almost dry and evenly coated. Serve with roti."],
      hi: ["मिश्रण अच्छी तरह धोकर रात भर भिगोएँ। निथारकर ताज़े पानी में कुकर के दबाव पर लगभग 10 मिनट पकाएँ। दबाव अपने आप उतरने पर निथारें।", "सरसों के तेल में जीरा चटकाएँ। चम्मच भर पानी के साथ पिसे मसाले, उबला मिश्रण और नमक डालें।", "लगभग 5 मिनट खुला भूनें, जब तक नमी लगभग सूख जाए और मसाला चढ़ जाए। रोटी के साथ परोसें।"]
    }
  },
  {
    name: "Rajasthani Dubki Kadhi", hindi: "राजस्थानी डुबकी कढ़ी",
    region: "Rajasthani", course: "Main", prep: 10, cook: 20, serves: 3, appliances: ["I"],
    pantry: ["curd", "besan", "ghee", "cuminseeds", "gchilli?"],
    source: ["Nisha Madhulika", "https://www.nishamadhulika.com/en/387-rajsthani-dubaki-kadhi.html"],
    amounts: {
      en: ["1 cup curd, 3 tbsp besan, 2 cups water and ¼ tsp turmeric for the gravy", "½ cup besan and about ¼ cup water for the dumplings", "1 tbsp ghee, ½ tsp cumin, ½ tsp salt divided and 1 finely chopped green chilli (optional)"],
      hi: ["रसे के लिए 1 कप दही, 3 बड़े चम्मच बेसन, 2 कप पानी और ¼ छोटा चम्मच हल्दी", "बड़ियों के लिए ½ कप बेसन और लगभग ¼ कप पानी", "1 बड़ा चम्मच घी, ½ छोटा चम्मच जीरा, कुल ½ छोटा चम्मच नमक और 1 बारीक कटी हरी मिर्च (वैकल्पिक)"]
    },
    steps: {
      en: ["Whisk the gravy ingredients with half the salt. In another bowl beat the dumpling besan with the remaining salt and enough water for a thick spoonable batter.", "Sizzle cumin and optional chilli in ghee. Add the gravy while stirring and bring to a gentle but steady boil.", "Drop small half-teaspoonfuls of batter directly into the bubbling gravy. Simmer gently for 12–15 min until the centres are set and the curry has thickened."],
      hi: ["रसे की सामग्री में आधा नमक डालकर फेंटें। अलग कटोरे में बड़ियों का बेसन, बचा नमक और इतना पानी फेंटें कि गाढ़ा घोल बने।", "घी में जीरा और चाहें तो मिर्च चटकाएँ। रसा चलाते हुए डालें और लगातार हल्का उबाल लाएँ।", "उबलते रसे में आधा-आधा छोटा चम्मच घोल डालें। 12–15 मिनट धीमी आँच पर पकाएँ, जब तक बड़ियाँ अंदर तक पकें और कढ़ी गाढ़ी हो जाए।"]
    }
  },
  {
    name: "Jodhpuri Kabuli Pulao", hindi: "जोधपुरी काबुली पुलाव",
    region: "Rajasthani", course: "Complete", prep: 23, cook: 38, serves: 4, appliances: ["I"],
    pantry: ["basmatirice", "potato", "cauliflower", "peas", "bread", "onion", "curd", "ghee", "cashews", "raisins"],
    source: ["Naturally Nidhi", "https://naturallynidhi.com/jodhpuri-kabuli-pulao/"],
    amounts: {
      en: ["1 cup basmati rice, 1 potato, 1 cup cauliflower florets, ½ cup peas and 2 bread slices", "1 large onion, ¾ cup curd, 3 tbsp ghee and ¼ cup water", "2 tbsp cashews, 1 tbsp raisins, 1 bay leaf, 2 cardamom pods, ½ tsp garam masala and ¾ tsp salt divided"],
      hi: ["1 कप बासमती चावल, 1 आलू, 1 कप फूलगोभी, ½ कप मटर और 2 ब्रेड स्लाइस", "1 बड़ा प्याज़, ¾ कप दही, 3 बड़े चम्मच घी और ¼ कप पानी", "2 बड़े चम्मच काजू, 1 बड़ा चम्मच किशमिश, 1 तेजपत्ता, 2 इलायची, ½ छोटा चम्मच गरम मसाला और कुल ¾ छोटा चम्मच नमक"]
    },
    steps: {
      en: ["Boil the rice with the bay leaf, cardamom and half the salt until almost tender. Drain. Separately fry thin onion slices, then toast bread cubes, cashews and raisins in portions of the ghee.", "Brown small potato cubes and the cauliflower. Add peas, whisked curd, garam masala, remaining salt and water. Cover and cook until the vegetables are tender and the masala is thick.", "Layer half the rice, the vegetables and the remaining rice in a heavy pot. Scatter over the fried onion, bread and nuts. Cover tightly and steam on very low for 8–10 min before serving in layers."],
      hi: ["चावल तेजपत्ता, इलायची और आधे नमक के साथ लगभग नरम उबालकर निथारें। घी में अलग-अलग पतला प्याज़, ब्रेड के टुकड़े, काजू और किशमिश सेंकें।", "छोटे आलू और गोभी हल्के भूरे करें। मटर, फेंटा दही, गरम मसाला, बचा नमक और पानी डालें। ढककर सब्ज़ियाँ नरम और मसाला गाढ़ा करें।", "भारी बर्तन में आधा चावल, सब्ज़ी और बचा चावल परतों में रखें। प्याज़, ब्रेड और मेवे डालें। कसकर ढककर बहुत धीमी आँच पर 8–10 मिनट दम दें और परतों में परोसें।"]
    }
  },
  {
    name: "Gatte ka Pulao", hindi: "गट्टे का पुलाव",
    region: "Rajasthani", course: "Rice", prep: 19, cook: 23, serves: 3, appliances: ["I"],
    pantry: ["besan", "curd", "basmatirice", "ghee", "onion", "ajwain", "cuminseeds"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/rajasthani-gatte-ka-pulao-recipe"],
    amounts: {
      en: ["½ cup besan, 1 tbsp curd, ¼ tsp ajwain, 1 tsp oil and water to knead", "¾ cup basmati rice, 1 small onion, 1 tbsp ghee, ½ tsp cumin seeds and 1¼ cups cooking liquid", "½ tsp salt divided and ¼ tsp garam masala"],
      hi: ["½ कप बेसन, 1 बड़ा चम्मच दही, ¼ छोटा चम्मच अजवाइन, 1 छोटा चम्मच तेल और गूँथने का पानी", "¾ कप बासमती, 1 छोटा प्याज़, 1 बड़ा चम्मच घी, ½ छोटा चम्मच जीरा और 1¼ कप पकाने का तरल", "कुल ½ छोटा चम्मच नमक और ¼ छोटा चम्मच गरम मसाला"]
    },
    steps: {
      en: ["Knead the besan, curd, ajwain, oil and half the salt into a firm dough, adding water by the spoon. Roll thin logs and boil about 8 min until cooked through. Slice the logs and keep the cooking liquid.", "Sizzle cumin in ghee, brown sliced onion and stir in the gatta pieces and rinsed rice.", "Add the remaining salt, garam masala and enough gatta liquid and water to total 1¼ cups. Cover and cook on low until the rice is tender. Rest covered briefly and fluff."],
      hi: ["बेसन, दही, अजवाइन, तेल और आधे नमक में चम्मच-चम्मच पानी डालकर सख़्त गूँथें। पतली बेलनाकार लोइयाँ बनाकर लगभग 8 मिनट अंदर तक उबालें। गट्टे काटें और पानी बचाएँ।", "घी में जीरा चटकाएँ, कटा प्याज़ भूरा करें और गट्टे व धुले चावल मिलाएँ।", "बचा नमक, गरम मसाला और गट्टे का पानी व सादा पानी मिलाकर कुल 1¼ कप डालें। चावल नरम होने तक धीमी आँच पर ढकें। थोड़ी देर ढककर रखकर हल्का उलटें।"]
    }
  },
  {
    name: "Rajasthani Meethe Chawal", hindi: "राजस्थानी मीठे चावल",
    region: "Rajasthani", course: "Sweet", prep: 8, cook: 17, serves: 3, appliances: ["I"],
    pantry: ["basmatirice", "ghee", "sugar", "saffron", "almonds", "raisins", "cardamom"],
    source: ["Mints Recipes", "https://www.mintsrecipes.com/rajasthani-sweet-rice-recipes-kesar/"],
    amounts: {
      en: ["¾ cup basmati rice, 1¼ cups water and 1 pinch saffron", "¼ cup sugar, 1 tbsp ghee, 3 green cardamom pods, 1 tbsp sliced almonds and 1 tbsp raisins"],
      hi: ["¾ कप बासमती, 1¼ कप पानी और चुटकी भर केसर", "¼ कप चीनी, 1 बड़ा चम्मच घी, 3 हरी इलायची, 1 बड़ा चम्मच कटे बादाम और 1 बड़ा चम्मच किशमिश"]
    },
    steps: {
      en: ["Rinse the rice. Soak saffron in 2 tbsp of the measured warm water. Fry almonds and raisins in the ghee and lift out.", "In the same pan, add crushed cardamom and rice, followed by the remaining water. Cover and cook on low until the rice is nearly tender.", "Scatter sugar over the rice and drizzle in the saffron water. Cover for 4–5 min until sugar dissolves and moisture is absorbed. Fluff gently and top with the nuts and raisins."],
      hi: ["चावल धोएँ। नपे गरम पानी में से 2 बड़े चम्मच में केसर भिगोएँ। घी में बादाम और किशमिश भूनकर निकालें।", "उसी पैन में कुटी इलायची और चावल डालें, फिर बचा पानी डालें। धीमी आँच पर चावल लगभग नरम होने तक ढकें।", "चीनी छिड़कें और केसर वाला पानी डालें। चीनी घुलने और नमी सोखने तक 4–5 मिनट ढकें। हल्का उलटकर मेवे डालें।"]
    }
  },
  {
    name: "Khoba Roti", hindi: "खोबा रोटी",
    region: "Rajasthani", course: "Bread", prep: 10, cook: 14, serves: 2, appliances: ["T"],
    pantry: ["atta", "ghee", "ajwain?"],
    source: ["Nisha Madhulika", "https://nishamadhulika.com/988-khoba-roti-recipe.html"],
    amounts: {
      en: ["1 cup atta, ½ tsp salt, 1 tbsp ghee plus 2 tsp for brushing", "About ⅓ cup water and ¼ tsp ajwain (optional)"],
      hi: ["1 कप आटा, ½ छोटा चम्मच नमक, 1 बड़ा चम्मच घी और ऊपर लगाने के लिए 2 छोटे चम्मच", "लगभग ⅓ कप पानी और ¼ छोटा चम्मच अजवाइन (वैकल्पिक)"]
    },
    steps: {
      en: ["Rub 1 tbsp ghee into atta, salt and optional ajwain. Add water gradually to knead a firm dough. Divide in two and roll rounds ½ cm thick.", "Set a round on a medium-low tawa. Once the underside sets, pinch little dimples all over the upper surface without breaking through.", "Flip and cook slowly on both sides until browned and cooked through. Brush ghee into the dimples and repeat."],
      hi: ["आटे, नमक और चाहें तो अजवाइन में 1 बड़ा चम्मच घी मलें। पानी धीरे डालकर सख़्त गूँथें। दो लोइयाँ ½ सेमी मोटी बेलें।", "धीमे-मध्यम तवे पर रोटी रखें। नीचे की सतह जम जाए तो ऊपर छोटी चुटकियाँ लें, लेकिन छेद न करें।", "पलटकर दोनों ओर भूरा और अंदर तक पकाएँ। खाँचों में घी लगाएँ और दूसरी रोटी बनाएँ।"]
    }
  },
  {
    name: "Bejad Roti", hindi: "बेजड़ रोटी",
    region: "Rajasthani", course: "Bread", prep: 8, cook: 12, serves: 2, appliances: ["T"],
    pantry: ["atta", "barleyflour", "besan", "ghee"],
    source: ["Zayka Ka Tadka", "https://www.zaykakatadka.com/recipe/bejad-ki-roti-rajasthani-famous-multigrain-roti/"],
    amounts: {
      en: ["½ cup atta, ¼ cup barley flour, ¼ cup besan and ¼ tsp salt", "About ⅓ cup warm water and 2 tsp ghee for brushing"],
      hi: ["½ कप गेहूँ का आटा, ¼ कप जौ का आटा, ¼ कप बेसन और ¼ छोटा चम्मच नमक", "लगभग ⅓ कप गुनगुना पानी और लगाने के लिए 2 छोटे चम्मच घी"]
    },
    steps: {
      en: ["Mix the flours and salt. Add water gradually and knead until pliable.", "Divide into three balls. Dust with atta and roll gently into thick rounds. Smooth any cracks with your fingers.", "Cook on a hot tawa until bubbles appear. Flip and press the edges. Cook until both sides are spotted, then brush with ghee."],
      hi: ["तीनों आटे व नमक मिलाएँ। थोड़ा पानी डालकर मुलायम गूँथें।", "तीन लोइयाँ बनाएँ। सूखा आटा लगाकर हर लोई मोटी बेलें और फटे किनारे उँगली से जोड़ें।", "गरम तवे पर बुलबुले आने तक सेंकें। पलटकर किनारे दबाएँ। दोनों ओर धब्बे आने पर घी लगाएँ।"]
    }
  },
  {
    name: "Moong Churi Paratha", hindi: "मूँग चूरी पराठा",
    region: "Rajasthani", course: "Bread", prep: 14, cook: 14, serves: 2, appliances: ["T"], soak: [30, "crushed moong dal"],
    pantry: ["moong", "atta", "curd", "ajwain", "ghee", "gchilli?"],
    source: ["Nisha Madhulika", "https://nishamadhulika.com/en/2140-churi_paratha_rajasthani_moong_churi_masala_paratha_recipe.html"],
    amounts: {
      en: ["½ cup atta, ¼ cup split yellow moong dal and 2 tbsp curd", "¼ tsp each ajwain, turmeric and salt, water to knead and 1 tbsp ghee", "1 chopped chilli (optional)"],
      hi: ["½ कप आटा, ¼ कप धुली पीली मूँग दाल और 2 बड़े चम्मच दही", "¼ छोटा चम्मच अजवाइन, हल्दी व नमक, गूँथने का पानी और 1 बड़ा चम्मच घी", "1 कटी मिर्च (वैकल्पिक)"]
    },
    steps: {
      en: ["Pulse the dry moong coarsely, soak it for 30 min and drain well.", "Mix with atta, curd, spices, salt and optional chilli. Add water by the spoon until soft enough to roll. Divide into three and roll thin.", "Cook on a medium-hot tawa. Flip when bubbles show, brush with ghee and turn until both sides are speckled and the dal is tender."],
      hi: ["सूखी मूँग दरदरी पीसें। 30 मिनट भिगोकर निथारें।", "आटा, दही, मसाले, नमक और चाहें तो मिर्च मिलाएँ। चम्मच भर पानी डालते हुए नरम गूँथें। तीन लोइयाँ पतली बेलें।", "मध्यम गरम तवे पर बुलबुले आने पर पलटें। घी लगाकर दोनों ओर धब्बे और दाल नरम होने तक सेंकें।"]
    }
  },
  {
    name: "Kala Chana Pyaz Paratha", hindi: "काला चना प्याज़ पराठा",
    region: "Rajasthani", course: "Bread", prep: 12, cook: 10, serves: 2, appliances: ["T"],
    pantry: ["cookedblackchickpeas", "onion", "atta", "ghee", "amchur"],
    source: ["ãhãram", "https://aahaaramonline.com/chana-aur-pyaaz-paratha-marwari-recipe/"],
    amounts: {
      en: ["¾ cup atta, about ¼ cup water and ¼ tsp salt", "½ cup cooked black chickpeas, ¼ red onion, ½ tsp amchur, ¼ tsp ground cumin and 2 tsp ghee"],
      hi: ["¾ कप आटा, लगभग ¼ कप पानी और ¼ छोटा चम्मच नमक", "½ कप उबले काले चने, ¼ लाल प्याज़, ½ छोटा चम्मच अमचूर, ¼ छोटा चम्मच जीरा पाउडर और 2 छोटे चम्मच घी"]
    },
    steps: {
      en: ["Knead flour, water and half the salt. Mash drained chickpeas with finely chopped onion, amchur, cumin and remaining salt.", "Divide dough and filling in two. Seal each filling portion inside a dough round and roll gently with a little dry flour.", "Cook both sides on a medium-hot tawa, brushing with ghee, until spotted and cooked at the edges."],
      hi: ["आटे, पानी और आधे नमक से आटा गूँथें। निथारे चने, बारीक प्याज़, अमचूर, जीरा व बचा नमक मसलें।", "आटा और भरावन दो हिस्सों में बाँटें। भरावन लोई में बंद करके सूखा आटा लगाकर हल्का बेलें।", "मध्यम गरम तवे पर घी लगाकर पलटते हुए दोनों ओर धब्बे और किनारे पकने तक सेंकें।"]
    }
  },
  {
    name: "Makki ke Dhokle", hindi: "मक्की के ढोकले",
    region: "Rajasthani", course: "Snack", prep: 13, cook: 17, serves: 3, appliances: ["I"],
    pantry: ["makki", "methi", "curd", "ghee", "ajwain", "bakingsoda"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/rajasthani-makki-ke-dhokle-recipe"],
    amounts: {
      en: ["1 cup makki atta, ¼ cup chopped fresh methi, 2 tbsp curd and about ⅓ cup warm water", "½ tsp ajwain, ¼ tsp baking soda, ½ tsp salt and 2 tsp ghee"],
      hi: ["1 कप मक्की का आटा, ¼ कप कटी मेथी, 2 बड़े चम्मच दही और लगभग ⅓ कप गुनगुना पानी", "½ छोटा चम्मच अजवाइन, ¼ छोटा चम्मच खाने का सोडा, ½ छोटा चम्मच नमक और 2 छोटे चम्मच घी"]
    },
    steps: {
      en: ["Mix the flour, methi, ajwain, soda and salt. Rub in 1 tsp ghee, then knead with the curd and enough warm water to hold together.", "Shape six flattened balls. Press a thumb dimple into each and set on a greased steamer tray.", "Cover and steam over boiling water for 14–16 min until a skewer comes out clean. Brush with the remaining ghee."],
      hi: ["आटा, मेथी, अजवाइन, सोडा व नमक मिलाएँ। 1 छोटा चम्मच घी मलें। दही और थोड़ा गुनगुना पानी डालकर बाँधें।", "छह गोलियाँ हल्की चपटी करें। अंगूठे से निशान बनाकर चिकनी स्टीमर थाली पर रखें।", "उबलते पानी पर ढककर 14–16 मिनट भाप दें, जब तक सींक साफ़ निकले। बचा घी लगाएँ।"]
    }
  },
  {
    name: "Kalmi Vada", hindi: "कलमी वड़ा",
    region: "Rajasthani", course: "Snack", prep: 15, cook: 20, serves: 3, appliances: ["I"], soak: [240, "chana dal"],
    pantry: ["chanadal", "gchilli", "ginger?", "coriander", "ajwain"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-kalmi-vada-265783"],
    amounts: {
      en: ["¾ cup chana dal, soaked 4 hours and drained, and 1 green chilli", "1 cm ginger (optional), 2 tbsp chopped coriander, ½ tsp ajwain, ½ tsp salt and oil for frying"],
      hi: ["¾ कप चना दाल, 4 घंटे भिगोकर निथारी, और 1 हरी मिर्च", "1 सेमी अदरक (वैकल्पिक), 2 बड़े चम्मच कटा धनिया, ½ छोटा चम्मच अजवाइन, ½ छोटा चम्मच नमक और तलने का तेल"]
    },
    steps: {
      en: ["Grind the dal, chilli and optional ginger coarsely, adding water only by the teaspoon. Mix in coriander, ajwain and salt and pat into four thick discs.", "Fry over medium heat until lightly golden and set. Drain, cool enough to handle and slice each disc into wedges.", "Fry the wedges again until deep golden and crisp, with cooked centres. Drain and serve with chutney."],
      hi: ["दाल, मिर्च और चाहें तो अदरक थोड़ा पानी डालकर दरदरा पीसें। धनिया, अजवाइन व नमक मिलाकर चार मोटी टिकियाँ बनाएँ।", "मध्यम गरम तेल में हल्की सुनहरी व जमी होने तक तलें। निथारकर थोड़ा ठंडा करें और तिकोने टुकड़े काटें।", "गहरी सुनहरी, कुरकुरी और अंदर तक पकने तक फिर तलें। निथारकर चटनी के साथ परोसें।"]
    }
  },
  {
    name: "Kanji Vada", hindi: "कांजी वड़ा",
    region: "Rajasthani", course: "Snack", prep: 12, cook: 14, serves: 4, appliances: ["I"], soak: [120, "split moong dal"],
    pantry: ["moong", "preparedkanji", "gchilli?", "ginger?"],
    source: ["Chef Kunal Kapur", "https://www.chefkunalkapur.com/recipe/kanji-vada/"],
    amounts: {
      en: ["½ cup split moong dal, soaked 2 hours and drained, and 1½ cups chilled ready fermented mustard kanji", "¼ tsp salt, ½ green chilli and 1 cm ginger (both optional), oil for frying and warm water"],
      hi: ["½ कप धुली मूँग दाल, 2 घंटे भिगोकर निथारी, और 1½ कप ठंडी तैयार किण्वित सरसों की कांजी", "¼ छोटा चम्मच नमक, ½ हरी मिर्च और 1 सेमी अदरक (दोनों वैकल्पिक), तलने का तेल और गुनगुना पानी"]
    },
    steps: {
      en: ["Grind drained dal with salt and optional chilli and ginger into a thick paste. Whisk briefly to lighten.", "Fry small spoonfuls over medium heat until evenly golden and cooked through. Drain and soak in warm water for 5 min, then gently press out water.", "Chill the vadas in the prepared kanji for at least 30 min so they absorb it. Serve with a ladle of kanji."],
      hi: ["निथारी दाल, नमक और चाहें तो मिर्च व अदरक गाढ़ा पीसें। हल्का होने तक थोड़ा फेंटें।", "मध्यम गरम तेल में छोटे चम्मच भर घोल डालकर सुनहरे और अंदर तक पके वड़े तलें। निथारकर 5 मिनट गुनगुने पानी में रखें और दबाकर पानी निकालें।", "वड़े तैयार कांजी में डालकर कम से कम 30 मिनट फ्रिज में रखें। थोड़ी कांजी के साथ परोसें।"]
    }
  },
  {
    name: "Bikaneri Bhujia", hindi: "बीकानेरी भुजिया",
    region: "Rajasthani", course: "Snack", prep: 15, cook: 20, serves: 4, appliances: ["I"],
    pantry: ["mothflour", "besan", "blackpepper", "ajwain"],
    source: ["Chorsa Morsa, Bikaner", "https://chorsamorsa.com/process.html"],
    amounts: {
      en: ["¾ cup moth bean flour, ¼ cup besan, ½ tsp ground black pepper and ¼ tsp ground ajwain", "¼ tsp chilli powder, ½ tsp salt, 1 tbsp oil for the dough, about ⅓ cup water and oil for frying"],
      hi: ["¾ कप मोठ का आटा, ¼ कप बेसन, ½ छोटा चम्मच काली मिर्च और ¼ छोटा चम्मच पिसी अजवाइन", "¼ छोटा चम्मच लाल मिर्च, ½ छोटा चम्मच नमक, आटे में 1 बड़ा चम्मच तेल, लगभग ⅓ कप पानी और तलने का तेल"]
    },
    steps: {
      en: ["Mix the flours, spices and salt. Rub in 1 tbsp oil and add water slowly to make a soft, smooth dough for a fine sev press.", "Fill the greased press and squeeze short circles into medium-hot oil in small batches.", "Fry until the bubbles slow and the strands are golden, turning once. Drain, cool completely and break into short strands."],
      hi: ["आटे, मसाले और नमक मिलाएँ। 1 बड़ा चम्मच तेल मलें और पानी धीरे डालकर महीन सेव की जाली के लिए नरम आटा बनाएँ।", "तेल लगी मशीन से मध्यम गरम तेल में थोड़े-थोड़े छोटे गोल लच्छे डालें।", "बुलबुले कम होने और भुजिया सुनहरी होने तक एक बार पलटकर तलें। निथारकर पूरी तरह ठंडी करें और तोड़ें।"]
    }
  },
  {
    name: "Matar Masala Baati", hindi: "मटर मसाला बाटी",
    region: "Rajasthani", course: "Bread", prep: 22, cook: 28, serves: 3,
    pantry: ["atta", "suji", "peas", "ghee", "fennel", "amchur"],
    source: ["Nisha Madhulika", "https://nishamadhulika.com/2382-_matar_masala_dal_baati_recipe.html"],
    amounts: {
      en: ["1 cup atta, ¼ cup suji, 2 tbsp ghee, about ⅓ cup water and ½ tsp salt divided", "¾ cup peas, ½ tsp fennel, ½ tsp amchur and ¼ tsp chilli powder", "1 tbsp ghee to finish"],
      hi: ["1 कप आटा, ¼ कप सूजी, 2 बड़े चम्मच घी, लगभग ⅓ कप पानी और कुल ½ छोटा चम्मच नमक", "¾ कप मटर, ½ छोटा चम्मच सौंफ, ½ छोटा चम्मच अमचूर और ¼ छोटा चम्मच लाल मिर्च", "ऊपर लगाने के लिए 1 बड़ा चम्मच घी"]
    },
    steps: {
      en: ["Preheat the oven to 200°C. Rub 2 tbsp ghee into the flours and half the salt. Knead a firm dough with the water.", "Cook peas until tender, drain and mash with fennel, amchur, chilli and remaining salt. Make six dough cups, fill and seal well.", "Arrange seam-down and bake for 23–27 min, turning once, until browned all over. Crack the hot baatis lightly and brush with ghee."],
      hi: ["ओवन 200°C पर गरम करें। दोनों आटे और आधे नमक में 2 बड़े चम्मच घी मलें। पानी से सख़्त आटा गूँथें।", "मटर नरम पकाकर निथारें। सौंफ, अमचूर, मिर्च व बचा नमक मिलाकर मसलें। छह लोइयाँ कटोरी जैसी बनाकर भरें और बंद करें।", "जोड़ नीचे रखें। 23–27 मिनट एक बार पलटकर चारों ओर सुनहरी बेक करें। गरम बाटी हल्की तोड़कर घी लगाएँ।"]
    }
  },
  {
    name: "Jodhpuri Mawa Kachori", hindi: "जोधपुरी मावा कचौरी",
    region: "Rajasthani", course: "Sweet", prep: 22, cook: 26, serves: 4, appliances: ["I"],
    pantry: ["maida", "mawa", "sugar", "ghee", "almonds", "cardamom"],
    source: ["Indian Cooking Manual", "https://www.indiancookingmanual.com/jodhapuri-mawa-kachori-sweet-dish-from-rajasthan/"],
    amounts: {
      en: ["1 cup maida, 3 tbsp ghee, a pinch of salt and about ¼ cup water", "100 g unsweetened mawa, 2 tbsp chopped almonds, 1 tbsp sugar and ¼ tsp cardamom for filling", "½ cup sugar and ¼ cup water for syrup, and oil for frying"],
      hi: ["1 कप मैदा, 3 बड़े चम्मच घी, चुटकी नमक और लगभग ¼ कप पानी", "भरावन के लिए 100 ग्राम बिना मीठा मावा, 2 बड़े चम्मच कटे बादाम, 1 बड़ा चम्मच चीनी और ¼ छोटा चम्मच इलायची", "चाशनी के लिए ½ कप चीनी व ¼ कप पानी, और तलने का तेल"]
    },
    steps: {
      en: ["Rub ghee and salt into flour until crumbly. Add just enough water to make firm dough. Cover while preparing the filling.", "Roast the crumbled mawa on low heat until fragrant. Cool, mix with almonds, filling sugar and cardamom. Enclose the filling in six dough rounds, seal well and flatten slightly.", "Fry in medium-low oil until crisp and golden all over. Boil the syrup sugar and water until slightly sticky, turn off the heat, then dip and lift each pastry. Cool before serving."],
      hi: ["मैदे में घी व नमक भुरभुरा होने तक मलें। थोड़ा पानी डालकर सख़्त गूँथें। भरावन बनाते समय ढकें।", "मावा मसलकर धीमी आँच पर महकने तक भूनें। ठंडा करके बादाम, भरावन की चीनी और इलायची मिलाएँ। छह पूरियों में भरकर अच्छी तरह बंद करें और हल्का चपटा करें।", "मध्यम-धीमे गरम तेल में करारी व सुनहरी तलें। चाशनी की चीनी व पानी हल्का चिपचिपा होने तक उबालकर आँच बंद करें। हर कचौरी डुबोकर निकालें और ठंडी करें।"]
    }
  },
  {
    name: "Ghevar", hindi: "घेवर",
    region: "Rajasthani", course: "Sweet", prep: 16, cook: 34, serves: 4, appliances: ["I"],
    pantry: ["maida", "ghee", "milk", "sugar", "lemon", "almonds?"],
    source: ["The Rajasthani Kitchen", "https://www.rajasthanirecipes.com/blog/ghevar-recipe-guide"],
    amounts: {
      en: ["¾ cup maida, 2 tbsp softened ghee, ¼ cup cold milk, about ¾ cup ice-cold water and ½ tsp lemon juice", "Ghee or neutral oil for frying, ½ cup sugar and ¼ cup water for syrup", "1 tbsp sliced almonds (optional)"],
      hi: ["¾ कप मैदा, 2 बड़े चम्मच नरम घी, ¼ कप ठंडा दूध, लगभग ¾ कप बर्फ़ जैसा ठंडा पानी और ½ छोटा चम्मच नींबू रस", "तलने के लिए घी या सादा तेल, चाशनी के लिए ½ कप चीनी और ¼ कप पानी", "1 बड़ा चम्मच कटे बादाम (वैकल्पिक)"]
    },
    steps: {
      en: ["Whisk the ghee with 2 tbsp of the cold water until creamy. Whisk in flour and milk, then lemon and enough remaining cold water to make a very thin batter. Keep it cold.", "Heat a shallow layer of frying fat in a high-sided, narrow pot, no more than a third full. From just above the surface, trickle in a little batter and wait until foaming subsides. Repeat with small pours so the strands join into a disc, keeping a centre hole.", "Fry until golden and rigid. Lift carefully through the centre hole and drain. For the syrup, boil sugar and water until lightly sticky, then spoon it over the warm discs. Finish with optional almonds."],
      hi: ["घी को नपे ठंडे पानी में से 2 बड़े चम्मच के साथ क्रीमी फेंटें। मैदा और दूध मिलाएँ। नींबू और बचा ठंडा पानी डालकर बहुत पतला घोल बनाएँ। ठंडा रखें।", "ऊँचे किनारे वाले सँकरे बर्तन में थोड़ा घी या तेल गरम करें। बर्तन एक-तिहाई से ज़्यादा न भरें। सतह के पास से थोड़ा घोल डालें और झाग थमने दें। थोड़ी-थोड़ी धार डालकर जालीदार गोल बनाएँ और बीच में छेद रखें।", "सुनहरा और कड़ा होने पर बीच के छेद से सावधानी से उठाकर निथारें। चीनी-पानी हल्का चिपचिपा उबालें और चाशनी गरम घेवर पर डालें। चाहें तो बादाम डालें।"]
    }
  },
  {
    name: "Alwar Milk Cake", hindi: "अलवर मिल्क केक",
    region: "Rajasthani", course: "Sweet", prep: 5, cook: 80, serves: 6, appliances: ["I"],
    pantry: ["milk", "sugar", "lemon", "ghee"],
    source: ["Nisha Madhulika", "https://nishamadhulika.com/en/1303-milk-cake-recipe.html?page=1"],
    amounts: {
      en: ["1 litre whole milk, ⅓ cup sugar, ½–1 tsp lemon juice and 1 tsp ghee for the mould"],
      hi: ["1 लीटर फुल-फैट दूध, ⅓ कप चीनी, ½–1 छोटा चम्मच नींबू रस और साँचे के लिए 1 छोटा चम्मच घी"]
    },
    steps: {
      en: ["In a wide heavy pan, boil the milk, stirring and scraping the bottom frequently, until less than half remains.", "Lower the heat and stir in the lemon juice a few drops at a time, just until fine grains appear. Stir in the sugar and cook, scraping constantly, until the grainy mass pulls away and begins to turn golden.", "Pack the hot mixture into a small greased metal mould. Cool it just until it stops steaming, then refrigerate for 3–4 hours until firm. Cut into rectangles."],
      hi: ["चौड़े भारी पैन में दूध उबालें। बार-बार चलाकर तली खुरचें और आधे से कम रहने तक पकाएँ।", "आँच धीमी करके नींबू रस बूंद-बूंद डालें, बस बारीक दाने दिखने तक। चीनी मिलाकर लगातार तली खुरचते हुए पकाएँ, जब तक मिश्रण पैन छोड़ने और हल्का सुनहरा होने लगे।", "घी लगे छोटे धातु के साँचे में गरम मिश्रण दबाएँ। भाप उठना बंद होते ही फ्रिज में 3–4 घंटे जमाएँ। आयत काटें।"]
    }
  },
  {
    name: "Jaipur Mishri Mawa", hindi: "जयपुरी मिश्री मावा",
    region: "Rajasthani", course: "Sweet", prep: 8, cook: 12, serves: 4, appliances: ["I"],
    pantry: ["mawa", "mishri", "milk", "cardamom", "pistachios?"],
    source: ["Wonders of Rajasthan", "https://www.wondersofrajasthan.com/rajasthan-recipes/mawa-misri.html"],
    amounts: {
      en: ["200 g plain mawa, ¼ cup milk, 2 tbsp small mishri crystals and ¼ tsp cardamom", "1 tbsp chopped pistachios (optional)"],
      hi: ["200 ग्राम सादा मावा, ¼ कप दूध, 2 बड़े चम्मच छोटी मिश्री और ¼ छोटा चम्मच इलायची", "1 बड़ा चम्मच कटे पिस्ते (वैकल्पिक)"]
    },
    steps: {
      en: ["Crumble the mawa finely. Stir with the milk in a heavy pan over low heat until it thickens and comes away from the sides without browning.", "Take off the heat. Stir in cardamom, then fold in the mishri once the mixture is warm enough to handle so some crystals stay distinct.", "Press loosely into a shallow dish, add optional pistachios and chill until firm enough to cut, about 30 min."],
      hi: ["मावा बारीक मसलें। भारी पैन में दूध के साथ धीमी आँच पर गाढ़ा होकर किनारे छोड़ने तक चलाएँ। भूरा न करें।", "आँच से उतारें। इलायची डालें। हाथ लगाने लायक गुनगुना हो जाए तो मिश्री मिलाएँ, ताकि कुछ दाने साबुत रहें।", "उथली थाली में हल्का दबाएँ, चाहें तो पिस्ते डालें। काटने लायक जमने तक लगभग 30 मिनट फ्रिज में रखें।"]
    }
  },
  {
    name: "Ajmer Sohan Halwa", hindi: "अजमेरी सोहन हलवा",
    region: "Rajasthani", course: "Sweet", prep: 10, cook: 50, serves: 6, appliances: ["I"],
    pantry: ["sproutedwheatflour", "atta", "milk", "sugar", "ghee", "almonds"],
    source: ["Ajmer Rasoi (video)", "https://www.youtube.com/watch?v=KZqRfHhAgnY"],
    amounts: {
      en: ["¼ cup sprouted wheat flour and ¼ cup atta, 1 cup milk and 1 cup water", "½ cup sugar and ¼ cup ghee", "¼ tsp ground cardamom and 2 tbsp slivered almonds"],
      hi: ["¼ कप अंकुरित गेहूँ का आटा और ¼ कप साधारण आटा, 1 कप दूध और 1 कप पानी", "½ कप चीनी और ¼ कप घी", "¼ छोटा चम्मच इलायची और 2 बड़े चम्मच कटे बादाम"]
    },
    steps: {
      en: ["Whisk both flours into the cold milk and water until smooth. Cook in a heavy pan over medium-low heat, stirring continuously, until thick and bubbling.", "Stir in the sugar. Add the ghee in small portions, working each in before adding more. Keep stirring over low heat until glossy, amber and separating from the pan, about 35–45 min.", "Add cardamom and spread in a greased tin. Press in almonds and mark wedges while warm. Cool completely before lifting them out."],
      hi: ["दोनों आटे ठंडे दूध व पानी में चिकने फेंटें। भारी पैन में धीमी-मध्यम आँच पर लगातार चलाकर गाढ़ा व बुलबुलेदार करें।", "चीनी मिलाएँ। थोड़ा-थोड़ा घी डालें और हर बार घुलने तक चलाएँ। धीमी आँच पर 35–45 मिनट चलाएँ, जब तक चमकीला भूरा मिश्रण पैन छोड़ने लगे।", "इलायची मिलाकर चिकने साँचे में फैलाएँ। बादाम दबाएँ और गरम रहते फाँकों के निशान बनाएँ। पूरी तरह ठंडा होने पर निकालें।"]
    }
  },
  {
    name: "Bajra Churma", hindi: "बाजरे का चूरमा",
    region: "Rajasthani", course: "Sweet", prep: 7, cook: 0, serves: 3, appliances: ["N"],
    pantry: ["cookedbajraroti", "jaggery", "ghee", "cardamom?"],
    source: ["Nisha Madhulika", "https://www.nishamadhulika.com/en/184-maleeda-recipe.html"],
    amounts: {
      en: ["2 freshly cooked bajra rotis, still warm, ¼ cup grated jaggery and 2 tbsp melted ghee", "1 pinch cardamom (optional)"],
      hi: ["2 ताज़ी बनी गरम बाजरे की रोटियाँ, ¼ कप कद्दूकस गुड़ और 2 बड़े चम्मच पिघला घी", "चुटकी भर इलायची (वैकल्पिक)"]
    },
    steps: {
      en: ["Start with cooked rotis. Tear them into small pieces and pulse coarsely or rub between your palms once cool enough to handle.", "Mix the warm crumbs with grated jaggery, ghee and optional cardamom. Rub until the jaggery and ghee are evenly dispersed.", "Serve the loose churma warm, or press it into small balls while it is still pliable."],
      hi: ["बनी हुई रोटियाँ लें। छोटे टुकड़े करें और दरदरी पीसें या हाथ लगाने लायक हों तो हथेलियों से मसलें।", "गुनगुने चूरे में गुड़, घी और चाहें तो इलायची मिलाएँ। हथेलियों से मलकर गुड़ और घी बराबर फैलाएँ।", "चूरमा गरम परोसें या नरम रहते छोटे लड्डू बाँधें।"]
    }
  },
  {
    name: "Magad Churma", hindi: "मगद चूरमा",
    region: "Rajasthani", course: "Sweet", prep: 6, cook: 16, serves: 4, appliances: ["I"],
    pantry: ["atta", "ghee", "sugar", "almonds?", "cardamom?"],
    source: ["Nisha Madhulika", "https://www.nishamadhulika.com/2473-rajasthani_kasar_magad_churma_recipe.html"],
    amounts: {
      en: ["¾ cup coarse atta, ¼ cup ghee and ¼ cup powdered sugar", "¼ tsp cardamom and 1 tbsp chopped almonds (both optional)"],
      hi: ["¾ कप मोटा आटा, ¼ कप घी और ¼ कप पिसी चीनी", "¼ छोटा चम्मच इलायची और 1 बड़ा चम्मच कटे बादाम (दोनों वैकल्पिक)"]
    },
    steps: {
      en: ["Melt the ghee in a heavy pan and stir in the coarse atta. Roast slowly, stirring and scraping the pan for about 13–15 min until evenly golden and nutty.", "Transfer to a bowl immediately to stop the roasting. Let it cool until just warm.", "Stir in powdered sugar and the optional cardamom and almonds. Break up any lumps with your fingertips and serve loose."],
      hi: ["भारी पैन में घी पिघलाकर मोटा आटा डालें। लगातार चलाते और तली खुरचते हुए लगभग 13–15 मिनट सुनहरा और सुगंधित भूनें।", "तुरंत कटोरे में निकालें, ताकि और न भुने। गुनगुना होने दें।", "पिसी चीनी और चाहें तो इलायची व बादाम मिलाएँ। उँगलियों से गाँठें तोड़कर खुला चूरमा परोसें।"]
    }
  },
  {
    name: "Bikaneri Gond Pak", hindi: "बीकानेरी गोंद पाक",
    region: "Rajasthani", course: "Sweet", prep: 12, cook: 20, serves: 6, appliances: ["I"],
    pantry: ["ediblegond", "atta", "ghee", "jaggery", "almonds"],
    source: ["Nosh Farmaiye", "https://noshfarmaiiye.wordpress.com/2024/12/09/bikaneri-gond-pak/"],
    amounts: {
      en: ["¼ cup food-grade edible gond crystals, ½ cup atta and ⅓ cup ghee", "⅓ cup chopped jaggery, 2 tbsp water, ¼ cup chopped almonds and ¼ tsp cardamom"],
      hi: ["¼ कप खाने योग्य गोंद, ½ कप आटा और ⅓ कप घी", "⅓ कप कटा गुड़, 2 बड़े चम्मच पानी, ¼ कप कटे बादाम और ¼ छोटा चम्मच इलायची"]
    },
    steps: {
      en: ["Fry the gond a spoonful at a time in ghee over medium-low heat until every piece puffs. Lift out, cool and crush. Discard any unpuffed hard pieces.", "Roast atta in the remaining ghee until golden and fragrant. Mix in the gond, almonds and cardamom.", "In a separate pan melt the jaggery with the water and simmer until a drop forms a soft ball in cold water. Stir into the roasted mix, press into a greased tin, cool and cut into squares."],
      hi: ["धीमी-मध्यम आँच पर घी में चम्मच-चम्मच गोंद तलें, जब तक हर दाना फूल जाए। निकालकर ठंडा करें और कूटें। कड़े बिना फूले दाने हटाएँ।", "बचे घी में आटा सुनहरा और सुगंधित भूनें। गोंद, बादाम और इलायची मिलाएँ।", "अलग पैन में गुड़-पानी पिघलाकर इतना पकाएँ कि ठंडे पानी में बूँद नरम गोली बनाए। आटे में मिलाकर चिकने साँचे में दबाएँ। ठंडा करके चौकोर काटें।"]
    }
  },
  {
    name: "Bikaneri Moti Pak", hindi: "बीकानेरी मोती पाक",
    region: "Rajasthani", course: "Sweet", prep: 8, cook: 18, serves: 6, appliances: ["I"],
    pantry: ["plainboondi", "mawa", "sugar", "ghee", "cardamom", "saffron?"],
    source: ["Taste of City, Bikaner", "https://www.tasteofcity.com/bikaner/jaisraj-shivraj-ka-moti-pak-chai-patti"],
    amounts: {
      en: ["1 cup freshly fried or ready plain unsalted boondi, 100 g unsweetened mawa and 1 tsp ghee", "¼ cup sugar, ¼ cup water, ¼ tsp cardamom and a pinch of saffron (optional)"],
      hi: ["1 कप ताज़ी तली या तैयार बिना नमक की सादी बूंदी, 100 ग्राम बिना मीठा मावा और 1 छोटा चम्मच घी", "¼ कप चीनी, ¼ कप पानी, ¼ छोटा चम्मच इलायची और चुटकी भर केसर (वैकल्पिक)"]
    },
    steps: {
      en: ["Stir the mawa in ghee on low heat until smooth and lightly fragrant. Separately simmer sugar, water and optional saffron until slightly sticky.", "Mix the plain boondi into the warm syrup and let it absorb for 2 min. Stir this into the mawa with cardamom until thick enough to mound.", "Press into a greased tin without crushing all the boondi. Chill for at least 30 min until firm and slice into squares."],
      hi: ["धीमी आँच पर घी में मावा चिकना और हल्का सुगंधित होने तक चलाएँ। अलग से चीनी, पानी और चाहें तो केसर हल्का चिपचिपा उबालें।", "सादी बूंदी गरम चाशनी में 2 मिनट रखें। मावे में इलायची के साथ मिलाकर गाढ़ा होने तक चलाएँ।", "घी लगे साँचे में दबाएँ लेकिन सारी बूंदी न मसलें। कम से कम 30 मिनट फ्रिज में जमाकर चौकोर काटें।"]
    }
  },
  {
    name: "Junglee Maas", hindi: "जंगली मास",
    region: "Rajasthani", course: "Main", prep: 10, cook: 65, serves: 3, appliances: ["I"], nonveg: true,
    pantry: ["mutton", "ghee", "dryredchilli", "garlic?"],
    source: ["GOYA", "https://www.goya.in/blog/a-rajputana-recipe-for-junglee-maas"],
    amounts: {
      en: ["500 g bone-in goat meat, 2 tbsp ghee, 6 mild dried Mathania chillies and ¾ tsp salt", "1–1½ cups water and 3 smashed garlic cloves (optional)"],
      hi: ["500 ग्राम हड्डी वाला बकरे का मांस, 2 बड़े चम्मच घी, 6 कम तीखी सूखी मथानिया मिर्च और ¾ छोटा चम्मच नमक", "1–1½ कप पानी और 3 कुचली लहसुन की कलियाँ (वैकल्पिक)"]
    },
    steps: {
      en: ["Heat ghee in a heavy pot. Brown the meat in batches, then return all the pieces and stir in the broken chillies, salt and optional garlic.", "Add 1 cup water, cover and simmer gently for 50–60 min or until the meat is fork-tender. Add a splash of hot water if the pot starts drying before the meat is tender.", "Uncover and reduce until the ghee and chilli coat the meat and little liquid remains. Serve with roti."],
      hi: ["भारी बर्तन में घी गरम करें। मांस खेपों में भूरा करें, फिर सब टुकड़े लौटाकर टूटी मिर्च, नमक और चाहें तो लहसुन मिलाएँ।", "1 कप पानी डालकर ढकें। 50–60 मिनट धीमी आँच पर या काँटा आसानी से जाने तक पकाएँ। मांस नरम होने से पहले बर्तन सूखे तो थोड़ा गरम पानी डालें।", "ढक्कन हटाकर रसा इतना सुखाएँ कि घी और मिर्च मांस पर चढ़ जाएँ। रोटी के साथ परोसें।"]
    }
  },
  {
    name: "Safed Maas", hindi: "सफ़ेद मास",
    region: "Rajasthani", course: "Main", prep: 20, cook: 70, serves: 3, appliances: ["I"], nonveg: true,
    pantry: ["mutton", "curd", "cashews", "almonds", "ghee", "onion", "cream"],
    source: ["Khaana", "https://khaana.com/recipes/safed-maas.html"],
    amounts: {
      en: ["500 g bone-in goat meat, 1 small onion, ¾ cup curd, 2 tbsp ghee and 1 cup water", "2 tbsp cashews and 2 tbsp blanched almonds, ground with ¼ cup water", "3 green cardamom pods, ½ tsp ground white pepper, ¾ tsp salt and 2 tbsp cream"],
      hi: ["500 ग्राम हड्डी वाला बकरे का मांस, 1 छोटा प्याज़, ¾ कप दही, 2 बड़े चम्मच घी और 1 कप पानी", "2 बड़े चम्मच काजू और 2 बड़े चम्मच छिले बादाम, ¼ कप पानी के साथ पिसे", "3 हरी इलायची, ½ छोटा चम्मच सफ़ेद मिर्च पाउडर, ¾ छोटा चम्मच नमक और 2 बड़े चम्मच क्रीम"]
    },
    steps: {
      en: ["Cook finely sliced onion and cardamom in ghee until the onion is soft but still pale. Add the goat and turn for a few minutes to seal the surfaces without dark browning.", "Lower the heat and stir in the whisked curd, salt, white pepper and 1 cup water. Cover and simmer until the meat is nearly tender.", "Stir in the nut paste and cook gently for 10 min until the meat is fork-tender and the gravy is creamy. Finish with cream over low heat."],
      hi: ["बारीक कटे प्याज़ और इलायची घी में पकाएँ। प्याज़ नरम रहे लेकिन रंग न बदले। मांस डालकर कुछ मिनट चलाएँ, बिना गहरा भूरा किए सतह पकाएँ।", "आँच धीमी करके फेंटा दही, नमक, सफ़ेद मिर्च और 1 कप पानी मिलाएँ। ढककर मांस लगभग नरम होने तक पकाएँ।", "मेवों का लेप डालकर 10 मिनट धीमे पकाएँ, जब तक मांस नरम और रसा क्रीमी हो। धीमी आँच पर क्रीम मिलाएँ।"]
    }
  },
  {
    name: "Rajasthani Bhuna Kukad", hindi: "राजस्थानी भुना कुकड़",
    region: "Rajasthani", course: "Main", prep: 15, cook: 35, serves: 3, appliances: ["I"], nonveg: true,
    pantry: ["chicken", "onion", "tomato", "curd", "ghee", "ginger?", "garlic?", "dryredchilli"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-bhuna-kukda-230901"],
    amounts: {
      en: ["500 g bone-in chicken pieces, 1 sliced onion, 1 chopped tomato and ¼ cup curd", "1½ tbsp ghee, 2 mild dried red chillies, ½ tsp cumin seeds, ½ tsp ground coriander, ¼ tsp turmeric and ¾ tsp salt", "1 tsp grated ginger and 2 crushed garlic cloves (both optional), and ¼ cup water"],
      hi: ["500 ग्राम हड्डी वाले चिकन के टुकड़े, 1 कटा प्याज़, 1 कटा टमाटर और ¼ कप दही", "1½ बड़ा चम्मच घी, 2 हल्की सूखी लाल मिर्च, ½ छोटा चम्मच जीरा, ½ छोटा चम्मच धनिया पाउडर, ¼ छोटा चम्मच हल्दी और ¾ छोटा चम्मच नमक", "1 छोटा चम्मच अदरक और 2 कुचली लहसुन की कलियाँ (दोनों वैकल्पिक), और ¼ कप पानी"]
    },
    steps: {
      en: ["Sizzle cumin and dried chillies in ghee. Fry the onion until golden. Add optional ginger and garlic, then tomato and ground spices. Cook until the tomato turns pulpy.", "Stir in the chicken and salt and brown lightly. Lower the heat, add the whisked curd and water and simmer covered until the thickest piece reaches 165°F (74°C).", "Uncover and stir-fry for several minutes until the masala is dark, glossy and clings to the pieces."],
      hi: ["घी में जीरा और सूखी मिर्च चटकाएँ। प्याज़ सुनहरा भूनें। चाहें तो अदरक-लहसुन डालें, फिर टमाटर और पिसे मसाले डालकर टमाटर गलाएँ।", "चिकन और नमक डालकर हल्का भूरा करें। आँच धीमी कर फेंटा दही और पानी मिलाएँ। ढककर सबसे मोटे टुकड़े का तापमान 74°C (165°F) होने तक पकाएँ।", "ढक्कन हटाकर कुछ मिनट चलाते हुए भूनें, जब तक गहरा चमकीला मसाला चिकन पर चढ़ जाए।"]
    }
  },
  {
    name: "Narangi Maas", hindi: "नारंगी मास",
    region: "Rajasthani", course: "Main", prep: 18, cook: 65, serves: 3, appliances: ["I"], nonveg: true,
    pantry: ["mutton", "orange", "curd", "onion", "ghee", "dryredchilli", "garammasala"],
    source: ["The Indian Express", "https://indianexpress.com/article/lifestyle/food-wine/narangi-maas-orange-mutton-recipe-rajasthani-royal-rajput-cuisine-history-9125885/lite/"],
    amounts: {
      en: ["500 g bone-in goat meat, 1 onion, ⅓ cup curd, 2 tbsp ghee and ¾ tsp salt", "2 mild dried red chillies, ½ tsp garam masala and ¾ cup water", "½ cup fresh orange juice and ½ tsp finely grated orange zest"],
      hi: ["500 ग्राम हड्डी वाला बकरे का मांस, 1 प्याज़, ⅓ कप दही, 2 बड़े चम्मच घी और ¾ छोटा चम्मच नमक", "2 सूखी हल्की लाल मिर्च, ½ छोटा चम्मच गरम मसाला और ¾ कप पानी", "½ कप ताज़ा संतरे का रस और ½ छोटा चम्मच बारीक कद्दूकस संतरे का छिलका"]
    },
    steps: {
      en: ["Fry sliced onion and dried chillies in ghee until the onion is golden. Add the meat, salt and garam masala and turn until lightly browned.", "Turn down the heat, stir in whisked curd and water and cook covered at a gentle simmer until the meat is almost fork-tender.", "Stir in the orange juice and simmer uncovered until the sauce thickens and the meat is tender. Remove from the heat and stir in the zest."],
      hi: ["घी में कटा प्याज़ व सूखी मिर्च डालकर प्याज़ सुनहरा भूनें। मांस, नमक और गरम मसाला डालकर हल्का भूरा करें।", "आँच धीमी कर फेंटा दही और पानी डालें। ढककर मांस लगभग नरम होने तक धीमे पकाएँ।", "संतरे का रस डालकर खुला पकाएँ, जब तक रसा गाढ़ा और मांस नरम हो। आँच से उतारकर कद्दूकस छिलका मिलाएँ।"]
    }
  },
  {
    name: "Jaisalmeri Ghotua Ladoo", hindi: "जैसलमेरी घोटुआ लड्डू",
    region: "Rajasthani", course: "Sweet", prep: 9, cook: 16, serves: 4, appliances: ["I"],
    pantry: ["plainboondi", "mawa", "sugar", "ghee", "cardamom", "saffron?"],
    source: ["Spicing Your Life", "https://www.spicingyourlife.com/rajasthani-ghotua-ladoo/"],
    amounts: {
      en: ["1 cup fine plain unsalted boondi, 75 g crumbled unsweetened mawa and ¼ cup sugar", "¼ cup water, 1 tbsp ghee, ¼ tsp cardamom and a pinch of saffron (optional)"],
      hi: ["1 कप महीन बिना नमक की सादी बूंदी, 75 ग्राम मसलकर रखा बिना मीठा मावा और ¼ कप चीनी", "¼ कप पानी, 1 बड़ा चम्मच घी, ¼ छोटा चम्मच इलायची और चुटकी भर केसर (वैकल्पिक)"]
    },
    steps: {
      en: ["Stir the mawa in the ghee over low heat until smooth and fragrant. Separately heat the sugar, water and optional saffron until the syrup is lightly sticky.", "Stir in the boondi and let it soften. Remove from the heat and pound or mash the boondi thoroughly. Fold in the warm mawa and cardamom until the mixture holds together.", "When comfortably warm, grease your hands and roll six ladoos. Let them firm up before serving."],
      hi: ["मावा घी में धीमी आँच पर चिकना और सुगंधित होने तक चलाएँ। अलग से चीनी, पानी और चाहें तो केसर हल्की चिपचिपी चाशनी बनने तक गरम करें।", "बूंदी डालकर नरम होने दें। आँच से उतारकर अच्छी तरह कूटें या मसलें। गरम मावा और इलायची मिलाकर मिश्रण बाँधें।", "हाथ लगाने लायक गुनगुना हो तो हाथ चिकने करके छह लड्डू बाँधें। थोड़ा जमने पर परोसें।"]
    }
  }
];
