'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CategoryTabs from '@/components/CategoryTabs';
import ToolCard from '@/components/ToolCard';
import Link from 'next/link';
import { categories, tools, getToolsByCategory, searchTools, getFeaturedTools } from '@/lib/tools';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [inputValue, setInputValue] = useState(query);

  // 同步URL参数
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const q = searchParams.get('q') || '';
    setActiveCategory(category);
    setQuery(q);
    setInputValue(q);
  }, [searchParams]);

  // 防抖搜索
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue !== query) {
        const params = new URLSearchParams();
        if (inputValue) params.set('q', inputValue);
        if (activeCategory !== 'all') params.set('category', activeCategory);
        const queryString = params.toString();
        router.push(`/${queryString ? `?${queryString}` : ''}`);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, activeCategory, query, router]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (category !== 'all') params.set('category', category);
    const queryString = params.toString();
    router.push(`/${queryString ? `?${queryString}` : ''}`);
  };

  // 获取工具列表
  let displayedTools = activeCategory === 'all' ? tools : getToolsByCategory(activeCategory);
  if (query) {
    displayedTools = searchTools(query);
  }

  const featuredTools = getFeaturedTools();

  return (
    <>
      {/* Hero 区域 */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              跨境电商工具导航
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              为跨境卖家精选最好用的工具。从选品到物流，从运营到营销，一站式解决跨境电商工具选择难题。
            </p>
          </div>

          {/* 搜索框 */}
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="搜索工具名称、功能或平台..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200"
            />
            {inputValue && (
              <button
                onClick={() => setInputValue('')}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* 统计 */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{tools.length}+</div>
              <div className="text-blue-200 text-sm">精选工具</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{categories.length - 1}</div>
              <div className="text-blue-200 text-sm">热门分类</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-blue-200 text-sm">月活用户</div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 分类标签 */}
        <section id="categories" className="mb-12">
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </section>

        {/* 推荐工具 */}
        {activeCategory === 'all' && !query && (
          <section id="featured" className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">⭐</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">热门推荐</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        )}

        {/* 所有工具 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {query ? `搜索"${query}"的结果` : activeCategory === 'all' ? '全部工具' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <span className="text-gray-500 text-sm">
              共 {displayedTools.length} 个工具
            </span>
          </div>

          {displayedTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                未找到相关工具
              </h3>
              <p className="text-gray-500">
                试试其他关键词或分类
              </p>
            </div>
          )}
        </section>
      </main>

      {/* CTA 区域 */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            发现好工具？
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            如果你有好用的跨境电商工具推荐，欢迎提交给我们
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
          >
            <span>提交工具</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}