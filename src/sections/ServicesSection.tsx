import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '@/data/servicesData';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import * as LucideIcons from 'lucide-react';

export default function ServicesSection() {
  const getIcon = (name: string) => {
    const Icon = (LucideIcons as any)[name];
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  const featuredServices = servicesData.flatMap(c => c.items).slice(0, 6);

  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to power your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full p-6 flex flex-col hover:border-cyan-400/30 transition-colors">
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

        <div className="text-center mt-10">
          <Link to="/services">
            <AnimatedButton variant="ghost" size="lg">View All Services →</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}