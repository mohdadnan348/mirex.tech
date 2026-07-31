import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { projects } from '@/data/projectsData';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { ArrowLeft, ExternalLink, Github, Calendar, User } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div className="py-20 text-center">Project not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} – MirexTech Projects</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-2xl mb-8" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {project.client}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {project.duration}</span>
          </div>
          <p className="text-lg mb-8">{project.description}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-4">
              <h3 className="font-semibold text-cyan-400">Problem</h3>
              <p className="text-sm text-muted-foreground mt-2">{project.problem}</p>
            </GlassCard>
            <GlassCard className="p-4">
              <h3 className="font-semibold text-violet-400">Solution</h3>
              <p className="text-sm text-muted-foreground mt-2">{project.solution}</p>
            </GlassCard>
            <GlassCard className="p-4">
              <h3 className="font-semibold text-pink-400">Result</h3>
              <p className="text-sm text-muted-foreground mt-2">{project.result}</p>
            </GlassCard>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <AnimatedButton>Live Demo <ExternalLink className="w-4 h-4 ml-2" /></AnimatedButton>
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <AnimatedButton variant="outline">GitHub <Github className="w-4 h-4 ml-2" /></AnimatedButton>
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}