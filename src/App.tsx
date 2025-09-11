import { useEffect, useState } from "react";
import projects from "./data/projects";
import { useNavigate } from "react-router-dom";
import DetailsModal from "./components/DetailsModal";
import { CardLink } from "./components/CardLink";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import { ArrowUp } from "lucide-react"; // un ícono bonito

type ModalData = {
  title: string
  description: string
  images: string[]
}




export default function Portfolio() {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState<ModalData>()

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };




  return (
    <div className="min-h-screen animated-bg text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center mb-25 text-center px-6">
        <img
          src="img/perfil.png"
          alt="Foto de perfil"
          className="w-[210px] h-[210px] rounded-full shadow-lg mb-6 object-cover mt-15"
        />

        <nav className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            { id: "sobre-mi", label: "Sobre mí" },
            { id: "proyectos", label: "Proyectos" },
            { id: "skills", label: "Habilidades" },
            { id: "contacto", label: "Contacto" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow hover:scale-105 transition-transform"
            >
              {label}
            </a>
          ))}
        </nav>


        <h1 className="text-3xl md:text-5xl font-extrabold text-center mt-10">
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

      <section id="sobre-mi" className="py-10">
        <AboutMe />
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 scroll-mt-[-150px]">

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
                    src={images[0]}
                    alt={`Imagen de ${title}`}
                    className="rounded-xl w-full max-h-[60vh] object-cover transition-transform duration-300 hover:scale-105"
                    onClick={() => {
                      navigate(location.pathname + "?details=true")
                      setModalData({ title, description, images })
                    }}
                  />
                </div>
                <button
                  className="cursor-pointer hover:underline text-slate-300"
                  onClick={() => {
                    navigate(location.pathname + "?details=true")
                    setModalData({ title, description, images })
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
      </section>


      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>


      {/* Contacto */}
      <section id="contacto" className="py-20">
        <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-6">Contacto</h2>
          <p className="mb-6">
            ¿Querés charlar? Escribime a{" "}
            <a href="mailto:tuemail@gmail.com" className="text-blue-500">
              juanalejandroro25@gmail.com
            </a>
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/JuanAlejo-Rivera"
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
      </section>


      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:scale-110 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <DetailsModal data={modalData} />
    </div>
  );
}
