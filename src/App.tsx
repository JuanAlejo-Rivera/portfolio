import { useEffect, useState } from "react";
import DetailsModal from "./components/DetailsModal";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import { ArrowBigUp } from "lucide-react";
import ContactMe from "./components/ContactMe";
import Profile from "./components/Profile";
import Preloader from "./components/Preloader";
import CardProjects from "./components/CardsProject";
import SnowfallEffect from "./components/SnowfallEffect";
import { useIsDecember } from "./hooks/useIsDecember";

type ModalData = {
  title: string
  description: string
  images: string[]
  fulldescription: string
}

export default function Portfolio() {
  const [modalData, setModalData] = useState<ModalData>()

  const [showArrow, setShowArrow] = useState(false)

  const [loading, setLoading] = useState(true);

  const isDecember = useIsDecember();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
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
    <div className="relative min-h-screen w-full bg-slate-900">
      {/* Efecto de nieve - Se activa automáticamente en diciembre */}
      <SnowfallEffect enabled={isDecember} snowflakeCount={150} />
      <Profile />
      <section id="about-me" className="py-10">
        <AboutMe />
      </section>
      <section id="projects" className="py-20 scroll-mt-[-150px]">
        <CardProjects setModalData={setModalData} />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact" className="py-20">
        <ContactMe />
      </section>
      {showArrow && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
          aria-label="Volver arriba"
        >
          <ArrowBigUp size={24} />
        </button>
      )}
      <a
        href="https://wa.me/573185754076"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl p-4 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 focus:outline-none focus:ring-4 focus:ring-green-400/50"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 13.487c-.263-.131-1.553-.767-1.793-.855-.24-.088-.415-.131-.59.132-.175.263-.676.855-.828 1.03-.151.175-.304.197-.567.066-.263-.132-1.111-.409-2.117-1.304-.782-.696-1.31-1.556-1.464-1.819-.151-.263-.016-.405.115-.536.118-.117.263-.304.395-.456.132-.151.175-.263.263-.438.088-.175.044-.329-.022-.46-.066-.132-.59-1.425-.808-1.95-.213-.513-.429-.443-.59-.452-.151-.008-.329-.01-.505-.01-.175 0-.46.066-.701.329-.24.263-.92.9-.92 2.192 0 1.292.942 2.541 1.073 2.717.132.175 1.853 2.833 4.498 3.855.63.216 1.12.345 1.502.442.63.16 1.204.137 1.658.083.506-.06 1.553-.635 1.773-1.248.22-.613.22-1.138.154-1.248-.066-.11-.24-.175-.503-.306z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.97-4.03 9-9 9a8.96 8.96 0 01-4.488-1.19L3 21l1.19-4.488A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
        </svg>
      </a>
      <footer className="w-full py-10 px-4 md:px-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-center mt-20 border-t-2 border-cyan-400/30 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-6">
          <p className="text-slate-300 text-sm md:text-base font-medium">
            © 2025 Juan Alejandro Rivera Oquendo. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/JuanAlejo-Rivera" target="_blank" rel="noopener noreferrer" className="group" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-slate-300 group-hover:text-cyan-400 transition-colors">
                <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-1.7c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.6 1.8 2.9 1.3 0-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0 0 12 0" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/juanalejorivera/" target="_blank" rel="noopener noreferrer" className="group" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-slate-300 group-hover:text-cyan-400 transition-colors">
                <path d="M20.45 20.45h-3.55v-5.4c0-1.29 0-2.95-1.8-2.95s-2.07 1.41-2.07 2.86v5.49H9.49V9h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.62 0 4.29 2.38 4.29 5.47v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.11 20.45H3.56V9h3.55v11.45zM22.23 0H1.77A1.76 1.76 0 0 0 0 1.75v20.5A1.76 1.76 0 0 0 1.77 24h20.46A1.76 1.76 0 0 0 24 22.25V1.75A1.76 1.76 0 0 0 22.23 0z" />
              </svg>
            </a>
            <a href="mailto:juan.alejorivera25@gmail.com" className="group" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <DetailsModal data={modalData} />
    </div>
  );
}
