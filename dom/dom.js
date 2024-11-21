const buttonAgregar = document.querySelector("#buttonAgregar");
const input = document.querySelector("#inputId");
const listContainer = document.querySelector("#todoListContainer");
const divRemainingTask = document.querySelector("#remainingTask");

let maxTask = 5;

function CheckValidations(){
    const todoNodeLists = document.querySelectorAll(".data-todo");
    const todoArrLists = [...todoNodeLists]; //Iterar o iteracion
    return todoArrLists.length < 5 ? true : false;
}

function CheckDisabledButton(){
    
    let remainingTask = 5;
    const todoNodeLists = document.querySelectorAll(".data-todo");
    const todoArrLists = [...todoNodeLists]; //iteracion
    
    remainingTask = maxTask - todoArrLists.length;
    divRemainingTask.innerHTML = remainingTask;

    if(todoArrLists.length == maxTask){
        alert("Ya no se aceptan mas tareas");
        buttonAgregar.setAttribute("disabled", true);
        input.setAttribute("disabled", true);
    } else if(todoArrLists.length < 5){
        buttonAgregar.removeAttribute("disabled");
        input.removeAttribute("disabled", true);
    }
}

buttonAgregar.addEventListener('click', ()=>{

    if(CheckValidations()){

            
const valueInput = input.value;
input.value = '';

const listItem = document.createElement("li");
listItem.setAttribute("class", "data-todo");
const listLabel = document.createElement("span");

const listDeleteButton = document.createElement("button");
listDeleteButton.textContent = "X";
listDeleteButton.setAttribute("class", "btn btn-xs btn-danger mx-2")

listItem.appendChild(listLabel);
listLabel.textContent = valueInput;
listItem.appendChild(listDeleteButton);
listContainer.appendChild(listItem);

CheckDisabledButton();   


listDeleteButton.addEventListener("click", ()=>{
    listContainer.removeChild(listItem);
    CheckDisabledButton();
})

    }else{
        alert("Ya no se pueden agregar mas registros");
    }


})
