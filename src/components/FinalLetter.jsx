import React from 'react';
import { motion } from 'framer-motion';
import { finalLetter, birthdayConfig } from '../data/index.js';

const FinalLetter = () => {
  const paragraphs = finalLetter.split('\n\n').filter(Boolean);

  return (
    <section id="letter" className="section-padding relative overflow-hidden min-h-screen flex items-center">
      {/* Ambient background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,195,0,0.05) 0%, transparent 70%)' }} />
      {/* Subtle texture dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-yellow-400"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.15,
          }}
          animate={{ opacity: [0, Math.random() * 0.15, 0] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }}
        />
      ))}

      <div className="max-w-3xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-yellow-400/50 text-xs tracking-[0.4em] uppercase font-body block mb-4">Written From the Heart</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-shimmer mb-6">A Personal Letter</h2>
          <div className="gold-divider max-w-xs mx-auto" />
        </motion.div>

        {/* Letter card */}
        <motion.div
          className="glass rounded-3xl overflow-hidden relative"
          style={{ border: '1px solid rgba(255,215,0,0.2)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Paper top decoration */}
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)' }} />

          {/* Letter content */}
          <div className="p-8 md:p-14 relative">
            {/* Decorative quote mark */}
            <div className="absolute top-8 left-8 text-7xl text-yellow-400/5 font-display font-black select-none leading-none">
              "
            </div>

            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                className={`mb-6 leading-relaxed ${
                  i === 0
                    ? 'font-display font-bold text-xl md:text-2xl text-yellow-300'
                    : i === paragraphs.length - 1
                    ? 'font-elegant italic text-white/70 text-base md:text-lg'
                    : 'font-elegant text-white/75 text-base md:text-lg'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {para}
              </motion.p>
            ))}

            {/* Signature */}
            <motion.div
              className="mt-10 pt-8 border-t border-yellow-400/10 text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="font-elegant italic text-yellow-400/60 text-sm mb-1">With endless love,</p>
              <p className="font-display font-bold text-xl text-shimmer">Everyone Who Loves You 💛</p>
            </motion.div>
          </div>

          {/* Paper bottom decoration */}
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)' }} />
        </motion.div>

        {/* Wax seal */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, type: 'spring', damping: 12 }}
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
            style={{
              background: 'linear-gradient(135deg, #FFC300, #FFD700)',
              boxShadow: '0 0 20px rgba(255,195,0,0.4)',
            }}>
            💛
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalLetter;
