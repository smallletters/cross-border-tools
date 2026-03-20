import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, detectLanguage } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 检查路径是否已经有语言前缀
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  // 如果已经有语言前缀，跳过
  if (pathnameHasLocale) {
    return NextResponse.next();
  }
  
  // 检测语言（根据 IP 或 Accept-Language 头）
  let locale = defaultLocale;
  
  // 尝试从 Vercel 或其他 CDN 获取国家代码
  const country = request.headers.get('x-vercel-ip-country') || 
                  request.headers.get('cf-ipcountry') || // Cloudflare
                  request.geo?.country;
  
  if (country) {
    locale = detectLanguage(country);
  } else {
    // 如果没有 IP 信息，使用 Accept-Language 头
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      if (acceptLanguage.includes('zh')) {
        locale = 'zh';
      } else if (acceptLanguage.includes('en')) {
        locale = 'en';
      }
    }
  }
  
  // 重定向到带语言前缀的 URL
  const newUrl = new URL(request.url);
  newUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // 跳过所有内部路径 (_next, api, 等)
    '/((?!_next|api|favicon.ico|images|.*\\..*).*)',
  ],
};
