import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '跨境工具导航 - 为跨境电商卖家精选最好用的工具',
  description: '精选跨境电商工具导航，从选品到物流，从运营到营销。帮助亚马逊、Shopee、Temu卖家快速找到最好用的工具。',
  keywords: '跨境电商, 工具导航, 亚马逊工具, 选品工具, ERP, 支付收款, 物流',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
