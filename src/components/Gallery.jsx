import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/index.js';

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [unlocked, setUnlocked] = useState(false);
  const [secretKey, setSecretKey] = useState("");

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,195,0,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-yellow-400/50 text-xs tracking-[0.4em] uppercase font-body block mb-4">Captured Moments</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-shimmer mb-6">Gallery of Joy</h2>
          <p className="font-elegant italic text-yellow-100/50 text-lg max-w-lg mx-auto">
            Every photograph holds a world of feeling.
          </p>
          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </motion.div>

        {/* Masonry grid */}
        {!unlocked ? (

<div className="flex justify-center items-center py-24">

  <motion.div
    initial={{opacity:0, scale:0.9}}
    animate={{opacity:1, scale:1}}
    className="max-w-md w-full rounded-3xl border border-yellow-400/20 bg-[#111] p-10 text-center shadow-2xl"
  >

    <div className="text-7xl mb-6">
      🔒
    </div>

    <h2 className="text-3xl font-display text-yellow-400 mb-4">
      Private Memory Vault
    </h2>

    <p className="text-yellow-100/60 mb-8">
      These memories are protected.
      Only someone special may unlock them.
    </p>

    <input
  type="password"
  placeholder="Enter Secret Key"
  value={secretKey}
  onChange={(e) => setSecretKey(e.target.value)}
  style={{
    width: "100%",
    padding: "15px",
    background: "white",
    color: "black",
    position: "relative",
    zIndex: 9999
  }}
/>

<motion.button
  type="button"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
 onClick={() => {
  if (secretKey.trim().toLowerCase() === "11feb2025") {
    setUnlocked(true);
  } else {
    alert("❌ Wrong Secret Key");
  }
}}
  className="relative z-50 px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold"
>
  🗝 Unlock Memories
</motion.button>

  </motion.div>

</div>

) : (

<div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              className="break-inside-avoid mb-3 md:mb-4 relative group overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(img)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '1/1' : '4/3' }}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-xl flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                    <span className="text-yellow-400 text-xl">+</span>
                  </div>
                </motion.div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-xl border border-yellow-400/0 group-hover:border-yellow-400/40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
)}
      </div>
      

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <motion.div
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[80vh] w-auto object-contain"
              />
              <div className="absolute inset-0 rounded-2xl border border-yellow-400/30 pointer-events-none" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-yellow-400/40 text-yellow-400 flex items-center justify-center hover:bg-yellow-400/20 transition-colors text-xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
