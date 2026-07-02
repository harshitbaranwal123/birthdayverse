import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import { birthdayConfig } from '../data/index.js';

const FIREWORK_COLORS = ['#FFD700', '#FFC300', '#FF6B6B', '#FF69B4', '#9B59B6', '#3498DB', '#2ECC71'];

const Firework = ({ x, y, delay }) => {
  const particles = [...Array(12)].map((_, i) => {
    const angle = (i / 12) * 360;
    const rad = (angle * Math.PI) / 180;
    return {
      dx: Math.cos(rad) * (60 + Math.random() * 40),
      dy: Math.sin(rad) * (60 + Math.random() * 40),
      color: FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)],
    };
  });

  return (
    <div className="absolute pointer-events-none" style={{ left: `${x}%`, top: `${y}%` }}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ background: p.color }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: p.dx, y: p.dy, opacity: 0, scale: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
};

const GrandFinale = () => {
  const [triggered, setTriggered] = useState(false);
  const [showText, setShowText] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const launch = () => {
    setTriggered(true);
    setTimeout(() => setShowText(true), 600);
  };

  const LETTERS = `Happy Birthday, ${birthdayConfig.name}!`.split('');

  return (
    <section className="section-padding relative overflow-hidden min-h-screen flex items-center justify-center">
      {triggered && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={500}
          gravity={0.1}
          colors={['#FFD700', '#FFC300', '#FF6B6B', '#FF69B4', '#9B59B6', '#ffffff', '#FFA500']}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 50 }}
        />
      )}

      {/* Fireworks */}
      {triggered && [
        [20, 20], [50, 15], [80, 25], [15, 50], [85, 45],
        [35, 30], [70, 20], [60, 55],
      ].map(([x, y], i) => (
        <Firework key={i} x={x} y={y} delay={i * 0.25} />
      ))}

      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: triggered
          ? 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,195,0,0.08) 0%, transparent 70%)'
          : 'transparent' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {!triggered ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-400/50 text-xs tracking-[0.4em] uppercase font-body block mb-8">The Grand Finale</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-shimmer mb-6">
              One Last Celebration
            </h2>
            <p className="font-elegant italic text-yellow-100/50 text-lg mb-12 max-w-lg mx-auto">
              Press the button and let the celebration truly begin.
            </p>
            <motion.button
              onClick={launch}
              className="relative px-14 py-6 rounded-full font-body text-base tracking-[0.2em] uppercase font-bold text-black overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #FFC300 0%, #FFD700 50%, #FFC300 100%)' }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 30px rgba(255,195,0,0.4)',
                  '0 0 60px rgba(255,195,0,0.8)',
                  '0 0 30px rgba(255,195,0,0.4)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎆 Launch the Finale!
            </motion.button>
          </motion.div>
        ) : (
          <div>
            {/* Happy Birthday text reveal */}
            <AnimatePresence>
              {showText && (
                <motion.div className="mb-12">
                  <div className="flex flex-nowrap justify-center gap-1 md:gap-2 mb-8">
                    {LETTERS.map((letter, i) => (
                      <motion.span
                        key={i}
                        className="font-display font-black text-shimmer"
                        style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)' }}
                        initial={{ opacity: 0, y: 60, rotate: -20 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.06,
                          type: 'spring',
                          damping: 12,
                          stiffness: 150,
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    className="text-6xl md:text-8xl mb-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.5, duration: 0.8, type: 'spring', damping: 10 }}
                  >
                    🎂
                  </motion.div>

                  <motion.p
                    className="font-elegant italic text-yellow-100/70 text-xl md:text-2xl mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                  >
                    May this year be the most extraordinary one yet.
                  </motion.p>

                  <motion.div
                    className="flex justify-center gap-6 text-4xl"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4, duration: 0.6, type: 'spring' }}
                  >
                    {['🎉', '🥂', '💛', '🎊', '✨'].map((emoji, i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -10, 0], rotate: [0, i % 2 ? 10 : -10, 0] }}
                        transition={{ duration: 1.5 + i * 0.2, repeat: Infinity, delay: i * 0.1 }}
                      >
                        {emoji}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default GrandFinale;
