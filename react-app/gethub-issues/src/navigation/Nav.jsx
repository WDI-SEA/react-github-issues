import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
  return (
    <div>
	      <nav>
	      	<ul>
	      		<li>
	      			<a href='/'>Pull Request</a>
	      		</li>
	      		<li>
	      			<Link to="/index">Issues</Link>
	      		</li>
	      		<li>
	      			<a href='/'>Marketplace</a>
	      		</li>
	      		<li>
	      			<a href='/'>Explore</a>
	      		</li>
	      		<li>
	      			<Link to="/">Home</Link>
	      		</li>
	      		<li>
	      			<Link to="/show">Show</Link>
	      		</li>
	      	</ul>
	      </nav>
    </div>
  )
}
export default Nav