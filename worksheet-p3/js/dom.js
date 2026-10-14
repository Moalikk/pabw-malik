import {projectList} from './app.js';
const tbody = document.querySelector("#game-list tbody");
const filterRow = document.querySelector("#filter");

function renderGames(games) {
    if (!tbody) return;
    tbody.textContent = "";
    games.forEach((game) => {
        const tr = document.createElement("tr");
        tr.style.cursor = "pointer";

        const tdTitle = document.createElement("th");
        tdTitle.setAttribute("scope", "row");
        tdTitle.textContent = game.title;
        tr.append(tdTitle);

        const tdGenre = document.createElement("td");
        tdGenre.textContent = game.genre;
        tr.append(tdGenre);

        const tdPlatform = document.createElement("td");
        tdPlatform.textContent = game.platform;
        tr.append(tdPlatform);

        const tdRating = document.createElement("td");
        tdRating.textContent = game.rating;
        tr.append(tdRating);

        tbody.append(tr);
    });
}

renderGames(projectList);
if (filterRow) {
    filterRow.addEventListener("click", (event) => {
        const button = event.target.closest("button");
        if (!button) return;

        const category = button.dataset.category;

        const selected = projectList.filter(
            (project) => category === "all" || project.genre.toLowerCase() === category.toLowerCase()
        );

        renderGames(selected);
        markActiveButton(button);
    });
}

function markActiveButton(activeButton) {
    document.querySelectorAll("#filter button").forEach((button) => {
        button.classList.toggle("active", button === activeButton);
    });
}