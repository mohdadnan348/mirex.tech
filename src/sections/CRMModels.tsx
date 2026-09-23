import { motion } from 'framer-motion';
import {
  Repeat,
  Building2,
  Check,
  Cloud,
  RefreshCw,
  Palette,
  Workflow,
  Rocket,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

const models = [
  {
    icon: Repeat,
    title: 'Monthly CRM',
    subtitle: 'Flexible Subscription',
    description:
      'Get a ready-to-use CRM configured around your business and pay monthly according to the plan you choose.',
    price: 'Starting at ₹1,999/month',
    features: [
      'Cloud-based CRM',
      'Business-specific configuration',
      'Regular updates',
      'User & role management',
      'Reports & dashboards',
      'Ongoing support',
    ],
    button: 'Explore Monthly Plans',
    variant: 'premium' as const,
  },
  {
    icon: Building2,
    title: 'Permanent CRM',
    subtitle: 'One-Time Custom Solution',
    description:
      'Get a CRM developed specifically for your business with custom modules, workflows, branding and deployment.',
    price: 'Custom One-Time Pricing',
    features: [
      'Custom CRM development',
      'Custom business workflows',
      'Custom modules & fields',
      'Your branding & identity',
      'Custom integrations',
      'Deployment according to requirements',
    ],
    button: 'Build My CRM',
    variant: 'outline' as const,
  },
];

const benefits = [
  {
    icon: Cloud,
    title: 'Cloud Access',
    description:
      'Access your business CRM from anywhere with a suitable internet connection.',
  },
  {
    icon: RefreshCw,
    title: 'Regular Improvements',
    description:
      'Monthly CRM customers can receive ongoing improvements and updates according to the selected plan.',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description:
      'Permanent CRM solutions can be designed around your business identity and branding requirements.',
  },
  {
    icon: Workflow,
    title: 'Custom Workflows',
    description:
      'Configure processes according to the way your team actually works.',
  },
  {
    icon: Rocket,
    title: 'Business Ready',
    description:
      'Move from requirements to a structured CRM solution designed for your operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Controlled Access',
    description:
      'Define roles and permissions according to your business team structure.',
  },
];

export default function CRMModels() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-400/5 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[350px] h-[350px] rounded-full bg-violet-500/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full glass border border-violet-400/20 text-xs font-medium text-violet-400 uppercase tracking-wider">
            Flexible CRM Models
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="gradient-text">
              Choose What Works for Your Business
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            Whether you need a flexible monthly CRM or a permanent custom
            solution, we can build the right setup around your business
            requirements.
          </p>
        </motion.div>

        {/* Models */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16 max-w-5xl mx-auto">
          {models.map((model, index) => {
            const Icon = model.icon;

            return (
              <motion.div
                key={model.title}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="relative group"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 to-violet-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

                <div className="relative h-full glass rounded-3xl border border-white/10 p-7 md:p-9 group-hover:border-cyan-400/20 transition-all duration-300">
                  {/* Icon + Title */}
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 border border-cyan-400/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>

                      <h3 className="mt-5 text-2xl font-bold">
                        {model.title}
                      </h3>

                      <p className="mt-1 text-sm text-cyan-400">
                        {model.subtitle}
                      </p>
                    </div>

                    <div className="hidden sm:block px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-muted-foreground">
                      {index === 0 ? 'Flexible' : 'Custom'}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {model.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 py-4 px-4 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-violet-500/5 border border-white/5">
                    <p className="text-sm text-muted-foreground">
                      Pricing
                    </p>

                    <p className="mt-1 text-lg md:text-xl font-semibold gradient-text">
                      {model.price}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-3">
                    {model.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 shrink-0 rounded-full bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-cyan-400" />
                        </div>

                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link to="/contact" className="block">
                      <AnimatedButton
                        variant={model.variant}
                        className="w-full justify-center"
                      >
                        {model.button}
                        <ArrowRight className="w-4 h-4" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-16 md:mt-20"
        >
          <div className="text-center">
            <p className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
              Why Choose Our CRM
            </p>

            <h3 className="mt-3 text-2xl md:text-3xl font-bold">
              Built Around Your Business
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="glass rounded-2xl border border-white/10 p-5 md:p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  <h4 className="mt-4 font-semibold">
                    {benefit.title}
                  </h4>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}