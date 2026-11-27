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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 border-b border-border' 
          : 'bg-background border-b border-border'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 xl:px-8 flex items-center justify-between gap-4 min-h-16">
        {/* Logo */}
        <Link to="/" aria-label="MirexTech home" className="flex items-center shrink-0 group">
          <img
            src="/mirextech-neon-orbit-logo.png"
            alt="MirexTech"
            className="h-10 w-auto max-w-[156px] object-contain transition-transform duration-300 group-hover:scale-[1.03] lg:h-11 lg:max-w-[172px]"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-end gap-4 xl:gap-6 whitespace-nowrap">
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
          <div className="flex shrink-0 items-center gap-2 xl:gap-3">
            <ThemeToggle />
            <Link to="/contact">
              <AnimatedButton size="sm" className="ml-1 whitespace-nowrap">
                Free Consultation
              </AnimatedButton>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden shrink-0 p-2 rounded-lg hover:bg-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
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
            id="mobile-navigation"
            className="lg:hidden border-b border-border bg-background"
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
              <div className="flex items-center gap-4 pt-4 border-t border-border">
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