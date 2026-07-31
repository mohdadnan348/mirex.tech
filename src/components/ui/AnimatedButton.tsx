import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { forwardRef, ButtonHTMLAttributes } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'premium';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl overflow-hidden';
    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-7 py-3.5 text-base',
      lg: 'px-9 py-4.5 text-lg',
    };
    const variants = {
      primary: 'bg-gradient-to-r from-cyan-400 to-violet-500 text-white hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02]',
      premium: 'bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 text-white hover:shadow-xl hover:shadow-violet-500/30 hover:scale-[1.02] animate-gradient-shift',
      outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300',
      ghost: 'text-muted-foreground hover:text-foreground hover:bg-white/5',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={cn(base, sizes[size], variants[variant], className)}
        {...(props as any)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === 'primary' && (
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        {variant === 'premium' && (
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 opacity-0"
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    );
  }
);