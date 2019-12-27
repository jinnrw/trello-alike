const express = require('express');
const path = require('path');

// Load data
const data = require('./Data.js');
// const Board = require('./models/Board')

// To do: bring this session into models directory
let Board;
const redis = require('redis');
const redisClient = redis.createClient();
redisClient.get('board_title', function (err, board_title) {
  if (err !== null) {
    console.log("Error: " + err);
    return;
  }

  Board = {
    boardTitle: board_title
  }
})

// POST function: Return a Promise
function postBoardTitle(req) {
  return new Promise((resolve, reject) => {
    redisClient.set('board_title', req, function (err) {
      if (err !== null) {
        reject("Error: " + err);
      }

      Board = {
        boardTitle: req
      }
      // if resolve, return Board
      resolve(Board); 
    })
  })
}

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
app.post('/api', async (req, res) => {
  const getBoard = await postBoardTitle(req.body.boardTitle);
  res.json(getBoard);
})

// 404 Page
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})