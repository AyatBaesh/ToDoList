const createProject = document.querySelector('#createProject');
const addFormButtons = document.querySelectorAll('.addFormBtn');
const addForm = document.querySelector('#addForm');
const projectsDiv = document.querySelector('#projects');
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
    projectDiv.classList.add('project');
    projectsDiv.insertBefore(projectDiv, projectsDiv.firstChild);
    projectNameInput.value = '';
    projectContent(projectDiv);
}
function projectContent(projectDiv){

}

class Project {
    constructor(name, tasks){
        this.name = name;
        this.tasks = tasks;
    }
    addTask(tasks, newTask){
        tasks.push(newTask);
    }
    removeTask(tasks, taskToRemove){
        return tasks.filter((task) => {
            return task.name != taskToRemove.name;
        });
    }
}