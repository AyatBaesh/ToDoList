const createProject = document.querySelector('#createProject');
const addFormButtons = document.querySelectorAll('.addFormBtn');
const addForm = document.querySelector('#addForm');
const projects = document.querySelector('#projects');
createProject.addEventListener('click',() => {
    addForm.style.display = "block";
})

addFormButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.target.id === 'add'){
            console.log('add clicked');
            addProject();
        }
        addForm.style.display = 'none';
    });
});

function addProject() {
    const projectNameInput = document.querySelector('#projectName');
    const projectName = projectNameInput.value;
    const projectDiv = document.createElement('div');
    projectDiv.innerText = projectName;
    projectDiv.classList.add = 'project';
    projects.insertBefore(projectDiv, projects.firstChild);
    projectNameInput.value = '';
}
