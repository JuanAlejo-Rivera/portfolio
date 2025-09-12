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
    { name: "Material UI", icon: <span className="text-2xl">🎨</span> }, // <- aquí el fix
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

  const renderSkill = (skill: { name: string; icon: any }) => (
    <span
      key={skill.name}
      className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl shadow 
                 hover:bg-blue-500 hover:text-white transition-transform hover:scale-105"
    >
      {skill.icon}
      <span className="whitespace-nowrap">{skill.name}</span>
    </span>
  );

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-10">Habilidades</h2>

      <div className="space-y-10">
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {frontend.map(renderSkill)}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Backend</h3>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {backend.map(renderSkill)}
          </div>
        </div>

        {/* Herramientas */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Herramientas</h3>
          <div className="space-y-6">
            <div>
              <p className="font-medium mb-2">⚙️ Build & Deploy</p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                {tools.build.map(renderSkill)}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">🧪 Testing</p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                {tools.testing.map(renderSkill)}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">🔧 Versionado</p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                {tools.version.map(renderSkill)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
