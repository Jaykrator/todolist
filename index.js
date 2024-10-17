// Get the input box, button, and task list container
const inputBox = document.getElementById("input-box");
const inputButton = document.getElementById("input-button");
const taskList = document.getElementById("task-list");

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add(
      "task",
      "flex",
      "justify-between",
      "items-center",
      "mt-3",
      "border",
      "rounded-md",
      "px-2",
      "py-2",
      "w-full"
    );

    const taskContent = document.createElement("div");
    taskContent.classList.add(
      "w-full",
      "flex",
      "justify-between",
      "items-center"
    );

    const checkbox = document.createElement("i");
    checkbox.classList.add("far", "fa-check-circle");
    checkbox.onclick = () => {
      task.completed = !task.completed;
      renderTasks();
    };

    const taskText = document.createElement("p");
    taskText.classList.add("capitalize");
    taskText.textContent = task.text;
    if (task.completed) {
      taskText.style.textDecoration = "line-through";
    }

    const editButton = document.createElement("i");
    editButton.classList.add("far", "fa-edit");
    editButton.onclick = () => {
      const newText = prompt("Enter new task text:", task.text);
      if (newText) {
        tasks[index].text = newText;
        renderTasks();
      }
    };

    const deleteButton = document.createElement("i");
    deleteButton.classList.add("far", "fa-times-circle");
    deleteButton.onclick = () => {
      tasks.splice(index, 1);
      renderTasks();
    };

    taskContent.appendChild(checkbox);
    taskContent.appendChild(taskText);

    const buttons = document.createElement("div");
    buttons.classList.add("flex", "gap-2");
    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);

    taskContent.appendChild(buttons);
    taskElement.appendChild(taskContent);
    taskList.appendChild(taskElement);
  });
}

// Add event listener to the input button
inputButton.addEventListener("click", () => {
  const taskText = inputBox.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    inputBox.value = "";
    renderTasks();
  }
});

// Initialize the task list
renderTasks();
