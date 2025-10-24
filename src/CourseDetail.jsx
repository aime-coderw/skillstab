import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CourseDetail.css";
import { Link } from "react-router-dom";

export default function CourseDetail() {
  const { category, courseSlug } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");

  const [enSlug, rwSlug] = courseSlug.split("--");

  const normalizeKey = (key) =>
    key.toLowerCase().replace(/[^a-z0-9-]/g, "");

  const courseKey = normalizeKey(enSlug);

  // Course details
  const courseDetails = {
  "culinary-skills": {
    "baking-bread-cakes-and-pastries": {
  en: {
    title: "Baking: Bread, Cakes & Pastries",
    description: [
      {
        step: "Step 1",
        details:
          "Gather all your ingredients: flour, yeast, sugar, eggs, butter, milk, and salt. Make sure to measure accurately — baking is a science that requires precision.",
      },
      {
        step: "Step 2",
        details:
          "Prepare your dough or batter depending on what you’re making. For bread, mix flour, yeast, water, and salt; for cakes and pastries, cream butter and sugar before adding eggs and flour.",
      },
      {
        step: "Step 3",
        details:
          "Knead the dough for bread or pastries until smooth and elastic. For cakes, mix gently to keep it soft and fluffy. Avoid overmixing to prevent dense texture.",
      },
      {
        step: "Step 4",
        details:
          "Allow bread or pastry dough to rise in a warm place until it doubles in size. This process, called proofing, helps create light and airy baked goods.",
      },
      {
        step: "Step 5",
        details:
          "Preheat your oven to the recommended temperature (usually between 170°C and 200°C). Always preheat to ensure even baking.",
      },
      {
        step: "Step 6",
        details:
          "Bake according to the recipe: bread for 25–35 minutes, cakes for 30–40 minutes, and pastries until golden brown. Check with a toothpick or by tapping the bottom for a hollow sound.",
      },
      {
        step: "Step 7",
        details:
          "Cool your baked goods on a wire rack before slicing or decorating. Cooling helps set the texture and prevents sogginess.",
      },
      {
        step: "Step 8",
        details:
          "Optional: Decorate cakes with frosting, glaze pastries with egg wash, or brush melted butter on freshly baked bread for shine and flavor.",
      },
      {
        step: "Step 9",
        details:
          "Store properly: keep bread in breathable bags, cakes in airtight containers, and pastries in a cool, dry place. Serve with love and creativity!",
      }
    ],
    pdf: "/pdfs/Bakers-Choice-Recipe-Book.pdf",
    video: "https://www.youtube.com/watch?v=vKTBBc13o88",
    duration: "2 hours 30 minutes",
    difficulty: "Beginner–Intermediate",
    materials: [
      "Flour (all-purpose, bread, or cake flour)",
      "Yeast or baking powder",
      "Sugar and salt",
      "Eggs and milk",
      "Butter or oil",
      "Oven and baking trays",
      "Measuring cups and mixing bowls"
    ],
  },

     rw: {
    title: "Gukora Imigati, Amandazi, Cake n’ibindi",
    description: [
      { step: "Intambwe 1", details: "Tegura ibikoresho byose uzakenera: ifu, isukari, amagi, amavuta, umusemburo (levure), amata, n’ibyongera uburyohe nka vanila cyangwa kakao ndetse n'amazi y'akazuyazi." },
      { step: "Intambwe 2", details: "Fata ibipimo neza. Mu guteka imigati cyangwa cake, gupima neza birakenewe kugira ngo bigire uburyohe n’imiterere myiza." },
      { step: "Intambwe 3", details: "Banza uvange ibikoresho bikomeye (ifu, isukari, umusemburo, umunyu)mu mazi y'akazuyazi, hanyuma wongeremo ibinyamazi (amagi, amata, amavuta) bikore umutsima." },
      { step: "Intambwe 4", details: "Vanga kugeza bigaragaza aho bigaragaza ko byivanze neza kandi byoroshye. Ibi bifasha gukora gluten ituma umugati cyangwa cake byoroha." },
      { step: "Intambwe 5", details: "Reka umutsima ubyimbe (uzamuke)uri ahantu hashyushye nk'iminota 30–60 kugeza wiyongereye inshuro ebyiri, cyane cyane ku migati n’amandazi." },
      { step: "Intambwe 6", details: "Banza ushyushye ifuru cyangwa ipanu yawe mbere yo gushyiramo ibyo wateguye, ubushyushye buri hagati ya 170°C–200°C." },
      { step: "Intambwe 7", details: "Shyira umutsima mu mavuta, hanyuma utegereze igihe giteganyijwe(iminota 25–35 kumandazi, iminota 30–40 kuri cake), wemeze ko bihiye urebeye uko ibara ryahindutse cyangwa ukozeho." },
      { step: "Intambwe 8", details: "Reka bikonje mbere yo kubihindura cyangwa kubishyiraho decoration. Ku cake, ushobora gushyiraho cream, icing n'ibindi binyaburyohe." },
      { step: "Intambwe 9", details: "Bibike neza mu gikoresho gifunze neza (airtight container) kugira ngo bigumane ubwiza n’uburyohe, cyangwa ubishyire muri firigo niba bikenewe." },
    ],
    pdf: "/pdfs/Bakers-Choice-Recipe-Book.pdf",
    video: "https://www.youtube.com/watch?v=DZEubGJj6as",
     duration: "2 hours 30 minutes",
    difficulty: "Beginner–Intermediate",
    materials: [
      "Flour (all-purpose, bread, or cake flour)",
      "Yeast or baking powder",
      "Sugar and salt",
      "Eggs and milk",
      "Butter or oil",
      "Oven and baking trays",
      "Measuring cups and mixing bowls"
    ]
  },
    },
    "cooking-local-international-dishes": {
  en: {
    title: "Cooking: Local & International Dishes",
    description: [
      {
        step: "Step 1: Gather Ingredients",
        details:
          "Collect all necessary ingredients for the dishes you plan to cook. For local dishes, choose fresh vegetables, meat, spices, and staple foods like rice or beans. For international dishes, ensure you have the required herbs, sauces, and specialty ingredients."
      },
      {
        step: "Step 2: Prepare Ingredients",
        details:
          "Wash, peel, chop, and marinate ingredients as required. Proper preparation ensures even cooking and better flavors."
      },
      {
        step: "Step 3: Understand Cooking Methods",
        details:
          "Learn different cooking techniques such as boiling, frying, sautéing, steaming, grilling, and baking. Each dish may require a specific method."
      },
      {
        step: "Step 4: Cook Local Dishes",
        details:
          "Follow recipes for your local dishes. Pay attention to traditional flavors and timings, such as simmering beans or boiling rice properly."
      },
      {
        step: "Step 5: Cook International Dishes",
        details:
          "Follow international recipes carefully, noting unique ingredients and techniques. Examples include making pasta, stir-fry, or curries."
      },
      {
        step: "Step 6: Taste and Adjust Seasoning",
        details:
          "Taste the dishes during cooking and adjust salt, spices, or herbs accordingly to achieve the desired flavor."
      },
      {
        step: "Step 7: Plate and Serve",
        details:
          "Present your dishes neatly on plates or serving dishes. Garnish with fresh herbs or condiments to enhance visual appeal."
      },
      {
        step: "Step 8: Clean Up",
        details:
          "Wash all utensils, cutting boards, and cooking surfaces after preparing your dishes to maintain a clean and safe kitchen."
      }
    ],
    materials: [
      "Fresh vegetables and fruits",
      "Meat, poultry, or fish",
      "Spices and herbs",
      "Staple foods (rice, beans, pasta, etc.)",
      "Cooking oils and sauces",
      "Cooking utensils (pots, pans, knives, cutting boards, etc.)",
      "Measuring cups and spoons",
      "Plates and serving dishes"
    ],
    pdf: "/pdfs/cookbook.pdf",
    video: "https://www.youtube.com/watch?v=PuSy66cS8HE",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Guteka Ibiryo Gakondo n’Ibyo ku Isi Hose",
    description: [
      {
        step: "Intambwe 1: Tunganya Ibikoresho",
        details:
          "Shaka ibikoresho byose bikenewe ku biryo wifuza guteka. Ku biryo gakondo, hitamo imboga nshya, inyama, ibirungo, n’ibiribwa by’ingenzi nk'umuceri cyangwa ibishyimbo. Ku biryo byo ku isi hose, tegura ibirungo, sauces, n’ibindi bikoresho byihariye."
      },
      {
        step: "Intambwe 2: Tegura Ibikoresho",
        details:
          "Ongera usukure ibikoresho nk’uko bikenewe. Gutegura neza bifasha guteka neza no kongera uburyohe."
      },
      {
        step: "Intambwe 3: Menya Uburyo bwo Guteka",
        details:
          "Menya uburyo butandukanye bwo guteka nko gutogosa, guteka mu mavuta, sautéing, steaming, grilling, no guteka mu ifuru. Buri biryo bisaba uburyo bwihariye."
      },
      {
        step: "Intambwe 4: Tegura Ibiryo Gakondo",
        details:
          "Kurikirana uburyo bwo guteka ibiryo gakondo. Witondere uburyohe gakondo n’igihe cyo guteka, nko gutogosa ibishyimbo cyangwa guteka umuceri neza."
      },
      {
        step: "Intambwe 5: Tegura Ibiryo byo ku Isi Hose",
        details:
          "Kurikirana uburyo bwo gutegura amafunguro yo ku isi yose witonze, ukurikije ibikoresho n’uburyo byihariye. Urugero: guteka pasta, stir-fry, cyangwa curry."
      },
      {
        step: "Intambwe 6: Gerageza Uburyohe",
        details:
          "Gerageza uburyohe bw’ibiryo mu gihe utetse, wongeremo umunyu, ibirungo cyangwa ibindi uko bikenewe kugirango bigire uburyohe bushimishije."
      },
      {
        step: "Intambwe 7: Shyira ku Isahani",
        details:
          "Tegura ibiryo neza ku isahani cyangwa ku gikoresho cyo kubiteguramo mu buryo bushimishe amaso."
      },
      {
        step: "Intambwe 8: Sukura",
        details:
          "Ongera koza ibikoresho byose, amasahani, n’ahakorerwa guteka nyuma yo guteka kugirango ugumane isuku n’umutekano mu gikoni."
      }
    ],
    materials: [
      "Imboga n’imbuto nshya",
      "Inyama, inkoko, cyangwa amafi",
      "Ibirungo",
      "Ibiribwa by’ingenzi (umuceri, ibishyimbo, ifu, n'ibindi.)",
      "Amavuta yo guteka",
      "Ibikoresho byo gutekamo (amasafuriya, inkono, amasahani, n'ibindi.)",
      "Ibipimo (ibikombe, ibiyiko)",
      "Amasahani n’ahakorerwa"
    ],
    pdf: "/pdfs/cookbook.pdf",
    video: "https://www.youtube.com/watch?v=PuSy66cS8HE",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },
},

    "food-preservation-packaging": {
  en: {
    title: "Food Preservation & Packaging",
    description: [
      {
        step: "Step 1: Understand Preservation Methods",
        details:
          "Learn different food preservation techniques including freezing, drying, canning, pickling, refrigeration, and vacuum sealing. Each method is suitable for specific types of food."
      },
      {
        step: "Step 2: Gather Materials and Equipment",
        details:
          "Collect jars, bottles, airtight containers, vacuum sealers, freezer bags, labels, and measuring tools. Proper equipment ensures safety and longer shelf life."
      },
      {
        step: "Step 3: Prepare Food",
        details:
          "Wash, peel, cut, or blanch fruits, vegetables, and other ingredients as required by the preservation method."
      },
      {
        step: "Step 4: Apply Preservation Technique",
        details:
          "Follow the steps for the chosen method. For example, blanch vegetables before freezing, or sterilize jars before canning."
      },
      {
        step: "Step 5: Packaging",
        details:
          "Package food in appropriate containers that protect from moisture, air, and light. Use labels with dates and contents for easy tracking."
      },
      {
        step: "Step 6: Storage",
        details:
          "Store preserved foods in suitable conditions: freezer for frozen items, cool dark place for canned or dried goods, and refrigerator for perishable items."
      },
      {
        step: "Step 7: Monitor and Maintain",
        details:
          "Regularly check stored food for spoilage. Rotate older items first to reduce waste and maintain freshness."
      }
    ],
    materials: [
      "Fresh fruits, vegetables, or meats",
      "Jars, bottles, or airtight containers",
      "Freezer bags or vacuum sealers",
      "Labels and markers",
      "Measuring cups and spoons",
      "Boiling pot for blanching",
      "Sterilizing equipment"
    ],
    pdf: "/pdfs/267109.pdf",
    video: "https://www.youtube.com/watch?v=kx2vo3LKe7Y",
    duration: "2 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Kubika no Gupfunyika Ibiryo Neza",
    description: [
      {
        step: "Intambwe 1: Menya Uburyo bwo Kubika Ibiryo",
        details:
          "Menya uburyo butandukanye bwo kubika ibiryo harimo gukonjesha, gushyushya, gupfunyika mu macupa, pickling, gushyira mu firigo, no vacuum sealing. Buri buryo bukwiye ku biryo runaka."
      },
      {
        step: "Intambwe 2: Tunganya Ibikoresho",
        details:
          "Shaka amacupa, ibikapu, ibipfundikirwa bidahitisha umwuka, vacuum sealers, labels, n’ibikoresho byo gupima. Ibikoresho bikwiye birinda ibiryo ndetse bikaramba igihe kirekire."
      },
      {
        step: "Intambwe 3: Tegura Ibiryo",
        details:
          "Sukura, kata, cyangwa ukamure imbuto, imboga n’ibindi, uko bikenewe mu uburyo bwo kubibika."
      },
      {
        step: "Intambwe 4: Shyira mu Bikorwa Uburyo bwo Kubika",
        details:
          "Kurikirana intambwe z’uburyo wahisemo. Urugero, kata imboga mbere yo kuzikonjesha cyangwa usterilizinge amacupa mbere yo kuyabikamo ibiryo."
      },
      {
        step: "Intambwe 5: Gupfunyika",
        details:
          "Pfunyika ibiryo mu bikoresho bikwiye birinda amazi, umwuka n’urumuri. Shyiraho labels zifite itariki n’icyo ari cyo kugirango bikorohereze kubikurikirana."
      },
      {
        step: "Intambwe 6: Kubika",
        details:
          "Bika ibiryo ahantu hakwiye: firigo ku byo gukonjesha, ahantu hakonje kandi hakomeye ku byo gupfunyika mu macupa cyangwa gushyushya, na firigo ku biryo byoroheje."
      },
      {
        step: "Intambwe 7: Kugenzura no Kubungabunga",
        details:
          "Reba ibiryo bikiri mu bubiko kenshi kugirango urebe niba bitangirika. Shyira imbere ibiryo bimaze igihe kugirango wirinde gupfusha ibiryo ubusa kandi bibike uburyohe."
      }
    ],
    materials: [
      "Imbuto, imboga, cyangwa inyama nshya",
      "Amacupa, ibikapu, cyangwa ibipfundikirwa bidahitisha umwuka",
      "Freezer bags cyangwa vacuum sealers",
      "Labels na markers",
      "Ibipimo (ibikombe, ibiyiko)",
      "Igisuperi",
    ],
    pdf: "/pdfs/267109.pdf",
    video: "https://www.youtube.com/watch?v=kx2vo3LKe7Y",
    duration: "2 hours",
    difficulty: "Beginner–Intermediate"
  },
},

   "juice-smoothie-making": {
  en: {
    title: "Juice & Smoothie Making",
    description: [
      {
        step: "Step 1: Select Fresh Ingredients",
        details:
          "Choose fresh fruits and vegetables. For smoothies, you can also add yogurt, milk, or plant-based milk, and optional sweeteners like honey or dates."
      },
      {
        step: "Step 2: Wash and Prepare",
        details:
          "Wash all ingredients thoroughly. Peel, core, and chop fruits and vegetables as needed to fit into the blender or juicer."
      },
      {
        step: "Step 3: Choose Your Method",
        details:
          "Decide whether to use a blender for smoothies or a juicer for fresh juice. Smoothies retain the fiber, while juice gives a more concentrated liquid."
      },
      {
        step: "Step 4: Blend or Juice",
        details:
          "Add ingredients into the blender or juicer. For smoothies, blend until smooth. For juice, process according to the juicer's instructions."
      },
      {
        step: "Step 5: Adjust Flavor & Consistency",
        details:
          "Taste your drink and adjust sweetness or thickness. Add water, ice, or milk to adjust consistency, or honey/fruit to sweeten if needed."
      },
      {
        step: "Step 6: Serve and Garnish",
        details:
          "Pour into glasses or cups. Optionally garnish with mint leaves, fruit slices, or a sprinkle of seeds for presentation."
      },
      {
        step: "Step 7: Storage & Tips",
        details:
          "Consume fresh juice immediately for maximum nutrients. Smoothies can be stored in airtight containers in the refrigerator for up to 24 hours."
      }
    ],
    materials: [
      "Fresh fruits and vegetables",
      "Blender or juicer",
      "Measuring cups and spoons",
      "Knife and cutting board",
      "Glasses or cups",
      "Optional: yogurt, milk, sweeteners, ice, seeds, mint leaves"
    ],
    pdf: "/pdfs/juice-making.pdf",
    video: "https://www.youtube.com/watch?v=w6IjwKOB_t8",
    duration: "1 hour 30 minutes",
    difficulty: "Beginner"
  },
  rw: {
    title: "Gukora Imitobe n’Ibinyobwa",
    description: [
      {
        step: "Intambwe 1: Hitamo Ibikoresho Bishya",
        details:
          "Hitamo imbuto n’imboga bishya. Ku binyobwa bya smoothie, ushobora kongeramo yogurt, amata, cyangwa amata aturuka ku bimera, hamwe n’isukari kamere nk'ubuki."
      },
      {
        step: "Intambwe 2: Gusukura no Gutegura",
        details:
          "Sukura neza ibikoresho byose. Kuraho uruhu, imizi, kandi ukate imbuto n’imboga kugirango bijye muri blender cyangwa juicer."
      },
      {
        step: "Intambwe 3: Hitamo Uburyo bwo Gukora",
        details:
          "Hitamo niba uzakoresha blender kuri smoothie cyangwa juicer ku mitobe. Smoothies zigumana fiber, mu gihe imitobe iba irimo amazi gusa."
      },
      {
        step: "Intambwe 4: Vanga cyangwa Sukura",
        details:
          "Shyira ibikoresho muri blender cyangwa juicer. Kuri smoothie, vanga kugeza byoroshye. Ku mitobe, kora uko juicer yawe uko ubiteganya."
      },
      {
        step: "Intambwe 5: Hindura Impumuro n’Uburyo",
        details:
          "Gerageza ikinyobwa cyawe, wongeremo isukari cyangwa amazi cyangwa amata kugirango ubone uburyohe mu buryo ushaka."
      },
      {
        step: "Intambwe 6: Shyira mu Icyuma no Gushushanya",
        details:
          "Suka mu byombo cyangwa ibikombe. Ushobora kongeramo amashami ya mint, imbuto, cyangwa imbuto zitetse neza ku isura."
      },
      {
        step: "Intambwe 7: Kubika & Inama",
        details:
          "Kunywa imitobe ako kanya kugirango irusheho kugira intungamubiri. Smoothies ushobora kuyibika mu bikoresho bidafite umwuka cyangwa muri firigo kugeza ku masaha 24."
      }
    ],
    materials: [
      "Imbuto n’imboga bishya",
      "Blender cyangwa juicer",
      "Ibipimo (ibikombe n'ibiyiko)",
      "Umurongo wo gukata n’akameza ko gukatiraho",
      "Ibikombe cyangwa ibyombo byo kunyweramo",
      "Optional: yogurt, amata, isukari, ice, imbuto, amashami ya mint"
    ],
    pdf: "/pdfs/juice-making.pdf",
    video: "https://www.youtube.com/watch?v=w6IjwKOB_t8",
    duration: "1 hour 30 minutes",
    difficulty: "Beginner"
  }
},
    "coffee-barista-basics": {
  en: {
    title: "Coffee & Barista Basics",
    description: [
      {
        step: "Step 1: Understand Coffee Beans",
        details:
          "Learn about different types of coffee beans (Arabica, Robusta), their origins, and flavor profiles."
      },
      {
        step: "Step 2: Grinding Coffee",
        details:
          "Grind coffee beans according to the brewing method. Use coarse grind for French press, medium for drip coffee, and fine for espresso."
      },
      {
        step: "Step 3: Brewing Methods",
        details:
          "Master basic brewing methods: French press, drip coffee, espresso machine, and pour-over. Follow proper ratios and water temperature (usually 90–96°C)."
      },
      {
        step: "Step 4: Frothing Milk",
        details:
          "Learn how to steam and froth milk for cappuccinos and lattes. Practice creating smooth, velvety microfoam."
      },
      {
        step: "Step 5: Espresso Shots",
        details:
          "Pull perfect espresso shots: measure the coffee, tamp evenly, and extract for 25–30 seconds for balanced flavor."
      },
      {
        step: "Step 6: Latte Art Basics",
        details:
          "Practice simple latte art patterns like hearts, leaves, and rosettas using frothed milk and espresso."
      },
      {
        step: "Step 7: Cleaning & Maintenance",
        details:
          "Keep all equipment clean and maintained: espresso machines, grinders, milk frothers, and brewing devices."
      },
      {
        step: "Step 8: Serving & Presentation",
        details:
          "Serve coffee professionally with attention to presentation, cup cleanliness, and optional garnishes like cocoa powder or cinnamon."
      }
    ],
    materials: [
      "Coffee beans (Arabica, Robusta)",
      "Coffee grinder",
      "Espresso machine, French press, or drip coffee maker",
      "Milk frother or steam wand",
      "Measuring tools (scale, spoons)",
      "Cups and saucers",
      "Optional: cocoa powder, cinnamon, syrups"
    ],
    pdf: "/pdfs/coffee-brewing.pdf",
    video: "https://www.youtube.com/watch?v=VB65k0gwriU",
    duration: "2 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Gukora Kawa cyangwa Icyayi nka Barista",
    description: [
      {
        step: "Intambwe 1: Menya Ibyerekeye Ibinyobwa bya Kawa",
        details:
          "Menya ubwoko butandukanye bw’imbuto za kawa (Arabica, Robusta), inkomoko yazo, n’uburyohe butandukanye."
      },
      {
        step: "Intambwe 2: Gukata Kawa",
        details:
          "Kata imbuto za kawa ukurikije uburyo bwo kuyiteka. Ikawa nini kuri French press, medium ku drip coffee, fine ku espresso."
      },
      {
        step: "Intambwe 3: Uburyo bwo Guteka",
        details:
          "Menya uburyo butandukanye bwo guteka ikawa: French press, drip coffee, espresso machine, na pour-over. Kurikiza ingano y’amazi n’ubushyuhe (90–96°C)."
      },
      {
        step: "Intambwe 4: Gushyushya no Gushyiramo Amata",
        details:
          "Menya uko ushushanya amata ku cappuccino na latte. Gukora microfoam biroroshye kandi ihumura neza."
      },
      {
        step: "Intambwe 5: Gukora Espresso Shots",
        details:
          "Tegura espresso shots neza: pima kawa, tamping neza, hanyuma uyikuremo mu gihe cy'amasegonda 25–30 kugirango ibe ifite uburyohe bwiza."
      },
      {
        step: "Intambwe 6: Latte Art",
        details:
          "Wige gukora latte art yoroshye: imitima, leaves, na rosettas ukoresheje amata ashyushye na espresso."
      },
      {
        step: "Intambwe 7: Isuku n’Ubwitonzi",
        details:
          "Sukura kandi wite ku bikoresho byose: espresso machine, grinder, milk frother, n’ibikoresho byo guteka."
      },
      {
        step: "Intambwe 8: Gutanga no Kwerekana Neza",
        details:
          "Tanga kawa mu buryo bw’umwuga, witondere isuku y’ikopo, kandi ushobora kongeramo cocoa powder cyangwa cinnamon ku buryo bwiza."
      }
    ],
    materials: [
      "Intete za kawa (Arabica, Robusta)",
      "Grinder ya kawa",
      "Espresso machine, French press, cyangwa drip coffee maker",
      "Amata cyangwa steam wand",
      "Ibipimo (umunzani, ibiyiko)",
      "Ibyombo byo kunyweramo",
      "Optional: cocoa powder, cinnamon, syrups"
    ],
    pdf: "/pdfs/coffee-brewing.pdf",
    video: "https://www.youtube.com/watch?v=VB65k0gwriU",
    duration: "2 hours",
    difficulty: "Beginner–Intermediate"
  }
},

    "catering-event-management": {
       en: {
    title: "Catering & Event Management",
    description: [
      {
        step: "Step 1: Understand Event Types",
        details:
          "Learn about different events such as weddings, corporate functions, birthdays, and community gatherings. Each type has specific catering needs."
      },
      {
        step: "Step 2: Planning & Budgeting",
        details:
          "Plan the menu, guest count, and overall budget. Consider dietary restrictions, seasonal ingredients, and event theme."
      },
      {
        step: "Step 3: Menu Design",
        details:
          "Create appealing menus including appetizers, main courses, desserts, and beverages. Balance flavors, textures, and presentation."
      },
      {
        step: "Step 4: Food Preparation & Storage",
        details:
          "Prepare dishes safely and hygienically. Use proper food preservation and storage techniques to maintain freshness."
      },
      {
        step: "Step 5: Logistics & Staffing",
        details:
          "Organize transportation, equipment, and staff for serving. Assign roles such as chefs, servers, and coordinators."
      },
      {
        step: "Step 6: Setup & Presentation",
        details:
          "Set up serving stations, table arrangements, and decoration. Ensure food presentation is attractive and aligned with the event theme."
      },
      {
        step: "Step 7: Event Execution",
        details:
          "Manage timing, food replenishment, guest service, and problem-solving during the event. Keep communication clear with staff."
      },
      {
        step: "Step 8: Cleanup & Feedback",
        details:
          "Handle post-event cleanup efficiently. Collect feedback from clients and guests to improve future services."
      }
    ],
    materials: [
      "Menu planning templates",
      "Cooking and serving equipment",
      "Serving trays, chafing dishes, utensils",
      "Tableware and glassware",
      "Decorative items",
      "Staff uniforms",
      "Cleaning supplies"
    ],
    pdf: "/pdfs/IRFU_event-management-large.pdf",
    video: "https://www.youtube.com/watch?v=I-XjdcpfXoI",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },
      rw: {
    title: "Gutegura Ibiryo ku Birori cyangwa Ubucuruzi",
    description: [
      {
        step: "Intambwe 1: Menya Ubwoko bw’Ibikorwa",
        details:
          "Menya ubwoko butandukanye bw’ibirori nka weddings, corporate events, birthdays, n’andi masabukuru. Buri bwoko busaba gutegura ibiryo byihariye."
      },
      {
        step: "Intambwe 2: Gahunda n’Ingengo y’Imari",
        details:
          "Tegura menu, umubare w’abatumirwa, n’ingengo y’imari. Tekereza ku biryo byihariye, ibihe by’igihe, n’icyerekezo cy’ibirori."
      },
      {
        step: "Intambwe 3: Gushushanya Menu",
        details:
          "Tegura menu iryoshye irimo appetizers, main courses, desserts, n’ibinyobwa. Ringaniza uburyohe, textures, n’uburyo bwo kugaragaza neza ibiryo."
      },
      {
        step: "Intambwe 4: Gutegura no Kubika Ibiryo",
        details:
          "Tegura ibiryo mu buryo bw’isuku kandi bwizewe. Koresha uburyo bwiza bwo kubika no kurinda ibiryo kugira ngo birusheho kuba bishya."
      },
      {
        step: "Intambwe 5: Logistics n’Abakozi",
        details:
          "Tegura uburyo bwo gutwara ibiryo, ibikoresho, n’abakozi bazatunganya. Shyiraho imirimo nka chefs, servers, na coordinators."
      },
      {
        step: "Intambwe 6: Gushyira mu myanya no Kugaragaza Neza",
        details:
          "Shyira ku meza, imbonerahamwe, n’ibikoresho byo gushushanya. Reba ko kugaragaza ibiryo byiza bijyanye n’umwihariko w’ibirori."
      },
      {
        step: "Intambwe 7: Gushyira mu bikorwa Ibirori",
        details:
          "Kurikira igihe, kongera ibiryo, gutanga serivisi ku bitumirwa, no gukemura ibibazo mu gihe cy’ibirori. Gumana itumanaho ryiza n’abakozi."
      },
      {
        step: "Intambwe 8: Gukusanya no Gusesengura",
        details:
          "Fata ibikoresho nyuma y’ibirori neza. Saba ibitekerezo ku bitumirwa n’abakiriya kugira ngo wunguke ubumenyi ku bikorwa bizaza."
      }
    ],
    materials: [
      "Templates zo gutegura menu",
      "Ibikoresho byo guteka no gutanga serivisi",
      "Serving trays, chafing dishes, ibikoresho byo kurya",
      "Tableware n’ibyombo byo kunyweramo",
      "Ibikoresho byo gushushanya",
      "Uniforms z’abakozi",
      "Ibikoresho byo gusukura"
    ],
    pdf: "/pdfs/IRFU_event-management-large.pdf",
    video: "https://www.youtube.com/watch?v=I-XjdcpfXoI",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate" },
    },
  },
  "craft-skills": {
  "tailoring-fashion-design": {
    en: {
      title: "Tailoring & Fashion Design",
      description: [
        {
          step: "1. Introduction to Tailoring",
          details: [
            "Understand the role of a tailor and basic safety rules in a workshop.",
            "Learn about different types of sewing machines and how to maintain them.",
            "Identify essential tools like scissors, measuring tape, chalk, and needles."
          ]
        },
        {
          step: "2. Body Measurement & Pattern Making",
          details: [
            "Learn how to take accurate body measurements for both men and women.",
            "Draft simple garment patterns using paper or digital tools.",
            "Understand pattern symbols, grainlines, and cutting layouts."
          ]
        },
        {
          step: "3. Fabric Selection & Cutting",
          details: [
            "Know the types of fabrics (cotton, polyester, silk, denim) and their uses.",
            "Learn how to lay and cut fabric according to patterns.",
            "Practice fabric marking, folding, and seam allowances."
          ]
        },
        {
          step: "4. Sewing & Assembling Garments",
          details: [
            "Operate the sewing machine to join fabric pieces together.",
            "Learn different types of stitches (straight, zigzag, overlock).",
            "Attach zippers, buttons, collars, and pockets neatly."
          ]
        },
        {
          step: "5. Finishing & Fashion Design Basics",
          details: [
            "Practice ironing, hemming, and adding decorations or labels.",
            "Get introduced to color combinations, trends, and sketching designs.",
            "Build confidence to design custom clothing and uniforms."
          ]
        },
        {
          step: "6. Business & Career in Fashion",
          details: [
            "Learn how to price your work and manage orders.",
            "Get tips for starting a tailoring business or fashion studio.",
            "Understand customer service, branding, and fashion marketing."
          ]
        }
      ],
       materials: [
      "Sewing machines and maintenance tools",
      "Measuring tools (tape, rulers, pattern papers)",
      "Fabrics and threads of different types",
      "Cutting tools (scissors, rotary cutters)",
      "Design templates and sketching materials",
      "Dress forms and mannequins",
      "Finishing and ironing equipment"
    ],
    pdf: "/pdfs/TAILORING_English.pdf",
    video: "https://www.youtube.com/watch?v=IGITrkYdjJs",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
    },

    rw: {
      title: "Kudoda no Kudesigning Imyenda",
      description: [
        {
          step: "1. Intangiriro mu kudoda",
          details: [
            "Menya inshingano z’umudozi n’amategeko y’umutekano mu aho ukorera.",
            "Sobanukirwa imashini zidoda zitandukanye n’uko zitabwaho.",
            "Menya ibikoresho by’ingenzi nk’imikasi, ibipimo, agacamurongo, n’inshinge."
          ]
        },
        {
          step: "2. Gufata ibipimo no gukora amakarita (patterns)",
          details: [
            "Wige gufata neza ibipimo by’abagabo n’abagore.",
            "Kora amakarita y’imyenda ukoresheje impapuro cyangwa mudasobwa.",
            "Sobanukirwa ibimenyetso by’amakarita n’uburyo bwo guca imyenda."
          ]
        },
        {
          step: "3. Guhitamo no gukata imyenda",
          details: [
            "Menya ubwoko bw’imyenda n’icyo ikoreshwamo (cotton, polyester, silk, denim).",
            "Wige gutegura no gukata imyenda hakurikijwe amakarita.",
            "Menya uburyo bwo gupima no gusiga ahadoderwa."
          ]
        },
        {
          step: "4. Kudoda no guteranya imyenda",
          details: [
            "Koresha imashini zidoda kugira ngo uhuze ibice by’imyenda.",
            "Menya ubwoko butandukanye bw’imidodo (straight, zigzag, overlock).",
            "Shyiraho neza fermetures, ibitambaro, imifuka, n’amabuto."
          ]
        },
        {
          step: "5. Gusoza no kunoza imyenda",
          details: [
            "Imyenda yisoze neza: kuyitunganya, kuyimesa no kuyitaho.",
            "Menya ibijyanye n’ibara, imiterere y’imyenda n’imyambarire igezweho.",
            "Tangira gushushanya imyenda yawe yihariye cyangwa imyambaro y’amakipe."
          ]
        },
        {
          step: "6. Ubucuruzi n’umwuga wo kudoda",
          details: [
            "Menya uburyo bwo kugena ibiciro no kwakira abakiriya.",
            "Sobanukirwa uburyo bwo gutangira ubucuruzi bwo kudoda.",
            "Wige gucunga abakiriya, gukora marketing no kubaka izina ryawe."
          ]
        }
      ],
     materials: [
      "Imashini zidoda n’ibikoresho byo kuzisana",
      "Ibikoresho byo gupima (metero, urupapuro rwo kwandikaho, n’imiringa)",
      "Imyenda n’imigozi y’amoko atandukanye",
      "Ibikoresho byo gukata/ guca ibitambaro",
      "Inyandiko n’udupapuro twifashishwa mu gushushanya imyenda",
      "Manekine n’ibikoresho byo gupima imyenda",
      "Ibikoresho byo kurangiza no kunoza imyenda (fer à repasser n’ibindi)"
    ],
    pdf: "/pdfs/TAILORING_English.pdf",
    video: "https://www.youtube.com/watch?v=TJSP3HZpO2U",
    duration: "Amasaha 4",
    difficulty: "Abatangizi – Abasanzwe"
    },
  },
    "leather-goods-shoes-bags-belts": {
      en: {
      title: "Leather Goods: Shoes, Bags, Belts",
      description: [
        {
          step: "1. Introduction to Leather Crafting",
          details: [
            "Understand the types of leather (full-grain, top-grain, bonded, synthetic) and their uses.",
            "Learn about essential tools: cutting knives, punches, awls, hammers, and needles.",
            "Familiarize yourself with safety precautions when handling leather and tools."
          ]
        },
        {
          step: "2. Design & Pattern Making",
          details: [
            "Sketch your ideas for shoes, bags, and belts.",
            "Create patterns using paper or cardboard to scale.",
            "Understand how to transfer patterns onto leather efficiently."
          ]
        },
        {
          step: "3. Cutting & Preparing Leather",
          details: [
            "Choose the right leather for each product.",
            "Cut leather pieces according to your patterns with precision.",
            "Edge finishing and preparing leather for stitching."
          ]
        },
        {
          step: "4. Stitching & Assembly",
          details: [
            "Learn hand-stitching and machine-stitching techniques.",
            "Assemble pieces for shoes, bags, and belts carefully.",
            "Attach buckles, zippers, lining, soles, and decorative elements."
          ]
        },
        {
          step: "5. Finishing & Polishing",
          details: [
            "Apply dyes, paints, and edge finishing to enhance aesthetics.",
            "Polish and condition leather to improve durability.",
            "Perform quality control: check seams, edges, and overall product appearance."
          ]
        },
        {
          step: "6. Business & Selling Leather Goods",
          details: [
            "Understand pricing and cost calculation for leather products.",
            "Learn marketing strategies for handmade leather goods.",
            "Explore options for selling locally and online, including social media and marketplaces."
          ]
        }
      ],
      materials: [
      "Different types of leather and synthetic materials",
      "Cutting tools (knives, scissors, cutting mats)",
      "Sewing machines for leather and heavy-duty needles",
      "Adhesives and finishing materials (glue, polish, edge paint)",
      "Patterns and design templates",
      "Measuring and marking tools",
      "Hardware (buckles, zippers, rivets, snaps)"
    ],
    pdf: "/pdfs/B-to-B_English.pdf",
    video: "https://www.youtube.com/watch?v=CLPkVvI9yFg",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
    },

      rw: {
      title: "Gukora ibintu by’uruhu: inkweto, imikufi, imikandara",
      description: [
        {
          step: "1. Intangiriro mu gukora ibintu by’uruhu",
          details: [
            "Menya ubwoko bw’uruhu (full-grain, top-grain, bonded, synthetic) n’icyo bukora.",
            "Menya ibikoresho by’ingenzi: inkoni zo gukata, punches, awl, n’uducupa tw’imisumari.",
            "Menya amabwiriza y’umutekano mu gukoresha uruhu n’ibikoresho bikozwemo."
          ]
        },
        {
          step: "2. Gushushanya no gukora amakarita",
          details: [
            "Shushanya ibitekerezo byawe by’inkweto, ibikomo n’imikufi.",
            "Kora amakarita ukoresheje impapuro cyangwa cardboard ku rugero rw’ibipimo.",
            "Sobanukirwa uburyo bwo kwimura amakarita ku ruhu neza."
          ]
        },
        {
          step: "3. Gukata no gutegura uruhu",
          details: [
            "Hitamo uruhu rukwiriye kuri buri gicuruzwa.",
            "Kata ibice by’uruhu hakurikijwe amakarita yawe witonze.",
            "Tegura imbibi n’uruhu mbere yo kudoda."
          ]
        },
        {
          step: "4. Kudoda no guteranya",
          details: [
            "Iga kudoda n’intoki ndetse no gukoresha imashini.",
            "Tegura ibice by’inkweto, ibikomo n’imikufi witonze.",
            "Shyiraho imikufi, zip, lining, soles, n’ibikoresho by’imitako."
          ]
        },
        {
          step: "5. Gusoza no kunoza",
          details: [
            "Shyira amabara cyangwa ibindi bisigwa ku ruhu kugira ngo byorohe kandi byiza.",
            "Kunoza no gutunganya uruhu kugira ngo rurambe.",
            "Reba neza ibicuruzwa: imisumari, imbibi, n’ukuntu bimeze muri rusange."
          ]
        },
        {
          step: "6. Ubucuruzi n’ukuntu wakagurisha",
          details: [
            "Menya uburyo bwo gutanga ibiciro no kubara ikiguzi cy’ibicuruzwa.",
            "Menya uburyo bwo kwamamaza ibicuruzwa by’uruhu byakozwe n’intoki.",
            "Shakisha uburyo bwo kugurisha imbere mu gihugu no kuri interineti."
          ]
        }
      ],
      materials: [
      "Impu z’amoko atandukanye n’ibikoresho bisimbura uruhu",
      "Ibikoresho byo gukata (imishyo, imisumari, ibikoresho byo gukatisha)",
      "Imashini zidoda uruhu n’imisumari ikomeye",
      "Umuseno n’ibikoresho byo kunoza uruhu (amavuta, colle, irangi ry’impera)",
      "Amashusho n’intego zo gushushanya ibicuruzwa",
      "Ibikoresho byo gupima no gushyiraho ibimenyetso",
      "Ibikoresho by’inyongera (amasaho, fermetures, rivets, snaps)"
    ],
    pdf: "/pdfs/B-to-B_English.pdf",
    video: "https://www.youtube.com/watch?v=CLPkVvI9yFg",
    duration: "Amasaha 4",
    difficulty: "Abatangizi – Abasanzwe"},
    },
    "jewelry-making": {
       en: {
      title: "Jewelry Making",
      description: [
        {
          step: "1. Introduction to Jewelry Making",
          details: [
            "Learn the different types of jewelry: necklaces, bracelets, rings, earrings.",
            "Understand the materials: metals (gold, silver, copper), beads, gemstones, wires, and threads.",
            "Get familiar with essential tools: pliers, wire cutters, hammers, files, soldering equipment, and safety gear."
          ]
        },
        {
          step: "2. Designing Your Jewelry",
          details: [
            "Sketch your ideas and select materials that match your design.",
            "Create patterns or templates for precise measurements.",
            "Consider the size, shape, and weight for comfort and aesthetics."
          ]
        },
        {
          step: "3. Preparing Materials",
          details: [
            "Cut wires, threads, and metal sheets according to your design.",
            "Clean and polish gemstones or beads before use.",
            "Organize your materials to streamline the assembly process."
          ]
        },
        {
          step: "4. Assembly & Crafting Techniques",
          details: [
            "Learn different techniques: wire wrapping, soldering, beading, and chain-making.",
            "Attach clasps, hooks, and other connectors securely.",
            "Combine materials creatively to produce unique designs."
          ]
        },
        {
          step: "5. Finishing & Polishing",
          details: [
            "Smooth rough edges, polish metals, and shine gemstones.",
            "Apply protective coatings if needed to prevent tarnishing.",
            "Inspect each piece for durability and aesthetic quality."
          ]
        },
        {
          step: "6. Selling & Marketing Your Jewelry",
          details: [
            "Determine pricing based on materials, labor, and market demand.",
            "Photograph your products professionally for online sales.",
            "Explore local markets, social media, and online stores for selling."
          ]
        }
      ],
       materials: [
      "Beads, wires, and decorative stones",
      "Pliers, cutters, and tweezers",
      "Stringing materials (elastic cords, chains, threads)",
      "Clasps, hooks, and connectors",
      "Design templates and sketching tools",
      "Polishing and finishing materials",
      "Storage and packaging materials"
    ],
    pdf: "/pdfs/jewellery-making.pdf",
    video: "https://www.youtube.com/watch?v=C4DCPjOknmU",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
    },

    rw: {
      title: "Gukora imitako n’imikufi",
      description: [
        {
          step: "1. Intangiriro mu gukora imitako",
          details: [
            "Menya ubwoko bw’imitako: imikufi, impeta, inkingi, imitako y'amatwi.",
            "Sobanukirwa ibikoresho: ibyuma (zahabu, ifeza, umuringa), beads, amabuye y’agaciro, insinga, n’imigozi.",
            "Menya ibikoresho by’ingenzi: pliers, wire cutters, files, soldering, n’ibikoresho by’umutekano."
          ]
        },
        {
          step: "2. Gushushanya imitako",
          details: [
            "Shushanya ibitekerezo byawe kandi hitamo ibikoresho bijyanye n’igishushanyo.",
            "Kora amakarita cyangwa templates kugirango ugenzure neza ibipimo.",
            "Tekereza ku bunini, ishusho, n’uburemere bw’imitako ku bwiza n’umutekano."
          ]
        },
        {
          step: "3. Gutegura ibikoresho",
          details: [
            "Kata insinga, imigozi, n’ibyuma ukurikije igishushanyo.",
            "Sukura kandi ushire amabuye y’agaciro cyangwa amasaro mbere yo kubikoresha.",
            "Shyira ibikoresho mu buryo bwiza kugirango bize kukorohera kuteranya."
          ]
        },
        {
          step: "4. Guteranya & Uburyo bwo gukora",
          details: [
            "Iga uburyo butandukanye: Kuboha udusinga, soldering, guhuza amasaro, no gukora chain.",
            "Shyiraho clasps, hooks, n’ibindi bihuza neza.",
            "Koresha ibikoresho mu buryo bw’ubuhanzi kugirango uhe igikorwa cyawe ubudasa."
          ]
        },
        {
          step: "5. Gusoza no gukaraba",
          details: [
            "Shyira ibyo watunganije byose hamwe, noza ibyuma, hanyuma ushire amabuye y’agaciro ku murongo.",
            "Shyiraho coatings niba bikenewe kugirango ubirinde kwangirika.",
            "Reba buri kintu niba gikomeye kandi ari cyiza."
          ]
        },
        {
          step: "6. Ubucuruzi no kwamamaza imitako",
          details: [
            "Menya uburyo bwo gutanga ibiciro hashingiwe ku bikoresho, umurimo, n’isoko.",
            "Fata amafoto y’imitako neza kugirango ugurishe kuri interineti.",
            "Shakisha amasoko y’imbere mu gihugu, imbuga nkoranyambaga, n’ububiko bwo kuri interineti."
          ]
        }
      ],
     materials: [
      "Insinga, n’amabuye meza yo gutaka",
      "Ibyuma byo gukata (pince, ciseaux, n’ibindi)",
      "Imigozi yo kwizingiraho",
      "Ibyuma byo gufatisha (amasaho, amahook, connectors)",
      "Udushushanyo n’ibikoresho byo gushushanya",
      "Ibikoresho byo gusukura no kurangiza ibirimbo",
      "Ibikoresho byo kubika no gupfunyika ibirangiye"
    ],
    pdf: "/pdfs/jewellery-making.pdf",
    video: "https://www.youtube.com/watch?v=MGXYf2P6mK0",
    duration: "Amasaha 3",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "woodworking-carpentry": {
      en: {
      title: "Woodworking & Carpentry",
      description: [
        {
          step: "1. Introduction to Woodworking",
          details: [
            "Learn about different types of wood: softwood (pine, cedar) and hardwood (oak, maple).",
            "Understand essential tools: saws, chisels, hammers, planes, drills, measuring tape, and safety equipment.",
            "Familiarize with woodworking techniques: cutting, joining, sanding, finishing, and carving."
          ]
        },
        {
          step: "2. Planning & Designing",
          details: [
            "Sketch your project and decide on dimensions and design style.",
            "Choose the right type of wood and tools for the project.",
            "Prepare a materials list and plan the workflow."
          ]
        },
        {
          step: "3. Preparing Materials",
          details: [
            "Measure and mark the wood accurately.",
            "Cut wood pieces according to the design.",
            "Sand and smooth the surfaces before assembly."
          ]
        },
        {
          step: "4. Joinery & Assembly",
          details: [
            "Learn different joining methods: nails, screws, dowels, mortise & tenon, dovetail joints.",
            "Assemble pieces carefully to maintain alignment and stability.",
            "Check structural integrity during assembly."
          ]
        },
        {
          step: "5. Finishing & Decoration",
          details: [
            "Sand surfaces to a smooth finish.",
            "Apply stains, paints, or varnishes as desired.",
            "Polish or wax for a professional look and protection."
          ]
        },
        {
          step: "6. Safety & Maintenance",
          details: [
            "Always wear protective gear: goggles, gloves, and ear protection.",
            "Maintain your tools: sharpen blades, clean surfaces, and store properly.",
            "Inspect furniture regularly for damage or wear."
          ]
        }
      ],
      materials: [
      "Different types of wood and boards",
      "Measuring and marking tools (tape measure, ruler, square)",
      "Cutting tools (hand saws, power saws)",
      "Nails, screws, and adhesives",
      "Hammers, drills, and screwdrivers",
      "Sanding and finishing tools",
      "Safety equipment (gloves, goggles, masks)"
    ],
    pdf: "/pdfs/Woodwork Step-by-Step.pdf",
    video: "https://www.youtube.com/watch?v=m3CqH4DjVlI",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
    },
      rw: {
      title: "Ubukorikori bw’ibiti",
      description: [
        {
          step: "1. Intangiriro mu bukorikori bw’ibiti",
          details: [
            "Menya ubwoko butandukanye bw’ibiti: softwood (pine, cedar) na hardwood (oak, maple).",
            "Sobanukirwa ibikoresho by’ingenzi: urukero, chisels, inyundo, planes, mutobozi, metre, n’ibikoresho by’umutekano.",
            "Menya uburyo bwo gukora: gutema, guteranya, gusena, gusoza, no kubaza."
          ]
        },
        {
          step: "2. Gupanga & Gushushanya",
          details: [
            "Shushanya umushinga wawe, utegure ibipimo mu uburyo bw’igishushanyo.",
            "Hitamo ubwoko bw’ibiti n’ibikoresho bikwiye.",
            "Tegura urutonde rw’ibikoresho kandi utegure uburyo bwo gukora."
          ]
        },
        {
          step: "3. Gutegura ibikoresho",
          details: [
            "Fata ibipimo neza kandi ugaragaze aho uzatemera.",
            "Tema ibice by’ibiti ukurikije igishushanyo.",
            "Sena kandi usukure hejuru mbere yo guteranya."
          ]
        },
        {
          step: "4. Guteranya & Kwinjira mu bwubatsi",
          details: [
            "Iga uburyo butandukanye bwo guteranya: Imisumari, Gutobora, dowels, mortise & tenon, dovetail joints.",
            "Tegura ibice witonze kugirango byose bihure kandi bigumane imbaraga.",
            "Reba neza niba igice cyose gikomeye mu gihe cyo guteranya."
          ]
        },
        {
          step: "5. Gusoza & Kunoza",
          details: [
            "Sena hejuru kugirango hamere neza.",
            "Shyiraho amabara, amarangi, cyangwa varnish uko ubishaka.",
            "Shyiraho wax kugirango bigaragare neza kandi birambe."
          ]
        },
        {
          step: "6. Umutekano & Kubungabunga",
          details: [
            "Jya wambara ibikoresho by’umutekano: amadarubindi, gloves, n’agapfukamunwa.",
            "Bungabunga ibikoresho byawe: shyira amasege ku mashini, sukura ibikoresho, ubibike neza.",
            "Genzura ibikoresho by’intebe cyangwa ameza buri gihe kugirango ubirinde kwangirika."
          ]
        }
      ],
       materials: [
      "Amoko atandukanye y’ibiti n’imbaho",
      "Ibikoresho byo gupima no gushyiraho ibimenyetso (metero, umugozi, urupimo rw’uruhande)",
      "Ibikoresho byo gukata (imihoro, imisumari, imashini zikata)",
      "Imisumari",
      "Ibyuma byo gukubita no gusunika (hammer, drill, tournevis)",
      "Ibikoresho byo gusena no kunoza imbaho",
      "Ibikoresho by’umutekano (ga, amadarubindi, udupfukamunwa)"
    ],
    pdf: "/pdfs/Woodwork Step-by-Step.pdf",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "Amasaha 4",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "metalwork-welding": {
      en: {
    title: "Metalwork & Welding",
    description: [
      {
        step: "1. Introduction to Metalwork",
        details: [
          "Learn about different metals: steel, aluminum, copper, and their properties.",
          "Understand the basics of metalworking tools: hammers, grinders, welding machines, clamps, and protective gear.",
          "Familiarize with metalworking techniques: cutting, shaping, joining, and finishing metals."
        ]
      },
      {
        step: "2. Safety & Preparation",
        details: [
          "Always wear protective equipment: welding mask, gloves, apron, and ear protection.",
          "Check all tools and machines for proper working condition.",
          "Ensure proper ventilation when working indoors."
        ]
      },
      {
        step: "3. Cutting & Shaping Metal",
        details: [
          "Measure and mark metal pieces accurately.",
          "Use appropriate cutting tools (saw, plasma cutter, or grinder) to cut metals.",
          "Shape metals using hammers, bending tools, or presses as required."
        ]
      },
      {
        step: "4. Welding & Joining",
        details: [
          "Select the correct welding method: MIG, TIG, or Stick welding.",
          "Clamp pieces securely before welding.",
          "Apply proper welding techniques to join metals without weakening them."
        ]
      },
      {
        step: "5. Finishing & Polishing",
        details: [
          "Grind and sand welds to make smooth surfaces.",
          "Apply protective coatings such as paint, primer, or anti-rust treatment.",
          "Inspect the finished product for structural integrity and aesthetic quality."
        ]
      },
      {
        step: "6. Maintenance & Best Practices",
        details: [
          "Maintain welding equipment: clean, inspect, and replace worn parts.",
          "Store metals and tools safely.",
          "Follow safety protocols to prevent accidents."
        ]
      }
    ],
    materials: [
      "Different types of metals and metal sheets",
      "Welding machines and electrodes",
      "Cutting tools (grinders, hacksaws)",
      "Measuring and marking tools",
      "Protective equipment (gloves, helmet, apron, goggles)",
      "Clamps and metal joining tools",
      "Finishing materials (paint, brushes, polish)"
    ],
    pdf: "/pdfs/Welding for Dummies.pdf",
    video: "https://www.youtube.com/watch?v=OWThL97tq3k",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },
      rw: {
    title: "Ubukorikori bw’ibyuma / Gusudira",
    description: [
      {
        step: "1. Intangiriro ku bukorikori bw’ibyuma",
        details: [
          "Menya ubwoko butandukanye bw’ibyuma: steel, aluminum, na copper n’imiterere yabyo.",
          "Sobanukirwa ibikoresho by’ingenzi: ingofero, tranfer, imashini zisudira, clamps, n’ibikoresho by’umutekano.",
          "Menya uburyo bwo gukora ku byuma: gukata, gushushanya, guteranya, no gusoza."
        ]
      },
      {
        step: "2. Umutekano No Gutegura",
        details: [
          "Jya wambara ibikoresho by’umutekano: welding mask, gloves, apron.",
          "Reba neza ko ibikoresho byose bikora neza mbere yo gutangira.",
          "Shyira imbere uburyo bwo guhumeka neza igihe ukorera imbere mu nzu."
        ]
      },
      {
        step: "3. Gukata No Gushushanya ibyuma",
        details: [
          "Fata ibipimo neza kandi ugaragaze aho uzakatira.",
          "Koresha ibikoresho bikwiye byo gukata (imashimi, plasma cutter, cyangwa grinder).",
          "Shushanya ibyuma ukoresheje irangi, ibikoresho byo guhindura, cyangwa press."
        ]
      },
      {
        step: "4. Gusudira No Guteranya",
        details: [
          "Hitamo uburyo bukwiye bwo gusudira: MIG, TIG, cyangwa Stick welding.",
          "Shyira ibice hamwe neza mbere yo kubiteranya.",
          "Koresha uburyo bwiza bwo gusudira kugirango uhuze ibyuma neza kandi bikomere."
        ]
      },
      {
        step: "5. Gusoza & Gukoraho neza",
        details: [
          "Noza kandi usene aho wateranirije ibyuma kugirango habe hatunganye.",
          "Shyiraho coatings zirinda nk’amabara, primer, cyangwa anti-rust.",
          "Genza neza igicuruzwa kirangiye ku bwiza no gukomera."
        ]
      },
      {
        step: "6. Kubungabunga & Uburyo bwiza",
        details: [
          "Bungabunga ibikoresho byo gusudira: sukura, genzura, kandi usimbuze ibice byangiritse.",
          "Bika ibyuma n’ibikoresho neza.",
          "Kurikiza amabwiriza y’umutekano kugirango wirinde impanuka."
        ]
      }
    ],
    materials: [
      "Amoko atandukanye y’ibyuma n’amabati",
      "Imashini zisudira n’insinga zazo",
      "Ibikoresho byo gukata (grinder, imisumari y’ibyuma)",
      "Ibikoresho byo gupima no gushyiraho ibimenyetso",
      "Ibikoresho by’umutekano (ga, casque, amataburiya, amadarubindi)",
      "Ibyuma bifatisha n’ibifasha guhuza ibyuma",
      "Ibikoresho byo kurangiza (irangi, uburoso, polish)"
    ],
    pdf: "/pdfs/Welding for Dummies.pdf",
    video: "https://www.youtube.com/watch?v=OWThL97tq3k",
    duration: "Amasaha 4",
    difficulty: "Abatangizi – Abasanzwe" },
    },
   "pottery-ceramics": {
  en: {
    title: "Pottery & Ceramics",
    description: [
      {
        step: "1. Introduction to Pottery",
        details: [
          "Learn about different types of clay and their properties (earthenware, stoneware, porcelain).",
          "Understand basic pottery tools: potter’s wheel, sculpting tools, sponges, wire cutters, and kilns.",
          "Familiarize with techniques: hand-building, wheel-throwing, and sculpting."
        ]
      },
      {
        step: "2. Preparing the Clay",
        details: [
          "Wedging clay to remove air bubbles and create a uniform texture.",
          "Moisturizing and kneading the clay for easy shaping.",
          "Measuring the right amount of clay for your project."
        ]
      },
      {
        step: "3. Shaping & Forming",
        details: [
          "Use hand-building techniques like coiling, slab-building, and pinching.",
          "Throw clay on a potter’s wheel for symmetrical forms.",
          "Smooth surfaces and refine shapes using sculpting tools and sponges."
        ]
      },
      {
        step: "4. Drying & Bisque Firing",
        details: [
          "Let the shaped pottery dry slowly to avoid cracking.",
          "Perform bisque firing in a kiln to harden the pottery before glazing.",
          "Check for any imperfections and sand lightly if needed."
        ]
      },
      {
        step: "5. Glazing & Decoration",
        details: [
          "Apply glaze evenly using brushes, dipping, or spraying techniques.",
          "Add decorative touches like carving, stamping, or underglaze painting.",
          "Ensure glaze coverage is consistent to prevent flaws after firing."
        ]
      },
      {
        step: "6. Glaze Firing & Finishing",
        details: [
          "Fire glazed pottery in the kiln according to recommended temperatures.",
          "Allow pottery to cool gradually before handling.",
          "Inspect finished pieces for cracks, glaze defects, or sharp edges."
        ]
      }
    ],
   materials: [
      "Clay and molding materials",
      "Pottery wheel and hand tools",
      "Water containers and sponges",
      "Glazes, paints, and decorating brushes",
      "Kiln (firing oven) or alternative heating methods",
      "Aprons and cleaning materials",
      "Safety equipment (gloves, masks)"
    ],
    pdf: "/pdfs/ceramicbasics.pdf",
    video: "https://www.youtube.com/watch?v=wxh31J0k6PY",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Gukora ibikoresho byo mu ibumba",
    description: [
      {
        step: "1. Intangiriro ku gukora ibikoresho byo mu ibumba",
        details: [
          "Menya ubwoko butandukanye bw’ibumba n’imiterere yabyo (earthenware, stoneware, porcelain).",
          "Sobanukirwa ibikoresho by’ingenzi: wheel ya potter, ibikoresho byo gushushanya, sponge, wire cutter, n’inkono ya kiln.",
          "Menya uburyo bwo gukora: gukoresha intoki, wheel-throwing, no gushushanya."
        ]
      },
      {
        step: "2. Gutegura ibumba",
        details: [
          "Kuvanga ibumba kugirango ukuremo utwobo tw’umwuka kandi ibe ifite texture imwe.",
          "Kurinoza no kurivanga kugirango byoroshye kurishushanya.",
          "Gupima neza ingano y’ibumba ku gikorwa cyawe."
        ]
      },
      {
        step: "3. Gushushanya & Gukora",
        details: [
          "Koresha uburyo bwo gukoresha intoki: coiling, slab-building, na pinching.",
          "Shyira ibumba ku wheel ya potter kugirango igire ishusho imeze neza.",
          "Koraho hejuru ukoresheje ibikoresho byo gushushanya na sponge kugirango ushireho uburanga."
        ]
      },
      {
        step: "4. Umutsa, Ushyire no ku muriro",
        details: [
          "Reka ibumba ryumuke buhoro kugirango ritavunika.",
          "Yishyire ku muriro muri kiln kugirango ikomere mbere yo gushyiraho glaze.",
          "Reba neza niba nta makosa kandi usene niba bikenewe."
        ]
      },
      {
        step: "5. Gushyiraho Glaze & Gukora Decoration",
        details: [
          "Shyiraho glaze neza ukoresheje brush, gusiga, cyangwa spraying.",
          "Ongeraho decoration nk'ibishushanyo, gutera stamp, cyangwa gusiga amabara.",
          "Reba ko glaze igaragara neza hose kugirango ntihagire amakosa nyuma yo guteka."
        ]
      },
      {
        step: "6. Kotsa & Gusoza",
        details: [
          "Otsa ceramic ifite glaze muri kiln ku bushyuhe bukwiye.",
          "Reka igume igikonja buhoro mbere yo kuyifata.",
          "Reba ibikoresho birangiye niba nta kavuyo, amakosa ya glaze, cyangwa imipaka yaka."
        ]
      }
    ],
     materials: [
      "Ibumba n’ibikoresho byo kubumba",
      "Uruziga rwo kubumbiraho n’ibikoresho by’intoki",
      "Amakanya yo gukoraho amazi n’amaponji",
      "Amarangi, irangi n’ibikoresho byo gushushanya",
      "Itanura (kiln) cyangwa uburyo busimbura bwo gutwika ibumba",
      "Amataburiya n’ibikoresho byo gusukura",
      "Ibikoresho by’umutekano (ga, udupfukamunwa)"
    ],
    pdf: "/pdfs/ceramicbasics.pdf",
    video: "https://www.youtube.com/watch?v=wxh31J0k6PY",
    duration: "Amasaha 4",
    difficulty: "Abatangizi – Abasanzwe"},
    },
  },
  "digital-skills": {
    "basic-computer-literacy": {
      en: {
    title: "Basic Computer Literacy",
    description: [
      {
        step: "1. Introduction to Computers",
        details: [
          "Understand what a computer is and its main components (monitor, keyboard, mouse, CPU).",
          "Learn about the difference between hardware and software.",
          "Explore how computers are used in daily life and workplaces."
        ]
      },
      {
        step: "2. Operating System Basics",
        details: [
          "Learn how to start, shut down, and log in to a computer safely.",
          "Navigate through Windows or macOS interfaces (desktop, icons, taskbar, start menu).",
          "Customize basic settings like time, background, and sound."
        ]
      },
      {
        step: "3. File Management",
        details: [
          "Understand files, folders, and directories.",
          "Learn to create, rename, move, and delete files or folders.",
          "Use external storage like flash drives and cloud storage services (Google Drive, Dropbox)."
        ]
      },
      {
        step: "4. Basic Applications",
        details: [
          "Introduction to Microsoft Word, Excel, and PowerPoint.",
          "Learn basic typing, editing, and formatting text.",
          "Create and save a document or simple spreadsheet."
        ]
      },
      {
        step: "5. Internet & Email",
        details: [
          "Learn how to connect to the internet and browse safely.",
          "Use Google effectively to search for information.",
          "Create and manage an email account (send, reply, attach files)."
        ]
      },
      {
        step: "6. Online Safety & Digital Etiquette",
        details: [
          "Understand online privacy and safe browsing practices.",
          "Avoid scams, phishing, and malware.",
          "Learn good online behavior and responsible social media use."
        ]
      }
    ],
    pdf: "/pdfs/computerbasics.pdf",
    video: "https://www.youtube.com/watch?v=2MCmnr2L50o"
  },
  rw: {
    title: "Ubumenyi bwa mudasobwa",
    description: [
      {
        step: "1. Intangiriro ku mudasobwa",
        details: [
          "Menya igikoresho cya mudasobwa n’ibigize umubiri wayo (monitor, keyboard, mouse, CPU).",
          "Sobanukirwa itandukaniro riri hagati ya hardware na software.",
          "Reba uburyo mudasobwa ikoreshwa mu buzima bwa buri munsi n’ahakorerwa akazi."
        ]
      },
      {
        step: "2. Iby’ibanze ku mikorere ya mudasobwa",
        details: [
          "Menya uko wafungura, ugafunga, cyangwa ugakoresha konti ya mudasobwa.",
          "Sobanukirwa uburyo bwo gukoresha Windows cyangwa macOS (desktop, icons, taskbar, start menu).",
          "Hindura ibintu by’ibanze nk'isaha, background, n’amajwi."
        ]
      },
      {
        step: "3. Gukoresha no kubika dosiye",
        details: [
          "Sobanukirwa dosiye, folders, na directories.",
          "Menya gukora, guhindura amazina, kwimura no gusiba dosiye cyangwa folders.",
          "Koresha flash disk cyangwa cloud storage nka Google Drive cyangwa Dropbox."
        ]
      },
      {
        step: "4. Porogaramu z’ibanze",
        details: [
          "Menya gukoresha Microsoft Word, Excel, na PowerPoint.",
          "Menya kwandika, guhindura no gutunganya inyandiko.",
          "Iga gukora no kubika document cyangwa spreadsheet byoroshye."
        ]
      },
      {
        step: "5. Internet na Email",
        details: [
          "Menya uburyo bwo kwifashisha internet no kugenzura umutekano.",
          "Koresha Google neza mu gushaka amakuru.",
          "Fungura no unakoresha konti ya email (koherereza, gusubiza, no gufatanya dosiye)."
        ]
      },
      {
        step: "6. Umutekano w’itumanaho no gukoresha internet neza",
        details: [
          "Sobanukirwa uburyo bwo kwirinda kwibwa amakuru cyangwa kwinjirirwa na virusi.",
          "Menya uko wakwirinda ubujura, ubutubuzi, n'amavirus.",
          "Koresha neza imbuga nkoranyambaga kandi wubahirize umuco mwiza kuri internet."
        ]
      }
    ],
    pdf: "/pdfs/computerbasics.pdf",
    video: "https://www.youtube.com/watch?v=2MCmnr2L50o" },
    },
    "graphic-design-video-editing": {
     en: {
    title: "Graphic Design & Video Editing",
    description: [
      {
        step: "1. Introduction to Visual Design",
        details: [
          "Learn the fundamentals of design — color theory, typography, and composition.",
          "Understand visual balance, hierarchy, and contrast for better design communication.",
          "Get familiar with different types of design (logos, posters, social media graphics)."
        ]
      },
      {
        step: "2. Tools for Graphic Design",
        details: [
          "Learn how to use Canva, Adobe Photoshop, or Illustrator for design projects.",
          "Create and export high-quality visuals for print and digital media.",
          "Explore templates, layers, and brushes to improve creativity."
        ]
      },
      {
        step: "3. Video Editing Basics",
        details: [
          "Understand the video production process: planning, shooting, and editing.",
          "Learn to use software like CapCut, DaVinci Resolve, or Adobe Premiere Pro.",
          "Cut, trim, and merge clips; add text, transitions, and background music."
        ]
      },
      {
        step: "4. Advanced Editing Techniques",
        details: [
          "Learn color correction and grading to improve video quality.",
          "Add sound effects and voice-overs for storytelling.",
          "Create smooth transitions and motion effects using keyframes."
        ]
      },
      {
        step: "5. Exporting and Sharing Projects",
        details: [
          "Understand formats (MP4, MOV) and resolutions (1080p, 4K).",
          "Optimize video size for web or social media uploads.",
          "Share your designs and videos professionally on YouTube, Instagram, or TikTok."
        ]
      }
    ],
     materials: [
      "Computer or laptop with design software (Photoshop, Illustrator, Premiere Pro, etc.)",
      "Drawing tablet (optional)",
      "External storage devices (flash disk, hard drive)",
      "Audio and video recording tools",
      "Headphones and microphone",
      "Color palettes, fonts, and design resources",
      "Stable internet connection"
    ],
    pdf: "/pdfs/Basic-Guide-to-Video-Editing.pdf",
    video: "https://www.youtube.com/watch?v=y7Ci_H9bYEk",
    duration: "5 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Kwagura ubumenyi mu gushushanya no gukora amashusho",
    description: [
      {
        step: "1. Ibyingenzi ugomba kumenya",
        details: [
          "Menya ibibanza by’ingenzi mu gushushanya — amabara, inyuguti, n’imiterere y’imibare.",
          "Sobanukirwa uburyo bwo gushyira ibintu mu mwanya (balance) no gutanga ubutumwa mu buryo buboneye.",
          "Menya ubwoko butandukanye bw’ishushanyo: amalogos, amaposters, cyangwa amafoto yo kuri social media."
        ]
      },
      {
        step: "2. Ibikoresho byifashishwa mu bushushanyi",
        details: [
          "Iga gukoresha software nka Canva, Photoshop, cyangwa Illustrator mu gukora ibishushanyo.",
          "Menya gukoresha amatemplates, layers, n’uburyo bwo kubika neza ibishushanyo wakoze.",
          "Menya uburyo bwo kohereza amafoto n’amashusho mu buryo bwiza butangiza umwimerere w'ibyo wakoze."
        ]
      },
      {
        step: "3. Gutunganya amashusho (Video Editing)",
        details: [
          "Menya inzira yo gutegura no gutunganya amashusho: gutegura intambwe zizakurikizwa, urumuri ruzakenerwa, ifatwa ry'amashusho ndetse no kuyatunganya.",
          "Koresha porogaramu nka CapCut, DaVinci Resolve, cyangwa Premiere Pro.",
          "Menya uburyo bwiza bwo gukata, guhuza, kongeramo amagambo, amabara, n’umuziki w’inyuma."
        ]
      },
      {
        step: "4. Ubumenyi buhambaye mu gutunganya amashusho",
        details: [
          "Menya gukosora amabara no gutunganya amajwi mu mashusho.",
          "Kongeramo effets, sound effects, n’amajwi y’inyuma (voice-over).",
          "Gukora animation yoroshye ukoresheje keyframes."
        ]
      },
      {
        step: "5. Kubika no gusangiza imishinga",
        details: [
          "Sobanukirwa uburyo bwo kubika amashusho mu bwoko butandukanye (MP4, MOV).",
          "Menya resolution ikwiye nk’iya 1080p cyangwa 4K bitewe n’aho uzayohereza.",
          "Sangiza imishinga yawe kuri YouTube, Instagram, cyangwa TikTok mu buryo bw’umwuga."
        ]
      }
    ],
    materials: [
      "Mudasobwa cyangwa laptop ifite porogaramu z’ishushanyo (Photoshop, Illustrator, Premiere Pro, n’izindi)",
      "Tablet yo gushushanyaho (ubishatse)",
      "Ububiko bwo hanze (flash disk, disque dur, memory card)",
      "Ibikoresho byo gufata amajwi n’amashusho",
      "Ecouteurs n’indangururamajwi (microphone)",
      "Amabara, fonts n’ibikoresho byo gushushanya",
      "Internet yihuta kandi ihamye"
    ],
    pdf: "/pdfs/Basic-Guide-to-Video-Editing.pdf",
    video: "https://www.youtube.com/watch?v=y7Ci_H9bYEk",
    duration: "Amasaha 5",
    difficulty: "Abatangizi – Abasanzwe"},
    },
    "mobile-web-development": {
       en: {
    title: "Mobile & Web Development",
    description: [
      {
        step: "1. Introduction to Programming",
        details: [
          "Understand what programming is and how it powers websites and mobile apps.",
          "Learn about front-end and back-end development and their roles.",
          "Get familiar with popular programming languages such as HTML, CSS, JavaScript, and Python."
        ]
      },
      {
        step: "2. Front-End Development",
        details: [
          "Learn to build beautiful and responsive websites using HTML and CSS.",
          "Understand layout design, color use, and typography for user-friendly interfaces.",
          "Use frameworks like React or Vue.js to make websites dynamic and interactive."
        ]
      },
      {
        step: "3. Back-End Development",
        details: [
          "Learn how servers, databases, and APIs work together to power web apps.",
          "Understand CRUD operations (Create, Read, Update, Delete).",
          "Use Node.js, Express, or Django to create and connect server-side functionality."
        ]
      },
      {
        step: "4. Mobile App Development",
        details: [
          "Learn to build Android and iOS apps using Flutter or React Native.",
          "Understand UI/UX design principles for mobile devices.",
          "Test your apps and publish them to the Google Play Store or Apple App Store."
        ]
      },
      {
        step: "5. Hosting & Deployment",
        details: [
          "Deploy your web projects using platforms like Netlify, Vercel, or Firebase.",
          "Understand domain names, hosting, and SSL security.",
          "Maintain and update your websites or apps regularly for best performance."
        ]
      }
    ],
   materials: [
      "Computer or laptop with internet access",
      "Code editor (VS Code, Sublime Text, etc.)",
      "Web browsers for testing (Chrome, Firefox, Edge)",
      "Mobile phone or emulator for app testing",
      "Design tools (Figma, Canva, Adobe XD)",
      "Developer accounts for testing and deployment",
      "Notebook for coding notes and ideas"
    ],
    pdf: "/pdfs/the-mobile-web-handbook.pdf",
    video: "https://www.youtube.com/watch?v=GxmfcnU3feo",
    duration: "6 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Gukora porogaramu za telefoni n’imbuga",
    description: [
      {
        step: "1. Intangiriro mu ikoranabuhanga ryo gukora porogaramu",
        details: [
          "Menya icyo gukoresha code ari cyo n’uko gikoreshwa mu gukora imbuga n’amapplication.",
          "Sobanukirwa ibyiciro bibiri by’ingenzi: front-end na back-end.",
          "Menya indimi zikoreshwa cyane nka HTML, CSS, JavaScript, na Python.Kuko igihe usobanukiwe neza iby'ingenzi muri izi ndimi ushobora gukoresha AI iguha code nziza yo kubaka application wifuza"
        ]
      },
      {
        step: "2. Gukora igice cy’imbuga kigaragarira abantu (Front-End)",
        details: [
          "Menya gukora imbuga zisa neza kandi zigaragarira abantu ukoresheje HTML na CSS, kuko abantu bakunda ibintu bisa neza.",
          "Sobanukirwa uburyo bwo gutegura urupapuro rwiza (layout) no guhuza amabara n’inyandiko.",
          "Koresha frameworks nka React cyangwa Vue.js kugira ngo imbuga zibe interactive."
        ]
      },
      {
        step: "3. Gukora igice cy’inyuma (Back-End)",
        details: [
          "Menya uko server, database, na API bikorana mu gukora urubuga rukora neza.",
          "Sobanukirwa CRUD (Create, Read, Update, Delete).",
          "Koresha Node.js, Express, cyangwa Django gukora seriveri y’imbuga yawe."
        ]
      },
      {
        step: "4. Gukora apps za telefoni",
        details: [
          "Kora apps zikora kuri Android na iPhone ukoresheje Flutter cyangwa React Native.",
          "Menya gukora design nziza ihuye n’uko abayikoresha bifuza  (UI/UX).",
          "Menya gutanga apps kuri Google Play cyangwa Apple App Store."
        ]
      },
      {
        step: "5. Gushyira imishinga kuri internet",
        details: [
          "Menya gushyira imbuga kuri Netlify, Vercel, cyangwa Firebase.",
          "Sobanukirwa domain, hosting, na SSL certificate.",
          "Menya guhindura no kuvugurura imishinga yawe kugira ngo igume ikora neza."
        ]
      }
    ],
     materials: [
      "Mudasobwa cyangwa laptop ifite internet",
      "Porogaramu yo kwandikamo code (VS Code, Sublime Text, n’izindi)",
      "Mucukumbuzi (navigateur) zo kugeragezaho (Chrome, Firefox, Edge)",
      "Telefoni cyangwa emulator yo kugeragezaho porogaramu",
      "Ibikoresho byo gushushanya (Figma, Canva, Adobe XD)",
      "Konti z’abakora porogaramu (developer accounts) zo kugerageza no gushyira ku mbuga",
      "Igitabo cyangwa bloc-notes cyo kwandikamo ibitekerezo n’amategeko ya code"
    ],
    pdf: "/pdfs/the-mobile-web-handbook.pdf",
    video: "https://www.youtube.com/watch?v=GxmfcnU3feo",
    duration: "Amasaha 6",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "freelancing-platforms-fiverr-upwork": {
      en: {
    title: "Freelancing Platforms (Fiverr, Upwork)",
    description: [
      {
        step: "1. Understanding Freelancing",
        details: [
          "Learn what freelancing is and how it allows you to work independently online.",
          "Explore different types of freelance work: writing, design, programming, marketing, and more.",
          "Understand how freelancers earn money and manage projects remotely."
        ]
      },
      {
        step: "2. Setting Up Your Freelance Profile",
        details: [
          "Create professional profiles on Fiverr and Upwork with clear bios and skills.",
          "Upload a profile picture, portfolio samples, and a strong introduction.",
          "Set up payment methods and verify your account."
        ]
      },
      {
        step: "3. Creating Gigs and Proposals",
        details: [
          "Learn to write attractive gig titles and descriptions on Fiverr.",
          "Craft winning proposals for Upwork projects that highlight your expertise.",
          "Use keywords and professional tone to stand out to clients."
        ]
      },
      {
        step: "4. Delivering Quality Work",
        details: [
          "Communicate clearly with clients about expectations and deadlines.",
          "Deliver projects on time and ensure quality to build long-term trust.",
          "Request feedback and ratings to improve your reputation."
        ]
      },
      {
        step: "5. Growing and Scaling",
        details: [
          "Learn to set competitive prices and raise your rates as you gain experience.",
          "Create repeat business through excellent service and reliability.",
          "Explore multiple platforms like Toptal, Freelancer, and PeoplePerHour."
        ]
      }
    ],
   materials: [
      "A laptop or desktop computer",
      "Reliable internet connection",
      "Professional email address",
      "Profile photo and personal bio",
      "Portfolio of previous work or sample projects",
      "Payment account (PayPal, Payoneer, or local method)",
      "Basic English communication skills"
    ],
    pdf: "/pdfs/Freelancing.pdf",
    video: "https://www.youtube.com/watch?v=7vtlMRV1sxY",
    duration: "2 hours",
    difficulty: "Beginner"
  },
  rw: {
    title: "Gukorera kuri Fiverr, Upwork n’izindi",
    description: [
      {
        step: "1. Kumenya freelancing",
        details: [
          "Menya icyo freelancing ari cyo — uburyo bwo gukorera kuri internet ukishyurwa.",
          "Sobanukirwa imirimo itandukanye ikorwa kuri internet: gushushanya, kwandika, gukora websites, kwamamaza, n’ibindi.",
          "Menya uko abakorera kuri internet binjiza amafaranga nuko bacunga imishinga yabo."
        ]
      },
      {
        step: "2. Gushyiraho profile yawe",
        details: [
          "Fungura konti kuri Fiverr na Upwork, ushyiremo amakuru arambuye n’ubumenyi bwawe.",
          "Ongeraho ifoto, imirimo wakoze (portfolio), n’inyandiko ikuranga neza.",
          "Shyiraho uburyo bwo kwakira amafaranga, wemeza konti yawe."
        ]
      },
      {
        step: "3. Incamake y'ibyo ukora no gutanga Proposals",
        details: [
          "Menya kwandika incamake iranga serivisi zawe ku buryo bushishikaje kuri Fiverr.",
          "Andika proposal nziza kuri Upwork isobanura ibyo ushoboye n’uburyo wabikora neza.",
          "Koresha amagambo akurura abakiriya n’imvugo y’umwuga."
        ]
      },
      {
        step: "4. Gutanga serivisi zinoze",
        details: [
          "Vugana neza n’abakiriya ku byerekeye ibyo bategereje n’igihe bizarangiriraho.",
          "Tanga ibyo wakoze byuzuye neza kandi ku gihe kugira ngo wubake icyizere.",
          "Saba feedback kugira ngo uzamure izina ryawe ku mbuga."
        ]
      },
      {
        step: "5. Kwagura ibikorwa byawe",
        details: [
          "Shyiraho ibiciro bihiganwa kandi uzamure uko ubyitwayemo neza.",
          "Gira abakiriya bagaruka kenshi kubera serivisi nziza utanga.",
          "Gerageza no ku zindi mbuga nka Freelancer, Toptal, cyangwa PeoplePerHour."
        ]
      }
    ],
   materials: [
      "Mudasobwa cyangwa ordinateri ikomeye",
      "Interineti yihuta kandi yizewe",
      "Aderesi ya imeri y’umwuga",
      "Ifoto y’umwirondoro n’amakuru yawe",
      "Ikarita y’ibikorwa byawe cyangwa imishinga y’icyitegererezo",
      "Konti yo kwakiriraho amafaranga (PayPal, Payoneer, cyangwa indi y’imbere mu gihugu)",
      "Ubumenyi bw’ibanze mu kuvuga no kwandika Icyongereza"
    ],
    pdf: "/pdfs/Freelancing.pdf",
    video: "https://www.youtube.com/watch?v=7vtlMRV1sxY",
    duration: "amasaha 2",
    difficulty: "Abatangizi"
  },
    },
    "social-media-marketing": {
       en: {
    title: "Social Media Marketing",
    description: [
      {
        step: "1. Introduction to Social Media Marketing",
        details: [
          "Understand how businesses use social media to promote brands and reach audiences.",
          "Learn about major platforms — Facebook, Instagram, TikTok, X (Twitter), and LinkedIn.",
          "Know the importance of engagement, consistency, and brand voice."
        ]
      },
      {
        step: "2. Content Planning & Strategy",
        details: [
          "Create a content calendar to plan posts ahead of time.",
          "Learn the difference between promotional, educational, and entertaining content.",
          "Use storytelling and visuals to make content engaging."
        ]
      },
      {
        step: "3. Creating Engaging Content",
        details: [
          "Design appealing graphics using Canva or Photoshop.",
          "Write captivating captions and use trending hashtags.",
          "Include calls-to-action to drive audience interaction."
        ]
      },
      {
        step: "4. Advertising & Analytics",
        details: [
          "Learn to run Facebook and Instagram ads effectively.",
          "Track performance through insights — reach, clicks, and conversions.",
          "Adjust strategy based on what works best for your audience."
        ]
      },
      {
        step: "5. Building Community & Consistency",
        details: [
          "Engage with followers through comments and direct messages.",
          "Collaborate with influencers or partners to grow faster.",
          "Maintain a consistent posting schedule to keep your audience loyal."
        ]
      }
    ],
    materials: [
      "A smartphone or computer with internet access",
      "Social media accounts (Facebook, Instagram, TikTok, YouTube, etc.)",
      "Graphic design and video editing tools (Canva, CapCut, etc.)",
      "Notebook for planning content",
      "Email account for business use",
      "Analytics tools or platform insights",
      "Stable internet connection"
    ],
    pdf: "/pdfs/Social-Media-Marketing-Basics.pdf",
    video: "https://www.youtube.com/watch?v=I2pwcAVonKI",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Gukoresha imbuga nkoranyambaga mu kwamamaza",
    description: [
      {
        step: "1. Intangiriro mu kwamamaza ukoresheje imbuga nkoranyambaga",
        details: [
          "Sobanukirwa uko imbuga nkoranyambaga zifasha ibigo kwamamaza ibikorwa byabo.",
          "Menya imbuga zikomeye nka Facebook, Instagram, TikTok, X, na LinkedIn.",
          "Menya akamaro ko kugira gahunda, guhozaho, n’ijwi ry’ubucuruzi bwawe (brand voice)."
        ]
      },
      {
        step: "2. Gahunda no gutegura ibikwiye gushyirwa ku mbuga",
        details: [
          "Tegura content calendar yo gushyiraho ibikwiye buri cyumweru cyangwa buri kwezi.",
          "Menya itandukaniro rya content isetsa, iyigisha, n’iyamamaza.",
          "Koresha kubara inkuru n’amafoto cyangwa amashusho akurura abantu."
        ]
      },
      {
        step: "3. Gukora ibikurura abantu",
        details: [
          "Koresha Canva cyangwa Photoshop mu gukora amashusho meza.",
          "Andika caption ikurura kandi ukoreshe hashtags zigezweho kugira ngo post yawe igere ku bantu benshi.",
          "Shyiramo impamagazi kugira ngo abantu bakorane n’ubucuruzi bwawe."
        ]
      },
      {
        step: "4. Kwamamaza n’isesengura",
        details: [
          "Menya gukora Facebook Ads cyangwa Instagram Ads ku buryo bunoze.",
          "Soma raporo zerekana uko abantu bagerwaho n’amakuru yawe (reach, clicks, conversions).",
          "Hindura uburyo bwawe ukurikije ibyerekana ko bikora neza."
        ]
      },
      {
        step: "5. Kubaka umuryango w’abakurikira",
        details: [
          "Sangira n’abakurikira bawe mu bitekerezo n’ubutumwa bwihariye (DM).",
          "Korana n’abamamaye cyangwa abandi bantu bafite abafatanyabikorwa benshi.",
          "Komeza guhozaho mu gushyira ibintu ku mbuga buri gihe kugira ngo wubake icyizere."
        ]
      }
    ],
    materials: [
      "Telefoni cyangwa mudasobwa ifite interineti",
      "Konti z’imbuga nkoranyambaga (Facebook, Instagram, TikTok, YouTube, n’izindi)",
      "Porogaramu zo gushushanya no guhindura amashusho (Canva, CapCut, n’izindi)",
      "Igitabo cyo kwandikamo gahunda y’ibirimo",
      "Imeri ikoreshwa mu kazi",
      "Ibikoresho byo gusesengura uko imbuga zikora (analytics tools)",
      "Interineti yihuta kandi yizewe"
    ],
    pdf: "/pdfs/Social-Media-Marketing-Basics.pdf",
    video: "https://www.youtube.com/watch?v=I2pwcAVonKI",
    duration: "amasaha 3",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "cybersecurity-basics": {
       en: {
    title: "Cybersecurity Basics",
    description: [
      {
        step: "Step 1: Understanding Cybersecurity",
        details:
          "Learn what cybersecurity is and why it’s important in protecting your digital life from hackers, viruses, and scams. Understand how online threats can affect individuals and organizations."
      },
      {
        step: "Step 2: Password Protection",
        details:
          "Create strong passwords using a mix of letters, numbers, and symbols. Avoid using common or repeated passwords and learn about password managers."
      },
      {
        step: "Step 3: Using Two-Factor Authentication (2FA)",
        details:
          "Add an extra layer of security to your accounts by enabling 2FA. This helps protect your information even if someone gets your password."
      },
      {
        step: "Step 4: Safe Internet Browsing",
        details:
          "Learn to identify fake websites, phishing emails, and unsafe links. Practice responsible browsing habits to avoid data theft or malware."
      },
      {
        step: "Step 5: Software Updates & Device Security",
        details:
          "Regularly update your operating system, apps, and antivirus software to close security vulnerabilities and keep your devices safe."
      },
      {
        step: "Step 6: Data Privacy Awareness",
        details:
          "Understand how to keep your personal, financial, and social media information private. Learn about privacy settings and secure data sharing."
      },
      {
        step: "Step 7: Using Security Tools",
        details:
          "Get familiar with common security tools like antivirus software, firewalls, and VPNs to protect your system from external attacks."
      },
      {
        step: "Step 8: Responding to Cyber Attacks",
        details:
          "Know what to do if your account or device is compromised — how to recognize warning signs, recover your data, and secure your accounts again."
      }
    ],
   materials: [
      "Computer or laptop with internet access",
      "Antivirus or security software",
      "Secure password manager (optional)",
      "Notebook for notes and exercises",
      "Access to email and online accounts for practice",
      "Updated operating system and browser",
      "Reliable internet connection"
    ],
    pdf: "/pdfs/cybersecurity.pdf",
    video: "https://www.youtube.com/watch?v=ey4dXseAODE",
    duration: "2.5 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Ubumenyi mu mutekano wa interineti",
    description: [
      {
        step: "Intambwe ya 1: Gusobanukirwa n’umutekano wa interineti",
        details:
          "Menya icyo umutekano wa interineti usobanuye n’impamvu ari ingenzi mu kurinda ubuzima bwawe bwo kuri murandasi wirinda abajura b’iyakure, virusi, n’ubujura bw’amakuru."
      },
      {
        step: "Intambwe ya 2: Kurinda konti ukoresheje amagambo banga akomeye",
        details:
          "Koresha amagambo banga akomeye arimo inyuguti nini n’intoya, imibare, n’ibimenyetso. Wige uko wakoresha password manager kugira ngo ubikore neza."
      },
      {
        step: "Intambwe ya 3: Gukoresha Two-Factor Authentication (2FA)",
        details:
          "Ongeraho urwego rw’umutekano ku makonti yawe ukoresheje uburyo bwa 2FA kugira ngo wirinde n’iyo umuntu yaba abonye ijambo banga ryawe."
      },
      {
        step: "Intambwe ya 4: Kugenzura uburyo bwo gukoresha interineti mu buryo butekanye",
        details:
          "Menya kumenya imbuga n’amakuru y’ibinyoma, emails zishobora kuba zifite ari inyiganano zama kompani akomeye, n’amalink atari ayo kwizerwa. Ibyo bizagufasha kwirinda ubujura bw’amakuru."
      },
      {
        step: "Intambwe ya 5: Kuvugurura porogaramu n’umutekano w’ibikoresho",
        details:
          "Vugurura buri gihe operating system, applications, na antivirus kugira ngo wirinde ibyuho by’umutekano n’ibitero by’iyakure."
      },
      {
        step: "Intambwe ya 6: Kubungabunga amakuru yawe bwite",
        details:
          "Menya uburyo bwo kurinda amakuru yawe y’amafaranga, amazina, n’imbuga nkoranyambaga ukoresheje privacy settings n’uburyo bwo gusangiza amakuru butekanye."
      },
      {
        step: "Intambwe ya 7: Gukoresha ibikoresho by’umutekano",
        details:
          "Menya gukoresha ibikoresho nka antivirus, firewall, na VPN kugira ngo urinde sisitemu yawe ibitero byo hanze."
      },
      {
        step: "Intambwe ya 8: Icyo wakora iyo igikoresho cyawe cyatewe",
        details:
          "Menya kumenya ibimenyetso by’uko konti yawe cyangwa mudasobwa byinjiriwe, uko wafata ingamba vuba, n’uko wasubiza ibintu mu buryo busanzwe."
      }
    ],
     materials: [
      "Mudasobwa cyangwa laptop ifite interineti",
      "Porogaramu yo kurinda virusi cyangwa umutekano wa mudasobwa",
      "Porogaramu yo kubika amagambo banga mu buryo bwizewe (bidash obligatory)",
      "Igitabo cyo kwandikamo inyandiko n’imyitozo",
      "Konti ya imeri n’izindi konti za interineti zo gukora imyitozo",
      "Sisitemu ikoresha n’umufatabiganiro (browser) bigezweho",
      "Interineti yizewe kandi yihuta"
    ],
    pdf: "/pdfs/cybersecurity.pdf",
    video: "https://www.youtube.com/watch?v=ey4dXseAODE",
    duration: "amasaha 2 n’igice",
    difficulty: "Abatangizi – Abasanzwe"},
    },
  },
  enterpreneurship: {
    "starting-a-small-business": {
      en: {
    title: "Starting a Small Business",
    description: [
      {
        step: "Step 1: Identify Your Business Idea",
        details:
          "Think about a product or service that solves a real problem or meets a local need. Focus on something you’re passionate about and have the skills or resources to start."
      },
      {
        step: "Step 2: Research the Market",
        details:
          "Study your potential customers, competitors, and location. Understand what people need, what already exists, and how your idea can stand out."
      },
      {
        step: "Step 3: Create a Business Plan",
        details:
          "Write down your goals, target market, pricing, expenses, and how you plan to grow. A good plan helps you stay organized and attract investors or partners."
      },
      {
        step: "Step 4: Register Your Business",
        details:
          "Choose a business name, register it legally, and obtain any necessary licenses or permits. This makes your business official and trustworthy."
      },
      {
        step: "Step 5: Set Up Finances",
        details:
          "Open a business bank account, track income and expenses, and set a simple budget. Understand basic bookkeeping and manage your cash flow wisely."
      },
      {
        step: "Step 6: Promote Your Business",
        details:
          "Tell people about your products or services using flyers, social media, or word of mouth. Build good relationships with customers and offer quality service."
      },
      {
        step: "Step 7: Start Small and Improve",
        details:
          "Begin with small steps and test your idea. Learn from customer feedback and keep improving your products, prices, and marketing strategies."
      },
      {
        step: "Step 8: Grow and Sustain Your Business",
        details:
          "Once stable, explore how to expand — hire more workers, add products, or find new markets. Focus on consistency, trust, and customer satisfaction."
      }
    ],
    materials: [
      "Notebook or digital document for business planning",
      "Calculator or budgeting app",
      "Access to internet for research",
      "Business registration forms or templates",
      "Marketing materials (flyers, posters, or social media pages)",
      "Pen and paper for brainstorming",
      "Motivation and creativity"
    ],
    pdf: "/pdfs/business.pdf",
    video: "https://www.youtube.com/watch?v=wxyGeUkPYFM",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Gutangiza ubucuruzi buto",
    description: [
      {
        step: "Intambwe ya 1: Hitamo igitekerezo cy’ubucuruzi",
        details:
          "Tekereza ku kintu ushobora gucuruza cyangwa serivisi yakemura ikibazo rusange cyangwa ikenewe n'abantu hafi yawe. Hitamo icyo ukunda kandi ushoboye gukora."
      },
      {
        step: "Intambwe ya 2: Kora ubushakashatsi ku isoko",
        details:
          "Menya abo ushaka kugurisha, abo muhanganye ku isoko, n’aho uzakorera. Sobanukirwa ibyo abantu bakeneye n’uburyo ushobora gutandukana n’abandi."
      },
      {
        step: "Intambwe ya 3: Andika umushinga w’ubucuruzi (Business Plan)",
        details:
          "Andika intego zawe, abo ugamije kugeraho, ibiciro, amafaranga ukoresha, n’uburyo uteganya gukura. Uyu mushinga ugufasha gutegura neza ibikorwa byawe no gushaka abaterankunga."
      },
      {
        step: "Intambwe ya 4: Andikisha ubucuruzi bwawe",
        details:
          "Hitamo izina ry’ubucuruzi, uryandikishe mu buryo bwemewe, kandi ubone uruhushya cyangwa ibyangombwa bikenewe. Ibi bituma ubucuruzi bwawe bwemerwa kandi bwizera abakiriya."
      },
      {
        step: "Intambwe ya 5: Tegura imari n’ibaruramari",
        details:
          "Fungura konti y’ubucuruzi, ukurikirane amafaranga winjiza n’ayo ukoresha, kandi utegure ingengo y’imari yoroshye. Menya ibijyanye n’ibaruramari no gucunga amafaranga neza."
      },
      {
        step: "Intambwe ya 6: Yamamaza ubucuruzi bwawe",
        details:
          "Menyesha abantu ibyo ukora ukoresheje impapuro, imbuga nkoranyambaga, cyangwa kuvugana n’abantu. Fata neza abakiriya kandi utange serivisi nziza."
      },
      {
        step: "Intambwe ya 7: Tangira buhoro buhoro",
        details:
          "Tangira n’intambwe nto — gerageza igitekerezo cyawe, wumve uko abakiriya babyakira, hanyuma uhindure cyangwa uvugurure ibyo ukora kugira ngo urusheho gutera imbere."
      },
      {
        step: "Intambwe ya 8: Kuza kandi ukomeze ubucuruzi bwawe",
        details:
          "Nimba ubona butangiye kunguka, tekereza uburyo bwo kwagura — kongeramo ibicuruzwa, gushaka isoko rishya, cyangwa gukoresha abakozi bashya. Icy’ingenzi ni ukugumana icyizere n’abakiriya no gukora neza buri munsi."
      }
    ],
    materials: [
      "Igitabo cyangwa inyandiko yo guteguramo gahunda y’ubucuruzi",
      "Kalikireteri cyangwa porogaramu yo kubara ingengo y’imari",
      "Interineti yo gukora ubushakashatsi",
      "Impapuro cyangwa inyandiko zo kwiyandikisha mu bucuruzi",
      "Ibikoresho byo kwamamaza (amafishi, amatangazo, cyangwa imbuga nkoranyambaga)",
      "Ikaramu n’impapuro byo gutekererezaho ibitekerezo",
      "Umwete n’ubushishozi"
    ],
    pdf: "/pdfs/business.pdf",
    video: "https://www.youtube.com/watch?v=wxyGeUkPYFM",
    duration: "amasaha 3",
    difficulty: "Abatangizi – Abasanzwe"},
    },
    "financial-literacy-bookkeeping": {
      en: {
    title: "Financial Literacy & Bookkeeping",
    description: [
      {
        step: "Step 1: Understand the Basics of Money Management",
        details:
          "Learn the difference between income, expenses, savings, and investments. Understanding where your money comes from and where it goes is the foundation of financial control."
      },
      {
        step: "Step 2: Create a Personal or Business Budget",
        details:
          "List all your income sources and expenses. Assign amounts for rent, food, transport, business materials, and savings. A clear budget helps you avoid overspending and debt."
      },
      {
        step: "Step 3: Track Every Transaction",
        details:
          "Record all money you earn and spend, whether personal or business. You can use a notebook, Excel sheet, or bookkeeping apps to keep accurate records."
      },
      {
        step: "Step 4: Separate Personal and Business Finances",
        details:
          "Never mix your personal expenses with your business money. Open a dedicated business account to make tracking profits and expenses easier."
      },
      {
        step: "Step 5: Learn Basic Accounting Principles",
        details:
          "Understand key terms like assets, liabilities, revenue, and expenses. These help you know if your business is profitable or losing money."
      },
      {
        step: "Step 6: Manage Savings and Investments",
        details:
          "Save a portion of your income regularly. Start small but stay consistent. Consider investing in low-risk options that can grow your capital over time."
      },
      {
        step: "Step 7: Keep Financial Records Organized",
        details:
          "File receipts, invoices, and transaction notes properly. Good organization helps during audits, tax time, or when applying for loans."
      },
      {
        step: "Step 8: Review and Improve Regularly",
        details:
          "At the end of every month, review your spending habits. Find areas where you can cut unnecessary costs and increase savings or business investment."
      }
    ],
    materials: [
      "Notebook or accounting book",
      "Calculator or budgeting app",
      "Pen and ruler for record keeping",
      "Templates for income and expense tracking",
      "Access to spreadsheet tools (Excel, Google Sheets)",
      "Financial documents or mock data for practice",
      "Motivation to manage money responsibly"
    ],
    pdf: "/pdfs/bookkeeping.pdf",
    video: "https://www.youtube.com/watch?v=pKpdibyljR4",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Kumenya gucunga amafaranga neza",
    description: [
      {
        step: "Intambwe ya 1: Sobanukirwa imicungire y’amafaranga",
        details:
          "Menya itandukaniro riri hagati y’amafaranga winjiza, ayo ukoresha, ayo ubika, n’ayo ushora. Kumenya aho amafaranga ava n’aho ajya ni intangiriro yo kuyacunga neza."
      },
      {
        step: "Intambwe ya 2: Tegura ingengo y’imari (Budget)",
        details:
          "Andika aho amafaranga yawe ava n’aho ajya: ubukode, ibiribwa, itike, ibikoresho by’ubucuruzi, n’amafaranga yo kubika. Ibi bigufasha kwirinda gusesagura no kujya mu madeni."
      },
      {
        step: "Intambwe ya 3: Kurikirana buri transaction",
        details:
          "Andika buri amafaranga winjije cyangwa ukoresheje, yaba ayawe bwite cyangwa ay’ubucuruzi. Ushobora gukoresha ikaye, Excel, cyangwa porogaramu z’ibaruramari."
      },
      {
        step: "Intambwe ya 4: Tandukanya amafaranga yawe n’ay’ubucuruzi",
        details:
          "Ntukavange ayo ukoresha ku buzima bwawe n’ay’ubucuruzi. Fungura konti yihariye y’ubucuruzi kugira ngo ubashe kubona inyungu n’amafaranga ukoresha byoroshye."
      },
      {
        step: "Intambwe ya 5: Menya iby'ibanze ku ibaruramari",
        details:
          "Sobanukirwa amagambo y’ingenzi nka assets (ibikoresho bifite agaciro), liability (amadeni), inyungu, n’ibihombo. Ibi bigufasha kumenya niba ubucuruzi bwawe butanga inyungu cyangwa butakaza."
      },
      {
        step: "Intambwe ya 6: Bika kandi ushore neza",
        details:
          "Gerageza kubika igice cy’amafaranga yawe buri gihe. Tangirira ku macye ariko ukomeze ushikame. Ushobora no gushora mu bintu bidafite ibihombo byinshi kugira ngo amafaranga yawe yunguke."
      },
      {
        step: "Intambwe ya 7: Tegura neza inyandiko z’ibaruramari",
        details:
          "Bika neza fagitire, inyemezabwishyu, n’andi makuru y’amafaranga. Ibi bizagufasha igihe cyo gusora, gukora igenzura, cyangwa gusaba inguzanyo."
      },
      {
        step: "Intambwe ya 8: Ongera usuzume buri kwezi",
        details:
          "Shyiraho igihe cyo gusubiramo uko ukoresha amafaranga buri kwezi. Menya aho ushora byinshi bidakenewe, wongere ibyo ubika cyangwa ushore neza mu bikorwa byunguka."
      }
    ],
    materials: [
      "Igitabo cy’ibaruramari cyangwa ikaye yo kwandikamo imikoreshereze",
      "Kalikireteri cyangwa porogaramu yo kubara ingengo y’imari",
      "Ikaramu n’agacamurongo (ruler) byo gufasha mu kwandika neza",
      "Inyandiko ziteguye zo gukurikirana amafaranga yinjira n’asohoka",
      "Porogaramu za Excel cyangwa Google Sheets",
      "Impapuro cyangwa amakuru y’igerageza yo gukora imyitozo",
      "Umwete wo gucunga amafaranga mu buryo buboneye"
    ],
    pdf: "/pdfs/bookkeeping.pdf",
    video: "https://www.youtube.com/watch?v=pKpdibyljR4",
    duration: "amasaha 3",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "sales-marketing": {
     en: {
    title: "Sales & Marketing",
    description: [
      {
        step: "Step 1: Understand Your Product",
        details: "Learn everything about your product or service — its features, benefits, and how it solves customer problems."
      },
      {
        step: "Step 2: Identify Your Market",
        details: "Research who your potential customers are, what they need, and what motivates them to make a purchase."
      },
      {
        step: "Step 3: Develop a Sales Strategy",
        details: "Plan how to reach your customers — through social media, local events, advertisements, or partnerships."
      },
      {
        step: "Step 4: Create a Marketing Plan",
        details: "Set pricing, design promotions, and build a brand message that connects emotionally with your audience."
      },
      {
        step: "Step 5: Build Customer Relationships",
        details: "Offer excellent service, maintain communication, and encourage customer loyalty through trust and reliability."
      },
      {
        step: "Step 6: Measure and Improve",
        details: "Track your sales and marketing results regularly to understand what works and improve future performance."
      }
    ],
    materials: [
      "Notebook or digital planner for marketing ideas",
      "Samples or photos of products to sell",
      "Calculator for pricing and profit calculations",
      "Access to social media or e-commerce platforms",
      "Flyers, posters, or digital design tools (e.g., Canva)",
      "Pen and paper for note-taking",
      "Confidence and good communication attitude"
    ],
    pdf: "/pdfs/sales marketing.pdf",
    video: "https://www.youtube.com/watch?v=ZYw52nVZl_0",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Kugurisha no kwamamaza",
    description: [
      {
        step: "Intambwe ya 1: Menya neza ibicuruzwa byawe",
        details: "Sobanukirwa neza ibiranga ibicuruzwa cyangwa serivisi utanga — ibyiza bifite n’uko bifasha abakiriya."
      },
      {
        step: "Intambwe ya 2: Menya isoko ryawe",
        details: "Shakisha amakuru ku bakiriya bashoboka, ibyo bakeneye, n’impamvu zibatera kugura ibicuruzwa byawe."
      },
      {
        step: "Intambwe ya 3: Tegura uburyo bwo kugurisha",
        details: "Tegura uburyo bwo kugera ku bakiriya — ukoreshe imbuga nkoranyambaga, ibikorwa byo kwamamaza, cyangwa ubufatanye n’abandi."
      },
      {
        step: "Intambwe ya 4: Kora gahunda yo kwamamaza",
        details: "Shyiraho ibiciro, uburyo bwo kwamamaza, n’ubutumwa bugaragaza ikirango cyawe mu buryo bushimishije."
      },
      {
        step: "Intambwe ya 5: Kubaka umubano n’abakiriya",
        details: "Tanga serivisi nziza, ukurikirane abakiriya nyuma yo kugurisha, kandi ubarinde kuba ab’igihe gito gusa."
      },
      {
        step: "Intambwe ya 6: Pima ibisubizo n’iterambere",
        details: "Kurikirana uko ibikorwa byawe bigenda, reba ibikora neza, kandi wihugure kugira ngo urusheho gutera imbere."
      }
    ],
    materials: [
      "Igitabo cyangwa porogaramu yo kwandikamo ibitekerezo byo kwamamaza",
      "Icyitegererezo cyangwa amafoto y’ibicuruzwa ushaka kugurisha",
      "Kalikireteri yo kubara ibiciro n’inyungu",
      "Imbuga nkoranyambaga cyangwa iz’amakuru z’ubucuruzi kuri interineti",
      "Amatangazo, amafishi cyangwa porogaramu zo gushushanya (nka Canva)",
      "Ikaramu n’impapuro byo kwandikaho",
      "Kwiyizera no kugira uburyo bwiza bwo kuvugana n’abakiriya"
    ],
    pdf: "/pdfs/sales marketing.pdf.pdf",
    video: "https://www.youtube.com/watch?v=ZYw52nVZl_0",
    duration: "amasaha 3",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "e-commerce-and-online-selling": {
      en: {
    title: "E-commerce & Online Selling",
    description: [
      {
        step: "Step 1: Choose Your Product and Niche",
        details: "Decide what you want to sell online. Choose products you understand and that have consistent demand. Study competitors and find a unique angle."
      },
      {
        step: "Step 2: Set Up an Online Store",
        details: "Use platforms like Shopify, WooCommerce, or social media shops to display your products. Add high-quality photos, prices, and clear descriptions."
      },
      {
        step: "Step 3: Set Up Payment and Delivery Systems",
        details: "Enable online payments through cards, mobile money, or PayPal. Partner with delivery companies to ensure fast and safe shipping."
      },
      {
        step: "Step 4: Market Your Store",
        details: "Use social media, Google ads, or influencers to attract customers. Offer discounts and promote your brand with engaging content."
      },
      {
        step: "Step 5: Provide Customer Support",
        details: "Respond to questions quickly, handle complaints professionally, and ensure customers are satisfied to encourage repeat business."
      },
      {
        step: "Step 6: Track Performance and Improve",
        details: "Use analytics tools to see what sells best. Improve your website, marketing, and customer service based on results."
      }
    ],
   materials: [
      "Computer or smartphone with internet access",
      "Email account for business setup",
      "Product photos or digital catalog",
      "Access to e-commerce platforms (Shopify, Jumia, Etsy, etc.)",
      "Payment method (PayPal, MoMoPay, or bank account)",
      "Notebook for order and inventory tracking",
      "Graphic design tools for product presentation (e.g., Canva)"
    ],
    pdf: "/pdfs/e-commerce-guide.pdf",
    video: "https://www.youtube.com/watch?v=-_ReOcqS15g",
    duration: "3.5 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Gucuruza hifashishijwe interineti",
    description: [
      {
        step: "Intambwe ya 1: Hitamo ibicuruzwa cyangwa urwego wibandaho",
        details: "Hitamo ibyo ushaka kugurisha kuri interineti. Genzura neza ibicuruzwa bikunzwe kandi ushake uburyo bwo kubitandukanya n’iby’abandi."
      },
      {
        step: "Intambwe ya 2: Fungura iduka rya interineti",
        details: "Koresha imbuga nka Shopify, WooCommerce, cyangwa amasoko ya WhatsApp/Facebook. Shyiramo amafoto meza, ibiciro, n’ibisobanuro byuzuye."
      },
      {
        step: "Intambwe ya 3: Tegura uburyo bwo kwishyura no gutanga ibicuruzwa",
        details: "Emerera abakiriya kwishyura ukoresheje Mobile Money, amakarita, cyangwa PayPal. Korana n’abatanga serivisi zo gutanga ibicuruzwa."
      },
      {
        step: "Intambwe ya 4: Amamaza iduka ryawe",
        details: "Koresha imbuga nkoranyambaga, abamamaza, cyangwa amafoto n’amashusho akurura abantu. Tanga amapromotion n’amahirwe yo kugura."
      },
      {
        step: "Intambwe ya 5: Tanga serivisi nziza ku bakiriya",
        details: "Subiza vuba abakiriya, ukemure ibibazo byabo neza, kandi ugerageze kubagarura kugura kenshi."
      },
      {
        step: "Intambwe ya 6: Sukura imikorere yawe",
        details: "Reba uko ubucuruzi bwawe buhagaze ukoresheje raporo. Hindura aho bikenewe kugira ngo wongere ubucuruzi n’ubunyangamugayo mu gutanga serivisi."
      }
    ],
    materials: [
      "Mudasobwa cyangwa telefoni ifite interineti",
      "Imeri ikoreshwa mu bikorwa by’ubucuruzi",
      "Amafoto cyangwa urutonde rwa serivisi n’ibicuruzwa",
      "Konti ku mapulatiforome ya e-commerce (Shopify, Jumia, Etsy, n’izindi)",
      "Uburyo bwo kwakira ubwishyu (PayPal, MoMoPay, cyangwa konti ya banki)",
      "Igitabo cyo gukurikirana ibicuruzwa n’amategeko y’ibyo watanze",
      "Porogaramu zo gushushanya ibicuruzwa (nka Canva)"
    ],
    pdf: "/pdfs/e-commerce-guide.pdf",
    video: "https://www.youtube.com/watch?v=-_ReOcqS15g",
    duration: "amasaha 3 n’igice",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "personal-branding-networking": {
       en: {
    title: "Personal Branding & Networking",
    description: [
      {
        step: "Step 1: Identify Your Strengths and Values",
        details: "Understand what makes you unique — your skills, values, and passions. This becomes the foundation of your personal brand."
      },
      {
        step: "Step 2: Build an Authentic Online Presence",
        details: "Create professional profiles on platforms like LinkedIn, X (Twitter), or Instagram. Use a consistent photo, bio, and tone that reflect who you are."
      },
      {
        step: "Step 3: Showcase Your Work and Achievements",
        details: "Post examples of your work, share lessons learned, and celebrate accomplishments to show credibility and build trust."
      },
      {
        step: "Step 4: Network with Intention",
        details: "Connect with people in your field. Attend events, join online communities, and engage with others’ content genuinely."
      },
      {
        step: "Step 5: Offer Value Before You Ask",
        details: "When networking, focus on helping others first. Share advice, resources, or feedback — this builds strong, long-term connections."
      },
      {
        step: "Step 6: Maintain and Grow Your Brand",
        details: "Stay consistent, update your audience about your progress, and keep improving your image as you grow professionally."
      }
    ],
    materials: [
      "Notebook or digital planner for personal goals",
      "Professional profile photo and bio",
      "Social media accounts (LinkedIn, Instagram, etc.)",
      "Business cards or digital contact links",
      "Portfolio or samples of your work",
      "Confidence and communication skills",
      "Internet connection for online networking"
    ],
    pdf: "/pdfs/personal_brand_workbook.pdf",
    video: "https://www.youtube.com/watch?v=PkHbP3hX7XA",
    duration: "2.5 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Kubaka izina ryawe no kwagura imikoranire",
    description: [
      {
        step: "Intambwe ya 1: Menya imbaraga n’indangagaciro zawe",
        details: "Sobanukirwa n’ibiguhesha agaciro n’ibiguhesha umwihariko — ubumenyi, indangagaciro, n’ibyo ukunda gukora. Ibi nibyo shingiro ry’izina ryawe."
      },
      {
        step: "Intambwe ya 2: Ubaka isura yawe kuri interineti",
        details: "Fungura konti ku mbuga nkoranyambaga z’umwuga nka LinkedIn, X (Twitter), cyangwa Instagram. Koresha ifoto imwe, ibisobanuro bihamye, n’uburyo bwo kwandika bukwerekana neza."
      },
      {
        step: "Intambwe ya 3: Erekana ibyo ushoboye n’ibyo wagezeho",
        details: "Sangiza imirimo wakoze, amasomo wize mu rugendo rwawe, n’ibyo wagezeho kugira ngo wubake icyizere n’umwuga ufatika."
      },
      {
        step: "Intambwe ya 4: Agura imikoranire ufite intego",
        details: "Menya abantu bakora ibintu bisa n’ibyawe, ujye mu bikorwa cyangwa amatsinda y’abanyamwuga, kandi wifatanye n’abandi ku mbuga nkoranyambaga."
      },
      {
        step: "Intambwe ya 5: Tanga agaciro mbere yo gusaba",
        details: "Mugihe ushaka imikoranire, banza utange inyunganizi — ibitekerezo, inama, cyangwa ubufasha. Ibi bituma imibanire irushaho kuba ikomeye kandi irambye."
      },
      {
        step: "Intambwe ya 6: Komeza kubaka no gukuza izina ryawe",
        details: "Jya wibutsa abantu ibyo wagezeho, uvugurure ibikwerekeyeho, kandi ukomeze kunoza uburyo abantu bakubona mu mwuga wawe."
      }
    ],
     materials: [
      "Igitabo cyangwa porogaramu yo kwandikamo intego zawe bwite",
      "Ifoto n’umwirondoro w’umwuga",
      "Konti z’imbuga nkoranyambaga (LinkedIn, Instagram, n’izindi)",
      "Amakarita y’akazi cyangwa imiyoboro yo guhanahana amakuru kuri interineti",
      "Urutonde cyangwa ibyitegererezo by’ibikorwa byawe",
      "Kwiyizera no kugira ubuhanga mu itumanaho",
      "Interineti yizewe yo gukoresha mu mbuga z’abanyamwuga"
    ],
    pdf: "/pdfs/personal_brand_workbook.pdf",
    video: "https://www.youtube.com/watch?v=PkHbP3hX7XA",
    duration: "amasaha 2 n’igice",
    difficulty: "Abatangizi – Abasanzwe" },
    },
  },
  "creative-skills": {
    "music-production-sound-editing": {
      en: {
    title: "Music Production & Sound Editing",
    description: [
      {
        step: "Step 1: Understand Music Production Basics",
        details: "Learn the core concepts of sound, rhythm, melody, and harmony. Understand how songs are structured and what makes them sound professional."
      },
      {
        step: "Step 2: Know what you need to make your music",
        details: "There are two main ways you can make your music, Using your Smart phone and apps like N-Track studio which is almost complete studio if you have enough skills or setting up Professional Music studio"
      },
      {
        step: "Step 3: Set Up Your Studio",
        details: "Gather basic equipment like a laptop, digital audio workstation (DAW), headphones, and a microphone. Free DAWs like Audacity, Waveform Free(I recommend this) or professional ones like FL Studio, Logic Pro, or Ableton Live can be used."
      },
      {
        step: "Step 4: Learn How to Record Audio",
        details: "Practice recording vocals or instruments using your microphone and DAW. Learn to manage volume levels, remove background noise, and capture clean sound."
      },
      {
        step: "Step 5: Editing and Mixing",
        details: "Edit your recordings by cutting mistakes, aligning sounds, and balancing volumes. Use equalization (EQ), compression, and reverb to polish the sound."
      },
      {
        step: "Step 6: Mastering the Track",
        details: "Mastering is the final stage that makes your song ready for release. Learn to adjust the loudness and tonal balance to make your music sound clear on all devices."
      },
      {
        step: "Step 7: Export and Share",
        details: "Export your track in high-quality formats like WAV or MP3. Share your music on platforms like SoundCloud, YouTube, or Spotify to reach listeners."
      }
    ],
    materials: [
      "Computer or laptop with sufficient RAM and storage",
      "Digital Audio Workstation (DAW) software (e.g., FL Studio, Ableton, Logic Pro, Waveform free(recommended))",
      "Audio interface for connecting instruments or microphones",
      "Microphone for recording vocals or instruments",
      "Headphones for accurate sound monitoring",
      "MIDI keyboard or controller (optional)",
      "External storage for saving projects"
    ],
    pdf: "/pdfs/MakingMusic.pdf",
    video: "https://www.youtube.com/watch?v=Hi72cCOPUQU",
    duration: "5 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Gukora umuziki no gutunganya amajwi",
    description: [
      {
        step: "Intambwe ya 1: Menya ibya mbere mu gukora umuziki",
        details: "Menya ibijyanye n’amajwi, injyana, n’imiririmbire. Sobanukirwa uburyo indirimbo zigira imiterere n’uko zishobora kumvikana neza mu buryo bwa kinyamwuga."
      },
      {
  step: "Intambwe ya 2: Menya ibikenewe kugira ngo ukore umuziki wawe",
  details: "Hari uburyo bubiri wakoresha mu gukora umuziki wawe: ukoresheje telefoni ngendanwa hamwe na porogaramu nka N-Track Studio — ishobora gukora nk’aho ari studio yuzuye niba ufite ubumenyi buhagije, cyangwa gushinga studio y’umwuga (Professional Music Studio)."
},
      {
        step: "Intambwe ya 3: Tegura studio yawe",
        details: "Shaka ibikoresho by’ibanze nka mudasobwa, porogaramu yo gutunganya amajwi (DAW), ecouteurs, n’indangururamajwi. Ushobora gukoresha WaveForm free(I recommend this) Audacity, FL Studio, cyangwa Ableton Live."
      },
      {
        step: "Intambwe ya 4: Menya gufata amajwi",
        details: "Kora imyitozo yo gufata amajwi y’indirimbo cyangwa ibikoresho ukoresheje mikoro na DAW yawe. Wige kugabanya urusaku no gufata amajwi asukuye."
      },
      {
        step: "Intambwe ya 5: Gutunganya no kuvanga amajwi",
        details: "Kata amakosa mu majwi, uhuze amajwi atandukanye kandi ugenzure ingano z’amajwi. Koresha ibikoresho nka EQ, compression, na reverb kugira ngo amajwi yumvikane neza."
      },
      {
        step: "Intambwe ya 6: Gusoza no gutunganya indirimbo (Mastering)",
        details: "Gutunganya bwa nyuma kugira ngo indirimbo yumvikane neza kuri buri gikoresho. Tegura uburemere n’urusobe rw’amajwi kugira ngo yumvikane neza mu buryo bwa kinyamwuga."
      },
      {
        step: "Intambwe ya 7: Gusohora no gusangiza indirimbo",
        details: "Bika indirimbo mu buryo bufite ireme nka WAV cyangwa MP3, hanyuma uyisangize abantu kuri SoundCloud, YouTube, cyangwa Spotify."
      }
    ],
     materials: [
      "Mudasobwa cyangwa laptop ifite RAM n’ububiko bihagije",
      "Telephone ifite ububiko buhagije ugashyiramo application ya n-Track Studio niba wifuza gukoresha telephone",
      "Porogaramu yo gutunganya amajwi (DAW) nka FL Studio, Ableton, Logic Pro, Waveform Free(recommended)",
      "Audio interface yo guhuza ibikoresho cyangwa microphone",
      "Microphone yo gufata amajwi y’indirimbo cyangwa ibikoresho bya muzika",
      "Ecouteurs cyangwa headphones zo kumva amajwi neza",
      "MIDI keyboard cyangwa controller (si ngombwa cyane)",
      "Ububiko bwo hanze bwo kubika imishinga y’umuziki"
    ],
    pdf: "/pdfs/MakingMusic.pdf",
    video: "https://www.youtube.com/watch?v=Hi72cCOPUQU",
    duration: "amasaha 5",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "graphic-design-illustration": {
       en: {
    title: "Graphic Design & Illustration",
    description: [
      {
        step: "1. Introduction to Graphic Design",
        details: [
          "Learn the basics of design: color theory, typography, and composition.",
          "Understand design tools like Adobe Photoshop, Illustrator, and Canva.",
          "Explore different types of design: logos, posters, digital art, and illustrations."
        ]
      },
      {
        step: "2. Planning Your Design",
        details: [
          "Define the purpose and target audience of your design.",
          "Sketch rough drafts and brainstorm ideas before creating digitally.",
          "Choose appropriate color palettes, fonts, and styles."
        ]
      },
      {
        step: "3. Creating Digital Designs",
        details: [
          "Use software to bring your sketches to life digitally.",
          "Learn layers, masks, and vector graphics.",
          "Incorporate images, icons, and illustrations effectively."
        ]
      },
      {
        step: "4. Refining and Finalizing",
        details: [
          "Review your design for balance, readability, and appeal.",
          "Adjust colors, contrast, and spacing for optimal presentation.",
          "Export your design in suitable formats for web or print."
        ]
      }
    ],
    materials: [
      "Computer or laptop with internet access",
      "Graphic design software (e.g., Adobe Illustrator, Photoshop, CorelDRAW, or Canva)",
      "Drawing tablet (optional, for digital illustration)",
      "Notebook or sketchbook for ideas and sketches",
      "Reference images or inspiration resources",
      "Pen, pencils, and markers for hand-drawn sketches",
      "Access to online tutorials or courses for learning techniques"
    ],
    pdf: "/pdfs/GraphicDesigning.pdf",
    video: "https://www.youtube.com/watch?v=Hi72cCOPUQU",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Gushushanya no Kwerekana Ibihangano",
    description: [
      {
        step: "1. Intangiriro ku gushushanya",
        details: [
          "Menya ibintu by'ingenzi mu gushushanya: amahitamo y'amabara, typography, no gutegura ibishushanyo.",
          "Sobanukirwa ibikoresho byo gushushanya nka Adobe Photoshop, Illustrator, na Canva.",
          "Menya ubwoko butandukanye bw'ibishushanyo: amalogos, amaposters, digital art, na illustrations."
        ]
      },
      {
        step: "2. Gutegura igishushanyo cyawe",
        details: [
          "Shyiraho intego, umenye kandi wite ku bareba igishushanyo cyawe.",
          "Shushanya ibishushanyo by’ibanze ndetse  unatekereze ku miterere y'igishushanyo mbere yo gukoresha mudasobwa.",
          "Hitamo amabara, imigaragarire, n’amasomo akwiye."
        ]
      },
      {
        step: "3. Gukora ibishushanyo kuri mudasobwa",
        details: [
          "Koresha software kugirango ibishushanyo byawe by'ibanze bihinduke iby'ikoranabuhanga.",
          "Menya gukoresha layers, masks, na vector graphics.",
          "Shyiramo amafoto, icons, n'ibishushanyo neza kandi byiza."
        ]
      },
      {
        step: "4. Gukosora no gusoza igishushanyo",
        details: [
          "Reba igishushanyo cyawe neza: balance, readability, n'uburyo bishobora kuryohera amaso.",
          "Hindura amabara, contrast, n’ahantu ndetse n'ibintu kugira ngo bigaragare neza.",
          "Exportinga igishushanyo cyawe mu buryo bukwiye ku mbuga cyangwa ugiprintinge."
        ]
      }
    ],
    materials: [
      "Mudasobwa cyangwa laptop ifite interineti",
      "Porogaramu zo gushushanya (Adobe Illustrator, Photoshop, CorelDRAW, cyangwa Canva)",
      "Tablette yo gushushanyaho (bidash obligatory, ku bishushanyo biri digital)",
      "Igitabo cyangwa sketchbook yo kwandikamo ibitekerezo n’ibishushanyo",
      "Amafoto y’icyitegererezo cyangwa ibikoresho by’ishusho byo gufatiraho ibitekerezo",
      "Ikaramu n’amacrayon yo gushushanya",
      "Kugera ku masomo yo kuri interineti yo kwiga uburyo bwo gushushanya"
    ],
    pdf: "/pdfs/GraphicDesigning.pdf",
    video: "https://www.youtube.com/watch?v=Hi72cCOPUQU",
    duration: "amasaha 4",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "storytelling-creative-writing": {
      en: {
    title: "Storytelling & Creative Writing",
    description: [
      {
        step: "1. Introduction to Storytelling",
        details: [
          "Learn the elements of a story: plot, characters, setting, conflict, and resolution.",
          "Understand different genres: fiction, non-fiction, fantasy, mystery, and poetry.",
          "Explore how stories influence emotions, imagination, and communication skills."
        ]
      },
      {
        step: "2. Developing Ideas",
        details: [
          "Brainstorm and write down all ideas without judgment.",
          "Use mind maps, prompts, or real-life experiences to inspire creativity.",
          "Select an idea that excites you and has a clear message or theme."
        ]
      },
      {
        step: "3. Structuring Your Story",
        details: [
          "Plan your story with a clear beginning, middle, and end.",
          "Create character profiles and define their goals and motivations.",
          "Outline key events and turning points in your narrative."
        ]
      },
      {
        step: "4. Writing and Drafting",
        details: [
          "Write your story freely without worrying about perfection.",
          "Focus on engaging language, dialogue, and descriptive details.",
          "Experiment with different writing styles and points of view."
        ]
      },
      {
        step: "5. Editing and Refining",
        details: [
          "Review your work for grammar, clarity, and flow.",
          "Seek feedback from others and make improvements.",
          "Polish the story to make it compelling and emotionally impactful."
        ]
      }
    ],
   materials: [
      "Notebook or journal for writing ideas",
      "Pen or pencil",
      "Computer or tablet for digital writing",
      "Reference books or online articles for inspiration",
      "Story outlines or templates",
      "Dictionary and thesaurus (optional)",
      "Quiet and comfortable workspace"
    ],
    pdf: "/pdfs/creative-writing.pdf",
    video: "https://www.youtube.com/watch?v=t5Z-Q1bg1tU",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Kwandika inkuru no gukora ibihangano",
    description: [
      {
        step: "1. Intangiriro ku kwandika inkuru",
        details: [
          "Menya ibice by’inkuru: ingingo nyamukuru, abakinnyi, aho inkuru ibera, amakimbirane, n’icyo igamije.",
          "Sobanukirwa ingeri zitandukanye: inkuru mpimbano, inkuru mpamo, izisetsa, amayobera, cyangwa ibisigo.",
          "Menya uko inkuru ishobora gutuma abantu bumva, batekereza, cyangwa uko igirira abantu akamaro mu itumanaho."
        ]
      },
      {
        step: "2. Gutegura ibitekerezo",
        details: [
          "Tegura ibitekerezo byose utabanje kubinoza.",
          "Koresha ibyiyumviro, ubushakashatsi, cyangwa uburambe bw’ubuzima mu gushakisha ibitekerezo.",
          "Hitamo igitekerezo kigushimisha kandi gifite ubutumwa cyangwa insanganyamatsiko isobanutse."
        ]
      },
      {
        step: "3. Gushyiraho structure y’inkuru",
        details: [
          "Tegura inkuru yawe ifite intangiriro, igihimba, n’umusozo usobanutse.",
          "Kora profile y’abakinnyi n’intego zabo n’impamvu zabo.",
          "Tegura ibihe nyamukuru n’ibihindura inkuru mu buryo bwumvikana."
        ]
      },
      {
        step: "4. Kwandika no gukora draft",
        details: [
          "Andika inkuru yawe nta bwoba bwo gukora amakosa.",
          "Shyira imbaraga mu magambo akurura, ibiganiro, n’ibisobanuro byuzuye.",
          "Gerageza uburyo butandukanye bwo kwandika n’amarangamutima atandukanye."
        ]
      },
      {
        step: "5. Guhindura no kunoza inkuru",
        details: [
          "Reba niba hari amakosa y’imyandikire, gusobanura neza, no gutunganya inkuru.",
          "Saba abandi gutanga ibitekerezo kandi wikosore.",
          "Tunganya inkuru kugirango ibe iteye amatsiko kandi ikore ku mutima w’umusomyi."
        ]
      }
    ],
     materials: [
      "Igitabo cyangwa ikaye yo kwandikamo ibitekerezo",
      "Ikaramu cyangwa crayon",
      "Mudasobwa cyangwa tablette yo kwandikaho mu buryo buri digital",
      "Ibitabo cyangwa inyandiko zo kuri interineti byagutera ibitekerezo",
      "Inyandiko z’inkuru cyangwa templates zo gukurikiza",
      "Igitabo cy’amagambo n’icy’amagambo ajyanye (dictionary na thesaurus, gusa si ngombwa cyane)",
      "Ahantu hatuje kandi heza ho kwandikira"
    ],
    pdf: "/pdfs/creative-writing.pdf",
    video: "https://www.youtube.com/watch?v=t5Z-Q1bg1tU",
    duration: "amasaha 3",
    difficulty: "Abatangizi – Abasanzwe"},
    },
    "content-creation-tiktok-youtube-instagram": {
     en: {
    title: "Content Creation (TikTok, YouTube, Instagram)",
    description: [
      {
        step: "1. Understanding Your Platform",
        details: [
          "Learn the differences between TikTok, YouTube, and Instagram in terms of audience, content length, and engagement.",
          "Understand platform algorithms, trends, and what type of content performs best.",
          "Explore examples of successful content creators in your niche."
        ]
      },
      {
        step: "2. Planning Your Content",
        details: [
          "Brainstorm ideas using trends, challenges, or your unique perspective.",
          "Create a content calendar to schedule regular uploads and maintain consistency.",
          "Decide on the type of content: tutorials, entertainment, vlogs, or reviews."
        ]
      },
      {
        step: "3. Filming and Recording",
        details: [
          "Learn basic filming techniques: framing, lighting, and angles.",
          "Use smartphones or cameras depending on your resources.",
          "Record multiple takes to ensure high-quality footage."
        ]
      },
      {
        step: "4. Editing Your Content",
        details: [
          "Use editing software like CapCut, Adobe Premiere, or InShot.",
          "Add effects, transitions, captions, and music to enhance your content.",
          "Ensure pacing and clarity to keep viewers engaged."
        ]
      },
      {
        step: "5. Posting and Engaging",
        details: [
          "Write engaging captions and use relevant hashtags.",
          "Post consistently and at times when your audience is active.",
          "Respond to comments and interact with your followers to build a community."
        ]
      },
      {
        step: "6. Analyzing Performance",
        details: [
          "Check analytics to see which content performs best.",
          "Adjust your strategy based on audience engagement and feedback.",
          "Keep experimenting and improving your content over time."
        ]
      }
    ],
    materials: [
      "Smartphone or camera for recording videos",
      "Tripod or stabilizer (optional for steady shots)",
      "Video editing software or apps (CapCut, InShot, Adobe Premiere, etc.)",
      "Good lighting (natural or ring light)",
      "Microphone for clear audio (optional)",
      "Notebook for planning content ideas",
      "Social media accounts for posting"
    ],
    pdf: "/pdfs/content-creation.pdf",
    video: "https://www.youtube.com/watch?v=-HrfqfDyqCQ",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Gukora ibihangano kuri TikTok, YouTube, Instagram",
    description: [
      {
        step: "1. Kumenya imbuga uzakoresha",
        details: [
          "Menya itandukaniro rya TikTok, YouTube, na Instagram ku bijyanye n’abakunzi, igihe cyo gukora video, n’uburyo bwo gukurura abantu.",
          "Sobanukirwa algorithms, ibigezweho, n’ubwoko bw’ibihangano bikunzwe.",
          "Reba urugero rw’abakora ibihangano neza mu ngeri ushaka gukora."
        ]
      },
      {
        step: "2. Gutegura ibihangano",
        details: [
          "Tegura ibitekerezo ukoresheje ibigezweho, challenges, cyangwa uburyo bwawe bwihariye.",
          "Kora content calendar kugirango ushyireho gahunda yo gushyira video buri gihe.",
          "Hitamo ubwoko bw’ibihangano: tutorials, entertainment, vlogs, cyangwa reviews."
        ]
      },
      {
        step: "3. Gufata amashusho",
        details: [
          "Menya uburyo bwo gufata amashusho: uko ushyiraho camera, urumuri, n’ahantu heza.",
          "Koresha smartphone cyangwa camera bitewe n’ibikoresho ufite.",
          "Fata amashusho inshuro nyinshi kugirango ubone ubuziranenge bwiza."
        ]
      },
      {
        step: "4. Gukora editing",
        details: [
          "Koresha software zo gutunganya video nka CapCut, Adobe Premiere, cyangwa InShot.",
          "Ongeramo effects, transitions, captions, n’umuziki kugirango video irusheho kuryoha.",
          "Reba pacing n’ubusobanuro kugirango abantu bakurikirane video yawe."
        ]
      },
      {
        step: "5. Gushyira hanze no kuganira n'abakunzi bawe",
        details: [
          "Andika captions zikurura abantu kandi ukoreshe hashtags zikwiye.",
          "Shyira hanze video buri gihe kandi mu masaha abakunzi bawe baba bari online.",
          "Subiza comments kandi uganire n’abakurikira kugirango wubake community."
        ]
      },
      {
        step: "6. Gusesengura uko byagenze",
        details: [
          "Reba analytics kugirango umenye video zikunzwe cyane.",
          "Hindura uburyo ukora ibihangano hashingiwe ku byo abakunzi bawe bakunze n’ibitekerezo batanga.",
          "Komeza kugerageza no kunoza ibihangano byawe uko igihe kigenda."
        ]
      }
    ],
    materials: [
      "Telefoni cyangwa camera yo gufata amashusho",
      "Tripod cyangwa stabilizer (kugira ngo ufate amashusho mashusho ahamye, gusa si ngombwa cyane)",
      "Porogaramu cyangwa apps zo gutunganya amashusho (CapCut, InShot, Adobe Premiere, n’izindi)",
      "Itara ryiza (ry’umwimerere cyangwa ring light)",
      "Microphone yo gufata amajwi neza (si ngombwa cyane)",
      "Igitabo cyo gutegura ibitekerezo by’amashusho",
      "Konti z’imbuga nkoranyambaga zo gushyiraho ibikurura abantu"
    ],
    pdf: "/pdfs/content-creation.pdf",
    video: "https://www.youtube.com/watch?v=-HrfqfDyqCQ",
    duration: "amasaha 4",
    difficulty: "Abatangizi – Abasanzwe"},
    },
    "digital-art-nft-creation": {
      en: {
    title: "Digital Art & NFT Creation",
    description: [
      {
        step: "1. Understanding Digital Art",
        details: [
          "Learn about different types of digital art such as digital painting, vector art, and 3D modeling.",
          "Understand basic digital art tools and software like Adobe Illustrator, Photoshop, Procreate, or Blender.",
          "Explore examples of digital artists and trending styles."
        ]
      },
      {
        step: "2. Setting Up Your Tools",
        details: [
          "Choose a drawing tablet or use a computer/smartphone depending on your preference.",
          "Install and familiarize yourself with your chosen software.",
          "Learn basic techniques like layering, brushes, colors, and shapes."
        ]
      },
      {
        step: "3. Creating Your Artwork",
        details: [
          "Sketch your concept digitally or import scanned sketches.",
          "Refine shapes, colors, and textures using your software tools.",
          "Experiment with styles, effects, and design elements."
        ]
      },
      {
        step: "4. Introduction to NFTs",
        details: [
          "Understand what NFTs (Non-Fungible Tokens) are and how they work.",
          "Learn about blockchain platforms like Ethereum, Solana, or Polygon.",
          "Explore marketplaces where NFTs are sold, such as OpenSea, Rarible, or Magic Eden."
        ]
      },
      {
        step: "5. Minting and Selling NFTs",
        details: [
          "Convert your digital art into NFT format on a blockchain platform.",
          "Set up a digital wallet (e.g., MetaMask) and link it to a marketplace.",
          "List your NFT for sale and learn best practices for pricing and promotion."
        ]
      },
      {
        step: "6. Marketing and Community Engagement",
        details: [
          "Promote your NFT artworks on social media and art communities.",
          "Engage with collectors, answer questions, and build a following.",
          "Stay updated with NFT trends and participate in collaborations or challenges."
        ]
      }
    ],
    materials: [
      "Computer or tablet with sufficient RAM and storage",
      "Digital art software (Adobe Illustrator, Photoshop, Procreate, or Canva)",
      "Drawing tablet or stylus (optional for precision)",
      "Internet connection for accessing NFT platforms",
      "Cryptocurrency wallet (e.g., MetaMask) for NFT transactions",
      "Reference images and inspiration resources",
      "Notebook for planning ideas and concepts"
    ],
    pdf: "/pdfs/nft-creation.pdf",
    video: "https://www.youtube.com/watch?v=XztEBPf4nKg",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Digital Art & gukora NFT",
    description: [
      {
        step: "1. Kumenya Digital Art",
        details: [
          "Menya ubwoko butandukanye bwa digital art nk’ibushushanyo bwa digital, vector art, na 3D modeling.",
          "Sobanukirwa ibikoresho na software bya digital art nka Adobe Illustrator, Photoshop, Procreate, cyangwa Blender.",
          "Reba urugero rw’abashushanya digital n’imyambarire ikunzwe muri iki gihe."
        ]
      },
      {
        step: "2. Gutegura Ibikoresho byawe",
        details: [
          "Hitamo tablet yo gushushanyaho cyangwa ukoreshe computer/smartphone bitewe n'uko ubishaka.",
          "Shyira software watoranyije kandi umenyere gukoresha ibikoresho byayo.",
          "Menya uburyo bwo gukora layering, brushes, amabara, n’imiterere y’ibishushanyo."
        ]
      },
      {
        step: "3. Gukora Ibihangano byawe",
        details: [
          "Shushanya igitekerezo cyawe muri digital cyangwa winjize sketches washyize ku mpapuro.",
          "Kosora imigaragarire, amabara, n’imitere ukoresheje software yawe.",
          "Gerageza styles, effects, n’ibindi bintu by’imiterere y’ishusho."
        ]
      },
      {
        step: "4. Intangiriro ku NFTs",
        details: [
          "Sobanukirwa NFTs (Non-Fungible Tokens) n’uko zikora.",
          "Menya platforms za blockchain nka Ethereum, Solana, cyangwa Polygon.",
          "Reba marketplaces aho NFTs zigurishwa nka OpenSea, Rarible, cyangwa Magic Eden."
        ]
      },
      {
        step: "5. Kwandika no Kugurisha NFTs",
        details: [
          "Hindura digital art yawe ikore NFT ku rubuga rwa blockchain.",
          "Shyiraho wallet ya digital (nka MetaMask) uyihuza na marketplace.",
          "Tangaza NFT yawe ku isoko kandi wige uburyo bwo gushyiraho igiciro no kwamamaza."
        ]
      },
      {
        step: "6. Kwamamaza no Gusabana na Community",
        details: [
          "Shyira hanze ibihangano bya NFT ku mbuga nkoranyambaga no mu matsinda y’abashushanya.",
          "Ganira n’abakiriya, usubize ibibazo, kandi wubake abakunzi bawe.",
          "Komeza kumenya trends za NFT kandi witabire collaboration cyangwa challenges."
        ]
      }
    ],
    materials: [
      "Mudasobwa cyangwa tablette ifite RAM n’ububiko bihagije",
      "Porogaramu zo gushushanya dijitali (Adobe Illustrator, Photoshop, Procreate, cyangwa Canva)",
      "Tablette yo gushushanya cyangwa stylus (bidash obligatory ariko byoroshya)",
      "Interineti yo kugera ku ma platiforms ya NFT",
      "Konti ya cryptocurrency (nka MetaMask) yo gukora NFT",
      "Amafoto y’icyitegererezo n’ibikoresho byo gufata amashusho",
      "Igitabo cyo gutegura ibitekerezo n’imishinga"
    ],
    pdf: "/pdfs/nft-creation.pdf",
    video: "https://www.youtube.com/watch?v=XztEBPf4nKg",
    duration: "amasaha 4",
    difficulty: "Abatangizi – Abasanzwe" },
    },
  },
  "agricultural-skills": {
    "urban-farming-hydroponics": {
       en: {
    title: "Urban Farming & Hydroponics",
    description: [
      {
        step: "1. Introduction to Urban Farming",
        details: [
          "Understand the concept of urban farming and its benefits in cities.",
          "Learn about different methods like container gardening, rooftop gardens, and vertical farming.",
          "Explore sustainable practices for small-scale city farming."
        ]
      },
      {
        step: "2. Understanding Hydroponics",
        details: [
          "Learn what hydroponics is and how it differs from soil farming.",
          "Understand the basic systems: nutrient film technique (NFT), deep water culture, and drip systems.",
          "Familiarize yourself with essential components: grow trays, pumps, nutrient solution, and lights."
        ]
      },
      {
        step: "3. Setting Up Your Hydroponic System",
        details: [
          "Select a suitable location with enough light and ventilation.",
          "Assemble your hydroponic system according to the type chosen.",
          "Mix and monitor nutrient solutions for proper plant growth."
        ]
      },
      {
        step: "4. Choosing and Planting Crops",
        details: [
          "Select crops suitable for hydroponics, like lettuce, herbs, spinach, or tomatoes.",
          "Start seeds in germination trays or directly in your system.",
          "Monitor plant growth, spacing, and health regularly."
        ]
      },
      {
        step: "5. Maintenance and Monitoring",
        details: [
          "Check water levels, pH, and nutrient concentration daily.",
          "Prune plants and remove unhealthy leaves to prevent disease.",
          "Ensure proper lighting and air circulation for optimal growth."
        ]
      },
      {
        step: "6. Harvesting and Continuous Production",
        details: [
          "Harvest crops when they reach the ideal size and quality.",
          "Clean and prepare the system for the next planting cycle.",
          "Keep records of growth cycles, yields, and nutrient adjustments."
        ]
      }
    ],
    materials: [
      "Hydroponic setup or containers",
      "Water pump and tubing system",
      "Nutrient solution for plants",
      "Seeds or seedlings",
      "Growing medium (cocopeat, rockwool, or perlite)",
      "pH meter and EC meter",
      "Grow lights or access to natural light",
      "Notebook for monitoring plant growth"
    ],
    pdf: "/pdfs/Gardening-in-sacks.pdf",
    video: "https://www.youtube.com/watch?v=3JigXb9KXqI",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Ubuhinzi bwo mu mijyi & hydroponics",
    description: [
      {
        step: "1. Intangiriro ku buhinzi bwo mu mijyi",
        details: [
          "Sobanukirwa igitekerezo cy’ubuhinzi bwo mu mijyi n’inyungu zabwo.",
          "Menya uburyo butandukanye nk’ubuhinzi mu container, ku bwubatswe hejuru (rooftop gardens), no mu buryo buhagaritse (vertical farming).",
          "Reba uburyo burambye bwo guhinga ku kigero gito mu mijyi."
        ]
      },
      {
        step: "2. Kumenya Hydroponics",
        details: [
          "Sobanukirwa hydroponics n’ukuntu itandukanye no guhinga mu butaka.",
          "Menya systems z’ingenzi: nutrient film technique (NFT), deep water culture, na drip systems.",
          "Menya ibikoresho by’ingenzi: grow trays, pompe, nutrient solution, n’amatara."
        ]
      },
      {
        step: "3. Gutegura System ya Hydroponics",
        details: [
          "Hitamo ahantu hagera urumuri n’ikirere cyiza.",
          "Shyira hamwe system ya hydroponics ukurikije uburyo wahisemo.",
          "Vanga kandi ukurikirane nutrient solutions kugirango ibimera bikure neza."
        ]
      },
      {
        step: "4. Guhitamo no Guhinga Ibimera",
        details: [
          "Hitamo ibimera bikwiye hydroponics nk’imboga z’icyatsi (lettuce), herbs, epinari, cyangwa inyanya.",
          "Tangira imbuto mu trays cyangwa ubitangire muri system yawe.",
          "Kurikirana uko ibimera bikura, intera hagati yabyo, n’ubuzima bwabyo buri gihe."
        ]
      },
      {
        step: "5. Kubungabunga no Gukurikirana",
        details: [
          "Reba urwego rw’amazi, pH, n’imyunyu ngugu buri munsi.",
          "Kata ibimera kandi ukureho ibyashaje cyangwa byanduye kugira ngo ubirinde indwara.",
          "Menya neza urumuri n’ikirere kugirango ibimera bikure neza."
        ]
      },
      {
        step: "6. Gusarura no Gukomeza Guhinga",
        details: [
          "Sarura ibimera igihe bigize ubunini n’ubwiza bukwiriye.",
          "Sukura system kandi unategure indi cycle yo guhinga.",
          "Andika amakuru ku bijyanye n’igihe cy’ubworozi, umusaruro, n’imyumvire ya nutrient."
        ]
      }
    ],
     materials: [
      "Ibikoresho bya hydroponics cyangwa ibikapu byo gukoreramo ubuhinzi",
      "Pompe y’amazi n’ibikoresho byo kuyobora amazi",
      "Isukari cyangwa intungamubiri z’ibimera",
      "Imbuto cyangwa ibimera bito",
      "Ibikoresho byo guhingamo ibimera (cocopeat, rockwool, cyangwa perlite)",
      "pH meter na EC meter",
      "Amatara yo kumurikira ibimera cyangwa ahantu hagera izuba",
      "Igitabo cyo gukurikirana uko ibimera byiyongera"
    ],
    pdf: "/pdfs/Gardening-in-sacks.pdf",
    video: "https://www.youtube.com/watch?v=3JigXb9KXqI",
    duration: "amasaha 4",
    difficulty: "Abatangizi – Abasanzwe"},
    },
    "beekeeping-honey-production": {
      en: {
    title: "Beekeeping & Honey Production",
    description: [
      {
        step: "1. Introduction to Beekeeping",
        details: [
          "Understand the importance of bees in pollination and food production.",
          "Learn about different bee species and their roles in a hive.",
          "Familiarize yourself with beekeeping equipment: hives, protective clothing, smokers, and tools."
        ]
      },
      {
        step: "2. Setting Up a Beehive",
        details: [
          "Choose a suitable location with plenty of flowering plants and minimal disturbance.",
          "Assemble the hive properly and ensure it is stable and ventilated.",
          "Introduce bees to the hive carefully to avoid stress or colony loss."
        ]
      },
      {
        step: "3. Hive Management",
        details: [
          "Monitor the hive regularly for bee health and activity.",
          "Check for signs of disease or pests and take preventive measures.",
          "Ensure the queen is healthy and laying eggs consistently."
        ]
      },
      {
        step: "4. Feeding and Maintenance",
        details: [
          "Provide supplemental feeding if natural nectar sources are scarce.",
          "Maintain hive hygiene and replace old or damaged frames.",
          "Rotate frames to prevent wax buildup and encourage honey production."
        ]
      },
      {
        step: "5. Harvesting Honey",
        details: [
          "Harvest honey when frames are capped and fully ripe.",
          "Use a smoker to calm the bees before opening the hive.",
          "Extract honey using an extractor or manual methods and strain to remove impurities."
        ]
      },
      {
        step: "6. Storing and Marketing Honey",
        details: [
          "Store honey in clean, airtight containers in a cool, dry place.",
          "Label jars properly with production date and origin.",
          "Explore marketing options: local markets, online platforms, or cooperatives."
        ]
      }
    ],
    materials: [
      "Beehives (Langstroth or top-bar hives)",
      "Protective clothing (bee suit, gloves, veil)",
      "Smoker for calming bees",
      "Hive tools (scraper, bee brush, frame grip)",
      "Feed for bees (sugar syrup or pollen substitute)",
      "Honey extractor or centrifuge",
      "Containers for honey storage",
      "Notebook for recording hive management and observations"
    ],
    pdf: "/pdfs/beekeeping.pdf",
    video: "https://www.youtube.com/watch?v=on-xmXuSwv8",
    duration: "4.5 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Korora inzuki no gukora ubuki",
    description: [
      {
        step: "1. Intangiriro ku korora inzuki",
        details: [
          "Sobanukirwa akamaro k’inzuki mu guhinga no mu musaruro w’ibiribwa.",
          "Menya ubwoko butandukanye bw’inzuki n’inshingano zazo mu mutiba w’inzuki.",
          "Menya ibikoresho bikenerwa mu korora inzuki: imitiba y’inzuki, imyambaro irinda, smoker, n’ibikoresho byabugenewe."
        ]
      },
      {
        step: "2. Gutegura umutiba w’inzuki",
        details: [
          "Hitamo ahantu heza higanjemo indabo kandi hatuje.",
          "Shyiramo umutiba neza kandi ube ukomeye kandi ufite umwuka uhagije.",
          "Shyira inzuki mu mutiba witonze kugirango utazikomeretsa cyangwa ngo uhumure ubwoko bwazo."
        ]
      },
      {
        step: "3. Gucunga umutiba w’inzuki",
        details: [
          "Kurikirana umutiba w’inzuki buri gihe urebe uko inzuki zifite ubuzima bwiza kandi zikora ubuki.",
          "Reba ibimenyetso by’indwara cyangwa udukoko ukoreshe ingamba zo kubirinda.",
          "Reba ko umwamikazi (queen) ari muzima kandi atera amagi neza."
        ]
      },
      {
        step: "4. Kuziha ibyo kurya no kuzibungabunga",
        details: [
          "Zishakire ibiryo iyo nta nkomoko ihagije y’indabo.",
          "Kurikirana isuku y'umutiba no gusimbuza igishashara cyashaje cyangwa cyangiritse.",
          "Simbuza cyangwa uhindure igishashara cy’inzuki kugira ngo ubone ubuki bwinshi kandi wirinde ibibazo by’ibumba."
        ]
      },
      {
        step: "5. Gusarura ubuki",
        details: [
          "Sarura ubuki igihe igishashara cyuzuye kandi gifunze neza.",
          "Koresha imyotsi kugira ngo usohore inzuki mbere yo gufungura umutiba.",
          "Kuramo ubuki ukoresheje extractor cyangwa intoki, ukuremo imyanda yose."
        ]
      },
      {
        step: "6. Kubika no kwamamaza ubuki",
        details: [
          "Bika ubuki mu mavazi meza, afunze neza kandi ahantu hakonje kandi hatagira amazi.",
          "Shyiraho label irimo igihe cy’umusaruro n’aho wakomotse.",
          "Shakisha uburyo bwo kuwamamaza: amasoko y’akarere, imbuga za internet, cyangwa amashyirahamwe y’abakorera hamwe."
        ]
      }
    ],
     materials: [
      "Umutiba (Langstroth cyangwa top-bar hives)",
      "Imyambaro y’ubwirinzi (suit y’inzuki, gloves, veil)",
      "Smoker yo gusohora inzuki",
      "Ibikoresho by’ubworozi bw’inzuki (scraper, bee brush, frame grip)",
      "Ibyo kurya by'inzuki inzuki (syrup y’isukari cyangwa pollen substitute)",
      "Extractor y’ubuki cyangwa centrifuge",
      "Ibikombe byo kubikamo ubuki",
      "Igitabo cyo gukurikirana imicungire y’inzuki n’ibikorwa byazo"
    ],
    pdf: "/pdfs/beekeeping.pdf",
    video: "https://www.youtube.com/watch?v=0xX9DyUJrT0",
    duration: "amasaha 4 n’igice",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "mushroom-cultivation": {
       en: {
    title: "Mushroom Cultivation",
    description: [
      {
        step: "1. Introduction to Mushroom Cultivation",
        details: [
          "Understand the types of mushrooms commonly grown (oyster, shiitake, button mushrooms).",
          "Learn the importance of mushrooms as a nutritious food source and potential income.",
          "Familiarize yourself with basic tools and materials: spawn, substrate, growing trays or bags, spray bottles."
        ]
      },
      {
        step: "2. Preparing the Substrate",
        details: [
          "Select an appropriate substrate (straw, sawdust, or composted material) depending on the mushroom type.",
          "Pasteurize or sterilize the substrate to eliminate harmful microorganisms.",
          "Cool the substrate to the appropriate temperature before inoculation."
        ]
      },
      {
        step: "3. Inoculation and Spawning",
        details: [
          "Introduce mushroom spawn into the prepared substrate under clean conditions.",
          "Mix the spawn thoroughly for even distribution.",
          "Seal the substrate in trays, bags, or containers to promote mycelium growth."
        ]
      },
      {
        step: "4. Incubation",
        details: [
          "Place the inoculated substrate in a controlled environment with proper temperature and humidity.",
          "Monitor regularly for contamination and healthy mycelium growth.",
          "Adjust conditions as needed to optimize colonization."
        ]
      },
      {
        step: "5. Fruiting",
        details: [
          "Move the fully colonized substrate to a fruiting environment with high humidity and fresh air.",
          "Maintain appropriate light and temperature conditions for mushroom growth.",
          "Mist or water as needed to keep humidity levels optimal."
        ]
      },
      {
        step: "6. Harvesting and Storage",
        details: [
          "Harvest mushrooms at the right size by cutting at the base with a clean knife.",
          "Store harvested mushrooms in a cool, ventilated area or refrigerate for longer shelf life.",
          "Prepare for marketing or consumption."
        ]
      }
    ],
    materials: [
      "Mushroom spores or spawn",
      "Substrate (sawdust, straw, or compost)",
      "Containers or grow bags",
      "Sprayer or misting bottle for humidity control",
      "Thermometer and hygrometer",
      "Gloves and mask for hygiene",
      "Notebook for tracking growth and observations",
      "Clean workspace for cultivation"
    ],
    pdf: "/pdfs/mushroom-farming.pdf",
    video: "https://www.youtube.com/watch?v=Cp8Jc1GnDEo",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Guhinga ibihumyo",
    description: [
      {
        step: "1. Intangiriro ku guhimba ibihumyo",
        details: [
          "Sobanukirwa ubwoko bw’ibihumyo byoroshye guhinga (oyster, shiitake, button mushrooms).",
          "Menya akamaro k’ibihumyo mu mirire no kuba isoko y’inyungu.",
          "Menya ibikoresho n’ibikoresho by’ingenzi: spawn, substrate, trays cyangwa amasakoshi yo gukoreramo, spray bottles."
        ]
      },
      {
        step: "2. Gutegura substrate",
        details: [
          "Hitamo substrate ikwiriye ( straw, sawdust, cyangwa compost) bitewe n’ubwoko bw’ibihumyo.",
          "Tegura substrate neza (pasteurize cyangwa sterilize) kugirango wirinde udukoko twangiza.",
          "Reka substrate ikonje neza mbere yo kongeramo spawn."
        ]
      },
      {
        step: "3. Kongeramo spawn (Inoculation)",
        details: [
          "Shyiramo spawn mu substrate wateguye mu isuku.",
          "Vanga spawn neza kugirango igere hose.",
          "Funga substrate muri trays, ibikapu cyangwa containers kugirango mycelium ikure neza."
        ]
      },
      {
        step: "4. Kwita ku mikurire (Incubation)",
        details: [
          "Shyira substrate ahantu hafite ubushyuhe bukwiriye.",
          "Kurikirana substrate buri gihe kugirango urebe ko mycelium ikura neza kandi nta ndwara.",
          "Hindura ubushyuhe cyangwa ubushuhe igihe bikenewe kugirango ubone umusaruro mwiza."
        ]
      },
      {
        step: "5. Gukura kw’ibihumyo (Fruiting)",
        details: [
          "Fata substrate yuzuye mycelium uyimure ahantu uyishyire ahantu hakwiriye ibihumyo.",
          "Hari umuriro n’ubushuhe bukwiriye ku mikurire y’ibihumyo.",
          "Uhira cyangwa uzane amazi uko bikenewe kugirango ubushuhe bukomeze buringanire."
        ]
      },
      {
        step: "6. Gusarura no kubika",
        details: [
          "Sarura ibihumyo igihe bikuze neza ukoresheje icyuma gifite isuku ukate ku mizi.",
          "Bika ibihumyo ahantu hakonje cyangwa muri frigo kugirango bimare igihe kirekire.",
          "Tegura ibihumyo byo kugurisha cyangwa kurya."
        ]
      }
    ],
    materials: [
      "Ubuso bw’inyabutatu cyangwa spawn",
      "Substrate (imbaho, straw, cyangwa compost)",
      "Ibikoresho byo guhingamo cyangwa grow bags",
      "Sprayer cyangwa icupa ryo kuminjagira amazi mu rwego rwo kugenzura ubukonje n’ubushuhe",
      "Thermometer na hygrometer",
      "Amasarubeti na mask yo kubungabunga isuku",
      "Igitabo cyo gukurikirana uko ibihumyo bikura n’ibikorwa",
      "Ahantu hasukuye ho guhinga"
    ],
    pdf: "/pdfs/mushroom-farming.pdf",
    video: "https://www.youtube.com/watch?v=Cp8Jc1GnDEo",
    duration: "amasaha 4",
    difficulty: "Abatangizi – Abasanzwe" },
    },
    "vegetable-gardening-permaculture": {
      en: {
    title: "Vegetable Gardening & Permaculture",
    description: [
      {
        step: "1. Introduction to Vegetable Gardening",
        details: [
          "Learn the basics of vegetable gardening and its importance for nutrition and income.",
          "Understand soil types, sunlight, water requirements, and climate considerations.",
          "Familiarize yourself with tools and materials: seeds, compost, watering cans, hoes, and protective covers."
        ]
      },
      {
        step: "2. Planning Your Garden",
        details: [
          "Decide on the vegetables you want to grow based on climate and market demand.",
          "Design garden layout considering companion planting, crop rotation, and spacing.",
          "Plan irrigation, pest control, and fertilization strategies."
        ]
      },
      {
        step: "3. Preparing the Soil",
        details: [
          "Clear the garden area of weeds and debris.",
          "Loosen and enrich the soil using compost, manure, or organic fertilizers.",
          "Test soil pH and adjust if necessary to suit specific crops."
        ]
      },
      {
        step: "4. Planting",
        details: [
          "Sow seeds or transplant seedlings according to recommended spacing and depth.",
          "Label rows or beds to identify crops easily.",
          "Water gently and regularly to promote germination and growth."
        ]
      },
      {
        step: "5. Garden Maintenance",
        details: [
          "Regularly water, weed, and mulch to retain soil moisture and suppress weeds.",
          "Monitor for pests and diseases, using organic or chemical control methods when needed.",
          "Prune and support plants to ensure healthy growth and maximize yield."
        ]
      },
      {
        step: "6. Harvesting and Storage",
        details: [
          "Harvest vegetables at peak maturity for best flavor and nutrition.",
          "Store produce in cool, ventilated areas or process for preservation.",
          "Plan successive planting for continuous supply."
        ]
      }
    ],
   materials: [
      "Seeds or seedlings of vegetables",
      "Gardening tools (hoe, spade, trowel, rake)",
      "Compost or organic fertilizer",
      "Watering can or irrigation system",
      "Mulch or organic cover materials",
      "Notebook for garden planning and tracking growth",
      "Gloves and protective clothing",
      "Access to sunlight and suitable planting space"
    ],
    pdf: "/pdfs/Vegetable Gardening.pdf",
    video: "https://www.youtube.com/watch?v=4GmyE8q_3w0",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Guhinga imboga no kubungabunga ubutaka",
    description: [
      {
        step: "1. Intangiriro ku guhinga imboga",
        details: [
          "Menya ibyerekeranye no guhinga imboga n’akamaro kazo mu mirire no mu nyungu z’akazi.",
          "Sobanukirwa ubwoko bw’ubutaka, izuba rikenewe, amazi, n’ikirere.",
          "Menya ibikoresho n’ibikoresho by’ingenzi: imbuto, compost, amazi, ifumbire, n’ibirinda ibihingwa."
        ]
      },
      {
        step: "2. Gucunga neza umurima wawe",
        details: [
          "Hitamo imboga ushaka guhinga bitewe n’ikirere n’isoko.",
          "Shyiraho igishushanyo cy’umurima ureba aho imboga zizahurira, guhindura ibihingwa, n’ahantu hazashyirwa imboga.",
          "Tegura uburyo bwo kuhira, kurwanya udukoko n’indwara, no kongeramo ifumbire."
        ]
      },
      {
        step: "3. Gutegura ubutaka",
        details: [
          "Kuraho ibimera bitari ngombwa n’imyanda mu murima.",
          "Gutegura ubutaka no gushyiramo ifumbire y'imborera cyangwa iyindi y'imvaruganda.",
          "Gerageza pH y’ubutaka kandi uyihindure niba bikenewe ku bihingwa runaka."
        ]
      },
      {
        step: "4. Guhinga",
        details: [
          "Tera imbuto cyangwa ushyiremo ibihingwa bitewe n’aho bikenewe n’ukuntu bikura.",
          "Andika amazina y’imboga uko waziteye ku mirongo kugira ngo bikorohereze kumenya imboga zikura neza.",
          "Uhira buhoro kandi kenshi kugirango imbuto zikure neza."
        ]
      },
      {
        step: "5. Kwita ku murima",
        details: [
          "Uhira, ukuramo ibyatsi, kandi wirinde kuhahingagura kugira ngo ubutaka bugume burimo amazi kandi butangirika.",
          "Kurikirana udukoko n’indwara, ukoreshe uburyo bwiza bwo kubirwanya.",
          "Menya gushyigikira ibihingwa kugirango bikure neza kandi umusaruro wiyongere."
        ]
      },
      {
        step: "6. Gusarura no kubika",
        details: [
          "Sarura imboga igihe zikuze neza kugirango zirusheho kugira intungamubiri n’akamaro.",
          "Bika imboga ahantu hakonje cyangwa muri frigo niba utegura kuzigumana igihe kirekire.",
          "Komeza guhinga imboga kugirango ubone umusaruro w’igihe kirekire."
        ]
      }
    ],
    materials: [
      "Ingemwe z'imboga cyangwa imbuto",
      "Ibikoresho by’ubuhinzi (inshinge, isuka, trowel, rake)",
      "Ifumbire y’umwimerere y'imborera",
      "Rozwari cyangwa uburyo bwo kuhira bwikoresha",
      "Mulch cyangwa ibikoresho by’ibyatsi byo kubika ubutaka",
      "Igitabo cyo gutegura no gukurikirana ubuhinzi",
      "Imyambaro yo kwirinda",
      "Ahantu hafite izuba n’ubutaka bukwiriye bwo guteramo imboga"
    ],
    pdf: "/pdfs/Vegetable Gardening.pdf",
    video: "https://www.youtube.com/watch?v=4GmyE8q_3w0",
    duration: "amasaha 4",
    difficulty: "Abatangizi – Abasanzwe"},
    },
    "animal-husbandry-basics": {
       en: {
    title: "Animal Husbandry Basics",
    description: [
      {
        step: "1. Introduction to Animal Husbandry",
        details: [
          "Learn the importance of raising animals for food, income, and agricultural sustainability.",
          "Understand the types of livestock: poultry, goats, sheep, cattle, and rabbits.",
          "Familiarize with basic terminology and animal care principles."
        ]
      },
      {
        step: "2. Housing & Shelter",
        details: [
          "Provide safe, clean, and well-ventilated housing for animals.",
          "Use bedding materials like straw or sawdust for comfort and hygiene.",
          "Ensure protection from extreme weather, predators, and theft."
        ]
      },
      {
        step: "3. Feeding & Nutrition",
        details: [
          "Understand the dietary needs of different animals.",
          "Provide balanced feed: grains, forages, vegetables, and supplements.",
          "Ensure access to clean and fresh water at all times."
        ]
      },
      {
        step: "4. Health & Disease Management",
        details: [
          "Learn to identify signs of illness or distress in animals.",
          "Implement vaccination and deworming schedules.",
          "Maintain hygiene in the housing area to prevent disease outbreaks."
        ]
      },
      {
        step: "5. Breeding & Reproduction",
        details: [
          "Understand basic breeding principles and reproductive cycles.",
          "Select healthy animals for breeding to improve stock quality.",
          "Keep records of births, growth rates, and lineage for management."
        ]
      },
      {
        step: "6. Record Keeping & Management",
        details: [
          "Maintain records of feed, veterinary care, breeding, and sales.",
          "Track expenses and income to ensure profitability.",
          "Plan for long-term growth and sustainability of the farm."
        ]
      }
    ],
     materials: [
      "Livestock (cows, goats, sheep, chickens, etc.)",
      "Animal feed and water containers",
      "Shelter or housing for animals",
      "Veterinary supplies (vaccines, dewormers, first aid kit)",
      "Tools for cleaning and maintenance",
      "Notebook for recording animal growth, health, and breeding",
      "Protective clothing and gloves",
      "Access to clean water and pasture"
    ],
    pdf: "/pdfs/animal-husbandry.pdf",
    video: "https://www.youtube.com/watch?v=zSb_rtZQb00",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Korora amatungo yoroheje",
    description: [
      {
        step: "1. Intangiriro ku korora amatungo",
        details: [
          "Menya akamaro ko korora amatungo mu mirire, inyungu z’ubukungu, no mu buhinzi burambye.",
          "Sobanukirwa ubwoko bw’amatungo: inkoko, ingurube, ihene, inka, n’andi amatungo magufi.",
          "Menya amagambo y’ibanze n’amahame yo kwita ku matungo."
        ]
      },
      {
        step: "2. Ibiraro/Aho amatungo aba",
        details: [
          "Tegura ikiraro kirinda amatungo neza, gisukuye kandi gifite umwuka uhagije.",
          "Koresha ibikoresho bikwiye usasira amatungo nk'icyarire cyangwa ibarizo kugira ngo amatungo abe ahantu heza kandi hafite isuku.",
          "Haranira kurinda amatungo mu bihe bibi by’ikirere, abajura, n’udukoko bishobora kwangiza amatungo."
        ]
      },
      {
        step: "3. Kurya n’imirire",
        details: [
          "Menya ibyo amatungo akeneye kurya.",
          "Zigaburire indyo yuzuye: ibisigazwa by'ibigori, ibyatsi, n'ibindi by’inyongera bifasha mu mirire.",
          "Zimenyereze kunywa amazi meza kandi mashya igihe cyose."
        ]
      },
      {
        step: "4. Ubuzima n’indwara",
        details: [
          "Menya ibimenyetso by’indwara cyangwa ibibazo ku matungo.",
          "Kurikiza gahunda yo gukingira no gusukura amatungo.",
          "Zigirire isuku mu kiraro kugirango uzirinde indwara."
        ]
      },
      {
        step: "5. Kororoka n’uburumbuke bw'amatungo",
        details: [
          "Menya amahame y’ingenzi yo kororoka n’imiterere y’uburumbuke bw'amatungo.",
          "Hitamo amatungo akomeye mu kororoka kugirango urusheho kugira ubwiza bw’amatungo.",
          "Bika amakuru y’ibyavuyemo mu kororoka, uburebure bw’amatungo, n’aho yavuye kugira ngo ubashe kugira icyororo cyiza."
        ]
      },
      {
        step: "6. Kubika amakuru no gucunga umurima",
        details: [
          "Bika amakuru y’imirire, ubuvuzi, kororoka, n’ubucuruzi.",
          "Kurikirana amafaranga yinjira n’asohoka kugirango ubone inyungu.",
          "Tegura uburyo bwo gukomeza gukuza no kuramba k’umurimo wo korora amatungo."
        ]
      }
    ],
    materials: [
      "Amatungo yo korora (inka, ihene, intama, inkoko, n’izindi)",
      "Ibikoresho byo guha amatungo ibyo kurya n’amazi",
      "Ikiraro cy'amatungo",
      "Ibikoresho by’ubuvuzi bw’amatungo (urukingo, imiti yo gukuramo udukoko, ibikoresho by’ubufasha bw’ibanze)",
      "Ibikoresho byo gusukura no kubungabunga ibiraro",
      "Igitabo cyo gukurikirana uko amatungo akura, ubuzima bwayo, n’ubworozi",
      "Imyambaro yo kwirinda",
      "Amazi meza n’ibitunga amatungo"
    ],
    pdf: "/pdfs/animal-husbandry.pdf",
    video: "https://www.youtube.com/watch?v=zSb_rtZQb00",
    duration: "amasaha 4",
    difficulty: "Abatangizi – Abasanzwe"},
    },
  },
  "health-skills": {
    "first-aid": {
       en: {
    title: "First Aid & Emergency Care",
    description: [
      {
        step: "1. Introduction to First Aid",
        details: [
          "Understand the importance of first aid in saving lives and preventing complications.",
          "Learn the basic principles: stay calm, assess the situation, and ensure personal safety.",
          "Familiarize with the contents of a basic first aid kit."
        ]
      },
      {
        step: "2. Assessing the Situation",
        details: [
          "Check for dangers to yourself, the victim, and bystanders.",
          "Assess the victim’s condition: responsiveness, breathing, and bleeding.",
          "Call emergency services if the situation is severe or life-threatening."
        ]
      },
      {
        step: "3. Basic Life Support",
        details: [
          "Learn CPR (Cardiopulmonary Resuscitation) for adults, children, and infants.",
          "Understand how to open airways and perform rescue breaths.",
          "Practice chest compressions and cycles for effective CPR."
        ]
      },
      {
        step: "4. Managing Common Injuries",
        details: [
          "Control bleeding using direct pressure, bandages, or tourniquets.",
          "Treat burns by cooling the area with clean water and covering with sterile dressing.",
          "Immobilize fractures or sprains using splints or supports."
        ]
      },
      {
        step: "5. Handling Medical Emergencies",
        details: [
          "Recognize signs of heart attack, stroke, allergic reactions, and choking.",
          "Provide appropriate first aid for each condition until professional help arrives.",
          "Monitor the victim’s vital signs continuously."
        ]
      },
      {
        step: "6. Infection Prevention and Hygiene",
        details: [
          "Always wash hands or use sanitizer before and after providing aid.",
          "Use gloves when handling wounds or bodily fluids.",
          "Dispose of used materials safely to prevent infection."
        ]
      },
      {
        step: "7. Practical Exercises",
        details: [
          "Perform mock scenarios for CPR, bleeding control, and burns.",
          "Practice using first aid kits and emergency equipment.",
          "Review and reinforce knowledge regularly to maintain readiness."
        ]
      }
    ],
     materials: [
      "First aid kit (bandages, gauze, antiseptics, scissors, gloves)",
      "CPR training mannequin or reference materials",
      "Notebook for notes and emergency procedures",
      "Basic medical reference guide",
      "Protective gloves and mask",
      "Thermometer and basic medical tools",
      "Access to video tutorials for practical demonstration"
    ],
    pdf: "/pdfs/Basic_First_Aid.pdf",
    video: "https://www.youtube.com/watch?v=f2_oj5toBlI",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Ubufasha bw’ibanze & kwita ku buzima byihutirwa",
    description: [
      {
        step: "1. Intangiriro ku bufasha bw’ibanze",
        details: [
          "Sobanukirwa akamaro k’ubufasha bw’ibanze mu kurokora ubuzima no gukumira ingorane.",
          "Menya amahame y’ibanze: kuguma utuje, gusuzuma uko ibintu byifashe, no kwirinda ibyangiza.",
          "Menya ibikubiye mu gikoresho cy’ibanze cya first aid kit."
        ]
      },
      {
        step: "2. Gusuzuma uko ibintu byifashe",
        details: [
          "Reba niba nta byago biri kuri wowe, ku muntu, cyangwa ku bandi.",
          "Suzuma uko umuntu ameze: niba asubiza, uburyo arimo guhumeka, n’uburibwe.",
          "Hamagarira serivisi z’ubutabazi igihe ikibazo gikomeye cyangwa gishobora guhungabanya ubuzima."
        ]
      },
      {
        step: "3. Ubufasha bw’ibanze bwo guhumeka no gukomeza gutera k'umutima (CPR)",
        details: [
          "Menya uko CPR (Cardiopulmonary Resuscitation) ikora ku bakuru, abana, n’abana bato.",
          "Sobanukirwa uko gufungura inzira z’ubuhumekero no guha umwuka uwagize ikibazo.",
          "Kora aho umutima uterera uko bikwiye wumve ko hakenewe CPR."
        ]
      },
      {
        step: "4. Gucunga ibikomere bisanzwe",
        details: [
          "Hagarika amaraso ukoresheje gushyira imbaraga ahakomeretse, bande, cyangwa tourniquet.",
          "Tunganya igisebe ukoresheje amazi meza kandi upfuke ahakomeretse n’igikoresho gifite isuku.",
          "Shyira mu mwanya ukwiye imvune cyangwa kwikanga kw'imitsi ukoresheje splints cyangwa inkunga."
        ]
      },
      {
        step: "5. Kwita ku byihutirwa by’ubuzima",
        details: [
          "Menya ibimenyetso by'umutima, stroke, allergic reactions, no guhumeka bigoye.",
          "Tanga ubufasha bukwiye ugeza abakozi b’inzobere aho umuntu ari.",
          "Kurikira ibimenyetso by’ingenzi by’umubiri w’uwo muntu igihe cyose."
        ]
      },
      {
        step: "6. Kurwanya no kwirinda indwara",
        details: [
          "Gukaraba intoki n'amazi meza ndetse n'isabune cyangwa ukoreshe sanitizer mbere na nyuma yo gutanga ubufasha.",
          "Koresha gloves(ga) iyo ufashe ku bikomere cyangwa amaraso.",
          "Tegura neza ibikoresho byakoreshejwe kugirango wirinde indwara."
        ]
      },
      {
        step: "7. Imyitozo ngiro",
        details: [
          "Kora imyitozo y’imibereho y’ukuri: CPR, guhagarika amaraso, no gukiza ubushye.",
          "Koresha first aid kits n’ibikoresho by’akazi byihutirwa.",
          "Subiramo ubumenyi bwawe buri gihe kugira ngo ube witeguye igihe cyose."
        ]
      }
    ],
    materials: [
      "Agakapu k’ubufasha bw’ibanze (bande, gauze, antiseptic, scissors, gloves)",
      "Mannequin yo kwiga CPR cyangwa inyandiko zerekeye CPR",
      "Igitabo cyo kwandikamo amategeko n’uburyo bwo gutabara",
      "Igitabo cy’ubuvuzi bw’ibanze",
      "Agapimabushyuhe n’ibikoresho by’ubuvuzi byoroheje",
      "Uburyo bwo kureba amashusho y’amahugurwa (video tutorials)"
    ],
    pdf: "/pdfs/Basic_First_Aid.pdf",
    video: "https://www.youtube.com/watch?v=f2_oj5toBlI",
    duration: "amasaha 3",
    difficulty: "Abatangizi – Abasanzwe"
  },
    },
    "nutrition-healthy-cooking": {
      en: {
    title: "Nutrition & Diet Planning",
    description: [
      {
        step: "1. Introduction to Nutrition",
        details: [
          "Understand the importance of proper nutrition for overall health.",
          "Learn about macronutrients (carbohydrates, proteins, fats) and micronutrients (vitamins, minerals).",
          "Recognize the impact of nutrition on energy, immunity, and disease prevention."
        ]
      },
      {
        step: "2. Balanced Diet Principles",
        details: [
          "Learn how to create a balanced plate with appropriate portions of food groups.",
          "Understand the concept of calories, serving sizes, and nutritional labels.",
          "Explore ways to reduce sugar, salt, and unhealthy fats in your diet."
        ]
      },
      {
        step: "3. Meal Planning",
        details: [
          "Plan daily and weekly meals according to nutritional needs.",
          "Incorporate variety: fruits, vegetables, whole grains, lean proteins.",
          "Consider special dietary requirements, allergies, or health conditions."
        ]
      },
      {
        step: "4. Healthy Cooking Techniques",
        details: [
          "Learn cooking methods that preserve nutrients, like steaming, baking, or grilling.",
          "Avoid excessive frying or use of unhealthy oils.",
          "Use herbs and spices to enhance flavor without adding extra calories."
        ]
      },
      {
        step: "5. Food Safety & Hygiene",
        details: [
          "Wash hands and kitchen surfaces before preparing food.",
          "Store food at correct temperatures to prevent spoilage.",
          "Cook foods thoroughly and avoid cross-contamination."
        ]
      },
      {
        step: "6. Practical Exercises",
        details: [
          "Create sample meal plans for a day or week.",
          "Cook simple, balanced meals using healthy techniques.",
          "Track your meals and assess nutritional quality."
        ]
      }
    ],
    materials: [
      "Cooking utensils (pots, pans, knives, cutting board, spatula)",
      "Measuring cups and spoons",
      "Blender or food processor",
      "Kitchen scale (optional for accuracy)",
      "Fresh ingredients (vegetables, fruits, grains, proteins)",
      "Cookbook or recipe notebook",
      "Apron and gloves",
      "Access to clean water and cooking space"
    ],
    pdf: "/pdfs/Cooking-Basics.pdf",
    video: "https://www.youtube.com/watch?v=aopS3q6f1GY",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Ibiribwa n’imirire myiza",
    description: [
      {
        step: "1. Intangiriro ku mirire",
        details: [
          "Sobanukirwa akamaro k’imirire myiza ku buzima bw’umuntu.",
          "Menya iby’ibiribwa bikenewe cyane (carbohydrates, proteins, ibinure) n’ibikenewe mu rugero ruto (vitamini, minerals).",
          "Menya uburyo imirire ikora ku mubiri, ingufu, ubudahangarwa n’uburyo bwo kwirinda indwara."
        ]
      },
      {
        step: "2. Amahame y’indyo yuzuye",
        details: [
          "Menya gutegura indyo yuzuye igizwe n'ibyubaka umubiri, ibitera imbaraga n'ibirinda indwara.",
          "Sobanukirwa calories, ingano y'ifunguro, n'ibipimo biri ku byapa by’ibiribwa.",
          "Menya uburyo bwo kugabanya isukari, umunyu, n’ibinure bibi mu mirire yawe."
        ]
      },
      {
        step: "3. Gutegura ifunguro",
        details: [
          "Tegura ifunguro rya buri munsi n’icyumweru hakurikijwe ibyo umubiri ukeneye.",
          "Ongeramo ubwoko butandukanye: imbuto, imboga, ibinyampeke byuzuye, protein zoroheje.",
          "Tekereza ku biribwa byihariye ku bafite allergies cyangwa ibibazo by’ubuzima."
        ]
      },
      {
        step: "4. Uburyo bwo guteka butuma ibiribwa biramba",
        details: [
          "Menya uburyo bwo guteka butuma intungamubiri zigumana, nko gukaranga, baking, cyangwa kotsa.",
          "Irinde guteka cyane mu mavuta cyangwa gukoresha amavuta atari meza.",
          "Koresha ibikomoka ku bihingwa na spices mu kongera uburyohe ugabanya calories nyinshi."
        ]
      },
      {
        step: "5. Isuku n’umutekano w’ibiribwa",
        details: [
          "Gukaraba intoki n’aho utegurira ibiribwa mbere yo guteka.",
          "Bika ibiribwa ku bushyuhe bukwiye kugirango bitangirika.",
          "Teka neza ibiribwa kandi wirinde kuvanga kw’ibiribwa bitandukanye."
        ]
      },
      {
        step: "6. Imyitozo ngiro",
        details: [
          "Tegura ingero z’ifunguro ry’umunsi cyangwa icyumweru.",
          "Teka amafunguro yoroshye kandi yuzuye ukoresheje uburyo bwiza.",
          "Kurikira ibyo wagiye urya kandi usuzume ubuziranenge bw’imirire."
        ]
      }
    ],
    materials: [
      "Ibikoresho byo mu gikoni (ibirahuri, amasafuriya, inkoni, ikibaho cyo gukatiraho, amarushe)",
      "Amacupa n’ibipimo byo gupima ibiribwa",
      "Blender cyangwa processor y’ibiribwa",
      "Umunzaniwo gupima ibiribwa (si ngombwa cyane ariko ni byiza gukoresha bipimo nyabyo)",
      "Ibyo guteka (imboga, imbuto, ibinyampeke, ibikomoka ku mata cyangwa inyama)",
      "Igitabo cy’amafunguro cyangwa notebook y’imboga",
      "Apron cyangwa itaburiya",
      "Amazi meza n’ahantu ho gutekera"
    ],
    pdf: "/pdfs/Cooking-Basics.pdf",
    video: "https://www.youtube.com/watch?v=aopS3q6f1GY",
    duration: "amasaha 3",
    difficulty: "Abatangizi – Abasanzwe"},
    },
    "mental-health-awareness": {
       en: {
    title: "Mental Health & Wellness",
    description: [
      {
        step: "1. Introduction to Mental Health",
        details: [
          "Understand what mental health is and why it is important for overall well-being.",
          "Learn about common mental health conditions like stress, anxiety, and depression.",
          "Recognize the connection between physical health, lifestyle, and mental wellness."
        ]
      },
      {
        step: "2. Self-Awareness and Emotional Intelligence",
        details: [
          "Learn to identify your emotions and understand how they affect behavior.",
          "Practice self-reflection to recognize patterns in thought and behavior.",
          "Develop emotional intelligence to improve relationships and decision-making."
        ]
      },
      {
        step: "3. Stress Management Techniques",
        details: [
          "Identify common stressors in daily life and how they impact mental health.",
          "Practice techniques such as deep breathing, mindfulness, and meditation.",
          "Learn time management and organizational skills to reduce stress."
        ]
      },
      {
        step: "4. Building Healthy Habits",
        details: [
          "Develop routines that support mental well-being, like regular exercise and sleep.",
          "Maintain a balanced diet that nourishes both body and mind.",
          "Engage in hobbies and social activities that promote relaxation and joy."
        ]
      },
      {
        step: "5. Seeking Support and Professional Help",
        details: [
          "Understand when to seek help from counselors, therapists, or support groups.",
          "Learn how to communicate your needs effectively to friends and family.",
          "Recognize the importance of reducing stigma around mental health."
        ]
      },
      {
        step: "6. Practical Exercises",
        details: [
          "Keep a journal to track emotions and stress levels.",
          "Practice mindfulness exercises daily or weekly.",
          "Apply learned coping strategies in real-life situations."
        ]
      }
    ],
   materials: [
      "Notebook or journal for reflections",
      "Pen or pencil",
      "Access to mental health resources (books, articles, online content)",
      "Quiet space for mindfulness or meditation exercises",
      "Guided meditation apps (optional)",
      "Support network or access to counseling services",
      "Stress-relief tools (stress ball, relaxation music, etc.)"
    ],
    pdf: "/pdfs/mental_health_awareness.pdf",
    video: "https://www.youtube.com/watch?v=NQcYZplTXnQ",
    duration: "3 hours",
    difficulty: "Beginner"
  },

  rw: {
    title: "Ubuzima bwo mu mutwe no kubaho neza",
    description: [
      {
        step: "1. Iby'ingenzi ku buzima bwo mu mutwe",
        details: [
          "Sobanukirwa icyo ubuzima bwo mu mutwe ari cyo n’akamaro kabwo ku buzima bw’umuntu muri rusange.",
          "Menya ibibazo by’ubuzima bwo mu mutwe bisanzwe nko kwiheba, stress, n’agahinda gakabije.",
          "Reba uburyo ubuzima bw’umubiri, imirire, n’imyitwarire bifitanye isano n’ubuzima bwo mu mutwe."
        ]
      },
      {
        step: "2. Kwimenya no kumenya amarangamutima",
        details: [
          "Menya kumenya amarangamutima yawe n’ukuntu agira ingaruka ku myitwarire.",
          "Gira umuco wo kwitekerezaho no gusuzuma uburyo utekereza n’imyitwarire yawe.",
          "Shyira mu bikorwa kumenya amarangamutima mu rwego rwo kunoza imibanire n’imyanzuro."
        ]
      },
      {
        step: "3. Uburyo bwo guhangana na stress",
        details: [
          "Menya ibitera stress mu buzima bwa buri munsi n’ingaruka zabyo ku mutwe.",
          "Kora imyitozo yo guhumeka neza, mindfulness, no gukora meditation.",
          "Menya gutegura neza igihe cyawe n’imirimo urakoramo kugirango ugabanye stress."
        ]
      },
      {
        step: "4. Kugira imyitwarire myiza",
        details: [
          "Shyiraho gahunda zunganira ubuzima bwo mu mutwe, nko gukora imyitozo ngororamubiri no gusinzira neza.",
          "Kurikiza imirire iboneye ifasha umubiri n’ubwonko.",
          "Jya mu bikorwa byo kwishimisha n’imyidagaduro bifasha kuruhuka no kwishima."
        ]
      },
      {
        step: "5. Gushaka ubufasha n’inama z’inzobere",
        details: [
          "Menya igihe cyo gushaka ubufasha ku baganga b’inzobere, abajyanama, cyangwa amatsinda yunganira.",
          "Menya uburyo bwo gutanga amakuru ku nshuti n’umuryango ku buryo bwiza.",
          "Sobanukirwa akamaro ko kugabanya ubwigunge ku buzima bwo mu mutwe."
        ]
      },
      {
        step: "6. Imyitozo ngiro",
        details: [
          "Andika mu rukurikirane rw’amarangamutima n’icyo wiyumvamo buri munsi.",
          "Kora imyitozo ya mindfulness buri munsi cyangwa buri cyumweru.",
          "Shyira mu bikorwa uburyo bwo guhangana n’ibibazo wize mu buzima bwa buri munsi."
        ]
      }
    ],
   materials: [
      "Igitabo cyangwa ikaye yo kwandikamo ibitekerezo",
      "Ikaramu cyangwa crayon",
      "Uburyo bwo kubona amakuru ku buzima bwo mu mutwe (ibitabo, inyandiko, imbuga za interineti)",
      "Ahantu hatuje ho gukora imyitozo ya mindfulness cyangwa meditation",
      "Porogaramu z’imyitozo y’ubwenge n’umutuzo (bidashoboka si ngombwa cyane)",
      "Umuryango muterankunga cyangwa uburyo bwo kuganira n’inzobere mu buzima bwo mu mutwe",
      "Ibikoresho byo kugabanya stress (stress ball, umuziki utuje, n’ibindi)"
    ],
    pdf: "/pdfs/mental_health_awareness.pdf",
    video: "https://www.youtube.com/watch?v=NQcYZplTXnQ",
    duration: "amasaha 3",
    difficulty: "Abatangizi"},
    },
    "fitness-coaching": {
     en: {
    title: "Fitness & Exercise",
    description: [
      {
        step: "1. Introduction to Fitness",
        details: [
          "Understand the benefits of regular exercise for physical and mental health.",
          "Learn about different types of exercise: aerobic, strength training, flexibility, and balance.",
          "Recognize the importance of warm-up and cool-down routines to prevent injuries."
        ]
      },
      {
        step: "2. Setting Fitness Goals",
        details: [
          "Identify personal fitness objectives such as weight loss, muscle gain, or endurance improvement.",
          "Learn to set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound).",
          "Understand the role of tracking progress through fitness apps, journals, or wearable devices."
        ]
      },
      {
        step: "3. Cardiovascular Training",
        details: [
          "Practice aerobic exercises like running, cycling, swimming, or brisk walking.",
          "Learn how to monitor heart rate and maintain target zones for optimal benefits.",
          "Understand the frequency, intensity, and duration of cardio workouts for beginners and intermediates."
        ]
      },
      {
        step: "4. Strength & Resistance Training",
        details: [
          "Learn basic strength exercises using bodyweight, dumbbells, or resistance bands.",
          "Understand proper form and technique to prevent injuries.",
          "Create a balanced routine targeting major muscle groups."
        ]
      },
      {
        step: "5. Flexibility & Balance",
        details: [
          "Practice stretching exercises for all major muscle groups.",
          "Incorporate yoga or Pilates to improve flexibility and core strength.",
          "Perform balance exercises to enhance coordination and prevent falls."
        ]
      },
      {
        step: "6. Nutrition & Recovery",
        details: [
          "Learn the basics of nutrition for supporting workouts and recovery.",
          "Understand the importance of hydration and sleep in fitness.",
          "Incorporate rest days and recovery techniques to prevent burnout."
        ]
      },
      {
        step: "7. Practical Fitness Routine",
        details: [
          "Design a weekly fitness plan including cardio, strength, flexibility, and rest days.",
          "Apply proper warm-up and cool-down in every session.",
          "Monitor progress and adjust intensity or type of exercises as needed."
        ]
      }
    ],
    materials: [
      "Comfortable workout clothes and shoes",
      "Yoga mat or exercise mat",
      "Dumbbells or resistance bands (optional)",
      "Water bottle",
      "Notebook for tracking workouts and progress",
      "Access to fitness apps or online workout videos",
      "First aid kit for safety",
      "Heart rate monitor or smartwatch (optional)"
    ],
    pdf: "/pdfs/homeworkout.pdf",
    video: "https://www.youtube.com/watch?v=rwAHQ_vH-f8",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },

  rw: {
    title: "Imyitozo ngororamubiri no Kubaka umubiri",
    description: [
      {
        step: "1. Intangiriro ku myitozo ngororamubiri",
        details: [
          "Sobanukirwa akamaro ko gukora imyitozo ngororamubiri buri gihe ku buzima bw’umubiri n’ubw’umutwe.",
          "Menya ubwoko butandukanye bw’imyitozo: aerobic, strength training, flexibility, na balance.",
          "Reba akamaro ko gukora warm-up na cool-down kugirango wirinde imvune."
        ]
      },
      {
        step: "2. Gushyiraho intego z’imyitozo",
        details: [
          "Menya intego zawe bwite: kugabanya ibiro, kongera imitsi, cyangwa kongera stamina.",
          "Shyiraho intego ziri SMART (Specific, Measurable, Achievable, Relevant, Time-bound).",
          "Menya gukurikirana intambwe ukoresheje apps zo kubaka umubiri, journals, cyangwa ibikoresho byabugenewe."
        ]
      },
      {
        step: "3. Imyitozo yo kongerera imbaraga umutima (Cardio)",
        details: [
          "Kora imyitozo ya aerobic nko kwiruka, gutwara igare, koga, cyangwa kugenda wihuta.",
          "Menya gukurikirana umutima no kugumana ingamba ngenderwaho kugirango ubone umusaruro.",
          "Sobanukirwa kenshi, ubukana, n’igihe cyo gukora cardio ku batangiye n’abamaze igihe."
        ]
      },
      {
        step: "4. Imyitozo yo kongera imbaraga (Strength & Resistance)",
        details: [
          "Menya imyitozo y’ibanze ikoresha umubiri, dumbbells, cyangwa resistance bands.",
          "Sobanukirwa uburyo bwiza bwo gukora imyitozo kugirango wirinde imvune.",
          "Shyiraho gahunda y’imyitozo yuzuye ikora ku mitsi yose y’ingenzi."
        ]
      },
      {
        step: "5. Flexibility & Balance",
        details: [
          "Kora imyitozo yo gukoresha (stretching) imitsi yose y’ingenzi.",
          "Shyiramo yoga cyangwa Pilates kugirango wongere flexibility n’imbaraga z’umutima.",
          "Kora imyitozo yo kugumana balance kugirango wongere coordination no kwirinda kugwa."
        ]
      },
      {
        step: "6. Imirire no Kuruhuka",
        details: [
          "Menya imirire iboneye ishyigikira imyitozo n’igihe cyo kwiyitaho.",
          "Sobanukirwa akamaro ko kunywa amazi ahagije no gusinzira neza ku myitozo.",
          "Shyiramo iminsi yo kuruhuka n’uburyo bwo kugarura imbaraga kugirango wirinde kunanirwa."
        ]
      },
      {
        step: "7. Gushyira mu bikorwa gahunda y’imyitozo",
        details: [
          "Tegura gahunda y’imyitozo ya buri cyumweru ikubiyemo cardio, strength, flexibility, n’iminsi yo kuruhuka.",
          "Koresha warm-up na cool-down mu myitozo yose.",
          "Kurikirana intambwe no guhindura ubukana cyangwa ubwoko bw’imyitozo uko bikenewe."
        ]
      }
    ],
     materials: [
      "Imyambaro n’inkweto byoroheje byo gukora imyitozo",
      "Yoga mat cyangwa umusambi wo gukoreraho imyitozo",
      "Dumbbells cyangwa resistance bands (bitabonetse nta kibazo)",
      "Agacupa k’amazi",
      "Igitabo cyo gukurikirana imyitozo n’iterambere",
      "Porogaramu cyangwa videwo z’imyitozo kuri interineti",
      "Agakapu k’ubufasha bw’ibanze (first aid kit)",
    ],
    pdf: "/pdfs/homeworkout.pdf",
    video: "https://www.youtube.com/watch?v=rwAHQ_vH-f8",
    duration: "amasaha 4",
    difficulty: "Abatangizi – Abasanzwe"},
    },
  },
  "home-care-skills": {
  "soap-making-natural-handmade-soaps": {
     en: {
    title: "Soap Making: Natural & Handmade Soaps",
    description: [
      {
        step: "Step 1: Gather Ingredients",
        details: [
          "Choose oils such as coconut, olive, or shea butter.",
          "Prepare lye and water in separate containers.",
          "Optional: select herbs, flowers, or essential oils for scent and color."
        ]
      },
      {
        step: "Step 2: Prepare Lye Solution",
        details: [
          "Carefully dissolve lye in water while wearing gloves and goggles.",
          "Stir until fully dissolved and let the solution cool.",
          "Ensure proper ventilation and avoid contact with skin."
        ]
      },
      {
        step: "Step 3: Mix Oils & Lye",
        details: [
          "Combine the cooled lye solution with your chosen oils.",
          "Stir continuously until the mixture reaches ‘trace’ (thickened consistency).",
          "Check that the temperature of oils and lye solution is similar before mixing."
        ]
      },
      {
        step: "Step 4: Add Colors & Scents",
        details: [
          "Add natural colorants like clays or herbs.",
          "Mix in essential oils or botanicals for fragrance.",
          "Ensure even distribution throughout the mixture."
        ]
      },
      {
        step: "Step 5: Pour into Molds",
        details: [
          "Pour the soap mixture evenly into prepared molds.",
          "Smooth the surface using a spatula or spoon.",
          "Tap molds gently to remove air bubbles."
        ]
      },
      {
        step: "Step 6: Cure Soap",
        details: [
          "Let the soap sit in molds for 24-48 hours until hardened.",
          "Remove from molds carefully.",
          "Cure the soap in a cool, dry place for 4-6 weeks to complete saponification."
        ]
      }
    ],
    materials: [
      "Soap base (glycerin, shea butter, or goat milk)",
      "Essential oils for fragrance",
      "Natural colorants (clays, herbs, spices, or activated charcoal)",
      "Soap molds",
      "Mixing bowls and spatulas",
      "Measuring scale and spoons",
      "Protective gloves and goggles",
      "Notebook for recording recipes and techniques"
    ],
    pdf: "/pdfs/Soapmaking.pdf",
    video: "https://www.youtube.com/watch?v=lBc-dWQmFIM",
    duration: "3.5 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Gukora Isabune: Kamere & Yakozwe n’Intoki",
    description: [
      {
        step: "Intambwe 1: Tunganya ibikoresho",
        details: [
          "Hitamo amavuta nka coconut, olive cyangwa shea butter.",
          "Tegura lye n’amazi mu ibikoresho bitandukanye.",
          "By’umwihariko: hitamo ibimera, indabo cyangwa essential oils ku mpumuro n’amabara."
        ]
      },
      {
        step: "Intambwe 2: Tegura Lye(Alkaline solution e.g: KOH)",
        details: [
          "Vanga lye mu mazi witonze kandi wambaye gloves (ga) na goggles(amataratara).",
          "Vanga kugeza byuzuye hanyuma ureke bikonje.",
          "Koresha ahantu hari umwuka uhagije kandi wirinde gukoraho."
        ]
      },
      {
        step: "Intambwe 3: Vanga amavuta na Lye",
        details: [
          "Hindura lye ikonje hamwe n’amavuta wahisemo.",
          "Vanga kugeza bigize ‘trace’ (bikomeye gake).",
          "Reba ko ubushyuhe bw’amavuta na lye bungana mbere yo kuvanga."
        ]
      },
      {
        step: "Intambwe 4: Ongera Amabara & Impumuro",
        details: [
          "Shyiramo amabara kamere nka dye cyangwa ibimera.",
          "Ongeramo essential oils cyangwa ibimera ku mpumuro.",
          "Vanga neza kugira ngo byose byivange."
        ]
      },
      {
        step: "Intambwe 5: Suka mu maforomo",
        details: [
          "Suka umuti w’isabune mu iforomo wateguye neza.",
          "Koraho hejuru ukoresheje icyuma.",
          "Sukamo imvange neza kugirango utazabona utwobo tw’umwuka."
        ]
      },
      {
        step: "Intambwe 6: Reba Isabune",
        details: [
          "Reka isabune igume mu iforomo amasaha 24-48 kugira ngo ikomere.",
          "Yikure mu iforomo witunze.",
          "Yibike mu cyumba gikonje kandi k’umwuka muke mu byumweru 4-6 kugirango ikore neza."
        ]
      }
    ],
    materials: [
      "Soap base (glycerin, shea butter, cyangwa amata y’ihene)",
      "Amavuta y’ingenzi yo gutuma isabune ihumura neza",
      "Ibara ry’ibimera kamere (ibimera, spices, cyangwa activated charcoal)",
      "Iforomo yo gushyiramo isabune",
      "Ibikombe byo kuvangisha n’imakasi",
      "Icyuma cyo gupima n'ibipimo",
      "Amadarubindi n'ibindi bikoresho by'ubwirinzi",
      "Igitabo cyo kwandikamo uburyo bwo gukora n’amasomo"
    ],
    pdf: "/pdfs/Soapmaking.pdf",
    video: "https://www.youtube.com/watch?v=lBc-dWQmFIM",
    duration: "amasaha 3 n’igice",
    difficulty: "Abatangizi – Abasanzwe"
    }
  },
  "candle-making-scented-decorative": {
    en: {
    title: "Candle Making: Scented & Decorative",
    description: [
      {
        step: "Step 1: Prepare Materials",
        details: [
          "Select wax type (soy, paraffin, beeswax).",
          "Choose wicks of appropriate size for your mold.",
          "Gather molds, fragrance oils, and coloring agents."
        ]
      },
      {
        step: "Step 2: Melt Wax",
        details: [
          "Use a double boiler to melt wax safely without direct heat.",
          "Stir occasionally to ensure even melting.",
          "Monitor temperature to prevent overheating."
        ]
      },
      {
        step: "Step 3: Add Fragrance & Color",
        details: [
          "Add essential oils or fragrance oils for scent.",
          "Mix in dyes or natural colorants evenly.",
          "Test a small amount to adjust fragrance and color intensity."
        ]
      },
      {
        step: "Step 4: Insert Wick & Pour Wax",
        details: [
          "Place wick securely in the center of the mold.",
          "Pour melted wax slowly to avoid bubbles.",
          "Ensure the wick stays straight and centered."
        ]
      },
      {
        step: "Step 5: Cool & Decorate",
        details: [
          "Let the candle cool and solidify completely.",
          "Trim wick to 0.5–1 cm above the wax surface.",
          "Add decorations like embeds, glitter, or carved designs if desired."
        ]
      }
    ],
     materials: [
      "Wax (soy, beeswax, or paraffin)",
      "Candle wicks",
      "Essential oils or fragrance oils",
      "Candle dyes or natural colorants",
      "Candle molds or containers",
      "Thermometer and double boiler or melting pot",
      "Stirring sticks and measuring spoons",
      "Notebook for recipes and design ideas",
      "Protective gloves and apron"
    ],
    pdf: "/pdfs/Candle Making.pdf",
    video: "https://www.youtube.com/watch?v=jJWl9Kpwbno",
    duration: "3.5 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Gukora Amabuji: Afite Impumuro & Ashyushye",
    description: [
      {
        step: "Intambwe 1: Tunganya ibikoresho",
        details: [
          "Hitamo ubwoko bwa wax (soy, paraffin, beeswax).",
          "Hitamo wick ikwiranye n’ingano y'iforomo.",
          "Tegura amaforomo, fragrance oils, n’amabara."
        ]
      },
      {
        step: "Intambwe 2: Shyushya Wax",
        details: [
          "Koresha double boiler kugirango ushyushye wax neza.",
          "Vanga rimwe na rimwe kugirango ishyuhe neza.",
          "Reba ubushyuhe kugira ngo itaza gushyuha cyane."
        ]
      },
      {
        step: "Intambwe 3: Ongeramo Impumuro n' Amabara",
        details: [
          "Ongeramo essential oils cyangwa fragrance oils ku mpumuro.",
          "Vanga dyes cyangwa amabara kamere neza.",
          "Gerageza igice gito kugirango urebe ubukana bw’impumuro n’amabara."
        ]
      },
      {
        step: "Intambwe 4: Shyiramo Wick unasuke Wax mu iforomo",
        details: [
          "Shyira wick neza hagati mu iforomo.",
          "Sukamo wax witonze kugirango udashyiramo utwobo tw’umwuka.",
          "Reba ko wick igumamo hagati neza."
        ]
      },
      {
        step: "Intambwe 5: Reba & Shushanya",
        details: [
          "Reka buji ikomere kandi ikomeze gukomera.",
          "Shyira wick 0.5–1 cm hejuru y’ubuso bwa wax.",
          "Ongeramo decoration niba ushaka: glitter, carvings, cyangwa embeds."
        ]
      }
    ],
    materials: [
      "Wax (soy, beeswax, cyangwa paraffin)",
      "Wicks za buji",
      "Amavuta y’ingenzi cyangwa fragrance oils",
      "Amabara y’itara cyangwa ibara ry’ibimera",
      "Iforomo cyangwa ibikoresho byo gushyiramo buji",
      "Thermometer na double boiler cyangwa ikintu cyo gushongesha",
      "Ibikoresho byo kuvanga n’ibipimo byo gupima",
      "Igitabo cyo kwandikamo recipes n’ibitekerezo by’ubushushanyo",
      "Amataburiya n’apron byo kurinda"
    ],
    pdf: "/pdfs/Candle Making.pdf",
    video: "https://www.youtube.com/watch?v=jJWl9Kpwbno",
    duration: "amasaha 3 n’igice",
    difficulty: "Abatangizi – Abasanzwe"
    }
  },
  "jams-jellies-homemade-preserves": {
    en: {
    title: "Jams & Jellies: Homemade Preserves",
    description: [
      {
        step: "Step 1: Select Fruits",
        details: [
          "Choose ripe, fresh fruits for the best flavor.",
          "Wash fruits thoroughly to remove dirt and pesticides.",
          "Remove stems, seeds, or pits as needed."
        ]
      },
      {
        step: "Step 2: Prepare Sugar & Pectin",
        details: [
          "Measure sugar accurately according to the recipe.",
          "Prepare pectin if using powdered or liquid forms.",
          "Keep ingredients ready to add to the fruit mixture."
        ]
      },
      {
        step: "Step 3: Cook Fruit",
        details: [
          "Simmer fruits gently until soft and pulpy.",
          "Gradually add sugar and pectin while stirring.",
          "Cook until mixture reaches desired consistency."
        ]
      },
      {
        step: "Step 4: Jar & Seal",
        details: [
          "Sterilize jars and lids by boiling or using hot water.",
          "Pour hot jam or jelly into jars carefully.",
          "Seal tightly to prevent contamination."
        ]
      },
      {
        step: "Step 5: Cool & Store",
        details: [
          "Allow jars to cool at room temperature.",
          "Check seals before storing.",
          "Store in a cool, dry place away from sunlight."
        ]
      }
    ],
   materials: [
      "Fresh fruits (berries, mangoes, guava, etc.)",
      "Sugar and natural sweeteners",
      "Pectin or gelling agents (optional)",
      "Cooking pots and spoons",
      "Measuring cups and spoons",
      "Glass jars or airtight containers",
      "Funnel and ladle",
      "Notebook for recipes and notes",
      "Protective gloves and apron"
    ],
    pdf: "/pdfs/jams-and-jellies.pdf",
    video: "https://www.youtube.com/watch?v=Os6225I_Lco",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Gukora Jams & Jellies: Ibiribwa Bibikwa mu Rugo",
    description: [
      {
        step: "Intambwe 1: Hitamo Imbuto",
        details: [
          "Hitamo imbuto zuzuye kandi nshya kugirango zirusheho kuryoha.",
          "Oza imbuto neza kugirango ukureho umukungugu n’imiti yica udukoko.",
          "Kuramo imbuto zifite imbuto imbere cyangwa imbuto zikomeye niba bikenewe."
        ]
      },
      {
        step: "Intambwe 2: Tegura Isukari na Pectin",
        details: [
          "Pima isukari neza hakurikijwe resipiye.",
          "Tegura pectin niba ukoresha ifu cyangwa ibisukika.",
          "Bika ibintu byose hafi kugirango ubone kubivanga n’imbuto neza."
        ]
      },
      {
        step: "Intambwe 3: Teka Imbuto",
        details: [
          "Shyushya imbuto gahoro gahoro kugeza zoroshye kandi zibyimbye.",
          "Ongeramo isukari na pectin buhoro buhoro uvange neza.",
          "Teka kugeza bikomeye nk’uko bikenewe."
        ]
      },
      {
        step: "Intambwe 4: Shyira mu ijagi ufunge",
        details: [
          "Suka mu ijagi upfundikire n’udufuniko dusukuye neza.",
          "Sukamo jam cyangwa jelly yashyushye witonze.",
          "Funga neza kugirango ubirinde kwandura."
        ]
      },
      {
        step: "Intambwe 5: Genzura unabike",
        details: [
          "Reka bikonje ku bushyuhe bw’icyumba.",
          "Reba neza ko bipfundikiye neza mbere yo kubibika.",
          "Bika ahantu hakonje kandi hatari izuba."
        ]
      }
    ],
    materials: [
      "Imbuto nshya (berries, mango, n’izindi)",
      "Isukari n’ibindi bikoresho byo gukoramo ubuki bwiza",
      "Pectin cyangwa ibikoresho bifasha gukora jelly (bitabonetse si ngombwa cyane)",
      "Ibikoresho byo gutekamo",
      "Ibyipimo byo gupima (ibikombe n'ibiyiko)",
      "Ibikombe by’ikirahuri cyangwa containers zifunze neza",
      "Igitabo cyo kwandika recipes n’inyandiko",
      "Amataburiya n’apron yo kurinda"
    ],
    pdf: "/pdfs/jams-and-jellies.pdf",
    video: "https://www.youtube.com/watch?v=Os6225I_Lco",
    duration: "amasaha 3",
    difficulty: "Abatangizi – Abasanzwe"
    }
  },
  "natural-paints-eco-friendly-paints": {
     en: {
    title: "Natural Paints: Eco-Friendly Colors",
    description: [
      {
        step: "Step 1: Gather Materials",
        details: [
          "Collect natural pigments (clay, charcoal, turmeric, beetroot, etc.).",
          "Prepare binders like egg yolk, casein, or plant gums.",
          "Have clean water, mixing bowls, and brushes ready."
        ]
      },
      {
        step: "Step 2: Prepare Pigments",
        details: [
          "Grind solid pigments into fine powder if needed.",
          "Mix pigments with water to create a smooth paste.",
          "Adjust consistency depending on desired thickness."
        ]
      },
      {
        step: "Step 3: Mix with Binder",
        details: [
          "Add the chosen binder gradually to the pigment paste.",
          "Stir well to achieve uniform color and texture.",
          "Test a small amount on paper or wood to check color."
        ]
      },
      {
        step: "Step 4: Apply Paint",
        details: [
          "Use brushes or sponges to apply paint to your surface.",
          "Apply in thin, even layers for best results.",
          "Allow each layer to dry before adding the next."
        ]
      },
      {
        step: "Step 5: Storage & Maintenance",
        details: [
          "Store leftover paint in airtight containers to prevent drying.",
          "Label containers with pigment type and date.",
          "Clean brushes and tools immediately after use."
        ]
      }
    ],
    materials: [
      "Natural pigments (clays, plant extracts, minerals)",
      "Binder (e.g., casein, egg yolk, or natural gum)",
      "Water or natural solvents",
      "Mixing bowls and spatulas",
      "Brushes of different sizes",
      "Containers for storing paints",
      "Protective gloves and apron",
      "Notebook for recipes and color notes",
      "Surface materials to paint on (paper, wood, canvas, etc.)"
    ],
    pdf: "/pdfs/Nature-Paints-Guide.pdf",
    video: "https://www.youtube.com/watch?v=bxsESte6dJ0",
    duration: "3 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Gukora Amabara Kamere no Kurengera Ibidukikije",
    description: [
      {
        step: "Intambwe 1: Tunganya Ibikoresho",
        details: [
          "Tunganya amabara kamere (ubutaka, amakara, turmeric, beetroot, n'ibindi).",
          "Tegura binders nko ku magufa, casein, cyangwa plant gums.",
          "Fata amazi meza, amasahane, n'uburoso bisukuye."
        ]
      },
      {
        step: "Intambwe 2: Tegura amabara",
        details: [
          "Shyira amabara akomeye mu ifu nziza niba bikenewe.",
          "Vanga amabara n’amazi kugira ngo ubikoremo igisa n'umutsima.",
          "Hindura consistency bitewe n’uburemere wifuza."
        ]
      },
      {
        step: "Intambwe 3: Vanga na Binder",
        details: [
          "Ongeramo binder gahoro gahoro mu mutsima wakoze.",
          "Vanga neza kugirango ibara rihure neza kandi ribe rirerire.",
          "Gerageza ku rupapuro cyangwa ku biti kugirango urebe ibara."
        ]
      },
      {
        step: "Intambwe 4: Siga Amabara",
        details: [
          "Koresha uburoso cyangwa sponge usige amabara ku ngeri yawe.",
          "Siga layers zoroheje kandi zingana neza kugirango bigire isura nziza.",
          "Reka layer imwe ikomeze mbere yo gushyiraho iyindi."
        ]
      },
      {
        step: "Intambwe 5: Bika kandi Witware Neza",
        details: [
          "Bika amabara asigaye mu containers zidafunguye neza kugirango atangirika.",
          "Andika kuri container ibara n’itariki wakoresheje.",
          "Sukura uburoso n’ibikoresho ako kanya nyuma yo kubikoresha."
        ]
      }
    ],
    materials: [
      "Pigment kamere (ibumba, ibisohorwa by’ibimera, ibinyabutabire)",
      "Binder (nka casein, umuhondo w’igi, cyangwa gum kamere)",
      "Amazi cyangwa solvents kamere",
      "Ibikombe byo kuvanga",
      "Uburoso bw’ingeri zitandukanye",
      "Ibikoresho byo kubikamo amabara",
      "Amataburiya n’apron yo kurinda",
      "Igitabo cyo kwandika recipes n’amabara",
      "Ibikoresho byo gusigaho amabara (impapuro, ibiti, canvas, n’ibindi)"
    ],
    pdf: "/pdfs/Nature-Paints-Guide.pdf",
    video: "https://www.youtube.com/watch?v=bxsESte6dJ0",
    duration: "amasaha 3",
    difficulty: "Abatangizi – Abasanzwe"
  }
},

"body-care-products-scrubs-lotions-balms": {
  en: {
    title: "Body Care Products: Scrubs, Lotions & Balms",
    description: [
      {
        step: "Step 1: Gather Ingredients",
        details: [
          "Collect natural oils (coconut, almond, shea butter), salts, sugar, and essential oils.",
          "Have containers, mixing bowls, spatulas, and measuring tools ready.",
          "Optional herbs or dried flowers can be added for extra benefits."
        ]
      },
      {
        step: "Step 2: Prepare Scrubs",
        details: [
          "Mix salts or sugar with oils to create exfoliating scrubs.",
          "Adjust texture by adding more oil or salt/sugar as needed.",
          "Add essential oils for fragrance and therapeutic benefits."
        ]
      },
      {
        step: "Step 3: Prepare Lotions",
        details: [
          "Combine water phase and oil phase (emulsifying required).",
          "Stir continuously until the mixture thickens.",
          "Add fragrances or herbal extracts as desired."
        ]
      },
      {
        step: "Step 4: Prepare Balms",
        details: [
          "Melt butters and waxes gently over low heat.",
          "Add oils and essential oils while mixing thoroughly.",
          "Pour into containers and allow to cool completely."
        ]
      },
      {
        step: "Step 5: Storage & Usage",
        details: [
          "Store products in airtight containers away from heat and sunlight.",
          "Label containers with ingredients and date prepared.",
          "Use daily for skin nourishment and care."
        ]
      }
    ],
    materials: [
      "Natural oils (coconut, almond, jojoba, etc.)",
      "Butters (shea butter, cocoa butter, mango butter)",
      "Exfoliants (sugar, salt, coffee grounds, oats)",
      "Essential oils for fragrance",
      "Containers for storing products",
      "Mixing bowls, spatulas, and whisks",
      "Measuring spoons and scale",
      "Protective gloves and apron",
      "Notebook for recording recipes and techniques"
    ],
    pdf: "/pdfs/The-Natural-Beauty.pdf",
    video: "https://www.youtube.com/watch?v=wudfkTQ5Se0",
    duration: "4 hours",
    difficulty: "Beginner–Intermediate"
  },
  rw: {
    title: "Ibikoresho byo Kwiyitaho: Scrubs, Lotions & Balms",
    description: [
      {
        step: "Intambwe 1: Tunganya Ibikoresho",
        details: [
          "Tunganya amavuta kamere (coconut, almond, shea butter), umunyu, isukari, na essential oils.",
          "Fata ibikoresho, amasahani, utuyiko, n’ibipimo byiza.",
          "Ongeramo ibimera cyangwa indabo zumutse niba ushaka inyongera."
        ]
      },
      {
        step: "Intambwe 2: Tegura Scrubs",
        details: [
          "Vanga umunyu cyangwa isukari n’amavuta kugirango ukore scrubs zo gusukura uruhu.",
          "Hindura texture ugereranyije n’amavuta cyangwa umunyu/isukari uko bikenewe.",
          "Ongeramo essential oils kugirango habeho impumuro n’inyungu ku buzima."
        ]
      },
      {
        step: "Intambwe 3: Tegura Lotions",
        details: [
          "Vanga amazi n’amavuta (emulsifying birakenewe).",
          "Vanga buhoro buhoro kugeza mixture ikomeye.",
          "Ongeramo impumuro cyangwa extracts z’ibimera niba ushaka."
        ]
      },
      {
        step: "Intambwe 4: Tegura Balms",
        details: [
          "Shyushya butters na waxes gahoro gahoro ku muriro muto.",
          "Ongeramo amavuta n’essential oils uvange neza.",
          "Suka muri bikombe ureke bikonje neza."
        ]
      },
      {
        step: "Intambwe 5: Bika neza  unayakoresha",
        details: [
          "Bika ibikoresho mu bikombe bifunze neza, kure n’izuba n’ubushyuhe.",
          "Andika ibikoresho n’itariki byakoreshejwe ku gikombe.",
          "Yakoreshe buri munsi kugira ngo uruhu rumere neza."
        ]
      }
    ],
    materials: [
      "Amavuta kamere (coconut, almond, jojoba, n’andi)",
      "Amavuta y'inka (shea butter, cocoa butter, mango butter)",
      "Exfoliants (isukari, umunyu, coffee grounds, oats)",
      "Amavuta y’ingenzi yo kongera impumuro",
      "Ibikoresho byo kubikamo ibicuruzwa",
      "Ibikombe byo kuvanga, spatulas, na whisks",
      "Ibipimo byo gupima (ibiyiko na umunzani)",
      "Amataburiya n’apron yo kurinda",
      "Igitabo cyo kwandikamo recipes n’uburyo bwo gukora"
    ],
    pdf: "/pdfs/The-Natural-Beauty.pdf",
    video: "https://www.youtube.com/watch?v=wudfkTQ5Se0",
    duration: "amasaha 4",
    difficulty: "Abatangizi – Abasanzwe"},
}
  }
};

  const courseData =
    courseDetails[category] &&
    courseDetails[category][courseKey] &&
    courseDetails[category][courseKey][language]
      ? courseDetails[category][courseKey][language]
      : null;

  const toggleLanguage = () =>
    setLanguage(language === "en" ? "rw" : "en");

  if (!courseData) {
    return (
      <>
        <Navbar />
        <div className="course-detail-section">
          <p>
            {language === "en" ? "Course not found." : "Amasomo ntaraboneka."}
          </p>
          <button onClick={() => navigate(-1)}>
            {language === "en" ? "Back" : "Garuka"}
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const relatedCourses =
    courseDetails[category]
      ? Object.entries(courseDetails[category])
          .filter(([key]) => key !== courseKey)
          .map(([key, value]) => ({
            key,
            title: value[language].title,
            slug: `${key}--${value[language].title
              .toLowerCase()
              .replace(/ /g, "-")}`,
          }))
      : [];

 return (
  <>
    <Navbar />

    <div className="lang-toggle">
      <button onClick={toggleLanguage}>
        {language === "en" ? "Kinyarwanda" : "English"}
      </button>
    </div>

    <section className="course-detail-section">

      {/* Get Ingredients Button */}
      <div className="get-ingredients-btn text-center mb-4">
  <Link
    to="/store" // ✅ internal routing (no page reload)
    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
  >
    {language === "en" ? "Get Ingredients" : "Bona ibikenewe"}
  </Link>
</div>

      <h2>{courseData.title}</h2>

      {/* Display extra info if available */}
      {(courseData.duration || courseData.difficulty) && (
        <div className="course-meta">
          {courseData.duration && (
            <p>
              ⏱ <strong>{language === "en" ? "Duration:" : "Igihe bizamara:"}</strong>{" "}
              {courseData.duration}
            </p>
          )}
          {courseData.difficulty && (
            <p>
              💪 <strong>{language === "en" ? "Difficulty:" : "Urwego rw’ubumenyi:"}</strong>{" "}
              {courseData.difficulty}
            </p>
          )}
        </div>
      )}

      {/* Materials Section */}
      {courseData.materials && courseData.materials.length > 0 && (
        <div className="materials-section">
          <h4>{language === "en" ? "Materials Needed:" : "Ibikoresho bisabwa:"}</h4>
          <ul>
            {courseData.materials.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Description Steps */}
      <div className="steps-section">
        <h4>{language === "en" ? "Course Steps:" : "Intambwe z’isomo:"}</h4>
        <ul>
          {courseData.description.map((point, index) => (
            <li key={index} className="mb-2">
              {typeof point === "string" ? (
                point
              ) : (
                <>
                  <strong>{point.step}</strong>:{" "}
                  {Array.isArray(point.details)
                    ? point.details.map((d, idx) => <div key={idx}>• {d}</div>)
                    : point.details}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

<div className="learn-btn text-center mb-4">
  <Link
    to="/experts" // client-side routing handled
    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
  >
    {language === "en" ? "Learn this course as profession" : "Iga iri somo byimbitse"}
  </Link>
</div>
      {/* PDF */}
      {courseData.pdf && (
        <a
          href={courseData.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn bg-gray-700 text-white px-3 py-2 rounded hover:bg-gray-800 inline-block mt-4"
        >
          📄 {language === "en" ? "Download PDF" : "Kuramo PDF"}
        </a>
      )}

      {/* Video */}
      {courseData.video && (
        <div className="video-section mt-6">
          <h4>{language === "en" ? "Watch Video Tutorial:" : "Reba isomo mu mashusho:"}</h4>
          <iframe
            width="100%"
            height="400"
            src={courseData.video.replace("watch?v=", "embed/")}
            title={courseData.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        {language === "en" ? "Back to Courses" : "Garuka ku masomo"}
      </button>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <div className="related-courses mt-8">
          <h3>{language === "en" ? "Related Courses" : "Amasomo Asa"}:</h3>
          <div className="courses-grid grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {relatedCourses.map((course) => (
              <div
                key={course.key}
                className="course-card border rounded p-3 shadow hover:shadow-lg cursor-pointer"
                onClick={() => navigate(`/courses/${category}/${course.slug}`)}
              >
                <h4 className="font-semibold mb-2">{course.title}</h4>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
                  {language === "en" ? "View" : "Reba"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>

    <Footer />
  </>
);
}