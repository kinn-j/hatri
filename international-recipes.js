// Home-kitchen adaptations. Cuisine keywords let users find dishes by country or region.
const INTERNATIONAL_RECIPES = [
  {
    name: "Mujaddara", hindi: "मुजद्दरा", keywords: "Lebanese Levantine Middle Eastern lentils rice लेबनानी",
    course: "Complete", prep: 10, cook: 40, serves: 4, pantry: ["masoorwhole", "rice", "onion", "oliveoil", "cumin"],
    amounts: {
      en: ["¾ cup whole brown lentils, ¾ cup rice and 2 large onions", "3 tbsp olive oil, 1 tsp ground cumin, ¾ tsp salt and water"],
      hi: ["¾ कप साबुत मसूर, ¾ कप चावल और 2 बड़े प्याज़", "3 बड़े चम्मच जैतून का तेल, 1 छोटा चम्मच जीरा पाउडर, ¾ छोटा चम्मच नमक और पानी"]
    },
    steps: {
      en: ["Rinse the lentils and simmer in 2½ cups water for 15 min. Rinse the rice separately.", "Add rice, cumin and salt to the lentils. Cover and simmer on low until both are tender, about 20 min. Add a splash of hot water if needed.", "Meanwhile, fry thinly sliced onions in oil until deep golden. Fold half into the rice and scatter the rest on top."],
      hi: ["मसूर धोकर ढाई कप पानी में 15 मिनट उबालें। चावल अलग धो लें।", "मसूर में चावल, जीरा और नमक डालकर ढकें। धीमी आँच पर लगभग 20 मिनट पकाएँ। ज़रूरत हो तो थोड़ा गरम पानी डालें।", "इस बीच कटे प्याज़ तेल में गहरे सुनहरे तलें। आधे चावल में मिलाएँ और बाकी ऊपर डालें।"]
    }
  },
  {
    name: "Egyptian Ful Medames", hindi: "मिस्री फूल मेदामेस", keywords: "Egyptian North African Middle Eastern mashed fava beans मिस्री",
    course: "Main", prep: 7, cook: 12, serves: 3, pantry: ["cookedfavabeans", "lemon", "garlic", "cumin", "oliveoil"],
    amounts: {
      en: ["2 cups drained cooked fava beans and ½ cup water", "1 garlic clove, 1 lemon, ¾ tsp ground cumin, 2 tbsp olive oil and salt"],
      hi: ["2 कप उबली और निथरी फावा बीन्स और ½ कप पानी", "1 लहसुन कली, 1 नींबू, ¾ छोटा चम्मच जीरा पाउडर, 2 बड़े चम्मच जैतून तेल और नमक"]
    },
    steps: {
      en: ["Simmer the cooked beans with water for 8–10 min until piping hot.", "Crush garlic with cumin, salt and lemon juice. Stir into the beans and roughly mash.", "Drizzle with olive oil and serve warm with flatbread."],
      hi: ["उबली बीन्स को पानी के साथ 8–10 मिनट उबालें।", "लहसुन, जीरा, नमक और नींबू रस कूटकर बीन्स में मिलाएँ और दरदरा मसलें।", "ऊपर जैतून का तेल डालकर रोटी के साथ गरम परोसें।"]
    }
  },
  {
    name: "Turkish Red Lentil Soup", hindi: "तुर्की लाल मसूर सूप", keywords: "Turkish mercimek corbasi Turkey तुर्की",
    course: "Main", prep: 10, cook: 25, serves: 4, pantry: ["masoor", "onion", "carrot", "cumin", "lemon", "oliveoil"],
    amounts: {
      en: ["1 cup split red lentils, 1 onion, 1 carrot and 4 cups water", "1 tbsp olive oil, ½ tsp ground cumin, ½ tsp salt and 1 lemon"],
      hi: ["1 कप धुली मसूर, 1 प्याज़, 1 गाजर और 4 कप पानी", "1 बड़ा चम्मच जैतून तेल, ½ छोटा चम्मच जीरा पाउडर, ½ छोटा चम्मच नमक और 1 नींबू"]
    },
    steps: {
      en: ["Chop onion and carrot. Soften them in oil and stir in cumin.", "Add rinsed lentils, salt and water. Simmer for 20 min or until the lentils and carrot are tender.", "Blend until smooth using an immersion blender, then season with lemon juice."],
      hi: ["प्याज़ और गाजर काटकर तेल में नरम करें और जीरा मिलाएँ।", "धुली मसूर, नमक और पानी डालकर करीब 20 मिनट या सबके नरम होने तक उबालें।", "हैंड ब्लेंडर से चिकना करें और नींबू रस मिलाएँ।"]
    }
  },
  {
    name: "Spanish Pisto", hindi: "स्पैनिश पिस्तो", keywords: "Spanish Spain pisto manchego vegetable stew स्पैनिश",
    course: "Main", prep: 15, cook: 35, serves: 4, pantry: ["onion", "capsicum", "zucchini", "tomato", "garlic", "oliveoil"],
    amounts: {
      en: ["1 onion, 2 peppers, 2 small zucchini and 5 ripe tomatoes", "2 garlic cloves, 3 tbsp olive oil and ½ tsp salt"],
      hi: ["1 प्याज़, 2 शिमला मिर्च, 2 छोटी ज़ुकीनी और 5 पके टमाटर", "2 लहसुन कलियाँ, 3 बड़े चम्मच जैतून तेल और ½ छोटा चम्मच नमक"]
    },
    steps: {
      en: ["Dice the vegetables. Cook onion and peppers in oil for 10 min until softened.", "Add garlic and zucchini and cook 7 min, stirring occasionally.", "Add chopped tomatoes and salt. Simmer uncovered for 15–18 min until thick and spoonable."],
      hi: ["सब्ज़ियाँ छोटे टुकड़ों में काटें। तेल में प्याज़ और शिमला मिर्च 10 मिनट नरम करें।", "लहसुन और ज़ुकीनी डालकर बीच-बीच में चलाते हुए 7 मिनट पकाएँ।", "कटे टमाटर और नमक डालें। बिना ढके 15–18 मिनट गाढ़ा होने तक पकाएँ।"]
    }
  },
  {
    name: "French Ratatouille", hindi: "फ़्रेंच रैटाटूई", keywords: "French France Provencal Provençal tomato vegetable stew फ़्रेंच",
    course: "Main", prep: 15, cook: 35, serves: 4, pantry: ["brinjal", "zucchini", "capsicum", "tomato", "onion", "garlic", "oliveoil", "thyme"],
    amounts: {
      en: ["1 small eggplant, 1 zucchini, 1 bell pepper, 1 onion and 4 tomatoes", "3 garlic cloves, 3 tbsp olive oil, ½ tsp dried thyme and ½ tsp salt"],
      hi: ["1 छोटा बैंगन, 1 ज़ुकीनी, 1 शिमला मिर्च, 1 प्याज़ और 4 टमाटर", "3 लहसुन कलियाँ, 3 बड़े चम्मच जैतून तेल, ½ छोटा चम्मच सूखा थाइम और ½ छोटा चम्मच नमक"]
    },
    steps: {
      en: ["Dice the eggplant and zucchini and brown them separately in a little oil. Set aside.", "In the same pan, soften onion and pepper in the remaining oil. Stir in garlic, tomatoes, thyme and salt.", "Return the browned vegetables. Simmer gently for 20 min until tender and the tomato juices thicken."],
      hi: ["बैंगन और ज़ुकीनी काटकर थोड़ा तेल डालकर अलग-अलग हल्का भूरा करें और निकाल लें।", "उसी पैन में बचे तेल में प्याज़ और शिमला मिर्च नरम करें। लहसुन, टमाटर, थाइम और नमक डालें।", "बैंगन और ज़ुकीनी वापस डालें। सब्ज़ियाँ नरम और रस गाढ़ा होने तक करीब 20 मिनट पकाएँ।"]
    }
  },
  {
    name: "Mexican Esquites", hindi: "मेक्सिकन एस्कीतेस", keywords: "Mexican Mexico street corn lime मेक्सिकन",
    course: "Snack", prep: 10, cook: 10, serves: 3, pantry: ["corn", "butter", "egglessmayonnaise", "lemon", "redchillipowder", "feta"],
    amounts: {
      en: ["2 cups corn kernels, 1 tbsp butter and ¼ tsp salt", "2 tbsp eggless mayonnaise, 1 tbsp lime or lemon juice, ¼ tsp red chilli powder and ¼ cup crumbled vegetarian feta"],
      hi: ["2 कप मकई के दाने, 1 बड़ा चम्मच मक्खन और ¼ छोटा चम्मच नमक", "2 बड़े चम्मच अंडारहित मेयोनीज़, 1 बड़ा चम्मच नींबू रस, ¼ छोटा चम्मच लाल मिर्च और ¼ कप शाकाहारी फ़ेटा"]
    },
    steps: {
      en: ["Sauté corn in butter over medium-high heat until tender and browned in spots.", "Take off the heat and toss with eggless mayonnaise, citrus juice and salt.", "Spoon into cups and top with chilli and crumbled vegetarian feta."],
      hi: ["मक्खन में मकई मध्यम-तेज़ आँच पर नरम और कहीं-कहीं भूरी होने तक भूनें।", "आँच से उतारकर अंडारहित मेयोनीज़, नींबू रस और नमक मिलाएँ।", "प्यालों में डालकर ऊपर मिर्च और चूरा किया हुआ शाकाहारी फ़ेटा डालें।"]
    }
  },
  {
    name: "Japanese Miso Onigiri", hindi: "जापानी मिसो ओनिगिरी", keywords: "Japanese Japan yaki onigiri grilled rice ball जापानी",
    course: "Snack", prep: 10, cook: 25, serves: 3, pantry: ["shortgrainrice", "misopaste", "sesameoil"],
    amounts: {
      en: ["1 cup Japanese short-grain rice and water for cooking", "1 tbsp plain miso paste, 1 tbsp water for the glaze and 1 tsp sesame oil"],
      hi: ["1 कप जापानी छोटे दाने वाले चावल और पकाने के लिए पानी", "1 बड़ा चम्मच सादा मिसो पेस्ट, लेप के लिए 1 बड़ा चम्मच पानी और 1 छोटा चम्मच तिल का तेल"]
    },
    steps: {
      en: ["Rinse and cook the rice according to the packet. Let it cool just enough to handle.", "Use lightly wet hands to shape the warm rice into six compact triangles. Stir miso and glaze water together.", "Pan-toast the triangles in sesame oil until crisp. Brush thinly with miso and toast briefly on both sides."],
      hi: ["चावल धोकर पैकेट के निर्देश के अनुसार पकाएँ। छूने लायक ठंडा होने दें।", "हाथ हल्के गीले करके गरम चावल के छह मज़बूत त्रिकोण बनाएँ। मिसो में लेप वाला पानी मिलाएँ।", "तिल के तेल में त्रिकोण कुरकुरे सेंकें। मिसो का पतला लेप लगाकर दोनों ओर थोड़ी देर फिर सेंकें।"]
    }
  },
  {
    name: "Korean Vegetable Japchae", hindi: "कोरियाई सब्ज़ी जापचे", keywords: "Korean Korea glass noodles japchae कोरियाई",
    course: "Complete", prep: 20, cook: 15, serves: 3, pantry: ["glassnoodles", "carrot", "spinach", "mushroom", "onion", "soysauce", "sesameoil", "garlic", "sugar"],
    amounts: {
      en: ["150 g sweet potato glass noodles, 1 carrot, 100 g spinach, 150 g mushrooms and 1 onion", "2 garlic cloves, 2 tbsp soy sauce, 1 tbsp sesame oil and 1 tsp sugar"],
      hi: ["150 ग्राम शकरकंद ग्लास नूडल्स, 1 गाजर, 100 ग्राम पालक, 150 ग्राम मशरूम और 1 प्याज़", "2 लहसुन कलियाँ, 2 बड़े चम्मच सोया सॉस, 1 बड़ा चम्मच तिल का तेल और 1 छोटा चम्मच चीनी"]
    },
    steps: {
      en: ["Cook the noodles according to the packet and drain. Blanch spinach briefly and squeeze dry.", "Slice mushrooms and onion, cut carrot into matchsticks and stir-fry with garlic in half the oil until tender-crisp.", "Toss noodles and spinach with the vegetables, soy sauce, sugar and remaining sesame oil over low heat until evenly coated."],
      hi: ["नूडल्स पैकेट के अनुसार पकाकर निथारें। पालक को थोड़ी देर उबालकर पानी निचोड़ें।", "मशरूम और प्याज़ काटें। गाजर पतली काटकर लहसुन और बाकी सब्ज़ियों के साथ आधे तेल में भूनें।", "नूडल्स और पालक में सब्ज़ियाँ, सोया सॉस, चीनी और बचा तिल तेल डालकर धीमी आँच पर मिलाएँ।"]
    }
  },
  {
    name: "Indonesian Gado Gado", hindi: "इंडोनेशियाई गाडो गाडो", keywords: "Indonesian Indonesia peanut sauce vegetable salad इंडोनेशियाई",
    course: "Complete", prep: 15, cook: 20, serves: 3, pantry: ["tofu", "potato", "beans", "cabbage", "cucumber", "peanutbutter", "soysauce", "jaggery", "lemon"],
    amounts: {
      en: ["200 g firm tofu, 2 potatoes, 100 g green beans, 150 g cabbage and 1 cucumber", "¼ cup unsweetened peanut butter, 1 tbsp soy sauce, 2 tsp jaggery, juice of ½ lemon and ¼ cup warm water"],
      hi: ["200 ग्राम सख़्त टोफू, 2 आलू, 100 ग्राम हरी बीन्स, 150 ग्राम पत्तागोभी और 1 खीरा", "¼ कप बिना चीनी का पीनट बटर, 1 बड़ा चम्मच सोया सॉस, 2 छोटे चम्मच गुड़, आधे नींबू का रस और ¼ कप गुनगुना पानी"]
    },
    steps: {
      en: ["Boil potato chunks until tender. Blanch sliced cabbage and green beans until tender-crisp. Drain and slice the cucumber.", "Pat the tofu dry, cube it and pan-sear on a nonstick pan until golden.", "Whisk the sauce ingredients until pourable and spoon over the vegetables and tofu."],
      hi: ["आलू के टुकड़े नरम होने तक उबालें। कटी पत्तागोभी और बीन्स को हल्का उबालकर निथारें। खीरा काटें।", "टोफू पोंछकर टुकड़े करें और नॉनस्टिक पैन में सुनहरा सेंकें।", "सॉस की सामग्री फेंटकर बहने लायक बनाएँ और सब्ज़ियों और टोफू पर डालें।"]
    }
  },
  {
    name: "Vietnamese Tofu Summer Rolls", hindi: "वियतनामी टोफू समर रोल", keywords: "Vietnamese Vietnam goi cuon gỏi cuốn rice paper वियतनामी",
    course: "Snack", prep: 25, cook: 8, serves: 3, pantry: ["ricepaper", "tofu", "carrot", "cucumber", "mint", "soysauce", "lemon"],
    amounts: {
      en: ["6 rice paper wrappers, 180 g firm tofu, 1 carrot, 1 cucumber and one handful mint leaves", "2 tbsp soy sauce, 1 tbsp lemon juice and 1 tbsp water for dipping"],
      hi: ["6 राइस पेपर शीट, 180 ग्राम सख़्त टोफू, 1 गाजर, 1 खीरा और एक मुट्ठी पुदीना", "डिप के लिए 2 बड़े चम्मच सोया सॉस, 1 बड़ा चम्मच नींबू रस और 1 बड़ा चम्मच पानी"]
    },
    steps: {
      en: ["Cut tofu into strips and pan-sear until golden. Thinly slice the carrot and cucumber.", "Dip one wrapper in room-temperature water for a few seconds. Lay flat and add tofu, vegetables and mint. Fold in both sides and roll snugly.", "Repeat with the remaining wrappers. Stir soy sauce, lemon juice and water together for dipping."],
      hi: ["टोफू की पट्टियाँ काटकर सुनहरी सेंकें। गाजर और खीरा पतले काटें।", "एक शीट कुछ सेकंड सामान्य तापमान के पानी में डुबोएँ। फैलाकर टोफू, सब्ज़ियाँ और पुदीना रखें। दोनों किनारे मोड़कर कसकर लपेटें।", "बाकी शीट पर यही करें। डिप के लिए सोया सॉस, नींबू रस और पानी मिलाएँ।"]
    }
  },
  {
    name: "West African Peanut Stew", hindi: "पश्चिम अफ़्रीकी मूँगफली स्ट्यू", keywords: "West African Senegalese mafe mafé groundnut sweet potato पश्चिम अफ़्रीकी",
    course: "Main", prep: 12, cook: 30, serves: 4, pantry: ["sweetpotato", "tomato", "onion", "garlic", "ginger", "peanutbutter", "spinach"],
    amounts: {
      en: ["450 g sweet potato, 3 tomatoes, 1 onion and 100 g spinach", "3 garlic cloves, 1 tbsp grated ginger, ⅓ cup unsweetened peanut butter, 1 tbsp oil, 2 cups water and salt"],
      hi: ["450 ग्राम शकरकंद, 3 टमाटर, 1 प्याज़ और 100 ग्राम पालक", "3 लहसुन कलियाँ, 1 बड़ा चम्मच कद्दूकस अदरक, ⅓ कप बिना चीनी का पीनट बटर, 1 बड़ा चम्मच तेल, 2 कप पानी और नमक"]
    },
    steps: {
      en: ["Soften chopped onion in oil. Add garlic, ginger and diced tomatoes and simmer until the tomatoes break down.", "Add peeled, diced sweet potato and water. Whisk peanut butter with a ladle of warm broth and stir it back into the pot.", "Simmer until the sweet potato is tender, then stir in chopped spinach and cook until wilted. Season with salt."],
      hi: ["कटे प्याज़ तेल में नरम करें। लहसुन, अदरक और कटे टमाटर डालकर टमाटर गलने तक पकाएँ।", "छिली कटी शकरकंद और पानी डालें। पीनट बटर में एक कलछी गरम रस फेंटकर पतीले में वापस मिलाएँ।", "शकरकंद नरम होने तक पकाएँ। कटा पालक डालकर मुरझाने तक पकाएँ और नमक मिलाएँ।"]
    }
  },
  {
    name: "Moroccan Chickpea Couscous", hindi: "मोरक्कन चना कूसकूस", keywords: "Moroccan Morocco North African मोरक्कन",
    course: "Complete", prep: 12, cook: 23, serves: 4, pantry: ["couscous", "cookedchickpeas", "carrot", "zucchini", "onion", "tomato", "cumin", "cinnamon", "oliveoil"],
    amounts: {
      en: ["1 cup instant couscous, 1½ cups cooked chickpeas, 1 onion, 2 carrots, 1 zucchini and 2 tomatoes", "2 tbsp olive oil, 1 tsp ground cumin, ¼ tsp cinnamon, water and salt"],
      hi: ["1 कप इंस्टेंट कूसकूस, डेढ़ कप उबले काबुली चने, 1 प्याज़, 2 गाजर, 1 ज़ुकीनी और 2 टमाटर", "2 बड़े चम्मच जैतून तेल, 1 छोटा चम्मच जीरा पाउडर, ¼ छोटा चम्मच दालचीनी, पानी और नमक"]
    },
    steps: {
      en: ["Soften chopped onion in oil, then add cumin, cinnamon, chopped tomatoes and carrots with ½ cup water.", "Cover and simmer for 10 min. Add chickpeas and chopped zucchini and cook until the vegetables are tender.", "Meanwhile hydrate the couscous according to the packet and fluff with a fork. Spoon the chickpeas and vegetables over it."],
      hi: ["कटे प्याज़ तेल में नरम करें। जीरा, दालचीनी, कटे टमाटर, गाजर और आधा कप पानी डालें।", "ढककर 10 मिनट पकाएँ। चने और कटी ज़ुकीनी डालकर सब्ज़ियाँ नरम होने तक पकाएँ।", "इस बीच कूसकूस पैकेट के निर्देश से तैयार करें और काँटे से दाने अलग करें। ऊपर चने और सब्ज़ियाँ डालकर परोसें।"]
    }
  }
];

const INTERNATIONAL_PANTRY = [
  ["masoorwhole", "Whole masoor (brown lentils)", "साबुत मसूर"],
  ["zucchini", "Zucchini (courgette)", "ज़ुकीनी"],
  ["cookedfavabeans", "Cooked fava beans", "उबली फावा बीन्स"],
  ["egglessmayonnaise", "Eggless mayonnaise", "अंडारहित मेयोनीज़"],
  ["feta", "Vegetarian feta", "शाकाहारी फ़ेटा"],
  ["shortgrainrice", "Japanese short-grain rice", "जापानी छोटे दाने वाले चावल"],
  ["misopaste", "Plain miso paste", "सादा मिसो पेस्ट"],
  ["glassnoodles", "Sweet potato glass noodles", "शकरकंद ग्लास नूडल्स"],
  ["ricepaper", "Rice paper wrappers", "राइस पेपर शीट"],
  ["couscous", "Instant couscous", "इंस्टेंट कूसकूस"]
];
