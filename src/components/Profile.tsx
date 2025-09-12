import { useSpring, animated } from "@react-spring/web";
import NavBar from './NavBar';

export default function Profile() {
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 300,
  });

  return (
    <section className="flex flex-col items-center justify-center mb-25 text-center px-6">
      <animated.img
        style={fadeInUp}
        src="img/perfil.png"
        alt="Foto de perfil"
        className="w-[210px] h-[210px] rounded-full shadow-lg mb-6 object-cover mt-15"
      />

      <NavBar />

      <animated.h1 style={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-center mt-10">
        <span className="block text-gray-300">Hola, soy</span>
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Juan Alejandro Rivera Oquendo
        </span>
      </animated.h1>

      <animated.p style={fadeInUp} className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl text-center">
        Desarrollador Web Fullstack Junior 🚀 | Apasionado por aprender y
        crear aplicaciones modernas.
      </animated.p>

      <animated.a
        style={fadeInUp}
        href="/cv.pdf"
        className="mt-8 inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:scale-105 transition-transform"
      >
        Descargar CV
      </animated.a>
    </section>
  );
}
