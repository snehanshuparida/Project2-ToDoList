document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.className = "task-item";

  const taskNumber = document.createElement("span");
  taskNumber.className = "task-number";
  taskNumber.textContent = `${taskList.children.length + 1}.`;

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  taskContent.className = "task-text";
  taskContent.addEventListener("click", () => {
    taskContent.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✖";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", () => {
    li.remove();
    updateTaskNumbers();
  });

  li.appendChild(taskNumber);
  li.appendChild(taskContent);
  li.appendChild(removeBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}

function updateTaskNumbers() {
  const taskItems = document.querySelectorAll("#taskList .task-item");
  taskItems.forEach((item, index) => {
    const number = item.querySelector(".task-number");
    number.textContent = `${index + 1}.`;
  });
}
