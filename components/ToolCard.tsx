import Link from 'next/link';
import { Tool } from '@/lib/tools';
import { type Locale } from '@/lib/i18n';

interface ToolCardProps {
  tool: Tool;
  locale?: Locale;
}

export default function ToolCard({ tool, locale = 'en' }: ToolCardProps) {
  // 根据语言返回不同描述
  const getDescription = () => {
    if (locale === 'zh') {
      return tool.description;
    }
    return tool.descriptionEn || tool.description;
  };

  // 根据语言返回不同标签
  const getTags = () => {
    if (locale === 'zh') {
      return tool.tags;
    }
    return tool.tagsEn || tool.tags;
  };

  // 翻译价格
  const getPrice = () => {
    if (!tool.price) return '';
    if (locale === 'zh') {
      return tool.price;
    }
    // 翻译价格格式
    return tool.price
      .replace('/月', '/month')
      .replace('¥', '$')
      .replace('起', ' starting');
  };

  return (
    <Link href={`/${locale}/tools/${tool.slug}`}>
      <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              {tool.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>
              {tool.price && (
                <span className="text-xs text-gray-500 dark:text-gray-400">{getPrice()}</span>
              )}
            </div>
          </div>
          {tool.rating && (
            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-medium text-yellow-700 dark:text-yellow-400">{tool.rating}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {getDescription()}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {getTags().slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-400">
            {locale === 'zh' ? '查看详情 →' : 'View Details →'}
          </span>
          <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
            {locale === 'zh' ? '访问官网' : 'Visit'}
          </span>
        </div>
      </div>
    </Link>
  );
}
