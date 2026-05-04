import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones en español
const es = {
    nav: {
        about: "Sobre mí",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto"
    },
    profile: {
        greeting: "< Hola, soy />",
        role: "Desarrollador Web Fullstack",
        passion: "// Apasionado por crear experiencias digitales innovadoras",
        downloadCV: "Descargar CV"
    },
    about: {
        title: "Sobre mí",
        cards: {
            education: {
                title: "Formación",
                text: "Estudiante de <strong>Tecnología en Desarrollo de Software</strong> con ciclo propedéutico a Ingeniería de Sistemas. Además, <strong>Tecnólogo en Electrónica</strong> y <strong>Técnico en Mecatrónica</strong>."
            },
            courses: {
                title: "Cursos y certificaciones",
                text: "Formación en <strong>JavaScript Moderno</strong>, <strong>React de cero a experto</strong> y actualmente <strong>React con TypeScript (2025)</strong>. Siempre en constante actualización."
            },
            experience: {
                title: "Experiencia",
                text: "+3 años como programador en <strong>Talent.com</strong>, desarrollando soluciones de <strong>web scraping</strong> y automatización. Proyectos personales destacados: <strong>e-commerce</strong>, <strong>buscador de recetas</strong> y <strong>gestor de proyectos</strong>, <strong>plataforma de capacitación laboral</strong>, entre otros."
            },
            skills: {
                title: "Habilidades",
                text: "JavaScript, TypeScript, React, Node.js, Express, TailwindCSS, MUI, Redux Toolkit. Control de versiones con <strong>Git/GitHub</strong>, entre otros. Aprendizaje ágil de nuevas herramientas."
            },
            objective: {
                title: "Objetivo profesional",
                text: "Mi objetivo es aportar valor real en proyectos, crecer junto a equipos dinámicos y seguir desarrollándome profesionalmente dentro del mundo del software."
            },
            beyond: {
                title: "Más allá del código",
                text: "Apasionado por aprender y explorar nuevas áreas. Disfruto pasar tiempo con familia y amigos, descubrir comidas y lugares, y practicar deportes como correr y senderismo."
            }
        }
    },
    projects: {
        title: "Proyectos",
        viewDetails: "Ver detalles →",
        close: "✕ Cerrar",
        tabs: {
            all: "Todos",
            featured: "Destacados"
        },
        links: {
            viewDemo: "🚀 Ver Demo",
            frontend: "💻 Frontend",
            backend: "⚙️ Backend",
            ariaDemo: "Ver proyecto desplegado",
            ariaFrontend: "Ver repositorio de frontend en GitHub",
            ariaBackend: "Ver repositorio de backend en GitHub"
        },
        list: {
            skillup: {
                title: "Plataforma de capacitación laboral, SkillUp",
                description: "Plataforma web para capacitación y gestión de cursos laborales con autenticación y panel administrativo.",
                fullDescription: "SkillUp es una plataforma integral para la capacitación laboral, permitiendo a empresas y usuarios gestionar cursos, realizar evaluaciones y hacer seguimiento al progreso. Incluye autenticación segura, panel de administración para gestión de usuarios y cursos, notificaciones, y reportes de avance. El frontend está desarrollado en React y TypeScript, mientras que el backend expone una API REST robusta con Node.js, Express y MongoDB.",
                tech: "🚀 Tecnologías: React, TypeScript, Redux Toolkit, Axios, React Hook Form, Zod, DnD Kit, TailwindCSS, Node.js, Express, MongoDB, JWT, Nodemailer"
            },
            coagenda: {
                title: "Calendario de eventos, CoAgenda",
                description: "Calendario interactivo para gestionar eventos con login y registro de usuarios.",
                fullDescription: "Aplicación web para organizar y gestionar eventos en un calendario visual e interactivo. Permite crear, editar y eliminar eventos de manera sencilla, conectada a un backend propio que expone una API REST para la autenticación de usuarios y la persistencia de datos.",
                tech: "🚀 Tecnologías: React, Redux Toolkit, React Big Calendar, Axios, SweetAlert2, Node.js, Express, MongoDB"
            },
            taskly: {
                title: "Gestor de proyectos, TaskLy",
                description: "Gestor de proyectos con autenticación y control de tareas colaborativas.",
                fullDescription: "Gestor de proyectos colaborativo que permite a los usuarios crear cuentas, administrar proyectos y asignar tareas en equipo. Incluye autenticación segura con confirmación por correo, manejo de colaboradores, actualización del estado de tareas y control de accesos. El frontend está desarrollado con React y TailwindCSS, mientras que el backend implementa una API REST con Node.js, Express y MongoDB para la persistencia de datos y la lógica de negocio.",
                tech: "🚀 Tecnologías: React, TypeScript, TailwindCSS, React Query, React Hook Form, Zod, Axios, DnD Kit, Node.js, Express, MongoDB, JWT, Nodemailer"
            },
            jotter: {
                title: "Diario de notas, Jotter journal",
                description: "Aplicación para crear, editar y gestionar notas personales con autenticación segura.",
                fullDescription: "Aplicación web tipo diario personal donde los usuarios pueden crear, editar y eliminar notas con soporte para imágenes. Incluye autenticación de usuarios, guardado seguro en la nube y una interfaz moderna e intuitiva. Ideal para organizar ideas y llevar un registro digital de manera práctica.",
                tech: "🚀 Tecnologías: React, Redux Toolkit, Firebase, Cloudinary, Material UI, SweetAlert2"
            },
            gamercore: {
                title: "Eccommerce, GamerCore",
                description: "Plataforma de comercio electrónico para productos gamer, con catálogo dinámico y carrito de compras persistente.",
                fullDescription: "Aplicación de comercio electrónico enfocada en productos gamer y componentes de PC. Permite a los usuarios explorar un catálogo dinámico, gestionar un carrito de compras persistente y calcular automáticamente el total de sus pedidos.",
                tech: "🚀 React, TypeScript, Vite, TailwindCSS, Framer Motion, Lucide React, React Hot Toast, React Router DOM, ESLint."
            },
            drinks: {
                title: "Buscador de recetas, Drinks Finder",
                description: "Buscador de recetas de cócteles según ingredientes disponibles, con filtrado por categorías.",
                fullDescription: "Buscador de recetas de bebidas que consume una API externa para mostrar tragos según ingredientes o categorías. Ofrece detalles completos de preparación y presentación, optimizado para usabilidad tanto en dispositivos móviles como en desktop.",
                tech: "🚀 Tecnologías: React, TypeScript, Zustand, TailwindCSS, Axios, Zod, HeadlessUI, API pública de cocktails."
            },
            budget: {
                title: "Planificador de gastos",
                description: "Aplicación para registrar ingresos y gastos, calcular presupuestos y mantener control financiero.",
                fullDescription: "Aplicación enfocada en la planificación de finanzas personales, donde el usuario puede definir un presupuesto y gestionar sus gastos para mantener el control de su dinero. Incluye validación de datos, alertas dinámicas y diseño adaptable para dispositivos móviles y escritorio.",
                tech: "🚀 Tecnologías: React, TypeScript, TailwindCSS, React Calendar, React Toastify, SweetAlert2"
            },
            flowpilot: {
                title: "Landing page, FlowPilot",
                description: "Landing page dinámica para una plataforma de workspace con IA, diseñada para equipos de desarrollo, con modos de visualización por tema y soporte multilenguaje.",
                fullDescription: "FlowPilot es una landing page moderna y animada que presenta una plataforma de workspace potenciada por inteligencia artificial para equipos de desarrollo. Diseñada con foco en la experiencia del usuario, incluye modos de visualización con distintos temas, soporte para múltiples idiomas, secciones fluidas, microanimaciones, diseño completamente responsivo y una interfaz visualmente atractiva que comunica el valor del producto de forma clara e impactante.",
                tech: "🚀 Tecnologías: React, TypeScript, TailwindCSS, Framer Motion, Vite"
            }
        }
    },
    skills: {
        title: "Tech Stack",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas",
        buildDeploy: "Build & Deploy",
        testing: "Testing",
        versioning: "Versionado",
        automation: "Automatización"
    },
    contact: {
        title: "Contacto",
        description: "¿Quieres contactar conmigo? Escríbeme a",
        github: "Visitar mi perfil de GitHub",
        linkedin: "Visitar mi perfil de LinkedIn",
        email: "Enviarme un correo electrónico",
        whatsapp: "Contactar por WhatsApp"
    },
    footer: {
        rights: "© 2025 Juan Alejandro Rivera Oquendo. Todos los derechos reservados."
    },
    ariaLabels: {
        scrollTop: "Volver arriba",
        downloadCV: "Descargar mi currículum vitae"
    },
    chatbot: {
        greeting1: "¡Hola! 👋 Soy JarBot, el asistente virtual de Juan 😁",
        greeting2: "Pregúntame sobre sus proyectos, tecnologías, experiencia o lo que quieras saber.",
        title: "🤖 JarBot - Asistente IA",
        subtitle: "Tu asistente virtual del portafolio",
        footer: "",
        getStarted: "🚀 Comenzar conversación",
        inputPlaceholder: "💭 Pregúntame lo que quieras...",
        closeButtonTooltip: "Cerrar chat"
    },
    preload: {
        portafolio: "Portafolio"
    }
};

// Traducciones en inglés
const en = {
    nav: {
        about: "About Me",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact"
    },
    profile: {
        greeting: "< Hello, I'm />",
        role: "Fullstack Web Developer",
        passion: "// Passionate about creating innovative digital experiences",
        downloadCV: "Download CV"
    },
    about: {
        title: "About Me",
        cards: {
            education: {
                title: "Education",
                text: "Student of <strong>Software Development Technology</strong> with a propaedeutic cycle to Systems Engineering. Also, <strong>Electronics Technologist</strong> and <strong>Mechatronics Technician</strong>."
            },
            courses: {
                title: "Courses & Certifications",
                text: "Training in <strong>Modern JavaScript</strong>, <strong>React from zero to expert</strong> and currently <strong>React with TypeScript (2025)</strong>. Always in constant update."
            },
            experience: {
                title: "Experience",
                text: "+3 years as programmer at <strong>Talent.com</strong>, developing <strong>web scraping</strong> and automation solutions. Notable personal projects: <strong>e-commerce</strong>, <strong>recipe finder</strong> and <strong>project manager</strong>, <strong>job training platform</strong>, among others."
            },
            skills: {
                title: "Skills",
                text: "JavaScript, TypeScript, React, Node.js, Express, TailwindCSS, MUI, Redux Toolkit. Version control with <strong>Git/GitHub</strong>, among others. Quick learner of new tools."
            },
            objective: {
                title: "Professional Goal",
                text: "My goal is to add real value to projects, grow alongside dynamic teams and continue developing professionally in the software world."
            },
            beyond: {
                title: "Beyond Code",
                text: "Passionate about learning and exploring new areas. I enjoy spending time with family and friends, discovering food and places, and practicing sports like running and hiking."
            }
        }
    },
    projects: {
        title: "Projects",
        viewDetails: "View details →",
        close: "✕ Close",
        tabs: {
            all: "All",
            featured: "Featured"
        },
        links: {
            viewDemo: "🚀 View Demo",
            frontend: "💻 Frontend",
            backend: "⚙️ Backend",
            ariaDemo: "View deployed project",
            ariaFrontend: "View frontend repository on GitHub",
            ariaBackend: "View backend repository on GitHub"
        },
        list: {
            skillup: {
                title: "Job Training Platform, SkillUp",
                description: "Web platform for training and management of job courses with authentication and admin panel.",
                fullDescription: "SkillUp is a comprehensive platform for job training, allowing companies and users to manage courses, perform evaluations and track progress. It includes secure authentication, administration panel for user and course management, notifications, and progress reports. The frontend is developed in React and TypeScript, while the backend exposes a robust REST API with Node.js, Express and MongoDB.",
                tech: "🚀 Technologies: React, TypeScript, Redux Toolkit, Axios, React Hook Form, Zod, DnD Kit, TailwindCSS, Node.js, Express, MongoDB, JWT, Nodemailer"
            },
            coagenda: {
                title: "Event Calendar, CoAgenda",
                description: "Interactive calendar to manage events with user login and registration.",
                fullDescription: "Web application to organize and manage events in a visual and interactive calendar. Allows creating, editing and deleting events easily, connected to its own backend that exposes a REST API for user authentication and data persistence.",
                tech: "🚀 Technologies: React, Redux Toolkit, React Big Calendar, Axios, SweetAlert2, Node.js, Express, MongoDB"
            },
            taskly: {
                title: "Project Manager, TaskLy",
                description: "Project manager with authentication and collaborative task control.",
                fullDescription: "Collaborative project manager that allows users to create accounts, manage projects and assign tasks in teams. Includes secure authentication with email confirmation, collaborator management, task status updating and access control. The frontend is developed with React and TailwindCSS, while the backend implements a REST API with Node.js, Express and MongoDB for data persistence and business logic.",
                tech: "🚀 Technologies: React, TypeScript, TailwindCSS, React Query, React Hook Form, Zod, Axios, DnD Kit, Node.js, Express, MongoDB, JWT, Nodemailer"
            },
            jotter: {
                title: "Notes Journal, Jotter journal",
                description: "Application to create, edit and manage personal notes with secure authentication.",
                fullDescription: "Personal journal web application where users can create, edit and delete notes with image support. Includes user authentication, secure cloud storage and a modern and intuitive interface. Ideal for organizing ideas and keeping a digital record in a practical way.",
                tech: "🚀 Technologies: React, Redux Toolkit, Firebase, Cloudinary, Material UI, SweetAlert2"
            },
            gamercore: {
                title: "E-commerce, GamerCore",
                description: "E-commerce platform for gamer products, with dynamic catalog and persistent shopping cart.",
                fullDescription: "E-commerce application focused on gamer products and PC components. Allows users to explore a dynamic catalog, manage a persistent shopping cart and automatically calculate order totals.",
                tech: "🚀 React, TypeScript, Vite, TailwindCSS, Framer Motion, Lucide React, React Hot Toast, React Router DOM, ESLint."
            },
            drinks: {
                title: "Recipe Finder, Drinks Finder",
                description: "Cocktail recipe finder based on available ingredients, with category filtering.",
                fullDescription: "Beverage recipe finder that consumes an external API to display drinks based on ingredients or categories. Offers complete preparation and presentation details, optimized for usability on both mobile and desktop devices.",
                tech: "🚀 Technologies: React, TypeScript, Zustand, TailwindCSS, Axios, Zod, HeadlessUI, public cocktails API."
            },
            budget: {
                title: "Budget Planner",
                description: "Application to record income and expenses, calculate budgets and maintain financial control.",
                fullDescription: "Application focused on personal finance planning, where the user can define a budget and manage their expenses to maintain control of their money. Includes data validation, dynamic alerts and responsive design for mobile and desktop devices.",
                tech: "🚀 Technologies: React, TypeScript, TailwindCSS, React Calendar, React Toastify, SweetAlert2"
            },
            flowpilot: {
                title: "Landing page, FlowPilot",
                description: "Dynamic landing page for an AI-powered workspace platform for development teams, featuring themed viewing modes and multi-language support.",
                fullDescription: "FlowPilot is a modern, animated landing page showcasing an AI-powered workspace platform built for development teams. Designed with a strong focus on user experience, it includes themed viewing modes, multi-language support, fluid sections, micro-animations, a fully responsive layout, and a visually compelling interface that communicates the product value clearly and effectively.",
                tech: "🚀 Technologies: React, TypeScript, TailwindCSS, Framer Motion, Vite"
            }
        }
    },
    skills: {
        title: "Tech Stack",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
        buildDeploy: "Build & Deploy",
        testing: "Testing",
        versioning: "Versioning",
        automation: "Automation"
    },
    contact: {
        title: "Contact",
        description: "Want to get in touch? Write me at",
        github: "Visit my GitHub profile",
        linkedin: "Visit my LinkedIn profile",
        email: "Send me an email",
        whatsapp: "Contact via WhatsApp"
    },
    footer: {
        rights: "© 2025 Juan Alejandro Rivera Oquendo. All rights reserved."
    },
    ariaLabels: {
        scrollTop: "Back to top",
        downloadCV: "Download my resume"
    },
    chatbot: {
        greeting1: "Hello! 👋 I'm JarBot, Juan's virtual assistant 😁",
        greeting2: "Ask me about his projects, technologies, experience or anything you want to know.",
        title: "🤖 JarBot - AI Assistant",
        subtitle: "Your portfolio virtual assistant",
        footer: "",
        getStarted: "🚀 Start conversation",
        inputPlaceholder: "💭 Ask me anything...",
        closeButtonTooltip: "Close chat"
    },
    preload: {
        portafolio: "Portfolio"
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es },
            en: { translation: en }
        },
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;
