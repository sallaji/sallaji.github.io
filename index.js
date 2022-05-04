const projects = [
    {
        date: "2021-03-30",
        title: "Online Handwriting Data Collection System",
        keywords: "Python, Kotlin, Flask, SQLAlchemy, Alembic, PyJWT, Gunicorn, Jetpack Compose, Retrofit, OkHttp, " +
            "Dagger Hilt, Room, SQLite, PostgreSQL, REST API, Docker, Certbot, Shell, Bash, gradle, AWS, GitLab CICD" +
            "DNS Provider(cyon.ch)",
        description: "The data collector is a dedicated system that enables the capture and centralized storage of " +
            "online handwritings (i.e, single characters, words, and sentences) using an android device and a digital " +
            "pen equipped with EMR technology. The system is divided into two main sides, a server-side and a " +
            "client-side. On the server side a AWS EC2 Linux virtual machine hosts a Docker multi-container application" +
            " consisting of running docker instances of two PostgreSQL database servers, a REST API and a proxy server" +
            " for centralized data storage and provisioning over a secure HTTPS connection. On the client side an" +
            " application for android tablets and digital pens with EMR technology allows endusers the online" +
            " handwriting of text which can be sent to the server for its storage in the database through REST API" +
            " calls. The system also uses GitLab's CI/CD services for the automated continuous integration and " +
            "deployment of server-side components. The REST API is accessible through the following URL: " +
            "https://rdpen.ch/api/v1/",
        images: ["./resources/data_collector.png",
            "./resources/pentool_environment.jpg",
        ],
        link: "https://www.buscotienda.com",
        linkname: "Link REST API"
    },
    {
        date: "2021-03-30",
        title: "Multi-container Docker Single Web Application",
        keywords: "JavaScript, ReactJS, Mongoose, Passport, MaterialUI,Docker, Nginx, " +
            "SSL/TLS Let's Encrypt Certificate, Shell, npm, NodeJS, Debian Linux Distribution, DigitalOcean, Namecheap",
        description: "This application is a simple example of a user management system. A new user can register using " +
            "a name, password and selecting the user type. Administrator users have the right to read and edit data. " +
            "Normal users can only read data. The application is a multi-container docker application built upon a " +
            "client-server architecture. For the client side (frontend) ReactJS is used which connects to the backend " +
            "services developed using Mongoose, Nodexpress, Passport frameworks. The application has been deployed " +
            "using CI/CD tools from GitHub, outlives in a Linux virtual machine hosted on Digital Ocean and is securely " +
            "available through https://www.buscotienda.com.",
        images: ["./resources/userlist_buscotienda.png",
            "/resources/high_level_architecture_buscotienda.png",
        ],
        link: "https://www.buscotienda.com",
        linkname: "go to buscotienda.com"
    },
    {
        date: "2021-01-18",
        title: "Simple timer application",
        keywords: "Java 15, JavaFX, gradle",
        description: "Simple timer developed using Java and JavaFX. The timer offers several input functionalities " +
            "for configuring the time.",
        images: ["./resources/started.jpg",
            "/resources/time_over.jpg",
        ],
        link: "https://github.com/sallaji/timer",
        linkname: "go to GitHub repository"
    },
    {
        date: "2020-08-23",
        title: "Single Page Application (SPA)",
        keywords: "JavaScript, npm, NodeJS, ReactJS, Mongoose, Passport, MaterialUI",
        description: "this project consists of a web application for the registration and monitoring of events. " +
            "The project is divided into frontend (client side) and backend (server side).",
        images: ["./resources/login_success.gif",
            "./resources/login_failed.gif",
            "./resources/create_event.gif",
            "./resources/search_query.gif",
            "./resources/filter_and_sort.gif",
        ],
        link: "https://github.com/sallaji/event-tracking-app",
        linkname: "go to GitHub repository"
    },
    {
        date: "2019-06-30",
        title: "Game for user touch data analysis",
        keywords: "Python, C#, Unity, Jupyter Notebook",
        description: "This project contains a game created in unity in order to collect user touch data. In addition, " +
            "it has a python script (jupyter notebook) with different functions for the analysis of user data collected through the game.",
        images: ["./resources/shapematch_grid_scene.jpg"],
        link: "https://github.com/sallaji/game_for_touch_gesture_data_analysis",
        linkname: "go to GitHub repository"
    },
    {
        date: "2018-06-11",
        title: "Grails Example Project",
        keywords: "Java, Grails, Gradle",
        description: "This project was created in order to explore the functionalities offered by grails. This project " +
            "was inspired by the Web Engineering module taught by Professor Dierk König at the FHNW University of " +
            "Applied Sciences.",
        images: ["./resources/announcements.png"],
        link: "https://github.com/sallaji/grails-project-example",
        linkname: "go to GitHub repository"
    }
];

let repositories = document.getElementById("repositories");

const carousel = (images, projectTitle) => {
    let parent = document.createElement('div');
    parent.setAttribute("style", "margin: 1rem; position:relative;")
    images.forEach((image, index) => {
        let child = document.createElement("div");
        child.classList.add("carousel-img");
        child.innerHTML = `
      <div style="
      justify-content: center;
      position: relative;
      width: 300px;
      height: 300px;
      padding: 1rem;
      background-color: rgba(241,241,241,0.96);
      ">
      <a href="${image}" target="_blank">
              <img src="${image}" alt="${projectTitle}"
        style="
            object-fit: contain;
            height:95%;
            width: 95%"/>
</a>

        <div style="
            bottom: 0;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
            left:0;
            right: 0;
            position: absolute;
            background-color: rgba(30,20,33,0.76);
            color: white;
            width:0.75rem;
            height:0.75rem;
            font-size: 0.5rem;
            padding: 0.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            ">
         <span>${index + 1}</span>
        </div>
      </div>`;
        child.style.display = index === 0?  "visible": "none";
        parent.appendChild(child)
    });

    let children = parent.childNodes;
    let idx = 0;
    let current = children[idx];
    const repeat = () => {
        setInterval(() => {
            children.forEach(child => {
                child === current ?
                    child.style.display = "grid" :
                    child.style.display = "none";
            });
            idx = (idx + 1) === children.length ? 0 : idx + 1;
            current = children[idx];

        }, 4000)
    };
    repeat();

    if (children.length === 1) {
        children[0].style.display = "grid";
    }
    return parent
};

projects.forEach(project => {
    let child = document.createElement("li");
    let carousel1 = carousel(project.images, project.title);
    child.classList.add("repository-item");
    child.innerHTML = `
        <div>
            <h2>${project.title}</h2>
            <small>${project.date}</small>
            <p><strong>Keywords: </strong>${project.keywords}</p>
            <p>${project.description}</p>
            <a class="button" href="${project.link}" target="_blank">${project.linkname}</a>
        </div>
    `;
    child.appendChild(carousel1);
    repositories.appendChild(child);
});
let footer = document.getElementById('footer');
footer.innerHTML = new Date().getFullYear().toString();

