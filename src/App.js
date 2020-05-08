import React,{ useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Nav from './pages/Nav'
import Index from './pages/Index';
import axios from 'axios';

const API_URL= 'https://api.github.com/repos/facebook/react/issues?page=1&per_page=10'

function App() {

  let [issues, setIssues] = useState([''])

  useEffect(()=>{
    const getData = async()=>{
      let results = await axios(API_URL)
      console.log(results.data)
      setIssues(results.data)
    }
     getData()

  },[])

  return (
    <div className="App">
      <header className="App-header">
     
      </header>
      <Router >
          <Nav />
          <Index issues={issues}/>
      </Router>
    

    </div>
  );
}

export default App;
