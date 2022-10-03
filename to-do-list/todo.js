const toDoForm = document.querySelector(".todo-title__form");
const toDoList = document.querySelector(".todo-list");

const list = [];

let id = 0;

const item = {
  id: 0,
  toDo: "",
};

function addItem(event) {
  event.preventDefault();
  id++;
  item.id = id;
  item.toDo = event.target[0].value;
  list.push(item);
  showList();
}

function deleteItem(event) {
  console.log(event);
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
      <li>
        <span>${list[i].toDo}</span>
        <button onclick="deleteItem()">DELETE</button>
      </li>
    `);
  }

  template = template.replace("{{__toDo_list__}}", newList.join(""));

  toDoList.innerHTML = template;
}

toDoForm.addEventListener("submit", addItem);
