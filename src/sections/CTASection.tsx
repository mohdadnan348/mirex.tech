"use client";

import React, { useState } from "react";
import { MessageCircle, Mail, Instagram, Linkedin, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ui/ConsultationModal";
import Card from "@/components/ui/Card";

export default function CTASection() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const contactMethods = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      detail: "+91 63897 09762",
      href: "https://wa.me/916389709762?text=Hi%20MirexTech,%20I'm%20interested%20in%20scaling%20my%20business!",
      color: "hover:border-emerald-500/40 text-emerald-400",
    },
    {
      name: "Email",
      icon: Mail,
      detail: "hello.mirextech@gmail.com",
      href: "mailto:hello.mirextech@gmail.com?subject=Project%20Inquiry%20-%20MirexTech",
      color: "hover:border-sky-500/40 text-sky-400",
    },
    {
      name: "Call Now",
      icon: Phone,
      detail: "+91 63897 09762",
      href: "tel:+916389709762",
      color: "hover:border-indigo-500/40 text-indigo-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      detail: "@mirex.tech",
      href: "https://instagram.com/mirex.tech",
      color: "hover:border-pink-500/40 text-pink-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      detail: "MirexTech",
      href: "https://linkedin.com/company/mirextech", // placeholder
      color: "hover:border-blue-500/40 text-blue-400",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="cta">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Core Container Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 dark:border-white/5 bg-background-light dark:bg-[#08071a]/70 p-8 md:p-16 text-center shadow-2xl">
          {/* Neon border highlights */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Heading */}
          <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Let&apos;s Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
              Amazing Together
            </span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
            Have a custom software build, web app, or local brand that needs a 10x boost? Schedule a free 30-minute discovery session.
          </p>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" onClick={() => setShowModal(true)} className="w-full sm:w-auto gap-2">
              <Calendar className="w-5 h-5" />
              Book Discovery Call
            </Button>
            <a href="https://wa.me/916389709762" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="glass" size="lg" className="w-full sm:w-auto gap-2">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                Quick WhatsApp Chat
              </Button>
            </a>
          </div>

          {/* Grid channels */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-5 rounded-2xl bg-white/5 border border-white/5 dark:border-white/5 transition-all duration-300 ${method.color} hover:-translate-y-1 hover:bg-white/10`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-3 transition-transform group-hover:scale-110" />
                  <h4 className="font-bold text-gray-900 dark:text-white text-xs mb-1">
                    {method.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                    {method.detail}
                  </p>
                  <ArrowUpRight className="w-3 h-3 absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {showModal && <ConsultationModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
