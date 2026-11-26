import { Helmet } from "react-helmet-async";

import Hero from "@/sections/Hero";
import TrustedTechnologies from "@/sections/TrustedTechnologies";
import ServicesSection from "@/sections/ServicesSection";
import WhyChoose from "@/sections/WhyChoose";
import Process from "@/sections/Process";
import FeaturedProjects from "@/sections/FeaturedProjects";
import IndustriesSection from "@/sections/IndustriesSection";

import CRMHero from "@/sections/CRMHero";

import PricingSection from "@/sections/PricingSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FAQSection from "@/sections/FAQSection";
import ContactCTA from "@/sections/ContactCTA";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MirexTech | Software Development Company in Kanpur, India</title>

        <meta
          name="description"
          content="MirexTech develops business websites, custom software, ERP/CRM platforms, mobile apps and AI automation for businesses in Kanpur and across India."
        />

        <link rel="canonical" href="https://mirextech.in/" />
      </Helmet>

      <div className={styles.home}>
        <Hero />
        <TrustedTechnologies />
        <ServicesSection />
        <FeaturedProjects />
        <IndustriesSection />
        <WhyChoose />
        <Process />
        <CRMHero />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactCTA />
      </div>
    </>
  );
}