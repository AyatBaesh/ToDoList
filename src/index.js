const addButton = document.getElementById('addButton');
const toDoInput = document.getElementById('toDoInput');
const toDoDiv = document.querySelector('.toDos');
addButton.addEventListener('click', (event) => {
    createToDo(toDoInput.value);
    saveData();
})

function createToDo(name){
    const toDo = new ToDoDTO(name);
    const toDoContainer = document.createElement('div');
    toDoContainer.classList.add('toDo');
    toDoContainer.innerText = toDo.getName();
    toDoDiv.appendChild(toDoContainer);
}
class ToDoDTO{
    constructor(name){
        this.name = name;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}