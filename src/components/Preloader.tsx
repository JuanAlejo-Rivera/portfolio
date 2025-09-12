import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
        >
          {/* Nombre */}
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-wider relative"
          >
            Juan Alejandro Rivera

            {/* Glow blanco animado detrás del texto */}
            <motion.span
              className="absolute inset-0 blur-2xl bg-white opacity-30"
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.h1>

          {/* Línea animada con colores */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "140px", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            className="h-[2px] mt-4 mb-4 relative overflow-hidden rounded-full"
          >
            <motion.div
              className="h-full w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            />
          </motion.div>

          {/* Subtítulo */}
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-2xl tracking-[0.35em] text-gray-300"
          >
            Portafolio
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
