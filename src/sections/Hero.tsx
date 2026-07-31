import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { OrbAnimation } from '@/components/animations/OrbAnimation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { texts } from '@/data/translationData';

export default function Hero() {
  const { hero } = texts;

  // Responsive orb size based on screen width
  const [orbSize, setOrbSize] = useState(380);

  useEffect(() => {
    const updateOrbSize = () => {
      const width = window.innerWidth;
      if (width < 480) setOrbSize(180);
      else if (width < 640) setOrbSize(240);
      else if (width < 768) setOrbSize(280);
      else setOrbSize(380);
    };

    updateOrbSize();
    window.addEventListener('resize', updateOrbSize);
    return () => window.removeEventListener('resize', updateOrbSize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-x-hidden will-change-transform">
      {/* Background Orbs – Optimized: fewer orbs & reduced blur on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb bg-orb-1 will-change-transform" />
        <div className="bg-orb bg-orb-2 will-change-transform" />
        {/* Third orb removed for performance */}
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-400/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">
              {hero.sub}
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
            <span className="gradient-text">
              {hero.title}
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {hero.desc}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 md:mt-10"
          >
            <Link to="/contact">
              <AnimatedButton size="lg" variant="premium">
                {hero.ctaConsultation}
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
            <Link to="/projects">
              <AnimatedButton size="lg" variant="outline">
                {hero.ctaPortfolio}
              </AnimatedButton>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center lg:justify-start items-center gap-4 mt-8 md:mt-10"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-cyan-400/20 to-violet-500/20" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-cyan-400 font-semibold">500+</span> clients trust us
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-violet-500/20 rounded-full blur-3xl" />
            <OrbAnimation size={orbSize} className="neon-glow relative will-change-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}