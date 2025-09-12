type deployProps = {
    deploy: string
    repository: string
    backRepository?: string
}

export const CardLink = ({ deploy, repository, backRepository }: deployProps) => {
    return (
        <div className="flex flex-row justify-between items-end gap-3 mt-4">

            <a
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition w-fit"
            >
                Deploy
            </a>
            <div className="flex flex-col gap-2 sm:items-end">

                <a
                    href={repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition w-fit sm"
                >
                    Repositorio FrontEnd
                </a>
                {backRepository && (
                    <a
                        href={backRepository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition w-fit"
                    >
                        Repositorio BackEnd
                    </a>
                )}
            </div>
        </div>
    )
}
