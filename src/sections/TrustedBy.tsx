"use client";

import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function TrustedBy() {
  const { t } = useTranslation();
  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "OpenAI",
    "AWS",
    "Vercel",
    "Docker",
  ];

  // Double the list to create a seamless infinite marquee effect
  const marqueeList = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-12 border-y border-gray-200 dark:border-white/5 bg-background-light dark:bg-background-dark/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          {t("trusted")}
        </h3>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-x-hidden">
        {/* Ambient Left/Right Fades */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />

        <div className="animate-scroll flex gap-12 whitespace-nowrap py-4 min-w-full">
          {marqueeList.map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-gray-400 dark:text-gray-600 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors cursor-default"
            >
              <span className="text-cyan-500">#</span>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
