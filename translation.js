// Hatri is authored in English. Keep the original text and translate the rendered UI.
globalThis.HatriTranslation = (() => {
  const cacheKey = "hatri-google-hi-v1";
  const endpoint = "https://translate.googleapis.com/translate_a/single";
  // Generated, versioned local translations for the full authored catalog.
  // This is a lookup table, not a runtime network translation service.
  const packaged = new Map();
  for (const group of Object.values(globalThis.HATRI_HINDI_CATALOG || {})) {
    for (const [source, hindi] of Object.entries(group)) {
      if (typeof hindi === 'string' && hindi.trim()) packaged.set(source, hindi);
    }
  }
  // The unauthenticated Google endpoint sometimes serves a CAPTCHA/429 instead of
  // JSON. Keep essential navigation, filters and pantry labels usable without it.
  // English remains the canonical source; these are authored Hindi translations.
  const offline = new Map(Object.entries({
    "Hatri":"हातरी", "Hindi":"हिंदी", "English":"अंग्रेज़ी", "Language":"भाषा",
    "Planner":"योजना", "My Kitchen":"मेरी रसोई", "Features":"सुविधाएँ", "Account":"खाता",
    "Profile":"प्रोफ़ाइल", "Settings":"सेटिंग्स", "Appearance":"दिखावट", "Day":"दिन", "Night":"रात",
    "Sign in with Google":"गूगल से साइन इन करें", "Log out":"लॉग आउट", "Profile and settings":"प्रोफ़ाइल और सेटिंग्स",
    "Cook":"पकाएँ", "Kitchen":"रसोई", "Reels":"रील्स", "Shopping list":"खरीदारी की सूची",
    "Table":"खाने की योजना", "My Table":"मेरी खाने की योजना", "🍽️ My Table":"🍽️ मेरी खाने की योजना",
    "Add to Table":"खाने की योजना में जोड़ें", "+ Add to Table":"+ खाने की योजना में जोड़ें", "✓ On Table":"✓ योजना में है",
    "Added to Table":"खाने की योजना में जोड़ा", "Removed from Table":"योजना से हटाया",
    "Everything you've chosen to cook, in one place.":"जो व्यंजन बनाना चाहते हैं, वे सब एक जगह।",
    "Browse dishes":"व्यंजन देखें", "Your table is empty":"आपकी खाने की योजना खाली है",
    "Select Add to Table on a dish or a complete meal to plan what you'll cook.":"जो बनाना चाहते हैं, उस व्यंजन या पूरे भोजन पर खाने की योजना में जोड़ें दबाएँ।",
    "Explore recipes":"व्यंजन खोजें", "Individual dish":"एक व्यंजन", "Complete meal":"पूरा भोजन",
    "All required ingredients at home":"सभी ज़रूरी सामग्री घर में है", "Remove":"हटाएँ",
    "Pantry":"रसोई की सामग्री", "Filters":"फ़िल्टर", "Suggestions":"सुझाव", "Shuffle":"नए सुझाव",
    "Search recipes":"व्यंजन खोजें", "Search recipes by voice":"बोलकर व्यंजन खोजें", "Voice search":"बोलकर खोजें",
    'Search "chole bhature"':'"छोले भटूरे" खोजें', "Search ingredients…":"सामग्री खोजें…",
    "Recipe modes":"व्यंजन के विकल्प", "Veg mode":"शाकाहारी मोड", "Hostel mode":"हॉस्टल मोड",
    "VEG":"शाकाहारी", "MODE":"मोड", "HOSTEL":"हॉस्टल", "Cook with what you have":"घर में उपलब्ध सामग्री से बनाएँ",
    "Pick ingredients from your pantry to find recipes.":"घर में मौजूद सामग्री चुनें और उससे बनने वाले व्यंजन पाएँ।",
    "What should I cook today?":"आज क्या बनाऊँ?", "Christmas recipes":"क्रिसमस के व्यंजन",
    "See more Christmas dish suggestions":"क्रिसमस के और व्यंजन देखें", "Winter recipes & soups":"सर्दियों के व्यंजन और सूप",
    "Winter recipes":"सर्दियों के व्यंजन", "← Back to home":"← होम पर वापस जाएँ",
    "Plan tonight’s meal":"आज रात का खाना तय करें", "Start with the pantry on the left, then set your occasion and time.":"पहले घर में उपलब्ध सामग्री चुनें, फिर अवसर और समय तय करें।",
    "Pick ingredients":"सामग्री चुनें", "1 Pick what’s at home":"१ घर में मौजूद सामग्री चुनें",
    "2 See what you can cook":"२ देखें क्या बना सकते हैं", "3 Refine with Filters":"३ फ़िल्टर से सुझाव चुनें",
    "Quick start: common veg + dal":"आसान शुरुआत: आम सब्ज़ियाँ और दाल", "Clear all":"सब हटाएँ",
    "Basics at home (oil, salt, haldi, masalas)":"घर में तेल, नमक, हल्दी और मसाले हैं",
    "Show recipes":"व्यंजन दिखाएँ", "Close":"बंद करें", "Close filters":"फ़िल्टर बंद करें",
    "More filters":"और फ़िल्टर", "Fine-tune your recipe suggestions":"व्यंजनों के सुझाव अपनी पसंद के अनुसार चुनें",
    "Reset filters":"फ़िल्टर रीसेट करें", "Apply filters":"फ़िल्टर लागू करें",
    "Region":"क्षेत्र", "Occasion":"अवसर", "Time":"समय", "Ready in":"तैयार होने में",
    "Daily":"रोज़मर्रा", "Festive":"त्योहार", "Vrat":"व्रत", "Vrat / Upvas":"व्रत / उपवास",
    "Sweets":"मिठाइयाँ", "All":"सभी", "All regions":"सभी क्षेत्र", "All occasions":"सभी अवसर",
    "Select all":"सभी चुनें", "Clear":"हटाएँ", "Reset":"रीसेट करें", "Done":"हो गया",
    "Include meat and egg recipes":"मांस और अंडे वाले व्यंजन भी दिखाएँ",
    "Search results":"खोज के नतीजे", "found":"मिले", "Your active filters apply":"चुने हुए फ़िल्टर लागू हैं",
    "No recipes match your search and filters. Try another name or reset filters.":"आपकी खोज और फ़िल्टर से कोई व्यंजन नहीं मिला। दूसरा नाम खोजें या फ़िल्टर हटाएँ।",
    "Ready to cook":"बनाने के लिए तैयार", "Add to cart":"सूची में जोड़ें", "Remove":"हटाएँ",
    "Dishes in your cart":"आपकी खरीदारी के व्यंजन", "Other shopping items":"अन्य खरीदारी सामग्री",
    "More dishes to shop for":"और व्यंजन बनाने के लिए सामग्री", "Choose a dish to build your shopping list.":"खरीदारी की सूची बनाने के लिए व्यंजन चुनें।",
    "Just 1–2 more ingredients per dish, using what you already have or plan to buy":"घर की सामग्री से बनने वाले व्यंजन, जिनके लिए केवल १–२ चीज़ें और चाहिए",
    "Order from Blinkit":"ब्लिंकिट से मँगाएँ", "item":"सामग्री", "items":"सामग्रियाँ",
    "Decide for me":"मेरे लिए चुनें", "🎲 Decide for me":"🎲 मेरे लिए चुनें", "Show pantry slide":"सामग्री वाला स्लाइड दिखाएँ",
    "Show dinner ideas slide":"रात के खाने का स्लाइड दिखाएँ", "Show Christmas slide":"क्रिसमस वाला स्लाइड दिखाएँ",
    "Show winter recipes slide":"सर्दियों के व्यंजनों का स्लाइड दिखाएँ", "Slide controls":"स्लाइड नियंत्रण",
    "Pause slides":"स्लाइड रोकें", "Play slides":"स्लाइड चलाएँ", "Hatri highlights":"हातरी की खास बातें",
    "Hatri Reels":"हातरी रील्स", "Cook, share, discover":"पकाएँ, साझा करें, नए व्यंजन जानें",
    "Upload a recipe video":"व्यंजन का वीडियो अपलोड करें", "Share your recipe":"अपना व्यंजन साझा करें",
    "Recipe name":"व्यंजन का नाम", "Caption":"विवरण", "Video":"वीडियो", "Choose video":"वीडियो चुनें",
    "No video selected":"कोई वीडियो नहीं चुना", "Cancel":"रद्द करें", "Publish video":"वीडियो प्रकाशित करें",
    "Made for everyday cooking":"रोज़ के खाने के लिए बनाया गया", "Pantry matching":"उपलब्ध सामग्री से सुझाव",
    "Soak and timing":"भिगोने और बनाने का समय", "Festive, vrat, sweets":"त्योहार, व्रत और मिठाइयाँ",
    "Regional and local":"स्थानीय और क्षेत्रीय व्यंजन", "Seasonal vegetables":"मौसमी सब्ज़ियाँ",
    "Share activity to help improve Hatri":"हातरी को बेहतर बनाने के लिए गतिविधि साझा करें",
    "Pahadi":"पहाड़ी", "North Indian":"उत्तर भारतीय", "South Indian":"दक्षिण भारतीय", "Rajasthani":"राजस्थानी",
    "Punjabi":"पंजाबी", "Gujarati":"गुजराती", "Maharashtrian":"महाराष्ट्रीय", "Bengali":"बंगाली",
    "Sindhi":"सिंधी", "Kashmiri":"कश्मीरी", "Bihari":"बिहारी", "Everyday":"रोज़मर्रा",
    "International / National":"अंतरराष्ट्रीय / राष्ट्रीय", "Italian":"इतालवी", "Chinese":"चीनी", "Thai":"थाई",
    "Daily vegetables":"रोज़ की सब्ज़ियाँ", "Seasonal — winter":"सर्दियों की सब्ज़ियाँ",
    "All vegetables":"सभी सब्ज़ियाँ", "Roots & tubers":"जड़ और कंद वाली सब्ज़ियाँ",
    "Gourds & squash":"लौकी और कद्दू वर्ग", "Leafy greens":"पत्तेदार सब्ज़ियाँ",
    "Pods & peas":"फलियाँ और मटर", "Fruit vegetables":"फल वाली सब्ज़ियाँ",
    "Cruciferous":"गोभी वर्ग", "Corn & fungi":"मक्का और मशरूम", "Other vegetables":"अन्य सब्ज़ियाँ",
    "Onion":"प्याज़", "Tomato":"टमाटर", "Potato":"आलू", "Capsicum":"शिमला मिर्च", "Brinjal":"बैंगन",
    "Bhindi":"भिंडी", "Cabbage":"पत्तागोभी", "Carrot":"गाजर", "Cucumber":"खीरा",
    "Lauki (bottle gourd)":"लौकी", "French beans":"फ्रेंच बीन्स", "Mushroom":"मशरूम",
    "Sweet corn":"मीठा मक्का", "Arbi (colocasia)":"अरबी", "Cauliflower":"फूलगोभी",
    "Green peas":"हरी मटर", "Spinach (palak)":"पालक", "Sarson (mustard greens)":"सरसों का साग",
    "Methi leaves":"मेथी के पत्ते", "Mooli (radish)":"मूली", "Beetroot":"चुकंदर",
    "Sweet potato (shakarkandi)":"शकरकंद", "Suran (elephant yam)":"सूरन",
    "Pumpkin":"कद्दू", "Drumstick":"सहजन", "Raw banana":"कच्चा केला", "Karela":"करेला",
    "Tinda":"टिंडा", "Turai":"तुरई", "Coriander":"हरा धनिया", "Mint":"पुदीना",
    "Curry leaves":"करी पत्ता", "Green chilli":"हरी मिर्च", "Ginger":"अदरक", "Garlic":"लहसुन",
    "Lemon":"नींबू", "Coconut":"नारियल", "Raw mango":"कच्चा आम", "Mango":"आम",
    "Banana":"केला", "Apple":"सेब", "Amla":"आँवला", "Paneer":"पनीर", "Curd":"दही",
    "Butter":"मक्खन", "Ghee":"घी", "Milk":"दूध", "Eggs":"अंडे", "Chicken":"चिकन",
    "Fish":"मछली", "Mutton":"मटन", "Prawn":"झींगा", "Rice":"चावल", "Atta":"आटा",
    "Besan":"बेसन", "Suji":"सूजी", "Poha":"पोहा", "Bread":"ब्रेड", "Bajra":"बाजरा",
    "Makki":"मक्का", "Sev":"सेव", "Makhana":"मखाना", "Dry fruits":"मेवे", "Toor dal":"अरहर दाल",
    "Moong dal":"मूँग दाल", "Rajma":"राजमा", "Peanuts":"मूँगफली", "Urad dal":"उड़द दाल",
    "Jaggery":"गुड़", "Sesame":"तिल", "Mustard oil":"सरसों का तेल", "Tamarind":"इमली",
    "Oats":"ओट्स", "Maida":"मैदा", "Soya":"सोया", "Pasta":"पास्ता", "Sprouts":"अंकुरित दाने",
    "Cheese":"चीज़", "Masoor dal":"मसूर दाल", "Sattu":"सत्तू", "Ragi":"रागी",
    "Noodles":"नूडल्स", "Cream":"क्रीम", "Cocoa":"कोको", "Chocolate":"चॉकलेट",
    "Broccoli":"ब्रोकली", "Orange":"संतरा", "Pineapple":"अनानास", "Watermelon":"तरबूज़",
    "Pomegranate":"अनार", "Coffee":"कॉफ़ी", "Honey":"शहद", "Sugar":"चीनी",
    "Almonds":"बादाम", "Cashews":"काजू", "Turmeric":"हल्दी", "Cumin":"जीरा",
    "Salt":"नमक", "Black pepper":"काली मिर्च", "Cinnamon":"दालचीनी", "Cardamom":"इलायची",
    "Gajar Halwa":"गाजर का हलवा", "Shahi Paneer":"शाही पनीर", "Aloo Gobi":"आलू गोभी",
    "Aloo Matar":"आलू मटर", "Aloo Tamatar":"आलू टमाटर", "Aloo Jeera":"जीरा आलू",
    "Dal Tadka":"दाल तड़का", "Palak Paneer":"पालक पनीर", "Chole Bhature":"छोले भटूरे",
    "Rajma Chawal":"राजमा चावल", "Bhindi Masala":"भिंडी मसाला", "Matar Paneer":"मटर पनीर",
    "Masala Dosa":"मसाला डोसा", "Idli":"इडली", "Sambar":"सांभर", "Gulab Jamun":"गुलाब जामुन",
    "Rasgulla":"रसगुल्ला", "Rasmalai":"रसमलाई", "Baingan Bharta":"बैंगन भर्ता",
    "Aloo Paratha":"आलू पराठा", "Methi Matar Malai":"मेथी मटर मलाई",
    "Uttarakhand Mandua Cheela":"उत्तराखंड मडुआ चीला", "Pahadi Mandua Cheela":"पहाड़ी मडुआ चीला"
  }));
  // Recipe-detail and filter labels are assembled at runtime, so a static HTML
  // extraction cannot inventory them. Keep these high-traffic phrases local too.
  for (const [source, hindi] of Object.entries({
    "Ingredients":"सामग्री", "Method":"बनाने की विधि", "Recipe":"व्यंजन",
    "Serves":"परोसने की मात्रा", "Cook time":"पकाने का समय", "Prep time":"तैयारी का समय",
    "Sign in to rate this recipe and save photos of your creation.":"इस व्यंजन को रेटिंग देने और अपनी तस्वीरें सहेजने के लिए साइन इन करें।",
    "Your rating:":"आपकी रेटिंग:", "Add your photo":"अपनी तस्वीर जोड़ें",
    "AI-generated dish image":"एआई से बनाई गई व्यंजन की तस्वीर",
    "Watch on Instagram":"इंस्टाग्राम पर देखें", "Written recipe":"लिखित विधि", "Recipe reference":"व्यंजन का स्रोत",
    "Use sendha namak and ingredients permitted by your household’s fasting practice.":"व्रत में सेंधा नमक और अपने घर की परंपरा के अनुसार मान्य सामग्री इस्तेमाल करें।",
    "The method is currently unavailable.":"बनाने की विधि अभी उपलब्ध नहीं है।",
    "Sign in to keep your ratings and photos.":"अपनी रेटिंग और तस्वीरें सहेजने के लिए साइन इन करें।",
    "Nothing saved yet — rate a recipe or add a photo of something you cooked.":"अभी कुछ सहेजा नहीं है। किसी व्यंजन को रेटिंग दें या अपनी बनाई चीज़ की तस्वीर जोड़ें।",
    "What do you want to make?":"आप क्या बनाना चाहते हैं?",
    "Tap more than one to combine, e.g. Snack + Drink":"एक से अधिक विकल्प चुन सकते हैं, जैसे नाश्ता और पेय।",
    "Suggest a salad":"सलाद सुझाएँ", "Add protein":"प्रोटीन जोड़ें",
    "Time I have (prep + cook)":"तैयारी और पकाने के लिए उपलब्ध समय",
    "More options":"और विकल्प", "None":"कोई नहीं", "Any":"कोई भी",
    "Vegetarian":"शाकाहारी", "Non-vegetarian":"मांसाहारी", "Everything is at home":"सारी सामग्री घर में है",
    "Your active filters apply":"आपके चुने हुए फ़िल्टर लागू हैं", "Cook right now":"अभी पकाएँ",
    "Almost there":"बस थोड़ी सामग्री और चाहिए", "Plan ahead":"पहले से तैयारी करें",
    "Needs a bigger shop":"और सामग्री खरीदनी होगी", "See the dishes":"व्यंजन देखें",
    "Whole meal":"पूरा भोजन", "Whole meals":"पूरे भोजन", "More meal dishes":"भोजन के और व्यंजन", "Meal dishes":"भोजन के व्यंजन",
    "6-dish meals":"छह व्यंजनों वाले भोजन", "5-dish meals":"पाँच व्यंजनों वाले भोजन", "4-dish meals":"चार व्यंजनों वाले भोजन",
    "6-dish meal":"छह व्यंजनों वाला भोजन", "5-dish meal":"पाँच व्यंजनों वाला भोजन", "4-dish meal":"चार व्यंजनों वाला भोजन",
    "Rice omitted after six-dish combinations are exhausted.":"छह व्यंजनों वाले भोजन के विकल्प समाप्त होने पर चावल छोड़ दिया गया है।",
    "Rice and curd omitted after longer combinations are exhausted.":"बड़े भोजन के विकल्प समाप्त होने पर चावल और दही छोड़ दिए गए हैं।",
    "complete sets":"पूरे भोजन के सेट", "ready with your pantry":"आपकी उपलब्ध सामग्री से तैयार",
    "need more ingredients":"और सामग्री चाहिए", "Region filter active":"क्षेत्र का फ़िल्टर लागू है",
    "No complete six-dish meals match these filters.":"इन फ़िल्टर के अनुसार छह व्यंजनों का कोई पूरा भोजन नहीं मिला।",
    "No complete meals match these filters.":"इन फ़िल्टर के अनुसार कोई पूरा भोजन नहीं मिला।",
    "Full catalog search; Veg/Hostel Mode still applies":"पूरी व्यंजन सूची में खोज; शाकाहारी/हॉस्टल मोड लागू है",
    "All catalog dishes in your current Veg/Hostel Mode. Time, region and occasion filters are paused.":"मौजूदा शाकाहारी/हॉस्टल मोड में सभी व्यंजन। समय, क्षेत्र और अवसर के फ़िल्टर अभी लागू नहीं हैं।",
    "Cook chicken to 74°C (165°F) in the thickest part, away from bone.":"चिकन के सबसे मोटे हिस्से में, हड्डी से दूर, अंदरूनी तापमान 74°C (165°F) तक पकाएँ।",
    "Cook fish to 63°C (145°F) in the thickest part.":"मछली के सबसे मोटे हिस्से का अंदरूनी तापमान 63°C (145°F) तक पकाएँ।",
    "Cook prawns until the flesh is pearly and opaque throughout.":"झींगे तब तक पकाएँ जब तक उनका गूदा पूरी तरह अपारदर्शी और मोती जैसा न हो जाए।",
    "Cook ground goat or lamb to 71°C (160°F) in the centre.":"कीमा किए बकरे या मेमने के मांस को बीच में 71°C (160°F) तक पकाएँ।",
    "Cook eggs until whites and yolks are firm. For mixed egg dishes, check for 71°C (160°F) in the centre.":"अंडे की सफेदी और जर्दी जमने तक पकाएँ। अंडे वाले मिश्रित व्यंजन के बीच में 71°C (160°F) तापमान जाँचें।"
  })) offline.set(source, hindi);
  const recipeTerms = Object.assign(Object.create(null), {
    aloo:"आलू",gobi:"गोभी",dal:"दाल",paneer:"पनीर",masala:"मसाला",matar:"मटर",palak:"पालक",
    bhindi:"भिंडी",methi:"मेथी",gajar:"गाजर",halwa:"हलवा",chawal:"चावल",kheer:"खीर",roti:"रोटी",
    paratha:"पराठा",puri:"पूरी",poori:"पूरी",sabzi:"सब्ज़ी",sabji:"सब्ज़ी",curry:"करी",rice:"चावल",
    chicken:"चिकन",mutton:"मटन",fish:"मछली",egg:"अंडा",eggs:"अंडे",soup:"सूप",salad:"सलाद",
    chutney:"चटनी",raita:"रायता",lassi:"लस्सी",chaas:"छाछ",milk:"दूध",bread:"ब्रेड",butter:"मक्खन",
    cheese:"चीज़",tomato:"टमाटर",potato:"आलू",onion:"प्याज़",garlic:"लहसुन",ginger:"अदरक",
    mint:"पुदीना",coconut:"नारियल",mushroom:"मशरूम",sweet:"मीठा",corn:"मक्का",green:"हरा",
    fried:"तला हुआ",roasted:"भुना हुआ",stuffed:"भरवाँ",mixed:"मिक्स",vegetable:"सब्ज़ी",vegetables:"सब्ज़ियाँ",
    north:"उत्तर",south:"दक्षिण",indian:"भारतीय",rajasthani:"राजस्थानी",punjabi:"पंजाबी",
    bengali:"बंगाली",gujarati:"गुजराती",kashmiri:"कश्मीरी",pahadi:"पहाड़ी",andhra:"आंध्र",
    with:"के साथ",and:"और",without:"बिना",lemon:"नींबू",beetroot:"चुकंदर",carrot:"गाजर",
    pumpkin:"कद्दू",spinach:"पालक",riceflour:"चावल का आटा",chilli:"मिर्च",chili:"मिर्च",
    dosa:"डोसा",idli:"इडली",uttapam:"उत्तपम",upma:"उपमा",poha:"पोहा",vada:"वड़ा",
    tikka:"टिक्का",kebab:"कबाब",biryani:"बिरयानी",pulao:"पुलाव",khichdi:"खिचड़ी",
    noodles:"नूडल्स",pasta:"पास्ता",pizza:"पिज़्ज़ा",sandwich:"सैंडविच",roll:"रोल",
    cake:"केक",ladoo:"लड्डू",laddu:"लड्डू",jamun:"जामुन",gulab:"गुलाब",pakora:"पकौड़ा",
    pakoda:"पकौड़ा",dahi:"दही",chaat:"चाट",besan:"बेसन",mawa:"मावा",atta:"आटा"
  });
  const recipeTitles = new Set();
  function builtIn(source) {
    if (offline.has(source)) return offline.get(source);
    if (packaged.has(source)) return packaged.get(source);
    const serves = /^Serves (\d+)$/.exec(source);
    if (serves) return `${serves[1]} लोगों के लिए`;
    const regions = /^Regions \((\d+) of (\d+) on\)$/.exec(source);
    if (regions) return `क्षेत्र (${regions[2]} में से ${regions[1]} चुने हुए)`;
    const duration = /^(\d+(?:\.\d+)?) (min|hr)$/.exec(source);
    if (duration) return `${duration[1]} ${duration[2] === 'min' ? 'मिनट' : 'घंटे'}`;
    const itemCount = /^(\d+) (?:dishes|dish)$/.exec(source);
    if (itemCount) return `${itemCount[1]} व्यंजन`;
    const shownCount = /^(\d+) of (\d+) dishes(?: shown)?$/.exec(source);
    if (shownCount) return `${shownCount[2]} में से ${shownCount[1]} व्यंजन दिखाए गए`;
    const progressivelyShown = /^(\d+) of (\d+) dishes · more load as you scroll$/.exec(source);
    if (progressivelyShown) return `${progressivelyShown[2]} में से ${progressivelyShown[1]} व्यंजन · नीचे स्क्रॉल करने पर और दिखेंगे`;
    const suggestionCount = /^(\d+) dishes · (\d+) shown$/.exec(source);
    if (suggestionCount) return `${suggestionCount[1]} व्यंजन · ${suggestionCount[2]} दिखाए गए`;
    const showAll = /^Show all (\d+) remaining dishes$/.exec(source);
    if (showAll) return `बाकी सभी ${showAll[1]} व्यंजन दिखाएँ`;
    const moreCount = /^Show (\d+) more dishes$/.exec(source);
    if (moreCount) return `${moreCount[1]} और व्यंजन दिखाएँ`;
    const foundCount = /^(\d+) found$/.exec(source);
    if (foundCount) return `${foundCount[1]} व्यंजन मिले`;
    const buy = /^\+(\d+) to buy$/.exec(source);
    if (buy) return `खरीदने के लिए ${buy[1]} चीज़ें`;
    const needed = /^Need (.+)$/.exec(source);
    if (needed) {
      const items = needed[1].split(/,\s*/);
      const names = items.map(item => offline.get(item) || packaged.get(item));
      if (names.every(Boolean)) return `चाहिए: ${names.join(', ')}`;
    }
    const withTime = /^(?:⏱\s*)?(\d+) min$/.exec(source);
    if (withTime) return `⏱ ${withTime[1]} मिनट`;
    if (source.includes(' · ')) {
      const parts = source.split(' · ');
      const translations = parts.map(part => part === source ? null : builtIn(part));
      if (translations.every(Boolean)) return translations.join(' · ');
    }
    if (!recipeTitles.has(source)) return null;
    // For romanized dish titles, a partial native-language name is preferable
    // to a completely English label. Never apply this to cooking directions.
    let found = false;
    const parts = source.split(/(\s+|[-(),/&])/).map(part => {
      const value = recipeTerms[part.toLowerCase()];
      if (value) found = true;
      return value || part;
    });
    return found ? parts.join("").replace(/\s+/g, " ").trim() : null;
  }
  const cache = new Map();
  const records = new WeakMap();
  const pending = new Map();
  const failed = new Map();
  const urgent = new Set(), background = new Set();
  const roots = new Set();
  const attributes = ["aria-label", "aria-description", "title", "placeholder", "alt"];
  const ignored = "script,style,noscript,template,[translate=no]";
  let language = "en", active = 0, frame, flush, save, retry, scroll, cooldownUntil = 0;

  function read(node, attribute) {
    return attribute ? node.getAttribute(attribute) : node.data;
  }

  function record(node, attribute) {
    let fields = records.get(node);
    if (!fields) records.set(node, fields = new Map());
    const value = read(node, attribute);
    let entry = fields.get(attribute);
    if (!entry || (value !== entry.source && value !== entry.output)) {
      entry = { source: value, output: null, waiting: false };
      fields.set(attribute, entry);
    }
    return entry;
  }

  function write(node, attribute, value) {
    if (read(node, attribute) === value) return;
    if (attribute) node.setAttribute(attribute, value);
    else node.data = value;
  }

  function target(node, attribute) {
    const element = attribute ? node : node.parentElement;
    return element?.closest(ignored) ? "en" : language;
  }

  function apply(node, attribute, entry, translated) {
    if (record(node, attribute) !== entry || entry.source == null) return;
    if (translated == null) {
      write(node, attribute, entry.source);
      return;
    }
    entry.output = entry.source.replace(entry.source.trim(), () => translated);
    write(node, attribute, entry.output);
  }

  function persist() {
    clearTimeout(save);
    save = null;
    try { localStorage.setItem(cacheKey, JSON.stringify([...cache].slice(-3000))); } catch {}
  }

  async function fetchGroup(sources) {
    const query = sources.map((text, i) => i ? `[${String(i).padStart(4, "0")}]\n${text}` : text).join("\n");
    const url = new URL(endpoint);
    url.search = new URLSearchParams({ client: "gtx", sl: "en", tl: "hi", dt: "t", q: query });
    const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!response.ok) throw Error("Google Translate returned an error");
    const data = await response.json();
    const result = data[0]?.filter(part => typeof part?.[0] === "string").map(part => part[0]).join("") || "";
    if (sources.length === 1 && result.trim()) return [result.trim()];
    const parts = result.split(/\s*\[(\d{4})\]\s*/);
    if (parts.length === sources.length * 2 - 1 &&
        sources.every((_, i) => parts[i * 2].trim() && (!i || Number(parts[i * 2 - 1]) === i))) {
      return sources.map((_, i) => parts[i * 2].trim());
    }
    if (sources.length === 1) throw Error("Google Translate returned empty text");
    // A marker can be changed by the service. Split the request instead of applying mismatched text.
    const middle = Math.ceil(sources.length / 2);
    const first = await fetchGroup(sources.slice(0, middle));
    return first.concat(await fetchGroup(sources.slice(middle)));
  }

  function finish(sources, values) {
    sources.forEach((source, i) => {
      const value = values?.[i] || null;
      if (value) {
        cache.set(source, value);
        failed.delete(source);
      } else {
        failed.set(source, Date.now());
      }
      pending.get(source)?.resolve(value);
      pending.delete(source);
    });
    if (values) {
      if (!save) save = setTimeout(persist, 400);
    } else {
      // If Google presents a CAPTCHA or rejects the request, hammering the
      // service every five seconds keeps Hindi broken and can prolong a block.
      cooldownUntil = Date.now() + 5 * 60 * 1000;
      if (!retry && language === "hi") retry = setTimeout(() => {
        retry = null;
        cooldownUntil = 0;
        failed.clear();
        queue(document.body);
        const title = document.querySelector("title");
        if (title) queue(title);
      }, 5 * 60 * 1000);
    }
  }

  function drain() {
    flush = null;
    while (active < 3 && (urgent.size || background.size)) {
      const sources = [];
      let size = 0;
      for (const source of [...urgent, ...background]) {
        const length = encodeURIComponent(source).length + 24;
        if (sources.length && (size + length > 3800 || sources.length >= 24)) break;
        sources.push(source);
        size += length;
        urgent.delete(source); background.delete(source);
      }
      active++;
      if (Date.now() < cooldownUntil) {
        finish(sources);
        active--;
        continue;
      }
      fetchGroup(sources).then(values => finish(sources, values), () => finish(sources))
        .finally(() => { active--; schedule(); });
    }
  }

  function schedule() {
    if (!flush && active < 3 && (urgent.size || background.size)) flush = setTimeout(drain, 35);
  }

  function request(source, priority = true) {
    const ready = cache.get(source) || builtIn(source);
    if (ready) return Promise.resolve(ready);
    if (Date.now() < cooldownUntil) return Promise.resolve(null);
    if (Date.now() - (failed.get(source) || 0) < 5000) return Promise.resolve(null);
    let entry = pending.get(source);
    if (!entry) {
      entry = {};
      entry.promise = new Promise(resolve => { entry.resolve = resolve; });
      pending.set(source, entry);
      (priority ? urgent : background).add(source);
      schedule();
    } else {
      if (priority && background.delete(source)) urgent.add(source);
    }
    return entry.promise;
  }

  function nearViewport(element) {
    if (element.tagName === "TITLE") return true;
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && rect.bottom > -100 &&
      rect.top < innerHeight + 180 && rect.right > -100 && rect.left < innerWidth + 100;
  }

  function translate(node, attribute = "") {
    const entry = record(node, attribute);
    if (target(node, attribute) === "en") return apply(node, attribute, entry, null);
    const source = entry.source?.trim();
    if (!source || !/\p{Script=Latin}/u.test(source) || /^(?:https?:\/\/|@\S+$|\S+@\S+$)/i.test(source)) return;
    const ready = cache.get(source) || builtIn(source);
    if (ready) return apply(node, attribute, entry, ready);
    const priority = nearViewport(attribute ? node : node.parentElement);
    if (entry.waiting) {
      if (priority && background.delete(source)) urgent.add(source);
      return;
    }
    entry.waiting = true;
    request(source, priority).then(value => {
      entry.waiting = false;
      if (value && node.isConnected && target(node, attribute) === "hi") apply(node, attribute, entry, value);
    });
  }

  function scan(node, restore = false) {
    if (node.nodeType === Node.TEXT_NODE) return translate(node);
    if (!(node instanceof Element) || node.matches(ignored) || (!restore && node.closest(ignored))) return;
    if (!restore && node.tagName !== "TITLE" &&
        (node.hidden || (node.matches("dialog") && !node.open) || getComputedStyle(node).display === "none")) return;
    for (const attribute of attributes) if (node.hasAttribute(attribute)) translate(node, attribute);
    if (!restore && node.matches("details:not([open])")) {
      const summary = node.querySelector(":scope > summary");
      if (summary) scan(summary);
      return;
    }
    for (const child of node.childNodes) scan(child, restore);
  }

  function update() {
    frame = null;
    const batch = [...roots];
    roots.clear();
    for (const node of batch) if (node.isConnected) scan(node);
  }

  function queue(root) {
    if (language !== "hi") return;
    roots.add(root);
    if (!frame) frame = requestAnimationFrame(update);
  }

  const observer = new MutationObserver(changes => {
    for (const change of changes) {
      if (change.type === "childList") {
        for (const node of change.addedNodes) queue(node);
      } else if (change.type === "characterData") {
        queue(change.target);
      } else if (attributes.includes(change.attributeName)) {
        translate(change.target, change.attributeName);
      } else {
        queue(change.target);
      }
    }
  });

  function setLanguage(value) {
    if (value === language) return;
    language = value;
    observer.disconnect();
    if (value === "en") {
      clearTimeout(retry);
      clearTimeout(flush);
      retry = null;
      flush = null;
      cooldownUntil = 0;
      roots.clear();
      for (const source of [...urgent, ...background]) {
        pending.get(source)?.resolve(null);
        pending.delete(source);
      }
      urgent.clear();
      background.clear();
      scan(document.body, true);
      if (document.querySelector("title")) scan(document.querySelector("title"), true);
      return;
    }
    try {
      for (const [source, translated] of JSON.parse(localStorage.getItem(cacheKey) || "[]")) {
        if (!cache.has(source)) cache.set(source, translated);
      }
    } catch {}
    observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true,
      attributes: true, attributeFilter: [...attributes, "open", "hidden", "translate", "data-v", "data-collection"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    queue(document.body);
    if (document.querySelector("title")) queue(document.querySelector("title"));
  }

  addEventListener("online", () => {
    clearTimeout(retry); retry = null;
    cooldownUntil = 0;
    failed.clear(); queue(document.body);
  });
  addEventListener("pagehide", () => { if (save) persist(); });
  document.addEventListener("scroll", event => {
    if (language !== "hi") return;
    clearTimeout(scroll);
    scroll = setTimeout(() => queue(event.target instanceof Element ? event.target : document.body), 120);
  }, { capture: true, passive: true });
  document.addEventListener("hatri:view-change", () => queue(document.body));

  return {
    setLanguage,
    source(node, attribute = "") {
      const entry = records.get(node)?.get(attribute);
      const value = read(node, attribute);
      return entry && value === entry.output ? entry.source : value;
    },
    lookup(text) { return cache.get(text) || builtIn(text); },
    seedCatalog(recipes) {
      for (const recipe of recipes) if (typeof recipe?.[0] === "string") recipeTitles.add(recipe[0]);
    },
    warm(texts, onProgress, onSettled) {
      for (const text of texts) {
        if (!/\p{Script=Latin}/u.test(text)) { onSettled(text); continue; }
        request(text, false).then(value => { if (value) onProgress(); })
          .finally(() => onSettled(text));
      }
    },
  };
})();
