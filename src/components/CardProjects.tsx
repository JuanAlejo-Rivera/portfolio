import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import projects from "../data/projects";
import { CardLink } from "./CardLink";

type ModalData = {
    title: string
    description: string
    images: string[]
    fulldescription: string
}

type PropsCardProjects = {
    setModalData: React.Dispatch<React.SetStateAction<ModalData | undefined>>
}


export default function CardProjects({ setModalData }: PropsCardProjects) {
    const navigate = useNavigate();



    return (
        <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
            <h2 className="title-text">Proyectos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
                {projects.map(
                    (
                        { title, description, images, deploy, repository, backRepository, tecnologias, fulldescription },
                        i
                    ) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-700 rounded-2xl shadow p-4 flex flex-col h-full 
                       transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="h- bg-gray-300 dark:bg-gray-600 rounded-xl mb-4">
                                <img
                                    src={images[0]}
                                    alt={`Imagen de ${title}`}
                                    className="w-full h-55 rounded-xl object-cov transition-transform hover:scale-105 cursor-pointer"
                                    onClick={() => {
                                        navigate(location.pathname + "?details=true");
                                        setModalData({ title, description, images, fulldescription });
                                    }}
                                />
                            </div>
                            <button
                                className="cursor-pointer hover:underline text-slate-300"
                                onClick={() => {
                                    navigate(location.pathname + "?details=true");
                                    setModalData({ title, description, images, fulldescription });
                                }}
                            >
                                Ver más
                            </button>
                            <h3 className="text-xl font-semibold">Proyecto: {title}</h3>
                            <p className="text-sm mt-3 flex-1">{description}</p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="text-sm mt-3 px-3 py-1 bg-gradient-to-r from-slate-200 to-slate-300 
                         dark:from-gray-700 dark:to-gray-800 text-gray-900 dark:text-gray-100 
                         rounded-md font-medium tracking-wide shadow-sm"
                            >
                                {tecnologias}
                            </motion.p>

                            <CardLink
                                deploy={deploy}
                                repository={repository}
                                backRepository={backRepository}
                            />
                        </motion.div>
                    )
                )}
            </div>
        </section>
    )
}
