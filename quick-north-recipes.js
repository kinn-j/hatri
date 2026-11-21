// Small-batch adaptations for Hatri. Prep and cook times assume the ingredients listed.
const QUICK_NORTH_RECIPES = [
  {
    name: "Rajasthani Dahi Tikhari", hindi: "राजस्थानी दही तिखारी",
    region: "Rajasthani", course: "Side", prep: 6, cook: 4, serves: 2, appliances: ["I"],
    pantry: ["curd", "garlic", "mustardoil", "cuminseeds", "coriander?"],
    source: ["Pakwanpedia", "https://pakwanpedia.in/hi/recipe/dahi-tikhari"],
    amounts: {
      en: ["1 cup plain full-fat curd", "2 garlic cloves, finely chopped", "2 tsp mustard oil, ½ tsp cumin seeds, ¼ tsp Kashmiri chilli powder and ¼ tsp salt", "1 tbsp chopped coriander (optional)"],
      hi: ["1 कप सादा मलाईदार दही", "लहसुन की 2 कलियाँ, बारीक कटी", "2 छोटे चम्मच सरसों का तेल, ½ छोटा चम्मच जीरा, ¼ छोटा चम्मच कश्मीरी लाल मिर्च पाउडर और ¼ छोटा चम्मच नमक", "1 बड़ा चम्मच कटा हरा धनिया (वैकल्पिक)"]
    },
    steps: {
      en: ["Whisk the curd with the salt until smooth and spread it in a shallow serving bowl.", "Heat the mustard oil in a small pan over medium heat. Sizzle the cumin, then stir in the garlic until just golden.", "Turn off the heat, swirl the chilli powder into the hot oil and spoon the tempering over the curd. Scatter over the coriander if using and serve with roti."],
      hi: ["दही और नमक चिकना होने तक फेंटें और उथले परोसने वाले बर्तन में डालें।", "छोटे पैन में मध्यम आँच पर सरसों का तेल गरम करें। जीरा चटकाएँ, फिर लहसुन हल्का सुनहरा होने तक भूनें।", "आँच बंद कर गरम तेल में मिर्च पाउडर मिलाएँ और तड़का दही पर डालें। चाहें तो हरा धनिया छिड़कें और रोटी के साथ परोसें।"]
    }
  },
  {
    name: "Hare Pyaz Besan Sabzi", hindi: "हरे प्याज़ की बेसन सब्ज़ी",
    region: "Rajasthani", course: "Side", prep: 7, cook: 10, serves: 2, appliances: ["I"],
    pantry: ["springonion", "besan", "gchilli?", "lemon?"],
    source: ["Zayka Ka Tadka", "https://www.zaykakatadka.com/recipe/besan-hare-pyaaz-ki-sabji/"],
    amounts: {
      en: ["200 g spring onions", "3 tbsp besan and 1 tbsp neutral oil", "½ tsp cumin seeds, ¼ tsp turmeric, ¼ tsp chilli powder and ¼ tsp salt", "1 green chilli, chopped, and 1 tsp lemon juice (both optional)"],
      hi: ["200 ग्राम हरा प्याज़", "3 बड़े चम्मच बेसन और 1 बड़ा चम्मच सादा तेल", "½ छोटा चम्मच जीरा, ¼ छोटा चम्मच हल्दी, ¼ छोटा चम्मच लाल मिर्च पाउडर और ¼ छोटा चम्मच नमक", "1 कटी हरी मिर्च और 1 छोटा चम्मच नींबू रस (दोनों वैकल्पिक)"]
    },
    steps: {
      en: ["Wash the spring onions well. Thinly slice the white and green parts, keeping them separate.", "Dry-toast the besan over low heat for 2–3 min, stirring until it smells nutty. Transfer it to a plate.", "Heat the oil in the same pan. Sizzle the cumin and optional green chilli, then fry the whites for 2 min. Stir in the greens, turmeric, chilli powder and salt until the greens wilt.", "Scatter in the besan and toss over low heat for 2 min. If the flour looks dusty, add a teaspoon of water and toss until the coating is crumbly. Finish with lemon if using."],
      hi: ["हरे प्याज़ अच्छी तरह धोएँ। सफ़ेद और हरे भाग पतले काटकर अलग रखें।", "बेसन धीमी आँच पर 2–3 मिनट लगातार चलाते हुए सुगंध आने तक सूखा भूनें और प्लेट में निकालें।", "उसी पैन में तेल गरम करके जीरा और चाहें तो हरी मिर्च चटकाएँ। सफ़ेद भाग 2 मिनट भूनें। हरे भाग, हल्दी, लाल मिर्च और नमक डालकर पत्तियाँ नरम होने तक चलाएँ।", "बेसन छिड़ककर धीमी आँच पर 2 मिनट मिलाएँ। सूखा बेसन दिखे तो एक छोटा चम्मच पानी डालकर भुरभुरा होने तक चलाएँ। चाहें तो नींबू रस डालें।"]
    }
  },
  {
    name: "Rajasthani Rabodi ki Sabzi", hindi: "राजस्थानी राबोड़ी की सब्ज़ी",
    region: "Rajasthani", course: "Main", prep: 10, cook: 10, serves: 2, appliances: ["I"],
    pantry: ["rabodi", "curd", "ghee", "cuminseeds", "coriander?"],
    source: ["The New Indian Express", "https://www.newindianexpress.com/amp/story/lifestyle/food/2026/Apr/26/more-than-meets-the-thali"],
    amounts: {
      en: ["50 g thin, quick-softening dried rabodi (maize wafers)", "½ cup plain curd, ½ cup water for the gravy and boiling water for soaking", "2 tsp ghee, ½ tsp cumin seeds, ½ tsp ground coriander, ¼ tsp turmeric, ¼ tsp chilli powder and ¼ tsp salt", "1 tbsp chopped coriander (optional)"],
      hi: ["50 ग्राम पतली, जल्दी नरम होने वाली सूखी राबोड़ी", "½ कप सादा दही, रसे के लिए ½ कप पानी और भिगोने के लिए उबलता पानी", "2 छोटे चम्मच घी, ½ छोटा चम्मच जीरा, ½ छोटा चम्मच धनिया पाउडर, ¼ छोटा चम्मच हल्दी, ¼ छोटा चम्मच लाल मिर्च पाउडर और ¼ छोटा चम्मच नमक", "1 बड़ा चम्मच कटा हरा धनिया (वैकल्पिक)"]
    },
    steps: {
      en: ["Break the thin rabodi into bite-sized pieces. Cover with boiling water for 10 min while you prepare the gravy. Drain once pliable. Thicker rabodi needs a longer soak, so soften it in advance for the 20-minute version.", "Whisk the curd, gravy water, ground coriander, turmeric and chilli powder until smooth.", "Heat ghee and sizzle the cumin. Turn the heat to low and slowly stir in the curd mixture. Keep stirring until the gravy starts to simmer gently.", "Add the drained rabodi and salt. Simmer gently for 4–5 min until the pieces are tender throughout. Add optional coriander and serve with roti."],
      hi: ["पतली राबोड़ी छोटे टुकड़ों में तोड़ें। रसा तैयार करते हुए उबलते पानी में 10 मिनट ढककर रखें। नरम होने पर निथारें। मोटी राबोड़ी को 20 मिनट वाली विधि के लिए पहले से भिगोकर नरम कर लें।", "दही, रसे का पानी, धनिया पाउडर, हल्दी और लाल मिर्च चिकना होने तक फेंटें।", "घी गरम करके जीरा चटकाएँ। आँच धीमी कर दही का मिश्रण थोड़ा-थोड़ा डालें और हल्का उबाल आने तक चलाते रहें।", "निथारी राबोड़ी और नमक डालकर धीमी आँच पर 4–5 मिनट पकाएँ, जब तक टुकड़े अंदर तक नरम हों। चाहें तो हरा धनिया डालें और रोटी के साथ परोसें।"]
    }
  },
  {
    name: "Kumaoni Kheere ka Raita", hindi: "कुमाऊँनी खीरे का रायता",
    region: "Pahadi", course: "Side", prep: 10, cook: 0, serves: 2, appliances: ["N"],
    pantry: ["cucumber", "curd", "mustardseeds", "gchilli?", "coriander?"],
    source: ["Basket of Pahad", "https://basketofpahad.com/recipes/pahadi-kheere-ka-raita"],
    amounts: {
      en: ["1 small cucumber and 1 cup thick plain curd", "½ tsp yellow mustard seeds, a pinch of turmeric and ¼ tsp salt", "½ green chilli and 1 tbsp chopped coriander (both optional)"],
      hi: ["1 छोटा खीरा और 1 कप गाढ़ा सादा दही", "½ छोटा चम्मच पीली सरसों, चुटकी भर हल्दी और ¼ छोटा चम्मच नमक", "½ हरी मिर्च और 1 बड़ा चम्मच कटा हरा धनिया (दोनों वैकल्पिक)"]
    },
    steps: {
      en: ["Coarsely grate the cucumber and squeeze out the excess juice. Pound the mustard to a fine powder in a mortar, then crush in the green chilli if using.", "Whisk the curd with the mustard, turmeric and salt. Fold in the grated cucumber.", "Let it stand for 3 min while you set the table. Taste, then add the optional coriander and serve cool."],
      hi: ["खीरा मोटा कद्दूकस करके अतिरिक्त रस निचोड़ें। सरसों ओखली में बारीक कूटें, फिर चाहें तो उसमें हरी मिर्च कूटें।", "दही में कुटी सरसों, हल्दी और नमक फेंटें। कद्दूकस किया खीरा मिलाएँ।", "परोसने से पहले 3 मिनट रखें। चखें, चाहें तो हरा धनिया डालें और ठंडा परोसें।"]
    }
  },
  {
    name: "Kumaoni Nimbu Saan", hindi: "कुमाऊँनी नींबू सान",
    region: "Pahadi", course: "Snack", prep: 12, cook: 3, serves: 2, appliances: ["I"],
    pantry: ["lemon", "curd", "sesame", "jaggery", "blacksalt?"],
    source: ["GOYA", "https://www.goya.in/blog/a-tangy-winter-snack-from-kumaon"],
    amounts: {
      en: ["1 large pahadi nimbu or 1 sweet lime plus 1 tsp lemon juice", "½ cup thick curd and 1 tbsp sesame seeds", "2 tsp grated jaggery, ¼ tsp salt and a pinch of chilli powder", "1 pinch black salt (optional)"],
      hi: ["1 बड़ा पहाड़ी नींबू या 1 मौसंबी और 1 छोटा चम्मच नींबू रस", "½ कप गाढ़ा दही और 1 बड़ा चम्मच तिल", "2 छोटे चम्मच कद्दूकस किया गुड़, ¼ छोटा चम्मच नमक और चुटकी भर लाल मिर्च पाउडर", "चुटकी भर काला नमक (वैकल्पिक)"]
    },
    steps: {
      en: ["Peel the citrus, pull away the membranes and discard the seeds. Break the segments into rough bite-sized pieces over a bowl.", "Toast the sesame in a dry pan over medium-low heat for 2 min, then crush it coarsely.", "Stir the sesame, jaggery, salt and chilli into the curd. Fold in the citrus and any juice. If using sweet lime, mix in the lemon juice. Taste, add optional black salt and serve right away."],
      hi: ["फल छीलकर झिल्लियाँ और बीज निकालें। फाँकों को कटोरे के ऊपर छोटे टुकड़ों में तोड़ें।", "तिल सूखे पैन में मध्यम से धीमी आँच पर 2 मिनट भूनें और दरदरा कूटें।", "दही में तिल, गुड़, नमक और लाल मिर्च मिलाएँ। फल और निकला रस डालें। मौसंबी ली है तो नींबू रस भी डालें। चखकर चाहें तो काला नमक डालें और तुरंत परोसें।"]
    }
  },
  {
    name: "Garhwali Thechwani", hindi: "गढ़वाली थेचवाणी",
    region: "Pahadi", course: "Main", prep: 7, cook: 13, serves: 2,
    pantry: ["mooli", "potato", "tomato", "mustardoil", "cuminseeds", "garlic?", "ginger?"],
    source: ["eUttaranchal", "https://www.euttaranchal.com/culture/thechwani.php"],
    amounts: {
      en: ["1 small radish, 1 small potato and 1 small tomato", "2 tsp mustard oil, ½ tsp cumin seeds and ½ cup water (or your cooker's minimum)", "¼ tsp each turmeric and chilli powder, ½ tsp ground coriander and ¼ tsp salt", "1 garlic clove and 1 cm ginger, crushed (optional)"],
      hi: ["1 छोटी मूली, 1 छोटा आलू और 1 छोटा टमाटर", "2 छोटे चम्मच सरसों का तेल, ½ छोटा चम्मच जीरा और ½ कप पानी (या कुकर के लिए ज़रूरी न्यूनतम पानी)", "¼ छोटा चम्मच हल्दी, ¼ छोटा चम्मच लाल मिर्च पाउडर, ½ छोटा चम्मच धनिया पाउडर और ¼ छोटा चम्मच नमक", "1 लहसुन की कली और 1 सेमी अदरक, कुचले हुए (वैकल्पिक)"]
    },
    steps: {
      en: ["Peel the radish and potato. Cut small, then lightly crush the pieces with a pestle so the edges are ragged. Chop the tomato.", "Heat the oil in a pressure cooker. Sizzle the cumin and optional ginger and garlic, then toss in the radish and potato for 2 min. Stir in the tomato, ground spices, salt and water.", "Cook at high pressure for 3 min. Release the pressure according to the cooker instructions for a quick release. When it is safe to open, check that a fork pierces the vegetables easily.", "Mash a few pieces into the broth and stir. Simmer briefly if it is very thin, then serve hot with rice or roti."],
      hi: ["मूली और आलू छीलकर छोटे टुकड़ों में काटें और मूसल से हल्का कूटें, ताकि किनारे टूट जाएँ। टमाटर काटें।", "प्रेशर कुकर में तेल गरम करके जीरा और चाहें तो अदरक-लहसुन भूनें। मूली और आलू 2 मिनट चलाएँ। टमाटर, पिसे मसाले, नमक और पानी मिलाएँ।", "तेज़ दबाव पर 3 मिनट पकाएँ। कुकर के निर्देशों के अनुसार दबाव जल्दी निकालें। सुरक्षित रूप से खोलने के बाद देखें कि काँटा सब्ज़ियों में आसानी से जाए।", "कुछ टुकड़े रसे में मसलकर मिलाएँ। रसा बहुत पतला हो तो थोड़ा उबालें और चावल या रोटी के साथ गरम परोसें।"]
    }
  },
  {
    name: "Uttarakhand Mandua Cheela", hindi: "उत्तराखंडी मंडुआ चीला",
    region: "Pahadi", course: "Snack", prep: 7, cook: 10, serves: 2, appliances: ["T"],
    pantry: ["ragi", "besan", "onion", "ajwain", "coriander?", "gchilli?"],
    source: ["Uttarakhand millet recipe collection", "https://gbpihedenvis.nic.in/Special%20publication/final%20millets%20book_new.pdf"],
    amounts: {
      en: ["½ cup mandua (ragi flour), ¼ cup besan and about ¾ cup water", "¼ small onion, finely chopped, and ¼ tsp ajwain", "¼ tsp salt and 2 tsp oil for the tawa", "1 tbsp chopped coriander and ½ chopped green chilli (both optional)"],
      hi: ["½ कप मंडुआ आटा, ¼ कप बेसन और लगभग ¾ कप पानी", "¼ छोटा प्याज़, बारीक कटा, और ¼ छोटा चम्मच अजवाइन", "¼ छोटा चम्मच नमक और तवे के लिए 2 छोटे चम्मच तेल", "1 बड़ा चम्मच कटा हरा धनिया और ½ कटी हरी मिर्च (दोनों वैकल्पिक)"]
    },
    steps: {
      en: ["Whisk the flours, ajwain and salt together. Add water gradually to make a smooth batter that pours easily. Stir in the onion and optional herbs and chilli.", "Heat a tawa over medium heat and wipe it with a little oil. Pour half the batter in the centre and spread it into a thin round.", "Drizzle a little oil around the edge. Cook for 2–3 min until the top loses its wet sheen and the edges lift. Flip and cook for another 1–2 min. Repeat for the second cheela and serve hot."],
      hi: ["दोनों आटे, अजवाइन और नमक मिलाएँ। थोड़ा-थोड़ा पानी डालकर चिकना, आसानी से बहने वाला घोल बनाएँ। प्याज़ और चाहें तो धनिया व मिर्च मिलाएँ।", "तवा मध्यम आँच पर गरम करके थोड़ा तेल लगाएँ। आधा घोल बीच में डालकर पतला गोल फैलाएँ।", "किनारों पर थोड़ा तेल डालें। 2–3 मिनट पकाएँ, जब तक ऊपर का गीलापन जाए और किनारे उठें। पलटकर 1–2 मिनट और पकाएँ। दूसरा चीला भी इसी तरह बनाएँ और गरम परोसें।"]
    }
  },
  {
    name: "Kashmiri Doon Chetin", hindi: "कश्मीरी दून चेतिन",
    region: "Kashmiri", course: "Side", prep: 10, cook: 0, serves: 4, appliances: ["N"],
    pantry: ["walnuts", "curd", "mint", "gchilli", "lemon?"],
    source: ["Valley Origin", "https://valleyorigin.in/journal/doon-chetin-recipe"],
    amounts: {
      en: ["½ cup walnut halves and ½ cup plain curd", "2 tbsp mint leaves, ½ green chilli and ¼ tsp salt", "½ tsp lemon juice (optional)"],
      hi: ["½ कप अखरोट की गिरियाँ और ½ कप सादा दही", "2 बड़े चम्मच पुदीने के पत्ते, ½ हरी मिर्च और ¼ छोटा चम्मच नमक", "½ छोटा चम्मच नींबू रस (वैकल्पिक)"]
    },
    steps: {
      en: ["Crush the walnuts with the mint, chilli and salt in a mortar or briefly pulse in a small grinder. Stop while the walnuts still have a little texture.", "Whisk the curd in a bowl and fold in the walnut mixture. If very thick, stir in a teaspoon of water.", "Taste for salt and add the lemon if you want a sharper finish. Spoon into a small bowl and serve with flatbread or as part of a meal."],
      hi: ["अखरोट, पुदीना, मिर्च और नमक ओखली में कूटें या छोटे मिक्सर में हल्का पीसें। अखरोट थोड़े दरदरे रखें।", "कटोरे में दही फेंटें और अखरोट का मिश्रण मिलाएँ। बहुत गाढ़ा हो तो एक छोटा चम्मच पानी डालें।", "नमक चखें और ज़्यादा खट्टापन चाहिए तो नींबू रस डालें। कटोरी में निकालकर रोटी या खाने के साथ परोसें।"]
    }
  },
  {
    name: "Kashmiri Nadru Monje", hindi: "कश्मीरी नद्रू मोंजे",
    region: "Kashmiri", course: "Snack", prep: 8, cook: 12, serves: 2,
    pantry: ["lotusstem", "riceflour", "cuminseeds"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-kashmiri-nadru-monje-955153"],
    amounts: {
      en: ["150 g fresh lotus stem and ⅓ cup rice flour", "¼ tsp cumin seeds, ½ tsp Kashmiri chilli powder and ¼ tsp salt", "2–3 tbsp water and about ½ cup neutral oil for shallow-frying"],
      hi: ["150 ग्राम ताज़ी कमल ककड़ी और ⅓ कप चावल का आटा", "¼ छोटा चम्मच जीरा, ½ छोटा चम्मच कश्मीरी लाल मिर्च पाउडर और ¼ छोटा चम्मच नमक", "2–3 बड़े चम्मच पानी और तलने के लिए लगभग ½ कप सादा तेल"]
    },
    steps: {
      en: ["Peel the lotus stem, rinse thoroughly through its holes and pat it dry. Cut it lengthwise into thin matchsticks about 4 cm long.", "Mix the rice flour, cumin, chilli and salt. Add just enough water to make a thick coating, then toss in the lotus stem.", "Heat a shallow layer of oil over medium-high heat. A dab of batter should sizzle on contact. Fry small loose clusters in two batches for about 4 min per batch, turning until crisp and golden on both sides.", "Lift out with a slotted spoon, drain on a rack or paper towel and serve hot."],
      hi: ["कमल ककड़ी छीलें, छेदों के अंदर तक अच्छी तरह धोएँ और पोंछ लें। लंबाई में लगभग 4 सेमी की पतली तीलियाँ काटें।", "चावल का आटा, जीरा, मिर्च और नमक मिलाएँ। गाढ़ी परत चढ़ाने लायक पानी डालें और उसमें कमल ककड़ी मिलाएँ।", "कड़ाही में थोड़ी गहराई तक तेल मध्यम से तेज़ आँच पर गरम करें। घोल की बूँद डालने पर बुलबुले आने चाहिए। थोड़ी-थोड़ी ककड़ी दो बार में तलें। हर बार लगभग 4 मिनट पलटते हुए दोनों ओर कुरकुरी और सुनहरी करें।", "झारे से निकालकर जाली या कागज़ पर तेल निथारें और गरम परोसें।"]
    }
  },
  {
    name: "Old Delhi Kulle Chaat", hindi: "पुरानी दिल्ली की कुल्ले चाट",
    region: "North Indian", course: "Snack", prep: 15, cook: 0, serves: 2, appliances: ["N"],
    pantry: ["cucumber", "tomato", "cookedchickpeas", "pomegranate", "lemon", "chaatmasala", "blacksalt?"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-kulle-ki-chaat-954424"],
    amounts: {
      en: ["1 large cucumber and 2 firm tomatoes", "½ cup fully cooked, drained chickpeas and ¼ cup pomegranate seeds", "1 tbsp lemon juice and ½ tsp chaat masala", "1 pinch black salt (optional)"],
      hi: ["1 बड़ा खीरा और 2 सख़्त टमाटर", "½ कप पूरी तरह उबले, निथारे काबुली चने और ¼ कप अनार के दाने", "1 बड़ा चम्मच नींबू रस और ½ छोटा चम्मच चाट मसाला", "चुटकी भर काला नमक (वैकल्पिक)"]
    },
    steps: {
      en: ["Use canned or already-cooked chickpeas. Cut the cucumber into thick rounds and halve the tomatoes. Scoop out the centres with a teaspoon, leaving a base and walls on each piece.", "Toss the chickpeas and pomegranate with the lemon, chaat masala and optional black salt. Taste and stir in a little more lemon if the filling needs it.", "Blot the vegetable cups dry and set them upright. Spoon in the filling just before eating so the cups stay crisp."],
      hi: ["डिब्बाबंद या पहले से उबले चने लें। खीरे के मोटे गोल टुकड़े करें और टमाटर आधे काटें। छोटे चम्मच से बीच का भाग निकालें और हर टुकड़े की तली व किनारे बचाएँ।", "चने, अनार, नींबू रस, चाट मसाला और चाहें तो काला नमक मिलाएँ। चखकर ज़रूरत लगे तो थोड़ा और नींबू रस डालें।", "सब्ज़ियों की कटोरियाँ पोंछकर सीधी रखें। खाने से ठीक पहले भरावन डालें, ताकि वे कुरकुरी रहें।"]
    }
  },
  {
    name: "Delhi Moth Dal Chaat", hindi: "दिल्ली की मोठ दाल चाट",
    region: "North Indian", course: "Snack", prep: 10, cook: 4, serves: 2, appliances: ["I"],
    pantry: ["cookedmothbeans", "onion", "tomato", "lemon", "chaatmasala", "coriander", "gchilli?"],
    source: ["Nisha Madhulika", "https://www.nishamadhulika.com/en/2006-sprouted_moth_chaat_recipe.html"],
    amounts: {
      en: ["1½ cups fully cooked, drained moth beans (matki)", "½ small red onion and 1 small firm tomato, finely diced", "1 tbsp lemon juice, ½ tsp chaat masala, ¼ tsp roasted cumin powder and ¼ tsp salt", "2 tbsp chopped coriander and ½ chopped green chilli (chilli optional)"],
      hi: ["1½ कप पूरी तरह उबली, निथारी साबुत मोठ दाल (मटकी)", "½ छोटा लाल प्याज़ और 1 छोटा सख़्त टमाटर, बारीक कटे", "1 बड़ा चम्मच नींबू रस, ½ छोटा चम्मच चाट मसाला, ¼ छोटा चम्मच भुना जीरा पाउडर और ¼ छोटा चम्मच नमक", "2 बड़े चम्मच कटा हरा धनिया और ½ कटी हरी मिर्च (मिर्च वैकल्पिक)"]
    },
    steps: {
      en: ["Start with moth beans that are already cooked until tender. Warm them in a pan over medium heat with a tablespoon of water for 3–4 min, until steaming and the extra water has evaporated.", "Put the beans in a bowl. Mix in the lemon, chaat masala, cumin and salt while the beans are warm.", "Toss in the diced onion and tomato, coriander and optional chilli. Divide into bowls and eat warm."],
      hi: ["पहले से नरम उबली मोठ दाल लें। एक बड़ा चम्मच पानी डालकर मध्यम आँच पर 3–4 मिनट गरम करें, जब तक भाप उठे और अतिरिक्त पानी सूख जाए।", "मोठ कटोरे में डालें। गरम रहते हुए नींबू रस, चाट मसाला, जीरा पाउडर और नमक मिलाएँ।", "कटा प्याज़, टमाटर, हरा धनिया और चाहें तो मिर्च मिलाएँ। कटोरियों में बाँटकर गरम परोसें।"]
    }
  },
  {
    name: "Bihari Sattu Chutney", hindi: "बिहारी सत्तू की चटनी",
    region: "Bihari", course: "Side", prep: 10, cook: 0, serves: 4, appliances: ["N"],
    pantry: ["sattu", "onion", "coriander", "lemon", "mustardoil", "gchilli?"],
    source: ["NDTV Food", "https://food.ndtv.com/recipe-bihari-style-sattu-chutney-958039"],
    amounts: {
      en: ["½ cup chana sattu (roasted chickpea flour) and ¼–⅓ cup drinking water", "¼ small red onion, finely diced, and 2 tbsp chopped coriander", "1 tbsp lemon juice, 1 tsp food-grade mustard oil and ¼ tsp salt", "½ chopped green chilli (optional)"],
      hi: ["½ कप चने का सत्तू और ¼–⅓ कप पीने का पानी", "¼ छोटा लाल प्याज़, बारीक कटा, और 2 बड़े चम्मच कटा हरा धनिया", "1 बड़ा चम्मच नींबू रस, 1 छोटा चम्मच खाने वाला सरसों का तेल और ¼ छोटा चम्मच नमक", "½ कटी हरी मिर्च (वैकल्पिक)"]
    },
    steps: {
      en: ["Put the sattu in a bowl. Stir in ¼ cup water a spoonful at a time, pressing out lumps, to make a thick paste.", "Stir in the onion, coriander, lemon, mustard oil, salt and optional chilli. Add the remaining water a little at a time if you prefer a softer chutney.", "Taste and serve freshly mixed with dal and rice or alongside paratha."],
      hi: ["कटोरे में सत्तू लें। ¼ कप पानी चम्मच-चम्मच डालें और गाँठें दबाकर गाढ़ा लेप बनाएँ।", "प्याज़, हरा धनिया, नींबू रस, सरसों का तेल, नमक और चाहें तो मिर्च मिलाएँ। चटनी थोड़ी पतली चाहिए तो बचा पानी थोड़ा-थोड़ा डालें।", "चखें और ताज़ी बनी चटनी दाल-चावल या पराठे के साथ परोसें।"]
    }
  },
  {
    name: "Bihari Murhi Lai", hindi: "बिहारी मुरही लाई",
    region: "Bihari", course: "Sweet", prep: 8, cook: 10, serves: 4, appliances: ["I"],
    pantry: ["murmura", "jaggery", "ghee", "cardamom?"],
    source: ["Indian Cooking Manual", "https://www.indiancookingmanual.com/murmurekumure-ka-laddu-lai-puffed-rice-ball/"],
    amounts: {
      en: ["2 cups puffed rice (murmura), 90 g chopped jaggery and 2 tbsp water", "1 tsp ghee, plus a little to grease your hands", "1 pinch ground cardamom (optional)"],
      hi: ["2 कप मुरमुरा, 90 ग्राम कटा गुड़ और 2 बड़े चम्मच पानी", "1 छोटा चम्मच घी और हाथों पर लगाने के लिए थोड़ा और", "चुटकी भर इलायची पाउडर (वैकल्पिक)"]
    },
    steps: {
      en: ["Dry-toast the puffed rice in a wide pan over medium-low heat for 2–3 min until crisp. Tip it into a bowl.", "Melt the jaggery with the water and ghee in the pan, then bubble it gently. Drop a little syrup into cold water. It is ready when it gathers into a firm ball. Stir in the cardamom if using.", "Turn off the heat, quickly fold in the puffed rice and spread the mixture on a greased plate. When cool enough to handle but still pliable, grease your hands and press small handfuls into 6–8 tight balls. Cool before serving."],
      hi: ["चौड़े पैन में मुरमुरा मध्यम से धीमी आँच पर 2–3 मिनट सूखा भूनकर कुरकुरा करें और कटोरे में निकालें।", "पैन में गुड़, पानी और घी पिघलाकर हल्का उबालें। थोड़ी चाशनी ठंडे पानी में डालें। जब वह मज़बूत गोली बन जाए तो तैयार है। चाहें तो इलायची मिलाएँ।", "आँच बंद करें और तुरंत मुरमुरा मिलाकर घी लगी प्लेट पर फैलाएँ। जब हाथ लगाने लायक ठंडा हो लेकिन मिश्रण नरम रहे, हाथों पर घी लगाकर 6–8 कसे हुए लड्डू बाँधें। ठंडा करके परोसें।"]
    }
  },
  {
    name: "Punjabi Mooli Bhurji", hindi: "पंजाबी मूली भुर्जी",
    region: "Punjabi", course: "Side", prep: 8, cook: 10, serves: 2, appliances: ["I"],
    pantry: ["mooli", "radishgreens", "mustardoil", "cuminseeds", "gchilli", "lemon?"],
    source: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/mooli-ki-bhurji-punjabi-mooli-bhurji/"],
    amounts: {
      en: ["200 g white radish and 1 cup chopped tender radish leaves", "1 tbsp mustard oil, ½ tsp cumin seeds and 1 green chilli, finely chopped", "¼ tsp turmeric and ¼ tsp salt", "1 tsp lemon juice (optional)"],
      hi: ["200 ग्राम सफ़ेद मूली और 1 कप कटी कोमल मूली की पत्तियाँ", "1 बड़ा चम्मच सरसों का तेल, ½ छोटा चम्मच जीरा और 1 बारीक कटी हरी मिर्च", "¼ छोटा चम्मच हल्दी और ¼ छोटा चम्मच नमक", "1 छोटा चम्मच नींबू रस (वैकल्पिक)"]
    },
    steps: {
      en: ["Wash the leaves well and discard the tough stems. Chop the tender leaves finely. Peel and coarsely grate the radish.", "Heat the oil in a wide pan over medium-high heat. Sizzle the cumin and chilli, then add the radish, leaves, turmeric and salt.", "Toss for about 7 min until the radish is tender and the moisture has evaporated. Turn off the heat, add optional lemon juice and serve with roti."],
      hi: ["पत्तियाँ अच्छी तरह धोएँ और सख़्त डंठल निकालें। कोमल पत्तियाँ बारीक काटें। मूली छीलकर मोटी कद्दूकस करें।", "चौड़े पैन में मध्यम से तेज़ आँच पर तेल गरम करें। जीरा और मिर्च चटकाकर मूली, पत्तियाँ, हल्दी और नमक डालें।", "लगभग 7 मिनट चलाते हुए पकाएँ, जब तक मूली नरम हो और नमी सूख जाए। आँच बंद करें, चाहें तो नींबू रस डालें और रोटी के साथ परोसें।"]
    }
  },
  {
    name: "Himachali Chamba Chukh", hindi: "हिमाचली चंबा चुख",
    region: "Pahadi", course: "Side", prep: 8, cook: 10, serves: 6, appliances: ["I"],
    pantry: ["freshredchilli", "mustardoil", "mustardseeds", "fenugreekseeds", "garlic?", "ginger?", "lemon"],
    source: ["Cuisine India", "https://www.cuisineindiasociety.in/recipes/chukh/"],
    amounts: {
      en: ["60 g fresh red chillies and 1½ tbsp food-grade mustard oil", "¼ tsp mustard seeds, ⅛ tsp fenugreek seeds and ¼ tsp salt", "1 tbsp lemon juice", "2 garlic cloves and 1 cm ginger (both optional)"],
      hi: ["60 ग्राम ताज़ी लाल मिर्च और 1½ बड़े चम्मच खाने वाला सरसों का तेल", "¼ छोटा चम्मच सरसों के दाने, ⅛ छोटा चम्मच मेथी दाना और ¼ छोटा चम्मच नमक", "1 बड़ा चम्मच नींबू रस", "लहसुन की 2 कलियाँ और 1 सेमी अदरक (दोनों वैकल्पिक)"]
    },
    steps: {
      en: ["Remove the chilli stems. For less heat, scrape out some of the seeds and ribs. Grind the chillies to a coarse paste with the optional ginger and garlic, adding only a splash of water if needed.", "Heat the oil in a small pan. Add the mustard and fenugreek. When the mustard sputters, lower the heat and stir in the chilli paste and salt.", "Cook gently for 6–8 min, stirring frequently, until the paste thickens and turns glossy. Stir in the lemon juice off the heat. Let this small-batch relish cool before serving a little alongside dal and rice."],
      hi: ["मिर्च की डंडियाँ तोड़ें। तीखापन कम करने के लिए कुछ बीज और अंदर की झिल्ली निकालें। चाहें तो अदरक व लहसुन के साथ दरदरा पीसें। ज़रूरत पर थोड़ा-सा पानी डालें।", "छोटे पैन में तेल गरम करके सरसों और मेथी दाना डालें। सरसों चटके तो आँच धीमी कर मिर्च का लेप और नमक मिलाएँ।", "बार-बार चलाते हुए 6–8 मिनट पकाएँ, जब तक लेप गाढ़ा और चमकदार हो। आँच बंद कर नींबू रस मिलाएँ। ठंडा करके दाल-चावल के साथ थोड़ी-सी चुख परोसें।"]
    }
  },
  {
    name: "Punjabi Gur ki Roti", hindi: "पंजाबी गुड़ की रोटी",
    region: "Punjabi", course: "Bread", prep: 10, cook: 8, serves: 2, appliances: ["T"],
    pantry: ["atta", "jaggery", "ghee", "fennel?", "sesame?"],
    source: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/gur-ki-roti-recipe-jaggery-roti/"],
    amounts: {
      en: ["¾ cup whole-wheat atta and ¼ cup finely grated jaggery", "About ¼ cup warm water and 2 tsp ghee", "¼ tsp fennel seeds and 1 tsp sesame seeds (both optional)"],
      hi: ["¾ कप गेहूँ का आटा और ¼ कप बारीक कद्दूकस किया गुड़", "लगभग ¼ कप गुनगुना पानी और 2 छोटे चम्मच घी", "¼ छोटा चम्मच सौंफ और 1 छोटा चम्मच तिल (दोनों वैकल्पिक)"]
    },
    steps: {
      en: ["Dissolve the jaggery in the warm water. Stir the optional fennel and sesame into the atta, add the syrup gradually and knead to a smooth, firm dough.", "Divide into two balls. Pat or roll each between sheets of baking paper into a round about 4 mm thick.", "Peel off the paper and cook each roti on a medium-hot tawa. Flip when the underside has brown spots, then brush with ghee and cook the other side until spotted and set. Serve warm."],
      hi: ["गुनगुने पानी में गुड़ घोलें। आटे में चाहें तो सौंफ और तिल मिलाएँ। घोल थोड़ा-थोड़ा डालकर चिकना, थोड़ा सख़्त आटा गूँथें।", "दो लोइयाँ बनाएँ। बेकिंग पेपर की दो चादरों के बीच हर लोई थपथपाकर या बेलकर लगभग 4 मिमी मोटी गोल रोटी बनाएँ।", "कागज़ हटाकर मध्यम गरम तवे पर रोटी सेंकें। नीचे भूरे धब्बे आएँ तो पलटें, घी लगाएँ और दूसरी ओर भी धब्बे आने और रोटी पकने तक सेंकें। गरम परोसें।"]
    }
  },
  {
    name: "Haryanvi Hara Dhania Cholia", hindi: "हरियाणवी हरा धनिया छोलिया",
    region: "North Indian", course: "Main", prep: 8, cook: 12, serves: 2, appliances: ["I"],
    pantry: ["greenchickpeas", "coriander", "onion", "mustardoil", "cuminseeds", "gchilli?", "lemon?"],
    source: ["Desi Food Khazana", "https://desifoodkhazana.com/recipes/hara-dhania-cholia"],
    amounts: {
      en: ["1½ cups fresh, tender, already-shelled green chickpeas (cholia)", "½ cup coriander leaves and fine stems, ½ small onion and ⅓ cup water", "1 tbsp mustard oil, ½ tsp cumin seeds, ¼ tsp turmeric and ¼ tsp salt", "½ green chilli and 1 tsp lemon juice (both optional)"],
      hi: ["1½ कप ताज़े, कोमल, पहले से छिले हरे चने (छोलिया)", "½ कप हरा धनिया और कोमल डंठल, ½ छोटा प्याज़ और ⅓ कप पानी", "1 बड़ा चम्मच सरसों का तेल, ½ छोटा चम्मच जीरा, ¼ छोटा चम्मच हल्दी और ¼ छोटा चम्मच नमक", "½ हरी मिर्च और 1 छोटा चम्मच नींबू रस (दोनों वैकल्पिक)"]
    },
    steps: {
      en: ["Rinse the shelled cholia. Finely chop the onion. Grind the coriander with optional chilli and 2 tbsp of the measured water to make a coarse green paste.", "Heat the oil and sizzle the cumin. Fry the onion for 3 min until soft. Add the cholia, turmeric, salt and remaining water.", "Cover and simmer for 6–7 min, until a chickpea crushes easily between two spoons. Stir in the coriander paste and cook uncovered for 1–2 min until the chickpeas are coated. Finish with optional lemon."],
      hi: ["छिले छोलिये धोएँ और प्याज़ बारीक काटें। नपे हुए पानी में से 2 बड़े चम्मच लेकर धनिया और चाहें तो मिर्च के साथ दरदरा हरा लेप पीसें।", "तेल गरम करके जीरा चटकाएँ। प्याज़ 3 मिनट नरम होने तक भूनें। छोलिया, हल्दी, नमक और बचा पानी डालें।", "ढककर 6–7 मिनट पकाएँ, जब तक चना दो चम्मचों के बीच आसानी से दब जाए। हरा लेप डालकर बिना ढके 1–2 मिनट पकाएँ, ताकि मसाला चनों पर चढ़ जाए। चाहें तो नींबू रस मिलाएँ।"]
    }
  },
  {
    name: "Matar Besan Cheela", hindi: "मटर बेसन चीला",
    region: "North Indian", course: "Snack", prep: 8, cook: 10, serves: 2, appliances: ["T"],
    pantry: ["peas", "besan", "ajwain", "ginger?", "gchilli?", "coriander?"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/green-pea-pancake-recipe-matar-ka-cheela"],
    amounts: {
      en: ["¾ cup thawed green peas, ½ cup besan and about ½ cup water", "¼ tsp ajwain, ¼ tsp salt and 2 tsp neutral oil", "1 cm ginger, ½ green chilli and 1 tbsp chopped coriander (all optional)"],
      hi: ["¾ कप पिघली हुई हरी मटर, ½ कप बेसन और लगभग ½ कप पानी", "¼ छोटा चम्मच अजवाइन, ¼ छोटा चम्मच नमक और 2 छोटे चम्मच सादा तेल", "1 सेमी अदरक, ½ हरी मिर्च और 1 बड़ा चम्मच कटा हरा धनिया (सभी वैकल्पिक)"]
    },
    steps: {
      en: ["Pulse the thawed peas with a few spoonfuls of the measured water and optional ginger and chilli. Leave a little texture in the peas.", "Whisk the pea mixture with the besan, ajwain, salt and optional coriander. Add the remaining water gradually until the batter drops easily from a ladle.", "Oil a medium-hot tawa. Spread half the batter into a thin pancake. Cook for 2–3 min until the edges lift, then flip and cook for 2 min until the centre is set. Repeat with the rest of the batter."],
      hi: ["पिघली मटर को नपे पानी के कुछ चम्मच और चाहें तो अदरक-मिर्च के साथ हल्का पीसें। मटर थोड़ी दरदरी रखें।", "मटर के मिश्रण में बेसन, अजवाइन, नमक और चाहें तो धनिया फेंटें। बचा पानी थोड़ा-थोड़ा डालें, जब तक घोल कलछी से आसानी से गिरे।", "मध्यम गरम तवे पर तेल लगाएँ। आधे घोल से पतला चीला फैलाएँ। किनारे उठने तक 2–3 मिनट पकाएँ, फिर पलटकर बीच तक जमने के लिए 2 मिनट सेंकें। बचे घोल से दूसरा चीला बनाएँ।"]
    }
  },
  {
    name: "Bihari Parwal Chokha", hindi: "बिहारी परवल चोखा",
    region: "Bihari", course: "Side", prep: 8, cook: 10, serves: 2, appliances: ["I"],
    pantry: ["pointedgourd", "mustardoil", "gchilli", "lemon?", "coriander?"],
    source: ["The Steaming Pot", "https://www.steamingpot.com/parval-chokha/"],
    amounts: {
      en: ["250 g young pointed gourd (parwal)", "1 tsp food-grade mustard oil, 1 small green chilli, chopped, and ¼ tsp salt", "1 tsp lemon juice and 1 tbsp chopped coriander (both optional)"],
      hi: ["250 ग्राम कोमल परवल", "1 छोटा चम्मच खाने वाला सरसों का तेल, 1 छोटी कटी हरी मिर्च और ¼ छोटा चम्मच नमक", "1 छोटा चम्मच नींबू रस और 1 बड़ा चम्मच कटा हरा धनिया (दोनों वैकल्पिक)"]
    },
    steps: {
      en: ["Trim and wash the gourds, then split them lengthwise. Remove any tough seeds and chop the flesh into small pieces.", "Steam over boiling water with the lid on for 7–8 min until a fork goes through easily. Drain well.", "Coarsely mash the hot parwal with the chilli, mustard oil and salt. Add optional lemon and coriander and serve alongside dal and rice."],
      hi: ["परवल के सिरे काटकर धोएँ और लंबाई में आधा काटें। सख़्त बीज हटाएँ और गूदे के छोटे टुकड़े करें।", "उबलते पानी की भाप पर ढककर 7–8 मिनट पकाएँ, जब तक काँटा आसानी से जाए। पानी अच्छी तरह निथारें।", "गरम परवल को मिर्च, सरसों के तेल और नमक के साथ दरदरा मसलें। चाहें तो नींबू रस और हरा धनिया डालें। दाल-चावल के साथ परोसें।"]
    }
  },
  {
    name: "Singhara Atta Cheela", hindi: "सिंघाड़े के आटे का चीला",
    region: "North Indian", course: "Snack", prep: 8, cook: 10, serves: 2, appliances: ["T"],
    pantry: ["singhara", "ghee", "cuminseeds", "gchilli?", "coriander?"],
    source: ["Archana’s Kitchen", "https://www.archanaskitchen.com/recipe/singhara-atta-cheela-recipe-no-onion-no-garlic-navratri-fasting-vrat-recipe"],
    amounts: {
      en: ["¾ cup singhara atta (water chestnut flour) and ½–¾ cup water", "½ tsp cumin seeds, ¼ tsp salt and 2 tsp ghee", "½ chopped green chilli and 2 tbsp chopped coriander (both optional)"],
      hi: ["¾ कप सिंघाड़े का आटा और ½–¾ कप पानी", "½ छोटा चम्मच जीरा, ¼ छोटा चम्मच नमक और 2 छोटे चम्मच घी", "½ कटी हरी मिर्च और 2 बड़े चम्मच कटा हरा धनिया (दोनों वैकल्पिक)"]
    },
    steps: {
      en: ["Whisk the flour, cumin and salt with enough water to make a smooth, pourable batter. Stir in the optional chilli and coriander.", "Heat a nonstick tawa over medium heat and brush it with ghee. Stir the batter again, then spread half into a thin round.", "Cook for 2–3 min until the edges release and the top is set. Flip gently and cook for 1–2 min until golden in spots. Repeat with the rest of the batter and serve hot."],
      hi: ["आटे, जीरे और नमक में इतना पानी फेंटें कि चिकना, बहने वाला घोल बने। चाहें तो मिर्च और हरा धनिया मिलाएँ।", "नॉनस्टिक तवा मध्यम आँच पर गरम करके घी लगाएँ। घोल फिर चलाएँ और उसका आधा हिस्सा पतला गोल फैलाएँ।", "2–3 मिनट पकाएँ, जब तक किनारे छूटें और ऊपर का घोल जम जाए। धीरे पलटें और सुनहरे धब्बे आने तक 1–2 मिनट सेंकें। बचे घोल से दोहराएँ और गरम परोसें।"]
    }
  },
  {
    name: "Varanasi Malai Toast", hindi: "बनारसी मलाई टोस्ट",
    region: "Uttar Pradesh", course: "Snack", prep: 4, cook: 5, serves: 2, appliances: ["T"],
    pantry: ["bread", "malai", "sugar"],
    source: ["NDTV Food", "https://food.ndtv.com/food-drinks/chai-malai-toast-the-banarsi-way-of-having-a-mazedar-nashta-3507263"],
    amounts: {
      en: ["2 thick slices of white bread", "3 tbsp chilled, thick malai skimmed from milk, or clotted cream", "2 tsp granulated sugar"],
      hi: ["सफ़ेद ब्रेड के 2 मोटे स्लाइस", "3 बड़े चम्मच दूध से उतारी ठंडी, गाढ़ी मलाई", "2 छोटे चम्मच दानेदार चीनी"]
    },
    steps: {
      en: ["Heat a dry tawa on medium. Toast the bread on both sides until golden and crisp, pressing lightly with a spatula where needed.", "Transfer to a plate and spread the malai over one side of each warm slice. Sprinkle the sugar evenly over the top.", "Serve open-faced right away, while the toast still crunches. It goes well with hot chai."],
      hi: ["सूखा तवा मध्यम आँच पर गरम करें। ब्रेड दोनों ओर सुनहरी और कुरकुरी सेंकें। ज़रूरत हो तो पलटे से हल्का दबाएँ।", "प्लेट में निकालकर हर गरम स्लाइस पर एक ओर मलाई लगाएँ और ऊपर चीनी बराबर छिड़कें।", "मलाई वाली तरफ़ ऊपर रखकर तुरंत परोसें, ताकि टोस्ट कुरकुरा रहे। गरम चाय के साथ अच्छा लगता है।"]
    }
  },
  {
    name: "Bihari Khatai Mirchai Chokha", hindi: "बिहारी खटाई मिरचाई का चोखा",
    region: "Bihari", course: "Side", prep: 8, cook: 5, serves: 4, appliances: ["I"],
    pantry: ["gchilli", "garlic", "amchur", "coriander", "mustardoil"],
    source: ["Sailaja Kitchen", "https://www.sailajakitchen.org/2025/09/bihari-style-khatai-chokha-recipe.html"],
    amounts: {
      en: ["4 green chillies and 3 garlic cloves", "2 tbsp coriander leaves and soft stems", "½ tsp amchur (dried mango powder), 1 tsp food-grade mustard oil and ¼ tsp salt"],
      hi: ["4 हरी मिर्च और लहसुन की 3 कलियाँ", "2 बड़े चम्मच हरा धनिया और कोमल डंठल", "½ छोटा चम्मच अमचूर, 1 छोटा चम्मच खाने वाला सरसों का तेल और ¼ छोटा चम्मच नमक"]
    },
    steps: {
      en: ["Remove the chilli stems and peel the garlic. Dry-roast both on a medium-hot tawa, turning for 3–5 min until they soften and blister in spots.", "Pound the roasted chillies and garlic with the salt in a mortar. Add the coriander and pound again just until the mixture is coarse.", "Mix in the amchur and mustard oil. Taste and serve a small spoonful with dal and rice or alongside roti."],
      hi: ["मिर्च की डंडियाँ निकालें और लहसुन छीलें। मध्यम गरम सूखे तवे पर दोनों को 3–5 मिनट पलटते हुए भूनें, जब तक नरम हों और हल्के धब्बे दिखें।", "भुनी मिर्च, लहसुन और नमक ओखली में कूटें। धनिया डालकर दोबारा हल्का कूटें, ताकि मिश्रण दरदरा रहे।", "अमचूर और सरसों का तेल मिलाएँ। चखें और दाल-चावल या रोटी के साथ थोड़ा-सा परोसें।"]
    }
  }
];
