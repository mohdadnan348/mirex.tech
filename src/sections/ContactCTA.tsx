import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { texts } from '@/data/translationData';

// Keep the existing website WhatsApp destination unchanged.
const phoneNumber = '919336176580';

export default function ContactCTA() {
  const { contact } = texts;
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <GlassCard className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] via-background to-violet-500/[0.08] p-8 text-center md:p-14">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px]" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">Have a project in mind?</span>
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold md:text-5xl">Let's build something <span className="gradient-text">that moves you forward.</span></h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">Tell us what you are trying to achieve. We'll help you explore a practical digital solution for your business.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact"><AnimatedButton size="lg" variant="premium">{contact.send} <ArrowRight className="h-4 w-4"/></AnimatedButton></Link>
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer"><AnimatedButton variant="outline" size="lg"><MessageCircle className="h-4 w-4"/>{contact.whatsapp}</AnimatedButton></a>
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}
