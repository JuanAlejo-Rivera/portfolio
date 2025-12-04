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
} from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

export default function Skills() {
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
  };


  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 mb-20">
        <span className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-mono mb-4">
          &lt;skills /&gt;
        </span>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 space-y-16">
        <div className="backdrop-blur-xl bg-slate-900/30 border border-cyan-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-8 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text flex items-center justify-center gap-3">
              <span className="text-4xl">⚡</span>
              Frontend
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frontend.map((skill) => (
                <span
                  key={skill.name}
                  className="group relative px-5 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 cursor-default"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                    <span className="font-semibold text-sm">{skill.name}</span>
                  </span>
                  <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/50 rounded-2xl transition-all duration-300" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-slate-900/30 border border-indigo-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-tr-full" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-8 text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text flex items-center justify-center gap-3">
              <span className="text-4xl">🔧</span>
              Backend
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {backend.map((skill) => (
                <span
                  key={skill.name}
                  className="group relative px-5 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-white transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/10 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 cursor-default"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                    <span className="font-semibold text-sm">{skill.name}</span>
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-slate-900/30 border border-purple-500/20 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-black mb-12 text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text flex items-center justify-center gap-3">
            <span className="text-4xl">🛠️</span>
            Herramientas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-cyan-400 font-bold mb-4 text-sm uppercase tracking-wider">Build & Deploy</p>
              <div className="flex flex-wrap gap-2">
                {tools.build.map((skill) => (
                  <span key={skill.name} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-white text-sm font-medium hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 cursor-default flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-indigo-400 font-bold mb-4 text-sm uppercase tracking-wider">Testing</p>
              <div className="flex flex-wrap gap-2">
                {tools.testing.map((skill) => (
                  <span key={skill.name} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-white text-sm font-medium hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 cursor-default flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-purple-400 font-bold mb-4 text-sm uppercase tracking-wider">Versionado</p>
              <div className="flex flex-wrap gap-2">
                {tools.version.map((skill) => (
                  <span key={skill.name} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-white text-sm font-medium hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 cursor-default flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
