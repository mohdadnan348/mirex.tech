import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { jobOpenings } from '@/data/careersData';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Briefcase, MapPin, Clock } from 'lucide-react';

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers – MirexTech</title>
        <meta name="description" content="Join the MirexTech team. We're hiring React developers, backend engineers, and designers." />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
          >
            Careers
          </motion.h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Build the future with us. Explore open positions and join our team of innovators.
          </p>
        </div>

        <div className="space-y-6">
          {jobOpenings.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type} · {job.experience}</span>
                    </div>
                    <p className="mt-3 text-muted-foreground">{job.description}</p>
                    <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {job.requirements.slice(0, 3).map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li className="text-violet-400">+{job.requirements.length - 3} more requirements</li>
                      )}
                    </ul>
                  </div>
                  <AnimatedButton className="shrink-0">Apply Now</AnimatedButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}