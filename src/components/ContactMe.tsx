
export default function ContactMe() {
    return (
            <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-center">
                <h2 className="title-text">Contacto</h2>
                <p className="mb-6">
                    ¿Querés charlar? Escribime a{" "}
                    <a href="mailto:tuemail@gmail.com" className="text-blue-500">
                        juanalejandroro25@gmail.com
                    </a>
                </p>
                <div className="flex justify-center gap-6">
                    <a
                        href="https://github.com/JuanAlejo-Rivera"
                        target="_blank"
                        className="hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/tuusuario"
                        target="_blank"
                        className="hover:underline"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>
    )
}
