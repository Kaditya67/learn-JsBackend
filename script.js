document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
        todoList.innerHTML = "";

        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.className = "task-checkbox";
            checkbox.addEventListener("change", () => toggleTaskCompletion(index));

            const taskParagraph = document.createElement("p");
            taskParagraph.textContent = task.text;
            if (task.completed) {
                taskParagraph.style.textDecoration = "line-through";
                taskParagraph.style.color = "gray";
            }

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-btn";
            removeBtn.addEventListener("click", () => removeTask(index));

            listItem.appendChild(checkbox);
            listItem.appendChild(taskParagraph);
            listItem.appendChild(removeBtn);

            todoList.appendChild(listItem);
        });
    }

    function addTask() {
        const taskText = todoInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const newTask = {
            text: taskText,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();

        todoInput.value = "";
        renderTasks();
    }

    function removeTask(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    function toggleTaskCompletion(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    addTaskBtn.addEventListener("click", addTask);
    todoInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    renderTasks();
});
