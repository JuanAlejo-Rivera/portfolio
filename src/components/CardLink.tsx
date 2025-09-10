type deployProps = {
    deploy: string
    repository: string
}

export const CardLink = ({ deploy, repository }: deployProps) => {
    return (
        <div className="flex justify-between mt-4">
            <a href={deploy} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Deploy
            </a>
            <a href={repository} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Repositorio
            </a>
        </div>
    )
}
