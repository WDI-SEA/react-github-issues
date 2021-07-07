import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';


import Content from './Content';
import Nav from './navigation/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router>
        <Nav />
      <Content />
      </Router>
    </div>
  );
}

export default App;
