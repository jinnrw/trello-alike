import React from 'react';
import './App.css';
import Header from './components/Header';
import BoardHeader from './components/BoardHeader';
import BoardCanvas from './components/BoardCanvas';

function App() {
  return (
    <div className="App">
      <Header />
      <BoardHeader />
      <BoardCanvas />
    </div>
  );
}

export default App;
