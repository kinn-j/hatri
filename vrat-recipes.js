// Original short cooking methods adapted for the app's vrat pantry.
const VRAT_SOURCES = {
  dassana: ["Dassana’s Veg Recipes", "https://www.vegrecipesofindia.com/navratri-recipes-navratri-fasting-recipes/"],
  spice: ["Spice Up The Curry", "https://www.spiceupthecurry.com/category/fasting-recipes/main-course-for-fasting/"],
  hebbar: ["Hebbar’s Kitchen", "https://hebbarskitchen.com/recipes/vrat-recipes-navratri-vrat-festival/page/2/"],
  whisk: ["Whisk Affair", "https://www.whiskaffair.com/category/recipes/festival-recipes/navratri-recipe/"],
  maayeka: ["Maayeka", "https://maayeka.com/2018/10/navaratri-fasting-recipes.html"],
  hetal: ["Hetal Kamdar", "https://hetalkamdar.com/vrat-recipes/"],
  khana: ["Indian Khana", "https://www.indiankhana.net/2012/10/navratri-recipes-vrat-upwas-recipes.html"]
};

// Name, Hindi name, course, region, prep minutes, cook minutes, advance soak,
// required/optional pantry IDs, blog key or [blog key, recipe URL], English and Hindi methods.
const VRAT_RECIPES = [
  ["Rajgira Puri", "राजगिरा पूरी", "Bread", "Gujarati", 15, 15, 0, ["rajgira","potato","fryingoil"],
    ["dassana", "https://www.vegrecipesofindia.com/rajgira-ki-poori-amaranth-poori/"], ["Knead 1 cup amaranth flour with 1 small boiled, mashed potato, sendha namak and just enough water to bind.", "Pat small discs between lightly greased sheets. Deep-fry in permitted oil until they puff and both sides are golden."],
    ["1 कप राजगिरा आटा, 1 छोटा उबला-मसला आलू, सेंधा नमक और थोड़ा पानी मिलाकर गूँधें।","चिकनी शीटों के बीच छोटी पूरियाँ थपथपाकर बनाएँ। व्रत के तेल में दोनों तरफ़ सुनहरा तलें।"]],
  ["Rajgira Paratha", "राजगिरा पराठा", "Bread", "Gujarati", 15, 15, 0, ["rajgira","potato","ghee","gchilli?"],
    ["spice", "https://www.spiceupthecurry.com/rajgira-paratha-recipe-for-fasting/"], ["Mix 1 cup amaranth flour with 1 boiled, mashed potato, sendha namak and optional chilli. Add water a spoon at a time to form a soft dough.", "Pat into rounds between parchment sheets and roast on a hot tawa with ghee until browned on both sides."],
    ["1 कप राजगिरा आटा, 1 उबला-मसला आलू, सेंधा नमक और चाहें तो हरी मिर्च मिलाएँ। थोड़ा पानी डालकर नरम आटा गूँधें।","कागज़ की दो परतों के बीच गोल थपथपाएँ और तवे पर घी से दोनों ओर सेंकें।"]],
  ["Kuttu Paratha", "कुट्टू पराठा", "Bread", "North Indian", 15, 15, 0, ["kuttu","potato","ghee","coriander?"],
    ["spice", "https://www.spiceupthecurry.com/kuttu-ka-paratha-recipe/"], ["Knead 1 cup buckwheat flour with 1 boiled, mashed potato and sendha namak. Add a little water only if it crumbles.", "Pat or roll on parchment, then cook on a hot tawa with ghee until the surface is cooked and spotted."],
    ["1 कप कुट्टू आटा, 1 उबला-मसला आलू और सेंधा नमक गूँधें। बिखरे तो थोड़ा पानी डालें।","कागज़ पर थपथपाकर बेलें और तवे पर घी से दोनों ओर चित्तियाँ आने तक सेंकें।"]],
  ["Singhara Paratha", "सिंघाड़े का पराठा", "Bread", "North Indian", 15, 15, 0, ["singhara","potato","ghee","gchilli?"],
    "dassana", ["Mix 1 cup water chestnut flour with 1 mashed boiled potato, sendha namak and optional chilli. Knead and pat small rounds on parchment.", "Transfer each to a hot tawa. Brush with ghee and cook both sides until firm and golden in spots."],
    ["1 कप सिंघाड़ा आटा, 1 उबला-मसला आलू, सेंधा नमक और चाहें तो हरी मिर्च मिलाकर गूँधें। कागज़ पर छोटे पराठे बनाएँ।","गरम तवे पर घी लगाकर दोनों तरफ़ सुनहरी चित्तियाँ आने तक सेंकें।"]],
  ["Samak Idli", "सामक की इडली", "Snack", "North Indian", 10, 15, [60,"samak rice"], ["samak","sabudana","curd","ghee?"],
    ["dassana", "https://www.vegrecipesofindia.com/sama-ke-chawal-ki-idli-vrat-ki-idli/"], ["Rinse 1 cup samak and ¼ cup sabudana and soak for 1 hour. Grind with plain curd to a thick batter and season with sendha namak.", "Spoon into greased idli moulds and steam for 12–15 min, until a skewer comes out clean."],
    ["1 कप सामक और ¼ कप साबूदाना धोकर 1 घंटा भिगोएँ। दही के साथ पीसकर गाढ़ा घोल बनाएँ और सेंधा नमक डालें।","चिकने इडली साँचे में भरें। 12–15 मिनट भाप में पकाएँ, जब तक सींक साफ़ निकले।"]],
  ["Samak Dhokla", "सामक का ढोकला", "Snack", "Gujarati", 10, 20, [60,"samak rice"], ["samak","curd","ghee","gchilli?","coriander?"],
    "dassana", ["Coarsely grind 1 cup soaked, drained samak with ½ cup curd and sendha namak. Stir in chopped green chilli if used.", "Pour into a greased shallow tray and steam 15–20 min until set. Cool slightly, cut and finish with coriander if used."],
    ["भीगा-निथरा 1 कप सामक, ½ कप दही और सेंधा नमक दरदरा पीसें। चाहें तो हरी मिर्च डालें।","चिकनी थाली में 15–20 मिनट भाप में पकाएँ। हल्का ठंडा करके काटें और चाहें तो धनिया डालें।"]],
  ["Farali Dosa", "फराली डोसा", "Snack", "Gujarati", 10, 20, [240,"samak rice and sabudana"], ["samak","sabudana","curd","ghee"],
    ["hebbar", "https://hebbarskitchen.com/upvas-dosa-recipe-farali-dosa-upvasache/"], ["Soak 1 cup samak and ¼ cup sabudana for 4 hours. Drain and grind with ¼ cup curd and enough water for a pourable batter. Season with sendha namak.", "Spread a thin ladleful on a hot tawa, drizzle with ghee and cook until crisp at the edges. Fold and lift."],
    ["1 कप सामक और ¼ कप साबूदाना 4 घंटे भिगोएँ। निथारकर ¼ कप दही, पानी और सेंधा नमक के साथ पीसें।","गरम तवे पर पतला फैलाएँ, घी डालें और किनारे कुरकुरे होने पर मोड़कर उतारें।"]],
  ["Samak Uttapam", "सामक उत्तपम", "Snack", "South Indian", 10, 15, [60,"samak rice"], ["samak","curd","ghee","coriander?","gchilli?"],
    "dassana", ["Grind 1 cup soaked, drained samak with ½ cup curd and sendha namak to a thick batter.", "Make small thick rounds on a greased tawa. Add optional coriander or chilli. Cover until the underside is golden, then flip and cook through."],
    ["1 कप भीगा-निथरा सामक, ½ कप दही और सेंधा नमक पीसकर गाढ़ा घोल बनाएँ।","घी लगे तवे पर छोटे मोटे उत्तपम डालें। चाहें तो धनिया या मिर्च डालें। ढककर सेंकें और पलटकर पकाएँ।"]],
  ["Rajgira Thalipeeth", "राजगिरा थालीपीठ", "Bread", "Maharashtrian", 15, 15, 0, ["rajgira","potato","ghee","coriander?"],
    "dassana", ["Mix 1 cup amaranth flour with 1 boiled mashed potato, sendha namak and optional coriander. Add water to make a soft dough.", "Pat a thick round on greased parchment, make a small hole in the centre and turn it onto a tawa. Add ghee and cook on both sides."],
    ["1 कप राजगिरा आटा, 1 उबला-मसला आलू, सेंधा नमक और चाहें तो धनिया मिलाएँ। पानी से नरम आटा बनाएँ।","चिकने कागज़ पर मोटा गोल थपथपाएँ, बीच में छेद बनाएँ और तवे पर पलटें। घी डालकर दोनों ओर सेंकें।"]],
  ["Kuttu Khichdi", "कुट्टू की खिचड़ी", "Complete", "North Indian", 10, 20, 0, ["buckwheatgroats","potato","ghee","peanut?","lemon?"],
    ["dassana", "https://www.vegrecipesofindia.com/buckwheat-khichdi-recipe-kuttu-ki-khichdi/"], ["Warm ghee and sauté small potato cubes. Add 1 cup rinsed buckwheat groats, 2 cups water and sendha namak.", "Cook covered on low until the groats are tender and the water is absorbed. Rest, fluff and add optional crushed peanuts or lemon."],
    ["घी में आलू के छोटे टुकड़े भूनें। 1 कप धुले साबुत कुट्टू, 2 कप पानी और सेंधा नमक डालें।","ढककर धीमी आँच पर नरम होने तक पकाएँ। थोड़ा रखकर हल्के हाथ से मिलाएँ और चाहें तो मूंगफली या नींबू डालें।"]],
  ["Samak Pulao", "सामक पुलाव", "Complete", "North Indian", 10, 20, 0, ["samak","potato","ghee","peanut?","cuminseeds?"],
    ["hebbar", "https://hebbarskitchen.com/sama-ke-chawal-pulao-recipe-sama-rice/"], ["Rinse 1 cup samak well. Sauté small potato cubes and optional peanuts and cumin in ghee.", "Add drained samak, 2 cups water and sendha namak. Cook covered on low until the grains are tender, then rest and fluff."],
    ["1 कप सामक अच्छी तरह धोएँ। घी में आलू के छोटे टुकड़े और चाहें तो मूंगफली व जीरा भूनें।","सामक, 2 कप पानी और सेंधा नमक डालें। धीमी आँच पर ढककर पकाएँ, फिर थोड़ा ठहरकर हल्के से चलाएँ।"]],
  ["Dahi Samak", "सामक दही चावल", "Complete", "North Indian", 10, 20, 0, ["samak","curd","coriander?","blackpepper?"],
    "khana", ["Simmer ½ cup rinsed samak with 1¼ cups water until soft, then cool it completely.", "Fold in ¾ cup plain whisked curd and sendha namak. Add optional black pepper or coriander and serve cool."],
    ["½ कप धुले सामक को 1¼ कप पानी में नरम होने तक पकाकर पूरी तरह ठंडा करें।","¾ कप फेंटा दही और सेंधा नमक मिलाएँ। चाहें तो काली मिर्च या धनिया डालें और ठंडा परोसें।"]],
  ["Dahi Arbi", "दही अरबी", "Main", "North Indian", 10, 25, 0, ["arbi","curd","ghee","blackpepper?"],
    "spice", ["Boil 250 g arbi until tender, peel and slice. Sauté briefly in ghee.", "Lower the heat and stir in ¾ cup whisked curd, a splash of water and sendha namak. Stir until just simmering and finish with optional pepper."],
    ["250 ग्राम अरबी नरम उबालकर छीलें और काटें। घी में हल्का भूनें।","आँच कम करके ¾ कप फेंटा दही, थोड़ा पानी और सेंधा नमक डालें। चलाते हुए हल्का उबालें और चाहें तो काली मिर्च डालें।"]],
  ["Farali Arbi Fry", "फराली अरबी फ्राई", "Main", "North Indian", 10, 25, 0, ["arbi","ghee","cuminseeds?","lemon?"],
    ["whisk", "https://www.whiskaffair.com/farali-arbi-fry-vrat-recipe/"], ["Boil arbi until a knife goes through, then cool, peel and slice into thick coins.", "Pan-fry in ghee with sendha namak and optional cumin until the edges crisp. Finish with lemon if desired."],
    ["अरबी नरम उबालें, ठंडी करके छीलें और मोटे गोल काटें।","घी, सेंधा नमक और चाहें तो जीरे में किनारे कुरकुरे होने तक भूनें। चाहें तो नींबू डालें।"]],
  ["Dahi Aloo", "दही वाले आलू", "Main", "North Indian", 10, 20, 0, ["potato","curd","ghee","cuminseeds?","gchilli?"],
    ["spice", "https://www.spiceupthecurry.com/dahi-aloo-recipe-for-vrat-fasting/"], ["Boil 2 medium potatoes. Peel, break into chunks and sauté in ghee with optional cumin or chilli.", "Stir in ¾ cup whisked curd, a little water and sendha namak on low heat. Simmer gently until the gravy coats the potatoes."],
    ["2 मध्यम आलू उबालकर छीलें और तोड़ लें। घी में चाहें तो जीरा या मिर्च डालकर भूनें।","धीमी आँच पर ¾ कप फेंटा दही, थोड़ा पानी और सेंधा नमक मिलाकर ग्रेवी गाढ़ी होने तक पकाएँ।"]],
  ["Vrat Aloo Tamatar", "व्रत वाले आलू टमाटर", "Main", "North Indian", 10, 25, 0, ["potato","tomato","ghee","cuminseeds?","gchilli?"],
    ["dassana", "https://www.vegrecipesofindia.com/aloo-tamatar-sabzi-navratri-recipes/"], ["Boil and break up 2 potatoes. Soften 2 chopped tomatoes in ghee with optional cumin or green chilli.", "Add potatoes, sendha namak and ¾ cup water. Simmer for 8–10 min, lightly crushing a few potatoes to thicken the gravy."],
    ["2 आलू उबालकर तोड़ लें। 2 कटे टमाटर घी में भूनें। चाहें तो जीरा या हरी मिर्च डालें।","आलू, सेंधा नमक और ¾ कप पानी डालें। कुछ आलू मसलकर 8–10 मिनट उबालें।"]],
  ["Farali Sukhi Bhaji", "फराली सूखी भाजी", "Main", "Gujarati", 10, 20, 0, ["potato","peanut","ghee","coconut?","lemon?"],
    ["spice", "https://www.spiceupthecurry.com/farali-sukhi-bhaji-recipe/"], ["Boil, peel and cube the potatoes. Crush roasted peanuts coarsely.", "Toss the potatoes in ghee with sendha namak and the peanuts until golden. Finish with optional grated coconut and lemon."],
    ["आलू उबालकर छीलें और चौकोर काटें। भुनी मूंगफली दरदरी कूटें।","घी, सेंधा नमक और मूंगफली के साथ आलू सुनहरे होने तक भूनें। चाहें तो नारियल और नींबू डालें।"]],
  ["Farali Suran Khichdi", "फराली सूरन खिचड़ी", "Complete", "Gujarati", 10, 20, 0, ["suran","peanut","ghee","lemon"],
    ["spice", "https://www.spiceupthecurry.com/suran-khichdi-recipe/"], ["Peel and grate the suran. Cook it in ghee over medium heat, stirring and covering briefly as needed, until completely tender.", "Fold in crushed roasted peanuts, lemon juice and sendha namak. Cook for 2 min and serve warm."],
    ["सूरन छीलकर कद्दूकस करें। घी में मध्यम आँच पर बीच-बीच में चलाकर और ढककर पूरी तरह नरम पकाएँ।","कुटी भुनी मूंगफली, नींबू और सेंधा नमक मिलाएँ। 2 मिनट पकाकर परोसें।"]],
  ["Farali Suran Sabzi", "फराली सूरन सब्ज़ी", "Main", "Gujarati", 10, 25, 0, ["suran","lemon","ghee","cuminseeds?"],
    ["spice", "https://www.spiceupthecurry.com/suran-ki-sabji-recipe-for-fasting/"], ["Peel and cube suran. Boil with a squeeze of lemon until the cubes are tender, then drain.", "Brown the cooked cubes in ghee with sendha namak and optional cumin. Finish with another squeeze of lemon."],
    ["सूरन छीलकर चौकोर काटें। थोड़ा नींबू डालकर नरम उबालें और पानी निकालें।","घी, सेंधा नमक और चाहें तो जीरे में सुनहरा भूनें। ऊपर से थोड़ा नींबू डालें।"]],
  ["Vrat Sweet Potato Sabzi", "व्रत की शकरकंद सब्ज़ी", "Main", "Gujarati", 10, 20, 0, ["sweetpotato","ghee","blackpepper?","lemon?"],
    ["spice", "https://www.spiceupthecurry.com/sweet-potato-sabzi-recipe/"], ["Peel and cube sweet potatoes. Toss in ghee and sendha namak, then add a splash of water and cover until tender.", "Uncover to evaporate the water. Finish with optional black pepper and lemon."],
    ["शकरकंद छीलकर चौकोर काटें। घी और सेंधा नमक में मिलाकर थोड़ा पानी डालें और ढककर नरम पकाएँ।","ढक्कन हटाकर पानी सुखाएँ। चाहें तो काली मिर्च और नींबू डालें।"]],
  ["Rajgira Kadhi", "राजगिरा कढ़ी", "Main", "Gujarati", 10, 15, 0, ["rajgira","curd","ghee","cuminseeds?","gchilli?"],
    ["spice", "https://www.spiceupthecurry.com/rajgira-kadhi-recipe/"], ["Whisk 1 cup curd with 2 tbsp amaranth flour, 1½ cups water and sendha namak until smooth.", "Heat ghee with optional cumin and chilli. Add the curd mixture, stir to a gentle boil and simmer until slightly thickened."],
    ["1 कप दही, 2 बड़े चम्मच राजगिरा आटा, 1½ कप पानी और सेंधा नमक चिकना फेंटें।","घी गरम करें। चाहें तो जीरा और मिर्च डालें। दही का घोल डालकर चलाते हुए हल्का गाढ़ा पकाएँ।"]],
  ["Vrat Kaddu Sabzi", "व्रत की कद्दू सब्ज़ी", "Main", "North Indian", 10, 20, 0, ["pumpkin","ghee","cuminseeds?","lemon?","jaggery?"],
    ["dassana", "https://www.vegrecipesofindia.com/kaddu-ki-sabzi/"], ["Sauté peeled pumpkin cubes in ghee with optional cumin. Add sendha namak and a splash of water.", "Cover and cook until tender, then uncover to reduce. Add lemon and a touch of jaggery if you want it sweet-sour."],
    ["छिले कटे कद्दू को घी में भूनें। चाहें तो जीरा डालें। सेंधा नमक और थोड़ा पानी डालें।","ढककर नरम पकाएँ, फिर ढक्कन हटाकर पानी सुखाएँ। खट्टा-मीठा स्वाद चाहिए तो नींबू और गुड़ डालें।"]],
  ["Vrat Lauki Sabzi", "व्रत की लौकी सब्ज़ी", "Main", "North Indian", 8, 20, 0, ["lauki","ghee","cuminseeds?","blackpepper?"],
    "dassana", ["Peel and dice the lauki. Sauté in ghee with optional cumin and add sendha namak and a little water.", "Cover and simmer until the cubes are tender. Finish with optional black pepper."],
    ["लौकी छीलकर काटें। घी में चाहें तो जीरा डालकर भूनें। सेंधा नमक और थोड़ा पानी डालें।","ढककर नरम होने तक पकाएँ। चाहें तो काली मिर्च डालें।"]],
  ["Vrat Paneer Bhurji", "व्रत की पनीर भुर्जी", "Main", "North Indian", 5, 8, 0, ["paneer","ghee","cuminseeds?","gchilli?","coriander?"],
    "whisk", ["Crumble 200 g paneer. Heat ghee and briefly fry optional cumin and chopped green chilli.", "Stir in the paneer and sendha namak for 2–3 min, just until warmed through. Finish with optional coriander."],
    ["200 ग्राम पनीर मसलें। घी में चाहें तो जीरा और कटी हरी मिर्च हल्की भूनें।","पनीर और सेंधा नमक डालकर 2–3 मिनट चलाएँ। चाहें तो धनिया डालें।"]],
  ["Dahi Sabudana", "दही साबूदाना", "Snack", "Gujarati", 10, 8, [240,"sabudana"], ["sabudana","curd","peanut","ghee","gchilli?"],
    ["spice", "https://www.spiceupthecurry.com/dahi-sabudana-recipe/"], ["Rinse and soak sabudana for 4 hours or until the pearls crush easily. Drain thoroughly and stir in ghee until translucent.", "Let cool, then fold into whisked curd with roasted crushed peanuts, sendha namak and optional chopped chilli."],
    ["साबूदाना धोकर 4 घंटे या दाने दबने तक भिगोएँ। अच्छी तरह निथारकर घी में पारदर्शी होने तक पकाएँ।","ठंडा करके फेंटे दही, कुटी मूंगफली, सेंधा नमक और चाहें तो हरी मिर्च में मिलाएँ।"]],
  ["Sabudana Pakoda", "साबूदाना पकोड़ा", "Snack", "Maharashtrian", 15, 15, [240,"sabudana"], ["sabudana","potato","peanut","fryingoil","gchilli?"],
    ["dassana", "https://www.vegrecipesofindia.com/sabudana-pakora-fasting-vrat-recipe/"], ["Mix well-drained soaked sabudana with boiled mashed potato, crushed roasted peanuts, sendha namak and optional green chilli.", "Pinch off small rough clusters. Fry a few at a time in medium-hot permitted oil until crisp and golden."],
    ["भीगा-निथरा साबूदाना, उबला-मसला आलू, कुटी मूंगफली, सेंधा नमक और चाहें तो मिर्च मिलाएँ।","छोटे पकोड़े बनाकर मध्यम गरम व्रत के तेल में थोड़े-थोड़े कुरकुरे तलें।"]],
  ["Sabudana Chivda", "साबूदाना चिवड़ा", "Snack", "Maharashtrian", 5, 20, 0, ["sabudana","peanut","fryingoil","dryfruit?"],
    ["dassana", "https://www.vegrecipesofindia.com/sabudana-chiwda-recipe-sabudana-recipes/"], ["Use dry large pearls suited to frying. Fry a spoonful at a time in a metal sieve in hot permitted oil until fully puffed and crisp.", "Fry the peanuts separately. Mix everything with sendha namak and optional fried nuts or raisins, then cool fully."],
    ["तलने वाले बड़े सूखे साबूदाने लें। गरम व्रत के तेल में धातु की छलनी में थोड़ा-थोड़ा डालकर पूरी तरह फूलने तक तलें।","मूंगफली अलग तलें। सेंधा नमक और चाहें तो मेवे या किशमिश मिलाकर पूरी तरह ठंडा करें।"]],
  ["Farali Batata Vada", "फराली बटाटा वड़ा", "Snack", "Gujarati", 20, 20, 0, ["potato","singhara","fryingoil","gchilli?","coriander?"],
    "spice", ["Mash boiled potatoes with sendha namak and optional chilli and coriander. Form small balls.", "Whisk water chestnut flour with water and sendha namak into a coating batter. Dip the balls and fry in permitted oil until golden."],
    ["उबले आलू में सेंधा नमक और चाहें तो मिर्च व धनिया मसलें। छोटी गोलियाँ बनाएँ।","सिंघाड़ा आटा, पानी और सेंधा नमक फेंटकर घोल बनाएँ। गोलियाँ डुबोकर व्रत के तेल में सुनहरी तलें।"]],
  ["Sweet Potato Tikki", "शकरकंद टिक्की", "Snack", "North Indian", 10, 20, 0, ["sweetpotato","singhara","ghee","blackpepper?","lemon?"],
    "dassana", ["Boil sweet potatoes until tender, drain well and mash with water chestnut flour and sendha namak. Add pepper or lemon if desired.", "Shape into small flat patties. Pan-fry in ghee until both sides form a golden crust."],
    ["शकरकंद नरम उबालकर निथारें। सिंघाड़ा आटा और सेंधा नमक डालकर मसलें। चाहें तो काली मिर्च या नींबू डालें।","चपटी टिक्कियाँ बनाएँ और घी में दोनों ओर सुनहरी सेंकें।"]],
  ["Kele Ka Kofta", "कच्चे केले के कोफ्ते", "Main", "North Indian", 20, 25, 0, ["rawbanana","singhara","tomato","ghee","gchilli?"],
    ["dassana", "https://www.vegrecipesofindia.com/raw-banana-kofta-recipe-kachche-kele-ke-kofte-navratri-recipes/"], ["Boil raw banana until tender, peel and mash with a spoonful of water chestnut flour and sendha namak. Shape and shallow-fry in ghee.", "Cook puréed tomato in ghee until thick. Add water and sendha namak, simmer, and add the koftas just before serving."],
    ["कच्चा केला नरम उबालकर छीलें। थोड़ा सिंघाड़ा आटा और सेंधा नमक मिलाकर गोलियाँ बनाएँ और घी में तलें।","टमाटर की प्यूरी घी में गाढ़ी भूनें। पानी और सेंधा नमक डालकर उबालें। परोसने से पहले कोफ्ते डालें।"]],
  ["Vrat Aloo Chaat", "व्रत की आलू चाट", "Snack", "Street & chaat", 10, 15, 0, ["potato","ghee","lemon","blackpepper?","coriander?"],
    "dassana", ["Cut boiled potatoes into bite-sized cubes and pat dry. Pan-fry in ghee until crisp on several sides.", "Toss immediately with sendha namak, lemon and optional black pepper or coriander."],
    ["उबले आलू छोटे टुकड़ों में काटकर सुखाएँ। घी में कई ओर से कुरकुरे सेंकें।","तुरंत सेंधा नमक, नींबू और चाहें तो काली मिर्च या धनिया मिलाएँ।"]],
  ["Farali Peanut Chutney", "फराली मूंगफली चटनी", "Side", "Gujarati", 8, 0, 0, ["peanut","curd","gchilli?","lemon?"],
    "hetal", ["Grind roasted peanuts with plain curd and sendha namak. Add green chilli if desired.", "Thin with a spoonful of water to a dipping consistency and adjust with lemon if needed."],
    ["भुनी मूंगफली, सादा दही और सेंधा नमक पीस लें। चाहें तो हरी मिर्च डालें।","चम्मच भर पानी डालकर चटनी की गाढ़ाई ठीक करें और चाहें तो नींबू डालें।"]],
  ["Vrat Coconut Chutney", "व्रत की नारियल चटनी", "Side", "Gujarati", 8, 0, 0, ["coconut","coriander","lemon","gchilli?"],
    "hetal", ["Grind fresh coconut and coriander with lemon, sendha namak and optional green chilli.", "Add cold water gradually to make a thick dip and serve fresh."],
    ["ताज़ा नारियल, धनिया, नींबू और सेंधा नमक पीसें। चाहें तो हरी मिर्च डालें।","थोड़ा-थोड़ा ठंडा पानी डालकर गाढ़ी चटनी बनाएँ और ताज़ी परोसें।"]],
  ["Vrat Beetroot Raita", "व्रत का चुकंदर रायता", "Side", "North Indian", 10, 15, 0, ["beetroot","curd","blackpepper?"],
    "dassana", ["Steam or boil the beetroot until tender. Peel, grate and cool it.", "Fold into whisked curd with sendha namak and optional black pepper. Serve cold."],
    ["चुकंदर नरम उबालें या भाप में पकाएँ। छीलकर कद्दूकस करें और ठंडा करें।","फेंटे दही, सेंधा नमक और चाहें तो काली मिर्च में मिलाकर ठंडा परोसें।"]],
  ["Vrat Lauki Raita", "व्रत का लौकी रायता", "Side", "North Indian", 10, 10, 0, ["lauki","curd","cuminseeds?","blackpepper?"],
    "dassana", ["Peel and grate lauki. Cook in a little water until tender, then drain and cool.", "Whisk curd with sendha namak. Fold in the lauki and finish with optional roasted cumin or black pepper."],
    ["लौकी छीलकर कद्दूकस करें। थोड़े पानी में नरम पकाकर निथारें और ठंडा करें।","दही और सेंधा नमक फेंटें। लौकी मिलाएँ और चाहें तो भुना जीरा या काली मिर्च डालें।"]],
  ["Vrat Fruit Chaat", "व्रत की फल चाट", "Snack", "Street & chaat", 10, 0, 0, ["apple","banana","lemon","pomegranate?","blackpepper?"],
    "khana", ["Dice apple and banana and add pomegranate if available.", "Toss gently with lemon, optional pepper and a tiny pinch of sendha namak if desired. Serve straight away."],
    ["सेब और केला काटें। हों तो अनार के दाने डालें।","नींबू और चाहें तो काली मिर्च व चुटकी भर सेंधा नमक मिलाएँ। तुरंत परोसें।"]],
  ["Rajgira Kheer", "राजगिरा खीर", "Sweet", "North Indian", 5, 30, 0, ["rajgiraseeds","milk","sugar","dryfruit?"],
    ["dassana", "https://www.vegrecipesofindia.com/rajgira-kheer-recipe-amaranth-kheer/"], ["Rinse ¼ cup whole amaranth and simmer in ¾ cup water until tender.", "Add 1½ cups milk and simmer until creamy. Sweeten to taste and finish with chopped nuts if desired."],
    ["¼ कप साबुत राजगिरा धोकर ¾ कप पानी में नरम पकाएँ।","1½ कप दूध डालकर मलाईदार होने तक पकाएँ। स्वादानुसार चीनी और चाहें तो कटे मेवे डालें।"]],
  ["Samak Kheer", "सामक की खीर", "Sweet", "North Indian", 5, 25, 0, ["samak","milk","sugar","dryfruit?"],
    ["whisk", "https://www.whiskaffair.com/samak-rice-kheer-recipe/"], ["Rinse ¼ cup samak and simmer it gently in 2 cups milk, stirring often until the grains soften.", "Add sugar to taste and simmer until creamy. Serve warm or chilled with optional chopped nuts."],
    ["¼ कप सामक धोकर 2 कप दूध में धीमी आँच पर दाने नरम होने तक बीच-बीच में चलाकर पकाएँ।","स्वादानुसार चीनी डालकर गाढ़ा करें। चाहें तो मेवों के साथ गरम या ठंडा परोसें।"]],
  ["Lauki Kheer", "लौकी की खीर", "Sweet", "North Indian", 10, 30, 0, ["lauki","milk","sugar","ghee","dryfruit?"],
    ["whisk", "https://www.whiskaffair.com/lauki-kheer-recipe/"], ["Sauté 1 cup peeled grated lauki in ghee until soft and the moisture has mostly cooked off.", "Add 2 cups milk and reduce over low heat, stirring often. Stir in sugar to taste and add optional chopped nuts."],
    ["1 कप छिली-कद्दूकस लौकी घी में नरम और लगभग सूखी होने तक भूनें।","2 कप दूध डालकर धीमी आँच पर चलाते हुए गाढ़ा करें। स्वादानुसार चीनी और चाहें तो मेवे डालें।"]],
  ["Kaddu Kheer", "कद्दू की खीर", "Sweet", "North Indian", 10, 25, 0, ["pumpkin","milk","sugar","ghee","dryfruit?"],
    ["dassana", "https://www.vegrecipesofindia.com/pumpkin-kheer-recipe-kaddu-ki-kheer/"], ["Sauté 1 cup grated pumpkin in ghee until soft and aromatic.", "Add 2 cups milk and simmer gently until creamy. Sweeten to taste and garnish with optional nuts."],
    ["1 कप कद्दूकस कद्दू घी में नरम होने तक भूनें।","2 कप दूध डालकर धीमी आँच पर गाढ़ा करें। स्वादानुसार चीनी और चाहें तो मेवे डालें।"]],
  ["Papaya Halwa", "पपीते का हलवा", "Sweet", "North Indian", 10, 25, 0, ["papaya","ghee","sugar","dryfruit?"],
    ["dassana", "https://www.vegrecipesofindia.com/papaya-halwa/"], ["Peel, seed and mash 2 cups ripe papaya. Cook in ghee, stirring until it thickens.", "Add sugar to taste and keep stirring until glossy and the mixture pulls from the pan. Add optional nuts."],
    ["2 कप पका पपीता छीलकर बीज निकालें और मसलें। घी में चलाते हुए गाढ़ा करें।","स्वादानुसार चीनी डालकर चमक आने और कड़ाही छोड़ने तक चलाएँ। चाहें तो मेवे डालें।"]],
  ["Vrat Lauki Halwa", "व्रत का लौकी हलवा", "Sweet", "North Indian", 10, 35, 0, ["lauki","milk","sugar","ghee","dryfruit?"],
    "hetal", ["Sauté 2 cups peeled grated lauki in ghee until softened. Add 1 cup milk and reduce, stirring often.", "Stir in sugar to taste and cook until the mixture holds together. Top with optional chopped nuts."],
    ["2 कप छिली-कद्दूकस लौकी घी में नरम भूनें। 1 कप दूध डालकर चलाते हुए सुखाएँ।","स्वादानुसार चीनी डालकर मिश्रण बँधने तक पकाएँ। चाहें तो मेवे डालें।"]],
  ["Rajgira Ladoo", "राजगिरा लड्डू", "Sweet", "North Indian", 10, 10, 0, ["puffedrajgira","jaggery","ghee?"],
    "dassana", ["Melt ½ cup jaggery with a tablespoon of water and boil until a drop forms a firm ball in cold water.", "Switch off the heat and stir in 2 cups puffed amaranth. When safe to handle but still pliable, shape into balls with lightly greased hands."],
    ["½ कप गुड़ 1 बड़ा चम्मच पानी में पिघलाएँ। ठंडे पानी में बूँद डालें तो सख़्त गोली बने, तब तक पकाएँ।","आँच बंद करके 2 कप फूला राजगिरा मिलाएँ। हाथ से छूने लायक गरम रहे तब चिकने हाथों से लड्डू बनाएँ।"]],
  ["Vrat Peanut Ladoo", "व्रत के मूंगफली लड्डू", "Sweet", "Gujarati", 10, 8, 0, ["peanut","jaggery","ghee?"],
    "maayeka", ["Dry-roast peanuts, cool and rub away their skins.", "Pulse 1 cup roasted peanuts with ½ cup grated jaggery until it clumps when pressed. Roll into balls, using a little ghee only if needed."],
    ["मूंगफली सूखी भूनें, ठंडी करें और छिलके रगड़कर निकालें।","1 कप भुनी मूंगफली और ½ कप कद्दूकस गुड़ पीसें। दबाने पर बँधे तो लड्डू बनाएँ। ज़रूरत हो तो थोड़ा घी डालें।"]],
  ["Farali Dry Fruit Ladoo", "फराली मेवा लड्डू", "Sweet", "North Indian", 10, 8, 0, ["dates","dryfruit","ghee","coconut?"],
    "dassana", ["Toast chopped nuts in ghee and set them aside. Soften pitted, chopped dates in the same pan over low heat.", "Mix the dates with the toasted nuts and shape the warm mixture into balls. Roll in optional grated coconut."],
    ["कटे मेवे घी में भूनकर निकालें। उसी कड़ाही में बीज निकले कटे खजूर धीमी आँच पर नरम करें।","खजूर और मेवे मिलाकर हल्के गरम मिश्रण के लड्डू बनाएँ। चाहें तो नारियल में लपेटें।"]],
  ["Makhana Ladoo", "मखाना लड्डू", "Sweet", "North Indian", 10, 12, 0, ["makhana","jaggery","ghee","dryfruit?"],
    "maayeka", ["Roast 2 cups makhana in a little ghee until crisp, cool, then grind with ¼ cup grated jaggery and optional toasted nuts.", "Mix in warm ghee a little at a time until a handful holds together, then roll into ladoos."],
    ["2 कप मखाने थोड़े घी में कुरकुरे भूनें। ठंडे करके ¼ कप कद्दूकस गुड़ और चाहें तो भुने मेवों के साथ पीसें।","थोड़ा-थोड़ा गरम घी डालें। मुट्ठी में बँधने लगे तो लड्डू बनाएँ।"]],
  ["Panchamrit", "पंचामृत", "Drink", "North Indian", 5, 0, 0, ["milk","curd","honey","sugar","ghee","tulsileaves?"],
    ["hebbar", "https://hebbarskitchen.com/panchamrit-recipe-panchamrut-recipe/"], ["Whisk ½ cup milk with 2 tbsp plain curd until smooth.", "Mix in 1 tsp each of honey, sugar and melted ghee. Add a clean tulsi leaf if customary and serve fresh."],
    ["½ कप दूध और 2 बड़े चम्मच सादा दही चिकना फेंटें।","1 छोटा चम्मच शहद, चीनी और पिघला घी मिलाएँ। परंपरा हो तो धुला तुलसी पत्ता डालकर ताज़ा परोसें।"]],
  ["Kesar Badam Doodh", "केसर बादाम दूध", "Drink", "North Indian", 5, 10, 0, ["milk","almonds","saffron","sugar?"],
    "whisk", ["Grind 2 tbsp almonds to a fine paste with a splash of milk. Steep saffron strands in a little warm milk.", "Simmer 2 cups milk with the almond paste for 5–7 min, stirring often. Add the saffron milk and sugar if desired."],
    ["2 बड़े चम्मच बादाम थोड़े दूध के साथ बारीक पीसें। केसर को थोड़ा गरम दूध में भिगोएँ।","2 कप दूध और बादाम का पेस्ट 5–7 मिनट चलाकर उबालें। केसर वाला दूध और चाहें तो चीनी डालें।"]]
];

// Older vrat cards previously relied on generic methods for regular meals.
const VRAT_EXISTING_METHODS = {
  "Singhare ka Halwa": [
    ["Toast ½ cup water chestnut flour in 3 tbsp ghee over low heat until nutty. Add 1¼ cups warm water gradually, whisking as you pour.", "Stir in sugar to taste and cook until the halwa thickens and leaves the pan."],
    ["½ कप सिंघाड़ा आटा 3 बड़े चम्मच घी में धीमी आँच पर खुशबू आने तक भूनें। चलाते हुए 1¼ कप गरम पानी धीरे-धीरे डालें।","स्वादानुसार चीनी डालें और हलवा गाढ़ा होकर कड़ाही छोड़ने तक चलाएँ।"]
  ],
  "Kele ki Sabzi": [
    ["Boil the raw bananas until just tender, then peel and cube them.", "Sauté the cubes in a little permitted oil with sendha namak and optional chopped green chilli until lightly golden."],
    ["कच्चे केले नरम होने तक उबालें, छीलें और चौकोर काटें।","थोड़े व्रत के तेल, सेंधा नमक और चाहें तो कटी हरी मिर्च में हल्का सुनहरा भूनें।"]
  ],
  "Kaddu ki Khatti Meethi Sabzi": [
    ["Peel the pumpkin, cut it into chunks and simmer with a splash of water and sendha namak until tender.", "Stir in a little jaggery and tamarind if your vrat allows them. Simmer uncovered until the sauce coats the pieces."],
    ["कद्दू छीलकर टुकड़े करें और थोड़ा पानी व सेंधा नमक डालकर नरम पकाएँ।","अपने व्रत में लेते हों तो थोड़ा गुड़ और इमली डालें। बिना ढके पकाएँ ताकि रस कद्दू पर लगे।"]
  ],
  "Makhana Dry Fruit Barfi": [
    ["Roast 2 cups makhana until crisp and grind to a powder. Chop and toast ½ cup mixed nuts separately.", "Boil ½ cup sugar with ¼ cup water to a sticky syrup. Stir in the powder, nuts and a spoonful of ghee, then press into a greased plate. Cool and cut."],
    ["2 कप मखाने कुरकुरे भूनकर पीसें। ½ कप कटे मेवे अलग भूनें।","½ कप चीनी और ¼ कप पानी की चिपचिपी चाशनी बनाएँ। मखाना, मेवे और एक चम्मच घी मिलाकर चिकनी थाली में दबाएँ। ठंडा करके काटें।"]
  ],
  "Kaddu Halwa": [
    ["Peel and grate pumpkin. Sauté in ghee until soft and the liquid evaporates.", "Stir in sugar to taste and keep cooking until glossy and thick enough to pull away from the pan."],
    ["कद्दू छीलकर कद्दूकस करें। घी में नरम होने और नमी सूखने तक भूनें।","स्वादानुसार चीनी डालें और हलवा चमकने व कड़ाही छोड़ने तक पकाएँ।"]
  ],
  "Shakarkandi Halwa": [
    ["Boil or steam sweet potatoes until tender, then peel and mash them.", "Sauté the mash in ghee, add sugar to taste and cook until thick. Add a splash of milk if you prefer a softer halwa."],
    ["शकरकंद नरम उबालें या भाप में पकाएँ। छीलकर मसलें।","घी में मसलन भूनें, स्वादानुसार चीनी डालें और गाढ़ा पकाएँ। नरम हलवे के लिए थोड़ा दूध डाल सकते हैं।"]
  ],
  "Aloo Raita": [
    ["Boil the potatoes, peel and dice, then cool completely.", "Whisk the curd until smooth and fold in the potatoes with sendha namak to taste."],
    ["आलू उबालकर छीलें और काटें। पूरी तरह ठंडा करें।","दही चिकना फेंटें और आलू व स्वादानुसार सेंधा नमक मिलाएँ।"]
  ],
  "Shikanji (Nimbu Pani)": [
    ["Squeeze lemon into chilled water. Stir in sugar if you like it sweet or a pinch of sendha namak if you prefer it salted.", "Add optional mint and serve immediately."],
    ["ठंडे पानी में नींबू निचोड़ें। मीठा चाहिए तो चीनी और नमकीन चाहिए तो चुटकी भर सेंधा नमक मिलाएँ।","चाहें तो पुदीना डालें और तुरंत परोसें।"]
  ],
  "Masala Chaas": [
    ["Whisk 1 cup plain curd with 1 cup cold water and sendha namak.", "Stir in optional chopped mint or coriander and serve cold."],
    ["1 कप सादा दही, 1 कप ठंडा पानी और सेंधा नमक फेंटें।","चाहें तो कटा पुदीना या धनिया डालकर ठंडा परोसें।"]
  ],
  "Sabudana Thalipeeth": [
    ["Mix well-drained soaked sabudana with boiled mashed potato, crushed toasted peanuts, sendha namak and optional green chilli.", "Pat small discs on greased parchment, transfer to a hot tawa and cook in a little ghee until crisp on both sides."],
    ["भीगा-निथरा साबूदाना, उबला-मसला आलू, कुटी भुनी मूंगफली, सेंधा नमक और चाहें तो मिर्च मिलाएँ।","चिकने कागज़ पर छोटे थालीपीठ थपथपाएँ। तवे पर थोड़ा घी लगाकर दोनों ओर कुरकुरे सेंकें।"]
  ],
  "Singhare ki Puri": [
    ["Knead water chestnut flour, mashed boiled potato and sendha namak into a firm dough. Add a spoonful of water only if needed.", "Pat small rounds between greased sheets and fry in permitted oil until puffed and golden."],
    ["सिंघाड़ा आटा, उबला-मसला आलू और सेंधा नमक मिलाकर सख़्त आटा गूँधें। ज़रूरत हो तो थोड़ा पानी डालें।","चिकनी शीटों के बीच छोटी पूरियाँ बनाएँ और व्रत के तेल में फूलने और सुनहरी होने तक तलें।"]
  ],
  "Farali Pattice": [
    ["Mix mashed boiled potato with a little water chestnut flour and sendha namak. Crush roasted peanuts and mix with optional grated coconut for the filling.", "Enclose a spoonful of filling in each ball of dough, flatten and shallow-fry in permitted oil or ghee until golden."],
    ["उबले-मसले आलू में थोड़ा सिंघाड़ा आटा और सेंधा नमक मिलाएँ। भरावन के लिए भुनी मूंगफली कूटें और चाहें तो नारियल मिलाएँ।","हर लोई में थोड़ा भरावन भरें और चपटा करें। व्रत के तेल या घी में सुनहरा सेंकें।"]
  ],
  "Kuttu Dosa": [
    ["Whisk buckwheat flour, water and sendha namak into a pourable batter. Mix in optional plain curd.", "Spread thinly on a greased hot tawa. Cook until the edges crisp and fold around optional boiled potato."],
    ["कुट्टू आटा, पानी और सेंधा नमक फेंटकर बहने वाला घोल बनाएँ। चाहें तो दही डालें।","घी लगे गरम तवे पर पतला फैलाएँ। किनारे कुरकुरे होने पर चाहें तो उबला आलू रखकर मोड़ें।"]
  ],
  "Kuttu Puri": [
    ["Knead buckwheat flour with mashed boiled potatoes, sendha namak and optional green chilli. Use only enough water to bind.", "Pat small rounds between greased sheets and fry in permitted oil until cooked through and golden."],
    ["कुट्टू आटा, उबले-मसले आलू, सेंधा नमक और चाहें तो मिर्च मिलाकर गूँधें। बस बँधने भर पानी डालें।","चिकनी शीटों के बीच छोटी पूरियाँ बनाकर व्रत के तेल में अच्छी तरह सुनहरी तलें।"]
  ],
  "Singhare ke Atte ke Pakode": [
    ["Whisk water chestnut flour, sendha namak and water into a thick batter. Stir in optional green chilli and coriander.", "Coat thin potato slices with the batter and fry in permitted oil until the potato is tender and the crust is crisp."],
    ["सिंघाड़ा आटा, सेंधा नमक और पानी फेंटकर गाढ़ा घोल बनाएँ। चाहें तो मिर्च और धनिया डालें।","आलू की पतली फाँकें घोल में डुबोकर व्रत के तेल में आलू नरम और परत कुरकुरी होने तक तलें।"]
  ],
  "Samak Rice Khichdi": [
    ["Drain the soaked samak. Sauté diced potato and roasted peanuts in ghee, with optional chopped chilli.", "Add samak, sendha namak and about 2½ cups water per cup of samak. Simmer covered until soft and finish with optional lemon."],
    ["भीगा सामक निथारें। आलू के टुकड़े और भुनी मूंगफली घी में भूनें। चाहें तो मिर्च डालें।","सामक, सेंधा नमक और हर कप सामक पर लगभग 2½ कप पानी डालें। ढककर नरम पकाएँ। चाहें तो नींबू डालें।"]
  ],
  "Vrat Aloo Tikki": [
    ["Mash boiled potatoes with a little water chestnut flour and sendha namak. Fold in optional crushed roasted peanuts.", "Shape into patties and shallow-fry in ghee or permitted oil until crisp on both sides."],
    ["उबले आलू में थोड़ा सिंघाड़ा आटा और सेंधा नमक मसलें। चाहें तो कुटी भुनी मूंगफली मिलाएँ।","टिक्कियाँ बनाकर घी या व्रत के तेल में दोनों तरफ़ कुरकुरी सेंकें।"]
  ],
  "Vrat Kadhi": [
    ["Whisk 1 cup curd with 2 tbsp water chestnut flour, 1½ cups water and sendha namak.", "Bring to a gentle simmer while stirring. Add optional chopped green chilli and cook until lightly thickened."],
    ["1 कप दही, 2 बड़े चम्मच सिंघाड़ा आटा, 1½ कप पानी और सेंधा नमक फेंटें।","चलाते हुए उबालें। चाहें तो कटी हरी मिर्च डालें और हल्का गाढ़ा होने तक पकाएँ।"]
  ],
  "Makhana Curry": [
    ["Toast the makhana in a little ghee until crisp and set aside. Simmer puréed tomatoes with sendha namak and optional green chilli until thick.", "Stir in a splash of water and optional whisked curd on low heat. Add makhana near the end and simmer until just tender."],
    ["मखाने थोड़े घी में कुरकुरे भूनकर रखें। टमाटर की प्यूरी सेंधा नमक और चाहें तो हरी मिर्च के साथ गाढ़ी पकाएँ।","धीमी आँच पर थोड़ा पानी और चाहें तो फेंटा दही डालें। अंत में मखाने डालकर हल्का नरम होने तक पकाएँ।"]
  ],
  "Sabudana Kheer": [
    ["Drain soaked sabudana and simmer in milk, stirring often, until the pearls are translucent and soft.", "Add sugar to taste and simmer briefly until creamy. Finish with optional chopped nuts."],
    ["भीगा साबूदाना निथारें। दूध में बीच-बीच में चलाते हुए दाने पारदर्शी और नरम होने तक पकाएँ।","स्वादानुसार चीनी डालकर थोड़ा और पकाएँ। चाहें तो कटे मेवे डालें।"]
  ],
  "Makhana Kheer": [
    ["Dry-roast the makhana until crisp and crush half of it coarsely. Simmer the crushed and whole makhana in milk until tender.", "Stir in sugar to taste and simmer briefly until creamy. Garnish with optional nuts."],
    ["मखाने सूखे कुरकुरे भूनें और आधे दरदरे कूटें। साबुत और कुटे मखाने दूध में नरम होने तक पकाएँ।","स्वादानुसार चीनी डालकर थोड़ा गाढ़ा करें। चाहें तो मेवे डालें।"]
  ],
  "Sabudana Khichdi": [
    ["Drain the soaked sabudana well and toss with crushed toasted peanuts and sendha namak. Sauté small cooked potato cubes in ghee with optional chilli.", "Fold in the sabudana and cook gently until the pearls turn translucent. Finish with optional lemon."],
    ["भीगा साबूदाना अच्छी तरह निथारकर कुटी भुनी मूंगफली और सेंधा नमक मिलाएँ। घी में उबले आलू के टुकड़े और चाहें तो मिर्च भूनें।","साबूदाना मिलाकर दाने पारदर्शी होने तक हल्के हाथ से पकाएँ। चाहें तो नींबू डालें।"]
  ],
  "Sabudana Vada": [
    ["Combine soaked, well-drained sabudana, mashed boiled potatoes, crushed toasted peanuts and sendha namak. Add optional coriander or chilli.", "Form flat patties and fry a few at a time in medium-hot permitted oil until golden and crisp."],
    ["भीगा-निथरा साबूदाना, उबले-मसले आलू, कुटी भुनी मूंगफली और सेंधा नमक मिलाएँ। चाहें तो धनिया या मिर्च डालें।","चपटी टिक्कियाँ बनाकर मध्यम गरम व्रत के तेल में थोड़ी-थोड़ी सुनहरी कुरकुरी तलें।"]
  ],
  "Cucumber Raita": [
    ["Grate or finely dice the cucumber and drain any excess water.", "Whisk the curd, add cucumber and sendha namak to taste, then serve cold."],
    ["खीरा कद्दूकस करें या बारीक काटें और अतिरिक्त पानी निकालें।","दही फेंटकर खीरा और स्वादानुसार सेंधा नमक मिलाएँ। ठंडा परोसें।"]
  ],
  "Aloo Jeera": [
    ["Boil the potatoes, peel and cube. Toast cumin seeds in ghee until fragrant, with optional chopped green chilli.", "Toss in the potatoes and sendha namak. Sauté until the cubes take on a little colour."],
    ["आलू उबालकर छीलें और चौकोर काटें। घी में जीरा खुशबू आने तक भूनें। चाहें तो मिर्च डालें।","आलू और सेंधा नमक मिलाकर हल्का सुनहरा भूनें।"]
  ],
  "Sweet Potato Chaat": [
    ["Boil or roast the sweet potato until tender, then peel and cube.", "Toss with sendha namak and optional lemon or chopped coriander."],
    ["शकरकंद नरम उबालें या भूनें। छीलकर चौकोर काटें।","सेंधा नमक और चाहें तो नींबू या कटा धनिया मिलाएँ।"]
  ],
  "Air Fryer Raw Banana Chips": [
    ["Peel and thinly slice the raw banana. Toss the slices with a little permitted oil and sendha namak.", "Air fry in a single layer at 170°C for 12–15 min, shaking the basket during cooking."],
    ["कच्चा केला छीलकर पतले गोल काटें। थोड़ा व्रत का तेल और सेंधा नमक मिलाएँ।","एक परत में 170°C पर 12–15 मिनट एयर फ्राई करें। बीच में टोकरी हिलाएँ।"]
  ],
  "Air Fryer Roasted Makhana": [
    ["Toss makhana with a little ghee if desired and a pinch of sendha namak.", "Air fry at 150°C for 5–6 min until crunchy. Cool before serving."],
    ["मखाने में चुटकी भर सेंधा नमक और चाहें तो थोड़ा घी मिलाएँ।","150°C पर 5–6 मिनट कुरकुरे होने तक एयर फ्राई करें। ठंडा करके परोसें।"]
  ],
  "Date & Nut Energy Balls": [
    ["Pit and mash the dates to a sticky paste. Mix with finely chopped nuts.", "Roll into small balls and coat with desiccated coconut if desired. Chill for 20 min to firm up."],
    ["खजूर के बीज निकालकर चिपचिपा पेस्ट बनाएँ और बारीक कटे मेवे मिलाएँ।","छोटे लड्डू बनाएँ और चाहें तो सूखे नारियल में लपेटें। जमने के लिए 20 मिनट ठंडा करें।"]
  ]
};
