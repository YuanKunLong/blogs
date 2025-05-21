'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales, localeNames, type Locale } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as Locale });
  };

  return (
    <select
      value={locale}
      onChange={(e) => handleChange(e.target.value)}
      className="bg-transparent border rounded px-2 py-1"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeNames[loc as Locale]}
        </option>
      ))}
    </select>
  );
}
