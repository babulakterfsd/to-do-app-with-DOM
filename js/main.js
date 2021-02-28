'use strict';
/*
let text;
let incompleteLiInnertext;
let inputValue = document.getElementById(`task`);
inputValue.addEventListener(`change`, function(e) {
    text = e.target.value;
})

let parent = document.getElementById(`incomplete-task-list`);

parent.addEventListener(`click`, function(e) {
    if(this.contains(e.target)) {
        incompleteLiInnertext = e.target.innerText;
        e.target.remove();
        createCompletedLi()
    }
})

function createCompletedLi() {
    let parent = document.getElementById(`completed-task-list`)
    let completedLi = document.createElement(`li`);
    completedLi.innerText = incompleteLiInnertext;
    completedLi.className = `completedLi`
    parent.appendChild(completedLi)
}

function createLi() {
    let parent = document.getElementById(`incomplete-task-list`)
    let li = document.createElement(`li`);
    li.className = `incompleteli`
    li.innerText = text;
    parent.appendChild(li);
}

let form = document.getElementById(`form`);
form.addEventListener(`submit`, function(e) {
    e.preventDefault();
    createLi();
    this.reset()
}) */

// let text;
// let inputvalue = document.getElementById(`task`);
// inputvalue.addEventListener(`change`, function(e) {
//         text = e.target.value
// })

// let form = document.getElementById(`form`);
// form.addEventListener(`submit`,function(e) {
//     e.preventDefault();
//     createFormCheck();
//     this.reset();
// })

// function createFormCheck() {
//     let formCheckDiv = document.createElement(`div`);
//     formCheckDiv.className = `form-check`;

//     let checkBox = document.createElement(`input`);
//     checkBox.type = `checkbox`;
//     checkBox.className = `form-check-input`;

//     let label = document.createElement(`label`);
//     label.className = `form-check-label`;
//     label.innerText = text;

//     formCheckDiv.appendChild(checkBox);
//     formCheckDiv.appendChild(label);

//     let parent = document.getElementById(`incomplete-task`);
//     parent.appendChild(formCheckDiv)
// }






let allTask = [];
let completedTask = [];
let task;


document.getElementById('task').addEventListener('keyup', e => {
    task = e.target.value.trim();
})


document.getElementById('form').addEventListener('submit', e=>{
    e.preventDefault();
    createIncompleteTaskList(task);
    allTask.push(task);
    e.target.reset();
})


function createIncompleteTaskList(task){
    const ul = document.getElementById(`incomplete-task`);
    ul.style.listStyleType = 'none';
    ul.innerHTML += `<li><input style="margin-right:5px;" type='checkbox' />${task}</li>`;
}




const ul = document.getElementById(`incomplete-task`);
ul.addEventListener('click', e => {
    if(e.target.type === 'checkbox'){
        completedTask.push(e.target.parentElement.innerText.trim());
    }
})





function submitCompletedTask() {
    console.log(completedTask)
    console.log(allTask)
    if(completedTask.length !== 0){
        document.getElementById(`incomplete-task`).innerHTML = '';
        
        const filteredTask = allTask.filter(alt => !completedTask.includes(alt));

        console.log(filteredTask);

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

