"use client";

import React from "react";
import { Zap, ShieldCheck, Palette, CloudLightning, BadgeDollarSign, HeartHandshake } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Card from "@/components/ui/Card";

export default function WhyChooseSection() {
  const { t } = useTranslation();

  const stats = [
    {
      labelKey: "stats.delivery",
      descKey: "stats.deliveryDesc",
      number: "100%",
      sub: "On-Time Sprints",
      icon: Zap,
      color: "from-cyan-400 to-blue-500 text-cyan-400",
    },
    {
      labelKey: "stats.uptime",
      descKey: "stats.uptimeDesc",
      number: "99.9%",
      sub: "Server Reliability",
      icon: CloudLightning,
      color: "from-violet-400 to-indigo-500 text-violet-400",
    },
    {
      labelKey: "stats.ui",
      descKey: "stats.uiDesc",
      number: "2.5x",
      sub: "Client Engagement Boost",
      icon: Palette,
      color: "from-pink-400 to-rose-500 text-pink-400",
    },
    {
      labelKey: "stats.security",
      descKey: "stats.securityDesc",
      number: "AES",
      sub: "JWT & RBAC Encryption",
      icon: ShieldCheck,
      color: "from-emerald-400 to-teal-500 text-emerald-400",
    },
    {
      labelKey: "stats.pricing",
      descKey: "stats.pricingDesc",
      number: "0%",
      sub: "Hidden Fees",
      icon: BadgeDollarSign,
      color: "from-yellow-400 to-amber-500 text-yellow-400",
    },
    {
      labelKey: "stats.support",
      descKey: "stats.supportDesc",
      number: "<15m",
      sub: "Response Time Guarantee",
      icon: HeartHandshake,
      color: "from-cyan-400 to-teal-500 text-cyan-300",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="why-choose">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Why Choose MIREX?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            We don&apos;t just code – we build scalable, AI-driven ecosystems that double your business revenue.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.labelKey} className="group overflow-hidden flex flex-col justify-between" glowColor="rgba(6,182,212,0.06)">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>

                    {/* Bold Stat Number */}
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 dark:from-white dark:to-white/10 group-hover:to-cyan-400/80 transition-all duration-500">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    {t(item.labelKey)}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {t(item.descKey)}
                  </p>
                </div>

                <div className="text-[10px] font-bold text-cyan-500 tracking-wider uppercase border-t border-white/5 pt-3">
                  {item.sub}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
