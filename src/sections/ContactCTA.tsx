import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { texts } from '@/data/translationData';

const phoneNumber = '+916389709762';

export default function ContactCTA() {
  const { contact } = texts;

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {contact.title}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {contact.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/contact">
                <AnimatedButton size="lg">{contact.send}</AnimatedButton>
              </Link>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedButton variant="outline" size="lg">
                  {contact.whatsapp}
                </AnimatedButton>
              </a>
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}