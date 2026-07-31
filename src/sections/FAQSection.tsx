import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { ChevronDown } from 'lucide-react';
import { texts } from '@/data/translationData';

const faqs = [
  { q: 'q1', a: 'a1' },
  { q: 'q2', a: 'a2' },
  { q: 'q3', a: 'a3' },
  { q: 'q4', a: 'a4' },
];

export default function FAQSection() {
  const { faq } = texts;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            {faq.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <GlassCard key={idx} className="p-0 overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium">{faq[item.q as keyof typeof faq]}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-muted-foreground">{faq[item.a as keyof typeof faq]}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}