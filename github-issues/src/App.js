
import React, {useState} from 'react';
import { BrowserRouter  as Router } from 'react-router-dom';
import './App.css';

import Nav from './navigation/Nav'
import Content from './Content'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Content />
      </Router>
    </div>
  );
}

export default App;
