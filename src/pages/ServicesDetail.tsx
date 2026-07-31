import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { servicesData } from '@/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { ArrowLeft, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function ServicesDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData
    .flatMap(c => c.items)
    .find(s => s.slug === slug);

  if (!service) {
    return <div className="py-20 text-center">Service not found</div>;
  }

  const getIcon = (name: string) => {
    const Icon = (LucideIcons as any)[name];
    return Icon ? <Icon className="w-12 h-12 text-violet-400" /> : null;
  };

  return (
    <>
      <Helmet>
        <title>{service.name} – MirexTech</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            {getIcon(service.icon)}
            <h1 className="text-3xl md:text-5xl font-bold">{service.name}</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-8">{service.longDesc}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-violet-400">Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact">
              <AnimatedButton size="lg">Get Started with {service.name}</AnimatedButton>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}