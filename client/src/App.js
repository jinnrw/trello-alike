import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
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
