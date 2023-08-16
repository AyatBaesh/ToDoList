import { todos } from "./index.js";
const toDoDiv = document.querySelector('.toDos');
export const DOMModule = (() =>{
    
    function clear(){
        while(toDoDiv.firstChild){
            toDoDiv.removeChild(toDoDiv.firstChild);
        }
    }

    function createToDoElements(todos){
        clear();
        todos.forEach((toDo) =>{
            createToDoContainer(toDo);
        });
        // let jsonToDos = JSON.stringify(todos);
        // console.log(`jsonToDos: ${jsonToDos}, type: ${typeof(jsonToDos)}`)
        // let jsonNewToDo = JSON.stringify(toDo);
        // console.log(`jsonNewToDo: ${jsonNewToDo}, type: ${typeof(jsonNewToDo)}`);
        //send toDo to the server 

    }
    
    function createToDoContainer(toDo){

            const toDoContainer = document.createElement('div');
            toDoContainer.classList.add('toDo');
            if(toDo.getStatus()){
                toDoContainer.classList.add('done');
            }else{
                toDoContainer.classList.add('undone');
            }
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
        // let jsonDeletedToDo = JSON.stringify(deletedToDo);
        // console.log(`jsonDeletedToDo: ${jsonDeletedToDo}, type: ${typeof(jsonDeletedToDo)}`);

   
       todos.splice(todos.indexOf(deletedToDo, 0), 1);
       createToDoElements(todos);
        return;
    }
 
    function updateToDo(updatedToDo, toDoContainer){
        // let jsonUpdatedToDo = JSON.stringify(updatedToDo);
        // console.log(`jsonUpdatedToDo: ${jsonUpdatedToDo}, type: ${typeof(jsonUpdatedToDo)}`);
        //send udpated todo

        if(toDoContainer.classList.contains('done')){
            toDoContainer.classList.replace('done', 'undone');

        }else if(toDoContainer.classList.contains('undone')){
            toDoContainer.classList.replace('undone', 'done');

        }
        updatedToDo.changeStatus();
        return;

    }



    return {createToDoElements}
})();