// Wait for the DOM to fully load before executing JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Get references to DOM elements
  const addButton = document.getElementById("add-task-btn"); // The "Add Task" button
  const taskInput = document.getElementById("task-input"); // The input field for task entry
  const taskList = document.getElementById("task-list"); // The <ul> where tasks will be listed

  // Function to add a new task
  function addTask() {
    // Get the value of the input field and remove any leading/trailing spaces
    const taskText = taskInput.value.trim();

    // If input is empty, show an alert
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new <li> element for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create a "Remove" button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add an event listener to the remove button to delete the task
    removeButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    // Append the remove button to the task item
    taskItem.appendChild(removeButton);

    // Add the new task to the list of tasks
    taskList.appendChild(taskItem);

    // Clear the input field for the next task
    taskInput.value = "";
  }

  // Add event listener for button click
  addButton.addEventListener("click", addTask);

  // Add event listener for "Enter" key press in the input field
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(); // Add task when "Enter" is pressed
    }
  });
});
