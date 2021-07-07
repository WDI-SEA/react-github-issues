import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
    <nav>
        <ul>
            <li>
                <Link to="/PullRequests">Pull Requests</Link>
            </li>
            <li>
                <Link to="/">Issues</Link>
            </li>
            <li>
                <Link to="/Marketplace">Marketplace</Link>
            </li>
            <li>
                <Link to="/Explore">Explore</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Nav