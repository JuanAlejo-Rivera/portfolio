import { useEffect, useState } from "react";
import projects from "./data/projects";
import { useNavigate } from "react-router-dom";
import DetailsModal from "./components/DetailsModal";
import { CardLink } from "./components/CardLink";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import { ArrowBigUp } from "lucide-react";
import ContactMe from "./components/ContactMe";
import Profile from "./components/Profile";
import Preloader from "./components/Preloader";

type ModalData = {
  title: string
  description: string
  images: string[]
  fulldescription: string
}

export default function Portfolio() {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState<ModalData>()

  const [showArrow, setShowArrow] = useState(false)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => window.scrollY > 300 ? setShowArrow(true) : setShowArrow(false)
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (loading) {
    return <Preloader />;
  }


  return (
    <div className="min-h-screen animated-bg text-white">
      {/* profile presentation */}
      <Profile />

      <section id="about-me" className="py-10">
        <AboutMe />
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 scroll-mt-[-150px]">

        <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
          <h2 className="title-text">Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
            {projects.map(({ title, description, images, deploy, repository, backRepository, tecnologias, fulldescription }, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow p-4 flex flex-col h-full"
              >
                <div className="h- bg-gray-300 dark:bg-gray-600 rounded-xl mb-4">
                  <img
                    src={images[0]}
                    alt={`Imagen de ${title}`}
                    className="w-full h-55 rounded-xl object-cov transition-transform hover:scale-105"
                    // className="w-full h-60 object-cover rounded-xl transition-transform hover:scale-105"

                    onClick={() => {
                      navigate(location.pathname + "?details=true")
                      setModalData({ title, description, images, fulldescription })
                    }}
                  />
                </div>
                <button
                  className="cursor-pointer hover:underline text-slate-300"
                  onClick={() => {
                    navigate(location.pathname + "?details=true")
                    setModalData({ title, description, images, fulldescription })
                  }}
                >
                  Ver más
                </button>
                <h3 className="text-xl font-semibold">Proyecto: {title}</h3>
                <p className="text-sm mt-3 flex-1">{description}</p>
                <p className="text-sm mt-3 px-3 py-1 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-gray-700 dark:to-gray-800 text-gray-900 dark:text-gray-100 rounded-md font-medium tracking-wide shadow-sm">
                  {tecnologias}
                </p>


                <CardLink deploy={deploy} repository={repository} backRepository={backRepository} />

              </div>
            ))}

          </div>
        </section>
      </section>


      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <ContactMe />
      </section>

      {showArrow && (
        <button
          onClick={handleScrollTop}
          className="arrow"
        >
          <ArrowBigUp size={20} />
        </button>
      )}


      <DetailsModal data={modalData} />
    </div>
  );
}
