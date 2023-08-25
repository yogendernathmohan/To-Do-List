document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-task");

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            taskInput.value = "";
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    addTaskButton.addEventListener("click", addTask);

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-task")) {
            deleteTask(event.target.parentElement);
        }
    });
});
