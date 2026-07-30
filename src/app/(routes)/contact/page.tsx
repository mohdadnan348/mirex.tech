"use client";

import React, { useState } from "react";
import { MessageCircle, Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Calendar, Clock } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import confetti from "canvas-confetti";
import { sendEmail } from "@/lib/emailjs";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Mock Calendly scheduling states
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [calendlyStatus, setCalendlyStatus] = useState<"idle" | "success">("idle");

  const dates = ["July 27, 2026", "July 28, 2026", "July 29, 2026", "July 30, 2026"];
  const times = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "MirexTech Contact Inquiry",
        message: formData.message,
        type: "contact",
      });

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        confetti({
          particleCount: 50,
          spread: 40,
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

  const handleBookMeeting = () => {
    if (!selectedDate || !selectedTime) return;
    setCalendlyStatus("success");
    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.8 },
    });
    setTimeout(() => {
      setSelectedDate(null);
      setSelectedTime(null);
      setCalendlyStatus("idle");
    }, 4000);
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            Have a project or want to learn how AI can scale your operations? Let&apos;s talk.
          </p>
        </div>

        {/* Info Grid & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Info cards */}
          <div className="flex flex-col gap-6">
            <Card className="p-6 border border-white/5 bg-white/5 flex gap-4" interactive={false}>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-1">
                  WhatsApp Support
                </h3>
                <a href="https://wa.me/916389709762" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:underline">
                  Click to Chat Now
                </a>
              </div>
            </Card>

            <Card className="p-6 border border-white/5 bg-white/5 flex gap-4" interactive={false}>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-1">
                  Email Inquiry
                </h3>
                <a href="mailto:hello.mirextech@gmail.com?subject=Project%20Inquiry%20-%20MirexTech" className="text-xs text-cyan-400 hover:underline">
                  hello.mirextech@gmail.com
                </a>
              </div>
            </Card>

            <Card className="p-6 border border-white/5 bg-white/5 flex gap-4" interactive={false}>
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-1">
                  Direct Line
                </h3>
                <a href="tel:+916389709762" className="text-xs text-cyan-400 hover:underline">
                  +91 63897 09762
                </a>
              </div>
            </Card>

            <Card className="p-6 border border-white/5 bg-white/5 flex gap-4" interactive={false}>
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-1">
                  Location
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Kanpur Uttar Pradesh, India
                </p>
              </div>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border border-white/5 bg-white/5" interactive={false}>
              <h2 className="font-extrabold text-2xl text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>

              {status === "success" ? (
                <div className="text-center py-12 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-bold text-white mb-1">Message Sent Successfully</h4>
                  <p className="text-xs text-gray-400">
                    We will get back to your email inbox shortly. Thank you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                        {t("contact.name")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rahul Sharma"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                        {t("contact.email")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                      {t("contact.subject")}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Web development proposal"
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
                      {t("contact.message")} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {t("contact.error")}
                    </p>
                  )}

                  <Button type="submit" isLoading={isSubmitting} className="gap-2">
                    <Send className="w-4 h-4" />
                    {t("contact.send")}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* Mock Calendly Scheduler Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {/* Scheduling panel */}
          <Card className="lg:col-span-2 p-8 border border-white/5 bg-white/5 flex flex-col justify-between" interactive={false}>
            <div>
              <div className="flex items-center gap-2.5 text-cyan-400 mb-6">
                <Calendar className="w-5 h-5" />
                <h2 className="font-extrabold text-xl text-gray-900 dark:text-white">
                  Schedule Discovery Meeting
                </h2>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Choose a meeting date and time slot below. We will automatically generate a Google Meet calendar invite for the call.
              </p>

              {calendlyStatus === "success" ? (
                <div className="text-center py-10 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-bold text-white mb-2">Meeting Booked!</h4>
                  <p className="text-xs text-gray-400">
                    A calendar link has been sent to your email inbox. Let&apos;s sync!
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {/* Select Date */}
                  <div>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase mb-3">
                      1. Select Date
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d}
                          onClick={() => setSelectedDate(d)}
                          className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                            selectedDate === d
                              ? "border-cyan-400 bg-cyan-400/10 text-white"
                              : "border-white/5 bg-white/5 text-gray-400 hover:text-white"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time */}
                  <div>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase mb-3">
                      2. Select Time (IST)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {times.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                            selectedTime === t
                              ? "border-violet-400 bg-violet-400/10 text-white"
                              : "border-white/5 bg-white/5 text-gray-400 hover:text-white"
                          }`}
                        >
                          <span className="flex items-center justify-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-gray-500" />
                            {t}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleBookMeeting}
                    disabled={!selectedDate || !selectedTime}
                    className="w-full mt-4"
                  >
                    Confirm Meeting Slots
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {/* Styled Google Maps iframe card */}
          <div className="relative rounded-2xl overflow-hidden min-h-[300px] border border-white/10 dark:border-white/5 bg-gray-950">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112111.45524388657!2d77.30456121966144!3d28.535516138676233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a431281575%3A0xed0ad727baeb2aae!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(10%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MirexTech Noida Office Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
