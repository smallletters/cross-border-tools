export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  url: string;
  logo?: string;
  category: string;
  tags: string[];
  price?: string;
  rating?: number;
  featured?: boolean;
}

export const categories = [
  { id: 'all', name: '全部', icon: '🔗' },
  { id: 'product-research', name: '选品工具', icon: '🔍' },
  { id: 'erp', name: 'ERP系统', icon: '📦' },
  { id: 'operations', name: '运营工具', icon: '⚙️' },
  { id: 'marketing', name: '营销广告', icon: '📢' },
  { id: 'social', name: '社媒运营', icon: '📱' },
  { id: 'website', name: '独立站', icon: '🛒' },
  { id: 'payment', name: '支付收款', icon: '💳' },
  { id: 'logistics', name: '物流', icon: '🚚' },
  { id: 'analytics', name: '数据分析', icon: '📊' },
];

export const tools: Tool[] = [
  // 选品工具
  {
    id: '1',
    name: 'Helium 10',
    slug: 'helium-10',
    description: '亚马逊选品神器，提供关键词研究、竞品分析、销售估算等全套工具。',
    url: 'https://www.helium10.com',
    category: 'product-research',
    tags: ['亚马逊', '选品', '关键词'],
    price: '$39/月起',
    rating: 4.8,
    featured: true,
  },
  {
    id: '2',
    name: 'Jungle Scout',
    slug: 'jungle-scout',
    description: '亚马逊选品和市场调研工具，数据准确度高，全球卖家首选。',
    url: 'https://www.junglescout.com',
    category: 'product-research',
    tags: ['亚马逊', '选品', '调研'],
    price: '$29/月起',
    rating: 4.7,
    featured: true,
  },
  {
    id: '3',
    name: 'Keepa',
    slug: 'keepa',
    description: '免费亚马逊历史价格追踪工具，查看商品价格走势必备。',
    url: 'https://www.keepa.com',
    category: 'product-research',
    tags: ['亚马逊', '价格追踪', '免费'],
    rating: 4.5,
  },
  {
    id: '4',
    name: '鸥鹭',
    slug: 'oaloo',
    description: '国产亚马逊选品数据工具，本土化服务好，中文界面。',
    url: 'https://www.oaloo.com',
    category: 'product-research',
    tags: ['亚马逊', '选品', '国产'],
    price: '¥99/月起',
    rating: 4.4,
  },
  // ERP系统
  {
    id: '5',
    name: '船长BI',
    slug: 'captainbi',
    description: '亚马逊运营ERP，功能覆盖刊登、客服、广告、数据分析。',
    url: 'https://www.captainbi.com',
    category: 'erp',
    tags: ['亚马逊', 'ERP', '运营'],
    price: '¥99/月起',
    rating: 4.3,
  },
  {
    id: '6',
    name: '店小秘',
    slug: 'dianxiaomi',
    description: '支持亚马逊、Shopee、Temu等多平台ERP，中小卖家首选。',
    url: 'https://www.dianxiaomi.com',
    category: 'erp',
    tags: ['ERP', '多平台', '免费'],
    price: '免费',
    rating: 4.2,
  },
  // 支付收款
  {
    id: '7',
    name: 'PingPong',
    slug: 'pingpong',
    description: '跨境支付平台，支持Amazon、Wish、Shopee等平台收款。',
    url: 'https://www.pingpongx.com',
    category: 'payment',
    tags: ['收款', '支付', '亚马逊'],
    rating: 4.6,
    featured: true,
  },
  {
    id: '8',
    name: '万里汇WorldFirst',
    slug: 'worldfirst',
    description: '蚂蚁集团旗下跨境支付品牌，提现费率低，速度快。',
    url: 'https://www.worldfirst.com.cn',
    category: 'payment',
    tags: ['收款', '支付', '蚂蚁集团'],
    rating: 4.5,
  },
  {
    id: '9',
    name: '空中云汇Airwallex',
    slug: 'airwallex',
    description: '全球支付+虚拟卡，跨境电商企业账户首选。',
    url: 'https://www.airwallex.com',
    category: 'payment',
    tags: ['收款', '虚拟卡', '企业'],
    rating: 4.4,
  },
  // 独立站
  {
    id: '10',
    name: 'Shopify',
    slug: 'shopify',
    description: '全球最流行的独立站SaaS平台，插件生态丰富。',
    url: 'https://www.shopify.com',
    category: 'website',
    tags: ['独立站', '建站', 'SaaS'],
    price: '$9/月起',
    rating: 4.7,
    featured: true,
  },
  {
    id: '11',
    name: 'WooCommerce',
    slug: 'woocommerce',
    description: 'WordPress电商插件，开源免费，灵活度高。',
    url: 'https://woocommerce.com',
    category: 'website',
    tags: ['独立站', 'WordPress', '开源'],
    price: '免费',
    rating: 4.5,
  },
  // 物流
  {
    id: '12',
    name: '4PX递四方',
    slug: '4px',
    description: '跨境物流综合服务商，覆盖全球主要电商市场。',
    url: 'https://www.4px.com',
    category: 'logistics',
    tags: ['物流', '快递', 'FBA'],
  },
  {
    id: '13',
    name: '燕文物流',
    slug: 'yanwen',
    description: '跨境电商物流服务商，专注小包直发。',
    url: 'https://www.yanwen.com',
    category: 'logistics',
    tags: ['物流', '小包'],
  },
  // 社媒运营
  {
    id: '14',
    name: 'Scheduled',
    slug: 'scheduled',
    description: '社媒内容排期工具，支持Instagram、TikTok等多平台。',
    url: 'https://www.scheduled.social',
    category: 'social',
    tags: ['社媒', '排期', '运营'],
    price: '$15/月起',
    rating: 4.2,
  },
  // 营销广告
  {
    id: '15',
    name: '广告镖师',
    slug: 'biaoshi',
    description: '亚马逊广告智能投放工具，优化ACOS提升ROI。',
    url: 'https://www.biaoshi.com',
    category: 'marketing',
    tags: ['亚马逊', '广告', '投放'],
    price: '¥199/月起',
    rating: 4.3,
  },
  {
    id: '16',
    name: 'SEMrush',
    slug: 'semrush',
    description: '全球知名SEO和营销分析工具，竞品研究神器。',
    url: 'https://www.semrush.com',
    category: 'marketing',
    tags: ['SEO', '营销', '竞品'],
    price: '$119.95/月起',
    rating: 4.6,
  },
  // 数据分析
  {
    id: '17',
    name: 'Sellstock',
    slug: 'sellstock',
    description: '亚马逊库存和销售数据分析，预测补货量。',
    url: 'https://www.sellstock.io',
    category: 'analytics',
    tags: ['亚马逊', '库存', '数据分析'],
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
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured);
}
