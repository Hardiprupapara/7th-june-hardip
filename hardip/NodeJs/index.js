const express = require('express');
var cors = require('cors')
const app = express();
const mysql = require('mysql');
const hostname = '127.0.0.1';
const port = 4000;

// Middleware to parse JSON bodies
app.use(cors())
app.use(express.json());

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hardip@1432',
    database: 'sys'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

// GET all posts from MySQL
app.get('/api/posts', cors(), (req, res) => {
    connection.query('SELECT * FROM userdb.customer', (error, results, fields) => {
        if (error) {
            console.error('Error fetching data from MySQL: ' + error.stack);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json(results);
    });
});

// GET a post by id from MySQL
app.get('/api/posts/:id',cors(), (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM userdb.customer WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error fetching data from MySQL: ' + error.stack);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(results[0]);
    });
});

// POST a new post to MySQL
app.post('/api/posts', cors(),(req, res) => {
    const body = req.body;
    connection.query('INSERT INTO userdb.customer SET ?', body, (error, results, fields) => {
        if (error) {
            console.error('Error inserting data into MySQL: ' + error.stack);
            return res.status(500).json({ message: 'Internal Server Error', error: error });
        }
        res.json({ status: 'success', user: { ...body, id: results.insertId } });
    });
});

// PATCH update a post in MySQL
app.patch('/api/posts/:id',cors(), (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    connection.query('UPDATE userdb.customer SET ? WHERE id = ?', [updates, id], (error, results, fields) => {
        if (error) {
            console.error('Error updating data in MySQL: ' + error.stack);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json({ status: 'success', user: { ...updates, id: id } });
    });
});

// DELETE a post from MySQL
app.delete('/api/posts/:id',cors(), (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM userdb.customer WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error deleting data from MySQL: ' + error.stack);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json({ status: 'success', message: 'User deleted successfully' });
    });
});

// Start the server
app.listen(port, () => console.log(`Server running on http://${hostname}:${port}/`));
