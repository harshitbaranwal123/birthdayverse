import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { wishes } from '../data/index.js';

const WishCard = ({ wish }) => {
  return (
    <div className="glass-gold rounded-3xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden glow-gold">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 text-8xl opacity-5 font-display font-black leading-none select-none">
        "
      </div>

      {/* Quote mark */}
      <div className="text-yellow-400/30 text-6xl font-display font-black leading-none mb-4 select-none">"</div>

      {/* Message */}
      <p className="font-elegant italic text-white/80 text-base md:text-lg leading-relaxed flex-1 mb-8">
        {wish.message}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 border-t border-yellow-400/10 pt-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
          style={{ background: 'rgba(255,195,0,0.15)', border: '1px solid rgba(255,195,0,0.3)' }}>
          {wish.emoji}
        </div>
        <div>
          <div className="font-display font-bold text-yellow-300 text-sm md:text-base">{wish.author}</div>
          <div className="text-yellow-400/40 text-xs tracking-wider uppercase font-body">{wish.role}</div>
        </div>
      </div>

      {/* Corner stars */}
      <div className="absolute bottom-4 right-6 text-yellow-400/20 text-sm select-none">✦ ✦ ✦</div>
    </div>
  );
};

const Wishes = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,195,0,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-yellow-400/50 text-xs tracking-[0.4em] uppercase font-body block mb-4">From Those Who Love You</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-shimmer mb-6">Birthday Wishes</h2>
          <p className="font-elegant italic text-yellow-100/50 text-lg max-w-lg mx-auto">
            Words from the hearts that beat for you.
          </p>
          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
            style={{ paddingBottom: '48px' }}
          >
            {wishes.map((wish, index) => (
              <SwiperSlide key={index}>
                <div style={{ height: 'auto', minHeight: 320 }}>
                  <WishCard wish={wish} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Navigation hint */}
        <motion.p
          className="text-center text-yellow-400/30 text-xs tracking-[0.2em] uppercase font-body mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Swipe or wait to see all wishes
        </motion.p>
      </div>
    </section>
  );
};

export default Wishes;
