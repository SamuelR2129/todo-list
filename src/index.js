import "./style.scss";
import createAddProjectForm from "./components/media/Functions/createAddProjectForm";
import createProjTile from "./components/media/Functions/createProjTile";

document.querySelector("#add-project-btn").addEventListener("click", () => {
  const projInfo = createAddProjectForm();
  createProjTile(projInfo);
});
