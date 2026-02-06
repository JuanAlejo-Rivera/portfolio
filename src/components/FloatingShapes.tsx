import { motion } from 'framer-motion';

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Círculos flotantes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl"
        animate={{
          y: [0, 100, 0],
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/4 right-20 w-48 h-48 bg-blue-500/5 rounded-full blur-xl"
        animate={{
          y: [0, -80, 0],
          x: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-indigo-500/5 rounded-full blur-xl"
        animate={{
          y: [0, 120, 0],
          x: [0, 80, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-56 h-56 bg-purple-500/5 rounded-full blur-xl"
        animate={{
          y: [0, -100, 0],
          x: [0, 60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Formas geométricas */}
      <motion.div
        className="absolute top-40 right-1/4 w-16 h-16 border border-cyan-400/10"
        animate={{
          rotate: [0, 360],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/3 w-12 h-12 border border-blue-400/10 rotate-45"
        animate={{
          rotate: [45, 405],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/4 w-20 h-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full border-2 border-indigo-400/10 rounded-full" />
      </motion.div>
    </div>
  );
}
