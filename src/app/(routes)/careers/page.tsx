"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { jobOpenings } from "@/data/careersData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import confetti from "canvas-confetti";
import { sendEmail } from "@/lib/emailjs";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    resume: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: `MirexTech Job Application - ${selectedJob}`,
        message: formData.message || "No cover letter provided.",
        type: "contact",
        details: `Role: ${selectedJob} | Portfolio URL: ${formData.portfolio || "N/A"} | Resume Link: ${formData.resume || "N/A"}`,
      });

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", portfolio: "", resume: "", message: "" });
        confetti({
          particleCount: 50,
          spread: 40,
          origin: { y: 0.9 },
        });
        setTimeout(() => {
          setSelectedJob(null);
          setStatus("idle");
        }, 3000);
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

      <div className="max-w-4xl mx-auto px-6">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Join Our Team
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            Help us build next-generation software platforms, RAG integrations, and premium brand designs.
          </p>
        </div>

        {/* Vacancy cards list */}
        {!selectedJob ? (
          <div className="flex flex-col gap-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="p-6 border border-white/5 bg-white/5 hover:border-violet-500/30 group" glowColor="rgba(6,182,212,0.04)">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg md:text-xl mb-2 group-hover:text-cyan-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-violet-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-pink-400" />
                        {job.type} ({job.experience})
                      </span>
                    </div>
                  </div>

                  <Button onClick={() => setSelectedJob(job.title)} className="shrink-0 gap-2 group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          /* Application Form overlay block */
          <div>
            <button
              onClick={() => setSelectedJob(null)}
              className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wider mb-8 block"
            >
              &larr; View Vacancy List
            </button>

            <Card className="p-8 border border-cyan-500/20 bg-white/5" interactive={false}>
              <h2 className="font-extrabold text-2xl text-gray-900 dark:text-white mb-2">
                Application: {selectedJob}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-8">
                Tell us about your engineering skills and drop portfolio details below.
              </p>

              {status === "success" ? (
                <div className="text-center py-8 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-bold text-white mb-2">Application Logged!</h4>
                  <p className="text-xs text-gray-400">
                    We will review your resume and call you for a code interview shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                        Full Name *
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
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                        Portfolio / GitHub Link
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://github.com/rahul"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                        Link to Resume PDF *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.resume}
                        onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                        placeholder="https://drive.google.com/.../resume.pdf"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                      Covering letter / Motivation
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Why do you want to join MirexTech? Tell us about your Next.js project experiences..."
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all"
                    />
                  </div>

                  {status === "error" && (
                    <div className="text-xs text-red-400 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      Failed to submit application. Try again.
                    </div>
                  )}

                  <div className="flex gap-4 justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-6 py-3 text-sm font-bold text-gray-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <Button type="submit" isLoading={isSubmitting}>
                      Submit Code Application
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
