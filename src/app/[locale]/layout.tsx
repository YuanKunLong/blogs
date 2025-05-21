import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ['latin'] });


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider 
          locale={locale} 
          timeZone="Asia/Shanghai"
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
