import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      animate={{ x: position.x - 150, y: position.y - 150 }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
    >
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-3xl" />
    </motion.div>
  );
}