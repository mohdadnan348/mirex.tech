import { motion } from 'framer-motion';
import {
  MessageSquareText,
  Presentation,
  Settings2,
  Rocket,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquareText,
    title: 'Tell Us About Your Business',
    description:
      'Share your business type, current workflow, team structure and the challenges you want your CRM to solve.',
  },
  {
    number: '02',
    icon: Presentation,
    title: 'Get a 30-Minute Demo',
    description:
      'We understand your requirements and demonstrate how the CRM can fit your business workflow in a personalized demo.',
  },
  {
    number: '03',
    icon: Settings2,
    title: 'Customize Your CRM',
    description:
      'We configure the required modules, roles, workflows, dashboards and integrations according to your requirements.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Start Managing',
    description:
      'Once everything is ready, your CRM is set up for your team so you can start managing your business from one place.',
  },
];

export default function CRMProcess() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium text-cyan-400 uppercase tracking-wider">
            Simple Process
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="gradient-text">
              From Business Requirement to CRM
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            We keep the process simple. Tell us how your business works, get a
            personalized demo and let us build the CRM around your workflow.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mt-14 md:mt-20">
          {/* Desktop Connector */}
          <div className="hidden lg:block absolute top-[42px] left-[12%] right-[12%] h-px bg-gradient-to-r from-cyan-400/10 via-cyan-400/30 to-violet-500/10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative group"
                >
                  {/* Step Number */}
                  <div className="relative z-10 mx-auto w-[84px] h-[84px] rounded-full glass border border-cyan-400/20 flex items-center justify-center bg-background/80">
                    <div className="w-[62px] h-[62px] rounded-full bg-gradient-to-br from-cyan-400/10 to-violet-500/10 border border-cyan-400/10 flex flex-col items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />

                      <span className="text-[10px] font-semibold text-muted-foreground mt-1">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="mt-6 h-full glass rounded-3xl border border-white/10 p-6 text-center group-hover:border-cyan-400/20 transition-all duration-300">
                    <h3 className="text-lg md:text-xl font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile / Tablet Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex lg:hidden justify-center my-4">
                      <ArrowRight className="w-5 h-5 text-cyan-400/40 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-5 py-3 rounded-2xl glass border border-violet-400/10 text-center">
            <span className="text-sm text-muted-foreground">
              Have a unique workflow?
            </span>

            <span className="text-sm font-medium text-cyan-400">
              We can customize the CRM around it.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}