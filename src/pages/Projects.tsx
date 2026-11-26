import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/data/projectsData';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { ExternalLink, Github, ArrowUpRight, Search, Layers3 } from 'lucide-react';

const categories = ['All Projects', ...Array.from(new Set(projects.map(project => project.category)))];

function statusTone(status: string) {
  if (status.toLowerCase().includes('live')) return 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300';
  if (status.toLowerCase().includes('pending')) return 'border-amber-400/30 bg-amber-400/10 text-amber-300';
  if (status.toLowerCase().includes('internship')) return 'border-violet-400/30 bg-violet-400/10 text-violet-300';
  return 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300';
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => projects.filter(project => {
    const matchesCategory = activeCategory === 'All Projects' || project.category === activeCategory;
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch = !query || [project.title, project.description, project.category, ...project.techTags]
      .join(' ').toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  }), [activeCategory, searchTerm]);

  return (
    <>
      <Helmet>
        <title>Our Projects & Portfolio | MirexTech</title>
        <meta name="description" content="Explore MirexTech's web development, mobile app, AI, e-commerce and custom business software projects." />
        <link rel="canonical" href="https://mirextech.in/projects" />
      </Helmet>

      <section className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_55%)]" />
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              <Layers3 className="h-4 w-4" /> Our work
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">Projects built for <span className="gradient-text">real-world needs.</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Explore selected websites, mobile apps, AI solutions and business platforms. Each project includes its category, current status and technology stack.
            </p>
          </motion.div>

          <div className="mx-auto mb-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Search projects or technologies..." aria-label="Search projects" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${activeCategory === category ? 'border-cyan-300 bg-cyan-300 text-slate-950' : 'border-white/10 bg-white/[0.03] text-muted-foreground hover:border-cyan-300/40 hover:text-foreground'}`}>
                {category}
              </button>
            ))}
          </div>

          <div className="mb-5 flex items-center justify-between text-sm text-muted-foreground">
            <span>{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}</span>
            <span>Project status is shown as currently documented</span>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(index * 0.05, 0.2) }}>
                  <GlassCard className="group flex h-full flex-col overflow-hidden">
                    <div className="relative h-56 overflow-hidden bg-slate-900">
                      <img src={project.imageUrl} alt={`${project.title} representative visual`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-[10px] text-white/80">Representative visual</span>
                      <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 text-xs text-white">{project.category}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3">
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${statusTone(project.status)}`}>{project.status}</span>
                      </div>
                      <h2 className="text-xl font-bold">{project.title}</h2>
                      <p className="mt-3 line-clamp-4 flex-1 text-sm leading-7 text-muted-foreground">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.techTags.slice(0, 4).map(tag => <span key={tag} className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300">{tag}</span>)}
                        {project.techTags.length > 4 && <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-muted-foreground">+{project.techTags.length - 4}</span>}
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                        <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">View project <ArrowUpRight className="h-4 w-4" /></Link>
                        <div className="flex items-center gap-3">
                          {project.liveUrl !== '#' && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live website`} className="text-muted-foreground hover:text-cyan-300"><ExternalLink className="h-4 w-4" /></a>}
                          {project.githubUrl !== '#' && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`} className="text-muted-foreground hover:text-cyan-300"><Github className="h-4 w-4" /></a>}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
              <h2 className="text-xl font-semibold">No matching projects found</h2>
              <p className="mt-2 text-sm text-muted-foreground">Try another search term or select a different category.</p>
              <button onClick={() => { setSearchTerm(''); setActiveCategory('All Projects'); }} className="mt-5 text-sm font-semibold text-cyan-300">Clear filters</button>
            </div>
          )}
          <div className="mt-14 text-center">
            <p className="mb-4 text-muted-foreground">Have a project idea? Let's discuss what you want to build.</p>
            <Link to="/contact"><AnimatedButton size="lg">Start a Project <ArrowUpRight className="ml-2 h-4 w-4" /></AnimatedButton></Link>
          </div>
        </div>
      </section>
    </>
  );
}
