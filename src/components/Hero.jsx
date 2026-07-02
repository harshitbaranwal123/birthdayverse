import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { birthdayConfig } from '../data/index.js';

const BALLOONS = [
  { emoji: '🎈', color: '#FFD700', size: 60, x: '8%', delay: 0 },
  { emoji: '🎈', color: '#FF6B6B', size: 45, x: '20%', delay: 0.5 },
  { emoji: '🎈', color: '#FFC300', size: 70, x: '78%', delay: 1 },
  { emoji: '🎈', color: '#FF69B4', size: 50, x: '90%', delay: 0.3 },
  { emoji: '🎈', color: '#9B59B6', size: 40, x: '65%', delay: 0.8 },
];

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      color: { value: ['#FFD700', '#FFC300', '#FFB000', '#ffffff'] },
      links: { enable: false },
      move: {
        enable: true,
        direction: 'none',
        random: true,
        speed: 0.4,
        straight: false,
        outModes: { default: 'out' },
      },
      number: { value: 80, density: { enable: true, area: 1200 } },
      opacity: {
        value: { min: 0.05, max: 0.4 },
        animation: { enable: true, speed: 0.5, minimumValue: 0.05 },
      },
      shape: { type: ['circle', 'star'] },
      size: {
        value: { min: 0.5, max: 3 },
        animation: { enable: true, speed: 1, minimumValue: 0.5 },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Deep background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,195,0,0.06) 0%, transparent 70%)' }} />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 40% 40% at 20% 80%, rgba(255,100,0,0.03) 0%, transparent 60%)' }} />
      </div>

      {/* Particles */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Balloons */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {BALLOONS.map((b, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 flex flex-col items-center"
            style={{ left: b.x }}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: '-110vh', opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 12 + i * 3,
              delay: 2 + b.delay * 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div style={{ fontSize: b.size }}>{b.emoji}</div>
            <div className="w-px bg-white/20" style={{ height: 60 + b.size }} />
          </motion.div>
        ))}
      </div>

      {/* Shooting stars */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute h-px rounded-full"
          style={{
            top: `${10 + i * 20}%`,
            left: '-5%',
            background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
            width: 0,
          }}
          animate={{
            width: ['0px', '120px', '0px'],
            left: ['-5%', '110%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 3 + i * 4,
            repeat: Infinity,
            repeatDelay: 8 + i * 3,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Center content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 text-yellow-400/70 text-xs md:text-sm tracking-[0.4em] uppercase font-body">
            <span className="text-base">✦</span>
            A celebration of
            <span className="text-base">✦</span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          className="mb-10 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <h1
            className="font-display font-black leading-none text-shimmer select-none"
            style={{ fontSize: 'clamp(4rem, 15vw, 11rem)' }}
          >
            {birthdayConfig.name}
          </h1>
          {/* Underline glow */}
          <motion.div
            className="h-px mx-auto mt-4"
            style={{
              background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
              maxWidth: '60%',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </motion.div>

        {/* Typing animation */}
        <motion.div
          className="mb-12 min-h-[4rem] md:min-h-[3rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <TypeAnimation
            sequence={[
              1000,
              'Today is not just a day...',
              2200,
              'It\'s a celebration of an extraordinary soul.',
              2500,
              'A tribute to someone truly irreplaceable.',
              2500,
              `Happy ${birthdayConfig.age}th Birthday, ${birthdayConfig.name}. 🎂`,
              3000,
            ]}
            wrapper="p"
            speed={55}
            repeat={Infinity}
            className="font-elegant italic text-xl md:text-2xl lg:text-3xl text-yellow-100/80 leading-relaxed"
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <motion.button
            onClick={() => document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-full font-body text-sm tracking-[0.15em] uppercase font-semibold overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FFC300, #FFD700)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 text-black">Begin the Celebration</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-body text-sm tracking-[0.15em] uppercase font-medium border border-yellow-400/30 text-yellow-400/80 hover:border-yellow-400/60 hover:text-yellow-300 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Read the Letter
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-yellow-400/40 text-xs tracking-[0.3em] uppercase font-body">Scroll to explore</span>
        <motion.div
          className="w-5 h-8 border border-yellow-400/30 rounded-full flex justify-center pt-1"
          animate={{ borderColor: ['rgba(255,195,0,0.3)', 'rgba(255,195,0,0.7)', 'rgba(255,195,0,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-yellow-400"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 text-yellow-400/20 text-2xl select-none">✦</div>
      <div className="absolute top-8 right-8 text-yellow-400/20 text-2xl select-none">✦</div>
      <div className="absolute bottom-8 left-8 text-yellow-400/10 text-xl select-none">✦</div>
      <div className="absolute bottom-8 right-8 text-yellow-400/10 text-xl select-none">✦</div>
    </section>
  );
};

export default Hero;
