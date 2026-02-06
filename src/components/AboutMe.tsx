import { GraduationCap, BookOpen, Briefcase, Code2, Rocket, Heart } from "lucide-react";
import { useTrail, animated } from "@react-spring/web";
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const { t } = useTranslation();

    const cardKeys = [
        { icon: <GraduationCap className="w-6 h-6" />, key: "education" },
        { icon: <BookOpen className="w-6 h-6" />, key: "courses" },
        { icon: <Briefcase className="w-6 h-6" />, key: "experience" },
        { icon: <Code2 className="w-6 h-6" />, key: "skills" },
        { icon: <Rocket className="w-6 h-6" />, key: "objective" },
        { icon: <Heart className="w-6 h-6" />, key: "beyond" },
    ];

    const trail = useTrail(cardKeys.length, {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
        config: { tension: 170, friction: 20 },
    });

    return (
        <section className="mb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-4xl sm:text-5xl font-black text-center mb-12 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
                {t('about.title')}
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
                            <span className="text-3xl">{cardKeys[i].icon}</span>
                            {t(`about.cards.${cardKeys[i].key}.title`)}
                        </h3>

                        <p 
                            className="text-slate-300 leading-relaxed text-base lg:text-lg"
                            dangerouslySetInnerHTML={{ __html: t(`about.cards.${cardKeys[i].key}.text`) }}
                        />
                    </animated.div>
                ))}
            </div>
        </section>
    );
}
