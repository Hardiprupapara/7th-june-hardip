const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mock data (replace this with a database)
let users = [{ "id": 1, "first_name": "Sidoney", "last_name": "Morris", "email": "smorris0@github.com", "gender": "Female" },
{ "id": 2, "first_name": "Caddric", "last_name": "Backsal", "email": "cbacksal1@reference.com", "gender": "Male" },
{ "id": 3, "first_name": "Kenon", "last_name": "Bulfit", "email": "kbulfit2@cpanel.net", "gender": "Genderfluid" },
{ "id": 4, "first_name": "Cate", "last_name": "Olenchikov", "email": "colenchikov3@hao123.com", "gender": "Female" },
{ "id": 5, "first_name": "Jayme", "last_name": "Kobelt", "email": "jkobelt4@netscape.com", "gender": "Male" },
{ "id": 6, "first_name": "Rosaleen", "last_name": "Willatts", "email": "rwillatts5@biblegateway.com", "gender": "Female" },
{ "id": 7, "first_name": "Orland", "last_name": "Frounks", "email": "ofrounks6@privacy.gov.au", "gender": "Male" },
{ "id": 8, "first_name": "Ira", "last_name": "Maillard", "email": "imaillard7@bing.com", "gender": "Male" },
{ "id": 9, "first_name": "Renell", "last_name": "Taill", "email": "rtaill8@imdb.com", "gender": "Female" },
{ "id": 10, "first_name": "Casi", "last_name": "Greenroad", "email": "cgreenroad9@i2i.jp", "gender": "Female" }];

// GET all posts
app.get('/api/posts', (req, res) => {
    return res.json(users);
});


app.get('/api/posts/:id', (req, res) => {
    const id = req.params.id
    const user = users.find((user) => Number(user.id) === Number(id))
    res.json(user);
});

app.post('/api/posts', (req, res) => {
    const body = req.body;
    console.log(req.body, "body")
    users.push(body, id = users.length + 1);
    res.json({ status: "success", users });
});

app.patch('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;

    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = { ...users[userIndex], ...updates };
    users[userIndex] = updatedUser;

    return res.json({ status: 'success', user: updatedUser });
});


app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    let userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        return res.json({ status: "success", users });
    } else {
        return res.status(404).json({ message: "User not found" });
    }
});



app.listen(port, () => console.log(`Server running on http://${hostname}:${port}/`));
