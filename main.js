"use strict";
const todoList = [];

let inputForm, todoMain, todoButton, tabButton, sortMenu;
let displayTarget = "indox";
let sortIndex = "created-desc";

const registerDOM = () => {
  inputForm = document.getElementById("inputForm");
  todoMain = document.getElementById("todoMain");
  todoButton = document.getElementById("todoButton");
  sortMenu = document.getElementById("sortMenu");
};

const initialize = () => {
  registerDOM();
  bindEvent();
};

document.addEventListener("DOMContentLoaded", initialize.bind(this));

const bindEvent = () => {
  inputForm.addEventListener("submit", () => {
    hanndleSubmit();
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const todoObj = {
    text: inputForm["inputText"].value,
  };
  addTodo(todoObj);
};

const addTodo = (todoObj) => {
  todoObj.id = "todo-" + (todoList.length + 1);
  todoObj.createdAt = new Date().toLocaleString();
  todoObj.priority = 3;
  todoObj.isDone = false;
  todoObj.isEdit = false;
  todoList.unshift(todoObj);
  updateTodoList();
  clearInputForm();
};

const updateTodoList = () => {
  let htmlStrings = "";
  todoList.forEach((todo) => {
    htmlStrings += createTodoHtmlString(todo);
    todoMain.innerHTML = htmlStrings;
  });
  taskMain.innerHTML = htmlStrings;
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
    todoTextCell = `<td class="cell-text"><input class="input-edit" type="text" value=${todo.text}/></td>`;
    priorityCell = `<td class="cell-priority"><input class="input-priority" type="number" value=${todo.priority}/></td>`;
  } else {
    todoTextCell = `<td class="cell-text">${todo.text}</td>`;
    priorityCell = `<td class="cell-priorityCell">${todo.priority}</td>`;
  }
  htmlString += `<tr id="${todo.id}">`;
  htmlString += `<td class="cell-edit-button">
            <button date-type="${editType}"> ${editButtonLabel}</button>
        </td>`;
  htmlString += todoTextCell;
  htmlString += `<td class="cell-created-at">${todo.createdAt}</td>`;
  htmlString += priorityCell;
  htmlString += `<td class="cell-done"></td>`;
  htmlString += `<button data-type="${doneType}"></button>`;
  htmlString += doneButtonLabel;
  htmlString += "</button></td>";
  htmlString += "</tr>";
  return htmlString;
};
