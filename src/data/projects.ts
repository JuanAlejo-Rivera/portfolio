type Project = {
    title: string;
    description: string;
    fulldescription: string;
    tecnologias: string;
    images: string[];
    deploy: string;
    repository: string;
    backRepository?: string;
};



const projects: Project[] = [
    {
        title: "Plataforma de capacitación laboral, SkillUp",
        description: "Plataforma web para capacitación y gestión de cursos laborales con autenticación y panel administrativo.",
        fulldescription: "SkillUp es una plataforma integral para la capacitación laboral, permitiendo a empresas y usuarios gestionar cursos, realizar evaluaciones y hacer seguimiento al progreso. Incluye autenticación segura, panel de administración para gestión de usuarios y cursos, notificaciones, y reportes de avance. El frontend está desarrollado en React y TypeScript, mientras que el backend expone una API REST robusta con Node.js, Express y MongoDB.",
        tecnologias: "🚀 Tecnologías: React, TypeScript, Redux Toolkit, Axios, React Hook Form, Zod, DnD Kit, TailwindCSS, Node.js, Express, MongoDB, JWT, Nodemailer",
        images: ['img/skillup/login.jpg', 'img/skillup/register.jpg', 'img/skillup/dashboard.jpg', 'img/skillup/sections.jpg', 'img/skillup/lessons.jpg', 'img/skillup/loading.jpg', 'img/skillup/account.jpg', 'img/skillup/chnagepassword.jpg', 'img/skillup/departments.jpg', 'img/skillup/roles.jpg'],
        deploy: "https://skill-up-neon.vercel.app/auth/login",
        repository: "https://github.com/JuanAlejo-Rivera/SkillUp_front",
        backRepository: "https://github.com/JuanAlejo-Rivera/SkillUp_Backend",
    },
    {
        title: "Calendario de eventos, CoAgenda",
        description: "Calendario interactivo para gestionar eventos con login y registro de usuarios.",
        fulldescription: "Aplicación web para organizar y gestionar eventos en un calendario visual e interactivo. Permite crear, editar y eliminar eventos de manera sencilla, conectada a un backend propio que expone una API REST para la autenticación de usuarios y la persistencia de datos.",
        tecnologias: "🚀 Tecnologías: React, Redux Toolkit, React Big Calendar, Axios, SweetAlert2, Node.js, Express, MongoDB",
        images: ['img/coAgenda.png', 'img/coAgendaView.png', 'img/coAgendaEvent.png', 'img/coAgendaEvent2.png', 'img/coAgendagenda.png', 'img/mes.png'],
        deploy: "https://co-agenda-frontend.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/CoAgenda_Frontend",
        backRepository: "https://github.com/JuanAlejo-Rivera/CoAgenda_Backend",

    },
    {
        title: "Gestor de proyectos, TaskLy",
        description: "Gestor de proyectos con autenticación y control de tareas colaborativas.",
        fulldescription: "Gestor de proyectos colaborativo que permite a los usuarios crear cuentas, administrar proyectos y asignar tareas en equipo. Incluye autenticación segura con confirmación por correo, manejo de colaboradores, actualización del estado de tareas y control de accesos. El frontend está desarrollado con React y TailwindCSS, mientras que el backend implementa una API REST con Node.js, Express y MongoDB para la persistencia de datos y la lógica de negocio.",
        tecnologias: "🚀 Tecnologías: React, TypeScript, TailwindCSS, React Query, React Hook Form, Zod, Axios, DnD Kit, Node.js, Express, MongoDB, JWT, Nodemailer",
        images: ['img/TaskView1.png', 'img/TaskView2.png', 'img/TaskView3.png', 'img/TaskProjects3.png', 'img/TaskTask4.png', 'img/TaskTask5.png', 'img/Taskcolabor6.png', 'img/TaskPerfil.png', 'img/TaskPassword.png', 'img/TaskMailtrap.png', 'img/TaskConfirm.png'],
        deploy: "https://taskly-frontend-rosy-nu.vercel.app/auth/login",
        repository: "https://github.com/JuanAlejo-Rivera/TaskLy_Frontend",
        backRepository: "https://github.com/JuanAlejo-Rivera/TaskLy_backend",

    },
        {
        title: "Diario de notas, Jotter journal",
        description: "Aplicación para crear, editar y gestionar notas personales con autenticación segura.",
        fulldescription: "Aplicación web tipo diario personal donde los usuarios pueden crear, editar y eliminar notas con soporte para imágenes. Incluye autenticación de usuarios, guardado seguro en la nube y una interfaz moderna e intuitiva. Ideal para organizar ideas y llevar un registro digital de manera práctica.",
        tecnologias: "🚀 Tecnologías: React, Redux Toolkit, Firebase, Cloudinary, Material UI, SweetAlert2",
        images: ['img/jotter.png', 'img/jotterView.png', 'img/jotterNotece.png', 'img/jotterMemo.png', 'img/mobileMenu.png', 'img/mobileMenu2.png'],
        deploy: "https://jotter-journal.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/JotterJournal",

    },
    {
        title: "Eccommerce, GamerCore",
        description: `Plataforma de comercio electrónico para productos gamer, con catálogo dinámico y carrito de compras persistente.`,
        fulldescription: "Aplicación de comercio electrónico enfocada en productos gamer y componentes de PC. Permite a los usuarios explorar un catálogo dinámico, gestionar un carrito de compras persistente y calcular automáticamente el total de sus pedidos.",
        tecnologias: "🚀 Tecnologías: React, TypeScript, Zustand, TailwindCSS, Node.js, MongoDB.",
        images: ["img/gamercore/newCatalog.jpg", "img/gamercore/newMAin.jpg", "img/gamercore/newBurgMenu.jpg", "img/gamercore/carBurgMenu.jpg", "img/gamercore/notifications.jpg"],
        deploy: "https://gamer-core-ecommerce.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/Gamer-Core-ecommerce",
    },
    {
        title: "Buscador de recetas, Drinks Finder",
        description: "Buscador de recetas de cócteles según ingredientes disponibles, con filtrado por categorías.",
        fulldescription: "Buscador de recetas de bebidas que consume una API externa para mostrar tragos según ingredientes o categorías. Ofrece detalles completos de preparación y presentación, optimizado para usabilidad tanto en dispositivos móviles como en desktop.",
        tecnologias: "🚀 Tecnologías: React, TypeScript, Zustand, TailwindCSS, Axios, Zod, HeadlessUI, API pública de cocktails.",
        images: ['img/buscador.png', "img/receta.png", "/img/drinkMobile.png"],
        deploy: "https://drinks-finder-blush.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/DrinksFinder",


    },
    {
        title: "Planificador de gastos",
        description: "Aplicación para registrar ingresos y gastos, calcular presupuestos y mantener control financiero.",
        fulldescription: "Aplicación enfocada en la planificación de finanzas personales, donde el usuario puede definir un presupuesto y gestionar sus gastos para mantener el control de su dinero. Incluye validación de datos, alertas dinámicas y diseño adaptable para dispositivos móviles y escritorio.",
        tecnologias: "🚀 Tecnologías: React, TypeScript, TailwindCSS, React Calendar, React Toastify, SweetAlert2",
        images: ['img/pView.png', "img/uso.png", "img/pMobile.png"],
        deploy: "https://budget-controller-rust.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/budget-controller",

    },


];

export default projects;









