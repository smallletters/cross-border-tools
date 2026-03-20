import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { locales, type Locale } from '@/lib/i18n';

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'Cross-Border E-commerce Tools Directory',
  description: 'Hand-picked tools for cross-border sellers. From product research to logistics.',
};

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export default function LangLayout({ children, params }: LayoutProps) {
  const locale = params.lang as Locale;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <Header locale={locale} />
      <div className="flex-1">
        {children}
      </div>
      <Footer locale={locale} />
    </div>
  );
}
