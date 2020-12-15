This project is a [Trello ](https://trello.com/) inspired list-making app and is still work in progress.  
The idea is to create a public board and collaborate with your team, with a given url.

## Feature
- React Hooks
- Styled-component
- A backend server, Node.js & Expree.js
- Database, Redis (Only board title is persistence at the moment)
- Drag and drop support, [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) (Checkout to branch `drag-n-drop` to see) 
- Redux (TBD)
- Websocket communication (TBD)

## How to run locally
#### Server  
Intall Redis and start the redis server.
```bash
brew install redis
brew services start redis
```
Test if Redis server is running.
```
redis-cli ping
```
Make sure you have Node.js installed, then in the root directory run: 
```
node app.js
```

#### Client  
In the client directory, after installing all packages, you can run: `npm start` or `yarn start`.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
