import { motion } from 'framer-motion';
import {
  Factory,
  Sun,
  Cpu,
  Truck,
  Package,
  ShoppingCart,
  Warehouse,
  BriefcaseBusiness,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    icon: Factory,
    title: 'Spices Management',
    description:
      'Manage customers, orders, inventory, sales, billing and business operations from one centralized CRM.',
  },
  {
    icon: Sun,
    title: 'Solar Management',
    description:
      'Manage leads, customers, quotations, installations, follow-ups, payments and service operations.',
  },
  {
    icon: Cpu,
    title: 'Global Chip Management',
    description:
      'Manage suppliers, customers, products, enquiries, quotations, orders and international business workflows.',
  },
  {
    icon: Truck,
    title: 'Logistics & Transport',
    description:
      'Manage customers, shipments, bookings, quotations, documents, payments and logistics operations.',
  },
  {
    icon: Package,
    title: 'Manufacturing',
    description:
      'Connect customers, sales, production, inventory, orders and reporting into one business system.',
  },
  {
    icon: ShoppingCart,
    title: 'Trading & Distribution',
    description:
      'Manage products, customers, orders, sales teams, inventory, invoices and business performance.',
  },
  {
    icon: Warehouse,
    title: 'Warehouse Management',
    description:
      'Manage warehouses, customers, inventory, inward, outward, stock movement and operational reports.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Service Businesses',
    description:
      'Build a customized CRM for your service workflow, customers, appointments, tasks and team management.',
  },
];

export default function CRMIndustries() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-400/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium text-cyan-400 uppercase tracking-wider">
            Business-Specific CRM
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="gradient-text">
              CRM for Different Types of Businesses
            </span>
          </h2>

          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            Every business has a different workflow. We customize CRM
            solutions around your industry, operations, team and business
            requirements.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-12 md:mt-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -6 }}
                className="group relative h-full"
              >
                {/* Card Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-violet-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                {/* Card */}
                <div className="relative h-full glass rounded-3xl border border-white/10 p-6 md:p-7 transition-all duration-300 group-hover:border-cyan-400/20">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 border border-cyan-400/10 flex items-center justify-center group-hover:border-cyan-400/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-300">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Learn More */}
                  <div className="flex items-center gap-1.5 mt-5 text-xs font-medium text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity">
                    Customized Solution
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 md:mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-5 py-3 rounded-2xl glass border border-violet-400/10">
            <span className="text-sm text-muted-foreground">
              Don't see your business?
            </span>

            <span className="text-sm font-medium text-cyan-400">
              We can customize a CRM around your workflow.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}