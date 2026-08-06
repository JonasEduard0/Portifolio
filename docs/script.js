const languageBtn = document.getElementById("language");

const translations = {

    pt: {
        language: "PT",

        start: "Início",
        about: "Sobre",
        project: "Projetos",
        education: "Formação",
        contact: "Contato",

        descricao: "Desenvolvedor Front-End",

        sobreTitulo: "Sobre Mim",
        sobreTexto:
            "Olá! Meu nome é Jonas Eduardo, sou um estudante de Ciência da Computação e desenvolvedor Front-End, estudando para Full-Stack. Formado em Técnico em Informática Integrado ao Ensino Médio, tenho experiência em projetos pessoais e em grupos.",

        projetosTitulo: "Projetos",

        projeto1Nome: "Gerenciador de Músicas",
        projeto1Desc:
            "Sistema que permite cadastrar músicas, álbuns e artistas, consultar e remover registros. Desenvolvido em Java Swing com interface gráfica.",
        projeto1Link: "Repositório",

        projeto2Nome: "RPG de Texto",
        projeto2Desc:
            "Jogo de RPG em texto desenvolvido em Python para a competição SeComp 2022.",
        projeto2Link: "Repositório",

        formacaoTitulo: "Formação",

        curso1: "Técnico em Informática Integrado ao Ensino Médio",

        curso2: "Ciência da Computação",

        contatoTitulo: "Contato"
    },

    en: {
        language: "EN",

        start: "Home",
        about: "About",
        project: "Projects",
        education: "Education",
        contact: "Contact",

        descricao: "Front-End Developer",

        sobreTitulo: "About Me",
        sobreTexto:
            "Hi! My name is Jonas Eduardo. I'm a Computer Science student and Front-End developer, currently studying to become a Full-Stack developer. I graduated as an IT Technician and have experience in personal and team projects.",

        projetosTitulo: "Projects",

        projeto1Nome: "Music Manager",
        projeto1Desc:
            "Application for managing songs, albums and artists. Built with Java Swing and a graphical interface.",
        projeto1Link: "Repository",

        projeto2Nome: "Text RPG",
        projeto2Desc:
            "Text-based RPG game developed in Python for the SeComp 2022 competition.",
        projeto2Link: "Repository",

        formacaoTitulo: "Education",

        curso1: "Integrated High School IT Technician",

        curso2: "Computer Science",

        contatoTitulo: "Contact me"
    }

};

let currentLanguage = localStorage.getItem("language") || "pt";

function translate(lang) {

    // Menu
    document.getElementById("start").textContent = translations[lang].start;
    document.getElementById("about").textContent = translations[lang].about;
    document.getElementById("project").textContent = translations[lang].project;
    document.getElementById("education").textContent = translations[lang].education;
    document.getElementById("contact").textContent = translations[lang].contact;

    // Home
    document.getElementById("descricao").textContent = translations[lang].descricao;

    // Sobre
    document.getElementById("sobre-titulo").textContent = translations[lang].sobreTitulo;
    document.getElementById("sobre-texto").textContent = translations[lang].sobreTexto;

    // Projetos
    document.getElementById("projetos-titulo").textContent = translations[lang].projetosTitulo;

    const cards = document.querySelectorAll(".projetos-card");

    cards[0].querySelector("h3").textContent = translations[lang].projeto1Nome;
    cards[0].querySelector("p").textContent = translations[lang].projeto1Desc;
    cards[0].querySelector("a").textContent = translations[lang].projeto1Link;

    cards[1].querySelector("h3").textContent = translations[lang].projeto2Nome;
    cards[1].querySelector("p").textContent = translations[lang].projeto2Desc;
    cards[1].querySelector("a").textContent = translations[lang].projeto2Link;

    // Formação
    document.getElementById("formacao-titulo").textContent = translations[lang].formacaoTitulo;

    const timeline = document.querySelectorAll(".timeline-content");

    timeline[0].querySelector("h3").textContent = translations[lang].curso1;

    timeline[1].querySelector("h3").textContent = translations[lang].curso2;

    // Contato
    document.getElementById("contato-titulo").textContent = translations[lang].contatoTitulo;

    languageBtn.title = currentLanguage === "pt"? "English": "Português";
}

translate(currentLanguage);

languageBtn.addEventListener("click", () => {

    currentLanguage = currentLanguage === "pt" ? "en" : "pt";

    localStorage.setItem("language", currentLanguage);

    translate(currentLanguage);

});