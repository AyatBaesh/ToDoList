import { DOMModule } from "./DOMModule.js";
import { ToDoDTO } from "./toDoClass.js";
// import { checkName } from "./toDoFunctions.js";
const addButton = document.getElementById('addButton');
const toDoInput = document.getElementById('toDoInput');
export let todos = [];



// async function getData(){
//     let dataArr = await fetch(/*fetch data */);
//     todos = dataArr.json();
//     renderToDos(todos);
// }
addButton.addEventListener('click', (event) => {
    
    if(toDoInput.value){
        // if(checkName(toDoInput.value, todos)){
        //     alert('You already have this task!');
        //     return;
        // }
        let index = todos.length
        todos.push(new ToDoDTO(toDoInput.value, false, index));
        toDoInput.value = '';
        DOMModule.createToDoElements(todos);
        /*createToDoElements(todos){
            todos.forEach()
        }*/
    }
});
