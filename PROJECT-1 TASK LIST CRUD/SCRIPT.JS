let tasks = [];

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let editIndex = -1;

addBtn.addEventListener("click", function () {

  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task");
    return;
  }

  if (editIndex === -1) {
    
    tasks.push(taskValue);
  } else {
    
    tasks[editIndex] = taskValue;
    editIndex = -1;
    addBtn.innerText = "Add Task";
  }

  taskInput.value = "";
  displayTasks();
});

function displayTasks() {

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {

    let li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>

      <div class="action-btns">
        <button class="edit" onclick="editTask(${index})">
          Edit
        </button>

        <button class="delete" onclick="deleteTask(${index})">
          Delete
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

function editTask(index) {
  taskInput.value = tasks[index];
  editIndex = index;

  addBtn.innerText = "Update Task";
}

function deleteTask(index) {

  tasks.splice(index, 1);
  displayTasks();
}