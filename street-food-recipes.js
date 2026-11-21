// Small-batch chaat, street snacks and dumplings. Times assume the ingredients listed.
const STREET_FOOD_RECIPES = [
  {
    name: "Raj Kachori Chaat", hindi: "राज कचौरी चाट",
    region: "North Indian", course: "Snack", prep: 12, cook: 0, serves: 2, appliances: ["N"],
    pantry: ["rajkachorishells", "cookedchickpeas", "boiledpotato", "curd", "greenchutney", "tamarindchutney", "sev", "chaatmasala", "pomegranate?"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-raj-kachori-218068"],
    amounts: {
      en: ["2 large ready-made hollow raj kachori shells", "½ cup cooked chickpeas and 1 small boiled potato, diced", "½ cup plain curd, whisked, and ½ tsp chaat masala", "2 tbsp each green chutney, sweet tamarind chutney and sev", "2 tbsp pomegranate seeds (optional)"],
      hi: ["2 बड़ी तैयार खोखली राज कचौरी", "½ कप उबले काबुली चने और 1 छोटा उबला आलू, टुकड़ों में कटा", "½ कप फेंटा सादा दही और ½ छोटा चम्मच चाट मसाला", "2 बड़े चम्मच हरी चटनी, 2 बड़े चम्मच मीठी इमली की चटनी और 2 बड़े चम्मच सेव", "2 बड़े चम्मच अनार के दाने (वैकल्पिक)"]
    },
    steps: {
      en: ["Start with crisp ready-made shells and cooled, fully cooked chickpeas and potato. Mix the chickpeas and diced potato with half the chaat masala.", "Set the shells upright in shallow bowls. Tap a small hole in the top of each with the back of a spoon and gently widen it. Divide the potato and chickpea filling between the shells.", "Spoon over curd and both chutneys. Finish with sev, the remaining chaat masala and optional pomegranate. Serve straight away while the shells are crisp."],
      hi: ["करारी तैयार कचौरी, ठंडे उबले चने और आलू लें। चनों और कटे आलू में आधा चाट मसाला मिलाएँ।", "कचौरियाँ उथली कटोरियों में सीधी रखें। चम्मच के पिछले हिस्से से ऊपर छोटा छेद करें और धीरे से चौड़ा करें। आलू और चने दोनों में बाँटें।", "ऊपर दही और दोनों चटनियाँ डालें। सेव, बचा चाट मसाला और चाहें तो अनार डालें। कचौरी करारी रहते ही परोसें।"]
    }
  },
  {
    name: "Palak Patta Chaat", hindi: "पालक पत्ता चाट",
    region: "North Indian", course: "Snack", prep: 8, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["spinach", "besan", "riceflour", "curd", "greenchutney", "tamarindchutney", "chaatmasala", "sev?"],
    source: ["Chef Kunal Kapur", "https://www.chefkunalkapur.com/recipe/palak-patta-chaat/"],
    amounts: {
      en: ["8 large spinach leaves", "½ cup besan, 1 tbsp rice flour and ⅓ cup water, plus a little extra as needed", "¼ tsp salt, a pinch of chilli powder and about ½ cup neutral oil for shallow-frying", "⅓ cup whisked curd, 2 tbsp each green and tamarind chutney and ½ tsp chaat masala", "2 tbsp sev (optional)"],
      hi: ["पालक के 8 बड़े पत्ते", "½ कप बेसन, 1 बड़ा चम्मच चावल का आटा और ⅓ कप पानी, ज़रूरत पर थोड़ा और", "¼ छोटा चम्मच नमक, चुटकी भर लाल मिर्च पाउडर और तलने के लिए लगभग ½ कप सादा तेल", "⅓ कप फेंटा दही, 2 बड़े चम्मच हरी चटनी, 2 बड़े चम्मच इमली की चटनी और ½ छोटा चम्मच चाट मसाला", "2 बड़े चम्मच सेव (वैकल्पिक)"]
    },
    steps: {
      en: ["Rinse the spinach and pat each leaf completely dry. Whisk the flours, salt, chilli and water into a thin batter that lightly coats the back of a spoon.", "Heat a shallow layer of oil over medium-high heat. Dip one leaf at a time, let the excess batter drip off, then lay it flat in the oil. Fry in batches for 2–3 min per batch, turning once, until crisp on both sides. Drain on a rack.", "Spread the leaves in a single layer. Just before serving, drizzle with the curd and chutneys. Scatter over chaat masala and optional sev."],
      hi: ["पालक धोकर हर पत्ता पूरी तरह पोंछकर सुखाएँ। बेसन, चावल का आटा, नमक, मिर्च और पानी फेंटकर ऐसा पतला घोल बनाएँ जो चम्मच पर हल्की परत छोड़े।", "कड़ाही में थोड़ा गहरा तेल मध्यम से तेज़ आँच पर गरम करें। एक-एक पत्ता डुबोएँ, अतिरिक्त घोल टपकने दें और पत्ता तेल में सपाट रखें। हर खेप 2–3 मिनट एक बार पलटकर दोनों ओर करारी तलें। जाली पर रखें।", "पत्ते एक परत में फैलाएँ। परोसने से ठीक पहले दही और दोनों चटनियाँ डालें। चाट मसाला और चाहें तो सेव छिड़कें।"]
    }
  },
  {
    name: "Delhi Ram Ladoo Chaat", hindi: "दिल्ली की राम लड्डू चाट",
    region: "North Indian", course: "Snack", prep: 9, cook: 10, soak: [120, "moong dal"], serves: 2, appliances: ["I"],
    pantry: ["moong", "mooli", "ginger?", "gchilli", "greenchutney", "lemon", "chaatmasala"],
    source: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/ram-ladoo-recipe/"],
    amounts: {
      en: ["½ cup split yellow moong dal, soaked for 2 hours", "½ small white radish, grated, and 1 green chilli", "1 cm ginger (optional), ¼ tsp salt and neutral oil for frying", "2 tbsp green chutney, 1 tsp lemon juice and ¼ tsp chaat masala"],
      hi: ["½ कप धुली पीली मूँग दाल, 2 घंटे भिगोई हुई", "½ छोटी सफ़ेद मूली, कद्दूकस की हुई, और 1 हरी मिर्च", "1 सेमी अदरक (वैकल्पिक), ¼ छोटा चम्मच नमक और तलने के लिए सादा तेल", "2 बड़े चम्मच हरी चटनी, 1 छोटा चम्मच नींबू रस और ¼ छोटा चम्मच चाट मसाला"]
    },
    steps: {
      en: ["Soak the dal ahead for 2 hours, then drain thoroughly. Grind with the chilli and optional ginger into a thick, slightly grainy paste, adding water only by the teaspoon if the grinder stalls.", "Beat in the salt for 1 min to lighten the paste. Heat about 3 cm of oil in a small deep pan over medium heat. Drop in heaped teaspoons of batter in two batches. Fry for 3–4 min per batch, turning until evenly golden and cooked through.", "Drain the fritters. Divide into bowls and top with grated radish, green chutney, lemon and chaat masala. Serve hot."],
      hi: ["दाल पहले से 2 घंटे भिगोकर अच्छी तरह निथारें। मिर्च और चाहें तो अदरक के साथ गाढ़ा, हल्का दरदरा पीसें। मिक्सर अटके तभी एक-एक छोटा चम्मच पानी डालें।", "नमक डालकर 1 मिनट फेंटें। छोटी गहरी कड़ाही में लगभग 3 सेमी तेल मध्यम आँच पर गरम करें। चम्मच भर घोल दो खेप में डालें। हर खेप 3–4 मिनट पलटते हुए सुनहरी और अंदर तक पकाएँ।", "लड्डुओं से तेल निथारें। कटोरियों में बाँटकर मूली, हरी चटनी, नींबू रस और चाट मसाला डालें। गरम परोसें।"]
    }
  },
  {
    name: "Kolkata Jhal Muri", hindi: "कोलकाता झाल मुड़ी",
    region: "Bengali", course: "Snack", prep: 10, cook: 0, serves: 2, appliances: ["N"],
    pantry: ["murmura", "roastedpeanuts", "onion", "tomato", "gchilli", "mustardoil", "lemon", "coriander?", "chaatmasala"],
    source: ["Bong Eats", "https://www.bongeats.com/recipe/jhal-muri"],
    amounts: {
      en: ["2½ cups crisp puffed rice and ¼ cup roasted peanuts", "¼ red onion, ½ firm tomato and 1 green chilli, finely chopped", "2 tsp food-grade mustard oil, 1 tbsp lemon juice and ½ tsp chaat masala", "2 tbsp chopped coriander (optional)"],
      hi: ["2½ कप करारा मुरमुरा और ¼ कप भुनी मूँगफली", "¼ लाल प्याज़, ½ सख़्त टमाटर और 1 हरी मिर्च, बारीक कटे", "2 छोटे चम्मच खाने वाला सरसों का तेल, 1 बड़ा चम्मच नींबू रस और ½ छोटा चम्मच चाट मसाला", "2 बड़े चम्मच कटा हरा धनिया (वैकल्पिक)"]
    },
    steps: {
      en: ["Remove the juicy tomato seeds before dicing so the mixture stays crisp. Toss the tomato, onion, chilli and peanuts in a large dry bowl.", "Add the puffed rice and chaat masala. Drizzle the mustard oil and lemon around the bowl and toss briskly so no patch gets soggy.", "Taste, fold in the coriander if using and divide into bowls or clean paper cones. Eat as soon as it is mixed."],
      hi: ["टमाटर काटने से पहले उसका रस और बीज निकालें, ताकि मिश्रण करारा रहे। सूखे बड़े कटोरे में टमाटर, प्याज़, मिर्च और मूँगफली मिलाएँ।", "मुरमुरा और चाट मसाला डालें। कटोरे में चारों ओर सरसों का तेल और नींबू रस डालकर तेज़ी से उलट-पलट करें, ताकि कहीं मुरमुरा गीला न हो।", "चखें, चाहें तो धनिया मिलाएँ और कटोरियों या साफ़ कागज़ की कोन में बाँटें। मिलाते ही खाएँ।"]
    }
  },
  {
    name: "Mumbai Masala Pav", hindi: "मुंबई मसाला पाव",
    region: "Maharashtrian", course: "Snack", prep: 6, cook: 12, serves: 2, appliances: ["T"],
    pantry: ["pav", "butter", "onion", "tomato", "capsicum", "pavbhajimasala", "lemon?", "coriander?"],
    source: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/masala-pav-recipe-mumbai-masala-pav/"],
    amounts: {
      en: ["2 pav rolls and 1½ tbsp butter", "½ small onion, 1 tomato and ½ small green capsicum, finely chopped", "1 tsp pav bhaji masala, ¼ tsp salt and 2 tbsp water", "1 tsp lemon juice and 1 tbsp coriander (both optional)"],
      hi: ["2 पाव और 1½ बड़े चम्मच मक्खन", "½ छोटा प्याज़, 1 टमाटर और ½ छोटी हरी शिमला मिर्च, बारीक कटी", "1 छोटा चम्मच पाव भाजी मसाला, ¼ छोटा चम्मच नमक और 2 बड़े चम्मच पानी", "1 छोटा चम्मच नींबू रस और 1 बड़ा चम्मच हरा धनिया (दोनों वैकल्पिक)"]
    },
    steps: {
      en: ["Melt 1 tbsp butter on a tawa or wide skillet. Fry the onion and capsicum over medium-high heat for 3 min.", "Add the tomato, pav bhaji masala, salt and water. Cook for 5–6 min, pressing with the spatula until the tomatoes break down into a thick masala.", "Push the masala to one side. Split the pav without cutting all the way through. Toast the cut sides in the remaining butter, spoon in the masala and roll the outside lightly through any extra masala. Finish with optional lemon and coriander."],
      hi: ["तवे या चौड़े पैन में 1 बड़ा चम्मच मक्खन पिघलाएँ। मध्यम से तेज़ आँच पर प्याज़ और शिमला मिर्च 3 मिनट भूनें।", "टमाटर, पाव भाजी मसाला, नमक और पानी डालें। 5–6 मिनट पकाते हुए पलटे से दबाएँ, जब तक गाढ़ा मसाला बने।", "मसाला तवे के एक तरफ़ करें। पाव को बीच से काटें लेकिन पूरी तरह अलग न करें। बचे मक्खन में कटी सतह सेंकें, मसाला भरें और चाहें तो बचा मसाला बाहर भी लगाएँ। नींबू रस और धनिया वैकल्पिक हैं।"]
    }
  },
  {
    name: "Amritsari Bun Chole", hindi: "अमृतसरी बन छोले",
    region: "Punjabi", course: "Snack", prep: 6, cook: 10, serves: 2, appliances: ["T"],
    pantry: ["pav", "cookedchickpeas", "onion", "tomato", "cholemasala", "butter", "lemon"],
    source: ["NDTV Food", "https://food.ndtv.com/food-drinks/how-to-make-amritsari-bun-chole-a-street-style-delicacy-you-must-try-3136751"],
    amounts: {
      en: ["2 soft buns or pav and 1 cup fully cooked chickpeas", "½ small red onion, 1 small tomato and ¼ cup water", "1 tbsp butter, 1 tsp chole masala and ¼ tsp salt", "1 tsp lemon juice"],
      hi: ["2 नरम बन या पाव और 1 कप पूरी तरह उबले काबुली चने", "½ छोटा लाल प्याज़, 1 छोटा टमाटर और ¼ कप पानी", "1 बड़ा चम्मच मक्खन, 1 छोटा चम्मच छोले मसाला और ¼ छोटा चम्मच नमक", "1 छोटा चम्मच नींबू रस"]
    },
    steps: {
      en: ["Use drained canned or already-boiled chickpeas. Finely chop half the onion and thinly slice the rest for topping. Chop the tomato.", "Melt half the butter in a skillet. Fry the chopped onion for 2 min, add tomato and chole masala and cook until the tomato softens. Add the chickpeas, salt and water. Simmer for 3–4 min, mashing some chickpeas until the filling is thick enough to sit in a bun.", "Split the buns and toast the cut faces in the remaining butter. Fill with hot chole, sliced onion and lemon juice."],
      hi: ["डिब्बाबंद निथारे या पहले से उबले चने लें। आधा प्याज़ बारीक काटें और बचा प्याज़ ऊपर डालने के लिए पतला काटें। टमाटर काटें।", "पैन में आधा मक्खन पिघलाएँ। बारीक प्याज़ 2 मिनट भूनें, फिर टमाटर और छोले मसाला डालकर टमाटर नरम करें। चने, नमक और पानी डालकर 3–4 मिनट पकाएँ। कुछ चने मसलकर भरावन गाढ़ा करें।", "बन काटकर अंदर की सतह बचे मक्खन में सेंकें। गरम छोले, पतला प्याज़ और नींबू रस भरें।"]
    }
  },
  {
    name: "Irani Cafe Bun Maska", hindi: "ईरानी कैफ़े बन मस्का",
    region: "Maharashtrian", course: "Snack", prep: 5, cook: 0, serves: 2, appliances: ["N"],
    pantry: ["pav", "butter", "cream?"],
    source: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/bun-maska/"],
    amounts: {
      en: ["2 soft bakery buns or pav", "3 tbsp softened salted butter", "2 tsp thick cream (optional)"],
      hi: ["बेकरी के 2 नरम बन या पाव", "3 बड़े चम्मच नरम नमकीन मक्खन", "2 छोटे चम्मच गाढ़ी क्रीम (वैकल्पिक)"]
    },
    steps: {
      en: ["Start with butter soft enough to spread easily. Beat it with a fork for about 1 min until smooth, then whip in the optional cream.", "Split each bun horizontally. Keep the crust and crumb soft and spread the butter thickly over the cut surfaces.", "Close the buns and cut each in half. Serve at room temperature with hot chai."],
      hi: ["आसानी से फैलने वाला नरम मक्खन लें। काँटे से लगभग 1 मिनट चिकना होने तक फेंटें और चाहें तो क्रीम मिलाकर फिर फेंटें।", "हर बन आड़ा काटें। बन नरम रखें और कटी सतह पर मक्खन की मोटी परत लगाएँ।", "बन बंद करके आधे काटें। कमरे के तापमान पर गरम चाय के साथ परोसें।"]
    }
  },
  {
    name: "Cantonese Shrimp Siu Mai", hindi: "कैंटोनीज़ झींगा सिउ माई",
    region: "Chinese", course: "Snack", prep: 15, cook: 8, serves: 2, nonveg: true, appliances: ["I"],
    keywords: "dim sum dimsum डिम सम शुमाई",
    pantry: ["prawn", "wontonwrappers", "springonion", "cornflour", "soysauce", "sesameoil", "carrot?"],
    source: ["Souped Up Recipes", "https://curatedkitchenware.com/en-nz/blogs/soupeduprecipes/cantonese-shrimp-siu-mai-recipe"],
    amounts: {
      en: ["160 g thawed peeled raw shrimp and 10 thin wonton wrappers", "1 spring onion, finely chopped, and 2 tsp cornflour", "1 tsp light soy sauce, ½ tsp toasted sesame oil and a pinch of salt", "1 tbsp finely diced carrot (optional)"],
      hi: ["160 ग्राम पिघले, छिले कच्चे झींगे और 10 पतली वॉन्टन शीट", "1 बारीक कटा हरा प्याज़ और 2 छोटे चम्मच कॉर्नफ्लोर", "1 छोटा चम्मच हल्का सोया सॉस, ½ छोटा चम्मच भुने तिल का तेल और चुटकी भर नमक", "1 बड़ा चम्मच बारीक कटी गाजर (वैकल्पिक)"]
    },
    steps: {
      en: ["Pat the shrimp dry. Finely mince half and chop the rest into small pieces. Stir them together with spring onion, cornflour, soy, sesame oil and salt until the mixture feels sticky.", "Place about a rounded tablespoon of filling on each wrapper. Cup the wrapper around it, pleat the sides and flatten the bottom, leaving the top open. Add a little diced carrot to each top if using.", "Place upright in a lightly oiled steamer basket without crowding. Steam over boiling water for 7–8 min, until the centres reach 145°F (63°C) and the shrimp is firm and opaque. Serve hot."],
      hi: ["झींगों को पोंछकर सुखाएँ। आधे बारीक और बाकी छोटे टुकड़ों में काटें। हरा प्याज़, कॉर्नफ्लोर, सोया सॉस, तिल का तेल और नमक डालकर चिपचिपा होने तक मिलाएँ।", "हर शीट के बीच एक भरा बड़ा चम्मच मिश्रण रखें। किनारे मोड़कर ऊपर की तरफ़ खुला छोड़ें और तली सपाट करें। चाहें तो ऊपर थोड़ी कटी गाजर रखें।", "हल्का तेल लगी स्टीमर की टोकरी में दूरी पर सीधे रखें। उबलते पानी पर 7–8 मिनट भाप दें, जब तक बीच का तापमान 63°C (145°F) हो और झींगे अपारदर्शी व सख़्त हो जाएँ। गरम परोसें।"]
    }
  },
  {
    name: "Hong Kong Street Cheung Fun", hindi: "हांगकांग स्ट्रीट च्युंग फ़न",
    region: "Chinese", course: "Snack", prep: 6, cook: 6, serves: 2, appliances: ["I"],
    keywords: "dim sum dimsum डिम सम rice noodle rolls",
    pantry: ["ricenoodlerolls", "hoisinsauce", "peanutbutter", "soysauce", "sesame?"],
    source: ["Hung’s Noodles", "https://hungsnoodles.com/rice-rolls-aka-cheung-fun-hong-kong-street-vendor-style/"],
    amounts: {
      en: ["250 g prepared plain rice noodle rolls, chilled or at room temperature", "1½ tbsp hoisin sauce and 1 tbsp smooth peanut butter", "1 tsp light soy sauce and 2–3 tbsp hot water", "1 tsp toasted sesame seeds (optional)"],
      hi: ["250 ग्राम तैयार सादे चावल-नूडल रोल, ठंडे या कमरे के तापमान पर", "1½ बड़े चम्मच होइसिन सॉस और 1 बड़ा चम्मच मुलायम पीनट बटर", "1 छोटा चम्मच हल्का सोया सॉस और 2–3 बड़े चम्मच गरम पानी", "1 छोटा चम्मच भुने तिल (वैकल्पिक)"]
    },
    steps: {
      en: ["Cut the ready-made rice noodle rolls into bite-sized pieces. Steam on a heatproof plate over boiling water for about 5 min until hot, supple and easy to separate.", "Stir the peanut butter with 1–2 tbsp hot water to make a pourable sauce. In another bowl, loosen the hoisin and soy sauce with the remaining hot water.", "Divide the rolls between two plates. Drizzle over both sauces and sprinkle with optional sesame seeds. Serve immediately."],
      hi: ["तैयार चावल-नूडल रोल छोटे टुकड़ों में काटें। गरम पानी की भाप पर गर्मी सहने वाली प्लेट में लगभग 5 मिनट पकाएँ, जब तक गरम, नरम और आसानी से अलग होने लगें।", "पीनट बटर में 1–2 बड़े चम्मच गरम पानी मिलाकर बहने लायक सॉस बनाएँ। अलग कटोरी में होइसिन और सोया सॉस बचे गरम पानी से पतले करें।", "रोल दो प्लेटों में बाँटें। ऊपर दोनों सॉस डालें और चाहें तो तिल छिड़कें। तुरंत परोसें।"]
    }
  },
  {
    name: "Sichuan Chicken Chilli Oil Wontons", hindi: "सिचुआन चिकन चिली ऑयल वॉन्टन",
    region: "Chinese", course: "Snack", prep: 17, cook: 8, serves: 2, nonveg: true, appliances: ["I"],
    keywords: "dumplings डम्पलिंग dim sum dimsum डिम सम",
    pantry: ["chicken", "wontonwrappers", "springonion", "soysauce", "chillioil", "vinegar", "ginger?", "sugar"],
    source: ["Red House Spice", "https://redhousespice.com/sichuan-spicy-wonton-in-chili-oil/"],
    amounts: {
      en: ["120 g ground chicken and 12 square wonton wrappers", "1 finely sliced spring onion, 1 tsp light soy sauce and 1 tbsp cold water for the filling", "1 tsp grated ginger (optional)", "1 tbsp chilli oil, 1 tbsp light soy sauce, 2 tsp black or rice vinegar and ½ tsp sugar for the dressing"],
      hi: ["120 ग्राम चिकन कीमा और 12 चौकोर वॉन्टन शीट", "भरावन के लिए 1 पतला कटा हरा प्याज़, 1 छोटा चम्मच हल्का सोया सॉस और 1 बड़ा चम्मच ठंडा पानी", "1 छोटा चम्मच कद्दूकस किया अदरक (वैकल्पिक)", "ड्रेसिंग के लिए 1 बड़ा चम्मच मिर्च का तेल, 1 बड़ा चम्मच हल्का सोया सॉस, 2 छोटे चम्मच काला या चावल का सिरका और ½ छोटा चम्मच चीनी"]
    },
    steps: {
      en: ["Mix the chicken, half the spring onion, the filling soy sauce, cold water and optional ginger until sticky. Set a heaped teaspoon in the centre of each wrapper.", "Wet the edges, fold each wrapper into a triangle and press out the air while sealing. Wet the two corners on the long edge and pinch them together.", "Lower the wontons into gently boiling water and stir once. Cook at a gentle boil for 4–6 min, until the filling reaches 165°F (74°C). Lift out with a slotted spoon.", "Stir the chilli oil, dressing soy sauce, vinegar and sugar into two shallow bowls. Add a spoonful of hot cooking water to each. Divide the wontons between the bowls and finish with the remaining spring onion."],
      hi: ["चिकन, आधा हरा प्याज़, भरावन वाला सोया सॉस, ठंडा पानी और चाहें तो अदरक चिपचिपा होने तक मिलाएँ। हर शीट के बीच एक भरा छोटा चम्मच रखें।", "किनारे गीले करके शीट को तिकोना मोड़ें। बंद करते समय अंदर की हवा निकालें। लंबी धार के दोनों कोने गीले करके आपस में दबाएँ।", "हल्के उबलते पानी में वॉन्टन डालकर एक बार चलाएँ। हल्के उबाल पर 4–6 मिनट पकाएँ, जब तक भरावन 74°C (165°F) तक पहुँचे। झारे से निकालें।", "मिर्च का तेल, ड्रेसिंग वाला सोया सॉस, सिरका और चीनी दो उथली कटोरियों में मिलाएँ। हर कटोरी में एक चम्मच उबलते पानी में से डालें। वॉन्टन बाँटें और बचा हरा प्याज़ डालें।"]
    }
  },
  {
    name: "Garlic Chive and Egg Dumplings", hindi: "गार्लिक चाइव और अंडे के डम्पलिंग",
    region: "Chinese", course: "Snack", prep: 15, cook: 10, serves: 2, nonveg: true, appliances: ["I"],
    keywords: "dim sum dimsum डिम सम potstickers jiaozi",
    pantry: ["dumplingwrappers", "garlicchives", "eggs", "sesameoil", "soysauce?"],
    source: ["The North Grove Kitchen", "https://www.thenorthgrove.ca/post/from-the-north-grove-kitchen-emily-s-garlic-chive-egg-dumplings"],
    amounts: {
      en: ["12 round dumpling wrappers, 2 eggs and ¾ cup finely chopped garlic chives", "2 tsp neutral oil, 1 tsp sesame oil and ¼ tsp salt", "¼ cup water for the pan and 1 tbsp soy sauce for dipping (soy sauce optional)"],
      hi: ["12 गोल डम्पलिंग शीट, 2 अंडे और ¾ कप बारीक कटी गार्लिक चाइव", "2 छोटे चम्मच सादा तेल, 1 छोटा चम्मच तिल का तेल और ¼ छोटा चम्मच नमक", "पैन के लिए ¼ कप पानी और डुबोने के लिए 1 बड़ा चम्मच सोया सॉस (सोया सॉस वैकल्पिक)"]
    },
    steps: {
      en: ["Beat the eggs and scramble in 1 tsp neutral oil until set. Break into small pieces and spread on a plate to cool. Toss the chives with sesame oil, then mix in the cooled egg and salt.", "Place a small spoonful of filling on each wrapper. Wet the edge, fold into a half-moon and press the seams firmly closed.", "Heat the remaining oil in a wide nonstick pan. Stand the dumplings on their flat sides and cook for 2 min until lightly browned underneath.", "Pour in the water, cover and steam for 4–5 min. Uncover and cook until the water has evaporated and the bottoms are crisp. Serve with optional soy sauce."],
      hi: ["अंडे फेंटकर 1 छोटा चम्मच सादे तेल में जमने तक भुर्जी बनाएँ। छोटे टुकड़े करके प्लेट पर ठंडा करें। चाइव में तिल का तेल मिलाएँ, फिर ठंडी भुर्जी और नमक डालें।", "हर शीट पर थोड़ा भरावन रखें। किनारा गीला कर अर्धचंद्र की तरह मोड़ें और जोड़ कसकर बंद करें।", "चौड़े नॉनस्टिक पैन में बचा तेल गरम करें। डम्पलिंग सपाट तली पर रखें और नीचे से हल्का सुनहरा होने तक 2 मिनट सेंकें।", "पानी डालकर ढकें और 4–5 मिनट भाप दें। ढक्कन हटाकर पानी सूखने और तली करारी होने तक पकाएँ। चाहें तो सोया सॉस के साथ परोसें।"]
    }
  },
  {
    name: "Hong Kong Curry Fish Balls", hindi: "हांगकांग करी फ़िश बॉल्स",
    region: "Chinese", course: "Snack", prep: 5, cook: 12, serves: 2, nonveg: true, appliances: ["I"],
    keywords: "street food gaa lei jyu daan",
    pantry: ["fishballs", "onion", "currypowder", "soysauce", "cornflour", "sugar"],
    source: ["Lee Kum Kee", "https://usa.lkk.com/en/foodservices/homecooks/recipes/hong-kong-style-curry-street-food"],
    amounts: {
      en: ["250 g fully cooked fish balls, thawed if frozen", "¼ small onion, finely chopped, and 2 tsp neutral oil", "2 tsp mild curry powder, 1 tsp light soy sauce and ½ tsp sugar", "¾ cup water plus 1 tbsp cold water, and 1 tsp cornflour"],
      hi: ["250 ग्राम पूरी तरह पकी फ़िश बॉल्स, जमी हों तो पिघली हुई", "¼ छोटा प्याज़, बारीक कटा, और 2 छोटे चम्मच सादा तेल", "2 छोटे चम्मच हल्का करी पाउडर, 1 छोटा चम्मच हल्का सोया सॉस और ½ छोटा चम्मच चीनी", "¾ कप पानी, 1 बड़ा चम्मच ठंडा पानी और 1 छोटा चम्मच कॉर्नफ्लोर"]
    },
    steps: {
      en: ["Fry the onion in oil over medium heat for 2–3 min until softened. Add curry powder and stir briefly, then add the ¾ cup water, soy sauce and sugar.", "Bring to a simmer. Add the fully cooked fish balls and simmer for 5–7 min, or as directed on the package, until steaming hot throughout.", "Mix the cornflour and cold water. Stir it into the bubbling sauce and simmer for 1 min until glossy and thick enough to coat the balls. Serve in small bowls or on skewers."],
      hi: ["मध्यम आँच पर तेल में प्याज़ 2–3 मिनट नरम होने तक भूनें। करी पाउडर डालकर थोड़ा चलाएँ, फिर ¾ कप पानी, सोया सॉस और चीनी डालें।", "हल्का उबाल आने दें। पकी फ़िश बॉल्स डालकर 5–7 मिनट या पैकेट के निर्देश के अनुसार अंदर तक भाप छोड़ने जितनी गरम करें।", "कॉर्नफ्लोर और ठंडा पानी मिलाएँ। उबलते सॉस में घोल डालकर 1 मिनट पकाएँ, जब तक सॉस चमकदार होकर बॉल्स पर चढ़ने लगे। कटोरियों में या सींक पर परोसें।"]
    }
  },
  {
    name: "Steamed Mushroom Tofu Dumplings", hindi: "भाप में पके मशरूम टोफू डम्पलिंग",
    region: "Chinese", course: "Snack", prep: 15, cook: 11, serves: 2, appliances: ["I"],
    keywords: "vegetarian dim sum dimsum डिम सम dumplings डम्पलिंग",
    pantry: ["dumplingwrappers", "tofu", "mushroom", "springonion", "soysauce", "sesameoil", "ginger?"],
    source: ["Everyday Gourmet", "https://everydaygourmet.tv/recipes/mushroom-vegetable-and-tofu-dumplings"],
    amounts: {
      en: ["12 round egg-free dumpling wrappers and 100 g firm tofu", "60 g fresh shiitake or button mushrooms, finely chopped, and 1 finely sliced spring onion", "1 tsp light soy sauce, ½ tsp toasted sesame oil and 1 tsp neutral oil", "½ tsp grated ginger (optional)"],
      hi: ["12 गोल बिना अंडे वाली डम्पलिंग शीट और 100 ग्राम सख़्त टोफू", "60 ग्राम ताज़े शिटाके या बटन मशरूम, बारीक कटे, और 1 पतला कटा हरा प्याज़", "1 छोटा चम्मच हल्का सोया सॉस, ½ छोटा चम्मच भुने तिल का तेल और 1 छोटा चम्मच सादा तेल", "½ छोटा चम्मच कद्दूकस किया अदरक (वैकल्पिक)"]
    },
    steps: {
      en: ["Pat the tofu dry and crumble it. Heat the neutral oil in a small skillet. Fry the mushrooms over medium-high heat for 3–4 min until their liquid evaporates. Stir in the tofu, spring onion, soy, sesame oil and optional ginger. Spread on a plate to cool.", "Put a heaped teaspoon of cooled filling in each wrapper. Wet the rim, fold into a half-moon and press the edges together firmly. Keep the wrappers under a damp towel as you work.", "Space the dumplings on a lightly oiled steamer basket. Cover and steam over boiling water for 6–7 min until the wrappers are tender and the filling is piping hot. Serve immediately."],
      hi: ["टोफू पोंछकर सुखाएँ और मसलें। छोटे पैन में सादा तेल गरम करें। मशरूम मध्यम से तेज़ आँच पर 3–4 मिनट भूनें, जब तक उनका पानी सूख जाए। टोफू, हरा प्याज़, सोया सॉस, तिल का तेल और चाहें तो अदरक मिलाएँ। प्लेट पर फैलाकर ठंडा करें।", "हर शीट पर एक भरा छोटा चम्मच ठंडा भरावन रखें। किनारा गीला करें, आधा मोड़ें और जोड़ अच्छी तरह दबाएँ। काम करते समय बची शीट नम कपड़े के नीचे रखें।", "हल्का तेल लगी स्टीमर की टोकरी में डम्पलिंग थोड़ी दूरी पर रखें। ढककर उबलते पानी पर 6–7 मिनट भाप दें, जब तक शीट नरम और भरावन अंदर तक गरम हो जाए। तुरंत परोसें।"]
    }
  }
];
