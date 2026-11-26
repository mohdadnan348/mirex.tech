import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { industries } from "@/data/industriesData";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function Industries() {
  return <>
    <Helmet>
      <title>Industries We Serve | MirexTech</title>
      <meta name="description" content="Explore digital solutions and software possibilities for education, healthcare, real estate, retail, finance, restaurants and travel businesses." />
      <link rel="canonical" href="https://mirextech.in/industries" />
    </Helmet>
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">Industries</p>
        <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="text-4xl md:text-6xl font-bold">
          Digital solutions for <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">different industries</span>
        </motion.h1>
        <p className="text-muted-foreground text-lg mt-6">We shape websites, applications and business software around the workflows, customers and goals of each organisation.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => {
          const Icon = (LucideIcons as any)[industry.iconName] || LucideIcons.Layers;
          return <motion.div key={industry.slug} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.04}}>
            <GlassCard className="h-full p-7 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-5"><Icon className="w-7 h-7" /></div>
              <h2 className="text-xl font-bold mb-3">{industry.name}</h2>
              <p className="text-muted-foreground text-sm leading-7 flex-1">{industry.description}</p>
              <Link className="mt-6 text-cyan-400 font-semibold hover:text-violet-400" to={`/industries/${industry.slug}`}>Explore industry <span aria-hidden="true">→</span></Link>
            </GlassCard>
          </motion.div>;
        })}
      </div>
      <section className="mt-20 text-center rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 p-10 md:p-14">
        <h2 className="text-3xl font-bold">Have a unique business workflow?</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Tell us what your team needs to manage. We can discuss a suitable digital approach and define the scope together.</p>
        <Link to="/contact" className="inline-block mt-7"><AnimatedButton size="lg">Discuss Your Requirements</AnimatedButton></Link>
      </section>
    </main>
  </>;
}
