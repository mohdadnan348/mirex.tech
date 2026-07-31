import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { texts } from '@/data/translationData';

const steps = [
  { key: 'step1', icon: '🔍' },
  { key: 'step2', icon: '📋' },
  { key: 'step3', icon: '🎨' },
  { key: 'step4', icon: '💻' },
  { key: 'step5', icon: '🧪' },
  { key: 'step6', icon: '🚀' },
  { key: 'step7', icon: '🛠️' },
];

export default function Process() {
  const { process } = texts;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            {process.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const key = step.key as keyof typeof process;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="text-sm font-medium text-cyan-400">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{process[key]}</h3>
                  <p className="text-muted-foreground text-sm">{process[(key + 'Desc') as keyof typeof process]}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}