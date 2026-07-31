import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | MirexTech</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="flex items-center justify-center min-h-[80vh] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">404</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mt-4">Page Not Found</h2>
          <p className="text-muted-foreground mt-2">Oops! The page you are looking for doesn't exist.</p>
          <Link to="/" className="mt-6 inline-block">
            <AnimatedButton size="lg">Go Home</AnimatedButton>
          </Link>
        </motion.div>
      </section>
    </>
  );
}