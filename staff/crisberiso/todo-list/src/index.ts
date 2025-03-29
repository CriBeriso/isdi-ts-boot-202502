const input = document.getElementById("todo-text")! as HTMLInputElement; //definimos que no es null y el tipo de elemento html que es. Ahora si podemos acceder al valor del input.
const form = document.querySelector(".todo-form")! as HTMLFormElement;
const ul = document.querySelector(".todo-list")! as HTMLUListElement;

type Todo = {
  text: string;
  isCompleted: boolean;
}

const todos: Todo[] = getTodos();

todos.forEach(renderTodo);

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const { value: todoText } = input;

  try {
    const todo = createTodo(todoText);

    //TODO separar capas de responsabilidad. 
    todos.push(todo);

    saveTodos();

    form.reset();

    renderTodo(todo);
  } catch (error) {
    alert((error as Error).message);
    console.error((error as Error).message);
  }
  
});

function createTodo(text: string): Todo {
  if (!text) throw new Error('Input text is empty!');
  return {
    text,
    isCompleted: false, //aquí es donde se llama a la funcion randomizadora de id
  };
}

function renderTodo(todo: Todo) {
  const li = document.createElement("li");
  li.textContent = todo.text;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.isCompleted; 

  checkbox.addEventListener("change", () => {
    todo.isCompleted = checkbox.checked;

    saveTodos();
  })
  
  li.appendChild(checkbox);
  ul.appendChild(li);
}

function saveTodos():void {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(): Todo[] {
  return JSON.parse(localStorage.getItem("todos") || "[]")
}