import React from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../data/index.js';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden py-16 px-4">
      {/* Top divider */}
      <div className="gold-divider mb-12 max-w-xl mx-auto" />

      <div className="max-w-2xl mx-auto text-center">
        {/* Logo / Crown */}
        <motion.div
          className="text-5xl mb-6"
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          👑
        </motion.div>

        <motion.p
          className="font-elegant italic text-yellow-100/40 text-sm md:text-base mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Made with 💛 for someone truly irreplaceable.
        </motion.p>

        <p className="text-yellow-400/30 text-xs tracking-[0.3em] uppercase font-body mb-10">
          {birthdayConfig.fullName} · {new Date().getFullYear()}
        </p>

        {/* Ornaments */}
        <div className="flex justify-center items-center gap-4 text-yellow-400/20 text-sm mb-10 select-none">
          <span>✦</span>
          <div className="gold-divider w-24" />
          <span>✦</span>
          <div className="gold-divider w-24" />
          <span>✦</span>
        </div>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          className="text-yellow-400/40 hover:text-yellow-400 text-xs tracking-[0.3em] uppercase font-body transition-colors flex items-center gap-2 mx-auto"
          whileHover={{ y: -2 }}
        >
          <span>↑</span>
          Back to Top
          <span>↑</span>
        </motion.button>
      </div>

      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,195,0,0.03) 0%, transparent 70%)' }} />
    </footer>
  );
};

export default Footer;
