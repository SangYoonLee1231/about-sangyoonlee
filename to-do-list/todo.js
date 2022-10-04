const toDoForm = document.querySelector(".todo-title__form");
const toDoList = document.querySelector(".todo-list");

const list = [];

let id = 0;

function addItem(event) {
  const newItem = {
    id: 0,
    toDo: "",
  };

  const targetValue = event.target[0].value;

  event.preventDefault();

  if (targetValue !== "") {
    id++;
    newItem.id = id;
    newItem.toDo = targetValue;
    list.push(newItem);
    showList();
  } else {
    alert("할 일을 입력해주세요.");
  }

  event.target[0].value = "";
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
        <button class="delete-btn" onclick="deleteItem(event)">완료</button>
      </li>
    `);
  }

  template = template.replace("{{__toDo_list__}}", newList.join(""));

  toDoList.innerHTML = template;
}

toDoForm.addEventListener("submit", addItem);
