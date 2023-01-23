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
  const alreadyExistsTodo = todoList.find((todo) => {
    return todo.text === inputForm.taskText.value;
  });

  if (alreadyExistsTodo) {
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
  prevPayload.id = "todo-" + ([...todoList].length + 1);
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
  doneButton.addEventListener("click", () => doneTask(prevPayload.id));
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
  trElement.setAttribute("id", prevPayload.id);
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

const doneTask = (id) => {
  const target = document.getElementById(id);
  todoMain.removeChild(target);
};
