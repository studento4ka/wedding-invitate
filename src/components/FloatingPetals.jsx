import React from 'react';
import { motion } from 'framer-motion';

const petals = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 6,
  duration: 8 + Math.random() * 7,
  size: 6 + Math.random() * 8,
}));

export default function FloatingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -30, x: `${p.x}vw`, opacity: 0, rotate: 0 }}
          animate={{
            y: '105vh',
            x: `${p.x + (Math.random() * 6 - 3)}vw`,
            opacity: [0, 0.45, 0.45, 0],
            rotate: 280,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
          style={{ width: p.size, height: p.size }}
          className="rounded-full bg-[#E5AFA9]/35 blur-[0.4px]"
        />
      ))}
    </div>
  );
}