"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ChevronRight, Sparkles, MessageCircle } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ui/ConsultationModal";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetail({ params }: PageProps) {
  const [showModal, setShowModal] = useState(false);
  const { slug } = params;

  // Find matching service item in dataset
  const service = React.useMemo(() => {
    for (const cat of servicesData) {
      const match = cat.items.find((item) => item.slug === slug);
      if (match) return { ...match, category: cat.title };
    }
    return null;
  }, [slug]);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wider mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Header Block */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-bold text-gray-300 tracking-wider uppercase">
              {service.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            {service.name}
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Detailed Breakdown Card */}
        <Card className="p-8 border border-white/5 bg-white/5 mb-12" interactive={false}>
          <h2 className="font-bold text-gray-900 dark:text-white text-lg md:text-xl mb-4">
            Service Overview
          </h2>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            {service.longDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-4 text-cyan-400">
                Key Features & Deliverables
              </h3>
              <ul className="flex flex-col gap-3">
                {service.features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <ChevronRight className="w-4.5 h-4.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-4 text-violet-400">
                Expected Business Results
              </h3>
              <ul className="flex flex-col gap-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Custom Consultation CTA Box */}
        <div className="p-8 rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-900/10 to-cyan-900/10 text-center">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg md:text-2xl mb-2">
            Interested in building a custom {service.name}?
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
            We will design a modern wireframe mockup and map out a step-by-step sprint timeline for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="md" onClick={() => setShowModal(true)}>
              Schedule Consultation
            </Button>
            <a href={`https://wa.me/916389709762?text=Hi%20MirexTech,%20I'm%20inquiring%20about%20your%20${encodeURIComponent(service.name)}%20services.`} target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="md" className="gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Inquire on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      {showModal && <ConsultationModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
