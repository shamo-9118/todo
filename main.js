"use strict";
// ここに登録したタスクの情報を保存する
const todoList = [];

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

const addTodo = (todoObj) => {
    todoObj.id = "todo-" + (todoList.length + 1);
    todoObj.createdAt = new Date().toLocaleString();
    todoObj.priority = 3;
    todoObj.isDone = false;
    todoObj.isEdit = false;
    todoList.unshift;
    updateTodoList();
    clearInputForm();
};

const updateTodoList = () => {
    let htmlStrings = "";
    todoList.forEach((todo) => {
        htmlStrings += createTodoHtmlString(todo);
        taskBody.innerHTML = htmlStrings;
    });
    taskBody.innerHTML = htmlStrings;
};

const createTodoHtmlString = (todo) => {
    let htmlString = "";
    const editType = todo.isEdit ? "editFixed" : "edit";
    const editButtonLabel = todo.isEdit ? "編集完了" : "編集";
    const doneType = todo.isDone ? "inbox" : "done";
    const doneButtonLabel = todo.isEdit ? "完了" : "未完了";
    let todoTextCell = "";
    let priorityCell = "";
    if (todo.isEdit) {
        todotextCell =
            '<td class="cell-text"><input class="input-edit" type="text" value=' +
            todo.text +
            "/></td>";
        priorityCell =
            '<td class="cell-priority"><input class="input-priority" type="number" value=' +
            todo.priority +
            "/></td>";
    } else {
        todoTextCell = '<td class="cell-text">' + todo.text + "</td>";
        priorityCell =
            '<td class="cell-priorityCell">' + todo.priority + "</td>";
    }
    htmlString += '<tr id="' + todo.id + '">';
    htmlString += `<td class="cell-edit-button">
            <button date-type="${editType}"> ${editButtonLabel}</button>
        </td>`;
    htmlString += todoTextCell;
    htmlString += `<td class="cell-created-at">${todo.createdAt}</td>`;
    htmlString += priorityCell;
    htmlString += `<button data-type="${doneType}"></button>`;
    htmlString += doneButtonLabel;
    htmlString += "</button></td>";
    htmlString += "</tr>";
    return htmlString;
};