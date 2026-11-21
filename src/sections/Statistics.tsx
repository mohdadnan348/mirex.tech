import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

const capabilities = [
  { icon: '🧩', title: 'End-to-end delivery', description: 'From requirements and architecture through development and deployment.' },
  { icon: '🔐', title: 'Role-based systems', description: 'Authentication, permissions, and dashboards tailored to different users.' },
  { icon: '📱', title: 'Responsive products', description: 'Web experiences and cross-platform mobile application development.' },
  { icon: '🔗', title: 'Business integrations', description: 'Connect APIs, payment providers, messaging tools, and cloud services.' },
  { icon: '🤖', title: 'AI-enabled workflows', description: 'LLM integrations, assistants, and automation where they add practical value.' },
  { icon: '🛠️', title: 'Production support', description: 'Deployment assistance, troubleshooting, and agreed post-launch support.' },
];

export default function Statistics() {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Capabilities built for real operations</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Practical engineering across the complete product lifecycle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} viewport={{ once: true }}>
              <GlassCard className="p-6 h-full">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
