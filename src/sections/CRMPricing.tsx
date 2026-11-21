import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

const plans = [
  {
    name: 'Starter',
    price: '₹1,999',
    description: 'Essential CRM tools for small businesses starting to organize their operations.',
    features: [
      'Customer Management',
      'Lead Management',
      'Tasks & Follow-ups',
      'Basic Dashboard',
      'Basic Reports',
      'User Management',
      'Business-specific Configuration',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹2,999',
    description: 'Advanced CRM features for growing businesses and sales teams.',
    features: [
      'Everything in Starter',
      'Sales Pipeline',
      'Quotation Management',
      'Invoice Management',
      'Advanced Dashboard',
      'Advanced Reports',
      'WhatsApp / Email Integration',
      'More User & Role Controls',
    ],
    popular: true,
  },
  {
    name: 'Business',
    price: '₹5,999',
    description: 'A powerful CRM setup for established businesses with advanced requirements.',
    features: [
      'Everything in Professional',
      'Advanced Business Modules',
      'Custom Workflows',
      'Custom Fields',
      'Advanced Analytics',
      'Multiple Roles & Permissions',
      'Custom Integrations',
      'Priority Support',
    ],
    popular: false,
  },
  {
    name: 'Custom',
    price: 'Custom',
    description: 'A CRM designed specifically around your business process and requirements.',
    features: [
      'Custom CRM Modules',
      'Custom Business Workflow',
      'Custom Dashboard',
      'Custom Integrations',
      'Custom Branding',
      'Custom Roles & Permissions',
      'Custom Deployment',
      'Dedicated Requirements Discussion',
    ],
    popular: false,
  },
];

export default function CRMPricing() {
  return (
    <section
      id="crm-pricing"
      className="relative py-20 md:py-28 px-4 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium text-cyan-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Simple & Flexible Pricing
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="gradient-text">
              CRM Plans That Fit Your Business
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            Start with a monthly CRM plan or talk to us about building a
            permanent custom CRM specifically for your business.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 mt-12 md:mt-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
              className="relative group"
            >
              {/* Popular Glow */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-2xl" />
              )}

              <div
                className={`relative h-full flex flex-col glass rounded-3xl border p-6 md:p-7 transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.08)]'
                    : 'border-white/10 group-hover:border-cyan-400/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black text-xs font-semibold shadow-lg">
                      <Crown className="w-3.5 h-3.5" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold">{plan.name}</h3>

                  {plan.name === 'Custom' && (
                    <span className="text-xs px-2.5 py-1 rounded-full border border-violet-400/20 bg-violet-400/5 text-violet-400">
                      Tailored
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mt-5 flex items-end gap-1.5">
                  <span className="text-3xl md:text-4xl font-bold gradient-text">
                    {plan.price}
                  </span>

                  {plan.price !== 'Custom' && (
                    <span className="text-sm text-muted-foreground pb-1">
                      / month
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-4 min-h-[72px] text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-white/10 my-6" />

                {/* Features */}
                <div className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <div className="w-5 h-5 shrink-0 rounded-full bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>

                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-7">
                  {plan.name === 'Custom' ? (
                    <Link to="/contact" className="block">
                      <AnimatedButton
                        variant="outline"
                        className="w-full justify-center"
                      >
                        Talk to Expert
                        <ArrowRight className="w-4 h-4" />
                      </AnimatedButton>
                    </Link>
                  ) : (
                    <Link to="/contact" className="block">
                      <AnimatedButton
                        variant={plan.popular ? 'premium' : 'outline'}
                        className="w-full justify-center"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </AnimatedButton>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="max-w-3xl mx-auto text-xs md:text-sm text-muted-foreground leading-relaxed">
            Final pricing may vary depending on the number of users, required
            modules, integrations, customization and business requirements.
          </p>
        </motion.div>

        {/* Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8"
        >
          <div className="relative max-w-4xl mx-auto glass rounded-3xl border border-cyan-400/10 p-6 md:p-8 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <h3 className="text-xl md:text-2xl font-bold">
              Not Sure Which Plan You Need?
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your business. We’ll discuss your workflow and walk through
              relevant CRM modules.
            </p>

            <div className="mt-5 flex justify-center">
              <Link to="/contact">
                <AnimatedButton variant="premium">
                  Discuss Your Requirements
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}