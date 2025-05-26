import '@/app/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Inter as FontSans } from "next/font/google"
// components
import { ThemeProvider } from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'This Is?',
  description: 'My Blog！',
}

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={
        cn(
          inter.className,
          fontSans.variable
        )}
      >
        {/* 主题 */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 国际化 */}
          <NextIntlClientProvider
            locale={locale}
            timeZone="Asia/Shanghai"
          >
            {/* 主体 */}
            <div className="flex flex-col min-h-screen">
              <main className="h-[95vh]">
                {children}
              </main>
              <div className="h-[5vh]">
                <Footer />
              </div>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
