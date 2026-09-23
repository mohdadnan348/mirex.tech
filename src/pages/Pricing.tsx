import { Helmet } from "react-helmet-async";

import PricingSection from "@/sections/PricingSection";
import CRMPricing from "@/sections/CRMPricing";

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing – MirexTech</title>

        <meta
          name="description"
          content="Flexible pricing plans for web development, AI solutions, digital marketing services, and customizable CRM solutions."
        />
      </Helmet>

      <div className="py-20">
        {/* Existing Services Pricing */}
        <PricingSection />

        {/* CRM Pricing */}
        <CRMPricing />
      </div>
    </>
  );
}