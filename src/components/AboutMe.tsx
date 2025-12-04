import { GraduationCap, BookOpen, Briefcase, Code2, Rocket, Heart } from "lucide-react";
import { useTrail, animated } from "@react-spring/web";

export default function AboutMe() {
    const cards = [
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Formación",
            text: (
                <>
                    Estudiante de <span className="font-semibold">Tecnología en Desarrollo de Software </span>
                    con ciclo propedéutico a Ingeniería de Sistemas.
                    Además, <span className="font-semibold">Tecnólogo en Electrónica</span> y
                    <span className="font-semibold"> Técnico en Mecatrónica</span>.
                </>
            ),
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Cursos y certificaciones",
            text: (
                <>
                    Formación en <span className="font-semibold">JavaScript Moderno</span>,
                    <span className="font-semibold"> React de cero a experto</span> y
                    actualmente <span className="font-semibold">React con TypeScript (2025)</span>.
                    Siempre en constante actualización.
                </>
            ),
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Experiencia",
            text: (
                <>
                    +3 años como programador en <span className="font-semibold">Talent.com</span>,
                    desarrollando soluciones de <span className="font-semibold">web scraping</span> y automatización.
                    Proyectos personales destacados: <span className="font-semibold">e-commerce</span>,
                    <span className="font-semibold"> buscador de recetas</span> y
                    <span className="font-semibold"> gestor de proyectos</span>, 
                    <span className="font-semibold"> plataforma de capacitación laboral</span>, entre otros.
                </>
            ),
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Habilidades",
            text: (
                <>
                    JavaScript, TypeScript, React, Node.js, Express, TailwindCSS, MUI, Redux Toolkit.
                    Control de versiones con <span className="font-semibold">Git/GitHub</span>, entre otros.
                    Aprendizaje ágil de nuevas herramientas.
                </>
            ),
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Objetivo profesional",
            text: (
                <>
                    Mi objetivo es aportar valor real en proyectos, crecer junto a equipos dinámicos
                    y seguir desarrollándome profesionalmente dentro del mundo del software.
                </>
            ),
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Más allá del código",
            text: (
                <>
                    Apasionado por aprender y explorar nuevas áreas.
                    Disfruto pasar tiempo con familia y amigos, descubrir comidas y lugares,
                    y practicar deportes como correr y senderismo.
                </>
            ),
        },
    ];

    const trail = useTrail(cards.length, {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
        config: { tension: 170, friction: 20 },
    });

    return (
        <section className="mb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-4xl sm:text-5xl font-black text-center mb-12 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
                Sobre mí
            </h2>


            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {trail.map((style, i) => (
                    <animated.div
                        key={i}
                        style={{
                            opacity: style.opacity,
                            transform: style.y.to((y) => `translateY(${y}px)`),
                        }}
                        className="group bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-blue-950/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1"
                    >

                        <h3 className="flex items-center gap-3 text-xl lg:text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                            <span className="text-3xl">{cards[i].icon}</span>
                            {cards[i].title}
                        </h3>

                        <p className="text-slate-300 leading-relaxed text-base lg:text-lg">{cards[i].text}</p>
                    </animated.div>
                ))}
            </div>
        </section>
    );
}
