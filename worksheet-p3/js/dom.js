import {projectList} from './app.js';
const tbody = document.querySelector("#game-list tbody");

if (tbody) {
    tbody.textContent = "";
    projectList.forEach((game) => {
        const tr = document.createElement("tr");
        tr.style.cursor = "pointer";

        // Kolom Title
        const tdTitle = document.createElement("th");
        tdTitle.setAttribute("scope", "row");
        tdTitle.textContent = game.title;
        tr.append(tdTitle);

        // Kolom Genre
        const tdGenre = document.createElement("td");
        tdGenre.textContent = game.genre;
        tr.append(tdGenre);

        // Kolom Platform
        const tdPlatform = document.createElement("td");
        tdPlatform.textContent = game.platform;
        tr.append(tdPlatform);

        // Kolom Rating
        const tdRating = document.createElement("td");
        tdRating.textContent = game.rating;
        tr.append(tdRating);

        tbody.append(tr);
    });
}