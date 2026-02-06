import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiReactrouter,
  SiTailwindcss,
  SiMongodb,
  SiJsonwebtokens,
  SiFirebase,
  SiCloudinary,
  SiJest,
  SiExpress,
  SiN8N,
} from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ParallaxSection from './ParallaxSection';

export default function Skills() {
  const { t } = useTranslation();

  const frontend = [
    { name: "React", icon: <FaReact className="text-2xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-2xl" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-2xl" /> },
    { name: "Zustand", icon: <span className="text-2xl">⚡</span> },
    { name: "React Router", icon: <SiReactrouter className="text-2xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-2xl" /> },
    { name: "Material UI", icon: <span className="text-2xl">🎨</span> },
    { name: "HeadlessUI", icon: <span className="text-2xl">🧩</span> },
    { name: "React Hook Form", icon: <span className="text-2xl">📋</span> },
    { name: "Zod", icon: <span className="text-2xl">✔️</span> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-2xl" /> },
    { name: "Express", icon: <SiExpress className="text-2xl" /> },
    { name: "MongoDB (Mongoose)", icon: <SiMongodb className="text-2xl" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-2xl" /> },
    { name: "bcrypt", icon: <RiLockPasswordLine className="text-2xl" /> },
    { name: "express-validator", icon: <span className="text-2xl">📝</span> },
    { name: "Nodemailer", icon: <MdOutlineEmail className="text-2xl" /> },
  ];

  const tools = {
    build: [
      { name: "Vite", icon: <span className="text-2xl">⚡</span> },
      { name: "Firebase", icon: <SiFirebase className="text-2xl" /> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-2xl" /> },
    ],
    testing: [{ name: "Jest", icon: <SiJest className="text-2xl" /> }],
    version: [{ name: "Git & GitHub", icon: <FaGitAlt className="text-2xl" /> }],
    automation: [{ name: "n8n", icon: <SiN8N className="text-2xl" color="#E3496D" /> }],
  };


  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
      <ParallaxSection speed={-0.2}>
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      </ParallaxSection>
      
      <div className="relative z-10 mb-20">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-mono mb-4"
        >
          &lt;skills /&gt;
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black mb-4"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </motion.h2>
        <div className="flex justify-center gap-2 mt-4">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" 
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 bg-cyan-400 rounded-full" 
          />
        </div>
      </div>

      <div className="relative z-10 space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-slate-900/30 border border-cyan-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-8 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text flex items-center justify-center gap-3">
              <span className="text-4xl">⚡</span>
              {t('skills.frontend')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frontend.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="group relative px-5 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 cursor-default"
                >
                  <span className="flex items-center gap-2">
                    <motion.span 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl"
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="font-semibold text-sm">{skill.name}</span>
                  </span>
                  <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/50 rounded-2xl transition-all duration-300" />
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="backdrop-blur-xl bg-slate-900/30 border border-indigo-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-tr-full" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-8 text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text flex items-center justify-center gap-3">
              <span className="text-4xl">🔧</span>
              {t('skills.backend')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {backend.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="group relative px-5 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-white transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20 cursor-default"
                >
                  <span className="flex items-center gap-2">
                    <motion.span 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl"
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="font-semibold text-sm">{skill.name}</span>
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="backdrop-blur-xl bg-slate-900/30 border border-purple-500/20 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-black mb-12 text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text flex items-center justify-center gap-3">
            <span className="text-4xl">🛠️</span>
            {t('skills.tools')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-cyan-400 font-bold mb-4 text-sm uppercase tracking-wider">{t('skills.buildDeploy')}</p>
              <div className="flex flex-wrap gap-2">
                {tools.build.map((skill) => (
                  <motion.span 
                    key={skill.name} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-white text-sm font-medium hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 cursor-default flex items-center gap-2"
                  >
                    {skill.icon} {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-indigo-400 font-bold mb-4 text-sm uppercase tracking-wider">{t('skills.testing')}</p>
              <div className="flex flex-wrap gap-2">
                {tools.testing.map((skill) => (
                  <motion.span 
                    key={skill.name} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-white text-sm font-medium hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 cursor-default flex items-center gap-2"
                  >
                    {skill.icon} {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-purple-400 font-bold mb-4 text-sm uppercase tracking-wider">{t('skills.versioning')}</p>
              <div className="flex flex-wrap gap-2">
                {tools.version.map((skill) => (
                  <motion.span 
                    key={skill.name} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-white text-sm font-medium hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 cursor-default flex items-center gap-2"
                  >
                    {skill.icon} {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-purple-400 font-bold mb-4 text-sm uppercase tracking-wider">{t('skills.automation')}</p>
              <div className="flex flex-wrap gap-2">
                {tools.automation.map((skill) => (
                  <motion.span 
                    key={skill.name} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-white text-sm font-medium hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 cursor-default flex items-center gap-2"
                  >
                    {skill.icon} {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
