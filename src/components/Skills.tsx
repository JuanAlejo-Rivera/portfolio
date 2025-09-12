
export default function Skills() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <h2 className="title-text">Habilidades</h2>

            <div className="space-y-8">
                {/* Frontend */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-lg">
                        {[
                            "React",
                            "TypeScript",
                            "Redux Toolkit",
                            "Zustand",
                            "React Router",
                            "TailwindCSS",
                            "Material UI",
                            "HeadlessUI",
                            "React Hook Form",
                            "Zod",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl shadow"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Backend</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-lg">
                        {[
                            "Node.js",
                            "Express",
                            "MongoDB (Mongoose)",
                            "JWT",
                            "bcrypt",
                            "express-validator",
                            "Nodemailer",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl shadow"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Herramientas */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Herramientas</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-lg">
                        {["Vite", "Firebase", "Cloudinary", "Jest", "Git & GitHub"].map(
                            (skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl shadow"
                                >
                                    {skill}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>

    )
}
