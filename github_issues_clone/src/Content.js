import React from 'react';
import {Route} from 'react-router-dom'


import Index from './pages/Index';
import Show from './pages/Show';
import Landing from './pages/Landing';

const Content = props => {
    return (
        <div>
            <Route exact path="/" component={Landing} />
            <Route path="/index" component={Index} />
            <Route path="/show" component={Show} />
        </div>
    )
}

export default Content