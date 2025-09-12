import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-wider"
          >
           Juan Alejandro Rivera
          </motion.h1>

          {/* Línea animada */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            className="h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mb-4"
          />

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-2xl tracking-[0.3em] text-gray-300"
          >
            Portafolio
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
