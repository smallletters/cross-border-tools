'use client';

import { categories } from '@/lib/tools';
import { t, type Locale } from '@/lib/i18n';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  locale?: Locale;
}

export default function CategoryTabs({ activeCategory, onCategoryChange, locale = 'en' }: CategoryTabsProps) {
  const getCategoryName = (id: string) => {
    if (id === 'all') return t('all', locale);
    const cat = categories.find(c => c.id === id);
    if (cat) return cat.name;
    return id;
  };

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
          {getCategoryName(category.id)}
        </button>
      ))}
    </div>
  );
}
