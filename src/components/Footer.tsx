import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-full text-center text-muted-foreground border-t border-border">
      <div className="flex justify-center items-center h-full text-sm">
        © {currentYear} This Is?. {t('rights')}
      </div>
    </footer>
  );
} 