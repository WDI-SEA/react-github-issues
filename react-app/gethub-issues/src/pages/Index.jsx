import React from 'react'

const Index = props => {
	let state = {
		issues: []
	}

	fetch("https://api.github.com/repos/facebook/react/issues?page=1&per_page=100")
	.then(response => response.json())
	.then(data => {
		let issues = data.map((issue, i) => {
			return (
				<li key={i}>
					<p>{issue.url}</p>
				</li>
				)
		})
	}
  return (
    <div>
     {issues}
    </div>
  )
}
export default Index