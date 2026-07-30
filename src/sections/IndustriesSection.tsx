"use client";

import React from "react";
import { Activity, GraduationCap, Utensils, Home, Compass, Landmark, ShoppingBag, CheckCircle } from "lucide-react";
import { industries } from "@/data/industriesData";
import Card from "@/components/ui/Card";

const iconMap: Record<string, React.ComponentType<any>> = {
  Activity,
  GraduationCap,
  Utensils,
  Home,
  Compass,
  Landmark,
  ShoppingBag,
};

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            <CheckCircle className="w-4 h-4" />
            <span>Target Sectors</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            We engineer tailored platforms designed to automate processes and unlock growth for specific niches.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const IconComponent = iconMap[ind.iconName] || ShoppingBag;
            return (
              <Card key={ind.name} className="flex flex-col h-full group" glowColor="rgba(139,92,246,0.06)">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 dark:bg-white/5 border border-cyan-500/20 dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2 group-hover:text-cyan-400 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1">
                  {ind.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
