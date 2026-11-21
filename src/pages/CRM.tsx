import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Custom CRM Development | MirexTech</title>
        <meta name="description" content="Explore custom CRM software for lead management, quotations, invoices, employee workflows, inventory and business reporting. Discuss a CRM built around your operations." />
        <link rel="canonical" href="https://mirextech.in/crm" />
      </Helmet>
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

      {/* Project enquiry CTA */}
      <CRMDemoCTA />
      </main>
    </>
  );
};

export default CRM;