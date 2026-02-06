import { useSpring, animated } from "@react-spring/web";
import NavBar from './NavBar';
import { Typewriter } from 'react-simple-typewriter';
import { fireworkConfetti } from "./fireworkConfetti";
import { useIsDecember } from "../hooks/useIsDecember";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ParallaxSection from './ParallaxSection';

export default function Profile() {
  const isDecember = useIsDecember();
  const { t } = useTranslation();
  
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 300,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      <ParallaxSection speed={-0.3}>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      </ParallaxSection>
      
      <ParallaxSection speed={-0.5}>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      </ParallaxSection>
      
      <div className="relative z-10 max-w-6xl mx-auto">

        <animated.div style={fadeInUp} className="flex justify-center mb-12 overflow-visible">
          <div className="relative group overflow-visible">

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative overflow-visible">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyan-400/50 p-2 bg-gradient-to-br from-slate-900 to-blue-950 relative group-hover:border-cyan-400/80 transition-colors duration-300">
                <img
                  src="img/perfil.png"
                  alt="Foto de perfil de Juan Alejandro Rivera Oquendo"
                  className="w-full h-full rounded-full object-cover border-2 border-slate-700"
                />
              </div>
              
              {/* Gorro navideño - Solo visible en diciembre */}
              {isDecember && (
                <div className="absolute -top-19 md:-top-24 left-13 md:left-17 -translate-x-1/2 pointer-events-none z-20 w-[300px] md:w-[400px]">
                  <img 
                    src="img/seasson/christmashatBIG.png" 
                    alt="Gorro navideño"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              )}

              <div className="absolute inset-0 border-2 border-dashed border-cyan-400/30 rounded-full animate-spin [animation-duration:20s]" />
            </div>
          </div>
        </animated.div>


        <NavBar />


        <animated.div style={fadeInUp} className="text-center mt-16 mb-8">
          <div className="block relative w-full max-w-4xl px-4 mx-auto">
            <motion.span 
              className="block text-cyan-400 text-sm md:text-base font-mono mb-4 tracking-[0.3em] uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Typewriter words={[t('profile.greeting')]} cursor cursorStyle="_" typeSpeed={60} deleteSpeed={70} delaySpeed={5000} loop />
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 leading-[1.25] sm:leading-[1.2] md:leading-[1.15] lg:leading-[1.12] overflow-visible py-4">
              <motion.span 
                className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent pb-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                Juan Alejandro
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent pt-1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Rivera Oquendo
              </motion.span>
            </h1>

            <div className="flex items-center justify-center gap-4 mt-6">
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
              <motion.div 
                className="w-2 h-2 bg-cyan-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="h-px bg-gradient-to-l from-transparent to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </div>
          </div>
        </animated.div>

        <animated.div style={fadeInUp} className="text-center mb-12">
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-light text-slate-300 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="font-mono text-cyan-400">[</span>
            <Typewriter words={[t('profile.role')]} cursor cursorStyle="_" typeSpeed={40} deleteSpeed={50} delaySpeed={7000} loop />
            <span className="font-mono text-cyan-400">]</span>
          </motion.p>
          <motion.p 
            className="text-base md:text-lg text-slate-400 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Typewriter words={[t('profile.passion')]} cursor cursorStyle="_" typeSpeed={20} deleteSpeed={30} delaySpeed={7000} loop />
          </motion.p>
        </animated.div>

        <animated.div style={fadeInUp} className="flex justify-center">
          <motion.a
            href="/doc/Juan-Rivera-CV.pdf"
            download={"Juan_Rivera_CV.pdf"}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-cyan-400/30 hover:border-cyan-400/70 shadow-[0_0_16px_2px_#22d3ee55,0_0_0_2px_#fff2_inset] hover:shadow-[0_0_32px_8px_rgba(34,211,238,0.45)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/30 overflow-hidden" 
            aria-label={t('ariaLabels.downloadCV')}
            onClick={fireworkConfetti}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 opacity-40 group-hover:opacity-60 blur-sm animate-gradient-x z-0 transition-all duration-500" />
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-5 h-5 relative z-10"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </motion.svg>
            <span className="relative z-10 font-bold text-lg text-white drop-shadow-[0_1px_6px_rgba(34,211,238,0.7)] tracking-wide select-none">
              {t('profile.downloadCV')}
            </span>
            <span className="absolute inset-0 rounded-2xl border-2 border-white/10 group-hover:border-cyan-300/40 pointer-events-none z-20 transition-all duration-300" />
          </motion.a>
        </animated.div>
      </div>
    </section>
  );
}
