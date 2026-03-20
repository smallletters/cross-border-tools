'use client';

import { categories } from '@/lib/tools';
import { getCategoryName, type Locale } from '@/lib/i18n';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  locale?: Locale;
}

export default function CategoryTabs({ activeCategory, onCategoryChange, locale = 'en' }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
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
