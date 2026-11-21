import { motion } from 'framer-motion';
import {
  Sprout,
  Sun,
  Cpu,
  Truck,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

const caseStudies = [
  {
    icon: Sprout,
    industry: 'Spices Management',
    title: 'CRM for Spices & Food Business',
    description:
      'A business-focused CRM setup for managing customers, products, orders, sales activities, inventory and business reporting.',
    modules: [
      'Customer Management',
      'Product & Inventory',
      'Order Management',
      'Sales Tracking',
      'Billing & Reports',
    ],
  },
  {
    icon: Sun,
    industry: 'Solar Management',
    title: 'CRM for Solar Business',
    description:
      'A customized workflow for managing enquiries, customers, quotations, installations, follow-ups and service activities.',
    modules: [
      'Lead Management',
      'Customer Management',
      'Quotation Management',
      'Installation Tracking',
      'Follow-ups & Reports',
    ],
  },
  {
    icon: Cpu,
    industry: 'Global Chip Management',
    title: 'CRM for Global Chip Business',
    description:
      'A centralized business system for managing enquiries, customers, products, suppliers, quotations and international sales workflows.',
    modules: [
      'Enquiry Management',
      'Customer & Supplier Management',
      'Product Management',
      'Quotation Management',
      'Sales & Business Reports',
    ],
  },
  {
    icon: Truck,
    industry: 'Logistics & Transport',
    title: 'CRM for Logistics Business',
    description:
      'Connect customer management with quotations, bookings, shipments, documents, payments and operational activities.',
    modules: [
      'Customer Management',
      'Quotation Management',
      'Booking Management',
      'Shipment Tracking',
      'Documents & Billing',
    ],
  },
];

export default function CRMCaseStudies() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-400/5 blur-[110px] pointer-events-none" />

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
          <span className="inline-flex items-center px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium text-cyan-400 uppercase tracking-wider">
            CRM Use Cases
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="gradient-text">
              CRM Solutions for Real Business Workflows
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            From spices and solar to global chip trading and logistics, we
            customize CRM workflows around the requirements of different
            businesses.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-7 mt-12 md:mt-16">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.industry}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 to-violet-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

                <div className="relative h-full glass rounded-3xl border border-white/10 p-6 md:p-8 group-hover:border-cyan-400/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 border border-cyan-400/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>

                      <div>
                        <p className="text-xs text-cyan-400 uppercase tracking-wider">
                          {item.industry}
                        </p>

                        <h3 className="mt-1 text-lg md:text-xl font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="w-9 h-9 shrink-0 rounded-xl border border-white/10 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Modules */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                      Example CRM Modules
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {item.modules.map((module) => (
                        <div
                          key={module}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-cyan-400" />

                          <span className="text-sm text-muted-foreground">
                            {module}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CRM workflow overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 md:mt-14"
        >
          <div className="relative overflow-hidden glass rounded-3xl border border-cyan-400/10 p-7 md:p-9 text-center">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold">
                CRM workflows shaped around your business
              </h3>

              <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
                Businesses across different industries can use a CRM
                configured around their specific processes, teams and
                operational requirements.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {[
                  'Spices',
                  'Solar',
                  'Global Chip',
                  'Logistics',
                  'Trading',
                  'Manufacturing',
                  'Distribution',
                ].map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1.5 rounded-full text-xs border border-white/10 bg-white/[0.02] text-muted-foreground"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}