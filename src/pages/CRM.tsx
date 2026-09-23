import CRMHero from "@/sections/CRMHero";
import CRMIndustries from "@/sections/CRMIndustries";
import CRMFeatures from "@/sections/CRMFeatures";
import CRMPricing from "@/sections/CRMPricing";
import CRMModels from "@/sections/CRMModels";
import CRMProcess from "@/sections/CRMProcess";
import CRMCaseStudies from "@/sections/CRMCaseStudies";
import CRMDemoCTA from "@/sections/CRMDemoCTA";

const CRM = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* CRM Hero */}
      <CRMHero />

      {/* Industries / Business Types */}
      <CRMIndustries />

      {/* CRM Features */}
      <CRMFeatures />

      {/* Monthly Pricing */}
      <CRMPricing />

      {/* Monthly vs Permanent CRM */}
      <CRMModels />

      {/* CRM Development Process */}
      <CRMProcess />

      {/* Business Use Cases / Case Studies */}
      <CRMCaseStudies />

      {/* 30 Minute Demo CTA */}
      <CRMDemoCTA />
    </main>
  );
};

export default CRM;