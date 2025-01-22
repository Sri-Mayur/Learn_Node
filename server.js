const express = require('express');

const app = express();
const port = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// Sample data
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// GET all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// GET single item
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});
