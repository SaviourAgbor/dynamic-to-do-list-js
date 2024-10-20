document.addEventListener("DOMContentLoaded", () => {
  // Get references to DOM elements
  const addButton = document.getElementById("add-task-btn"); // The "Add Task" button
  const taskInput = document.getElementById("task-input"); // The input field for task entry
  const taskList = document.getElementById("task-list"); // The <ul> where tasks will be listed

  // Initialize the task array from localStorage, or an empty array if no tasks are found
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Function to save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to add a new task to the list and localStorage
  function addTask(taskText) {
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
      // Remove the task from the tasks array
      tasks = tasks.filter((task) => task !== taskText);
      saveTasks(); // Update localStorage after removing the task
    });

    // Append the remove button to the task item
    taskItem.appendChild(removeButton);

    // Add the new task to the list of tasks
    taskList.appendChild(taskItem);
  }

  // Function to handle the addition of tasks and saving them to localStorage
  function handleAddTask() {
    // Get the value of the input field and remove any leading/trailing spaces
    const taskText = taskInput.value.trim();

    // If input is empty, show an alert
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Add task to the DOM
    addTask(taskText);

    // Add task to the tasks array and save to localStorage
    tasks.push(taskText);
    saveTasks();

    // Clear the input field for the next task
    taskInput.value = "";
  }

  // Add event listener for button click
  addButton.addEventListener("click", handleAddTask);

  // Add event listener for "Enter" key press in the input field
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleAddTask(); // Add task when "Enter" is pressed
    }
  });

  // Function to load tasks from localStorage and display them on the page
  function loadTasks() {
    tasks.forEach((taskText) => {
      addTask(taskText); // Add each task back to the DOM
    });
  }

  // Load tasks when the page loads
  loadTasks();
});
