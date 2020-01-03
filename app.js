const express = require('express');
const path = require('path');

// Load data
const data = require('./Data.js');

let BoardTitle = {
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
  res.json(BoardTitle);
})

app.get('/api/lists', (req, res) => {
  res.json(data.Board);
})

// POST method
// Change app title
app.post('/api', (req, res) => {
  console.log(req.body);
  BoardTitle.boardTitle = req.body.boardTitle;
  res.json(BoardTitle)
})

// Add List
app.post('/api/addList', (req, res) => {
  let newList = req.body.newList;
  // let newLists = { ...data.Board.lists };
  // let newListOrder = [...data.Board.listOrder];
  data.Board.lists[newList.id] = newList;
  data.Board.listOrder.push(newList.id)

  console.log(newList);

  res.json({
    lists: data.Board.lists,
    listOrder: data.Board.listOrder
  });
})

// Update Lists after reordering
app.post('/api/updateLists', (req, res) => {
  let listId = req.body.listId;
  let cardIds = req.body.cardIds;
  data.Board.lists[listId].cardIds = cardIds;
  res.json(data.Board.lists[listId].cardIds);
})

// Edit Card
app.post('/api/editCard', (req, res) => {
  let cardId = req.body.id;
  let content = req.body.content;
  data.Board.cards[cardId].content = content;
  res.json(data.Board.cards[cardId]);
})

// Add Card
app.post('/api/addCard', (req, res) => {
  let cards = data.Board.cards;
  let cardsLength = Object.keys(cards).length;
  let listId = req.body.listId;
  let content = req.body.content;
  let cardId = "card-" + `${cardsLength+1}`;
  let newCard = {
      id: cardId, 
      content: content
  }

  data.Board.cards[cardId] = newCard;
  data.Board.lists[listId].cardIds.push(cardId); 
  
  res.json({
    cards: data.Board.cards,
    cardIds: data.Board.lists[listId].cardIds
  });
})

// 404 Page
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})