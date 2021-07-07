import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <h4>👋 Want to submit an issue to bookface/actre?</h4>
      <p>if you have a bug or an idea, read the contributing guidelines before opening an issue</p>
      <p>Issues labeled good first issue can be good first contributions.</p>
      <button Link to="/index">Go to Issues</button>
      <button to="/index" renderAs={Link}>My button linked to react-router-dom</button>
    </div>
  )
}
export default Home