import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Smartphone, Workflow, Sparkles } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

const capabilities = [
  { icon: Code2, label: 'Web platforms' },
  { icon: Smartphone, label: 'Mobile apps' },
  { icon: Workflow, label: 'Business software' },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden px-4 pb-16 pt-28 md:min-h-[760px] md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.12)_1px,transparent_0)] [background-size:28px_28px] opacity-40" />
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
            <Sparkles className="h-4 w-4" /> Technology partner for growing businesses
          </div>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            We Build <span className="gradient-text">Digital Solutions</span> That Grow Your Business.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg lg:mx-0">
            MirexTech is a Kanpur-based software development company building business websites, eCommerce platforms, mobile apps, custom CRM/ERP systems and AI-powered workflows for businesses across India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link to="/contact"><AnimatedButton size="lg" variant="premium">Discuss Your Project <ArrowRight className="h-4 w-4" /></AnimatedButton></Link>
            <Link to="/projects"><AnimatedButton size="lg" variant="outline">Explore Our Work</AnimatedButton></Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground lg:justify-start">
            {capabilities.map(({ icon: Icon, label }) => <span key={label} className="inline-flex items-center gap-2"><Icon className="h-4 w-4 text-cyan-400" />{label}</span>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div>
              <span className="text-xs tracking-wide text-slate-400">MIREXTECH / DIGITAL WORKSPACE</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="grid grid-cols-2 gap-3 py-5">
              <div className="col-span-2 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-5">
                <p className="text-xs font-medium uppercase tracking-widest text-cyan-300">Build • Integrate • Grow</p>
                <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">One partner. <span className="text-cyan-300">Endless possibilities.</span></p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" /></div>
              </div>
              {[{ title: 'Web Development', value: 'Modern websites', icon: Code2 }, { title: 'Business Systems', value: 'CRM & ERP', icon: Workflow }, { title: 'Mobile Apps', value: 'iOS & Android', icon: Smartphone }, { title: 'AI Integration', value: 'Smarter workflows', icon: Sparkles }].map(({ title, value, icon: Icon }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><Icon className="h-5 w-5 text-violet-300"/><p className="mt-4 text-sm font-semibold text-white">{title}</p><p className="mt-1 text-xs text-slate-400">{value}</p></div>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"><span className="text-xs text-slate-400">Your next idea starts here</span><span className="text-xs font-semibold text-cyan-300">Let's build it <ArrowRight className="ml-1 inline h-3 w-3"/></span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
