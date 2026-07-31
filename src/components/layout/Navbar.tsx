import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navLinks';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <span className="text-2xl font-bold gradient-text">MirexTech</span>
          <span className="text-xs font-light text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-all duration-300 relative ${
                isActive(link.href)
                  ? 'text-cyan-400'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                />
              )}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/contact">
              <AnimatedButton size="sm" className="ml-2">
                Free Consultation
              </AnimatedButton>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-b border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium ${
                    isActive(link.href)
                      ? 'text-cyan-400'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <ThemeToggle />
                <Link to="/contact" className="flex-1" onClick={() => setIsOpen(false)}>
                  <AnimatedButton size="sm" className="w-full">
                    Free Consultation
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}