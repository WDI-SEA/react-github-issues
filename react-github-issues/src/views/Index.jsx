import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Index = props => {
	let [data, setData] = useState([''])

	useEffect(() => {


		axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=10')
		.then(res => {
			setData(res.data)


		})
	})

	const urlData = (url) => {
		console.log(url)
	}


	let issues = data.map((d, i) => {
		return (
			<li key={i}>
				<strong onClick={() => {
					console.log('hi')
					urlData(d.url)
				}}>{d.title}</strong>
				<Link to="/show/">Show</Link>
			</li>
		)
	})

  return (

    <div>
    <Link to="/">Home</Link>
  	<ul>
   	{issues}
   	</ul>
    
    </div>
  )
}
export default Index