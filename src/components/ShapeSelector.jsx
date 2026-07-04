import { motion } from "framer-motion";

const shapes = [
  "🍁",
  "⭐",
  "❤️",
  "🌙",
  "🌸",
];

const ShapeSelector = ({ onHeart, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[9999]">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#111] border border-yellow-400/30 rounded-3xl p-10 w-[90%] max-w-xl text-center"
      >

        <h2 className="text-3xl text-yellow-400 mb-4">
          Choose the Symbol
        </h2>

        <p className="text-gray-400 mb-8">
          Only one symbol knows the way...
        </p>

        <div className="grid grid-cols-5 gap-5">

          {shapes.map((shape, index) => (

            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-5xl"
              onClick={() => {

                if (shape === "❤️") {

                  onHeart();

                } else {

                  alert("❌ Wrong Symbol");

                }

              }}
            >
              {shape}
            </motion.button>

          ))}

        </div>

        <button
          onClick={onClose}
          className="mt-8 text-gray-500 hover:text-white"
        >
          Close
        </button>

      </motion.div>

    </div>
  );
};

export default ShapeSelector;