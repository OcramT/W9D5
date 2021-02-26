const TODO = JSON.parse(localStorage.getItem('TODO')) || [];
// debugger
const TODOLIST = document.querySelector(".todos");
const TODOFORM = document.querySelector(".add-todo-form"); 

const addTodo = (e) => {
  // debugger
  e.preventDefault();
  const todoInput = document.querySelector("input[name='add-todo']");
  const todoVal = todoInput.value;
  todoInput.value = "";
  const todo = {
    todoVal,
    done: false 
  };
  TODO.push(todo);
  populateList();
  localStorage.setItem('TODO', JSON.stringify(TODO));
  e.currentTarget.reset();
  // debugger
}

const populateList = () => {
  // debugger
  TODOLIST.innerHTML = "";
  TODO.map(todo => {
    const label = document.createElement("label");
    label.htmlFor = `${todo.todoVal}`;
    label.innerHTML = `${todo.todoVal}`;
    const inputCheck = document.createElement("input");
    inputCheck.setAttribute("type", "checkbox");
    inputCheck.setAttribute("id", `${todo.todoVal}`);
    label.appendChild(inputCheck);
    const li = document.createElement("li");
    li.appendChild(label);
    TODOLIST.appendChild(li);
  })
}

const persistCheck = () => {
  const checkbox = 
  checked = "checked"
}

TODOFORM.addEventListener("submit", addTodo);
TODOLIST.addEventListener("click", persistCheck)