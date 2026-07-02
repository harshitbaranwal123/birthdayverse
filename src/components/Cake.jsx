import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayConfig } from '../data/index.js';

const HEARTS = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤍'];

const FloatingHeart = ({ delay, duration, x }) => (
  <motion.div
    className="absolute text-2xl pointer-events-none"
    style={{ left: `${x}%`, bottom: '10%' }}
    initial={{ y: 0, opacity: 0, scale: 0.5 }}
    animate={{ y: -600, opacity: [0, 1, 1, 0], scale: [0.5, 1, 0.8, 0.3] }}
    transition={{ duration, delay, repeat: Infinity, repeatDelay: Math.random() * 3 }}
  >
    {HEARTS[Math.floor(Math.random() * HEARTS.length)]}
  </motion.div>
);

const Candle = ({ index, isBlown }) => (
  <div className="relative flex flex-col items-center">
    {/* Flame */}
    <AnimatePresence>
      {!isBlown && (
        <motion.div
          className="relative mb-0.5"
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Outer flame */}
          <motion.div
            className="w-4 h-6 rounded-full"
            style={{ background: 'linear-gradient(180deg, #FFE066 0%, #FFB300 40%, #FF6B00 100%)' }}
            animate={{
              scaleX: [1, 0.85, 1.1, 0.9, 1],
              scaleY: [1, 1.1, 0.95, 1.05, 1],
            }}
            transition={{ duration: 0.6 + index * 0.1, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Glow */}
          <div className="absolute inset-0 blur-sm"
            style={{ background: 'rgba(255,200,0,0.6)', borderRadius: '50%' }} />
        </motion.div>
      )}
    </AnimatePresence>

    {/* Candle stick */}
    <div
      className="w-3 rounded-sm"
      style={{
        height: 32 + (index % 3) * 8,
        background: `linear-gradient(180deg, ${['#FF6B9D','#FFD700','#7BC8F6','#FFA07A','#98D8C8','#F0A0C8'][index % 6]} 0%, ${['#CC5580','#CCA800','#5FA0CC','#CC7850','#70B09A','#CC80A0'][index % 6]} 100%)`,
        border: '1px solid rgba(255,255,255,0.2)',
      }}
    />
  </div>
);

const Cake = () => {
  const [blown, setBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const blowCandles = () => {
    if (blown) return;
    setBlown(true);
    setTimeout(() => setShowMessage(true), 800);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Floating hearts */}
      {blown && [15, 30, 45, 60, 75, 85].map((x, i) => (
        <FloatingHeart key={i} delay={i * 0.3} duration={4 + i * 0.5} x={x} />
      ))}

      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(255,100,150,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-yellow-400/50 text-xs tracking-[0.4em] uppercase font-body block mb-4">Make a Wish</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-shimmer mb-6">Blow the Candles</h2>
          <div className="gold-divider max-w-xs mx-auto" />
        </motion.div>

        {/* Cake SVG illustration */}
        <motion.div
          className="mx-auto mb-8 relative"
          style={{ width: 280 }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', damping: 15 }}
        >
          {/* Candles row */}
          <div className="flex justify-center gap-2 items-end mb-1 relative z-10">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <Candle key={i} index={i} isBlown={blown} />
            ))}
          </div>

          {/* Cake top tier */}
          <div className="relative z-10">
            <div className="rounded-t-2xl overflow-hidden"
              style={{
                height: 60,
                background: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
                border: '2px solid rgba(255,215,0,0.4)',
              }}>
              {/* Decorations */}
              <div className="flex justify-around items-center h-full px-4">
                {['✦','♥','✦','♥','✦'].map((d, i) => (
                  <span key={i} className="text-yellow-300/60 text-xs">{d}</span>
                ))}
              </div>
            </div>
            {/* Frosting drip */}
            <div className="flex justify-around -mt-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-5 h-4 rounded-b-full"
                  style={{ background: 'linear-gradient(180deg, #ffffff40, #ffffff10)' }} />
              ))}
            </div>
          </div>

          {/* Cake middle tier */}
          <div className="rounded-sm overflow-hidden -mt-1"
            style={{
              height: 70,
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              border: '2px solid rgba(255,215,0,0.5)',
              borderTop: 'none',
            }}>
            <div className="flex justify-around items-center h-full px-2">
              {'Happy Birthday'.split('').map((c, i) => (
                <span key={i} className="text-yellow-400/80 text-xs font-display font-bold"
                  style={{ fontSize: 9 }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Cake base */}
          <div className="rounded-b-2xl"
            style={{
              height: 80,
              background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b69 100%)',
              border: '2px solid rgba(255,215,0,0.5)',
              borderTop: 'none',
            }}>
            {/* Stars decoration */}
            <div className="flex justify-around items-center h-full px-4">
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-yellow-400/30 text-base"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                >✦</motion.span>
              ))}
            </div>
          </div>

          {/* Plate */}
          <div className="h-3 rounded-full mt-1 mx-4"
            style={{ background: 'linear-gradient(90deg, rgba(255,215,0,0.2), rgba(255,215,0,0.5), rgba(255,215,0,0.2))' }} />

          {/* Glow under cake */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-8 rounded-full blur-xl"
            style={{ background: 'rgba(255,195,0,0.15)' }} />
        </motion.div>

        {/* Button */}
        {!blown ? (
          <motion.button
            onClick={blowCandles}
            className="group relative px-10 py-4 rounded-full font-body text-sm tracking-[0.2em] uppercase font-semibold mt-4"
            style={{ background: 'linear-gradient(135deg, #FFC300, #FFD700)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ['0 0 20px rgba(255,195,0,0.3)', '0 0 40px rgba(255,195,0,0.6)', '0 0 20px rgba(255,195,0,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-black">💨 Blow the Candles!</span>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-4">🎉</div>
            <p className="font-elegant italic text-yellow-100/70 text-lg">
              May every wish you made come true.
            </p>
          </motion.div>
        )}

        {/* Reveal message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="glass-gold rounded-3xl p-8 mt-12 glow-gold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-display font-bold text-2xl md:text-3xl text-shimmer mb-4">
                Your wish is heard. 💛
              </p>
              <p className="font-elegant italic text-white/70 text-base md:text-lg leading-relaxed">
                The universe is already conspiring in your favor.
                Every candle you've blown out is a wish sent skyward —
                and every single one of them will find its way back to you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Cake;
