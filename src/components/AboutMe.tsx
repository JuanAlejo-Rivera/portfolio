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
                    +1 año como programador en <span className="font-semibold">Talent.com</span>,
                    desarrollando soluciones de <span className="font-semibold">web scraping</span> y automatización.
                    Proyectos personales destacados: <span className="font-semibold">e-commerce</span>,
                    <span className="font-semibold"> buscador de recetas</span> y
                    <span className="font-semibold"> gestor de proyectos</span>, entre otros.
                </>
            ),
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Habilidades",
            text: (
                <>
                    JavaScript, TypeScript, React, Node.js, Express, TailwindCSS, MUI, Redux Toolkit.
                    Control de versiones con <span className="font-semibold">Git/GitHub</span>.
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
        <section className="mb-10 max-w-6xl mx-auto">
            <h2 className="title-text">Sobre mí</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {trail.map((style, i) => (
                    <animated.div
                        key={i}
                        style={{
                            opacity: style.opacity,
                            transform: style.y.to((y) => `translateY(${y}px)`),
                        }}
                        className="card-format"
                    >
                        <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400 mb-3">
                            {cards[i].icon} {cards[i].title}
                        </h3>
                        <p className="text-gray-300">{cards[i].text}</p>
                    </animated.div>
                ))}
            </div>
        </section>
    );
}
