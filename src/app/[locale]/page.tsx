import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations('HomePage');

  const features = [
    { key: 'routing', label: t('features.list.routing') },
    { key: 'seo', label: t('features.list.seo') },
    { key: 'performance', label: t('features.list.performance') },
    { key: 'typescript', label: t('features.list.typescript') }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
          <LanguageSwitcher />
        </div>
        <p className="text-xl text-gray-600 mb-12">{t("description")}</p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t("features.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ key, label }) => (
            <div key={key} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg text-gray-700">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
