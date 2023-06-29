const addButton = document.getElementById('addButton');
const toDoInput = document.getElementById('toDoInput');
const toDoDiv = document.querySelector('.toDos');
const todos = [];
// let exists = false;

function checkName(name, todos){
    for(const todo of todos){
        if(name === todo.getName()){
            return true;
        }
    }
        return false;

}

addButton.addEventListener('click', (event) => {
    if(toDoInput.value){
        if(checkName(toDoInput.value, todos)){
            alert('You already have this task!');
            return;
        }
        DOMModule.createToDo(toDoInput.value);
        console.log(`todos: ${todos}`)
    // saveData();
    }
})
const DOMModule = (() =>{
    function createToDo(name){
        const toDo = new ToDoDTO(name, false);
        todos.push(toDo);
        const toDoContainer = document.createElement('div');
        toDoContainer.classList.add('toDo');
        toDoContainer.innerText = toDo.getName();
        toDoDiv.appendChild(toDoContainer);
        createToDoButtons(toDoContainer);
    
    }
    function createToDoButtons(toDoContainer){
        const changeButton = document.createElement('button');
        changeButton.id = 'changeButton';
        changeButton.type = 'button';
        changeButton.classList.add('toDoButton');
        changeButton.innerText = 'change';
        
        const statusButton = document.createElement('button');
        statusButton.id = 'statusButton';
        statusButton.type = 'button';
        statusButton.classList.add('toDoButton');
        statusButton.innerText = 'status';


        const deleteButton = document.createElement('button');
        deleteButton.id = 'deleteButton';
        deleteButton.tpye = 'button';
        deleteButton.classList.add('toDoButton');
        deleteButton.innerText = 'delete';

        toDoContainer.appendChild(changeButton);
        toDoContainer.appendChild(statusButton);
        toDoContainer.appendChild(deleteButton);

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
    getStatus(){
        return this.status;
    }
    changeStatus(){
        if(this.status){
            this.status = false;
        }else{
            this.status = true;
        }
    }

}


