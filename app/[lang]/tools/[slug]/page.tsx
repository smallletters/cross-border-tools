import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getToolBySlug, tools } from '@/lib/tools';
import { t, type Locale } from '@/lib/i18n';

interface PageProps {
  params: { lang: string; slug: string };
}

export async function generateStaticParams() {
  return tools.flatMap((tool) => [
    { lang: 'en', slug: tool.slug },
    { lang: 'zh', slug: tool.slug },
  ]);
}

export async function generateMetadata({ params }: PageProps) {
  const tool = getToolBySlug(params.slug);
  const locale = params.lang as Locale;
  if (!tool) return { title: t('toolNotFound', locale) };
  return {
    title: `${tool.name} - Cross-Border Tools`,
    description: tool.description,
  };
}

export default function ToolDetailPage({ params }: PageProps) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const locale = params.lang as Locale;
  
  const relatedTools = tools.filter((item) => item.category === tool.category && item.id !== tool.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href={`/${locale}`} className="text-gray-500 hover:text-blue-600">{t('breadcrumbsHome', locale)}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium">{tool.name}</span>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
                  {tool.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{tool.name}</h1>
                    {tool.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                        ⭐ {t('recommended', locale)}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">{tool.category}</span>
                    {tool.price && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                        💰 {tool.price}
                      </span>
                    )}
                    {tool.rating && (
                      <span className="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full">
                        ⭐ {tool.rating}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">{tool.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {tool.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg"
              >
                <span>{t('visitWebsite', locale)}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about', locale)} {tool.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {tool.name} {t('aboutToolDesc', locale)}{tool.tags.join(', ')}{t('fieldDesc', locale)}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">{t('recommendDesc', locale)}</p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">{t('quickInfo', locale)}</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-gray-500">{t('officialWebsite', locale)}</dt>
                  <dd>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">
                      →
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">{t('category', locale)}</dt>
                  <dd className="text-sm">{tool.category}</dd>
                </div>
                {tool.price && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500">{t('priceRange', locale)}</dt>
                    <dd className="text-sm">{tool.price}</dd>
                  </div>
                )}
                {tool.rating && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500">{t('rating', locale)}</dt>
                    <dd className="text-yellow-600 text-sm">⭐ {tool.rating}</dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">{t('relatedTags', locale)}</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">{t('shareTool', locale)}</h3>
              <div className="flex gap-2">
                <button className="flex-1 py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm hover:bg-gray-200">
                  {t('copyLink', locale)}
                </button>
                <button className="flex-1 py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm hover:bg-gray-200">
                  {t('share', locale)}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedTools.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📦</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('relatedTools', locale)}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((item) => (
                <Link
                  key={item.id}
                  href={`/${locale}/tools/${item.slug}`}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 border hover:border-blue-500 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                      {item.price && <span className="text-xs text-gray-500">{item.price}</span>}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
