'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/tools';
import { getCategoryName, type Locale } from '@/lib/i18n';

interface CategoryFilterProps {
  locale: Locale;
  initialCategory?: string;
}

export default function CategoryFilter({ locale, initialCategory = 'all' }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // 监听浏览器前进后退
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category') || 'all';
    setActiveCategory(cat);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    // 更新 URL
    const url = new URL(window.location.href);
    if (categoryId === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', categoryId);
    }
    window.history.pushState({}, '', url.toString());
    
    // 触发工具列表更新
    window.dispatchEvent(new CustomEvent('categoryChange', { detail: categoryId }));
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
            ${activeCategory === category.id
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
        >
          <span className="mr-1">{category.icon}</span>
          {getCategoryName(category.id, locale)}
        </button>
      ))}
    </div>
  );
}
