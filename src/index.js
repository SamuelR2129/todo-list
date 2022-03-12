import "./style.scss";

document.querySelector("#add-project-btn").addEventListener("click", () => {
  const projectSection = document.querySelector("#project-section");

  const addProjectContainer = document.createElement("div");
  addProjectContainer.id = "add-project-container";
  projectSection.appendChild(addProjectContainer);

  const addProjectTitle = document.createElement("div");
  addProjectTitle.className = "add-project-child";
  addProjectContainer.appendChild(addProjectTitle);

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = "Title:";
  addProjectTitle.appendChild(projectTitle);

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  addProjectTitle.appendChild(titleInput);

  const addProjectDate = document.createElement("div");
  addProjectDate.className = "add-project-child";
  addProjectContainer.appendChild(addProjectDate);

  const projectDate = document.createElement("h3");
  projectDate.textContent = "Date:";
  addProjectDate.appendChild(projectDate);

  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "text");
  dateInput.placeholder = "DD/MM/YYYY";
  addProjectDate.appendChild(dateInput);

  const addProjectButton = document.createElement("div");
  addProjectButton.className = "add-project-child";
  addProjectContainer.appendChild(addProjectButton);

  const projectButton = document.createElement("button");
  projectButton.textContent = "Submit";
  addProjectContainer.appendChild(projectButton);
});
