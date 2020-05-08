import React from 'react';
import { Link } from 'react-router-dom'



const Landing = props => {
    return (
        <div>
            <p>Home page that should list all the issues</p>
            <h3>
                <li>
                    <Link to='/index'>Index</Link>
                </li>
            </h3>
        </div>
    )
}

export default Landing