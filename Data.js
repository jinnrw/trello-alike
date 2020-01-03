module.exports.Board = {
  cards: {
    'card-1': { id: 'card-1', content: 'to do 1' },
    'card-2': { id: 'card-2', content: 'to do 2' },
    'card-3': { id: 'card-3', content: 'to do 3' },
    'card-4': { id: 'card-4', content: 'to do 4' },
    'card-5': { id: 'card-5', content: 'to do 5' },
  },
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'To do',
      cardIds: ['card-1', 'card-2', 'card-3']
    },
    'list-2': {
      id: 'list-2',
      title: 'Done',
      cardIds: ['card-4','card-5']
    },
  },
  listOrder: ['list-1', 'list-2'],
}


// module.exports.Lists = [{
//   listId: 0,
//   listTitle: "To Do",
//   listCards: [
//     {
//       id: "q",
//       title: "do this",
//       completed: false,
//     },
//     {
//       id: "w",
//       title: "do that",
//       completed: false,
//     },
//     {
//       id: "e",
//       title: "push to github",
//       completed: false,
//     }
//   ]
// }, {
//   listId: 1,
//   listTitle: "Done",
//   listCards: [
//     {
//       id: "a",
//       title: "buy milk",
//       completed: false,
//     },
//     {
//       id: "b",
//       title: "overcooked dinner",
//       completed: false,
//     },
//     {
//       id: "c",
//       title: "save your code",
//       completed: false,
//     }
//   ]
// }
// ]
