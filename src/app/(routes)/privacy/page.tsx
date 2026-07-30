"use client";

import React from "react";
import Card from "@/components/ui/Card";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-400 mb-8">Last Updated: July 2026</p>

        <Card className="p-8 border border-white/5 bg-white/5 space-y-6" interactive={false}>
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              We collect information you provide directly to us when filling out our contact forms, custom quote request forms, and newsletter forms (such as name, email address, budget estimates, and project requirements).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">2. How We Use Information</h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              We use the collected information to respond to inquiries, send pricing quotes, optimize our web application performance, and run targeted SMM campaigns through Meta and Google Ads.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">3. Data Security & Storage</h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              We execute security checks utilizing encrypted databases, JSON Web Tokens (JWT), and SSL certificates. We never sell your personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">4. Your Data Rights</h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              You can request to delete or modify your contact information from our databases at any time by mailing Mohd Adnan at hello.mirextech@gmail.com.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
