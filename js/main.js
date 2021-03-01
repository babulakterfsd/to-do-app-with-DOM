'use strict';

let allTask = [];
let completedTask = [];
let task;

document.getElementById('task').addEventListener('keyup', e => {
    task = e.target.value.trim();
})


document.getElementById('form').addEventListener('submit', e=>{
    e.preventDefault();
    createIncompleteTaskList();
    allTask.push(task);
    e.target.reset();
})


function createIncompleteTaskList(){
    const ul = document.getElementById(`incomplete-task`);
    ul.style.listStyleType = 'none';
    ul.innerHTML += `<li><input style="margin-right:5px;" type='checkbox' />${task}</li>`;
}




const ul = document.getElementById(`incomplete-task`);
ul.addEventListener('click', e => {
    if(e.target.type === 'checkbox'){
        completedTask.push(e.target.parentElement.innerText);
    }
})


function submitCompletedTask() {
    if(completedTask.length !== 0){
        document.getElementById(`incomplete-task`).innerHTML = '';
        
        const filteredTask = allTask.filter(alt => !completedTask.includes(alt));

        filteredTask.forEach(v => {
            createIncompleteTaskList(v);
        });
        setCompletedTask(completedTask);
        allTask = filteredTask;
        completedTask = [];
    } 
}


function setCompletedTask(task){
    const ul = document.getElementById("completed-task-list");
    ul.style.listStyleType = "none";
    task.forEach(v => {
        ul.innerHTML+= `<li>${v}</li>`
    });
}

function clearAll() {
    const ul = document.getElementById("completed-task-list");
    ul.innerHTML = ``;
}