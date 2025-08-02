const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const todos = [];

app.get('/', (req, res) => {
    res.send('This is todo app')
});

app.get('/list-todos', (req, res) => {
    res.send(todos)
});

app.post('/add-todo', (req, res) => {
    const todoItem = req.body;
    if (!todoItem.id || !todoItem.todo) {
        res.send('Required fields are missing')
        return
    }
    todos.push(todoItem)
    res.send('Todo added successfully');
});

app.put('/update-todo', (req, res) => {
    const todoItem = req.body;
    if (!todoItem.id || !todoItem.updatedTodo) {
        res.send('Required fields are missing');
        return;
    }
    todos.map((data) => {
        if (data.id === todoItem.id) {
            data.todo = todoItem.updatedTodo
        }
    })
    res.send('Todo updated successfully');
});

app.delete('/delete-todo', (req, res) => {
    const deleteItemId = req.query.id;
    if (!deleteItemId) {
        res.send('Required fields are missing');
        return;
    }
    const [todoItem] = todos.filter(data => data.id === deleteItemId)
    const todoItemIdx = todos.indexOf(todoItem)
    todos.splice(todoItemIdx, 1)
    res.send('Todo deleted successfully');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
