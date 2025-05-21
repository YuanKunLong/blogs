
import {defineRouting} from 'next-intl/routing';

export type Locale = 'en' | 'zh';

// 默认语言
export const defaultLocale = 'zh';
// 支持的语言列表
export const locales: Locale[] = ['en', 'zh'];

export const localeNames: Record<Locale, string> = {
    en: 'English',
    zh: '中文'
  };
 
export const routing = defineRouting({
  locales,
  defaultLocale
});