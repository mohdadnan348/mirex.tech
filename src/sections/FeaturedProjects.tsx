import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projectsData';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

const featuredSlugs = ['gujarat-solar-crm', 'resume-ai', 'proshipstar'];
const featured = featuredSlugs.map(slug => projects.find(project => project.slug === slug)).filter((project): project is (typeof projects)[number] => Boolean(project));

export default function FeaturedProjects() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Selected work</span><h2 className="mt-4 text-3xl font-bold md:text-5xl">Ideas turned into <span className="gradient-text">digital products.</span></h2><p className="mt-5 leading-7 text-muted-foreground">A selection of platforms and experiences built across different business needs.</p></div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">All projects <ArrowUpRight className="h-4 w-4"/></Link>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
              <div className="relative h-52 overflow-hidden bg-slate-900"><img src={project.imageUrl} alt={`${project.title} representative visual`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"/><span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-[11px] text-white/80">Project overview</span></div>
              <div className="flex h-[285px] flex-col p-6"><h3 className="text-xl font-semibold">{project.title}</h3><p className="mt-3 line-clamp-4 flex-1 text-sm leading-7 text-muted-foreground">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.techTags.slice(0, 3).map(tag => <span key={tag} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-muted-foreground">{tag}</span>)}</div><div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4"><Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">Project details <ArrowUpRight className="h-4 w-4"/></Link>{project.liveUrl !== '#' && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`} className="text-muted-foreground transition-colors hover:text-cyan-300"><ExternalLink className="h-4 w-4"/></a>}</div></div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 text-center"><Link to="/projects"><AnimatedButton variant="outline" size="lg">Explore All Projects <ArrowUpRight className="h-4 w-4"/></AnimatedButton></Link></div>
      </div>
    </section>
  );
}
