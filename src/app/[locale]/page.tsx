import { useTranslations } from 'next-intl';
// components
import { ModeToggle } from '@/components/ThemeProvider';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="min-h-screen bg-background">
      <div >
        <LanguageSwitcher />
        <ModeToggle />
      </div>
    </main>
  );
}
