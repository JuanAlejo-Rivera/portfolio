type Project = {
    titleKey: string;
    descriptionKey: string;
    fulldescriptionKey: string;
    tecnologiasKey: string;
    images: string[];
    deploy: string;
    repository: string;
    backRepository?: string;
};



const projects: Project[] = [
    {
        titleKey: "projects.list.skillup.title",
        descriptionKey: "projects.list.skillup.description",
        fulldescriptionKey: "projects.list.skillup.fullDescription",
        tecnologiasKey: "projects.list.skillup.tech",
        images: ['img/skillup/login.jpg', 'img/skillup/register.jpg', 'img/skillup/dashboard.jpg', 'img/skillup/sections.jpg', 'img/skillup/lessons.jpg', 'img/skillup/loading.jpg', 'img/skillup/account.jpg', 'img/skillup/chnagepassword.jpg', 'img/skillup/departments.jpg', 'img/skillup/roles.jpg'],
        deploy: "https://skill-up-neon.vercel.app/auth/login",
        repository: "https://github.com/JuanAlejo-Rivera/SkillUp_front",
        backRepository: "https://github.com/JuanAlejo-Rivera/SkillUp_Backend",
    },
    {
        titleKey: "projects.list.coagenda.title",
        descriptionKey: "projects.list.coagenda.description",
        fulldescriptionKey: "projects.list.coagenda.fullDescription",
        tecnologiasKey: "projects.list.coagenda.tech",
        images: ['img/coAgenda.png', 'img/coAgendaView.png', 'img/coAgendaEvent.png', 'img/coAgendaEvent2.png', 'img/coAgendagenda.png', 'img/mes.png'],
        deploy: "https://co-agenda-frontend.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/CoAgenda_Frontend",
        backRepository: "https://github.com/JuanAlejo-Rivera/CoAgenda_Backend",

    },
    {
        titleKey: "projects.list.taskly.title",
        descriptionKey: "projects.list.taskly.description",
        fulldescriptionKey: "projects.list.taskly.fullDescription",
        tecnologiasKey: "projects.list.taskly.tech",
        images: ['img/TaskView1.png', 'img/TaskView2.png', 'img/TaskView3.png', 'img/TaskProjects3.png', 'img/TaskTask4.png', 'img/TaskTask5.png', 'img/Taskcolabor6.png', 'img/TaskPerfil.png', 'img/TaskPassword.png', 'img/TaskMailtrap.png', 'img/TaskConfirm.png'],
        deploy: "https://taskly-frontend-rosy-nu.vercel.app/auth/login",
        repository: "https://github.com/JuanAlejo-Rivera/TaskLy_Frontend",
        backRepository: "https://github.com/JuanAlejo-Rivera/TaskLy_backend",

    },
        {
        titleKey: "projects.list.jotter.title",
        descriptionKey: "projects.list.jotter.description",
        fulldescriptionKey: "projects.list.jotter.fullDescription",
        tecnologiasKey: "projects.list.jotter.tech",
        images: ['img/jotter.png', 'img/jotterView.png', 'img/jotterNotece.png', 'img/jotterMemo.png', 'img/mobileMenu.png', 'img/mobileMenu2.png'],
        deploy: "https://jotter-journal.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/JotterJournal",

    },
    {
        titleKey: "projects.list.gamercore.title",
        descriptionKey: "projects.list.gamercore.description",
        fulldescriptionKey: "projects.list.gamercore.fullDescription",
        tecnologiasKey: "projects.list.gamercore.tech",
        images: ["img/gamercore/newCatalog.jpg", "img/gamercore/newMAin.jpg", "img/gamercore/newBurgMenu.jpg", "img/gamercore/carBurgMenu.jpg", "img/gamercore/notifications.jpg"],
        deploy: "https://gamer-core-ecommerce.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/Gamer-Core-ecommerce",
    },
    {
        titleKey: "projects.list.drinks.title",
        descriptionKey: "projects.list.drinks.description",
        fulldescriptionKey: "projects.list.drinks.fullDescription",
        tecnologiasKey: "projects.list.drinks.tech",
        images: ['img/buscador.png', "img/receta.png", "/img/drinkMobile.png"],
        deploy: "https://drinks-finder-blush.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/DrinksFinder",


    },
    {
        titleKey: "projects.list.budget.title",
        descriptionKey: "projects.list.budget.description",
        fulldescriptionKey: "projects.list.budget.fullDescription",
        tecnologiasKey: "projects.list.budget.tech",
        images: ['img/pView.png', "img/uso.png", "img/pMobile.png"],
        deploy: "https://budget-controller-rust.vercel.app/",
        repository: "https://github.com/JuanAlejo-Rivera/budget-controller",

    },


];

export default projects;









