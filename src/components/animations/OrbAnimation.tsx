import { motion } from 'framer-motion';

interface OrbAnimationProps {
  size?: number;
  className?: string;
}

export function OrbAnimation({ size = 300, className = '' }: OrbAnimationProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer glow – static (no animation) for better performance */}
      <div className="absolute inset-[-20%] rounded-full bg-gradient-to-r from-cyan-400/20 via-violet-500/20 to-pink-500/20 blur-3xl" />

      {/* Simple rotating ring – slow animation only */}
      <motion.div
        className="absolute inset-0 rounded-full border border-cyan-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute inset-[15%] rounded-full border border-violet-400/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute inset-[30%] rounded-full border border-pink-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Core – simple pulse only */}
      <motion.div
        className="absolute inset-[20%] rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 opacity-20 blur-2xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Center core */}
      <motion.div
        className="absolute inset-[35%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 blur-sm" />
      </motion.div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-white font-bold text-xl md:text-3xl tracking-wider drop-shadow-lg">
          Mirex
        </span>
        <span className="text-cyan-300 text-[10px] md:text-sm font-light tracking-[0.3em] mt-1 opacity-60">
          TECH
        </span>
      </div>
    </div>
  );
}