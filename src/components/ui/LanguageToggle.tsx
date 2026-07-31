import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full hover:bg-accent transition-colors flex items-center gap-1 text-sm"
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5" />
      <span className="uppercase font-medium">{i18n.language}</span>
    </button>
  );
}