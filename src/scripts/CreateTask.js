export default function CreateTask(task, status = false, index){
    const item = document.createElement("label");
    item.classList.add("todo__item");
    
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.checked = (status) ? true : false;
    inputCheckBox.dataset.index = index;

    const divContents = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = task;
    divContents.appendChild(text);

    const inputDelete = document.createElement("input");
    inputDelete.value = "X";
    inputDelete.type = "button";
    inputDelete.dataset.index = index;

    item.appendChild(inputCheckBox);
    item.appendChild(divContents);
    item.appendChild(inputDelete);

    document.querySelector("#todoList").appendChild(item);
}