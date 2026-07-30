"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Cpu, Users, MessageSquareText, Video, Search, Megaphone } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import Card from "@/components/ui/Card";

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

export default function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our Premium Services
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            We provide full-cycle engineering, intelligent artificial systems, high-converting advertisement funnels, and video marketing.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col gap-16">
          {servicesData.map((category) => (
            <div key={category.title}>
              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-violet-500 pl-4 tracking-wider uppercase">
                {category.title}
              </h3>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service) => {
                  const IconComponent = iconMap[service.icon] || Globe;
                  return (
                    <Card key={service.slug} className="group flex flex-col h-full justify-between" glowColor="rgba(6,182,212,0.08)">
                      <div>
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-violet-500/10 dark:bg-white/5 border border-violet-500/20 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-violet-500 dark:text-cyan-400" />
                        </div>

                        {/* Title */}
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          {service.name}
                        </h4>

                        {/* Description */}
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Read More Link */}
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-cyan-400 hover:gap-3 transition-all duration-200 mt-auto"
                      >
                        Explore Service Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
