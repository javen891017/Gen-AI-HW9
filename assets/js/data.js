/**
 * 新竹美食推薦資料集
 * --------------------------------------------------
 * 請勿手動破壞陣列結構。每次新增外部網站 HTML 整理出的美食資料時，
 * 請依據 AGENTS.md 規範將物件加入 window.FOOD_DATA 陣列中。
 *
 * 單筆資料格式範例：
 * {
 *   id: "unique-slug-id",
 *   name: "店家名稱",
 *   city: "新竹市", // 僅限 "新竹市" 或 "新竹縣"
 *   district: "東區", // 鄉鎮市區，如：東區、北區、香山區、竹北市、竹東鎮等
 *   category: "在地小吃", // 如：在地小吃、咖啡甜點、異國料理、老街美食等
 *   summary: "一句話簡短特色介紹（顯示於卡片上）",
 *   description: "完整詳細介紹（顯示於點擊後的彈窗中）",
 *   highlights: ["必點菜色 A", "特色亮點 B"],
 *   address: "完整地址",
 *   hours: "營業時間",
 *   phone: "聯絡電話",
 *   price: "價位參考（如：$100-$250）",
 *   image: "assets/images/placeholder.svg", // 圖片相對路徑或有效圖片網址
 *   source: {
 *     title: "來源網站 / 文章標題",
 *     url: "https://example.com/article",
 *     addedDate: "2026-11-16"
 *   }
 * }
 */

/**
 * 新竹美食推薦資料集
 * --------------------------------------------------
 * 請勿手動破壞陣列結構。每次新增外部網站 HTML 整理出的美食資料時，
 * 請依據 AGENTS.md 規範將物件加入 window.FOOD_DATA 陣列中。
 */

window.FOOD_DATA = [
  {
    id: "roast-chu-steak",
    name: "Roast•初 熟成牛排",
    city: "新竹縣",
    district: "竹北市",
    category: "西式排餐",
    summary: "歐式庭園風格的平價高質感熟成牛排餐廳，老饕牛排軟嫩多汁，餐後花草茶多層次又解膩。",
    description: "歐式庭園風格的Roast•初 熟成牛排，平價高質感餐廳餐點落在1000元左右。推薦「老饕牛排」，血水不會過分多，肉質軟嫩外層煎得剛剛好，食物精緻好吃；茶類飲品非一般茶包或花果茶，大餐後慢慢享受多層次花草茶，好喝又有助於消脂。",
    highlights: ["老饕牛排", "多層次花草茶"],
    address: "302新竹縣竹北市文采街20號",
    hours: "11:30–14:00, 17:30–22:00（週二公休）",
    phone: "03 657 5036",
    price: "約 $1,000",
    image: "https://hips.hearstapps.com/hmg-prod/images/ig-2021-11-21-下午3-25-34-1637479599.png?crop=0.713xw:0.656xh;0.133xw,0.151xh&resize=980:*",
    source: {
      title: "Cosmopolitan TW｜網友激推「新竹美食」TOP10！璽子牛肉麵、廟口鴨香飯，中崎家日式咖哩、米玥麻糬堂全都好吃又好拍",
      url: "https://www.cosmopolitan.com/tw/lifestyle/food-and-drink/g38298798/hsinchu-food-1123/",
      addedDate: "2026-11-16"
    }
  },
  {
    id: "xizi-beef-noodle",
    name: "璽子牛肉麵",
    city: "新竹縣",
    district: "竹北市",
    category: "麵食小吃",
    summary: "用餐時間人潮爆滿的人氣牛肉麵，清燉牛肉麵湯頭濃郁、牛肉捲餅外酥內Q。",
    description: "文章提及位於新竹學府路一帶一直以來生意極佳（本篇所列門市地址為竹北市勝利三街），每次用餐時間人潮總是爆滿。推薦「清燉牛肉麵」，牛肉入口即化搭配香氣濃郁的湯頭；「牛肉捲餅」外酥內Q的餅皮包覆滿滿牛肉，門口四周設有停車格相當方便。",
    highlights: ["清燉牛肉麵", "牛肉捲餅"],
    address: "302新竹縣竹北市勝利三街148號",
    hours: "11:00–14:00, 17:00–21:00（週二公休）",
    phone: "03 667 5539",
    price: "",
    image: "assets/images/placeholder.svg",
    source: {
      title: "Cosmopolitan TW｜網友激推「新竹美食」TOP10！璽子牛肉麵、廟口鴨香飯，中崎家日式咖哩、米玥麻糬堂全都好吃又好拍",
      url: "https://www.cosmopolitan.com/tw/lifestyle/food-and-drink/g38298798/hsinchu-food-1123/",
      addedDate: "2026-11-16"
    }
  },
  {
    id: "changer-benyue-project",
    name: "腸兒奔月計畫",
    city: "新竹縣",
    district: "湖口鄉",
    category: "在地小吃",
    summary: "文青風格的大腸包小腸專賣，每日限量供應，花生粉與酸菜醬汁搭配酥脆米腸香腸。",
    description: "在當地小有名氣的「大腸包小腸．腸兒奔月計畫」，堪稱全台最文青的大腸包香腸，生意好到常需提早預訂，每日限量供應賣完為止。花生粉和酸菜搭配的醬汁包覆在微酥脆口感的香腸米腸中，口感極佳。",
    highlights: ["大腸包小腸"],
    address: "30349新竹縣湖口鄉安宅十街79號",
    hours: "14:30–18:00（假日公休）",
    phone: "0963 531 173",
    price: "",
    image: "assets/images/placeholder.svg",
    source: {
      title: "Cosmopolitan TW｜網友激推「新竹美食」TOP10！璽子牛肉麵、廟口鴨香飯，中崎家日式咖哩、米玥麻糬堂全都好吃又好拍",
      url: "https://www.cosmopolitan.com/tw/lifestyle/food-and-drink/g38298798/hsinchu-food-1123/",
      addedDate: "2026-11-16"
    }
  },
  {
    id: "nakazakiyake-curry",
    name: "中崎家-日式咖哩 新竹公道五店",
    city: "新竹市",
    district: "東區",
    category: "日式料理",
    summary: "日系無印簡約風裝潢，主打日本東京正統日式咖哩，濃郁甘醇帶辛香微辣。",
    description: "店內裝潢走日系無印簡約風格的中崎家，主打「日本東京正統日式咖哩」。香甜濃郁的日式咖哩拌著飯吃令人胃口大開，醬汁濃郁甘醇又辛香帶點辣度，香料帶來豐富味道層次，加點一顆太陽蛋，未熟蛋黃配上咖哩與白飯更添風味。",
    highlights: ["日本東京正統日式咖哩", "加點太陽蛋"],
    address: "300新竹市東區公道五路二段409號",
    hours: "11:30–14:00, 17:00–20:00（星期二公休）",
    phone: "03 573 3677",
    price: "",
    image: "https://hips.hearstapps.com/hmg-prod/images/ig-2021-11-21-下午3-30-46-1637479891.png?crop=0.806xw:0.699xh;0.0986xw,0.0973xh&resize=980:*",
    source: {
      title: "Cosmopolitan TW｜網友激推「新竹美食」TOP10！璽子牛肉麵、廟口鴨香飯，中崎家日式咖哩、米玥麻糬堂全都好吃又好拍",
      url: "https://www.cosmopolitan.com/tw/lifestyle/food-and-drink/g38298798/hsinchu-food-1123/",
      addedDate: "2026-11-16"
    }
  },
  {
    id: "manman-haoshi",
    name: "饅饅好食",
    city: "新竹市",
    district: "東區",
    category: "咖啡甜點",
    summary: "夢幻粉嫩裝潢與頂樓露台，主打多款精緻切片水果蛋糕與千層蛋糕，適合下午茶聚會。",
    description: "「饅饅好食」是熱門網美打卡店之一，擁有夢幻粉嫩的裝潢與頂樓露台。除簡餐外，店內最主打蛋糕類，提供白葡萄雙餡、紅茶香緹草莓、鮮果疊疊千層蛋糕、法國香緹水果、伯爵白巧綜合水果等多種口味切片蛋糕，價格約在150-200元之間，推薦姊妹下午茶聚會。",
    highlights: ["白葡萄雙餡蛋糕", "紅茶香緹草莓蛋糕", "鮮果疊疊千層蛋糕", "法國香緹水果蛋糕", "伯爵白巧綜合水果蛋糕"],
    address: "300新竹市東區文化街22號2樓",
    hours: "11:00–20:00（星期二公休）",
    phone: "03 543 0258",
    price: "切片蛋糕約 $150–$200",
    image: "assets/images/placeholder.svg",
    source: {
      title: "Cosmopolitan TW｜網友激推「新竹美食」TOP10！璽子牛肉麵、廟口鴨香飯，中崎家日式咖哩、米玥麻糬堂全都好吃又好拍",
      url: "https://www.cosmopolitan.com/tw/lifestyle/food-and-drink/g38298798/hsinchu-food-1123/",
      addedDate: "2026-11-16"
    }
  },
  {
    id: "deer-forest-italian",
    name: "鹿森林",
    city: "新竹市",
    district: "東區",
    category: "義式料理",
    summary: "白牆木質大門搭配綠植點綴的清新義式餐廳，主打義大利麵、輕食與排餐。",
    description: "鹿森林是一家義大利餐廳，外觀由白牆與木質風大門組成，室內外皆有綠植點綴，呈現清新風格，裝潢處處展現小巧思。店內餐點主打義大利麵、輕食與排餐，選擇豐富且蔬果新鮮。",
    highlights: ["義大利麵", "輕食", "排餐"],
    address: "300新竹市東區林森路158巷4號",
    hours: "11:00–19:30（星期二公休）",
    phone: "03 523 6565",
    price: "",
    image: "https://hips.hearstapps.com/hmg-prod/images/ig-2021-11-21-下午3-37-15-1637480286.png?crop=1.00xw:0.869xh;0,0.131xh&resize=980:*",
    source: {
      title: "Cosmopolitan TW｜網友激推「新竹美食」TOP10！璽子牛肉麵、廟口鴨香飯，中崎家日式咖哩、米玥麻糬堂全都好吃又好拍",
      url: "https://www.cosmopolitan.com/tw/lifestyle/food-and-drink/g38298798/hsinchu-food-1123/",
      addedDate: "2026-11-16"
    }
  },
  {
    id: "wuyang-restaurant",
    name: "無恙",
    city: "新竹市",
    district: "北區",
    category: "健康餐飲",
    summary: "Google 評價高達 4.8 顆星，復古典雅空間搭配爵士樂，主打低油低鹽清淡料理與手作甜點。",
    description: "在Google評價高達4.8顆星的「無恙」主打以低油低鹽的清淡料理為主，適合健身族群。室內裝潢充滿歷史感與復古典雅桌椅擺設，搭配爵士樂氣氛十分舒適。推薦紅酒燉牛肉、烤雞腿、湯品，餐後甜點如肉桂捲、抹茶瑪德蓮也頗受好評。",
    highlights: ["紅酒燉牛肉", "烤雞腿", "肉桂捲", "抹茶瑪德蓮"],
    address: "300新竹市北區中華路三段190號",
    hours: "11:00–20:00",
    phone: "03 525 0095",
    price: "",
    image: "assets/images/placeholder.svg",
    source: {
      title: "Cosmopolitan TW｜網友激推「新竹美食」TOP10！璽子牛肉麵、廟口鴨香飯，中崎家日式咖哩、米玥麻糬堂全都好吃又好拍",
      url: "https://www.cosmopolitan.com/tw/lifestyle/food-and-drink/g38298798/hsinchu-food-1123/",
      addedDate: "2026-11-16"
    }
  },
  {
    id: "miaokou-duck-rice",
    name: "廟口鴨香飯",
    city: "新竹市",
    district: "北區",
    category: "在地小吃",
    summary: "新竹必吃經典清單，大塊不柴的鴨肉片淋上獨門醬汁與油蔥酥，拌入半熟蛋汁超下飯。",
    description: "廟口鴨香飯是新竹的必吃清單之一。鴨香飯在鴨肉片上淋上獨門醬汁與油蔥酥，油而不膩，鴨肉大塊不柴讓整碗飯層次豐富，加上半熟蛋濃稠蛋汁拌飯非常下飯。平均一個人100至200元含小菜就能吃得很飽。",
    highlights: ["鴨香飯", "半熟荷包蛋"],
    address: "300新竹市北區中山路142號",
    hours: "11:00–15:00, 15:30–21:00（週二、三公休）",
    phone: "03 523 1190",
    price: "約 $100–$200",
    image: "assets/images/placeholder.svg",
    source: {
      title: "Cosmopolitan TW｜網友激推「新竹美食」TOP10！璽子牛肉麵、廟口鴨香飯，中崎家日式咖哩、米玥麻糬堂全都好吃又好拍",
      url: "https://www.cosmopolitan.com/tw/lifestyle/food-and-drink/g38298798/hsinchu-food-1123/",
      addedDate: "2026-11-16"
    }
  },
  {
    id: "miyue-mochi",
    name: "米玥麻糬堂",
    city: "新竹市",
    district: "東區",
    category: "咖啡甜點",
    summary: "傳統中藥店風趣味包裝，每天提供 7 種限定新穎內餡麻糬，單顆 $18–$45。",
    description: "米玥麻糬堂每天有7種限定口味，單顆麻糬價位在18至45元之間。與傳統麻糬內餡截然不同，提供生巧克力、奇異果、鐵觀音奶茶等新穎口味；店面明亮並設有一整排木櫃，包裝風格宛如傳統中藥店相當有趣。",
    highlights: ["生巧克力麻糬", "奇異果麻糬", "鐵觀音奶茶麻糬"],
    address: "300新竹市東區食品路59號",
    hours: "12:00–19:00",
    phone: "03 575 0929",
    price: "單顆 $18–$45",
    image: "assets/images/placeholder.svg",
    source: {
      title: "Cosmopolitan TW｜網友激推「新竹美食」TOP10！璽子牛肉麵、廟口鴨香飯，中崎家日式咖哩、米玥麻糬堂全都好吃又好拍",
      url: "https://www.cosmopolitan.com/tw/lifestyle/food-and-drink/g38298798/hsinchu-food-1123/",
      addedDate: "2026-11-16"
    }
  },
  {
    id: "fuku-kitchen-shijie",
    name: "福氣廚房-新竹世界店",
    city: "新竹市",
    district: "東區",
    category: "日式料理",
    summary: "和食台式半開放式廚房餐廳，主打高級食材串燒、飯糰與鮮甜入口即化的生魚片。",
    description: "福氣廚房是一間和食台式餐廳，設有半開放式廚房可欣賞師傅料理。選用高級食材製作精緻美味的日式料理，推薦給喜愛串燒、飯糰的人，生魚片新鮮鮮甜、入口即化且毫無魚腥味。",
    highlights: ["生魚片", "串燒", "飯糰"],
    address: "300新竹市東區世界街95號",
    hours: "11:30–14:00, 17:30–00:00（週一公休）",
    phone: "03 533 5899",
    price: "",
    image: "https://hips.hearstapps.com/hmg-prod/images/螢幕快照-2021-11-21-下午3-54-19-1637481337.png?crop=0.923xw:0.896xh;0.0289xw,0.0173xh&resize=980:*",
    source: {
      title: "Cosmopolitan TW｜網友激推「新竹美食」TOP10！璽子牛肉麵、廟口鴨香飯，中崎家日式咖哩、米玥麻糬堂全都好吃又好拍",
      url: "https://www.cosmopolitan.com/tw/lifestyle/food-and-drink/g38298798/hsinchu-food-1123/",
      addedDate: "2026-11-16"
    }
  }
];
