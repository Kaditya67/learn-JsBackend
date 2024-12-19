const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 400, name: 'Aditya' },
    { id: 500, isSuper: true, name: 'admin' }
];

// GET: Route to get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET: Route to get a specific user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});

// POST: Route to create a new user
app.post('/api/users', (req, res) => {
    const { id, name, isSuper } = req.body;
    const newUser = { id, name, isSuper };
    console.log(newUser);
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT: Route to update an existing user's details
app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    let user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    const { name, isSuper } = req.body;
    user.name = name || user.name;
    user.isSuper = isSuper !== undefined ? isSuper : user.isSuper;
    res.json(user);
});

// DELETE: Route to delete a user
app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.status(204).send();  // No content response
});

// Route with query parameter for search
app.get('/search', (req, res) => {
    const name = req.query.name;
    res.send(`Your name is ${name}`);
    // res.json(name);
});

// POST: Route for user to input their name and age
app.post('/user', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ error: 'Name and age are required' });
    }
    res.send(`Your name is ${name} and your age is ${age}`);
});

app.listen(3000, () => {
    console.log("Server started, go to /api/users or other routes!");
});
