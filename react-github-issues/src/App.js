import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import Content from './Content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi</h1>
      </header>
      <Router>
        <Content />
      </Router>
    </div>
  );
}


export default App;
