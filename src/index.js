const addButton = document.getElementById('addButton');
const toDoInput = document.getElementById('toDoInput');
const toDoDiv = document.querySelector('.toDos');
const todos = [];
addButton.addEventListener('click', (event) => {
    DOMModule.createToDo(toDoInput.value);
    // saveData();
})
const DOMModule = (() =>{
    function createToDo(name){
        const toDo = new ToDoDTO(name, false);
        todos.push(toDo);
        const toDoContainer = document.createElement('div');
        toDoContainer.classList.add('toDo');
        toDoContainer.innerText = toDo.getName();
        toDoDiv.appendChild(toDoContainer);
    
    }
    function createToDoButtons(toDoContainer){
        const changeButton = document.createElement('button');
        changeButton.id = 'changeButton';
        changeButton.type = 'button';
        changeButton.classList.add('toDoButton');
        
        const statusButton = document.createElement('button');
        statusButton.id = 'statusButton';
        changeButton.type = 'button';
        changeButton.classList.add('toDoButton');

        const deleteButton = document.createElement('button');
        deleteButton.id = 'deleteButton';
        deleteButton.tpye = 'button';
        deleteButton.classList.add('toDoButton');

    }
    return {createToDo}
})();



class ToDoDTO{
    constructor(name, status){
        this.status = status;
        this.name = name;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setStatus(status){
        this.status = status;
    }
    getStatus(){
        return this.status;
    }

}

class ToDoList{
    constructor(todos){
        this.todos = todos;
    }
    
}