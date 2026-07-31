import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Users, Clock, Globe } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

const reasons = [
  { icon: Zap, title: 'Cutting-Edge Tech', desc: 'We use the latest frameworks and AI to deliver superior products.' },
  { icon: Shield, title: 'Secure & Scalable', desc: 'Your data is safe with us, and our solutions grow with your business.' },
  { icon: Users, title: 'Client-Centric', desc: 'We listen, collaborate, and deliver beyond expectations.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Agile sprints ensure we deliver on schedule, every time.' },
  { icon: Globe, title: 'Global Standards', desc: 'We follow international best practices and coding standards.' },
  { icon: CheckCircle, title: '100% Satisfaction', desc: 'We don\'t stop until you are thrilled with the results.' },
];

export default function WhyChoose() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Why Choose MirexTech?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We combine technical excellence with creative design to build products that truly make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full">
                <reason.icon className="w-10 h-10 text-cyan-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}