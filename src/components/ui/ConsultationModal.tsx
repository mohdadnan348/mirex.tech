"use client";

import React, { useState } from "react";
import { X, Calendar, MessageSquare, Send } from "lucide-react";
import Button from "./Button";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./ConsultationModal.module.css";
import confetti from "canvas-confetti";
import { sendEmail } from "@/lib/emailjs";

interface ConsultationModalProps {
  onClose: () => void;
}

export default function ConsultationModal({ onClose }: ConsultationModalProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Website Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: `MirexTech Consultation Request - ${formData.projectType}`,
        message: formData.message || "No description provided.",
        type: "quote",
        details: `Project Category: ${formData.projectType}`,
      });

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "Website Development", message: "" });
        // Fire confetti for premium user delight!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        setTimeout(() => {
          onClose();
        }, 2500);
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
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className="flex items-center gap-2 text-cyan-400">
            <Calendar className="w-5 h-5 animate-pulse" />
            <h3 className="font-bold text-white text-lg">Book Free Consultation</h3>
          </div>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close modal">
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                <Send className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Inquiry Submitted!</h4>
              <p className="text-xs text-gray-400">
                Mohd Adnan (Founder) will connect with you via email within 12 hours. Let&apos;s build something great!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                  {t("contact.name")} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Rahul Sharma"
                  className={styles.modalInput}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                  {t("contact.email")} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rahul@example.com"
                  className={styles.modalInput}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                  Project Category
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className={styles.modalSelect}
                >
                  <option value="Website Development">Website Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="AI Chatbots / Automation">AI Chatbots / Automation</option>
                  <option value="Custom CRM / ERP Software">Custom CRM / ERP Software</option>
                  <option value="Creative Motion / Video Editing">Creative Motion / Video Editing</option>
                  <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                  <option value="Social Media Ads & Marketing">Social Media Ads & Marketing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                  Tell us about your project
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="I want to build a custom ERP for my salon..."
                  className={styles.modalTextarea}
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-red-400">
                  {t("contact.error")}
                </p>
              )}

              <Button type="submit" isLoading={isSubmitting} className="w-full mt-2">
                Submit Consultation Request
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
