import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Check } from 'lucide-react';
import { texts } from '@/data/translationData';

const plans = [
  {
    id: 'starter',
    titleKey: 'starter',
    descKey: 'starterDesc',
    price: '₹3,999',
    period: 'one-time',
    features: [
      '3-page website',
      'Responsive design',
      'Contact form',
      'Basic SEO',
      '1 month support',
    ],
  },
  {
    id: 'business',
    titleKey: 'business',
    descKey: 'businessDesc',
    price: '₹9,999',
    period: 'one-time',
    features: [
      '5-page website',
      'CMS integration',
      'Advanced SEO',
      'Email marketing setup',
      '3 months support',
    ],
  },
  {
    id: 'enterprise',
    titleKey: 'enterprise',
    descKey: 'enterpriseDesc',
    price: '₹19,999+',
    period: 'custom',
    features: [
      'Full custom development',
      'AI integration',
      'Scalable backend',
      'Ongoing support',
      'Dedicated team',
    ],
  },
];

export default function PricingSection() {
  const { pricing } = texts;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            {pricing.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard
                className={`h-full p-6 flex flex-col ${
                  plan.id === 'business' ? 'border-cyan-400/50' : ''
                }`}
              >
                <h3 className="text-2xl font-bold">
                  {pricing[plan.titleKey as keyof typeof pricing]}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {pricing[plan.descKey as keyof typeof pricing]}
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period !== 'custom' && (
                    <span className="text-sm text-muted-foreground">
                      {' '}
                      / {plan.period}
                    </span>
                  )}
                </div>
                <ul className="mt-6 space-y-2 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 w-full">
                  <AnimatedButton className="w-full">
                    {plan.id === 'enterprise'
                      ? pricing.request
                      : pricing.choose}
                  </AnimatedButton>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}