import React from 'react';
import './App.css';

import Content from './Content'

import Nav from './navigation/Nav'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Content />
    </div>
  );
}

export default App;
