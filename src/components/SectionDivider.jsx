import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ label }) => (
  <motion.div
    className="flex items-center justify-center gap-6 py-4 px-8"
    initial={{ opacity: 0, scaleX: 0.5 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex-1 gold-divider max-w-32 md:max-w-48" />
    <span className="text-yellow-400/30 text-xs tracking-[0.4em] uppercase font-body whitespace-nowrap">{label || '✦'}</span>
    <div className="flex-1 gold-divider max-w-32 md:max-w-48" />
  </motion.div>
);

export default SectionDivider;
