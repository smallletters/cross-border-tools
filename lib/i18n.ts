// 多语言配置
export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// 通用翻译
const translations = {
  home: { en: 'Home', zh: '首页' },
  categories: { en: 'Categories', zh: '分类' },
  featured: { en: 'Featured', zh: '推荐' },
  submit: { en: 'Submit Tool', zh: '提交工具' },
  heroTitle: { 
    en: 'Cross-Border E-commerce Tools Directory', 
    zh: '跨境电商工具导航' 
  },
  heroSubtitle: { 
    en: 'Hand-picked tools for cross-border sellers.', 
    zh: '为跨境卖家精选最好用的工具。' 
  },
  searchPlaceholder: { 
    en: 'Search tools by name...', 
    zh: '搜索工具名称...' 
  },
  toolsCount: { en: 'Tools', zh: '精选工具' },
  categoriesCount: { en: 'Categories', zh: '热门分类' },
  usersCount: { en: 'Monthly Users', zh: '月活用户' },
  hotTools: { en: 'Hot Tools', zh: '热门推荐' },
  allTools: { en: 'All Tools', zh: '全部工具' },
  searchResults: { en: 'Search results for', zh: '搜索结果' },
  noResults: { en: 'No tools found', zh: '未找到相关工具' },
  tryOther: { en: 'Try other keywords', zh: '试试其他关键词' },
  relatedTools: { en: 'Related Tools', zh: '同类工具推荐' },
  foundTool: { en: 'Found a great tool?', zh: '发现好工具？' },
  ctaText: { en: 'Submit and share!', zh: '欢迎提交给我们' },
  footerDesc: { 
    en: 'Hand-picked tools for cross-border sellers.', 
    zh: '为跨境卖家精选最好用的工具。' 
  },
  quickLinks: { en: 'Quick Links', zh: '快速链接' },
  browseCategories: { en: 'Browse Categories', zh: '分类浏览' },
  submitTool: { en: 'Submit Tool', zh: '提交工具' },
  hotCategories: { en: 'Hot Categories', zh: '热门分类' },
  productResearch: { en: 'Product Research', zh: '选品工具' },
  erp: { en: 'ERP System', zh: 'ERP系统' },
  payment: { en: 'Payment', zh: '支付收款' },
  logistics: { en: 'Logistics', zh: '物流' },
  copyright: { en: 'All rights reserved.', zh: '版权所有.' },
  visitWebsite: { en: 'Visit Website', zh: '访问官网' },
  viewDetails: { en: 'View Details', zh: '查看详情' },
  free: { en: 'Free', zh: '免费' },
  recommended: { en: 'Recommended', zh: '推荐' },
  breadcrumbsHome: { en: 'Home', zh: '首页' },
  about: { en: 'About', zh: '关于' },
  quickInfo: { en: 'Quick Info', zh: '快速信息' },
  officialWebsite: { en: 'Official Website', zh: '官方网址' },
  category: { en: 'Category', zh: '所属分类' },
  priceRange: { en: 'Price Range', zh: '价格范围' },
  rating: { en: 'Rating', zh: '用户评分' },
  relatedTags: { en: 'Related Tags', zh: '相关标签' },
  shareTool: { en: 'Share Tool', zh: '分享工具' },
  copyLink: { en: 'Copy Link', zh: '复制链接' },
  share: { en: 'Share', zh: '分享' },
  submitTitle: { en: 'Submit Tool', zh: '提交工具' },
  submitSubtitle: { en: 'Share a great tool!', zh: '分享好用的工具！' },
  submitNotice: { en: 'Guidelines', zh: '提交须知' },
  notice1: { en: 'Must be related to cross-border e-commerce', zh: '必须与跨境电商相关' },
  notice2: { en: 'Provide accurate website link', zh: '提供准确的官网链接' },
  notice3: { en: 'Review takes 3-5 days', zh: '审核周期3-5天' },
  notice4: { en: 'Priority review available', zh: '可选择付费加速' },
  toolName: { en: 'Tool Name', zh: '工具名称' },
  toolUrl: { en: 'Official URL', zh: '官网链接' },
  description: { en: 'Description', zh: '工具描述' },
  categoryLabel: { en: 'Category', zh: '所属分类' },
  tags: { en: 'Tags', zh: '标签' },
  tagsHint: { en: 'Separate with commas', zh: '用逗号分隔' },
  price: { en: 'Price', zh: '价格' },
  priceHint: { en: 'e.g. Free, $29/month', zh: '例如：免费、$29/月' },
  email: { en: 'Contact Email', zh: '联系邮箱' },
  emailHint: { en: 'For review notification only', zh: '仅用于审核通知' },
  notes: { en: 'Notes', zh: '补充说明' },
  agreeTerms: { en: 'I agree to the terms.', zh: '我同意服务条款' },
  submitting: { en: 'Submitting...', zh: '提交中...' },
  submitSuccess: { en: 'Success!', zh: '提交成功！' },
  successDesc: { en: 'We will review soon.', zh: '我们会尽快审核' },
  submitFailed: { en: 'Failed', zh: '提交失败' },
  failedDesc: { en: 'Please try again.', zh: '请重试' },
  priorityReview: { en: 'Priority Review', zh: '付费加速收录' },
  priorityDesc: { en: '24hr approval.', zh: '24小时审核' },
  basicListing: { en: 'Basic', zh: '基础收录' },
  featuredSpot: { en: 'Featured', zh: '推荐位' },
  annualMember: { en: 'Annual', zh: '年度会员' },
  // Category names
  catAll: { en: 'All', zh: '全部' },
  catProductResearch: { en: 'Product Research', zh: '选品工具' },
  catErp: { en: 'ERP System', zh: 'ERP系统' },
  catOperations: { en: 'Operations', zh: '运营工具' },
  catMarketing: { en: 'Marketing & Ads', zh: '营销广告' },
  catSocial: { en: 'Social Media', zh: '社媒运营' },
  catWebsite: { en: 'E-commerce Site', zh: '独立站' },
  catPayment: { en: 'Payment', zh: '支付收款' },
  catLogistics: { en: 'Logistics', zh: '物流' },
  catAnalytics: { en: 'Analytics', zh: '数据分析' },
  catIpTrademark: { en: 'IP & Trademark', zh: '知识产权' },
  catTranslation: { en: 'Translation', zh: '翻译工具' },
  aboutToolDesc: { en: 'is a widely-used tool.', zh: '是跨境电商领域广泛使用的工具。' },
  recommendDesc: { en: 'Visit official website for more.', zh: '建议访问官网了解更多。' },
  toolNotFound: { en: 'Tool Not Found', zh: '工具未找到' },
  notFoundDesc: { en: 'Page not found.', zh: '页面不存在' },
  backHome: { en: 'Back to Home', zh: '返回首页' },
};

// 获取翻译
export function t(key: keyof typeof translations, locale: Locale = defaultLocale): string {
  const dict = translations[key];
  if (dict && typeof dict === 'object') {
    return dict[locale] || dict.en || key;
  }
  return key;
}

// 获取分类名称
export function getCategoryName(id: string, locale: Locale): string {
  const categoryMap: Record<string, keyof typeof translations> = {
    'all': 'catAll',
    'product-research': 'catProductResearch',
    'erp': 'catErp',
    'operations': 'catOperations',
    'marketing': 'catMarketing',
    'social': 'catSocial',
    'website': 'catWebsite',
    'payment': 'catPayment',
    'logistics': 'catLogistics',
    'analytics': 'catAnalytics',
    'ip-trademark': 'catIpTrademark',
    'translation': 'catTranslation',
  };
  const key = categoryMap[id];
  if (key) return t(key, locale);
  return id;
}

// 根据 IP 判断语言
export function detectLanguage(country?: string): Locale {
  if (country === 'CN' || country === 'CHINA') {
    return 'zh';
  }
  return 'en';
}
