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
import { useChatBot } from "./hooks/useChatBot";
import { useTranslation } from 'react-i18next';

type ModalData = {
  titleKey: string
  descriptionKey: string
  images: string[]
  fulldescriptionKey: string
}

export default function Portfolio() {

  useChatBot();
  const { t } = useTranslation();

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
          className="fixed bottom-4.5 right-25 z-70 p-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
          aria-label={t('ariaLabels.scrollTop')}
        >
          <ArrowBigUp size={24} />
        </button>
      )}
      <a
        href="https://wa.me/573185754076"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4.5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl p-4 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 focus:outline-none focus:ring-4 focus:ring-green-400/50"
        aria-label={t('contact.whatsapp')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 13.487c-.263-.131-1.553-.767-1.793-.855-.24-.088-.415-.131-.59.132-.175.263-.676.855-.828 1.03-.151.175-.304.197-.567.066-.263-.132-1.111-.409-2.117-1.304-.782-.696-1.31-1.556-1.464-1.819-.151-.263-.016-.405.115-.536.118-.117.263-.304.395-.456.132-.151.175-.263.263-.438.088-.175.044-.329-.022-.46-.066-.132-.59-1.425-.808-1.95-.213-.513-.429-.443-.59-.452-.151-.008-.329-.01-.505-.01-.175 0-.46.066-.701.329-.24.263-.92.9-.92 2.192 0 1.292.942 2.541 1.073 2.717.132.175 1.853 2.833 4.498 3.855.63.216 1.12.345 1.502.442.63.16 1.204.137 1.658.083.506-.06 1.553-.635 1.773-1.248.22-.613.22-1.138.154-1.248-.066-.11-.24-.175-.503-.306z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.97-4.03 9-9 9a8.96 8.96 0 01-4.488-1.19L3 21l1.19-4.488A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
        </svg>
      </a>
      <footer className="w-full py-10 px-4 md:px-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-center mt-20 border-t-2 border-cyan-400/30 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-6">
          <p className="text-slate-300 text-sm md:text-base font-medium">
            {t('footer.rights')}
          </p>

        </div>
      </footer>
      <DetailsModal data={modalData} />
    </div>
  );
}
