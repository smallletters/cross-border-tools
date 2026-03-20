import Link from 'next/link';
import { t, getCategoryName, type Locale } from '@/lib/i18n';

interface FooterProps {
  locale?: Locale;
}

export default function Footer({ locale = 'en' }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              {t('footerDesc', locale)}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t('quickLinks', locale)}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">{t('home', locale)}</Link></li>
              <li><Link href={`/${locale}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">{t('categories', locale)}</Link></li>
              <li><Link href={`/${locale}/submit`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">{t('submitTool', locale)}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t('hotCategories', locale)}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}?category=product-research`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">🔍 {getCategoryName('product-research', locale)}</Link></li>
              <li><Link href={`/${locale}?category=erp`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">📦 {getCategoryName('erp', locale)}</Link></li>
              <li><Link href={`/${locale}?category=payment`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">💳 {getCategoryName('payment', locale)}</Link></li>
              <li><Link href={`/${locale}?category=logistics`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">🚚 {getCategoryName('logistics', locale)}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} {locale === 'zh' ? '跨境工具导航' : 'Cross-Border Tools'}. {t('copyright', locale)}
          </p>
        </div>
      </div>
    </footer>
  );
}
