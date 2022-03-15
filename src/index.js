import "./style.scss";

//document.querySelector("#add-project-btn").addEventListener("click", () => {
const projectSection = document.querySelector("#project-section");

const addProjectWrapper = document.createElement("div");
addProjectWrapper.id = "add-project-wrapper";
projectSection.appendChild(addProjectWrapper);

const addProjectForm = document.createElement("form");
addProjectWrapper.appendChild(addProjectForm);

const addProjectContainer = document.createElement("div");
addProjectContainer.id = "add-project-container";
addProjectForm.appendChild(addProjectContainer);

const addProjectTitle = document.createElement("div");
addProjectTitle.className = "add-project-child";
addProjectContainer.appendChild(addProjectTitle);

const projectTitle = document.createElement("h3");
projectTitle.id = "project-title-text";
projectTitle.textContent = "Title:";
addProjectTitle.appendChild(projectTitle);

const titleInput = document.createElement("input");
titleInput.setAttribute("type", "text");
addProjectTitle.appendChild(titleInput);

document.querySelector("input").select();

const addProjectDate = document.createElement("div");
addProjectDate.className = "add-project-child";
addProjectContainer.appendChild(addProjectDate);

const projectDate = document.createElement("h3");
projectDate.id = "project-date-text";
projectDate.textContent = "Date:";
addProjectDate.appendChild(projectDate);

const dateInput = document.createElement("input");
dateInput.setAttribute("type", "text");
dateInput.placeholder = "DD/MM/YYYY";
addProjectDate.appendChild(dateInput);

const addProjectButton = document.createElement("div");
addProjectButton.className = "add-project-child";
addProjectButton.id = "add-project-cont-btn";
addProjectContainer.appendChild(addProjectButton);

const projectButton = document.createElement("button");
projectButton.id = "project-submit-button";
projectButton.setAttribute("type", "submit");
projectButton.setAttribute("value", "Submit");
projectButton.textContent = "Submit";
addProjectButton.appendChild(projectButton);
//});

document.querySelector("form").addEventListener("submit", (e) => {
  const formData = new FormData(e.target);
  console.log(formData);
  // Now you can use formData.get('foo'), for example.
  // Don't forget e.preventDefault() if you want to stop normal form .submission
});
