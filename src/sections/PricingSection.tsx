import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Check } from 'lucide-react';
import { pricingPlans } from '@/data/pricingData';

export default function PricingSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-500 mb-3">Transparent scope</p>
          <h2 className="text-3xl md:text-5xl font-bold">Solutions scoped to your business</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Every project is quoted around its requirements, integrations and delivery scope. No surprise assumptions or one-size-fits-all promises.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div key={plan.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }}>
              <GlassCard className="h-full p-6 flex flex-col">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 min-h-12">{plan.summary}</p>
                <p className="mt-5 text-2xl font-bold text-cyan-500">{plan.priceLabel}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.inclusions.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /><span>{feature}</span></li>)}
                </ul>
                <p className="mt-5 text-xs text-muted-foreground">{plan.note}</p>
                <Link to={`/contact?service=${encodeURIComponent(plan.name)}`} className="mt-6">
                  <AnimatedButton className="w-full">Get a custom quote</AnimatedButton>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
