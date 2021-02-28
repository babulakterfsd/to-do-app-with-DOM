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

let text;
let inputvalue = document.getElementById(`task`);
inputvalue.addEventListener(`change`, function(e) {
        text = e.target.value
})

let form = document.getElementById(`form`);
form.addEventListener(`submit`,function(e) {
    e.preventDefault();
    createFormCheck();
    this.reset();
})

function createFormCheck() {
    let formCheckDiv = document.createElement(`div`);
    formCheckDiv.className = `form-check`;

    let checkBox = document.createElement(`input`);
    checkBox.type = `checkbox`;
    checkBox.className = `form-check-input`;

    let label = document.createElement(`label`);
    label.className = `form-check-label`;
    label.innerText = text;

    formCheckDiv.appendChild(checkBox);
    formCheckDiv.appendChild(label);

    let parent = document.getElementById(`incomplete-task`);
    parent.appendChild(formCheckDiv)
}

