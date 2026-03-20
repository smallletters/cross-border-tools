'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import CategoryFilter from '@/components/CategoryFilter';
import ToolCard from '@/components/ToolCard';
import { categories, tools, getToolsByCategory, getFeaturedTools } from '@/lib/tools';
import { t, getCategoryName, type Locale } from '@/lib/i18n';

interface HomeProps {
  params: { lang: string };
}

export default function Home({ params }: HomeProps) {
  const locale = params.lang as Locale;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const featuredTools = getFeaturedTools();

  useEffect(() => {
    const handleCategoryChange = (e: CustomEvent) => {
      setActiveCategory(e.detail);
    };
    window.addEventListener('categoryChange', handleCategoryChange as EventListener);
    
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category') || 'all';
    setActiveCategory(cat);
    
    return () => {
      window.removeEventListener('categoryChange', handleCategoryChange as EventListener);
    };
  }, []);

  const filteredTools = () => {
    let result = activeCategory === 'all' ? tools : getToolsByCategory(activeCategory);
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(t => 
        t.name.toLowerCase().includes(query) || 
        t.description.toLowerCase().includes(query)
      );
    }
    return result;
  };

  // 获取当前分类的显示名称
  const getCategoryDisplayName = (id: string) => {
    if (id === 'all') return locale === 'zh' ? '全部工具' : 'All Tools';
    return getCategoryName(id, locale);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('heroTitle', locale)}</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">{t('heroSubtitle', locale)}</p>
          </div>
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              placeholder={t('searchPlaceholder', locale)} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" 
            />
          </div>
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center"><div className="text-3xl font-bold">{tools.length}+</div><div className="text-blue-200 text-sm">{t('toolsCount', locale)}</div></div>
            <div className="text-center"><div className="text-3xl font-bold">{categories.length - 1}</div><div className="text-blue-200 text-sm">{t('categoriesCount', locale)}</div></div>
            <div className="text-center"><div className="text-3xl font-bold">10K+</div><div className="text-blue-200 text-sm">{t('usersCount', locale)}</div></div>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* 分类筛选 */}
        <section className="mb-8">
          <CategoryFilter locale={locale} initialCategory={activeCategory} />
        </section>

        {/* 热门推荐 */}
        {!searchQuery && activeCategory === 'all' && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">⭐</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('hotTools', locale)}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool) => <ToolCard key={tool.id} tool={tool} locale={locale} />)}
            </div>
          </section>
        )}

        {/* 工具列表 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {searchQuery 
                ? `${t('searchResults', locale)} "${searchQuery}"` 
                : getCategoryDisplayName(activeCategory)}
            </h2>
            <span className="text-gray-500 text-sm">{filteredTools().length} {t('toolsCount', locale)}</span>
          </div>
          {filteredTools().length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools().map((tool) => <ToolCard key={tool.id} tool={tool} locale={locale} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('noResults', locale)}</h3>
              <p className="text-gray-500">{t('tryOther', locale)}</p>
            </div>
          )}
        </section>
      </main>

      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('foundTool', locale)}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{t('ctaText', locale)}</p>
          <Link href={`/${locale}/submit`} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors">
            <span>{locale === 'zh' ? '提交工具' : 'Submit Tool'}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
