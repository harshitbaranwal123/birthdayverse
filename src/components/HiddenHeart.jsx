import { motion } from "framer-motion";

const HiddenHeart = ({ onReveal }) => {
  return (
    <motion.div
      onDoubleClick={onReveal}
      whileHover={{ scale: 1.3 }}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [1, 1.15, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity
      }}
      className="fixed top-6 right-8 z-[9999] cursor-pointer select-none"
    >
      <span className="text-red-500 text-2xl drop-shadow-[0_0_15px_red]">
        ❤️
      </span>
    </motion.div>
  );
};

export default HiddenHeart;