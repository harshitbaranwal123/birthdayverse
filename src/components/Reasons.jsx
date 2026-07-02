import React from 'react';
import { motion } from 'framer-motion';
import { reasons } from '../data/index.js';

const GOLD_SHADES = [
  '#FFD700', '#FFC300', '#FFB800', '#FFA500',
  '#FFD700', '#FFCB00', '#FFB000', '#FF9F00',
];

const FlipCard = ({ reason, index }) => {
  const color = GOLD_SHADES[index % GOLD_SHADES.length];

  return (
    <motion.div
      className="flip-card h-36 md:h-40"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
    >
      <div className="flip-card-inner w-full h-full">
        {/* Front */}
        <div className="flip-card-front glass flex flex-col items-center justify-center p-4 text-center"
          style={{ border: `1px solid ${color}30` }}>
          <div className="text-3xl mb-2">✦</div>
          <div className="text-yellow-400/40 text-xs tracking-[0.25em] uppercase font-body">Reason #{index + 1}</div>
          <div className="text-yellow-400/30 text-xs mt-2 font-body">Hover to reveal</div>
        </div>

        {/* Back */}
        <div
          className="flip-card-back flex items-center justify-center p-4 text-center"
          style={{
            background: `linear-gradient(135deg, ${color}15 0%, ${color}08 100%)`,
            border: `1px solid ${color}40`,
            boxShadow: `inset 0 0 30px ${color}10`,
          }}
        >
          <p className="font-elegant italic text-white/90 text-sm md:text-base leading-relaxed">
            {reason}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Reasons = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,195,0,0.025) 50%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-yellow-400/50 text-xs tracking-[0.4em] uppercase font-body block mb-4">50 Reasons</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-shimmer mb-6">
            Why You're Amazing
          </h2>
          <p className="font-elegant italic text-yellow-100/50 text-lg max-w-lg mx-auto">
            Hover each card to discover a truth about you.
          </p>
          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {reasons.map((reason, index) => (
            <FlipCard key={index} reason={reason} index={index} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center text-yellow-400/30 font-elegant italic text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          ...and a thousand more reasons we couldn't fit on a page.
        </motion.p>
      </div>
    </section>
  );
};

export default Reasons;
