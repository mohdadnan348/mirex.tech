import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projectsData';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

const featured = projects.slice(0, 4);

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Some of our finest work across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full flex flex-col overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-t-xl" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm flex-1">{project.description}</p>
                  <Link to={`/projects/${project.slug}`} className="mt-4">
                    <AnimatedButton variant="outline" size="sm" className="w-full">
                      View Project →
                    </AnimatedButton>
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/projects">
            <AnimatedButton variant="ghost" size="lg">View All Projects →</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}