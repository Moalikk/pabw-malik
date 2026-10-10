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

const projectList = [
  { title: "Profile Page", year: 2026, finished: true },
  { title: "productCatalog", year: 2026, finished: false },
  { title: "Game Collection Dashboard", year: 2026, finished: true }
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