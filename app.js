const express = require('express');
const path = require('path');


// Init App
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const data = { title: "My Trello App" };

// GET method route
app.get('/api', (req, res) => {
  res.json(data);
})

const lists = [{
  list_title: "To Do",
  list_items: [
    {
      title: "do this",
      completed: false,
    },
    {
      title: "do that",
      completed: false,
    },
    {
      title: "push to github",
      completed: false,
    }
  ]
}, {
  list_title: "Done",
  list_items: [
    {
      title: "buy milk",
      completed: false,
    },
    {
      title: "overcooked dinner",
      completed: false,
    },
    {
      title: "save your code",
      completed: false,
    }
  ]
}
]

app.get('/api/lists', (req, res) => {
  res.json(lists);
})

// 404 Page
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))