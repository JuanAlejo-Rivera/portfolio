import { useTranslation } from 'react-i18next';

export default function ContactMe() {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-center">
            
            <h2 className="text-4xl sm:text-5xl font-black mb-8 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
                {t('contact.title')}
            </h2>
            
            
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                {t('contact.description')}{" "}
                <a 
                    href="mailto:juan.alejorivera25@gmail.com" 
                    className="text-cyan-400 font-bold hover:text-cyan-300 underline decoration-2 underline-offset-4 transition-colors"
                >
                    juan.alejorivera25@gmail.com
                </a>
            </p>
            
            
            <div className="flex justify-center gap-6 sm:gap-8">
                
                <a
                    href="https://github.com/JuanAlejo-Rivera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-slate-600 hover:border-cyan-400 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-110"
                    aria-label={t('contact.github')}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-slate-300 group-hover:text-cyan-400 transition-colors"
                    >
                        <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-1.7c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.6 1.8 2.9 1.3 0-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0 0 12 0" />
                    </svg>
                </a>

                
                <a
                    href="https://www.linkedin.com/in/juan-alejandro-rivera-oquendo-4a219623a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-blue-500 hover:border-cyan-400 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
                    aria-label={t('contact.linkedin')}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-white group-hover:text-cyan-300 transition-colors"
                    >
                        <path d="M20.45 20.45h-3.55v-5.4c0-1.29 0-2.95-1.8-2.95s-2.07 1.41-2.07 2.86v5.49H9.49V9h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.62 0 4.29 2.38 4.29 5.47v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.11 20.45H3.56V9h3.55v11.45zM22.23 0H1.77A1.76 1.76 0 0 0 0 1.75v20.5A1.76 1.76 0 0 0 1.77 24h20.46A1.76 1.76 0 0 0 24 22.25V1.75A1.76 1.76 0 0 0 22.23 0z" />
                    </svg>
                </a>

                
                <a
                    href="mailto:juan.alejorivera25@gmail.com"
                    className="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-indigo-700 border-2 border-cyan-500 hover:border-cyan-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
                    aria-label={t('contact.email')}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-7 h-7 text-white group-hover:text-cyan-100 transition-colors"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </a>
            </div>
        </section>
    )
}
