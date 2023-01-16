"use strict";
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
