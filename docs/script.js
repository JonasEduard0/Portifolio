const languageBtn = document.getElementById("language");

const translations = {

    pt: {
        language: "PT",

        about: "Sobre",
        project: "Projetos",
        education: "Formação",
        contact: "Contato",

        descricao: "Desenvolvedor Front-End",

        sobreTitulo: "Sobre Mim",
        sobreTexto:
            "Olá! Meu nome é Jonas Eduardo, um desenvolvedor Front-End cursando Ciência da Computação, estudando para Full-Stack. Formado em Técnico em Informática integrado ao Ensino Médio, tenho experiência em projetos pessoais e em grupos, como um sistema de irrigação automática com Arduíno, em C; bem como um Software de avaliação física de discentes para uma faculdade de Educação Física. Já desenvolvi em JavaScript, Vue.js, SQL, C++ e Java.",

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

        about: "About",
        project: "Projects",
        education: "Education",
        contact: "Contact",

        descricao: "Front-End Developer",

        sobreTitulo: "About Me",
        sobreTexto:
            "Hello! My name is Jonas Eduardo. I’m a front-end developer currently pursuing a degree in Computer Science and training to become a full-stack developer. I hold a technical diploma in Computer Science (integrated with high school), and I have experience with both personal and group projects, such as an automatic irrigation system using Arduino, written in C, as well as software for evaluating students’ physical fitness for a physical education college. I have developed using JavaScript, Vue.js, SQL, C++, and Java.",

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

    document.getElementById("about").textContent = translations[lang].about;
    document.getElementById("project").textContent = translations[lang].project;
    document.getElementById("education").textContent = translations[lang].education;
    document.getElementById("contact").textContent = translations[lang].contact;

    document.getElementById("descricao").textContent = translations[lang].descricao;

    document.getElementById("sobre-titulo").textContent = translations[lang].sobreTitulo;
    document.getElementById("sobre-texto").textContent = translations[lang].sobreTexto;

    document.getElementById("projetos-titulo").textContent = translations[lang].projetosTitulo;

    const cards = document.querySelectorAll(".projetos-card");

    cards[0].querySelector("h3").textContent = translations[lang].projeto1Nome;
    cards[0].querySelector("p").textContent = translations[lang].projeto1Desc;
    cards[0].querySelector("a").textContent = translations[lang].projeto1Link;

    cards[1].querySelector("h3").textContent = translations[lang].projeto2Nome;
    cards[1].querySelector("p").textContent = translations[lang].projeto2Desc;
    cards[1].querySelector("a").textContent = translations[lang].projeto2Link;

    document.getElementById("formacao-titulo").textContent = translations[lang].formacaoTitulo;

    const timeline = document.querySelectorAll(".timeline-content");

    timeline[0].querySelector("h3").textContent = translations[lang].curso1;
    timeline[1].querySelector("h3").textContent = translations[lang].curso2;

    document.getElementById("contato-titulo").textContent = translations[lang].contatoTitulo;
    languageBtn.title = currentLanguage === "pt"? "English": "Português";
}

translate(currentLanguage);

languageBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "pt" ? "en" : "pt";
    
    localStorage.setItem("language", currentLanguage);
    translate(currentLanguage);
});