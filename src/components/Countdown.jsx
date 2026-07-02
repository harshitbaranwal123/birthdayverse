import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../data/index.js';

const getTimeLeft = () => {
  const now = new Date();
  const target = new Date(birthdayConfig.birthdate);
  target.setHours(0, 0, 0, 0);
  const diff = target - now;
  if (diff <= 0) return null; // Birthday is today or past!
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountUnit = ({ value, label }) => {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      setTimeout(() => {
        setPrev(value);
        setFlip(false);
      }, 300);
    }
  }, [value, prev]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative glass-gold rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] text-center glow-gold overflow-hidden">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,215,0,0.3) 50%, transparent 60%)', backgroundSize: '200% 200%', animation: 'shimmer 3s linear infinite' }} />
        <motion.div
          key={value}
          initial={{ y: flip ? -20 : 0, opacity: flip ? 0 : 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="font-display font-black text-4xl md:text-6xl text-shimmer leading-none"
        >
          {String(value).padStart(2, '0')}
        </motion.div>
        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.6), transparent)' }} />
      </div>
      <span className="mt-3 text-yellow-400/50 text-xs tracking-[0.3em] uppercase font-body">
        {label}
      </span>
    </div>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="countdown" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,195,0,0.04) 0%, transparent 70%)' }} />

      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-yellow-400/50 text-xs tracking-[0.4em] uppercase font-body">Counting Down</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="font-display font-bold text-4xl md:text-6xl text-shimmer mb-4"
        >
          {timeLeft ? 'Until the Big Day' : '🎂 It\'s Your Birthday!'}
        </motion.h2>

        <motion.p variants={itemVariants} className="font-elegant italic text-yellow-100/50 text-lg md:text-xl mb-16">
          {timeLeft
            ? `Every second brings us closer to celebrating ${birthdayConfig.name}`
            : `Today is the day we celebrate the amazing ${birthdayConfig.name}!`}
        </motion.p>

        {timeLeft ? (
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-end gap-4 md:gap-8 flex-wrap"
          >
            <CountUnit value={timeLeft.days} label="Days" />
            <div className="text-yellow-400/40 text-3xl md:text-4xl font-display font-light mb-8">:</div>
            <CountUnit value={timeLeft.hours} label="Hours" />
            <div className="text-yellow-400/40 text-3xl md:text-4xl font-display font-light mb-8">:</div>
            <CountUnit value={timeLeft.minutes} label="Minutes" />
            <div className="text-yellow-400/40 text-3xl md:text-4xl font-display font-light mb-8">:</div>
            <CountUnit value={timeLeft.seconds} label="Seconds" />
          </motion.div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="text-8xl md:text-9xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🎂
          </motion.div>
        )}

        {/* Bottom note */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="gold-divider mb-8" />
          <p className="font-elegant italic text-yellow-100/30 text-base md:text-lg">
            "The most beautiful thing we can experience is the celebration of a life well-lived."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Countdown;
