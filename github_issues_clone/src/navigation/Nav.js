import React from 'react';
import { Link } from 'react-router-dom';


const Nav = props => {
    return (
        <nav>
            <ul>
                <li><Link to="#">Code</Link></li>
                <li><Link to="/index">Issues</Link></li>
                <li><Link to="#">Pull requests</Link></li>
                <li><Link to="#">Projects</Link></li>
                <li><Link to="#">Action</Link></li>
                <li><Link to="#">Wiki</Link></li>
                <li><Link to="#">Security</Link></li>
                <li><Link to="#">Pulse</Link></li>
                <li><Link to="#">Community</Link></li>
            </ul>
        </nav>
    )
}

export default Nav