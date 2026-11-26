import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { projects } from '@/data/projectsData';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import {
  ArrowLeft, ArrowUpRight, ExternalLink, Github, UserRound,
  Clock3, Layers3, Images, CheckCircle2
} from 'lucide-react';

function statusTone(status: string) {
  const value = status.toLowerCase();
  if (value.includes('live')) return 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300';
  if (value.includes('pending')) return 'border-amber-400/30 bg-amber-400/10 text-amber-300';
  if (value.includes('internship')) return 'border-violet-400/30 bg-violet-400/10 text-violet-300';
  return 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300';
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(item => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-[65vh] px-4 pt-36 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-3 text-muted-foreground">The project link may be outdated or unavailable.</p>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
          <ArrowLeft className="h-4 w-4" /> Back to all projects
        </Link>
      </section>
    );
  }

  const gallery = Array.from(new Set([project.imageUrl, ...project.screenshots].filter(Boolean)));
  const hasLive = project.liveUrl !== '#';
  const hasGithub = project.githubUrl !== '#';

  return (
    <>
      <Helmet>
        <title>{project.title} Case Study | MirexTech</title>
        <meta name="description" content={`${project.title}: project overview, challenge, solution, technologies and current status by MirexTech.`} />
        <link rel="canonical" href={`https://mirextech.in/projects/${project.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${project.title} | MirexTech`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.imageUrl} />
        <meta property="og:url" content={`https://mirextech.in/projects/${project.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mirextech.in/" },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://mirextech.in/projects" },
            { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://mirextech.in/projects/${project.slug}` }
          ]
        })}</script>
      </Helmet>

      <main className="relative overflow-hidden px-4 pb-20 pt-28 md:px-8 md:pt-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_65%)]" />
        <div className="mx-auto max-w-6xl">
          <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-cyan-300">
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>

          <motion.section initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">{project.category}</span>
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusTone(project.status)}`}>{project.statusLabel || project.status}</span>
            </div>

            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Project case study</p>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">{project.title}</h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {hasLive && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><AnimatedButton>Visit website <ExternalLink className="ml-2 h-4 w-4" /></AnimatedButton></a>}
                {hasGithub && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><AnimatedButton variant="outline">Source code <Github className="ml-2 h-4 w-4" /></AnimatedButton></a>}
              </div>
            </div>

            <div className="mt-9 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-3">
              <div className="flex items-start gap-3"><UserRound className="mt-0.5 h-5 w-5 text-cyan-300" /><div><p className="text-xs text-muted-foreground">Client / project</p><p className="mt-1 text-sm font-medium">{project.client}</p></div></div>
              <div className="flex items-start gap-3"><Clock3 className="mt-0.5 h-5 w-5 text-cyan-300" /><div><p className="text-xs text-muted-foreground">Duration</p><p className="mt-1 text-sm font-medium">{project.duration}</p></div></div>
              <div className="flex items-start gap-3"><Layers3 className="mt-0.5 h-5 w-5 text-cyan-300" /><div><p className="text-xs text-muted-foreground">Category</p><p className="mt-1 text-sm font-medium">{project.category}</p></div></div>
            </div>
          </motion.section>

          <section className="mt-16">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Visual overview</p><h2 className="mt-2 text-2xl font-bold md:text-3xl">Project gallery</h2></div>
              <Images className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {gallery.map((image, index) => (
                <figure key={`${image}-${index}`} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <img src={image} alt={`${project.title} visual ${index + 1}`} loading="lazy" decoding="async" className="h-56 w-full object-cover md:h-72" />
                  <figcaption className="flex items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
                    <Images className="h-3.5 w-3.5 shrink-0" /> Representative visual — actual product UI screenshot not yet supplied
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Behind the build</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">The challenge & solution</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <GlassCard className="p-6 md:p-7">
                <p className="text-sm font-semibold text-cyan-300">01 / The challenge</p>
                <h3 className="mt-3 text-xl font-semibold">What needed to be solved</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.problem}</p>
              </GlassCard>
              <GlassCard className="p-6 md:p-7">
                <p className="text-sm font-semibold text-violet-300">02 / The solution</p>
                <h3 className="mt-3 text-xl font-semibold">How it was approached</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.solution}</p>
              </GlassCard>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <GlassCard className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Technology</p>
              <h2 className="mt-2 text-2xl font-bold">Tools used</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techTags.map(tag => <span key={tag} className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.07] px-3 py-2 text-sm text-cyan-200">{tag}</span>)}
              </div>
            </GlassCard>
            <GlassCard className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Project record</p>
              <h2 className="mt-2 text-2xl font-bold">Current status</h2>
              <div className="mt-5 flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <div><p className="font-semibold">{project.statusLabel || project.status}</p><p className="mt-2 text-sm leading-7 text-muted-foreground">{project.result}</p></div>
              </div>
            </GlassCard>
          </section>

          <section className="mt-16 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-violet-500/[0.08] to-transparent p-7 text-center md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Have a similar idea?</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold md:text-4xl">Let’s build a solution for your business.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">Tell us what you want to create. We’ll discuss the right approach, features and technology for your project.</p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]">Discuss your project <ArrowUpRight className="h-4 w-4" /></Link>
          </section>
        </div>
      </main>
    </>
  );
}
