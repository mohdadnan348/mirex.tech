"use client";

import React from "react";
import { Compass, Eye, Heart, Milestone, Terminal, Cpu, ShieldAlert, Award } from "lucide-react";
import Card from "@/components/ui/Card";
import { industries } from "@/data/industriesData";

export default function About() {
  const values = [
    {
      title: "Agility & Speed",
      desc: "We develop in 2-week sprints, ensuring clients see visible improvements and product iterations continuously.",
      icon: Terminal,
    },
    {
      title: "Apple & Vercel UI Design",
      desc: "We craft products using minimalist guidelines, micro-interactions, dark mode elegance, and smooth transitions.",
      icon: Cpu,
    },
    {
      title: "Military-Grade Security",
      desc: "Every system ships with RBAC roles, encrypted passwords, JWT keys, and secure HTTPS routes out of the box.",
      icon: ShieldAlert,
    },
    {
      title: "Scalable Architecture",
      desc: "Our cloud microservices grow alongside your database records, ensuring zero performance degradations.",
      icon: Award,
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "MirexTech Foundation",
      desc: "Founded by Mohd Adnan in Kanpur with a vision to automate local businesses using modern web frameworks.",
    },
    {
      year: "2025",
      title: "AI Ecosystems Expansion",
      desc: "Launched our first LLM integration modules and engineered school ERP applications for major institutions.",
    },
    {
      year: "2026",
      title: "ResumeAI Pro & Scaling",
      desc: "Released our flagship ResumeAI ATS scanner, serving 50k+ evaluations, and scaled to a full-stack agency structure.",
    },
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            About Our Company
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            We don&apos;t just code – we build scalable, AI-driven ecosystems that automate business operations and double client revenues.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              <p>
                MirexTech was founded by Mohd Adnan in Kanpur / Noida, India with a single focus: bridging the gap between outdated legacy software and next-generation web technologies. We noticed local businesses and startups struggled to compete because of slow, non-responsive portals and manual administrative pipelines.
              </p>
              <p>
                To solve this, we assembled an agile engineering workflow designed to build custom ERPs, websites, and AI-enabled chatbots in a fraction of standard timelines. We drew styling inspiration from Vercel and Apple to ensure our frontend products not only execute fast but look visually premium.
              </p>
              <p>
                Today, MirexTech designs full-stack digital ecosystems, enabling automated invoicing, client calendar syncs, and smart database queries that optimize company budgets.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card glowColor="rgba(34,211,238,0.05)" className="p-8 border border-white/5 bg-white/5 flex flex-col gap-4">
              <Compass className="w-8 h-8 text-cyan-400" />
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Our Mission</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                To build high-performance, automated software systems that eliminate administrative bottlenecks and accelerate startup growth.
              </p>
            </Card>

            <Card glowColor="rgba(139,92,246,0.05)" className="p-8 border border-white/5 bg-white/5 flex flex-col gap-4">
              <Eye className="w-8 h-8 text-violet-400" />
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Our Vision</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                To become the leading global partner for custom software engineering and intelligent LLM automation workflows.
              </p>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="p-6 border border-white/5 hover:border-violet-500/30" glowColor="rgba(124,58,237,0.04)">
                  <Icon className="w-6 h-6 text-cyan-400 mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
            Milestones & Timeline
          </h2>
          <div className="relative max-w-3xl mx-auto border-l border-white/10 pl-6 space-y-12">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-background-dark shadow-[0_0_10px_#22d3ee]" />
                <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1 block">
                  {m.year}
                </span>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{m.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
