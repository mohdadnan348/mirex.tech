import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarCheck,
  Clock3,
  MessageSquareText,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

export default function CRMDemoCTA() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="absolute top-0 left-0 w-[250px] h-[250px] rounded-full bg-violet-500/5 blur-[100px]" />

        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full bg-cyan-400/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-[2rem] border border-cyan-400/15 overflow-hidden"
        >
          {/* Top Gradient Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 p-7 sm:p-10 md:p-14">
            {/* Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/5 border border-cyan-400/15"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />

                <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                  Personalized CRM Demo
                </span>
              </motion.div>

              {/* Heading */}
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="gradient-text">
                  Let's Build a CRM Around Your Business
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Tell us how your business works and what you need to manage.
                We'll understand your requirements and demonstrate how our CRM
                can fit your workflow.
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mt-7">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center">
                    <Clock3 className="w-5 h-5 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      30-Minute Demo
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      A personalized walkthrough based on your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-violet-400/10 border border-violet-400/10 flex items-center justify-center">
                    <MessageSquareText className="w-5 h-5 text-violet-400" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Business Discussion
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Discuss your workflow, modules and requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Flexible Scheduling
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Choose a suitable date and time for your demo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-violet-400/10 border border-violet-400/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-violet-400" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Custom Solution
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Monthly plans or permanent custom CRM solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <AnimatedButton variant="premium" size="lg">
                    Book 30-Min Demo
                    <ArrowRight className="w-4 h-4" />
                  </AnimatedButton>
                </Link>

                <Link to="/contact">
                  <AnimatedButton variant="outline" size="lg">
                    Talk to CRM Expert
                  </AnimatedButton>
                </Link>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Tell us about your business and we'll help identify the right
                CRM approach for your requirements.
              </p>
            </div>

            {/* Right Side - Demo Card */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="w-full rounded-3xl bg-white/[0.02] border border-white/10 p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 border border-cyan-400/15 flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5 text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Schedule Your
                    </p>

                    <h3 className="text-lg font-semibold">
                      CRM Demo
                    </h3>
                  </div>
                </div>

                {/* Demo Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-sm text-muted-foreground">
                      Duration
                    </span>

                    <span className="text-sm font-medium text-cyan-400">
                      30 Minutes
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-sm text-muted-foreground">
                      Demo Type
                    </span>

                    <span className="text-sm font-medium">
                      Personalized
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-sm text-muted-foreground">
                      CRM Model
                    </span>

                    <span className="text-sm font-medium">
                      Monthly / Permanent
                    </span>
                  </div>
                </div>

                {/* Demo Steps */}
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    What we'll discuss
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      'Your business workflow',
                      'Required CRM modules',
                      'Team & user requirements',
                      'Integrations & customization',
                      'Suitable CRM plan',
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 shrink-0 rounded-full bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center">
                          <span className="text-[10px] text-cyan-400 font-semibold">
                            {index + 1}
                          </span>
                        </div>

                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-violet-500/5 border border-cyan-400/10">
                  <p className="text-sm font-medium">
                    Ready to get started?
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Book a personalized demo and see how your business can be
                    managed with a customized CRM.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}