import { useState } from "react";

const t = {
  zh: {
    title: "海外留学候选校 比较分析",
    subtitle: "澳大利亚 · 新西兰 · 加拿大 · 美国 — 共10所学校",
    tabCity: "城市·气候", tabSchool: "学校一览", tabCompare: "综合比较",
    all: "全部", australia: "澳大利亚", newZealand: "新西兰", canada: "加拿大", usa: "美国",
    coed: "男女共学", girls: "女子校", students: "学生数", intl: "留学生",
    founded: "创立", year: "年", climate: "气候", climateLabel: "气候",
    cultureLabel: "人文·城市", pros: "优势", cons: "注意点", candidateSchools: "候选校",
    schoolFeatures: "学校特色", type: "类型", summer: "夏季", winter: "冬季",
    rain: "降雨", humidity: "湿度", activities: "课外活动", accommodation: "住宿",
    fourDimensions: "四维综合评价", school: "学校", climateComfort: "气候舒适",
    cultureEnv: "人文环境", schoolHistory: "学校历史", academicQuality: "学术素质",
    analysisTitle: "分析与建议", livabilityScore: "宜居评分", climateType: "类型",
    gradeLabel: "年级", privateSchool: "私立", publicSchool: "公立",
    website: "访问官网", websiteHint: "在新标签页打开",
    rec1Title: "如果重视学术传统和历史底蕴",
    rec1Body: "Auckland Girls' Grammar School（1888年创立）是首选。138年历史，新西兰最古老的女子校之一。2025年NCEA合格率高达97.5%，近年学术水平急剧提升。管弦乐团和全球化视野教育也是亮点。",
    rec2Title: "如果重视气候舒适和城市宜居",
    rec2Body: "Adelaide两所学校值得关注。地中海气候，湿度低，EIU全球宜居城市第9位，教育和医疗满分。Mitcham Girls作为唯一的公立女子校有特色；Charles Campbell则留学生较多（50名），适应起来可能更容易。",
    rec3Title: "如果重视文化融入和亚裔社区",
    rec3Body: "Vancouver的Hugh Boyd（Richmond学区）周边亚裔人口比例极高，文化冲击最小。IB项目也有助于未来大学申请。但注意冬天雨季较长，气温是五个城市中较低的。",
    rec4Title: "如果重视温暖气候和户外活动",
    rec4Body: "Brisbane两所学校（Mitchelton、Kedron）全年温暖。Kedron规模最大（1,500人），体育和音乐资源丰富，少人数制（25人/班）。但夏季湿度较高，需要适应。",
    rec5Title: "如果重视留学生关怀和选科丰富度",
    rec5Body: "Auckland的Onehanga High School选修科目丰富（机器人·会计·媒体等），ICT设施先进。Henderson High School以温馨的留学生关怀著称。",
    rec6Title: "如果重视美国教育体系和私校小班制",
    rec6Body: "Portland的King's Way Christian School是10校中唯一的私立学校。留学生仅20名，关怀极其细致，有专属ESL课程和定期的留学生管理活动。基督教学校氛围温馨。Portland夏季凉爽宜人，但冬季多雨。适合希望体验美式教育、重视个人关怀的学生。",
    disclaimer: "以上评分基于学校资料和公开信息的综合判断，供参考。建议根据孩子的性别、性格和兴趣方向来进一步缩小范围。",
  },
  ja: {
    title: "海外留学候補校 比較分析",
    subtitle: "オーストラリア · ニュージーランド · カナダ · アメリカ — 全10校",
    tabCity: "都市·気候", tabSchool: "学校一覧", tabCompare: "総合比較",
    all: "すべて", australia: "オーストラリア", newZealand: "ニュージーランド", canada: "カナダ", usa: "アメリカ",
    coed: "共学", girls: "女子校", students: "生徒数", intl: "留学生",
    founded: "創立", year: "年", climate: "気候", climateLabel: "気候",
    cultureLabel: "人文·都市", pros: "メリット", cons: "注意点", candidateSchools: "候補校",
    schoolFeatures: "学校の特徴", type: "タイプ", summer: "夏", winter: "冬",
    rain: "降雨", humidity: "湿度", activities: "課外活動", accommodation: "宿泊",
    fourDimensions: "4次元総合評価", school: "学校", climateComfort: "気候快適度",
    cultureEnv: "人文環境", schoolHistory: "学校の歴史", academicQuality: "学術レベル",
    analysisTitle: "分析とアドバイス", livabilityScore: "住みやすさスコア", climateType: "タイプ",
    gradeLabel: "年生", privateSchool: "私立", publicSchool: "公立",
    website: "公式サイト", websiteHint: "新しいタブで開く",
    rec1Title: "学術伝統と歴史を重視するなら",
    rec1Body: "Auckland Girls' Grammar School（1888年創立）が最有力。138年の歴史を持つNZ最古の女子校の一つ。2025年NCEA合格率は97.5%に達し、近年学力が急上昇。管弦楽団やグローバル教育も充実。",
    rec2Title: "気候の快適さと都市の住みやすさを重視するなら",
    rec2Body: "Adelaideの2校が注目。地中海性気候で湿度が低く、EIU世界住みやすい都市ランキング第9位。教育・医療は満点評価。Mitcham Girlsは唯一の公立女子校、Charles Campbellは留学生が50名と多く馴染みやすい環境。",
    rec3Title: "文化的な馴染みやすさを重視するなら",
    rec3Body: "VancouverのHugh Boyd（Richmond学区）周辺はアジア系住民の割合が非常に高く、馴染みやすい。IBプログラムは将来の大学出願にもプラス。ただし冬の雨季が長く、気温は5都市で低めの部類。",
    rec4Title: "温暖な気候とアウトドアを重視するなら",
    rec4Body: "Brisbaneの2校（Mitchelton・Kedron）は年間を通じて温暖。Kedronは最大規模（1,500名）で、スポーツ・音楽のリソースが豊富、1クラス25名の少人数制。ただし夏の湿度は高めです。",
    rec5Title: "留学生ケアと選択科目の豊富さを重視するなら",
    rec5Body: "AucklandのOnehanga High Schoolはロボット工学・会計・メディアなど珍しい選択科目が豊富。Henderson High Schoolはアットホームな留学生ケアに定評あり。",
    rec6Title: "アメリカの教育と私立校の少人数制を重視するなら",
    rec6Body: "PortlandのKing's Way Christian Schoolは10校中唯一の私立校。留学生わずか20名で、きめ細かいサポートと専用ESLクラス、定期的なイベントが特徴。キリスト教系の温かい雰囲気。Portlandは夏が爽やかだが冬は雨が多い。アメリカ式教育を体験したい、個別ケアを重視する生徒に最適。",
    disclaimer: "上記評価は学校資料と公開情報に基づく総合判断です。お子さんの性別、性格、興味の方向に合わせて絞り込むことをお勧めします。",
  },
  en: {
    title: "Overseas Study — School Comparison",
    subtitle: "Australia · New Zealand · Canada · USA — 10 Schools",
    tabCity: "Cities & Climate", tabSchool: "Schools", tabCompare: "Comparison",
    all: "All", australia: "Australia", newZealand: "New Zealand", canada: "Canada", usa: "USA",
    coed: "Co-ed", girls: "Girls", students: "Students", intl: "Int'l Students",
    founded: "Founded", year: "", climate: "Climate", climateLabel: "Climate",
    cultureLabel: "City & Culture", pros: "Pros", cons: "Considerations", candidateSchools: "Schools",
    schoolFeatures: "Features", type: "Type", summer: "Summer", winter: "Winter",
    rain: "Rain", humidity: "Humidity", activities: "Activities", accommodation: "Accommodation",
    fourDimensions: "Four-Dimension Rating", school: "School", climateComfort: "Climate",
    cultureEnv: "Culture", schoolHistory: "History", academicQuality: "Academics",
    analysisTitle: "Analysis & Recommendations", livabilityScore: "Livability", climateType: "Type",
    gradeLabel: " grades", privateSchool: "Private", publicSchool: "Public",
    website: "Visit Website", websiteHint: "Opens in new tab",
    rec1Title: "For academic tradition and heritage",
    rec1Body: "Auckland Girls' Grammar School (est. 1888) stands out. 138 years of history, one of NZ's oldest girls' schools. 2025 NCEA pass rate reached 97.5%, with rapid academic improvement in recent years. Strong orchestra and global education programs.",
    rec2Title: "For comfortable climate and livability",
    rec2Body: "Both Adelaide schools are excellent. Mediterranean climate with low humidity, ranked #9 globally by EIU for livability with perfect education and healthcare scores. Mitcham Girls is the only public girls' school; Charles Campbell has more international students (50), making integration easier.",
    rec3Title: "For cultural familiarity and Asian community",
    rec3Body: "Hugh Boyd in Vancouver's Richmond district has a very high proportion of Asian residents, minimizing culture shock. The IB program is also advantageous for future university applications. Note the long rainy winter season and relatively lower temperatures.",
    rec4Title: "For warm climate and outdoor activities",
    rec4Body: "Both Brisbane schools (Mitchelton, Kedron) enjoy year-round warmth. Kedron is the largest (1,500 students) with rich sports and music programs and small class sizes (~25). Summer humidity can be high.",
    rec5Title: "For student care and diverse electives",
    rec5Body: "Auckland's Onehanga High School offers unique electives (robotics, accounting, media) with advanced ICT facilities. Henderson High School is known for its caring, home-like atmosphere for international students.",
    rec6Title: "For American education and private school attention",
    rec6Body: "King's Way Christian School in Portland is the only private school among the 10. With just 20 international students, care is highly personalized — dedicated ESL classes and regular international student events. A warm Christian school atmosphere. Portland has pleasant dry summers but rainy winters. Ideal for students seeking an American education experience with close personal support.",
    disclaimer: "Ratings are based on school materials and public information, for reference only. Consider your child's gender, personality, and interests to narrow down the best fit.",
  },
};

const schoolsData = [
  {
    id: 1, name: "Mitcham Girls High School",
    nameZh: "米查姆女子高中", nameJa: "ミッチャムガールズハイスクール", nameEn: "Mitcham Girls High School",
    website: "https://www.mitchamgirlshs.sa.edu.au",
    country: "AU", city: "Adelaide", cityZh: "阿德莱德", cityJa: "アデレード", cityEn: "Adelaide",
    type: "girls", isPrivate: false, founded: 1964, students: 830, intlStudents: 20, grades: "7–12",
    climate: { summer: "16–29°C", winter: "8–16°C", typeZh: "地中海性", typeJa: "地中海性", typeEn: "Mediterranean", rainZh: "少", rainJa: "少ない", rainEn: "Low", humidityZh: "低", humidityJa: "低い", humidityEn: "Low" },
    highlightsZh: ["阿德莱德唯一的公立女子校", "大学升学和职业教育充实", "视觉艺术·表演艺术资源丰富"],
    highlightsJa: ["アデレード唯一の公立女子校", "大学進学とキャリア教育が充実", "ビジュアルアート・パフォーマンス充実"],
    highlightsEn: ["Adelaide's only public girls' school", "Strong university prep & career education", "Rich visual & performing arts programs"],
    activitiesZh: "游泳·羽毛球·排球·足球·舞蹈·音乐", activitiesJa: "水泳・バドミントン・バレー・サッカー・ダンス・音楽", activitiesEn: "Swimming, badminton, volleyball, soccer, dance, music",
    accommodationZh: "寄宿家庭·单人间·每日三餐", accommodationJa: "ホームステイ・1人部屋・3食付き", accommodationEn: "Homestay, single room, 3 meals/day",
  },
  {
    id: 2, name: "Charles Campbell College",
    nameZh: "查尔斯坎贝尔学院", nameJa: "チャールズキャンベルカレッジ", nameEn: "Charles Campbell College",
    website: "https://www.ccc.sa.edu.au",
    country: "AU", city: "Adelaide", cityZh: "阿德莱德", cityJa: "アデレード", cityEn: "Adelaide",
    type: "coed", isPrivate: false, founded: 1992, students: 850, intlStudents: 50, grades: "7–12",
    climate: { summer: "16–29°C", winter: "8–16°C", typeZh: "地中海性", typeJa: "地中海性", typeEn: "Mediterranean", rainZh: "少", rainJa: "少ない", rainEn: "Low", humidityZh: "低", humidityJa: "低い", humidityEn: "Low" },
    highlightsZh: ["小中一贯校，跨年龄段交流丰富", "舞蹈工作室·表演设施完善", "留学生50名，受入实绩较多"],
    highlightsJa: ["小中一貫校で幅広い年齢層と交流", "ダンススタジオ・パフォーマンス施設充実", "留学生50名と比較的多い受入れ実績"],
    highlightsEn: ["K-12 school with cross-age interaction", "Dance studio & performance facilities", "50 international students — strong track record"],
    activitiesZh: "舞蹈·音乐演奏·各类运动·戏剧", activitiesJa: "ダンス・音楽演奏・各種スポーツ・演劇", activitiesEn: "Dance, music, various sports, drama",
    accommodationZh: "寄宿家庭·单人间·每日三餐", accommodationJa: "ホームステイ・1人部屋・3食付き", accommodationEn: "Homestay, single room, 3 meals/day",
  },
  {
    id: 3, name: "Mitchelton State High School",
    nameZh: "米切尔顿州立高中", nameJa: "ミッチェルトンステイトハイスクール", nameEn: "Mitchelton State High School",
    website: "https://mitcheltonshs.eq.edu.au",
    country: "AU", city: "Brisbane", cityZh: "布里斯班", cityJa: "ブリスベン", cityEn: "Brisbane",
    type: "coed", isPrivate: false, founded: 1956, students: 500, intlStudents: 30, grades: "7–12",
    climate: { summer: "21–30°C", winter: "11–21°C", typeZh: "亚热带", typeJa: "亜熱帯", typeEn: "Subtropical", rainZh: "夏季较多", rainJa: "夏に多い", rainEn: "Heavy in summer", humidityZh: "中〜高", humidityJa: "中〜高", humidityEn: "Medium–High" },
    highlightsZh: ["小规模校，留学生日语支援完善", "开设日语作为外语课程", "多元文化中的家庭式氛围"],
    highlightsJa: ["小規模校で留学生への日本語サポートあり", "外国語として日本語を提供", "多文化環境の中で家庭的な雰囲気"],
    highlightsEn: ["Small school with Japanese language support", "Japanese offered as foreign language", "Multicultural, family-like atmosphere"],
    activitiesZh: "各类运动·舞蹈·音乐·动漫社", activitiesJa: "各種スポーツ・ダンス・音楽・アニメ部", activitiesEn: "Sports, dance, music, anime club",
    accommodationZh: "寄宿家庭·单人间·每日三餐", accommodationJa: "ホームステイ・1人部屋・3食付き", accommodationEn: "Homestay, single room, 3 meals/day",
  },
  {
    id: 4, name: "Kedron State High School",
    nameZh: "凯德隆州立高中", nameJa: "ケドロンステイトハイスクール", nameEn: "Kedron State High School",
    website: "https://kedronshs.eq.edu.au",
    country: "AU", city: "Brisbane", cityZh: "布里斯班", cityJa: "ブリスベン", cityEn: "Brisbane",
    type: "coed", isPrivate: false, founded: 1956, students: 1500, intlStudents: 45, grades: "7–12",
    climate: { summer: "21–30°C", winter: "11–21°C", typeZh: "亚热带", typeJa: "亜熱帯", typeEn: "Subtropical", rainZh: "夏季较多", rainJa: "夏に多い", rainEn: "Heavy in summer", humidityZh: "中〜高", humidityJa: "中〜高", humidityEn: "Medium–High" },
    highlightsZh: ["10校中规模最大 — 1,500名", "音乐·文武两道声誉卓著", "每班25人左右的小班制"],
    highlightsJa: ["10校中最大規模 — 1,500名", "音楽・文武両道に定評あり", "1クラス25名前後の少人数制"],
    highlightsEn: ["Largest of all 10 schools — 1,500 students", "Renowned for music and well-rounded education", "Small class sizes (~25 students)"],
    activitiesZh: "多种运动·管乐·合唱·艺术活动", activitiesJa: "多種スポーツ・吹奏楽・合唱・芸術活動", activitiesEn: "Various sports, concert band, choir, arts",
    accommodationZh: "寄宿家庭·单人间·每日三餐", accommodationJa: "ホームステイ・1人部屋・3食付き", accommodationEn: "Homestay, single room, 3 meals/day",
  },
  {
    id: 5, name: "Auckland Girls' Grammar School",
    nameZh: "奥克兰女子文法学校", nameJa: "オークランドガールズグラマースクール", nameEn: "Auckland Girls' Grammar School",
    website: "https://www.aggs.school.nz",
    country: "NZ", city: "Auckland", cityZh: "奥克兰", cityJa: "オークランド", cityEn: "Auckland",
    type: "girls", isPrivate: false, founded: 1888, students: 1000, intlStudents: 30, grades: "9–13",
    climate: { summer: "13–23°C", winter: "10–15°C", typeZh: "温暖海洋性", typeJa: "温暖海洋性", typeEn: "Temperate oceanic", rainZh: "全年分布", rainJa: "年間通じて", rainEn: "Year-round", humidityZh: "中", humidityJa: "中程度", humidityEn: "Medium" },
    highlightsZh: ["1888年创立 — 10校中历史最悠久", "2025年NCEA合格率97%超，急速成长", "管弦乐团·全球化教育·文化交流充实"],
    highlightsJa: ["1888年創立 — 10校中最も長い歴史", "2025年NCEA合格率97%超の急成長校", "管弦楽団・グローバル教育・文化交流充実"],
    highlightsEn: ["Founded 1888 — oldest of all 10 schools", "2025 NCEA pass rate over 97%, rapid growth", "Orchestra, global education, cultural exchange"],
    activitiesZh: "管弦乐团·合唱·长笛·戏剧·文化交流", activitiesJa: "管弦楽団・コーラス・フルート・演劇・文化交流", activitiesEn: "Orchestra, choir, flute, drama, cultural exchange",
    accommodationZh: "寄宿家庭·需审核", accommodationJa: "ホームステイ・選考あり", accommodationEn: "Homestay, screening required",
  },
  {
    id: 6, name: "Onehanga High School",
    nameZh: "奥尼杭阿高中", nameJa: "オネハンガハイスクール", nameEn: "Onehanga High School",
    website: "https://www.ohs.school.nz",
    country: "NZ", city: "Auckland", cityZh: "奥克兰", cityJa: "オークランド", cityEn: "Auckland",
    type: "coed", isPrivate: false, founded: 1959, students: 1000, intlStudents: 40, grades: "9–13",
    climate: { summer: "13–23°C", winter: "10–15°C", typeZh: "温暖海洋性", typeJa: "温暖海洋性", typeEn: "Temperate oceanic", rainZh: "全年分布", rainJa: "年間通じて", rainEn: "Year-round", humidityZh: "中", humidityJa: "中程度", humidityEn: "Medium" },
    highlightsZh: ["文武两道办学理念", "ICT设施完善·设有终身学习中心", "选修科目丰富（机器人·会计·媒体等）"],
    highlightsJa: ["文武両道のモットー", "ICT設備充実・生涯学習センター設置", "選択科目が豊富（ロボット・会計・メディア等）"],
    highlightsEn: ["'Mind and Body' philosophy", "Advanced ICT, lifelong learning center", "Rich electives: robotics, accounting, media"],
    activitiesZh: "20种以上运动·乐队·戏剧·舞蹈", activitiesJa: "20種以上のスポーツ・バンド・演劇・ダンス", activitiesEn: "20+ sports, band, drama, dance",
    accommodationZh: "寄宿家庭·单人间·每日三餐", accommodationJa: "ホームステイ・1人部屋・3食付き", accommodationEn: "Homestay, single room, 3 meals/day",
  },
  {
    id: 7, name: "Henderson High School",
    nameZh: "亨德森高中", nameJa: "ヘンダーソンハイスクール", nameEn: "Henderson High School",
    website: "https://www.henderson.school.nz",
    country: "NZ", city: "Auckland", cityZh: "奥克兰", cityJa: "オークランド", cityEn: "Auckland",
    type: "coed", isPrivate: false, founded: 1953, students: 900, intlStudents: 30, grades: "9–13",
    climate: { summer: "13–23°C", winter: "10–15°C", typeZh: "温暖海洋性", typeJa: "温暖海洋性", typeEn: "Temperate oceanic", rainZh: "全年分布", rainJa: "年間通じて", rainEn: "Year-round", humidityZh: "中", humidityJa: "中程度", humidityEn: "Medium" },
    highlightsZh: ["留学生关怀细致的温馨校风", "多语言支持（韩语·中文·西班牙语等）", "3D打印机等先进设备"],
    highlightsJa: ["留学生ケアが手厚いアットホームな校風", "多言語対応（韓国語・中国語・スペイン語等）", "3Dプリンターなどの先進設備"],
    highlightsEn: ["Caring, home-like atmosphere for int'l students", "Multilingual support (Korean, Chinese, Spanish)", "3D printing and advanced facilities"],
    activitiesZh: "篮球·排球·足球·网球·舞蹈·音乐", activitiesJa: "バスケ・バレー・サッカー・テニス・ダンス・音楽", activitiesEn: "Basketball, volleyball, soccer, tennis, dance, music",
    accommodationZh: "寄宿家庭·每日三餐", accommodationJa: "ホームステイ・3食付き", accommodationEn: "Homestay, 3 meals/day",
  },
  {
    id: 8, name: "Hugh Boyd Secondary School",
    nameZh: "休博伊德中学", nameJa: "ヒューボイドセカンダリースクール", nameEn: "Hugh Boyd Secondary School",
    website: "https://boyd.sd38.bc.ca",
    country: "CA", city: "Vancouver", cityZh: "温哥华（里士满）", cityJa: "バンクーバー（リッチモンド）", cityEn: "Vancouver (Richmond)",
    type: "coed", isPrivate: false, founded: 1960, students: 700, intlStudents: 50, grades: "8–12",
    climate: { summer: "14–22°C", winter: "1–7°C", typeZh: "海洋性", typeJa: "海洋性", typeEn: "Oceanic", rainZh: "冬季多", rainJa: "冬に多い", rainEn: "Heavy in winter", humidityZh: "高", humidityJa: "高い", humidityEn: "High" },
    highlightsZh: ["IB项目（MYP）认证学校", "亚裔社区密集，文化冲击最小", "升学指导·职业规划完善"],
    highlightsJa: ["IBプログラム（MYP）提供校", "アジア系コミュニティが多く馴染みやすい", "進学指導・キャリア指導に注力"],
    highlightsEn: ["IB programme (MYP) certified", "Dense Asian community — minimal culture shock", "Strong university and career counseling"],
    activitiesZh: "篮球·高尔夫·越野跑·环保活动·音乐", activitiesJa: "バスケ・ゴルフ・クロスカントリー・環境活動・音楽", activitiesEn: "Basketball, golf, cross-country, eco club, music",
    accommodationZh: "寄宿家庭·单人间·每日三餐", accommodationJa: "ホームステイ・1人部屋・3食付き", accommodationEn: "Homestay, single room, 3 meals/day",
  },
  {
    id: 9, name: "Brookswood Secondary School",
    nameZh: "布鲁克斯伍德中学", nameJa: "ブルックスウッドセカンダリースクール", nameEn: "Brookswood Secondary School",
    website: "https://www.sd35.bc.ca/bss",
    country: "CA", city: "Vancouver", cityZh: "温哥华（兰利）", cityJa: "バンクーバー（ラングレー）", cityEn: "Vancouver (Langley)",
    type: "coed", isPrivate: false, founded: null, students: 1100, intlStudents: 140, grades: "8–12",
    climate: { summer: "14–22°C", winter: "1–7°C", typeZh: "海洋性", typeJa: "海洋性", typeEn: "Oceanic", rainZh: "冬季多", rainJa: "冬に多い", rainEn: "Heavy in winter", humidityZh: "高", humidityJa: "高い", humidityEn: "High" },
    highlightsZh: ["留学生140名 — 10校中国际化程度最高", "设施完善（计算机实验室·媒体中心）", "广阔校园·安全住宅区"],
    highlightsJa: ["留学生140名 — 10校中最も多い国際色", "充実した施設（コンピュータラボ・メディアセンター）", "広大なキャンパスと安全な住宅街"],
    highlightsEn: ["140 int'l students — most diverse of all 10", "Computer labs, media center", "Spacious campus in safe residential area"],
    activitiesZh: "羽毛球·篮球·冰球·橄榄球·游泳", activitiesJa: "バドミントン・バスケ・アイスホッケー・ラグビー・水泳", activitiesEn: "Badminton, basketball, ice hockey, rugby, swimming",
    accommodationZh: "寄宿家庭·单人间·每日三餐", accommodationJa: "ホームステイ・1人部屋・3食付き", accommodationEn: "Homestay, single room, 3 meals/day",
  },
  {
    id: 10, name: "King's Way Christian School",
    nameZh: "国王之路基督教学校", nameJa: "キングスウェイクリスチャンスクール", nameEn: "King's Way Christian School",
    website: "https://www.kwcs.org",
    country: "US", city: "Portland", cityZh: "波特兰", cityJa: "ポートランド", cityEn: "Portland",
    type: "coed", isPrivate: true, founded: 1971, students: 1100, intlStudents: 20, grades: "K–12",
    climate: { summer: "14–28°C", winter: "2–7°C", typeZh: "地中海（温暖夏季型）", typeJa: "地中海性（温暖な夏）", typeEn: "Mediterranean (warm summer)", rainZh: "冬季多·夏季极少", rainJa: "冬に多く夏はほぼなし", rainEn: "Very wet winters, dry summers", humidityZh: "冬高·夏中", humidityJa: "冬は高く夏は中程度", humidityEn: "High winter, moderate summer" },
    highlightsZh: ["10校中唯一的私立学校", "留学生仅20名——极致的个人关怀", "2007年起接收留学生·ESL课程·定期管理活动", "2005年新校舍·设施全面"],
    highlightsJa: ["10校中唯一の私立校", "留学生わずか20名 — きめ細かいケア", "2007年より留学生受入・ESLクラス・定期イベント", "2005年に新校舎へ移転・施設充実"],
    highlightsEn: ["Only private school among all 10", "Just 20 int'l students — highly personalized care", "Int'l student program since 2007, ESL classes, regular events", "New campus since 2005, full facilities"],
    activitiesZh: "橄榄球·越野跑·陆上竞技·野球·排球·啦啦队·垒球·足球·高尔夫·篮球", activitiesJa: "フットボール・クロスカントリー・陸上・野球・バレー・チアリーディング・ソフトボール・サッカー・ゴルフ・バスケ", activitiesEn: "Football, cross-country, track, baseball, volleyball, cheer, softball, soccer, golf, basketball",
    accommodationZh: "寄宿家庭·单人间·每日三餐·可与当地学生同住", accommodationJa: "ホームステイ・1人部屋・3食付き・現地学生と同居の場合も", accommodationEn: "Homestay, single room, 3 meals/day, may live with local students",
  },
];

const citiesData = [
  {
    name: "Adelaide", nameZh: "阿德莱德", nameJa: "アデレード", nameEn: "Adelaide", country: "AU", flag: "🇦🇺",
    climateZh: "地中海性气候。夏季干燥温暖（最高29°C），冬季温和（8–16°C）。全澳首府城市中湿度最低。",
    climateJa: "地中海性気候。夏は乾燥して暖かく（最高29°C）、冬は穏やか（8–16°C）。全豪州首都中で最も湿度が低い。",
    climateEn: "Mediterranean climate. Dry, warm summers (up to 29°C), mild winters (8–16°C). Lowest humidity of any Australian capital.",
    cultureZh: "\"葡萄酒之都\"巴罗莎谷近在咫尺。2025年EIU全球宜居城市第9位，教育·医疗满分。城市紧凑，治安良好。",
    cultureJa: "ワインの都バロッサバレーが近く食文化が豊か。EIU世界住みやすい都市第9位。教育・医療は満点。コンパクトで治安良好。",
    cultureEn: "\"Wine capital\" near Barossa Valley. EIU 2025 global livability #9, perfect education & healthcare scores. Compact, safe city.",
    livability: 95.9,
    prosZh: ["湿度最低，体感最舒适", "治安好·城市紧凑", "生活费相对较低"], prosJa: ["湿度が最も低く快適", "治安良好・コンパクト", "生活費が相対的に安い"], prosEn: ["Lowest humidity — most comfortable", "Safe and compact city", "Relatively low cost of living"],
    consZh: ["城市规模偏小", "冬天偶有寒冷"], consJa: ["都市としてはやや小規模", "冬は肌寒い日も"], consEn: ["Smaller city size", "Occasionally cold in winter"],
  },
  {
    name: "Brisbane", nameZh: "布里斯班", nameJa: "ブリスベン", nameEn: "Brisbane", country: "AU", flag: "🇦🇺",
    climateZh: "亚热带气候。全年温暖，冬天日间也有20°C左右。夏季高温多湿（30°C以上）。",
    climateJa: "亜熱帯性気候。年間を通じて暖かく、冬でも日中は20°C前後。夏は高温多湿（30°C超）。",
    climateEn: "Subtropical climate. Warm year-round, even winter days reach ~20°C. Hot, humid summers above 30°C.",
    cultureZh: "澳大利亚第三大城市，2032年奥运会举办地。户外文化浓厚，黄金海岸近在眼前。",
    cultureJa: "オーストラリア第3の都市。2032年オリンピック開催地。サーフィンやアウトドア文化が根付く。ゴールドコーストも近い。",
    cultureEn: "Australia's 3rd largest city, 2032 Olympics host. Strong outdoor & surf culture, near Gold Coast.",
    livability: null,
    prosZh: ["全年温暖", "户外活动天堂", "城市活力充沛"], prosJa: ["年間を通じて暖かい", "アウトドア天国", "活気ある都市"], prosEn: ["Warm year-round", "Outdoor paradise", "Vibrant city"],
    consZh: ["夏季湿度较高", "夏天有强雷暴"], consJa: ["夏の湿度が高い", "夏に激しい雷雨あり"], consEn: ["High summer humidity", "Intense summer thunderstorms"],
  },
  {
    name: "Auckland", nameZh: "奥克兰", nameJa: "オークランド", nameEn: "Auckland", country: "NZ", flag: "🇳🇿",
    climateZh: "温暖海洋性气候。四季分明但无极端温差。夏13–23°C，冬10–15°C。全年有适量降雨。",
    climateJa: "温暖海洋性気候。四季はあるが極端な寒暖差はない。夏13–23°C、冬10–15°C。年間を通じて適度に雨。",
    climateEn: "Temperate oceanic climate. Four seasons without extremes. Summer 13–23°C, winter 10–15°C. Year-round rainfall.",
    cultureZh: "新西兰最大城市。毛利·英国·太平洋岛屿文化交融。火山·海·森林环绕，教育水准高。",
    cultureJa: "NZ最大の都市。マオリ・英国・太平洋諸島文化が融合。火山・海・森林に囲まれ、教育水準が高い。",
    cultureEn: "NZ's largest city. Blend of Maori, British, and Pacific cultures. Surrounded by volcanoes, sea, and forests. High education standards.",
    livability: null,
    prosZh: ["气候温和宜人", "自然与城市完美平衡", "多元文化·包容氛围"], prosJa: ["穏やかな気候で過ごしやすい", "自然と都市のバランスが絶妙", "多文化で寛容な雰囲気"], prosEn: ["Mild, pleasant climate", "Perfect nature-city balance", "Multicultural and inclusive"],
    consZh: ["全年雨量较多", "物价偏高"], consJa: ["年間を通じて雨が多い", "物価がやや高め"], consEn: ["Frequent rain year-round", "Higher cost of living"],
  },
  {
    name: "Vancouver", nameZh: "温哥华", nameJa: "バンクーバー", nameEn: "Vancouver", country: "CA", flag: "🇨🇦",
    climateZh: "海洋性气候。加拿大最温暖的城市，但冬季多雨。夏14–22°C清爽宜人，冬1–7°C少雪。",
    climateJa: "海洋性気候。カナダで最も温暖だが冬は雨が非常に多い。夏は14–22°Cで爽やか。冬は1–7°C。",
    climateEn: "Oceanic climate. Canada's mildest city but very rainy winters. Summer 14–22°C, winter 1–7°C with little snow.",
    cultureZh: "亚裔居民众多（尤其Richmond地区），中餐日料随处可见，文化冲击最小。自然与都市完美融合。",
    cultureJa: "アジア系住民が多く（特にリッチモンド地区）、日本食も豊富で馴染みやすい。自然とアーバンが融合。",
    cultureEn: "Large Asian community (esp. Richmond), abundant Asian cuisine, minimal culture shock. Nature meets urban life.",
    livability: null,
    prosZh: ["亚裔社区成熟，最易融入", "加拿大最温暖", "自然与城市平衡极佳"], prosJa: ["アジア系コミュニティが大きく馴染みやすい", "カナダで最も温暖", "大自然と都市のバランス"], prosEn: ["Largest Asian community — easiest adaptation", "Canada's warmest", "Excellent nature-city balance"],
    consZh: ["冬季（11–3月）雨非常多", "住房成本为加拿大最高"], consJa: ["冬の雨が非常に多い（11–3月）", "住居費がカナダ最高水準"], consEn: ["Very rainy Nov–Mar", "Highest housing costs in Canada"],
  },
  {
    name: "Portland", nameZh: "波特兰", nameJa: "ポートランド", nameEn: "Portland", country: "US", flag: "🇺🇸",
    climateZh: "地中海气候（温暖夏季型）。夏季干燥晴朗（14–28°C），冬季多雨阴冷（2–7°C）。年降雨量约1,050mm，集中在冬半年。",
    climateJa: "地中海性気候（温暖な夏型）。夏は乾燥して爽やか（14–28°C）、冬は雨が多く曇りがち（2–7°C）。年間降水量約1,050mm、冬に集中。",
    climateEn: "Mediterranean (warm summer) climate. Dry, sunny summers (14–28°C), rainy overcast winters (2–7°C). ~1,050mm annual rainfall, concentrated in winter.",
    cultureZh: "全美「最想居住的城市」之一，人口约65万。环保意识强，独立书店·咖啡馆·精酿啤酒文化浓厚。紧凑而有个性的城市，距海和山都仅约1小时车程。生活节奏悠闲。",
    cultureJa: "全米「最も住みたい都市」の常連で人口約65万人。エコ意識が高く、独立書店・カフェ・クラフトビール文化が根付く。コンパクトで個性的な街。海も山も車で約1時間。",
    cultureEn: "Consistently voted one of America's most livable cities. Population ~650K. Known for eco-consciousness, indie bookshops, coffee culture, and craft beer. Compact, quirky city — an hour from both ocean and mountains.",
    livability: null,
    prosZh: ["夏季凉爽干燥极其舒适", "城市个性独特·文化丰富", "自然资源极佳（海·山·森林）", "生活成本低于旧金山·西雅图"],
    prosJa: ["夏は涼しく乾燥して非常に快適", "個性的でユニークな文化", "自然が豊か（海・山・森林）", "生活費がSF・シアトルより安い"],
    prosEn: ["Cool, dry summers are very pleasant", "Unique culture and character", "Great nature access (ocean, mountains, forests)", "Lower cost than SF/Seattle"],
    consZh: ["冬季（11–3月）阴雨连绵", "冬天日照极短（12月仅2小时/天）", "城市规模中等"],
    consJa: ["冬（11–3月）は曇天と雨が続く", "冬の日照が非常に短い（12月は約2時間/日）", "中規模都市"],
    consEn: ["Overcast and rainy winters (Nov–Mar)", "Very short winter daylight (~2 hrs sunshine/day in Dec)", "Mid-sized city"],
  },
];

const ratings = [
  { name: "Mitcham Girls", city: "Adelaide", climate: 4, culture: 4, history: 3, academic: 4 },
  { name: "Charles Campbell", city: "Adelaide", climate: 4, culture: 4, history: 2, academic: 3 },
  { name: "Mitchelton SHS", city: "Brisbane", climate: 3, culture: 4, history: 3, academic: 3 },
  { name: "Kedron SHS", city: "Brisbane", climate: 3, culture: 4, history: 3, academic: 4 },
  { name: "Auckland Girls'", city: "Auckland", climate: 4, culture: 5, history: 5, academic: 5 },
  { name: "Onehanga HS", city: "Auckland", climate: 4, culture: 4, history: 3, academic: 4 },
  { name: "Henderson HS", city: "Auckland", climate: 4, culture: 4, history: 3, academic: 3 },
  { name: "Hugh Boyd", city: "Vancouver", climate: 3, culture: 5, history: 3, academic: 4 },
  { name: "Brookswood", city: "Vancouver", climate: 3, culture: 4, history: 2, academic: 3 },
  { name: "King's Way", city: "Portland", climate: 4, culture: 4, history: 3, academic: 4 },
];

const countryFlag = { AU: "🇦🇺", NZ: "🇳🇿", CA: "🇨🇦", US: "🇺🇸" };

function RatingDots({ value, max = 5 }) {
  return (
    <span style={{ display: "inline-flex", gap: "3px" }}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: i < value ? "#A8895C" : "rgba(0,0,0,0.08)", display: "inline-block" }} />
      ))}
    </span>
  );
}

function getLocal(obj, lang, field) {
  const suffix = lang === "zh" ? "Zh" : lang === "ja" ? "Ja" : "En";
  return obj[field + suffix] || obj[field] || "";
}

export default function App() {
  const [lang, setLang] = useState("zh");
  const [activeTab, setActiveTab] = useState("city");
  const [filterCountry, setFilterCountry] = useState("ALL");
  const [selectedSchool, setSelectedSchool] = useState(null);

  const L = t[lang];
  const filtered = filterCountry === "ALL" ? schoolsData : schoolsData.filter((s) => s.country === filterCountry);
  const selected = schoolsData.find((s) => s.id === selectedSchool);

  const serifFont = lang === "ja" ? '"Noto Serif JP", serif' : lang === "zh" ? '"Noto Serif SC", serif' : '"IBM Plex Serif", serif';
  const sansFont = lang === "ja" ? '"Noto Sans JP", "IBM Plex Sans", sans-serif' : lang === "zh" ? '"Noto Sans SC", "IBM Plex Sans", sans-serif' : '"IBM Plex Sans", sans-serif';

  return (
    <div style={{ fontFamily: sansFont, backgroundColor: "#FAF8F3", color: "#2C2418", minHeight: "100vh", fontSize: 14, lineHeight: 1.75 }}>
      {/* Header */}
      <div style={{ padding: "28px 24px 18px", borderBottom: "1px solid rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 600, margin: 0, lineHeight: 1.4, fontFamily: serifFont, color: "#1F1A14" }}>{L.title}</h1>
          <p style={{ fontSize: 13, color: "#8A7A60", margin: "6px 0 0", lineHeight: 1.6 }}>{L.subtitle}</p>
        </div>
        <div style={{ display: "flex", gap: 0, border: "1px solid rgba(0,0,0,0.1)", borderRadius: 2, overflow: "hidden", flexShrink: 0, marginTop: 4 }}>
          {[["zh","中文"],["ja","日本語"],["en","EN"]].map(([l, label]) => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: "5px 12px", fontSize: 12, fontFamily: "inherit", border: "none", cursor: "pointer",
              backgroundColor: lang === l ? "#E8E0D0" : "transparent", color: lang === l ? "#1F1A14" : "#8A7A60",
              fontWeight: lang === l ? 600 : 400, transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 0, padding: "0 24px", borderBottom: "1px solid rgba(0,0,0,0.06)", backgroundColor: "#F5F1E8" }}>
        {[{ key: "city", label: L.tabCity }, { key: "school", label: L.tabSchool }, { key: "compare", label: L.tabCompare }].map((tab) => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
            padding: "12px 18px", fontSize: 13, fontFamily: "inherit",
            fontWeight: activeTab === tab.key ? 600 : 400, color: activeTab === tab.key ? "#1F1A14" : "#8A7A60",
            backgroundColor: "transparent", border: "none",
            borderBottom: activeTab === tab.key ? "2px solid #A8895C" : "2px solid transparent",
            cursor: "pointer", transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}>{tab.label}</button>
        ))}
      </div>

      <div style={{ padding: "20px 24px 40px" }}>

        {/* CITY TAB */}
        {activeTab === "city" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {citiesData.map((city) => (
              <div key={city.name} style={{ backgroundColor: "#FAF8F3", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 4, padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <span style={{ fontSize: 18, fontWeight: 600, fontFamily: serifFont }}>{city.flag} {getLocal(city, lang, "name")}</span>
                    {lang !== "en" && <span style={{ fontSize: 12, color: "#8A7A60", marginLeft: 10 }}>{city.name}</span>}
                  </div>
                  {city.livability && <span style={{ fontSize: 11, color: "#A8895C", fontWeight: 500 }}>{L.livabilityScore} {city.livability}/100</span>}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.05em", color: "#A8895C", marginBottom: 6, fontWeight: 500 }}>{L.climateLabel}</div>
                  <p style={{ fontSize: 13, color: "#4A3F32", margin: 0, lineHeight: 1.7 }}>{getLocal(city, lang, "climate")}</p>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.05em", color: "#A8895C", marginBottom: 6, fontWeight: 500 }}>{L.cultureLabel}</div>
                  <p style={{ fontSize: 13, color: "#4A3F32", margin: 0, lineHeight: 1.7 }}>{getLocal(city, lang, "culture")}</p>
                </div>
                <div style={{ display: "flex", gap: 24 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, color: "#6B8A5E", marginBottom: 4, fontWeight: 500 }}>{L.pros}</div>
                    {getLocal(city, lang, "pros").map((p, i) => <div key={i} style={{ fontSize: 12, color: "#4A3F32", lineHeight: 1.8 }}>{p}</div>)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, color: "#9B6E47", marginBottom: 4, fontWeight: 500 }}>{L.cons}</div>
                    {getLocal(city, lang, "cons").map((c, i) => <div key={i} style={{ fontSize: 12, color: "#4A3F32", lineHeight: 1.8 }}>{c}</div>)}
                  </div>
                </div>
                <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid rgba(0,0,0,0.04)", fontSize: 11, color: "#8A7A60" }}>
                  {L.candidateSchools}：{schoolsData.filter((s) => s.city === city.name).map((s) => s.name).join("、")}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SCHOOL TAB */}
        {activeTab === "school" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
              {[
                { key: "ALL", label: `${L.all} (10)` },
                { key: "AU", label: `🇦🇺 ${L.australia} (4)` },
                { key: "NZ", label: `🇳🇿 ${L.newZealand} (3)` },
                { key: "CA", label: `🇨🇦 ${L.canada} (2)` },
                { key: "US", label: `🇺🇸 ${L.usa} (1)` },
              ].map((f) => (
                <button key={f.key} onClick={() => { setFilterCountry(f.key); setSelectedSchool(null); }} style={{
                  padding: "6px 12px", fontSize: 12, fontFamily: "inherit",
                  backgroundColor: filterCountry === f.key ? "#E8E0D0" : "transparent",
                  border: `1px solid ${filterCountry === f.key ? "#A8895C" : "rgba(0,0,0,0.08)"}`,
                  borderRadius: 2, cursor: "pointer", color: filterCountry === f.key ? "#1F1A14" : "#8A7A60",
                  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}>{f.label}</button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 1.2fr" : "1fr 1fr", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {filtered.map((s) => (
                  <div key={s.id} onClick={() => setSelectedSchool(selectedSchool === s.id ? null : s.id)} style={{
                    padding: "16px 18px", backgroundColor: selectedSchool === s.id ? "#F0EBE0" : "#FAF8F3",
                    border: selectedSchool === s.id ? "1.5px solid #A8895C" : "1px solid rgba(0,0,0,0.06)",
                    borderRadius: 4, cursor: "pointer", transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6, flexWrap: "wrap", gap: 4 }}>
                      <span style={{ fontSize: 11, letterSpacing: "0.05em", color: "#8A7A60" }}>
                        {countryFlag[s.country]} {getLocal(s, lang, "city")}
                        {s.isPrivate && <span style={{ marginLeft: 6, color: "#A8895C", fontWeight: 500 }}>★ {L.privateSchool}</span>}
                      </span>
                      <span style={{ fontSize: 11, color: "#8A7A60" }}>{s.type === "girls" ? L.girls : L.coed}</span>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#2C2418", lineHeight: 1.4, marginBottom: 4 }}>{s.name}</div>
                    {lang !== "en" && <div style={{ fontSize: 12, color: "#6B5D4D" }}>{getLocal(s, lang, "name")}</div>}
                    <div style={{ marginTop: 10, display: "flex", gap: 16, fontSize: 11, color: "#8A7A60", flexWrap: "wrap" }}>
                      <span>{L.students} {s.students}</span>
                      <span>{L.intl} {s.intlStudents}</span>
                      {s.founded && <span>{L.founded} {s.founded}{L.year}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {selected && (
                <div style={{ backgroundColor: "#F5F1E8", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 4, padding: "20px", position: "sticky", top: 12, alignSelf: "start" }}>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, color: "#A8895C", letterSpacing: "0.05em" }}>
                      {countryFlag[selected.country]} {getLocal(selected, lang, "city")} · {selected.type === "girls" ? L.girls : L.coed} · {selected.grades}{L.gradeLabel}
                      {selected.isPrivate && <span style={{ marginLeft: 6 }}>· ★ {L.privateSchool}</span>}
                    </div>
                    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "6px 0 2px", fontFamily: serifFont }}>{selected.name}</h2>
                    {lang !== "en" && <div style={{ fontSize: 13, color: "#6B5D4D" }}>{getLocal(selected, lang, "name")}</div>}
                    {selected.website && (
                      <a
                        href={selected.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={L.websiteHint}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 6,
                          marginTop: 10, padding: "5px 10px",
                          fontSize: 11, letterSpacing: "0.05em",
                          color: "#A8895C", textDecoration: "none",
                          backgroundColor: "#FAF8F3",
                          border: "1px solid rgba(168, 137, 92, 0.3)",
                          borderRadius: 2,
                          transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F0EBE0"; e.currentTarget.style.borderColor = "#A8895C"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FAF8F3"; e.currentTarget.style.borderColor = "rgba(168, 137, 92, 0.3)"; }}
                      >
                        <span>{L.website}</span>
                        <span aria-hidden="true" style={{ fontSize: 10 }}>↗</span>
                      </a>
                    )}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 18 }}>
                    {[{ val: selected.students, label: L.students }, { val: selected.intlStudents, label: L.intl }, { val: selected.founded || "—", label: L.founded }].map((d, i) => (
                      <div key={i} style={{ textAlign: "center", padding: "10px 0", backgroundColor: "#FAF8F3", borderRadius: 2 }}>
                        <div style={{ fontSize: 20, fontWeight: 600, fontFamily: '"IBM Plex Sans", sans-serif', fontVariantNumeric: "tabular-nums" }}>{d.val}</div>
                        <div style={{ fontSize: 11, color: "#8A7A60" }}>{d.label}</div>
                      </div>
                    ))}
                  </div>
                  {[
                    { label: L.schoolFeatures, content: getLocal(selected, lang, "highlights").map((h, i) => (
                      <div key={i} style={{ fontSize: 13, color: "#4A3F32", lineHeight: 1.8, paddingLeft: 12, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "#A8895C" }}>·</span>{h}
                      </div>
                    )) },
                    { label: L.climate, content: (
                      <div style={{ fontSize: 12, color: "#4A3F32", lineHeight: 1.8 }}>
                        {L.climateType}：{getLocal(selected.climate, lang, "type")}　
                        {L.summer} {selected.climate.summer}　{L.winter} {selected.climate.winter}<br />
                        {L.rain}：{getLocal(selected.climate, lang, "rain")}　
                        {L.humidity}：{getLocal(selected.climate, lang, "humidity")}
                      </div>
                    ) },
                    { label: L.activities, content: <div style={{ fontSize: 13, color: "#4A3F32", lineHeight: 1.7 }}>{getLocal(selected, lang, "activities")}</div> },
                    { label: L.accommodation, content: <div style={{ fontSize: 13, color: "#4A3F32" }}>{getLocal(selected, lang, "accommodation")}</div> },
                  ].map((section, i) => (
                    <div key={i} style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 11, letterSpacing: "0.05em", color: "#A8895C", marginBottom: 6, fontWeight: 500 }}>{section.label}</div>
                      {section.content}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* COMPARE TAB */}
        {activeTab === "compare" && (
          <div>
            <h3 style={{ fontSize: 16, fontFamily: serifFont, fontWeight: 600, margin: "0 0 14px" }}>{L.fourDimensions}</h3>
            <div style={{ overflowX: "auto", marginBottom: 28 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, lineHeight: 1.6 }}>
                <thead>
                  <tr style={{ borderBottom: "1.5px solid rgba(0,0,0,0.12)" }}>
                    {[L.school, L.climateComfort, L.cultureEnv, L.schoolHistory, L.academicQuality].map((h, i) => (
                      <th key={i} style={{ textAlign: i === 0 ? "left" : "center", padding: "8px 10px", fontWeight: 500, color: "#8A7A60", fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ratings.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 10px" }}>
                        <div style={{ fontWeight: 500, color: "#2C2418" }}>{row.name}</div>
                        <div style={{ fontSize: 11, color: "#8A7A60" }}>{row.city}</div>
                      </td>
                      {[row.climate, row.culture, row.history, row.academic].map((v, j) => (
                        <td key={j} style={{ textAlign: "center", padding: "8px 6px" }}><RatingDots value={v} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: 16, fontFamily: serifFont, fontWeight: 600, margin: "0 0 14px" }}>{L.analysisTitle}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} style={{ backgroundColor: "#F5F1E8", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 4, padding: "16px 18px" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#A8895C", marginBottom: 8 }}>{L[`rec${n}Title`]}</div>
                  <p style={{ fontSize: 13, color: "#4A3F32", margin: 0, lineHeight: 1.7 }}>{L[`rec${n}Body`]}</p>
                </div>
              ))}
            </div>
            <div style={{ padding: "14px 16px", backgroundColor: "#F0EBE0", borderRadius: 4, fontSize: 12, color: "#6B5D4D", lineHeight: 1.7 }}>{L.disclaimer}</div>
          </div>
        )}
      </div>
    </div>
  );
}
