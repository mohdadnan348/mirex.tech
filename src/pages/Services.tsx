import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '@/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import * as LucideIcons from 'lucide-react';

export default function Services() {
  const getIcon = (name: string) => {
    const Icon = (LucideIcons as any)[name];
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  return (
    <>
      <Helmet>
        <title>Our Services – MirexTech</title>
        <meta name="description" content="Explore MirexTech's services: website development, mobile apps, AI chatbots, ERP, CRM, SEO, and more." />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We offer end-to-end solutions to bring your digital vision to life.
          </p>
        </div>

        {servicesData.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-cyan-400">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full p-6 flex flex-col">
                    <div className="text-violet-400 mb-3">{getIcon(service.icon)}</div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{service.shortDesc}</p>
                    <Link to={`/services/${service.slug}`} className="mt-4">
                      <AnimatedButton variant="outline" size="sm" className="w-full">
                        Learn More →
                      </AnimatedButton>
                    </Link>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}