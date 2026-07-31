import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '@/data/blogsData';
import { GlassCard } from '@/components/ui/GlassCard';
import { formatDate, truncateText } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog – MirexTech</title>
        <meta name="description" content="Read the latest insights on AI, web development, SEO, and business growth from MirexTech." />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
          >
            Our Blog
          </motion.h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and news from the MirexTech team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/blog/${post.slug}`}>
                <GlassCard className="h-full flex flex-col overflow-hidden hover:border-cyan-400/30 transition-colors">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-t-xl" />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">{post.category}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-cyan-400 transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{truncateText(post.excerpt, 100)}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-violet-400">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}