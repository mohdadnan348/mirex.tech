"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Cpu, Users, MessageSquareText, Video, Search, Megaphone } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const iconMap: Record<string, React.ComponentType<any>> = {
  Globe,
  Smartphone,
  Cpu,
  Users,
  MessageSquareText,
  Video,
  Search,
  Megaphone,
};

export default function Services() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Services & Capabilities
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            We provide custom Next.js engineering, cross-platform apps, LLM chatbots, creative video marketing, and SEO indexing solutions.
          </p>
        </div>

        {/* Categories grid block */}
        <div className="flex flex-col gap-20">
          {servicesData.map((category) => (
            <div key={category.title}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-violet-500 pl-4 tracking-wider uppercase">
                {category.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((service) => {
                  const Icon = iconMap[service.icon] || Globe;
                  return (
                    <Card key={service.slug} className="p-8 border border-white/5 bg-white/5 flex flex-col justify-between group" glowColor="rgba(6,182,212,0.06)">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-violet-500/10 dark:bg-white/5 border border-violet-500/20 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-violet-500 dark:text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-lg md:text-xl">
                              {service.name}
                            </h3>
                            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                              Category: {category.title}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                          {service.longDesc}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-3">
                            Key Deliverables
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400">
                            {service.features.map((feat) => (
                              <li key={feat} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Link href={`/services/${service.slug}`} className="mt-4">
                        <Button variant="outline" size="sm" className="gap-2 group">
                          View Full Breakdown
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
