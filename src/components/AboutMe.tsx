import { GraduationCap, BookOpen, Briefcase, Code2, Rocket, Heart } from "lucide-react";

export default function AboutMe() {
    return (
        <section className="mb-10 max-w-6xl mx-auto">
            <h2 className="title-text">
                Sobre mí
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Formación */}
                <div className="card-format">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400 mb-3">
                        <GraduationCap className="w-6 h-6" /> Formación
                    </h3>
                    <p className="text-gray-300">
                        Estudiante de <span className="font-semibold">Tecnología en Desarrollo de Software </span>
                        con ciclo propedéutico a Ingeniería de Sistemas.
                        Además, <span className="font-semibold">Tecnólogo en Electrónica</span> y
                        <span className="font-semibold"> Técnico en Mecatrónica</span>.
                    </p>
                </div>

                {/* Cursos */}
                <div className="card-format">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400 mb-3">
                        <BookOpen className="w-6 h-6" /> Cursos y certificaciones
                    </h3>
                    <p className="text-gray-300">
                        Formación en <span className="font-semibold">JavaScript Moderno</span>,
                        <span className="font-semibold"> React de cero a experto</span> y
                        actualmente <span className="font-semibold">React con TypeScript (2025)</span>.
                        Siempre en constante actualización.
                    </p>
                </div>

                {/* Experiencia */}
                <div className="card-format">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400 mb-3">
                        <Briefcase className="w-6 h-6" /> Experiencia
                    </h3>
                    <p className="text-gray-300">
                        +1 año como programador en <span className="font-semibold">Talent.com</span>,
                        desarrollando soluciones de <span className="font-semibold">web scraping</span> y automatización.
                        Proyectos personales destacados: <span className="font-semibold">e-commerce</span>,
                        <span className="font-semibold">buscador de recetas</span> y
                        <span className="font-semibold"> gestor de proyectos</span>, entre otros.
                    </p>
                </div>

                {/* Habilidades */}
                <div className="card-format">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400 mb-3">
                        <Code2 className="w-6 h-6" /> Habilidades
                    </h3>
                    <p className="text-gray-300">
                        JavaScript, TypeScript, React, Node.js, Express, TailwindCSS, MUI, Redux Toolkit.
                        Control de versiones con <span className="font-semibold">Git/GitHub</span>.
                        Aprendizaje ágil de nuevas herramientas.
                    </p>
                </div>

                {/* Objetivo profesional */}
                <div className="card-format">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400 mb-3">
                        <Rocket className="w-6 h-6" /> Objetivo profesional
                    </h3>
                    <p className="text-gray-300">
                        Mi objetivo es aportar valor real en proyectos, crecer junto a equipos dinámicos y seguir desarrollándome profesionalmente dentro del mundo del software.          </p>
                </div>

                {/* Toque personal */}
                <div className="card-format">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400 mb-3">
                        <Heart className="w-6 h-6" /> Más allá del código
                    </h3>
                    <p className="text-gray-300">
                        Apasionado por aprender y explorar nuevas áreas.
                        Disfruto pasar tiempo con familia y amigos, descubrir comidas y lugares, y practicar deportes como correr y senderismo.
                    </p>
                </div>
            </div>
        </section>
    );
}
