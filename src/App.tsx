import { useEffect, useState } from "react";
import DetailsModal from "./components/DetailsModal";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import { ArrowBigUp } from "lucide-react";
import ContactMe from "./components/ContactMe";
import Profile from "./components/Profile";
import Preloader from "./components/Preloader";
import CardProjects from "./components/CardsProject";

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
    <div className="min-h-screen animated-bg text-white">
      {/* profile presentation */}
      <Profile />

      <section id="about-me" className="py-10">
        <AboutMe />
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 scroll-mt-[-150px]">
        <CardProjects setModalData={setModalData} />
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
