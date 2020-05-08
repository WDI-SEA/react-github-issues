import React from 'react'
import axios from 'axios'

const Index = props => {
	let state = {
		issues: []
	}

	axios.get("https:\//api.github.com/repos/facebook/react/issues?page=1&per_page=100")
	.then(res => { const issues = res.data setState({issues})})
  return (
    <div>
      <ul>
      	{state.persons.map(person => <li>{issues.name}</li>)}
      </ul>
    </div>
  )
}
export default Index