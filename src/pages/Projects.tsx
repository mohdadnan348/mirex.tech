import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/data/projectsData';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Our Projects – MirexTech</title>
        <meta name="description" content="Explore our portfolio of web, mobile, and AI projects built for clients across industries." />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
          >
            Our Projects
          </motion.h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of our finest work across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
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
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techTags.slice(0, 4).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.techTags.length > 4 && (
                      <span className="px-2 py-1 bg-violet-500/10 text-violet-400 text-xs rounded-full">
                        +{project.techTags.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Link to={`/projects/${project.slug}`}>
                      <AnimatedButton size="sm">Details</AnimatedButton>
                    </Link>
                    {project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-accent">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-accent">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}