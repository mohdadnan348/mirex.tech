"use client";

import React from "react";
import { Check, Search, Calendar, Palette, Code, CheckSquare, Rocket, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Card from "@/components/ui/Card";

interface ProcessStep {
  step: string;
  titleKey: string;
  descKey: string;
  icon: React.ComponentType<any>;
  color: string;
}

export default function ProcessSection() {
  const { t } = useTranslation();

  const steps: ProcessStep[] = [
    {
      step: "01",
      titleKey: "process.step1",
      descKey: "process.step1Desc",
      icon: Search,
      color: "border-cyan-500 text-cyan-400",
    },
    {
      step: "02",
      titleKey: "process.step2",
      descKey: "process.step2Desc",
      icon: Calendar,
      color: "border-violet-500 text-violet-400",
    },
    {
      step: "03",
      titleKey: "process.step3",
      descKey: "process.step3Desc",
      icon: Palette,
      color: "border-pink-500 text-pink-400",
    },
    {
      step: "04",
      titleKey: "process.step4",
      descKey: "process.step4Desc",
      icon: Code,
      color: "border-emerald-500 text-emerald-400",
    },
    {
      step: "05",
      titleKey: "process.step5",
      descKey: "process.step5Desc",
      icon: CheckSquare,
      color: "border-yellow-500 text-yellow-400",
    },
    {
      step: "06",
      titleKey: "process.step6",
      descKey: "process.step6Desc",
      icon: Rocket,
      color: "border-cyan-400 text-cyan-300",
    },
    {
      step: "07",
      titleKey: "process.step7",
      descKey: "process.step7Desc",
      icon: ShieldCheck,
      color: "border-violet-400 text-violet-300",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="process">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            {t("process.title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            {t("process.subtitle")}
          </p>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 timeline-line-glow opacity-30 pointer-events-none" />

          {/* Steps */}
          <div className="flex flex-col gap-12">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Circle Indicator */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-1.5 w-9 h-9 rounded-full bg-background-light dark:bg-[#0c0a21] border-2 border-violet-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(124,58,237,0.4)]">
                    <span className="text-[10px] font-bold text-white">{item.step}</span>
                  </div>

                  {/* Card Content Spacer */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <Card
                      className={`hover:border-violet-500/30 group`}
                      glowColor="rgba(6,182,212,0.05)"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${item.color.split(" ")[1]}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                          {t(item.titleKey)}
                        </h4>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {t(item.descKey)}
                      </p>
                    </Card>
                  </div>

                  {/* Empty space for grid balancing on large screens */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
