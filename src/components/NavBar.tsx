import { useTranslation } from 'react-i18next';

export default function NavBar() {
    const { t } = useTranslation();

    const navItems = [
        { id: "about-me", labelKey: "nav.about" },
        { id: "projects", labelKey: "nav.projects" },
        { id: "skills", labelKey: "nav.skills" },
        { id: "contact", labelKey: "nav.contact" },
    ];

    return (
        <nav className="flex flex-wrap justify-center items-center gap-4 mt-6">
            {navItems.map(({ id, labelKey }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className="relative px-7 py-2.5 rounded-2xl font-semibold text-white bg-gradient-to-br from-slate-800/70 via-slate-900/80 to-blue-950/80 backdrop-blur-xl border-2 border-cyan-400/40 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/70 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 overflow-hidden group"
                    style={{
                        boxShadow: '0 0 16px 0 #22d3ee55, 0 2px 8px 0 #0ea5e933',
                    }}
                >
                    <span className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-indigo-600/10 opacity-80 group-hover:opacity-100 transition-all duration-300 blur-sm" />
                    <span className="absolute -inset-1 rounded-3xl border-2 border-cyan-400/30 group-hover:border-cyan-400/80 transition-all duration-300 pointer-events-none" style={{boxShadow:'0 0 24px 4px #22d3ee55'}} />
                    <span className="relative z-10 drop-shadow-[0_1px_8px_rgba(34,211,238,0.5)]">{t(labelKey)}</span>
                </a>
            ))}
        </nav>
    )
}