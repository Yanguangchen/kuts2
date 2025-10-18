/* Salon data for Kuts & Kurls. Bilingual fields are retained but use EN copies. */
export const salonData = {
  salonInfo: {
    website: "https://kutskurls.com/",
    name: "Kuts & Kurls",
    namePinyin: "Kuts & Kurls",
    unitNumber: "#01-135",
    address: "50 East Coast Rd, Roxy Sq II, Singapore 428769",
    tagline: "Hair · Nails · Beauty",
    taglineTranslation: "Haircuts, Coloring, Perms, Manicure, Pedicure",
    ambiance: "Affordable luxury for hair, nails, lashes, brows & more",
    intro: "专业美发与美甲，美睫美眉、脱毛与IPL一站式服务。",
    introEn: " Kuts & Kurls: Your premier hair and nail salon in Singapore. Expert services include haircuts, coloring, perms, manicures, pedicures, IPL and more.",
    introPoints: [
      { icon: "✂️", zh: "发型设计与染烫", en: "Cuts, color and perms" },
      { icon: "💅", zh: "美甲美足全套服务", en: "Complete mani‑pedi services" },
      { icon: "✨", zh: "睫毛眉形与护理", en: "Lashes and brows" },
      { icon: "🧴", zh: "护理与焕肤项目", en: "Treatments and care" }
    ],
  },
  contactInfo: {
    primaryContact: "Customer Service",
    phoneNumbers: ["+65-96363537"],
  },
  specializations: [
    {
      name: "Hair & Nail Services",
      nameChinese: "美发与美甲",
      description: "Cuts, coloring, perms, manicures and pedicures.",
      descriptionChinese: "剪染烫，以及手足护理。",
    },
    {
      name: "Beauty Add‑ons",
      nameChinese: "美妆加项",
      description: "Lashes, brows, waxing and IPL services.",
      descriptionChinese: "美睫、美眉、脱毛与IPL。",
    },
  ],
  services: {
    basicHairServices: {
      title: "Basic Hair Services",
      titleChinese: "基础美发服务",
      items: [
        { name: "Haircut (Men)", nameChinese: "男士剪发", price: "12.00 - 18.00" },
        { name: "Haircut (Women)", nameChinese: "女士剪发", price: "20.00 - 28.00" },
        { name: "Wash & Cut (Men)", nameChinese: "男士洗剪", price: "20.00" },
        { name: "Wash & Cut (Women)", nameChinese: "女士洗剪", price: "30.00" },
        { name: "Wash & Blow", nameChinese: "洗吹", price: "18.00" },
      ],
    },
    hairColoring: {
      title: "Hair Coloring",
      titleChinese: "染发",
      items: [
        { name: "Colour (Men)", nameChinese: "男士染发", price: "68.00 - 198.00" },
        { name: "Non-ammonia Coloring", nameChinese: "无氨染发", price: "108.00 - 198.00" },
        { name: "Highlight", nameChinese: "挑染", price: "88.00 - 168.00" },
      ],
    },
    perming: {
      title: "Perming",
      titleChinese: "烫发",
      items: [
        { name: "Soft Rebonding", nameChinese: "柔顺离子烫", price: "152.00 - 248.00" },
        { name: "Steambond", nameChinese: "蒸汽离子烫", price: "228.00 - 328.00" },
        { name: "Cool Perm", nameChinese: "冷烫", price: "118.00 - 158.00" },
        { name: "Digital Perm", nameChinese: "数码烫", price: "228.00 - 288.00" },
        { name: "Korean Namo Perm", nameChinese: "韩式纳米烫", price: "248.00 - 328.00" },
      ],
    },
    hairTreatments: {
      title: "Hair Treatments",
      titleChinese: "头发护理",
      items: [
        { name: "Migration Hair Treatment", nameChinese: "迁移修护护理", price: "68.00 - 108.00" },
        { name: "Repair Hair Treatment", nameChinese: "修复护理", price: "128.00 - 168.00" },
        { name: "Nano Hair Treatment", nameChinese: "纳米护理", price: "228.00 - 288.00" },
        { name: "Keratin Hair Treatment", nameChinese: "角蛋白护理", price: "268.00 - 358.00" },
        { name: "Scalp Treatment", nameChinese: "头皮护理", price: "98.00 - 298.00" },
      ],
    },
    eyelashEyebrowServices: {
      title: "Eyelash & Eyebrow Services",
      titleChinese: "美睫与美眉",
      items: [
        { name: "Eyelash Extension", nameChinese: "美睫嫁接", price: "48.00 - 98.00" },
        { name: "Eyebrow Tattoo", nameChinese: "纹眉", price: "228.00 - 488.00" },
        { name: "Korean Eyebrow Nano", nameChinese: "韩式纳米眉", price: "288.00 - 488.00" },
      ],
    },
    iplServices: {
      title: "IPL Services",
      titleChinese: "IPL 光子",
      items: [
        { name: "Bikini Hair Removal", nameChinese: "比基尼脱毛", price: "48.00 - 78.00" },
        { name: "Armpit Hair Removal", nameChinese: "腋下脱毛", price: "38.00 - 58.00" },
      ],
    },
    paraffinTreatments: {
      title: "Paraffin Treatments",
      titleChinese: "石蜡护理",
      items: [
        { name: "Paraffin Hand", nameChinese: "手部石蜡护理", price: "25.00" },
        { name: "Paraffin Leg", nameChinese: "腿部石蜡护理", price: "25.00" },
      ],
    },
    waxingServices: {
      title: "Waxing Services",
      titleChinese: "蜜蜡脱毛",
      items: [
        { name: "Waxing Half Hand", nameChinese: "半臂脱毛", price: "28.00" },
        { name: "Waxing Full Hand", nameChinese: "全臂脱毛", price: "50.00" },
        { name: "Waxing Half Leg", nameChinese: "半腿脱毛", price: "30.00" },
        { name: "Waxing Full Leg", nameChinese: "全腿脱毛", price: "68.00" },
      ],
    },
    manicureServices: {
      title: "Manicure Services",
      titleChinese: "手部美甲",
      items: [
        { name: "Classic Manicure", nameChinese: "经典手部护理", price: "25.00" },
        { name: "Express Manicure", nameChinese: "快捷手部护理", price: "20.00" },
        { name: "Classic Gel Polish Manicure", nameChinese: "经典凝胶手部", price: "35.00" },
        { name: "Express Gel Polish Manicure", nameChinese: "快捷凝胶手部", price: "18.00" },
        { name: "Nail Mask Manicure", nameChinese: "指膜手部护理", price: "18.00" },
        { name: "Spa Manicure", nameChinese: "SPA 手部护理", price: "48.00" },
      ],
    },
    pedicureServices: {
      title: "Pedicure Services",
      titleChinese: "足部美甲",
      items: [
        { name: "Classic Pedicure", nameChinese: "经典足部护理", price: "35.00" },
        { name: "Express Pedicure", nameChinese: "快捷足部护理", price: "20.00" },
        { name: "Classic Gel Polish Pedicure", nameChinese: "经典凝胶足部", price: "48.00" },
        { name: "Express Gel Polish Pedicure", nameChinese: "快捷凝胶足部", price: "35.00" },
        { name: "Nail Mask Pedicure", nameChinese: "足部指膜护理", price: "48.00" },
        { name: "Spa Pedicure", nameChinese: "SPA 足部护理", price: "40.00" },
      ],
    },
    comboServices: {
      title: "Combo Services",
      titleChinese: "组合服务",
      items: [
        { name: "Classic Mani Pedi", nameChinese: "经典手足护理", price: "58.00" },
        { name: "Express Gel Polish Mani/Pedi", nameChinese: "快捷凝胶手足", price: "65.00" },
      ],
    },
    soakOffServices: {
      title: "Soak Off Services",
      titleChinese: "卸甲服务",
      items: [
        { name: "Soak Off Acrylic", nameChinese: "卸丙烯甲", price: "48.00" },
        { name: "Soak Off Hard Gel", nameChinese: "卸硬胶", price: "48.00" },
        { name: "Soak Off Gel Polish", nameChinese: "卸凝胶指甲油", price: "10.00" },
      ],
    },
    otherServices: {
      title: "Other Services",
      titleChinese: "其他服务",
      items: [
        { name: "French Gel Polish", nameChinese: "法式凝胶", price: "7.00 - 20.00" },
        { name: "Gel Change Colour", nameChinese: "凝胶换色", price: "25.00" },
        { name: "Acrylic Extension", nameChinese: "丙烯延长", price: "95.00" },
        { name: "Acrylic Fill", nameChinese: "丙烯补甲", price: "50.00" },
        { name: "Callus Treatment", nameChinese: "老茧护理", price: "50.00" },
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
    { type: "image", src: "assets/1.jpg", alt: "store front" },
    { type: "image", src: "assets/2.jpg", alt: "store interior" },
    { type: "image", src: "assets/3.jpg", alt: "products" },
    { type: "image", src: "assets/4.jpg", alt: "products" },
  ],
};


