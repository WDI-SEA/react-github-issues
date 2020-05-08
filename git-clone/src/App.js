import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';


import Content from  './Content'
import NAV from './navigation/Nav'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NAV />
          <Content />
        </div>
      </Router>
    </div>
  );
}

export default App;
