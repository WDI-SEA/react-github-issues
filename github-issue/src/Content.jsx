import React from 'react';
import { Route } from 'react-router-dom' 
import { Link } from 'react-router-dom'

import Index from './pages/Index'
import Landing from './pages/Landing'
import Show from './pages/Show'

const Content = props => {
    return (
        <div>
            <Route exact path="/" ><Landing/></Route>
            <Route exact path='/index' component={Index}/>
        </div>
    )
}

export default Content