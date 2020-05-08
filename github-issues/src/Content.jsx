import React from 'react';
import { Route } from 'react-router-dom'

import Marketplace from './pages/Marketplace'
import Issues from './pages/Issues'
import Explore from './pages/Explore'
import PullRequests from './pages/PullRequests';


const Content = props => {
    

    return (
        <div className="content">
            <Route exact path="/" component={Issues} />
            <Route path="/PullRequests" component={PullRequests} />
            <Route path="/Marketplace" component={Marketplace} />
            <Route path="/Explore" component={Explore} />
        </div>
    )
}

export default Content