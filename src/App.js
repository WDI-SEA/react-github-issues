import React,{useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Nav from './pages/Nav'
import Index from './pages/Index';
import axios from 'axios';

function App() {

  let [issues, setIssues] = useState([''])

  
  axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=5')
  .then(response=>{

      setIssues( response.data)
  }) 
   

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
