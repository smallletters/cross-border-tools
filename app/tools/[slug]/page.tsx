import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getToolBySlug, tools, categories } from '@/lib/tools';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

// 生成静态路径
export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// SEO 元数据
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  if (!tool) {
    return { title: '工具未找到' };
  }
  return {
    title: `${tool.name} - 跨境工具导航`,
    description: tool.description,
  };
}

export default function ToolDetailPage({ params }: PageProps) {
  const tool = getToolBySlug(params.slug);
  if (!tool) {
    notFound();
  }

  const category = categories.find((c) => c.id === tool.category);
  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  return (
    <>
      {/* 面包屑导航 */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
              首页
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href={`/?category=${tool.category}`}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {category?.name || '工具分类'}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium">{tool.name}</span>
          </nav>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：工具信息 */}
          <div className="lg:col-span-2">
            {/* 工具头部 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                  {tool.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {tool.name}
                    </h1>
                    {tool.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                        ⭐ 推荐
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    {category && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                        {category.icon} {category.name}
                      </span>
                    )}
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

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
              >
                <span>访问官网</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* 工具介绍 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                关于 {tool.name}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300">
                  {tool.name} 是跨境电商领域广泛使用的{tool.tags.join('、')}工具。
                  它帮助卖家更高效地完成相关工作，提升运营效率。
                  无论是新手卖家还是资深大卖，都能从中获得价值。
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  我们强烈建议您访问官方网站了解更多详情，并充分利用其提供的各项功能。
                </p>
              </div>
            </div>
          </div>

          {/* 右侧：相关信息 */}
          <div className="space-y-6">
            {/* 快速信息 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">快速信息</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-gray-500">官方网址</dt>
                  <dd>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      访问 →
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">所属分类</dt>
                  <dd className="text-gray-900 dark:text-white text-sm">
                    {category?.name}
                  </dd>
                </div>
                {tool.price && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500">价格范围</dt>
                    <dd className="text-gray-900 dark:text-white text-sm">{tool.price}</dd>
                  </div>
                )}
                {tool.rating && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500">用户评分</dt>
                    <dd className="text-yellow-600 text-sm">⭐ {tool.rating}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* 工具标签 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">相关标签</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 分享 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">分享工具</h3>
              <div className="flex gap-2">
                <button className="flex-1 py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  复制链接
                </button>
                <button className="flex-1 py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  分享
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 相关工具 */}
        {relatedTools.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📦</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                同类工具推荐
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((relatedTool) => (
                <Link
                  key={relatedTool.id}
                  href={`/tools/${relatedTool.slug}`}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {relatedTool.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {relatedTool.name}
                      </h3>
                      {relatedTool.price && (
                        <span className="text-xs text-gray-500">{relatedTool.price}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {relatedTool.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}