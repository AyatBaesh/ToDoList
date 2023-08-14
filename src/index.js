const addButton = document.getElementById('addButton');
const toDoInput = document.getElementById('toDoInput');
const toDoDiv = document.querySelector('.toDos');
let todos = [];
// let exists = false;

function checkName(name, todos){
    for(const todo of todos){
        if(name === todo.getName()){
            return true;
        }
    }
        return false;

}

// async function getData(){
//     let dataArr = await fetch(/*fetch data */);
//     todos = dataArr.json();
//     renderToDos(todos);
// }
addButton.addEventListener('click', (event) => {
    if(toDoInput.value){
        if(checkName(toDoInput.value, todos)){
            alert('You already have this task!');
            return;
        }else if(toDoInput.value.length > 58){
            alert('Oops, Looks like your ToDo name is too big, consider renaming it or breaking into smaller tasks');
        }
        DOMModule.createToDo(toDoInput.value);
        toDoInput.value = '';


        console.log(`todos: ${todos}`);
    }
})
function renderToDos(todos){
    DOMModule.clear();
    todos.forEach(todo => {
        DOMModule.createToDo(todo.name);
    });
}
const DOMModule = (() =>{
    
    function clear(){
        while(toDoDiv.firstChild){
            toDoDiv.removeChild(toDoDiv.firstChild);
        }
        todos = [];
    }

    function createToDo(name){
        const toDo = new ToDoDTO(name, false, (todos.length + 1));
        todos.push(toDo);

        let jsonNewToDo = JSON.stringify(toDo);
        console.log(`jsonNewToDo: ${jsonNewToDo}, type: ${typeof(jsonNewToDo)}`);
        //send toDo to the server
        createToDoContainer(toDo);    

    }
    
    function createToDoContainer(toDo){

            const toDoContainer = document.createElement('div');
            toDoContainer.classList.add('toDo');
            toDoContainer.innerText = toDo.getName();
            toDoDiv.appendChild(toDoContainer);
            createToDoButtons(toDoContainer, toDo);

    }
    function createToDoButtons(toDoContainer, currentToDo){

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');
        
        const statusButton = document.createElement('i');
        statusButton.id = 'statusButton';
        statusButton.classList.add('toDoButton');
        statusButton.classList.add('fa-solid', 'fa-check');
        statusButton.addEventListener('click', () => updateToDo(currentToDo, toDoContainer));

        const deleteButton = document.createElement('i');
        deleteButton.id = 'deleteButton';
        deleteButton.classList.add('toDoButton');
        deleteButton.classList.add('fa-solid', 'fa-xmark');
        deleteButton.addEventListener('click', () => deleteToDo(todos, currentToDo));

        buttonsContainer.appendChild(statusButton);
        buttonsContainer.appendChild(deleteButton);
        
        toDoContainer.appendChild(buttonsContainer);
        
    }

    function deleteToDo(todos, deletedToDo){
        //send deleted todo
        let jsonDeletedToDo = JSON.stringify(deletedToDo);
        console.log(`jsonDeletedToDo: ${jsonDeletedToDo}, type: ${typeof(jsonDeletedToDo)}`);

        todos = todos.filter(todo => todo.name != deletedToDo.name);
        renderToDos(todos);
        return;
    }
    function updateToDo(updatedToDo, toDoContainer){
        let jsonUpdatedToDo = JSON.stringify(updatedToDo);
        console.log(`jsonUpdatedToDo: ${jsonUpdatedToDo}, type: ${typeof(jsonUpdatedToDo)}`);

        if(toDoContainer.classList.contains('done')){
            toDoContainer.classList.replace('done', 'undone');
        }else if(toDoContainer.classList.contains('undone')){
            toDoContainer.classList.replace('undone', 'done');
        }else if(updatedToDo.getStatus()){

            toDoContainer.classList.add('done');
        }else if(!updatedToDo.getStatus()){
            toDoContainer.classList.add('done');
        }
        updatedToDo.changeStatus();
        return;


        //send udpated todo
    }



    return {createToDo, clear}
})();

// console.log(`deleteButton ${deleteButton}`);

class ToDoDTO{
    constructor(name, status, index){
        this.status = status;
        this.name = name;
        this.index = index;
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


