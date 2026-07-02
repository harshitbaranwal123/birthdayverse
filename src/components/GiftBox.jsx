import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import { giftMessage } from '../data/index.js';

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {showConfetti && (
        <ReactConfetti
          numberOfPieces={350}
          gravity={0.15}
          colors={['#FFD700', '#FFC300', '#FF6B6B', '#FF69B4', '#9B59B6', '#ffffff', '#FFA500']}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 100 }}
        />
      )}

      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,215,0,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-yellow-400/50 text-xs tracking-[0.4em] uppercase font-body block mb-4">For You</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-shimmer mb-6">A Special Gift</h2>
          <p className="font-elegant italic text-yellow-100/50 text-lg">
            Something has been waiting just for you.
          </p>
          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </motion.div>

        {/* Gift Box */}
        <motion.div
          className="relative mx-auto mb-12 cursor-pointer select-none"
          style={{ width: 200, height: 200 }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', damping: 15 }}
          onClick={handleOpen}
          whileHover={!isOpen ? { scale: 1.05, rotate: [-1, 1, -1, 0] } : {}}
          whileTap={!isOpen ? { scale: 0.95 } : {}}
        >
          {/* Glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)' }}
            animate={isOpen ? { scale: 2, opacity: 0 } : { scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={isOpen ? { duration: 0.5 } : { duration: 2, repeat: Infinity }}
          />

          {/* Box body */}
          <div className="absolute bottom-0 left-0 right-0 h-28 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2000 50%, #1a1100 100%)',
              border: '2px solid rgba(255,215,0,0.5)',
              boxShadow: '0 0 30px rgba(255,195,0,0.3), inset 0 0 20px rgba(255,195,0,0.05)',
            }}>
            {/* Ribbon horizontal */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-6"
              style={{ background: 'linear-gradient(90deg, #FFC300, #FFD700, #FFC300)' }} />
            {/* Ribbon vertical */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6"
              style={{ background: 'linear-gradient(180deg, #FFC300, #FFD700, #FFC300)' }} />
          </div>

          {/* Lid */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-20 rounded-t-2xl rounded-b-none gift-lid"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2000 50%, #1a1100 100%)',
              border: '2px solid rgba(255,215,0,0.5)',
              boxShadow: '0 0 20px rgba(255,195,0,0.2)',
              transformOrigin: 'bottom center',
            }}
            animate={isOpen ? { rotateX: -130, y: -30, opacity: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Bow */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">🎀</div>
            {/* Ribbon vertical on lid */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6"
              style={{ background: 'linear-gradient(180deg, #FFC300, #FFD700, #FFC300)' }} />
          </motion.div>

          {/* Surprise emoji inside */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-5xl z-10"
                initial={{ y: 20, opacity: 0, scale: 0.5 }}
                animate={{ y: -40, opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: 'spring', damping: 10 }}
              >
                💛
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Click hint */}
        {!isOpen && (
          <motion.p
            className="text-yellow-400/40 text-sm font-body mb-8"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click to open your gift ✨
          </motion.p>
        )}

        {/* Reveal message */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="glass-gold rounded-3xl p-8 md:p-12 glow-gold"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7, type: 'spring', damping: 15 }}
            >
              <div className="text-4xl mb-6">💛</div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-shimmer mb-6">
                {giftMessage.title}
              </h3>
              <p className="font-elegant italic text-white/75 text-base md:text-lg leading-relaxed">
                {giftMessage.message}
              </p>
              <div className="gold-divider mt-8" />
              <p className="text-yellow-400/50 text-xs tracking-[0.3em] uppercase font-body mt-6">
                With all our love 💛
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GiftBox;
