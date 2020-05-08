import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Content from './Content'

import Nav from './navigation/Nav'

function App() {
  return (
    <div className="App">
    <Router>
      <header>
        <Nav />
      </header>
      <Content />
      </Router>
    </div>
  );
}

export default App;
