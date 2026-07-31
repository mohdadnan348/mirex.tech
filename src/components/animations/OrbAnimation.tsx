import { motion } from 'framer-motion';

interface OrbAnimationProps {
  size?: number;
  className?: string;
}

export function OrbAnimation({ size = 300, className = '' }: OrbAnimationProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer glow */}
      <motion.div
        className="absolute inset-[-20%] rounded-full bg-gradient-to-r from-cyan-400/20 via-violet-500/20 to-pink-500/20 blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Rotating ring 1 */}
      <motion.div
        className="absolute inset-0 rounded-full border border-cyan-400/30"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Rotating ring 2 */}
      <motion.div
        className="absolute inset-[15%] rounded-full border border-violet-400/30"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Rotating ring 3 */}
      <motion.div
        className="absolute inset-[30%] rounded-full border border-pink-400/30"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Core glow */}
      <motion.div
        className="absolute inset-[20%] rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 opacity-30 blur-2xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Center core */}
      <motion.div
        className="absolute inset-[35%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 blur-sm" />
      </motion.div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-white font-bold text-2xl md:text-3xl tracking-wider drop-shadow-lg">
          Mirex
        </span>
        <span className="text-cyan-300 text-xs md:text-sm font-light tracking-[0.3em] mt-1 opacity-70">
          TECH
        </span>
      </div>
    </div>
  );
}