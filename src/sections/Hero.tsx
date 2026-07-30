"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Bot, Cpu } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function Hero() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Neon Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern opacity-60 dark:opacity-20 pointer-events-none" />

      {/* Floating Ambient AI Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-violet-600/20 blur-[120px] animate-orb-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px] animate-orb-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-pink-500/10 blur-[110px] animate-orb-3 pointer-events-none" />

      {/* Center 3D Floating AI Orb Container */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-cyan-500/10 rounded-full flex items-center justify-center animate-pulse-slow pointer-events-none">
        <div className="w-[200px] h-[200px] border border-violet-500/20 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: "12s" }}>
          <div className="w-4 h-4 rounded-full bg-cyan-400 absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_15px_#22d3ee]" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/5 mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold tracking-wider text-gray-800 dark:text-gray-200">
            {t("hero.sub")}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.15]">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 animate-pulse-slow">AI-Powered</span> <br />
          Software That Grows Businesses.
        </h1>

        {/* Subtitle description */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t("hero.desc")}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => setShowModal(true)} className="w-full sm:w-auto gap-2 group">
            {t("hero.ctaConsultation")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Link href="/projects" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              {t("hero.ctaPortfolio")}
            </Button>
          </Link>
        </div>

        {/* Floating tech cards to reinforce luxury aesthetic */}
        <div className="hidden md:flex justify-between items-center max-w-3xl mx-auto mt-20 text-gray-500 dark:text-gray-400 text-xs tracking-widest uppercase">
          <div className="flex items-center gap-2 hover:text-violet-400 transition-colors">
            <Code2 className="w-4 h-4 text-violet-500" />
            <span>Modern Stack Development</span>
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Bot className="w-4 h-4 text-cyan-400" />
            <span>AI Agents & RAG Custom bots</span>
          </div>
          <div className="flex items-center gap-2 hover:text-pink-400 transition-colors">
            <Cpu className="w-4 h-4 text-pink-500" />
            <span>Automated CRM / ERP Nodes</span>
          </div>
        </div>
      </div>

      {showModal && <ConsultationModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
