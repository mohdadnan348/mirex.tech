"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useTheme } from "@/app/providers";
import { navLinks } from "@/data/navLinks";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ui/ConsultationModal";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const { t, language, toggleLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showConsultModal, setShowConsultModal] = useState(false);

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 z-50">
            <div className={styles.logoMark}>
              <span>M</span>
            </div>
            <span className="font-extrabold text-xl tracking-wider text-gray-900 dark:text-white">
              MIREX
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                >
                  {t(link.labelKey)}
                </Link>
              );
            })}
          </nav>

          {/* Actions (Lang, Theme, Quote CTA) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Lang Toggle */}
            <button
              onClick={toggleLanguage}
              className={styles.actionIconBtn}
              title="Toggle Language"
              aria-label="Toggle Language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={styles.actionIconBtn}
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Consultation Trigger */}
            <Button variant="glass" size="sm" onClick={() => setShowConsultModal(true)}>
              {t("nav.consultation")}
            </Button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-4 z-50">
            <button onClick={toggleTheme} className={styles.actionIconBtn} aria-label="Toggle Theme">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-400 transition-colors"
                >
                  {t(link.labelKey)}
                </Link>
              ))}

              <div className="flex items-center gap-6 mt-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <Globe className="w-5 h-5" />
                  <span className="font-bold uppercase">{language}</span>
                </button>
              </div>

              <Button
                variant="primary"
                className="mt-4"
                onClick={() => {
                  setIsOpen(false);
                  setShowConsultModal(true);
                }}
              >
                {t("nav.consultation")}
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      {showConsultModal && <ConsultationModal onClose={() => setShowConsultModal(false)} />}
    </>
  );
}
