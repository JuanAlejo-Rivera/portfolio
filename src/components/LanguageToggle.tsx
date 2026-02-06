import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  
  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en';

  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-blue-950/80 backdrop-blur-xl border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 group"
      aria-label={`Change language to ${currentLang === 'es' ? 'English' : 'Spanish'}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/5 via-blue-500/5 to-indigo-600/5 opacity-80 group-hover:opacity-100 transition-all duration-300" />
      
      <span 
        className={`relative z-10 text-sm font-semibold transition-all duration-300 ${
          currentLang === 'es' 
            ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]' 
            : 'text-slate-400 hover:text-slate-300'
        }`}
      >
        ES
      </span>
      
      <span className="relative z-10 text-slate-500 text-sm">/</span>
      
      <span 
        className={`relative z-10 text-sm font-semibold transition-all duration-300 ${
          currentLang === 'en' 
            ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]' 
            : 'text-slate-400 hover:text-slate-300'
        }`}
      >
        EN
      </span>
    </button>
  );
}
