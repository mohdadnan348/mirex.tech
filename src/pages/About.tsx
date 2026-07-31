import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { industries } from '@/data/industriesData';
import * as LucideIcons from 'lucide-react';

export default function About() {
  const getIcon = (name: string) => {
    const Icon = (LucideIcons as any)[name];
    return Icon ? <Icon className="w-8 h-8 text-cyan-400" /> : null;
  };

  return (
    <>
      <Helmet>
        <title>About MirexTech – AI Software Agency</title>
        <meta name="description" content="Learn about MirexTech, a premium software agency specializing in AI, web development, and digital transformation." />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            About MirexTech
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are a team of passionate engineers, designers, and AI experts dedicated to building the future of software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower businesses with cutting-edge AI and software solutions that drive growth, efficiency, and innovation.
              We combine technical excellence with creative design to deliver products that truly make a difference.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✦ Innovation at every step</li>
              <li>✦ Customer-centric approach</li>
              <li>✦ Transparency and trust</li>
              <li>✦ Quality and performance</li>
            </ul>
          </motion.div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <GlassCard key={idx} className="text-center p-4">
                <div className="flex justify-center mb-2">{getIcon(industry.iconName)}</div>
                <h3 className="font-semibold">{industry.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{industry.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}