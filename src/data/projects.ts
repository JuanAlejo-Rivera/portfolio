type Project = {
    title: string;
    description: string;
    tecnologias: string;
    images: string[];
    deploy: string;
    repository: string;
    backRepository?: string;
};



const projects: Project[] = [
    {
        title: "Eccommerce, GamerCore",
        description: `Plataforma de comercio electrónico para productos gamer, con catálogo dinámico y carrito de compras persistente.`,
        tecnologias: "🚀 Tecnologías: React, TypeScript, Zustand, TailwindCSS, Node.js, MongoDB.",
        images: ["img/catalogo.png", "img/carrito.png", "img/telefono.png"],
        deploy: "https://gamer-core-ecommerce.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/Gamer-Core-ecommerce",
    },
    {
        title: "Buscador de recetas, Drinks Finder",
        description: "Buscador de recetas de cócteles según ingredientes disponibles, con filtrado por categorías.",
        tecnologias: "🚀 Tecnologías: React, TypeScript, TailwindCSS, API pública de cocktails.",
        images: ['img/buscador.png', "img/receta.png", "/img/drinkMobile.png"],
        deploy: "https://drinks-recipe-finder.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/Drinks-recipe-finder",


    },
    {
        title: "Planificador de gastos",
        description: "Aplicación para registrar ingresos y gastos, calcular presupuestos y mantener control financiero.",
        tecnologias: "🚀 Tecnologías: React, Context API, TailwindCSS.",
        images: ['img/pView.png', "img/uso.png", "img/pMobile.png"],
        deploy: "https://budget-controller-rust.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/budget-controller",

    },
    {
        title: "Diario de notas, Jotter journal",
        description: "Aplicación para crear, editar y gestionar notas personales con autenticación segura.",
        tecnologias: "🚀 Tecnologías: React, TypeScript, TailwindCSS, Node.js, MongoDB.",
        images: ['img/jotter.png', 'img/jotterView.png', 'img/jotterNotece.png', 'img/jotterMemo.png', 'img/mobileMenu.png', 'img/mobileMenu2.png'],
        deploy: "https://jotter-journal.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/JotterJournal",

    },
    {
        title: "Calendario de eventos, CoAgenda",
        description: "Calendario interactivo para gestionar eventos con login y registro de usuarios.",
        tecnologias: "🚀 Tecnologías: React, TypeScript, TailwindCSS, Node.js, MongoDB.",
        images: ['img/coAgenda.png', 'img/coAgendaView.png', 'img/coAgendaEvent.png', 'img/coAgendaEvent2.png', 'img/coAgendagenda.png', 'img/mes.png'],
        deploy: "https://co-agenda-frontend.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/CoAgenda_Frontend",
        backRepository: "https://github.com/JuanAlejo-Rivera/CoAgenda_Backend",

    },
    {
        title: "Gestor de proyectos, TaskLy",
        description: "Gestor de proyectos con autenticación y control de tareas colaborativas.",
        tecnologias: "🚀 Tecnologías: React, TypeScript, TailwindCSS, Node.js, MongoDB.",
        images: ['img/TaskView1.png', 'img/TaskView2.png', 'img/TaskView3.png', 'img/TaskProjects3.png', 'img/TaskTask4.png', 'img/TaskTask5.png', 'img/Taskcolabor6.png', 'img/TaskPerfil.png', 'img/TaskPassword.png', 'img/TaskMailtrap.png', 'img/TaskConfirm.png'],
        deploy: "https://taskly-frontend-rosy-nu.vercel.app/auth/login",
        repository: "https://github.com/JuanAlejo-Rivera/TaskLy_Frontend",
        backRepository: "https://github.com/JuanAlejo-Rivera/TaskLy_backend",

    }
];

export default projects;









