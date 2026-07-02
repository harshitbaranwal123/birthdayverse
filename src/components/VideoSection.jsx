import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,195,0,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-yellow-400/50 text-xs tracking-[0.4em] uppercase font-body block mb-4">A Message For You</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-shimmer mb-6">Birthday Video</h2>
          <p className="font-elegant italic text-yellow-100/50 text-lg max-w-lg mx-auto">
            Press play and feel the love.
          </p>
          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </motion.div>

        {/* Video frame */}
        <motion.div
          className="relative rounded-3xl overflow-hidden glow-gold"
          style={{ border: '1px solid rgba(255,215,0,0.3)' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Corner ornaments */}
          {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8 z-20 pointer-events-none`}>
              <div className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-5 h-px bg-yellow-400/60`} />
              <div className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} h-5 w-px bg-yellow-400/60`} />
            </div>
          ))}

          {/* Aspect ratio box */}
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            {!playing ? (
              <div className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1200 50%, #0d0d0d 100%)' }}>
                {/* Thumbnail overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl opacity-10 select-none">🎂</div>
                </div>
                {/* Play button */}
                <motion.button
                  onClick={() => setPlaying(true)}
                  className="relative z-10 flex flex-col items-center gap-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #FFC300, #FFD700)',
                      boxShadow: '0 0 40px rgba(255,195,0,0.5)',
                    }}
                    animate={{ boxShadow: ['0 0 30px rgba(255,195,0,0.4)', '0 0 60px rgba(255,195,0,0.7)', '0 0 30px rgba(255,195,0,0.4)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8 md:w-10 md:h-10 ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                  <span className="text-yellow-400/70 text-sm tracking-[0.2em] uppercase font-body">
                    Play Birthday Message
                  </span>
                </motion.button>
              </div>
            ) : (
              <iframe
  className="absolute inset-0 w-full h-full"
  src="https://www.youtube.com/embed/CiyAA_xraSo?autoplay=1"
  title="Birthday Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
            )}
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          className="text-center text-yellow-400/40 font-elegant italic text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Replace with your personal birthday video for maximum impact ✨
        </motion.p>
      </div>
    </section>
  );
};

export default VideoSection;
