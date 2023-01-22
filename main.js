"use strict";

const todoList = [];
const defaultValue = {
  id: "",
  text: "",
  createdAt: "",
  priority: "3",
  todoObj: false,
  isDone: false,
};

let inputForm, todoMain, todoButton, tabButton, sortMenu;
let displayTarget = "inbox";
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
  inputForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const alreadyExistsTodo = todoList.map((todo) => {
    return todo.text;
  });

  if (alreadyExistsTodo.includes(inputForm.inputText.value)) {
    alert("同じタスクは登録できません。");
    inputForm.inputText.value = "";
    return;
  }
  
  const payload = {
    ...defaultValue,
    text: inputForm.inputText.value,
  };
  inputForm.inputText.value = "";
  addTodo(payload);
};

const addTodo = (payload) => {
  const prevPayload = { ...payload };
  prevPayload.id = "todo-" + (todoList.length + 1);
  prevPayload.createdAt = new Date().toLocaleString();
  todoList.push(prevPayload);
  updateTodoList(prevPayload);
};

const updateTodoList = (prevPayload) => {
  //引数からタスクとして登録するDOMを生成する
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "checkbox");
  const taskText = prevPayload.text;
  const createdAt = prevPayload.createdAt;
  const priority = prevPayload.priority;
  const doneButton = document.createElement("button");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  doneButton.innerHTML = "完了";
  editButton.innerHTML = "編集";
  deleteButton.innerHTML = "削除";

  const tdInput = document.createElement("td");
  const tdTaskText = document.createElement("td");
  const tdCreatedAt = document.createElement("td");
  const tdPriority = document.createElement("td");
  const tdDoneButton = document.createElement("td");
  const tdEditButton = document.createElement("td");
  const tdDeleteButton = document.createElement("td");

  tdInput.appendChild(inputElement);
  tdTaskText.innerHTML = taskText;
  tdCreatedAt.innerHTML = createdAt;
  tdPriority.innerHTML = priority;
  tdDoneButton.appendChild(doneButton);
  tdEditButton.appendChild(editButton);
  tdDeleteButton.appendChild(deleteButton);

  const trElement = document.createElement("tr");
  const fragment = document.createDocumentFragment();
  fragment.appendChild(tdInput);
  fragment.appendChild(tdTaskText);
  fragment.appendChild(tdCreatedAt);
  fragment.appendChild(tdPriority);
  fragment.appendChild(tdDoneButton);
  fragment.appendChild(tdEditButton);
  fragment.appendChild(tdDeleteButton);
  trElement.appendChild(fragment);
  todoMain.appendChild(trElement);
};

// const createTodoHtmlString = (todo) => {
//   let htmlString = "";
//   const editType = todo.isEdit ? "editFixed" : "edit";
//   const editButtonLabel = todo.isEdit ? "編集完了" : "編集";
//   const doneType = todo.isDone ? "inbox" : "done";
//   const doneButtonLabel = todo.isEdit ? "完了" : "未完了";
//   let todoTextCell = "";
//   let priorityCell = "";
//   if (todo.isEdit) {
//     todoTextCell = `<td class="cell-text"><input class="input-edit" type="text" value=${todo.text}/></td>`;
//     priorityCell = `<td class="cell-priority"><input class="input-priority" type="number" value=${todo.priority}/></td>`;
//   } else {
//     todoTextCell = `<td class="cell-text">${todo.text}</td>`;
//     priorityCell = `<td class="cell-priorityCell">${todo.priority}</td>`;
//   }
//   htmlString += `<tr id="${todo.id}">`;
//   htmlString += `<td class="cell-edit-button">
//             <button date-type="${editType}"> ${editButtonLabel}</button>
//         </td>`;
//   htmlString += todoTextCell;
//   htmlString += `<td class="cell-created-at">${todo.createdAt}</td>`;
//   htmlString += priorityCell;
//   htmlString += `<td class="cell-done"></td>`;
//   htmlString += `<button data-type="${doneType}"></button>`;
//   htmlString += doneButtonLabel;
//   htmlString += "</button></td>";
//   htmlString += "</tr>";
//   return htmlString;
// };
