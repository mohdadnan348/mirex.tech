import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { ArrowRight, Sparkles, Users } from 'lucide-react';

export default function CRMHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full bg-violet-500/5 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-cyan-400/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-400/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />

              <span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">
                Business CRM Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08]">
              <span className="gradient-text">
                CRM Built Around Your Business
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We build and customize CRM solutions according to the way your
              business works — from customer management and sales to operations,
              billing, reports and business automation.
            </p>

            <p className="mt-6 text-sm text-muted-foreground">Designed for sales teams, service providers and operations-led businesses.</p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
            >
              <Link to="/contact">
                <AnimatedButton size="lg" variant="premium">
                  Discuss Your CRM
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>

              <a href="#crm-pricing">
                <AnimatedButton size="lg" variant="outline">
                  View CRM Plans
                </AnimatedButton>
              </a>
            </motion.div>

            {/* Small Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-5 text-xs text-muted-foreground"
            >
              Monthly and custom implementation options can be discussed.
            </motion.p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: 'easeOut',
            }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main CRM Dashboard Card */}
            <div className="relative w-full max-w-[520px]">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-violet-500/10 rounded-3xl blur-3xl" />

              <div className="relative glass rounded-3xl border border-white/10 p-5 md:p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div>
                    <p className="text-xs text-cyan-400 uppercase tracking-wider">
                      Business CRM
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-1">
                      Dashboard
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                <p className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">Illustrative CRM interface · modules shown as examples</p>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {[
                    ['Customers', 'Customer records and history'],
                    ['Active leads', 'Enquiry and follow-up pipeline'],
                    ['Invoices', 'Billing and payment records'],
                    ['Tasks', 'Team activities and reminders'],
                  ].map(([label, description]) => (
                    <div key={label} className="rounded-2xl bg-white/[0.03] border border-white/5 p-4">
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium mt-2">{description}</p>
                    </div>
                  ))}
                </div>

                {/* CRM Modules */}
                <div className="mt-5">
                  <p className="text-sm font-medium mb-3">
                    Business Modules
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      'Customers',
                      'Leads',
                      'Sales',
                      'Invoices',
                      'Inventory',
                      'Reports',
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full text-xs bg-cyan-400/5 border border-cyan-400/10 text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-violet-500/10 border border-cyan-400/10">
                  <p className="text-sm font-medium">
                    Built for your workflow
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    Customize modules, workflows and features according to
                    your business requirements.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}