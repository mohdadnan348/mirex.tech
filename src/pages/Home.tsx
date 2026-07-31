import { Helmet } from 'react-helmet-async';
import Hero from '@/sections/Hero';
import TrustedTechnologies from '@/sections/TrustedTechnologies';
import ServicesSection from '@/sections/ServicesSection';
import WhyChoose from '@/sections/WhyChoose';
import Statistics from '@/sections/Statistics';
import Process from '@/sections/Process';
import FeaturedProjects from '@/sections/FeaturedProjects';
import PricingSection from '@/sections/PricingSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import FAQSection from '@/sections/FAQSection';
import ContactCTA from '@/sections/ContactCTA';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MirexTech – Premium AI Software Agency</title>
        <meta name="description" content="MirexTech builds AI-powered software, websites, mobile apps, and automation solutions for modern businesses. Get a free consultation today." />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className={styles.home}>
        <Hero />
        <TrustedTechnologies />
        <ServicesSection />
        <WhyChoose />
        <Statistics />
        <Process />
        <FeaturedProjects />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactCTA />
      </div>
    </>
  );
}