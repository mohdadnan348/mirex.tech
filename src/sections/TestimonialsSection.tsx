import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonialsData';
import { GlassCard } from '@/components/ui/GlassCard';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real businesses we've helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'opacity-20'}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground flex-1">"{testimonial.quote}"</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}