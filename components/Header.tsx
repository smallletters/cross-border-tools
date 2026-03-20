import Link from 'next/link';
import { t, type Locale } from '@/lib/i18n';

interface HeaderProps {
  locale?: Locale;
}

export default function Header({ locale = 'en' }: HeaderProps) {
  const tx = (key: Parameters<typeof t>[0]) => t(key, locale);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🛒</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              {locale === 'zh' ? '跨境工具导航' : 'Tools Directory'}
            </span>
          </Link>

          {/* 导航 */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href={`/${locale}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              {tx('home')}
            </Link>
            <Link href={`/${locale}#categories`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              {tx('categories')}
            </Link>
            <Link href={`/${locale}#featured`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              {tx('featured')}
            </Link>
            <Link href={`/${locale}/submit` className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              {tx('submit')}
            </Link>
          </nav>

          {/* 语言切换 */}
          <div className="flex items-center gap-2">
            <Link 
              href={`/zh${locale === 'en' ? '/submit' : ''}`}
              className={`px-3 py-1 text-sm rounded-lg ${locale === 'zh' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              中文
            </Link>
            <Link 
              href={`/en${locale === 'zh' ? '/submit' : ''}`}
              className={`px-3 py-1 text-sm rounded-lg ${locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
