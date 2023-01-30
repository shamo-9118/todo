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

document.addEventListener("DOMContentLoaded", initialize);

const bindEvent = () => {
  inputForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const inputText = inputForm.inputText.value.trim();
  if (inputText === "") {
    alert("空白のみの登録はできません。");
    inputForm.inputText.value = "";
    return;
  }
  const alreadyExistsTodo = todoList.find((todo) => {
    return todo.text === inputText;
  });
  if (alreadyExistsTodo) {
    alert("同じタスクは登録できません。");
    inputForm.inputText.value = "";
    return;
  }

  const payload = {
    ...defaultValue,
    text: inputText,
  };
  inputForm.inputText.value = "";
  addTodo(payload);
};

const addTodo = (payload) => {
  const prevPayload = { ...payload };
  prevPayload.id = `todo-${todoList.length + 1}`;
  prevPayload.createdAt = new Date().toLocaleString();
  todoList.push(prevPayload);
  updateTodoList(prevPayload);
};

//文字列でタスクを登録できるようにする！
const updateTodoList = (prevPayload) => {
  //引数からタスクとして登録するDOMを生成する
  const inputElement = createElement("input");
  inputElement.setAttribute("type", "checkbox");
  const taskText = prevPayload.text;
  const createdAt = prevPayload.createdAt;
  const priority = prevPayload.priority;
  const doneButton = createElement("button");
  const editButton = createElement("button");
  const deleteButton = createElement("button");
  doneButton.addEventListener("click", () => doneTask(prevPayload.id));
  doneButton.innerHTML = "完了";
  editButton.innerHTML = "編集";
  deleteButton.innerHTML = "削除";

  const tdInput = createElement("td");
  const tdTaskText = createElement("td");
  const tdCreatedAt = createElement("td");
  const tdPriority = createElement("td");
  const tdDoneButton = createElement("td");
  const tdEditButton = createElement("td");
  const tdDeleteButton = createElement("td");

  tdInput.appendChild(inputElement);
  tdTaskText.innerHTML = taskText;
  tdCreatedAt.innerHTML = createdAt;
  tdPriority.innerHTML = priority;
  tdDoneButton.appendChild(doneButton);
  tdEditButton.appendChild(editButton);
  tdDeleteButton.appendChild(deleteButton);

  const trElement = createElement("tr");
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

const createElement = (tag) => {
  return document.createElement(tag);
};

const doneTask = (id) => {
  const target = document.getElementById(id);
  todoMain.removeChild(target);
};
