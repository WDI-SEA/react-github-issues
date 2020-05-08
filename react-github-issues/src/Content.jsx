import React from 'react'
import { Route } from 'react-router-dom'
import Landing from './views/Landing'
import Index from './views/Index'
import Show from './views/Show'

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