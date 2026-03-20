// 多语言配置
export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// 语言对应的显示名称
export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
};

// 翻译内容
const translations = {
  en: {
    // Header
    home: 'Home',
    categories: 'Categories',
    featured: 'Featured',
    submit: 'Submit Tool',
    // Hero
    heroTitle: 'Cross-Border E-commerce Tools Directory',
    heroSubtitle: 'Hand-picked tools for cross-border sellers. From product research to logistics, from operations to marketing.',
    searchPlaceholder: 'Search tools by name, feature or platform...',
    toolsCount: 'Tools',
    categoriesCount: 'Categories',
    usersCount: 'Monthly Users',
    // Sections
    hotTools: 'Hot Tools',
    allTools: 'All Tools',
    searchResults: 'Search results for',
    noResults: 'No tools found',
    tryOther: 'Try other keywords or categories',
    relatedTools: 'Related Tools',
    // CTA
    foundTool: 'Found a great tool?',
    ctaText: 'Submit it and share with others!',
    submitBtn: 'Submit Tool',
    // Footer
    footerDesc: 'Hand-picked tools for cross-border sellers. From product research to logistics, from operations to marketing.',
    quickLinks: 'Quick Links',
    browseCategories: 'Browse Categories',
    submitTool: 'Submit Tool',
    hotCategories: 'Hot Categories',
    productResearch: 'Product Research',
    erp: 'ERP System',
    payment: 'Payment',
    logistics: 'Logistics',
    copyright: 'All rights reserved.',
    // Tool Card
    visitWebsite: 'Visit Website',
    viewDetails: 'View Details',
    free: 'Free',
    recommended: 'Recommended',
    // Detail Page
    breadcrumbs: {
      home: 'Home',
      category: 'Category',
    },
    about: 'About',
    quickInfo: 'Quick Info',
    officialWebsite: 'Official Website',
    category: 'Category',
    priceRange: 'Price Range',
    rating: 'Rating',
    relatedTags: 'Related Tags',
    shareTool: 'Share Tool',
    copyLink: 'Copy Link',
    share: 'Share',
    // Submit Page
    submitTitle: 'Submit Tool',
    submitSubtitle: 'Found a great cross-border e-commerce tool? Share it with others!',
    submitNotice: 'Submission Guidelines',
    notice1: 'Tools must be related to cross-border e-commerce (product research, operations, logistics, payment, etc.)',
    notice2: 'Please provide accurate official website link and tool description',
    notice3: 'Free submissions take 3-5 business days to review',
    notice4: 'Priority review available with paid service',
    toolName: 'Tool Name',
    toolUrl: 'Official URL',
    description: 'Description',
    categoryLabel: 'Category',
    tags: 'Tags',
    tagsHint: 'Separate with commas',
    price: 'Price / Pricing Model',
    priceHint: 'e.g., Free, $29/month, One-time payment',
    email: 'Contact Email',
    emailHint: 'Used for review notification only',
    notes: 'Additional Notes',
    notesHint: 'Anything special to note?',
    agreeTerms: 'I confirm the submitted information is accurate and agree to the terms of service.',
    submitting: 'Submitting...',
    submitSuccess: 'Submission successful!',
    successDesc: 'Thank you for your submission. We will review it soon.',
    submitFailed: 'Submission failed',
    failedDesc: 'Please check and try again, or contact support.',
    priorityReview: 'Priority Review',
    priorityDesc: 'Choose priority review for approval within 24 hours and featured placement.',
    basicListing: 'Basic Listing',
    featuredSpot: 'Featured Spot',
    annualMember: 'Annual Member',
    // Categories
    'all': 'All',
    'product-research': 'Product Research',
    'erp': 'ERP System',
    'operations': 'Operations',
    'marketing': 'Marketing & Ads',
    'social': 'Social Media',
    'website': 'E-commerce Site',
    'payment': 'Payment',
    'logistics': 'Logistics',
    'analytics': 'Analytics',
    'ip-trademark': 'IP & Trademark',
    'translation': 'Translation',
    // About tool
    aboutToolDesc: 'is a widely-used tool in the cross-border e-commerce field for',
    fieldDesc: '. It helps sellers work more efficiently and improve operational effectiveness.',
    recommendDesc: 'We highly recommend visiting the official website for more details and making the most of its features.',
    // No tool found
    toolNotFound: 'Tool Not Found',
    notFoundDesc: 'The tool page you are looking for does not exist or has been removed.',
    backHome: 'Back to Home',
  },
  zh: {
    // Header
    home: '首页',
    categories: '分类',
    featured: '推荐',
    submit: '提交工具',
    // Hero
    heroTitle: '跨境电商工具导航',
    heroSubtitle: '为跨境卖家精选最好用的工具。从选品到物流，从运营到营销，一站式解决跨境电商工具选择难题。',
    searchPlaceholder: '搜索工具名称、功能或平台...',
    toolsCount: '精选工具',
    categoriesCount: '热门分类',
    usersCount: '月活用户',
    // Sections
    hotTools: '热门推荐',
    allTools: '全部工具',
    searchResults: '搜索"',
    noResults: '未找到相关工具',
    tryOther: '试试其他关键词或分类',
    relatedTools: '同类工具推荐',
    // CTA
    foundTool: '发现好工具？',
    ctaText: '如果你有好用的跨境电商工具推荐，欢迎提交给我们',
    submitBtn: '提交工具',
    // Footer
    footerDesc: '为跨境卖家精选最好用的工具。从选品到物流，从运营到营销，一站式解决跨境电商工具选择难题。',
    quickLinks: '快速链接',
    browseCategories: '分类浏览',
    submitTool: '提交工具',
    hotCategories: '热门分类',
    productResearch: '选品工具',
    erp: 'ERP系统',
    payment: '支付收款',
    logistics: '物流',
    copyright: '版权所有.',
    // Tool Card
    visitWebsite: '访问官网',
    viewDetails: '查看详情',
    free: '免费',
    recommended: '推荐',
    // Detail Page
    breadcrumbs: {
      home: '首页',
      category: '分类',
    },
    about: '关于',
    quickInfo: '快速信息',
    officialWebsite: '官方网址',
    category: '所属分类',
    priceRange: '价格范围',
    rating: '用户评分',
    relatedTags: '相关标签',
    shareTool: '分享工具',
    copyLink: '复制链接',
    share: '分享',
    // Submit Page
    submitTitle: '提交工具',
    submitSubtitle: '发现了好用的跨境电商工具？分享给大家吧！',
    submitNotice: '提交须知',
    notice1: '工具必须与跨境电商相关（选品、运营、物流、支付等）',
    notice2: '请提供准确的官网链接和工具描述',
    notice3: '免费收录审核周期约 3-5 个工作日',
    notice4: '如需快速收录，可选择付费加速服务',
    toolName: '工具名称',
    toolUrl: '官网链接',
    description: '工具描述',
    categoryLabel: '所属分类',
    tags: '标签',
    tagsHint: '（用逗号分隔）',
    price: '价格/收费模式',
    priceHint: '例如：免费、$29/月起、一次性付费',
    email: '联系邮箱',
    emailHint: '仅用于审核通知，不会公开显示',
    notes: '补充说明',
    notesHint: '（选填）有什么需要特别说明的？',
    agreeTerms: '我确认提交的信息真实有效，并同意遵守网站的服务条款。',
    submitting: '提交中...',
    submitSuccess: '提交成功！',
    successDesc: '感谢您的提交，我们会尽快审核。',
    submitFailed: '提交失败',
    failedDesc: '请检查信息后重试，或联系客服。',
    priorityReview: '付费加速收录',
    priorityDesc: '选择付费收录，24小时内审核通过，获得置顶推荐位。',
    basicListing: '基础收录',
    featuredSpot: '推荐位',
    annualMember: '年度会员',
    // Categories
    'all': '全部',
    'product-research': '选品工具',
    'erp': 'ERP系统',
    'operations': '运营工具',
    'marketing': '营销广告',
    'social': '社媒运营',
    'website': '独立站',
    'payment': '支付收款',
    'logistics': '物流',
    'analytics': '数据分析',
    'ip-trademark': '知识产权',
    'translation': '翻译工具',
    // About tool
    aboutToolDesc: '是跨境电商领域广泛使用的',
    fieldDesc: '工具。它帮助卖家更高效地完成相关工作，提升运营效率。',
    recommendDesc: '我们强烈建议您访问官方网站了解更多详情，并充分利用其提供的各项功能。',
    // No tool found
    toolNotFound: '工具未找到',
    notFoundDesc: '很抱歉，您访问的工具页面不存在或已被移除。试试返回首页查找其他工具吧。',
    backHome: '返回首页',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

// 获取翻译
export function t(key: TranslationKey, locale: Locale = defaultLocale): string {
  return translations[locale][key] || translations.en[key] || key;
}

// 根据 IP 判断语言
export function detectLanguage(country?: string): Locale {
  // 如果是中国 IP，显示中文
  if (country === 'CN' || country === 'CHINA') {
    return 'zh';
  }
  // 默认英文
  return 'en';
}
