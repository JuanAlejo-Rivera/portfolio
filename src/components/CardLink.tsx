import { useTranslation } from 'react-i18next';

type deployProps = {
    deploy: string
    repository: string
    backRepository?: string
}

export const CardLink = ({ deploy, repository, backRepository }: deployProps) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-3">
            <a
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 font-semibold text-center text-sm focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label={t('projects.links.ariaDemo')}
            >
                {t('projects.links.viewDemo')}
            </a>
            
            <div className="flex flex-col gap-2">
                <a
                    href={repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 font-semibold text-center text-sm focus:outline-none focus:ring-4 focus:ring-indigo-400/50"
                    aria-label={t('projects.links.ariaFrontend')}
                >
                    {t('projects.links.frontend')}
                </a>
                {backRepository && (
                    <a
                        href={backRepository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-300 hover:scale-105 font-semibold text-center text-sm focus:outline-none focus:ring-4 focus:ring-green-400/50"
                        aria-label={t('projects.links.ariaBackend')}
                    >
                        {t('projects.links.backend')}
                    </a>
                )}
            </div>
        </div>
    )
}
