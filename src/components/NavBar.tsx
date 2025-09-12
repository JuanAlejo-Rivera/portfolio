
export default function NavBar() {
    return (
        <nav className="flex flex-wrap justify-center gap-4 mt-6">
            {[
                { id: "about-me", label: "Sobre mí" },
                { id: "projects", label: "Proyectos" },
                { id: "skills", label: "Habilidades" },
                { id: "contact", label: "Contacto" },
            ].map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow hover:scale-105 transition-transform"
                >
                    {label}
                </a>
            ))}
        </nav>
    )
}
