// Get DOM elements
const taskInput = document.getElementById("taskInput");
const taskDeadline = document.getElementById("taskDeadline");
const taskCategory = document.getElementById("taskCategory");
const taskPriority = document.getElementById("taskPriority");
const taskLabel = document.getElementById("taskLabel");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add task function
function addTask() {
    // Get values of additional fields
    const taskText = taskInput.value;

    // Categorize tasks based on priority and importance
    if (taskPriority.value === "high" && taskDeadline.value !== "") {
        var quadrant = document.getElementById("urgent-important");
    } else if (taskPriority.value === "medium" && taskDeadline.value !== "") {
        var quadrant = document.getElementById("important-not-urgent");
    } else if (taskPriority.value === "high" && taskDeadline.value === "") {
        var quadrant = document.getElementById("urgent-not-important");
    } else {
        var quadrant = document.getElementById("not-urgent-not-important");
    }

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <strong>Task:</strong> ${taskText}<br>
        <strong>Deadline:</strong> ${taskDeadline.value}<br>
        <strong>Category:</strong> ${taskCategory.value}<br>
        <strong>Priority:</strong> ${taskPriority.value}<br>
        <strong>Label:</strong> ${taskLabel.value}
        <button class="delete">Delete</button>
    `;

    // Add CSS classes based on priority
    if (taskPriority.value === "high") {
        listItem.classList.add("high-priority");
    } else if (taskPriority.value === "medium") {
        listItem.classList.add("medium-priority");
    } else if (taskPriority.value === "low") {
        listItem.classList.add("low-priority");
    }

    quadrant.appendChild(listItem);

    // Clear input fields
    taskInput.value = "";
    taskDeadline.value = "";
    taskCategory.value = "";
    taskPriority.value = "";
    taskLabel.value = "";

    // Add delete task functionality
    listItem.querySelector(".delete").addEventListener("click", () => {
        quadrant.removeChild(listItem);
    });
}

// Add task when the "Add" button is clicked
addTaskButton.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
