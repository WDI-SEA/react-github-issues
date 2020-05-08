import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Index from './pages/Index'
import Show from './pages/Show'

const Content = props => {
  return (
    <div>
		<Route exact path="/" component={Home} />
		<Route path="/index" component={Index} />
		<Route path="/show" component={Show} />
    </div>
  )
}
export default Content