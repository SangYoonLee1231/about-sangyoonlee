const toDoForm = document.querySelector(".todo-title__form");
const toDoList = document.querySelector(".todo-list");

const list = [];

let id = 0;

function addItem(event) {
  const newItem = {
    id: 0,
    toDo: "",
  };

  event.preventDefault();
  id++;
  newItem.id = id;
  newItem.toDo = event.target[0].value;
  list.push(newItem);
  showList();
}

function deleteItem(event) {
  const targetId = Number(event.target.parentElement.id);

  for (let i = 0; i < list.length; i++) {
    if (list[i].id === targetId) {
      list.splice(i, 1);
    }
  }

  showList();
}

function showList() {
  let template = `
    <ul>
      {{__toDo_list__}}
    </ul>
  `;

  let newList = [];

  for (let i = 0; i < list.length; i++) {
    newList.push(`
      <li id="${list[i].id}">
        <span>${list[i].toDo}</span>
        <button onclick="deleteItem(event)">DELETE</button>
      </li>
    `);
  }

  template = template.replace("{{__toDo_list__}}", newList.join(""));

  toDoList.innerHTML = template;
}

toDoForm.addEventListener("submit", addItem);
