"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Loader from "@/components/ui/Loader";

type Theme = "dark" | "light";
type Language = "en" | "hi";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { translations } from "@/data/translationData";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [language, setLanguage] = useState<Language>("en");
  const [loading, setLoading] = useState(true);

  // Initialize Theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("mirex-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      document.documentElement.classList.toggle("light", savedTheme === "light");
    } else {
      document.documentElement.classList.add("dark");
    }

    const savedLang = localStorage.getItem("mirex-lang") as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }

    // Simulate luxury loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("mirex-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.classList.toggle("light", nextTheme === "light");
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "hi" : "en";
    setLanguage(nextLang);
    localStorage.setItem("mirex-lang", nextLang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let current: any = translations[language];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        return key; // Fallback to key
      }
    }
    return typeof current === "string" ? current : key;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
        {loading && <Loader />}
        <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
          {children}
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
