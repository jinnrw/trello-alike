const express = require('express');
const path = require('path');

// Load data
const data = require('./Data.js');

let Board = {
  boardTitle: "My Trello App"
};

// Init App
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// If the data was sent as JSON, it is necessary to use the express.json() middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

// GET method route
app.get('/api', (req, res) => {
  res.json(Board);
})

app.get('/api/lists', (req, res) => {
  res.json(data.Lists);
})

// POST method
// Change app title
app.post('/api', (req, res) => {
  console.log(req.body);
  Board.boardTitle = req.body.boardTitle;
  res.json(Board)
})

// 404 Page
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})