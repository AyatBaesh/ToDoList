const createProject = document.querySelector('#createProject');
const addFormButtons = document.querySelectorAll('.addFormBtn');
const addForm = document.querySelector('#addForm');
const projectsDiv = document.querySelector('#projects');
const projectsContent = document.querySelector('#projectsContent');
createProject.addEventListener('click',() => {
    addForm.style.display = "block";
})

addFormButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.target.id === 'add'){
            console.log('add clicked');
                const projectName = document.querySelector('#projectName').value;
                const project = new Project(projectName, []); 
                console.log('Project created:', project);
                addProject(project);
                document.querySelector('#projectName').value = '';
        }
        addForm.style.display = 'none';
    });
});

const DOMstuff = (() => {
    function addProject(project){
        //creating project in sidebar
        const newProject = createSideProject(project);
        //adding project to the content div
        const content = document.createElement('div');
        content.classList.add('projectContent');
        const projectHeader = document.createElement('h2');
        projectHeader.innerText = project.name;
        content.appendChild(projectHeader);
        
        const toDosContainer = document.createElement('div');
        toDosContainer.classList.add('toDos');
    
        
        toDosContainer.appendChild(TodoInput);
        const toDoAdd = document.createElement('button');
        toDoAdd.type = 'button';
        toDoAdd.name = 'addButton';
        toDoAdd.id = 'addButton';
        toDoAdd.textContent = 'Add';
        toDoAdd.classList.add('btn');
        toDosContainer.appendChild(toDoAdd);
     
        toDoAdd.addEventListener('click', (event) => {
            const toDo = createTodo(TodoInput.value);
            const toDoContainer = document.createElement('div');
            toDoContainer.innerText = toDo.name;
            toDosContainer.insertBefore(toDoContainer, toDosContainer.firstChild);
        });
        content.appendChild(toDosContainer);
        projectsContent.appendChild(content);
    }
    function createSideProject(project){
        const newProject = document.createElement('div');
        newProject.classList.add('project');
        newProject.innerText = project.name; 
        projectsDiv.appendChild(newProject);
        return newProject;
    }
    function createTodoInput(){
        const TodoInput = document.createElement('input');
        TodoInput.type = 'text';
        TodoInput.name = 'todo';
        TodoInput.id = 'todoInput';
        return TodoInput;
    }
    function createTodo(name){
        const toDo = new ToDo(name);
    
        return toDo;
    }
    
})


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

class ToDo{
    constructor(name){
        this.name = name;
        // this.date = dueDate;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

}