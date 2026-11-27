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
        <title>MirexTech | Website, App & Custom Software Development in Kanpur</title>

        <meta
          name="description"
          content="MirexTech is a software development company in Kanpur, India. We build business websites, eCommerce platforms, mobile apps, custom CRM/ERP software and AI automation."
        />

        <link rel="canonical" href="https://mirextech.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MirexTech" />
        <meta property="og:title" content="MirexTech | Website, App & Custom Software Development" />
        <meta property="og:description" content="Website development, mobile apps, custom CRM/ERP software and AI automation from MirexTech, Kanpur, India." />
        <meta property="og:url" content="https://mirextech.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://mirextech.in/#organization",
              "name": "MirexTech",
              "url": "https://mirextech.in/",
              "email": "hello.mirextech@gmail.com",
              "telephone": "+91 9336176580",
              "description": "Software development company providing website development, mobile applications, custom business software, CRM, ERP and AI integration.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kanpur",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
              },
              "areaServed": [
                { "@type": "City", "name": "Kanpur" },
                { "@type": "AdministrativeArea", "name": "Uttar Pradesh" },
                { "@type": "Country", "name": "India" }
              ],
              "knowsAbout": [
                "Website development",
                "E-commerce development",
                "Mobile app development",
                "Custom software development",
                "Customer relationship management software",
                "Enterprise resource planning software",
                "Artificial intelligence integration",
                "Business process automation"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://mirextech.in/#website",
              "url": "https://mirextech.in/",
              "name": "MirexTech",
              "publisher": { "@id": "https://mirextech.in/#organization" },
              "inLanguage": "en-IN"
            }
          ]
        })}</script>
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