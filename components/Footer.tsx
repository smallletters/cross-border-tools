import Link from 'next/link';
import { t, type Locale } from '@/lib/i18n';

interface FooterProps {
  locale?: Locale;
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const tx = (key: Parameters<typeof t>[0]) => t(key, locale);

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">🛒</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                {locale === 'zh' ? '跨境工具导航' : 'Tools Directory'}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 max-w-md">
              {tx('footerDesc')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{tx('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">{tx('home')}</Link></li>
              <li><Link href={`/${locale}#categories`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">{tx('browseCategories')}</Link></li>
              <li><Link href={`/${locale}/submit`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">{tx('submitTool')}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{tx('hotCategories')}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}?category=product-research`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">🔍 {tx('productResearch')}</Link></li>
              <li><Link href={`/${locale}?category=erp`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">📦 {tx('erp')}</Link></li>
              <li><Link href={`/${locale}?category=payment`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">💳 {tx('payment')}</Link></li>
              <li><Link href={`/${locale}?category=logistics`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">🚚 {tx('logistics')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} {locale === 'zh' ? '跨境工具导航' : 'Cross-Border Tools Directory'}. {tx('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
