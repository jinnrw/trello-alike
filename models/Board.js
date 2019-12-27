// const redis = require('redis');

// // Create a client to connect to Redis
// const redisClient = redis.createClient();

// const Board = redisClient.get('board_title', function (err, board_title) {
//   if (err !== null) {
//     console.log("Error: " + err);
//     return;
//   }

//   let Board = {
//     boardTitle: board_title
//   }

//   console.log(Board);

//   return Board;
// })


// exports.Board = Board;