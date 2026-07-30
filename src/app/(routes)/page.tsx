"use client";

import React from "react";
import Hero from "@/sections/Hero";
import TrustedBy from "@/sections/TrustedBy";
import ServicesSection from "@/sections/ServicesSection";
import IndustriesSection from "@/sections/IndustriesSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ProcessSection from "@/sections/ProcessSection";
import WhyChooseSection from "@/sections/WhyChooseSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FAQSection from "@/sections/FAQSection";
import CTASection from "@/sections/CTASection";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <IndustriesSection />
      <ProjectsSection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
