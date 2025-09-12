export default function ContactMe() {
    return (
        <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-center">
            <h2 className="title-text">Contacto</h2>
            <p className="mb-6">
                ¿Quieres contactar conmigo? Escribime a{" "}
                <a href="mailto:tuemail@gmail.com" className="text-blue-500">
                    juanalejandroro25@gmail.com
                </a>
            </p>
            <div className="flex justify-center gap-6">
                <a
                    href="https://github.com/JuanAlejo-Rivera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-gray-800 dark:text-gray-200"
                    >
                        <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-1.7c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.6 1.8 2.9 1.3 0-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0 0 12 0" />
                    </svg>
                </a>

                <a
                    href="https://www.linkedin.com/in/juan-alejandro-rivera-oquendo-4a219623a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-blue-600"
                    >
                        <path d="M20.45 20.45h-3.55v-5.4c0-1.29 0-2.95-1.8-2.95s-2.07 1.41-2.07 2.86v5.49H9.49V9h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.62 0 4.29 2.38 4.29 5.47v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.11 20.45H3.56V9h3.55v11.45zM22.23 0H1.77A1.76 1.76 0 0 0 0 1.75v20.5A1.76 1.76 0 0 0 1.77 24h20.46A1.76 1.76 0 0 0 24 22.25V1.75A1.76 1.76 0 0 0 22.23 0z" />
                    </svg>
                </a>

            </div>
        </section>
    )
}
