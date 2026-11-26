import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Smartphone, PanelsTopLeft, BrainCircuit } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

const serviceCards = [
  { title: 'Web Development', description: 'Business websites, e-commerce stores and scalable web applications built around your customers and goals.', icon: Code2, tags: ['Business websites', 'E-commerce', 'Web applications'], href: '/services/website-development' },
  { title: 'Mobile App Development', description: 'Cross-platform Android and iOS applications with intuitive interfaces and reliable backend integrations.', icon: Smartphone, tags: ['Android & iOS', 'React Native', 'App integrations'], href: '/services/mobile-apps' },
  { title: 'Custom Business Software', description: 'Purpose-built CRM, ERP and management platforms to connect teams, data and day-to-day operations.', icon: PanelsTopLeft, tags: ['CRM & ERP', 'Dashboards', 'Role-based access'], href: '/services/crm' },
  { title: 'AI & Automation', description: 'Practical AI integrations and workflow automation that help reduce repetitive work and connect systems.', icon: BrainCircuit, tags: ['AI assistants', 'LLM integration', 'Workflow automation'], href: '/services/ai-chatbots' },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-background/50 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">What we do</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Technology services built around <span className="gradient-text">your business.</span></h2>
          <p className="mt-5 leading-7 text-muted-foreground">Get the right mix of design, development and integration—from your first website to a complete business platform.</p>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map(({ title, description, icon: Icon, tags, href }, index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.045]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"><Icon className="h-6 w-6"/></div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted-foreground">{tag}</span>)}</div>
              <Link to={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">Explore service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center"><Link to="/services"><AnimatedButton variant="outline" size="lg">View All Services <ArrowUpRight className="h-4 w-4"/></AnimatedButton></Link></div>
      </div>
    </section>
  );
}
