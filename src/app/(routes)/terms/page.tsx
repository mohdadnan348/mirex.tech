"use client";

import React from "react";
import Card from "@/components/ui/Card";

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        <p className="text-xs text-gray-400 mb-8">Last Updated: July 2026</p>

        <Card className="p-8 border border-white/5 bg-white/5 space-y-6" interactive={false}>
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">1. Service Agreement</h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              MirexTech delivers custom frontend code, backend services, and marketing campaigns using an agile sprint timeline. Scope of work is defined in client-approved proposals prior to starting sprints.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">2. Code & Repository Ownership</h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              MirexTech grants 100% intellectual property ownership, repository access, and licensing rights of the final code to the client once the invoice balance is cleared.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">3. Third Party Integrations</h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Any integration fees (such as OpenAI api tokens, Gemini keys, domain purchases, AWS hosting billing, or Meta advertising spends) are billed directly to the client account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">4. Cancellation & Support</h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Maintenance packages run month-to-month and can be terminated with a 15-day notice. Support is offered 24/7 via WhatsApp and email systems.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
