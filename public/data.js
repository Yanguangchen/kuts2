/* Salon data for Kuts & Kurls. Bilingual fields are retained but use EN copies. */
export const salonData = {
  salonInfo: {
    website: "https://kutskurls.com/",
    name: "Kuts & Kurls",
    namePinyin: "Kuts & Kurls",
    unitNumber: "#02-21",
    address: "50 East Coast Rd, Roxy Sq II, Singapore 428769",
    tagline: "Hair · Nails · Beauty",
    taglineTranslation: "Haircuts, Coloring, Perms, Manicure, Pedicure",
    ambiance: "Affordable luxury for hair, nails, lashes, brows & more",
    intro: "坐落于 Roxy Square II 的社区沙龙。资深发型师与美甲师，价格透明公道。从精剪、染发、烫发、角蛋白与头皮护理，到经典/凝胶美甲美足、睫毛眉形、蜜蜡脱毛与 IPL，一站式为您打造日常的精致与自信。",
    introEn: "We’re your friendly neighbourhood salon at Roxy Square II. Our experienced stylists and nail artists deliver beautiful results with fair, transparent pricing. From precision haircuts, colour and perms to keratin and scalp care — plus classic and gel manicures, pedicures, lashes, brows, waxing and IPL — we make it easy to look and feel your best every day.",
    introPoints: [
      { icon: "✂️", zh: "发型设计与染烫", en: "Cuts, color and perms" },
      { icon: "💅", zh: "美甲美足全套服务", en: "Complete mani‑pedi services" },
      { icon: "✨", zh: "睫毛眉形与护理", en: "Lashes and brows" },
      { icon: "🧴", zh: "护理与焕肤项目", en: "Treatments and care" }
    ],
    openingHours: "9:30am – 8:30pm",
  },
  contactInfo: {
    primaryContact: "Customer Service",
    phoneNumbers: ["69097503"],
    whatsapp: "9636 3537",
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
        { name: "Hair Colour", nameChinese: "染发", price: "$68 - 198" },
        { name: "Non-ammonia Coloring", nameChinese: "无氨染发", price: "108.00 - 198.00" },
        { name: "Hair Highlight", nameChinese: "挑染", price: "$68 - 168" },
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
        { name: "Scalp Treatment", nameChinese: "头皮护理", price: "$98 - 198" },
      ],
    },
    eyelashEyebrowServices: {
      title: "Eyelash & Eyebrow Services",
      titleChinese: "美睫与美眉",
      items: [
        { name: "Eyelash Extension", nameChinese: "美睫嫁接", price: "$98 - $128" },
        { name: "Eyelash Extension (Bottom list)", nameChinese: "美睫嫁接（底部）", price: "$48 - 98" },
        { name: "Eyebrow Tattoo", nameChinese: "纹眉", price: "$228 - 488" },
        { name: "Lips Nano Tattoo", nameChinese: "纳米唇", price: "$388 - 588" },
        { name: "Korean Eyebrow Nano", nameChinese: "韩式纳米眉", price: "$288 - 488" },
      ],
    },
    iplServices: {
      title: "IPL Services",
      titleChinese: "IPL 光子",
      items: [
        { name: "IPL Bikini Hair Remover", nameChinese: "比基尼脱毛", price: "$48 - 78" },
        { name: "IPL Armpit Hair Remover", nameChinese: "腋下脱毛", price: "$38 - 58" },
      ],
    },
    paraffinTreatments: {
      title: "Paraffin Treatments",
      titleChinese: "石蜡护理",
      items: [
        { name: "Parrafin Hand", nameChinese: "手部石蜡护理", price: "$48 - $68" },
        { name: "Parrafin Leg", nameChinese: "腿部石蜡护理", price: "$48 - $68" },
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
        { name: "Express Gel Polish Mani", nameChinese: "快捷凝胶手部", price: "$35" },
        { name: "Nail Mask Mani", nameChinese: "指膜手部护理", price: "$20 - $28" },
        { name: "Spa Mani", nameChinese: "SPA 手部护理", price: "$48 - $68" },
      ],
    },
    pedicureServices: {
      title: "Pedicure Services",
      titleChinese: "足部美甲",
      items: [
        { name: "Classic Pedicure", nameChinese: "经典足部护理", price: "$35" },
        { name: "Express Pedicure", nameChinese: "快捷足部护理", price: "$20" },
        { name: "Full Classic Pedicure Gel Polish", nameChinese: "全套经典凝胶足部", price: "$55" },
        { name: "Express Gel Polish Pedi", nameChinese: "快捷凝胶足部", price: "$38" },
        { name: "Nail Mask Pedi", nameChinese: "足部指膜护理", price: "$20 - $28" },
        { name: "Spa Pedi", nameChinese: "SPA 足部护理", price: "$48 / $68" },
        { name: "Pedicure for Man", nameChinese: "男士足部护理", price: "$40" },
      ],
    },
    comboServices: {
      title: "Combo Services",
      titleChinese: "组合服务",
      items: [
        { name: "Classic Pedi/Mani", nameChinese: "经典手足护理", price: "$60" },
        { name: "Express Gel Polish Mani & Pedi", nameChinese: "快捷凝胶手足", price: "$73" },
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
        { name: "Acrylic Fin-fill", nameChinese: "丙烯补甲", price: "$50" },
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


