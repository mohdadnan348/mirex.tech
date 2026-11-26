import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import * as LucideIcons from "lucide-react";
import { industries } from "@/data/industriesData";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function IndustryDetail() {
  const { slug } = useParams<{slug:string}>();
  const industry = industries.find(item => item.slug === slug);
  if (!industry) return <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center"><h1 className="text-3xl font-bold">Industry not found</h1><Link to="/industries" className="text-cyan-400 mt-5">Back to Industries</Link></main>;
  const Icon = (LucideIcons as any)[industry.iconName] || LucideIcons.Layers;
  const points = industry.description.split(/,| and /).map(x => x.trim().replace(/[.]$/, "")).filter(Boolean);
  return <>
    <Helmet>
      <title>{industry.name} Solutions | MirexTech</title>
      <meta name="description" content={industry.description} />
      <link rel="canonical" href={`https://mirextech.in/industries/${industry.slug}`} />
      <meta property="og:title" content={`${industry.name} Solutions | MirexTech`} />
      <meta property="og:description" content={industry.description} />
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":`${industry.name} Digital Solutions`,"description":industry.description,"provider":{"@type":"Organization","name":"MirexTech","url":"https://mirextech.in/"}})}</script>
    </Helmet>
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <Link to="/industries" className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan-400 mb-10"><ArrowLeft className="w-4 h-4"/> All Industries</Link>
      <section className="grid md:grid-cols-[1.15fr_.85fr] gap-10 items-center">
        <div>
          <p className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-4">Industry solutions</p>
          <h1 className="text-4xl md:text-6xl font-bold">{industry.name}</h1>
          <p className="text-lg text-muted-foreground leading-8 mt-6">{industry.description}</p>
          <Link to={`/contact?industry=${encodeURIComponent(industry.name)}`} className="inline-block mt-8"><AnimatedButton size="lg">Discuss Your Project <ArrowRight className="w-4 h-4 ml-2"/></AnimatedButton></Link>
        </div>
        <GlassCard className="p-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-3xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center"><Icon className="w-12 h-12"/></div>
          <h2 className="text-2xl font-bold mt-6">{industry.name}, built around your workflow</h2>
          <p className="text-muted-foreground mt-3">A considered combination of user experience, software features and integrations based on your requirements.</p>
        </GlassCard>
      </section>
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-3">Solution areas</h2>
        <p className="text-muted-foreground mb-8">Capabilities referenced for this industry.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((point,i)=><GlassCard key={i} className="p-5 flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1"/><span>{point}</span></GlassCard>)}
        </div>
      </section>
      <section className="mt-16 rounded-3xl border border-white/10 p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold">Let’s map your requirements</h2>
        <p className="text-muted-foreground mt-3">Share your current process, users and priorities. We’ll help outline a practical scope.</p>
        <Link to={`/contact?industry=${encodeURIComponent(industry.name)}`} className="inline-block mt-6"><AnimatedButton>Talk to MirexTech</AnimatedButton></Link>
      </section>
    </main>
  </>;
}
