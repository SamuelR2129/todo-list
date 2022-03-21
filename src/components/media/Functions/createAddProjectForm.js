const createAddProjectForm = () => {
  const projectSection = document.querySelector("#project-section");

  const addProjectWrapper = document.createElement("div");
  addProjectWrapper.id = "add-project-wrapper";
  projectSection.appendChild(addProjectWrapper);

  const addProjectForm = document.createElement("form");
  addProjectForm.name = "add-p-form-name";
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
  titleInput.className = "add-p-title-name";
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
  dateInput.className = "add-p-date-name";
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

  const projInfo = {};

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const addPTitleName = document.querySelector(".add-p-title-name");
    const addPDateName = document.querySelector(".add-p-date-name");
    const projectWrapper = document.querySelector("#add-project-wrapper");

    projInfo.title = addPTitleName.value;
    projInfo.date = addPDateName.value;
    addPDateName.value = "";
    addPTitleName.value = "";

    projectWrapper.style.display = "none";
    return projInfo;
  });

  console.log(projInfo);

  return projInfo;
};

export default createAddProjectForm;
