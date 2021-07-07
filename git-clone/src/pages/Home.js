import React from 'react';
import { Link } from 'react-router-dom'


const Home = props => {
    return (
        <div>
            <div id="homepage">
            <h2><span role="img" aria-label="img">👋</span> Want to submit an issue to bookface/actre?</h2>
            <p>If you have a bug or an idea, read the contributing guidelines before opening an issue.
                issues labeled good first can be good first contributions
            </p>
            </div>
            <button id="homeb" ><Link to="/index" id="homebl">Go to issues</Link></button>
        </div>
    )
}

export default Home