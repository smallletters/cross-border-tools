export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  descriptionEn?: string;
  url: string;
  logo?: string;
  category: string;
  tags: string[];
  tagsEn?: string[];
  price?: string;
  rating?: number;
  featured?: boolean;
}

export const categories = [
  { id: 'all', name: '全部', nameEn: 'All', icon: '🔗' },
  { id: 'product-research', name: '选品工具', nameEn: 'Product Research', icon: '🔍' },
  { id: 'erp', name: 'ERP系统', nameEn: 'ERP System', icon: '📦' },
  { id: 'operations', name: '运营工具', nameEn: 'Operations', icon: '⚙️' },
  { id: 'marketing', name: '营销广告', nameEn: 'Marketing & Ads', icon: '📢' },
  { id: 'social', name: '社媒运营', nameEn: 'Social Media', icon: '📱' },
  { id: 'website', name: '独立站', nameEn: 'E-commerce Site', icon: '🛒' },
  { id: 'payment', name: '支付收款', nameEn: 'Payment', icon: '💳' },
  { id: 'logistics', name: '物流', nameEn: 'Logistics', icon: '🚚' },
  { id: 'analytics', name: '数据分析', nameEn: 'Analytics', icon: '📊' },
];

export const tools: Tool[] = [
  // Product Research
  {
    id: '1',
    name: 'Helium 10',
    slug: 'helium-10',
    description: '亚马逊选品神器，提供关键词研究、竞品分析、销售估算等全套工具。',
    descriptionEn: 'All-in-one Amazon product research tool with keyword research, competitor analysis, and sales estimation.',
    url: 'https://www.helium10.com',
    category: 'product-research',
    tags: ['亚马逊', '选品', '关键词'],
    tagsEn: ['Amazon', 'Product Research', 'Keywords'],
    price: '$39/月起',
    rating: 4.8,
    featured: true,
  },
  {
    id: '2',
    name: 'Jungle Scout',
    slug: 'jungle-scout',
    description: '亚马逊选品和市场调研工具，数据准确度高，全球卖家首选。',
    descriptionEn: 'Amazon product research and market research tool with high data accuracy. Trusted by sellers worldwide.',
    url: 'https://www.junglescout.com',
    category: 'product-research',
    tags: ['亚马逊', '选品', '调研'],
    tagsEn: ['Amazon', 'Product Research', 'Market Research'],
    price: '$29/月起',
    rating: 4.7,
    featured: true,
  },
  {
    id: '3',
    name: 'Keepa',
    slug: 'keepa',
    description: '免费亚马逊历史价格追踪工具，查看商品价格走势必备。',
    descriptionEn: 'Free Amazon price history tracker. Essential for viewing product price trends.',
    url: 'https://www.keepa.com',
    category: 'product-research',
    tags: ['亚马逊', '价格追踪', '免费'],
    tagsEn: ['Amazon', 'Price Tracker', 'Free'],
    rating: 4.5,
  },
  {
    id: '4',
    name: '鸥鹭',
    slug: 'oaloo',
    description: '国产亚马逊选品数据工具，本土化服务好，中文界面。',
    descriptionEn: 'China-made Amazon product research tool with excellent local service and Chinese interface.',
    url: 'https://www.oaloo.com',
    category: 'product-research',
    tags: ['亚马逊', '选品', '国产'],
    tagsEn: ['Amazon', 'Product Research', 'Chinese'],
    price: '¥99/月起',
    rating: 4.4,
  },
  // ERP System
  {
    id: '5',
    name: '船长BI',
    slug: 'captainbi',
    description: '亚马逊运营ERP，功能覆盖刊登、客服、广告、数据分析。',
    descriptionEn: 'Amazon operations ERP covering listing, customer service, ads, and analytics.',
    url: 'https://www.captainbi.com',
    category: 'erp',
    tags: ['亚马逊', 'ERP', '运营'],
    tagsEn: ['Amazon', 'ERP', 'Operations'],
    price: '¥99/月起',
    rating: 4.3,
  },
  {
    id: '6',
    name: '店小秘',
    slug: 'dianxiaomi',
    description: '支持亚马逊、Shopee、Temu等多平台ERP，中小卖家首选。',
    descriptionEn: 'Multi-platform ERP supporting Amazon, Shopee, Temu. Top choice for small sellers.',
    url: 'https://www.dianxiaomi.com',
    category: 'erp',
    tags: ['ERP', '多平台', '免费'],
    tagsEn: ['ERP', 'Multi-platform', 'Free'],
    price: '免费',
    rating: 4.2,
  },
  // Payment
  {
    id: '7',
    name: 'PingPong',
    slug: 'pingpong',
    description: '跨境支付平台，支持Amazon、Wish、Shopee等平台收款。',
    descriptionEn: 'Cross-border payment platform supporting Amazon, Wish, Shopee and more.',
    url: 'https://www.pingpongx.com',
    category: 'payment',
    tags: ['收款', '支付', '亚马逊'],
    tagsEn: ['Payment', 'Payout', 'Amazon'],
    rating: 4.6,
    featured: true,
  },
  {
    id: '8',
    name: '万里汇WorldFirst',
    slug: 'worldfirst',
    description: '蚂蚁集团旗下跨境支付品牌，提现费率低，速度快。',
    descriptionEn: 'Ant Group cross-border payment brand with low fees and fast transfers.',
    url: 'https://www.worldfirst.com.cn',
    category: 'payment',
    tags: ['收款', '支付', '蚂蚁集团'],
    tagsEn: ['Payment', 'Payout', 'Ant Group'],
    rating: 4.5,
  },
  {
    id: '9',
    name: '空中云汇Airwallex',
    slug: 'airwallex',
    description: '全球支付+虚拟卡，跨境电商企业账户首选。',
    descriptionEn: 'Global payments + virtual cards. Top choice for cross-border e-commerce businesses.',
    url: 'https://www.airwallex.com',
    category: 'payment',
    tags: ['收款', '虚拟卡', '企业'],
    tagsEn: ['Payment', 'Virtual Card', 'Business'],
    rating: 4.4,
  },
  // E-commerce Site
  {
    id: '10',
    name: 'Shopify',
    slug: 'shopify',
    description: '全球最流行的独立站SaaS平台，插件生态丰富。',
    descriptionEn: 'Most popular e-commerce SaaS platform globally with rich plugin ecosystem.',
    url: 'https://www.shopify.com',
    category: 'website',
    tags: ['独立站', '建站', 'SaaS'],
    tagsEn: ['E-commerce', 'Website Builder', 'SaaS'],
    price: '$9/月起',
    rating: 4.7,
    featured: true,
  },
  {
    id: '11',
    name: 'WooCommerce',
    slug: 'woocommerce',
    description: 'WordPress电商插件，开源免费，灵活度高。',
    descriptionEn: 'WordPress e-commerce plugin. Open source, free, and highly flexible.',
    url: 'https://woocommerce.com',
    category: 'website',
    tags: ['独立站', 'WordPress', '开源'],
    tagsEn: ['E-commerce', 'WordPress', 'Open Source'],
    price: '免费',
    rating: 4.5,
  },
  // Logistics
  {
    id: '12',
    name: '4PX递四方',
    slug: '4px',
    description: '跨境物流综合服务商，覆盖全球主要电商市场。',
    descriptionEn: 'Cross-border logistics provider covering major global e-commerce markets.',
    url: 'https://www.4px.com',
    category: 'logistics',
    tags: ['物流', '快递', 'FBA'],
    tagsEn: ['Logistics', 'Express', 'FBA'],
  },
  {
    id: '13',
    name: '燕文物流',
    slug: 'yanwen',
    description: '跨境电商物流服务商，专注小包直发。',
    descriptionEn: 'Cross-border e-commerce logistics service focusing on small parcel delivery.',
    url: 'https://www.yanwen.com',
    category: 'logistics',
    tags: ['物流', '小包'],
    tagsEn: ['Logistics', 'Small Parcel'],
  },
  // Social Media
  {
    id: '14',
    name: 'Scheduled',
    slug: 'scheduled',
    description: '社媒内容排期工具，支持Instagram、TikTok等多平台。',
    descriptionEn: 'Social media scheduling tool supporting Instagram, TikTok and more platforms.',
    url: 'https://www.scheduled.social',
    category: 'social',
    tags: ['社媒', '排期', '运营'],
    tagsEn: ['Social Media', 'Scheduling', 'Operations'],
    price: '$15/月起',
    rating: 4.2,
  },
  // Marketing
  {
    id: '15',
    name: '广告镖师',
    slug: 'biaoshi',
    description: '亚马逊广告智能投放工具，优化ACOS提升ROI。',
    descriptionEn: 'Amazon ad intelligent bidding tool to optimize ACOS and improve ROI.',
    url: 'https://www.biaoshi.com',
    category: 'marketing',
    tags: ['亚马逊', '广告', '投放'],
    tagsEn: ['Amazon', 'Ads', 'PPC'],
    price: '¥199/月起',
    rating: 4.3,
  },
  {
    id: '16',
    name: 'SEMrush',
    slug: 'semrush',
    description: '全球知名SEO和营销分析工具，竞品研究神器。',
    descriptionEn: 'World-famous SEO and marketing analytics tool. Essential for competitor research.',
    url: 'https://www.semrush.com',
    category: 'marketing',
    tags: ['SEO', '营销', '竞品'],
    tagsEn: ['SEO', 'Marketing', 'Competitor'],
    price: '$119.95/月起',
    rating: 4.6,
  },
  // Analytics
  {
    id: '17',
    name: 'Sellstock',
    slug: 'sellstock',
    description: '亚马逊库存和销售数据分析，预测补货量。',
    descriptionEn: 'Amazon inventory and sales analytics to predict restocking needs.',
    url: 'https://www.sellstock.io',
    category: 'analytics',
    tags: ['亚马逊', '库存', '数据分析'],
    tagsEn: ['Amazon', 'Inventory', 'Analytics'],
    price: '$49/月起',
    rating: 4.1,
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  if (category === 'all') return tools;
  return tools.filter((tool) => tool.category === category);
}

export function searchTools(query: string): Tool[] {
  const lowerQuery = query.toLowerCase();
  return tools.filter(function(tool) {
    if (tool.name.toLowerCase().indexOf(lowerQuery) >= 0) return true;
    if (tool.description.toLowerCase().indexOf(lowerQuery) >= 0) return true;
    for (var i = 0; i < tool.tags.length; i++) {
      if (tool.tags[i].toLowerCase().indexOf(lowerQuery) >= 0) return true;
    }
    return false;
  });
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured);
}
