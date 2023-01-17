"use strict";
// ここに登録したタスクの情報を保存する
const todoList = {};

//DOMの取得
const inputForm = document.getElementById("inputForm");
const inputText = document.getElementById("inputText");
const taskBody = document.getElementById("taskBody");
const changeButton = document.getElementById("changeButton");
const sortList = document.getElementById("sortList");

inputForm.addEventListener("submit", () => {
    handleSubmit();
});

const handleSubmit = () => {
    const todoObj = {
        text: inputForm["input-text"].value,
    };
    addtodo(todoObj);
};

const addTodo = () =>{
    
}
document.getElementById("inputButton").addEventListener("click", () => {
    const taskText = document.getElementById("inputText").value;
    console.log(taskText);
    const taskRecord = document.createElement("tr");
    const checkBoxNode = document.createElement("td");
    const textNode = document.createElement("td");
    const inputDay = document.createElement("td");
    const priority = document.createElement("td");
    const doneButton = document.createElement("td");
    const editButton = document.createElement("td");
    const deleteButton = document.createElement("td");
    textNode.innerHTML = taskText;
    taskRecord.appendChild(textNode);
});
