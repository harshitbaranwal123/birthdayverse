import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/index.js';

const TimelineCard = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center gap-8 md:gap-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
    >
      {/* Card */}
      <div className="flex-1 md:max-w-[calc(50%-40px)]">
        <motion.div
          className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group"
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.3 }}
        >
          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            style={{ background: `radial-gradient(circle at center, ${item.color}10 0%, transparent 70%)` }} />

          {/* Year badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{item.emoji}</span>
            <span
              className="text-xs font-body tracking-[0.3em] uppercase px-3 py-1 rounded-full"
              style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}
            >
              {item.year}
            </span>
          </div>

          <h3 className="font-display font-bold text-xl md:text-2xl mb-3" style={{ color: item.color }}>
            {item.title}
          </h3>
          <p className="font-body text-white/60 text-sm md:text-base leading-relaxed">
            {item.description}
          </p>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${item.color}60, transparent)` }} />
        </motion.div>
      </div>

      {/* Center node — hidden on mobile, shown on md+ */}
      <div className="hidden md:flex flex-shrink-0 w-20 items-center justify-center relative">
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center z-10 relative"
          style={{
            background: `radial-gradient(circle, ${item.color} 0%, ${item.color}80 100%)`,
            boxShadow: `0 0 20px ${item.color}60, 0 0 40px ${item.color}30`,
          }}
          whileInView={{ scale: [0.5, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-black font-display font-black text-xs">
            {item.year.slice(2)}
          </span>
        </motion.div>
      </div>

      {/* Empty spacer for alternating layout */}
      <div className="hidden md:block flex-1 md:max-w-[calc(50%-40px)]" />
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,195,0,0.02) 50%, transparent 100%)' }} />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-yellow-400/50 text-xs tracking-[0.4em] uppercase font-body block mb-4">A Life In Moments</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-shimmer mb-6">Memory Timeline</h2>
          <p className="font-elegant italic text-yellow-100/50 text-lg md:text-xl max-w-xl mx-auto">
            Every chapter of your story deserves to be remembered.
          </p>
          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,215,0,0.3) 20%, rgba(255,215,0,0.3) 80%, transparent 100%)' }} />

          <div className="flex flex-col gap-12 md:gap-16">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.year} item={item} index={index} />
            ))}
          </div>

          {/* End star */}
          <motion.div
            className="hidden md:flex absolute left-1/2 -bottom-6 -translate-x-1/2 w-12 h-12 items-center justify-center"
            whileInView={{ rotate: [0, 360] }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            <span className="text-2xl text-yellow-400">✦</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
