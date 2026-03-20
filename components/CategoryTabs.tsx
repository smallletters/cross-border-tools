'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/tools';
import { type Locale } from '@/lib/i18n';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  locale: Locale;
}

export default function CategoryTabs({ activeCategory, locale }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => {
            const url = new URL(window.location.href);
            if (category.id === 'all') {
              url.searchParams.delete('category');
            } else {
              url.searchParams.set('category', category.id);
            }
            window.history.pushState({}, '', url.toString());
            window.dispatchEvent(new CustomEvent('categoryChange', { detail: category.id }));
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
            ${activeCategory === category.id
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
        >
          <span className="mr-1">{category.icon}</span>
          {locale === 'zh' ? category.name : category.nameEn || category.name}
        </button>
      ))}
    </div>
  );
}
