import { useState } from "react";
import { motion } from "framer-motion";

const MemoryVault = ({ onUnlock, onClose }) => {
  const [password, setPassword] = useState("");

  const unlock = () => {
    if (password.trim() === "foreverus") {
      onUnlock();
    } else {
      alert("❌ Wrong Secret Key");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex justify-center items-center z-[9999]">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#111] border border-yellow-400/30 rounded-3xl p-10 w-[90%] max-w-md text-center shadow-2xl"
      >

        <div className="text-7xl mb-5">
          🔒
        </div>

        <h2 className="text-yellow-400 text-3xl mb-3">
          Private Memory Vault
        </h2>

        <p className="text-gray-400 mb-6">
          Only one heart knows the key.
        </p>

        <input
          type="password"
          placeholder="Enter Secret Key"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-black border border-yellow-400/30 p-4 text-white mb-5 outline-none"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={unlock}
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold"
        >
          🗝 Unlock Memories
        </motion.button>

        <button
          onClick={onClose}
          className="block mt-6 text-gray-500 hover:text-white mx-auto"
        >
          Close
        </button>

      </motion.div>

    </div>
  );
};

export default MemoryVault;