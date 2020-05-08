import React from 'react';
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Index from './pages/Index'

const Content = props => {
    return (
        <div className="content">
        <Route exact path="/" component={Home}/>
        <Route  path="/index" component={Index}/>
        </div>
    )
}

export default Content