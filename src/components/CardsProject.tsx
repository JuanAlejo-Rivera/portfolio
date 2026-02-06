import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import projects from "../data/projects";
import { CardLink } from "./CardLink";
import { useTranslation } from 'react-i18next';

type ModalData = {
    titleKey: string
    descriptionKey: string
    images: string[]
    fulldescriptionKey: string
}

type PropsCardProjects = {
    setModalData: React.Dispatch<React.SetStateAction<ModalData | undefined>>
}

export default function CardProjects({ setModalData }: PropsCardProjects) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
            
            
            <div className="text-center mb-24 relative z-10">
                <span className="inline-block px-4 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-mono mb-4">
                    &lt;projects /&gt;
                </span>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                        {t('projects.title')}
                    </span>
                </h2>
                <p className="text-slate-400 text-lg font-mono"></p>
            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {projects.map(
                    (
                        { titleKey, descriptionKey, images, deploy, repository, backRepository, tecnologiasKey, fulldescriptionKey },
                        i
                    ) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60, rotateX: -15 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group perspective-1000"
                        >
                            <div className="relative preserve-3d transition-all duration-500 hover:rotateY-5 hover:-translate-y-4">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                                
                                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col h-full backdrop-blur-xl">
                                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/50">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    
                                    <div className="relative h-52 rounded-xl mb-6 overflow-hidden group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <img
                                            src={images[0]}
                                            alt={`${t(titleKey)} screenshot`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                                            onClick={() => {
                                                navigate(location.pathname + "?details=true");
                                                setModalData({ titleKey, descriptionKey, images, fulldescriptionKey });
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                                        {t(titleKey)}
                                    </h3>
                                    
                                    <p className="text-slate-400 leading-relaxed mb-4 flex-1 text-sm">{t(descriptionKey)}</p>
                                    
                                    <div className="mb-4 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
                                        <p className="text-xs text-cyan-400 font-mono">{t(tecnologiasKey)}</p>
                                    </div>
                                    
                                    <button
                                        onClick={() => {
                                            navigate(location.pathname + "?details=true");
                                            setModalData({ titleKey, descriptionKey, images, fulldescriptionKey });
                                        }}
                                        className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold text-sm hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 mb-4"
                                    >
                                        {t('projects.viewDetails')}
                                    </button>

                                    <div className="mt-6">
                                        <CardLink
                                            deploy={deploy}
                                            repository={repository}
                                            backRepository={backRepository}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                )}
            </div>
        </section>
    )
}
