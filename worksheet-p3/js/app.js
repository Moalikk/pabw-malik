const name = "Muhammad Malik Firdaus";
const role = "Informatics student who loves playing video games";
const skills = ["Action RPG", "FPS", "Tower Defense"];
let gameCount = 4;

const sentence = `My name is ${name}, ${role}. I enjoy playing ${skills.join(", ")} games and currently have ${gameCount} games in my collection.`;

console.log(name);
console.log(role);
console.log(skills);
console.log(gameCount);
console.log(sentence);

export const projectList = [
  { title: "Pokemon Z-A", genre: "Action RPG", platform: "Nintendo Switch", rating: "8/10" },
  { title: "Valorant", genre: "FPS", platform: "PC", rating: "7/10" },
  { title: "Tower Defense Simulator", genre: "Tower Defense", platform: "PC & Mobile", rating: "9/10" },
  { title: "Pixel Gun 3D", genre: "First Person Shooter", platform: "Android & PC", rating: "7/10" }
];

const profile = {
    name: "Muhammad Malik Firdaus",
    role: "Informatics student who loves playing video games",
    skills: ["Action RPG", "FPS", "Tower Defense"]
};

function createIntroduction({ name, role}) {
    return `${name} — ${role}`;
}

const formatSkills = (list) => list.join(" . ");

console.log(createIntroduction(profile));
console.log(formatSkills(profile.skills));

console.table(profile.skills);
console.table(projectList);

const finished = projectList.filter((project) => project.finished);
console.table(finished);

const catalog = projectList.find((project) => project.title === "productCatalog");
console.log(catalog);

document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const platform = document.getElementById("platform").value;
    const rating = document.getElementById("rating").value;

    console.log("game baru:", { title, genre, platform, rating});
    alert('game "${title}" Berhasil diproses');
});
}
});

import { URL } from './api.js';

async function loadData() {
    try {
        const response = await fetch(URL);
        console.log('status:', response.status, 'ok:', response.ok);
        
        if (!response.ok) {
            throw new Error('status ' + response.status);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

loadData();
