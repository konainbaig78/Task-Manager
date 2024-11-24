// Function to add a task
const addText = () => {
  const taskText = text.value.trim(); // Get input value and trim whitespace

  // Validate input
  if (!taskText) {
    // alert("Please enter a task");
    Swal.fire("please enter a task!");
    return;
  }

  // Create task elements
  const task = document.createElement("div");
  task.classList.add("task");

  const checkBox = document.createElement("input");
  checkBox.classList.add("checkBox");
  checkBox.type = "checkbox";

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("dlt");
  deleteButton.textContent = "dlt";

  // Append elements to task
  task.appendChild(checkBox);
  task.appendChild(taskLabel);
  task.appendChild(deleteButton);

  // Append task to the task manager
  taskManager.appendChild(task);

  // Clear input field after adding task
  text.value = "";

  // Event listener for deleting task
  deleteButton.addEventListener("click", () => {
    taskManager.removeChild(task);
  });

  // Event listener for marking task as done
  checkBox.addEventListener("change", () => {
    task.classList.toggle("done");
  });
};

// Add event listener to the button
addBtn.addEventListener("click", addText);

// Optional: Add functionality to allow pressing Enter to add a task
text.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addText();
  }
});
