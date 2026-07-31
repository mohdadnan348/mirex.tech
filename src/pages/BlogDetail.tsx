import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { blogs } from '@/data/blogsData';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find(p => p.slug === slug);

  if (!post) {
    return <div className="py-20 text-center">Blog post not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} – MirexTech Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-2xl mb-8" />
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
            {post.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-violet-500/10 text-violet-400 text-sm rounded-full">#{tag}</span>
            ))}
          </div>
        </motion.article>
      </section>
    </>
  );
}