const fs = require('fs');
const filePath = "./todo.json";

const command = process.argv[2];

switch(command){
    case "add":
        addTodo();
        break;
    case "list":
        listTodos();
        break;
    case "remove":
        removeTodo();
        break;
    default:
        console.log("Command not found");
        break;
}

function ensureFileExists() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({})); // Initialize with an empty object
        console.log("File created: " + filePath);
    }
}

function addTodo() {
    ensureFileExists();
    const todo = process.argv[3];
    if (!todo) {
        console.log("Please provide a todo to add.");
        return;
    }
    const data = fs.readFileSync(filePath, 'utf8');
    // console.log(data)
    const todos = JSON.parse(data);
    // console.log(todos)

    const id = Date.now().toString(); // Use timestamp as unique key
    todos[id] = todo;

    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2)); // Save with indentation for readability
    console.log(`Todo added with ID: ${id}`);
}

function listTodos() {
    ensureFileExists();
    const data = fs.readFileSync(filePath, 'utf8');
    const todos = JSON.parse(data);

    const keys = Object.keys(todos);
    if (keys.length === 0) {
        console.log("No todos found.");
    } else {
        console.log("Your Todos:");
        keys.forEach((key, index) => {
            console.log(`${index + 1}. [ID: ${key}] ${todos[key]}`);
        });
    }
}

function removeTodo() {
    ensureFileExists();
    const id = process.argv[3];
    if (!id) {
        console.log("Please provide the ID of the todo to remove.");
        return;
    }
    const data = fs.readFileSync(filePath, 'utf8');
    const todos = JSON.parse(data);

    if (!todos[id]) {
        console.log("Invalid ID. Todo not found.");
        return;
    }

    delete todos[id];
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2)); // Save updated todos
    console.log(`Todo with ID: ${id} removed`);
}
