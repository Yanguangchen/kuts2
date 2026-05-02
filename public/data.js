/* Salon data for Kuts & Kurls. Bilingual fields are retained but use EN copies. */
export const salonData = {
  salonInfo: {
    website: "https://kutskurls.com/",
    name: "Kuts & Kurls",
    namePinyin: "Kuts & Kurls",
    unitNumber: "#01-135",
    address: "50 East Coast Rd, #01-135, Roxy Square II, Singapore 428769",
    tagline: "Hair · Nails · Beauty — clear pricing, careful consultations",
    taglineTranslation: "Haircuts, colour, perms, manicures, pedicures, lashes, brows, waxing and IPL",
    ambiance: "Practical beauty services for everyday life — no salon pressure",
    intro: "位于 Roxy Square II 的 Kuts & Kurls，根据您的发质、生活习惯与预算给出诚实建议，价目透明公开，绝不强推。",
    introEn: "At Kuts & Kurls in Roxy Square II, we help you choose styles and treatments that suit your hair condition, lifestyle and budget — with honest recommendations and transparent menu pricing, not salon pressure.",
    introPoints: [
      { icon: "✂️", zh: "发型设计与染烫", en: "Cuts, colour and perms" },
      { icon: "💅", zh: "美甲美足全套服务", en: "Complete manicure & pedicure services" },
      { icon: "✨", zh: "睫毛眉形与护理", en: "Lashes and brows" },
      { icon: "🧴", zh: "护理与焕肤项目", en: "Treatments and care" }
    ],
    openingHours: "9:30am – 8:30pm",
  },
  contactInfo: {
    primaryContact: "Customer Service",
    phoneNumbers: ["6909 7503"],
    whatsapp: "9636 3537",
  },
  specializations: [
    {
      name: "Haircuts",
      nameChinese: "剪发",
      description: "For men, women and children. Practical styles you can manage at home.",
      descriptionChinese: "男士、女士与儿童剪发，日常在家也容易打理。",
    },
    {
      name: "Colour & highlights",
      nameChinese: "染发与挑染",
      description: "Fresh looks chosen for your hair condition and maintenance routine.",
      descriptionChinese: "根据发质与日常打理频率推荐方案。",
    },
    {
      name: "Perming & rebonding",
      nameChinese: "烫发与离子烫",
      description: "Hair condition checked first; method matched to your desired finish.",
      descriptionChinese: "先做发质评估，再推荐合适的方案。",
    },
    {
      name: "Hair treatments",
      nameChinese: "头发护理",
      description: "For dryness, damage, frizz, scalp concerns or post-colour care.",
      descriptionChinese: "针对干燥、受损、毛躁、头皮问题或染后修护。",
    },
    {
      name: "Manicure & pedicure",
      nameChinese: "手部与足部美甲",
      description: "Classic, express, gel polish, spa, extensions, soak-off and nail art.",
      descriptionChinese: "经典、快捷、凝胶、SPA、延长、卸甲与甲艺。",
    },
    {
      name: "Lashes, brows, waxing & IPL",
      nameChinese: "美睫、美眉、蜜蜡与 IPL",
      description: "Eyelash extensions, brow shaping, waxing and IPL hair removal.",
      descriptionChinese: "美睫嫁接、眉形、蜜蜡脱毛与 IPL。",
    },
  ],
  services: {
    basicHairServices: {
      title: "Basic Hair Services",
      titleChinese: "基础美发服务",
      items: [
        { name: "Haircut (Men)", nameChinese: "男士剪发", price: "$20 - $25", note: "Kids and adults" },
        { name: "Haircut (Women)", nameChinese: "女士剪发", price: "$20 - $30" },
        { name: "Wash & Cut (Men)", nameChinese: "男士洗剪", price: "$35", note: "Includes cut, wash and styling." },
        { name: "Wash & Cut (Women)", nameChinese: "女士洗剪", price: "$40 - $48", note: "Includes cut, wash and styling." },
        { name: "Wash & Blow & Style", nameChinese: "洗吹造型", price: "$28 - $48" },
      ],
    },
    hairColoring: {
      title: "Hair Coloring",
      titleChinese: "染发",
      items: [
        { name: "Hair Colour", nameChinese: "染发", price: "$68 - $198" },
        { name: "Non-ammonia Hair Colour", nameChinese: "无氨染发", price: "$108 - $198" },
        { name: "Hair Highlights", nameChinese: "挑染", price: "$68 - $168" },
      ],
    },
    perming: {
      title: "Perming",
      titleChinese: "烫发",
      items: [
        { name: "Soft Rebonding", nameChinese: "柔顺离子烫", price: "$152 - $248" },
        { name: "Steambond", nameChinese: "蒸汽离子烫", price: "$228 - $328" },
        { name: "Cool Perm", nameChinese: "冷烫", price: "$118 - $158" },
        { name: "Digital Perm", nameChinese: "数码烫", price: "$228 - $288" },
        { name: "Korean Nano Perm", nameChinese: "韩式纳米烫", price: "$248 - $328" },
      ],
    },
    hairTreatments: {
      title: "Hair Treatments",
      titleChinese: "头发护理",
      items: [
        { name: "Migration Hair Treatment", nameChinese: "迁移修护护理", price: "$68 - $108" },
        { name: "Repair Hair Treatment", nameChinese: "修复护理", price: "$128 - $168" },
        { name: "Nano Hair Treatment", nameChinese: "纳米护理", price: "$228 - $288" },
        { name: "Keratin Hair Treatment", nameChinese: "角蛋白护理", price: "$268 - $358" },
        { name: "Scalp Treatment", nameChinese: "头皮护理", price: "$98 - $198" },
      ],
    },
    eyelashEyebrowServices: {
      title: "Eyelash & Eyebrow Services",
      titleChinese: "美睫与美眉",
      items: [
        { name: "Eyelash Extension", nameChinese: "美睫嫁接", price: "$98 - $128" },
        { name: "Bottom Lash Extension", nameChinese: "下睫毛嫁接", price: "$48 - $98" },
        { name: "Eyebrow Tattoo", nameChinese: "纹眉", price: "$228 - $488" },
        { name: "Lips Nano Tattoo", nameChinese: "纳米唇", price: "$388 - $588" },
        { name: "Korean Nano Eyebrow", nameChinese: "韩式纳米眉", price: "$288 - $488" },
      ],
    },
    iplServices: {
      title: "IPL Services",
      titleChinese: "IPL 光子",
      items: [
        { name: "IPL Bikini Hair Removal", nameChinese: "比基尼脱毛", price: "$48 - $78" },
        { name: "IPL Armpit Hair Removal", nameChinese: "腋下脱毛", price: "$38 - $58" },
      ],
    },
    paraffinTreatments: {
      title: "Paraffin Treatments",
      titleChinese: "石蜡护理",
      items: [
        { name: "Paraffin Hand Treatment", nameChinese: "手部石蜡护理", price: "$48 - $68" },
        { name: "Paraffin Leg Treatment", nameChinese: "腿部石蜡护理", price: "$48 - $68" },
      ],
    },
    waxingServices: {
      title: "Waxing Services",
      titleChinese: "蜜蜡脱毛",
      items: [
        { name: "Waxing Half Hand", nameChinese: "半臂脱毛", price: "$38" },
        { name: "Waxing Full Hand", nameChinese: "全臂脱毛", price: "$78" },
        { name: "Waxing Half Leg", nameChinese: "半腿脱毛", price: "$48" },
        { name: "Waxing Full Leg", nameChinese: "全腿脱毛", price: "$98" },
      ],
    },
    manicureServices: {
      title: "Manicure Services",
      titleChinese: "手部美甲",
      items: [
        { name: "Classic Manicure", nameChinese: "经典手部护理", price: "$25" },
        { name: "Express Manicure", nameChinese: "快捷手部护理", price: "$20" },
        { name: "Full Classic Manicure Gel Polish", nameChinese: "全套经典凝胶手部", price: "$45" },
        { name: "Express Gel Polish Manicure", nameChinese: "快捷凝胶手部", price: "$35" },
        { name: "Nail Mask Manicure", nameChinese: "指膜手部护理", price: "$20 - $28" },
        { name: "Spa Manicure", nameChinese: "SPA 手部护理", price: "$48 - $68" },
      ],
    },
    pedicureServices: {
      title: "Pedicure Services",
      titleChinese: "足部美甲",
      items: [
        { name: "Classic Pedicure", nameChinese: "经典足部护理", price: "$35" },
        { name: "Express Pedicure", nameChinese: "快捷足部护理", price: "$20" },
        { name: "Full Classic Pedicure Gel Polish", nameChinese: "全套经典凝胶足部", price: "$55" },
        { name: "Express Gel Polish Pedicure", nameChinese: "快捷凝胶足部", price: "$38" },
        { name: "Nail Mask Pedicure", nameChinese: "足部指膜护理", price: "$20 - $28" },
        { name: "Spa Pedicure", nameChinese: "SPA 足部护理", price: "$48 - $68" },
        { name: "Men's Pedicure", nameChinese: "男士足部护理", price: "$40" },
      ],
    },
    comboServices: {
      title: "Combo Services",
      titleChinese: "组合服务",
      items: [
        { name: "Classic Manicure & Pedicure", nameChinese: "经典手足护理", price: "$60" },
        { name: "Express Gel Polish Manicure & Pedicure", nameChinese: "快捷凝胶手足", price: "$73" },
      ],
    },
    soakOffServices: {
      title: "Soak Off Services",
      titleChinese: "卸甲服务",
      items: [
        { name: "Soak Off Acrylic", nameChinese: "卸丙烯甲", price: "$48" },
        { name: "Soak Off Hard Gel", nameChinese: "卸硬胶", price: "$48" },
        { name: "Soak Off Gel Polish", nameChinese: "卸凝胶指甲油", price: "$15" },
      ],
    },
    otherServices: {
      title: "Other Services",
      titleChinese: "其他服务",
      items: [
        { name: "French", nameChinese: "法式", price: "$20 - $28" },
        { name: "French Gel Polish", nameChinese: "法式凝胶", price: "$20 - $28" },
        { name: "Gel Change Colour", nameChinese: "凝胶换色", price: "$25" },
        { name: "Gel Extension", nameChinese: "凝胶延长", price: "$80 - $100" },
        { name: "Acrylic Infill", nameChinese: "丙烯补甲", price: "$50" },
        { name: "Callus Treatment", nameChinese: "老茧护理", price: "$38 - $68" },
        { name: "Nail Art", nameChinese: "美甲图案", price: "$3+" },
      ],
    },
  },
  membershipProgram: {
    title: "Membership Card",
    titleChinese: "会员卡",
    description: "Membership with top-up bonuses, no annual fee.",
    tiers: [
      { topUp: 500, bonus: 80 },
      { topUp: 1000, bonus: 200 },
      { topUp: 2000, bonus: 500 },
    ],
  },
  media: [
    { type: "image", src: "/public/storepictures/1.jpeg", alt: "store front" },
    { type: "image", src: "/public/storepictures/2.webp", alt: "store interior" },
    { type: "image", src: "/public/storepictures/3.webp", alt: "products" },
  ],
};


