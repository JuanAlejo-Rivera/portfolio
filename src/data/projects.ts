type Project = {
    title: string;
    description: string;
    images: string[];
    deploy: string;
    repository: string;
};



const projects: Project[] = [
    {
        title: "Eccommerce, GamerCore",
        description: "hola",
        images: ["img/catalogo.png", "img/carrito.png", "img/telefono.png"],
        deploy: "https://gamer-core-ecommerce.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/Gamer-Core-ecommerce",
    },
    {
        title: "Buscador de recetas, Drinks Finder",
        description: "hola2",
        images: ['img/buscador.png', "img/receta.png", "/img/drinkMobile.png"],
        deploy: "https://drinks-recipe-finder.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/Drinks-recipe-finder",


    },
    {
        title: "Planificador de gastos",
        description: "hola3",
        images: ['img/pView.png', "img/uso.png", "img/pMobile.png"],
        deploy: "https://budget-controller-rust.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/budget-controller",

    },
    {
        title: "Diario de notas, Jotter journal",
        description: "hola4",
        images: ['img/jotter.png', 'img/jotterView.png', 'img/jotterNotece.png', 'img/jotterMemo.png', 'img/mobileMenu.png', 'img/mobileMenu2.png'],
        deploy: "https://jotter-journal.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/JotterJournal",

    },
    {
        title: "Calendario de eventos, CoAgenda",
        description: "hola5",
        images: ['img/coAgenda.png', 'img/coAgendaView.png', 'img/coAgendaEvent.png', 'img/coAgendaEvent2.png', 'img/coAgendagenda.png', 'img/mes.png'],
        deploy: "https://co-agenda-frontend.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/CoAgenda_Frontend",

    },
    {
        title: "Gestor de proyectos, TaskLy",
        description: "hola6",
        images: ['img/TaskView1.png', 'img/TaskView2.png', 'img/TaskView3.png', 'img/TaskProjects3.png', 'img/TaskTask4.png', 'img/TaskTask5.png', 'img/Taskcolabor6.png', 'img/TaskPerfil.png', 'img/TaskPassword.png', 'img/TaskMailtrap.png', 'img/TaskConfirm.png'],
        deploy: "https://taskly-frontend-rosy-nu.vercel.app/auth/login",
        repository: "https://github.com/JuanAlejo-Rivera/TaskLy_Frontend",
    }
];

export default projects;









