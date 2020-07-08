const projects = [
    {
        date: "2019-06-30",
        title: "Game for user touch data analysis",
        description: "This project contains a game created in unity in order to collect user touch data. In addition, " +
            "it has a python script (jupyter notebook) with different functions for the analysis of user data collected through the game.",
        img: "https://github.com/sallaji/game_for_touch_gesture_data_analysis/raw/master/readmepics/shapematch_grid_scene.JPG",
        link: "https://github.com/sallaji/game_for_touch_gesture_data_analysis"
    },
    {
        date: "2018-06-11",
        title: "Grails Example Project",
        description: "This project was created in order to explore the functionalities offered by grails. This project " +
            "was inspired by the Web Engineering module taught by Professor Dierk König at the FHNW University of " +
            "Applied Sciences.",
        img: "https://raw.githubusercontent.com/sallaji/grails-project-example/master/readmeassets/announcements.JPG",
        link: "https://github.com/sallaji/grails-project-example"
    }
];

let repositories = document.getElementById("repositories");
projects.forEach(project => {
    let child = document.createElement("ul");
    child.classList.add("repository-item")
    child.innerHTML = `
        <div>
            <h2>${project.title}</h2>
            <small>${project.date}</small>
            <p>${project.description}</p>
            <a class="button" href="${project.link}" target="_blank">Link to repository</a>
        </div>
        <div>
            <img src="${project.img}" alt="${project.title}">  
        </div>
    `;
    repositories.appendChild(child);
});
let footer = document.getElementById('footer');
footer.innerHTML = new Date().getFullYear().toString();