import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { privateGallery } from "../data/privateGallery";

const PrivateGallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="fixed inset-0 bg-black z-[9999] overflow-y-auto">

      <div className="min-h-screen p-10">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-5xl text-yellow-400 font-bold mb-5"
        >
          ❤️ OUR PRIVATE WORLD ❤️
        </motion.h1>

        <p className="text-center text-gray-400 mb-16">
          Welcome back...
          <br />
          These memories belong only to us.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {privateGallery.map((photo) => (

            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(photo)}
              className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-[#111] shadow-lg cursor-pointer"
            >

              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-3">
                <p className="text-center text-yellow-300 font-medium">
                  {photo.title}
                </p>
              </div>

            </motion.div>

          ))}

        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-[99999] p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >

              <motion.img
                src={selected.src}
                alt={selected.title}
                className="max-w-[95%] max-h-[90vh] rounded-3xl shadow-2xl"
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.7 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute top-8 right-8 text-white text-5xl"
              >
                ×
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
};

export default PrivateGallery;