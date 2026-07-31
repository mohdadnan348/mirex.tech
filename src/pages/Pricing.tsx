import { Helmet } from 'react-helmet-async';
import PricingSection from '@/sections/PricingSection';

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing – MirexTech</title>
        <meta name="description" content="Flexible pricing plans for web development, AI solutions, and digital marketing services." />
      </Helmet>
      <div className="py-20">
        <PricingSection />
      </div>
    </>
  );
}