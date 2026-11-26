import { motion } from 'framer-motion';
import { ArrowUpRight, Sun, GraduationCap, Truck, ShoppingBag, Building2, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  { title: 'Solar & Renewable Energy', description: 'Lead tracking, quotations, customer records and installation workflows.', icon: Sun },
  { title: 'Education', description: 'School administration, student information and academic management systems.', icon: GraduationCap },
  { title: 'Logistics & Transport', description: 'Digital experiences for shipment enquiries, bookings and operational workflows.', icon: Truck },
  { title: 'Retail & Wholesale', description: 'Product catalogues, order flows, inventory and customer management.', icon: ShoppingBag },
  { title: 'Real Estate & Property', description: 'Enquiry management, follow-ups and custom business workflow platforms.', icon: Building2 },
  { title: 'Service Businesses', description: 'Appointments, customer records, team tasks and service operations.', icon: Stethoscope },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-background/50 px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Industries we work with</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Technology shaped around <span className="gradient-text">your industry.</span></h2>
          <p className="mt-5 leading-7 text-muted-foreground">We learn how your business works first, then build digital tools around the processes that matter to your team.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, description, icon: Icon }, index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.045]">
              <div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300"><Icon className="h-5 w-5"/></div><ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-cyan-300"/></div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-9 text-center text-sm text-muted-foreground">Have a different business model? <Link to="/contact" className="font-semibold text-cyan-300 hover:underline">Let's discuss a custom solution.</Link></p>
      </div>
    </section>
  );
}
