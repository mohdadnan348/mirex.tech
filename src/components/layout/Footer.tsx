"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, MessageSquareCode } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { navLinks } from "@/data/navLinks";
import { servicesData } from "@/data/servicesData";
import SocialIcons from "@/components/shared/SocialIcons";
import Button from "@/components/ui/Button";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate newsletter call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <footer className={styles.footer}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center font-extrabold text-white text-lg shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                M
              </div>
              <span className="font-extrabold text-lg tracking-wider text-gray-900 dark:text-white">
                MIREX
              </span>
            </Link>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              &quot;We don&apos;t just code – we build scalable, AI-driven ecosystems that automate businesses and double your revenue.&quot;
            </p>
            <SocialIcons />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs md:text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {servicesData.slice(0, 3).map((cat) =>
                cat.items.slice(0, 2).map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="text-xs md:text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-6">
              Subscribe to Newsletter
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Get the latest insights on AI automation, web performance, and local SEO updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/8 rounded-lg pl-3 pr-10 py-2.5 text-xs text-white outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-white disabled:pointer-events-none transition-colors"
                aria-label="Subscribe"
              >
                {status === "success" ? (
                  <span className="text-[10px] text-emerald-400 font-bold">Done</span>
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright & policies */}
        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} MirexTech. All Rights Reserved. Created by Mohd Adnan (Founder).
          </p>
          <div className="flex gap-4 text-[10px] md:text-xs">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
