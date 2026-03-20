import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="py-20 text-center">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        工具未找到
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        很抱歉，您访问的工具页面不存在或已被移除。
        <br />
        试试返回首页查找其他工具吧。
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
        >
          返回首页
        </Link>
        <Link
          href="/submit"
          className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          提交工具
        </Link>
      </div>
    </main>
  );
}