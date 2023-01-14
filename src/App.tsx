import React from 'react';
import './App.css';
import MusicButton from './components/MusicButton/MusicButton';

function App() {
  const logo = require("./logo.svg") as string;
  
  return (
    <div className="App">
      <p>sample test</p>
      <MusicButton />
    </div>
  );
}

export default App;
