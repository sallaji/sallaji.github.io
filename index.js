const projects = [
    {
        date: "2020-08-23",
        title: "Single Page Application (SPA) using ReactJS, Mongoose, Passport, NodeJS",
        description: "this project consists of a web application for the registration and monitoring of events. " +
            "The project is divided into frontend (client side) and backend (server side).",
        images: ["https://github.com/sallaji/event-tracking-app/blob/master/resources/event_page.png?raw=true",
            "https://github.com/sallaji/event-tracking-app/blob/master/resources/event_details.png?raw=true",
            "https://github.com/sallaji/event-tracking-app/blob/master/resources/create_event.gif?raw=true",
        ],
        link: "https://github.com/sallaji/event-tracking-app"
    },
    {
        date: "2019-06-30",
        title: "Game for user touch data analysis",
        description: "This project contains a game created in unity in order to collect user touch data. In addition, " +
            "it has a python script (jupyter notebook) with different functions for the analysis of user data collected through the game.",
        images: ["https://github.com/sallaji/game_for_touch_gesture_data_analysis/raw/master/readmepics/shapematch_grid_scene.JPG"],
        link: "https://github.com/sallaji/game_for_touch_gesture_data_analysis"
    },
    {
        date: "2018-06-11",
        title: "Grails Example Project",
        description: "This project was created in order to explore the functionalities offered by grails. This project " +
            "was inspired by the Web Engineering module taught by Professor Dierk König at the FHNW University of " +
            "Applied Sciences.",
        images: ["https://raw.githubusercontent.com/sallaji/grails-project-example/master/readmeassets/announcements.JPG"],
        link: "https://github.com/sallaji/grails-project-example"
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
        <img src="${image}" alt="${projectTitle}"
        style="
            object-fit: contain;
            height:95%;
            width: 95%"/>
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

        }, 3000)
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
            <p>${project.description}</p>
            <a class="button" href="${project.link}" target="_blank">Link to repository</a>
        </div>
    `;
    child.appendChild(carousel1);
    repositories.appendChild(child);
});
let footer = document.getElementById('footer');
footer.innerHTML = new Date().getFullYear().toString();

