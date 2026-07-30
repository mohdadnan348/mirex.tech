"use client";

import React, { useState } from "react";
import { Check, ShieldAlert, Sparkles, MessageCircle, AlertCircle, Calendar } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ui/ConsultationModal";
import confetti from "canvas-confetti";
import { sendEmail } from "@/lib/emailjs";

export default function Pricing() {
  const { t } = useTranslation();
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "₹10,000 - ₹25,000",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const plans = [
    {
      name: t("pricing.starter"),
      price: "₹8,000",
      period: "/month",
      desc: t("pricing.starterDesc"),
      features: [
        "15 Social Media Posts/Month",
        "1 Platform (Instagram/FB)",
        "Basic Analytics Dashboard",
        "Email Support",
        "Standard Templates Design",
      ],
      cta: t("pricing.choose"),
      popular: false,
    },
    {
      name: t("pricing.business"),
      price: "₹18,000",
      period: "/month",
      desc: t("pricing.businessDesc"),
      features: [
        "30 Social Media Posts/Month",
        "3 Platforms (IG, FB, LinkedIn)",
        "Ad Budget Management",
        "Monthly Reports & Insights",
        "Content & Brand Strategy",
        "Priority Email & Chat Support",
      ],
      cta: t("pricing.choose"),
      popular: true,
    },
    {
      name: t("pricing.enterprise"),
      price: "₹35,000+",
      period: "/month",
      desc: t("pricing.enterpriseDesc"),
      features: [
        "Unlimited Social Posts",
        "4+ Platforms Covered",
        "Full Video Ads & Editing",
        "24/7 Account Manager",
        "On-Page SEO Optimization",
        "Branding & Logo Kits",
      ],
      cta: t("pricing.choose"),
      popular: false,
    },
    {
      name: t("pricing.custom"),
      price: "Custom Quote",
      period: "",
      desc: t("pricing.customDesc"),
      features: [
        "Full-Scale Web Applications (Next.js)",
        "React Native Mobile Apps",
        "Custom LLM Chatbots & AI Agents",
        "Automated CRM & ERP Systems",
        "Dedicated Engineering Sprint Team",
        "Source Code Ownership (100%)",
      ],
      cta: t("pricing.request"),
      popular: false,
    },
  ];

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: `MirexTech Custom Quote Request`,
        message: formData.details || "No description provided.",
        type: "quote",
        details: `Budget Tier: ${formData.budget}`,
      });

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", budget: "₹10,000 - ₹25,000", details: "" });
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {t("pricing.title")}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col h-full justify-between p-6 relative ${
                plan.popular ? "border-violet-500/40 shadow-2xl dark:bg-[#0c0a25]/60" : "border-white/5 bg-white/5"
              }`}
              glowColor={plan.popular ? "rgba(139,92,246,0.12)" : "rgba(6,182,212,0.04)"}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.4)]">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg mb-2">
                  {plan.name}
                </h3>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-6 min-h-[32px]">
                  {plan.desc}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                    {plan.period}
                  </span>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-500 dark:text-gray-400">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.popular ? "primary" : "outline"}
                className="w-full mt-auto"
                onClick={() => {
                  if (plan.price === "Custom Quote") {
                    document.getElementById("request-quote")?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setShowConsultModal(true);
                  }
                }}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Custom Quote Request Form */}
        <div className="max-w-3xl mx-auto scroll-mt-28" id="request-quote">
          <Card className="p-8 md:p-12 border border-violet-500/10 bg-white/5" interactive={false}>
            <div className="flex items-center gap-3 text-cyan-400 mb-6">
              <Calendar className="w-6 h-6 animate-pulse" />
              <h2 className="font-extrabold text-2xl text-gray-900 dark:text-white">
                Request Custom Quote
              </h2>
            </div>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Fill out the details below. Our technical architect Mohd Adnan will evaluate your features list, timeline requirements, and return with a custom sprint quote within 12 hours.
            </p>

            {status === "success" ? (
              <div className="text-center py-8 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                <Check className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Quote Request Logged!</h4>
                <p className="text-xs text-gray-400">
                  We have received your custom requirements and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Rahul Sharma"
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@techstart.io"
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                    Estimated Budget Range (INR)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition-all"
                  >
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 (Small Web Page)</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Business Website / SMM)</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 (ERP / CRM Build)</option>
                    <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 (Custom AI Software)</option>
                    <option value="₹3,00,000+">₹3,00,000+ (Large-Scale Enterprise Build)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                    Project Requirements / Feature List
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Briefly describe what features you need (e.g. Next.js dashboard, role-based access, vector database chatbots...)"
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all"
                  />
                </div>

                {status === "error" && (
                  <div className="md:col-span-2 text-xs text-red-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    Failed to submit request. Please try again.
                  </div>
                )}

                <div className="md:col-span-2">
                  <Button type="submit" isLoading={isSubmitting} className="w-full py-4 font-bold tracking-wider">
                    Submit Custom Request Quote
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>

      {showConsultModal && <ConsultationModal onClose={() => setShowConsultModal(false)} />}
    </div>
  );
}
