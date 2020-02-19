import React from 'react';
import logo from './logo.svg';
import './App.css';
import JourneyRetriever from './services/JourneyRetriever.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <JourneyRetriever />
      </header>
    </div>
  );
}

export default App;
