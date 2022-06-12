import { projects } from "./assets/projects.js";
import { buildCards } from "./components/BuildCards.js";

const container = document.querySelector("main");

projects.forEach((project) => {
  console.log(project.title);
  container.innerHTML += buildCards(project);
});
