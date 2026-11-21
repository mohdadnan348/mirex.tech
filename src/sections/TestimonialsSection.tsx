import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-12 text-center">
        <p className="text-sm uppercase tracking-[0.18em] text-cyan-500 mb-3">Built around real work</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">See what we can build together.</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-7">
          Explore selected software and website projects, then tell us what your business needs next.
        </p>
        <Link to="/projects" className="inline-flex items-center gap-2 font-semibold">
          Explore our projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
