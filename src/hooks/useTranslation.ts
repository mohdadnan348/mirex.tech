import { useLanguage } from "@/app/providers";

export function useTranslation() {
  const { language, toggleLanguage, t } = useLanguage();
  return { language, toggleLanguage, t };
}
