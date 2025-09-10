import { useState } from "react";
import projects from "./data/projects";
import { useNavigate } from "react-router-dom";
import DetailsModal from "./components/DetailsModal";
import { CardLink } from "./components/CardLink";
import { BookOpen, Briefcase, Code2, GraduationCap, Heart, Rocket } from "lucide-react";
import AboutMe from "./components/AboutMe";

type ModalData = {
  title: string
  description: string
  images: string[]
}



export default function Portfolio() {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState<ModalData>()

  return (
    <div className="min-h-screen animated-bg text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <img
          src="/vite.svg"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover"
        />

        <h1 className="text-3xl md:text-5xl font-extrabold text-center">
          <span className="block text-gray-300">Hola, soy</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Juan Alejandro Rivera Oquendo
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl text-center">
          Desarrollador Web Fullstack Junior 🚀 | Apasionado por aprender y
          crear aplicaciones modernas.
        </p>

        <a
          href="/cv.pdf"
          className="mt-8 inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:scale-105 transition-transform"
        >
          Descargar CV
        </a>
      </section>


      <AboutMe />

      {/* Proyectos */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-10 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map(({ title, description, images, deploy, repository }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow p-4 flex flex-col h-full"
            >
              <div className="h- bg-gray-300 dark:bg-gray-600 rounded-xl mb-4">
                <img
                  src={images[0]} // 👈 mostramos solo la primera como preview
                  alt={`Imagen de ${title}`}
                  className="rounded-xl w-full max-h-[60vh] object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => {
                    navigate(location.pathname + "?details=true")
                    setModalData({ title, description, images }) // 👈 pasamos todas
                  }}
                />
              </div>
              <button
                className="cursor-pointer hover:underline text-slate-300"
                onClick={() => {
                  navigate(location.pathname + "?details=true")
                  setModalData({ title, description, images }) // 👈 pasamos todas
                }}
              >
                Ver más
              </button>
              <h3 className="text-xl font-semibold">Proyecto: {title}</h3>
              <p className="text-sm mt-2 flex-1">{description}</p>

              <CardLink deploy={deploy} repository={repository} />

            </div>
          ))}

        </div>
      </section>


      {/* Skills */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "Tailwind",
            "Firebase",
            "Javascript",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="mb-6">
          ¿Querés charlar? Escribime a{" "}
          <a href="mailto:tuemail@gmail.com" className="text-blue-500">
            tuemail@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <DetailsModal data={modalData} />
    </div>
  );
}
