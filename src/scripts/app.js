'use strict';

import CreateTask from "./CreateTask.js";

const getData = () => JSON.parse(localStorage.getItem("TaskList!")) ?? [];
const setData = (data) => localStorage.setItem("TaskList!", JSON.stringify(data));

const clearTasks = () => {
    const todoList = document.querySelector("#todoList");

    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const insertTask = (event) => {
    const keyPress = event.key;
    const taskText = event.target;
    if (keyPress == "Enter" && taskText.value) {
        const data = getData();
        data.push({ task: taskText.value, status: false });
        setData(data);
        taskText.value = "";
        render();
    }
}

const removeTask = (index) => {
    const data = getData();
    data.splice(index, 1);
    setData(data);
}

const updateTask = (index) => {
    const data = getData();
    data[index].status = !data[index].status;
    setData(data);
}

const clickItem = (event) => {
    const element = event.target;
    const index = element.dataset.index;

    if (element.type === "button") {
        removeTask(index);
    } else if (element.type === "checkbox") {
        updateTask(index);
    }

    render();
}

const render = () => {
    clearTasks();
    const data = getData();
    data.forEach((item, index) => CreateTask(item.task, item.status, index));
}

document.querySelector("#newItem").addEventListener("keypress", insertTask);
document.querySelector("#todoList").addEventListener("click", clickItem);

render();