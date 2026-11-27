import { Helmet } from "react-helmet-async";

import PricingSection from "@/sections/PricingSection";
import CRMPricing from "@/sections/CRMPricing";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing – MirexTech</title>

        <meta
          name="description"
          content="Flexible pricing plans for web development, AI solutions, digital marketing services, and customizable CRM solutions."
        />
              <link rel="canonical" href="https://mirextech.in/pricing" />
</Helmet>

      <div className="py-20">
        <section className="mx-auto max-w-5xl px-4 pb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-500">Custom project quotation</p>
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">Clear scope. A quote built around your needs.</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">Choose a starting point below or tell us about your requirements. We’ll review the scope, features, integrations and delivery expectations before preparing a tailored proposal.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact?service=Custom%20Software&budget=Need%20guidance" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">Request a custom quote</Link>
            <a href="#crm-pricing" className="rounded-full border border-border px-6 py-3 font-semibold hover:border-cyan-400">View CRM plans</a>
          </div>
        </section>
        {/* Existing Services Pricing */}
        <PricingSection />

        {/* CRM Pricing */}
        <CRMPricing />
      </div>
    </>
  );
}