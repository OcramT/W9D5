const TODO = [];
const TODOLIST = document.querySelector(".todos");
const TODOFORM = document.querySelector(".add-todo-form"); 

const addTodo = (e) => {
  e.preventDefault();
  const todoInput = document.querySelector("input[name='add-todo']");
  const todoVal = todoInput.value;
  todoInput.value = "";
  const todo = {
    todoVal,
    done: false 
  };
  TODO.push(todo);
  populateList(TODO, TODOLIST);
}

const populateList = (todoArr, todoList) => {
  todoArr.map(todo => {
    const label = document.createElement("label");
    label.htmlFor = `${todo.todoVal}`;
    label.innerHTML = `${todo.todoVal}`;
    const inputCheck = document.createElement("input");
    inputCheck.setAttribute("type", "checkbox");
    inputCheck.setAttribute("id", `${todo.todoVal}`);
    label.appendChild(inputCheck);
    const li = document.createElement("li");
    li.appendChild(label);
    todoList.appendChild(li);
  })
}

TODOFORM.addEventListener("submit", addTodo);
