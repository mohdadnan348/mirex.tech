import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { texts } from '@/data/translationData';

const stats = [
  { key: 'delivery', icon: '🚀' },
  { key: 'uptime', icon: '⚡' },
  { key: 'ui', icon: '🎨' },
  { key: 'security', icon: '🔒' },
  { key: 'pricing', icon: '💰' },
  { key: 'support', icon: '💬' },
];

export default function Statistics() {
  const { stats: statsText } = texts;

  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Why Work With Us?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional quality and value across every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-xl font-bold">
                  {statsText[stat.key as keyof typeof statsText]}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {statsText[(stat.key + 'Desc') as keyof typeof statsText]}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}