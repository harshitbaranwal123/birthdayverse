import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('reveal'), 300);
          setTimeout(() => onComplete(), 1800);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#080808' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Ambient rings */}
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-yellow-400/10"
              style={{ width: i * 200, height: i * 200 }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            />
          ))}

          {/* Crown / Logo */}
          <motion.div
            className="logo-animate mb-12 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="relative">
              {/* Glow behind crown */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-40"
                   style={{ background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)' }} />
              <motion.div
                className="text-8xl md:text-9xl relative"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                👑
              </motion.div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            className="text-center mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-shimmer mb-3">
              Something Special
            </h1>
            <p className="text-yellow-400/60 text-sm md:text-base font-body tracking-[0.3em] uppercase">
              is being prepared for you
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-64 md:w-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #FFC300, #FFD700)',
                  boxShadow: '0 0 10px rgba(255,195,0,0.6)',
                  width: `${Math.min(progress, 100)}%`,
                }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-yellow-400/40 text-xs font-body tracking-widest uppercase">Loading</span>
              <span className="text-yellow-400/60 text-xs font-body">
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </motion.div>

          {/* Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400"
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${5 + i * 16}%`,
                fontSize: `${8 + Math.random() * 12}px`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              ✦
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
