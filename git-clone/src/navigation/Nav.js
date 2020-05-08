import React from 'react'
import { Link } from 'react-router-dom'


const Nav = props => {
    return (
        <nav>
            <ul>
                <li>
                    <img id="iconimg"src="https://lh3.googleusercontent.com/proxy/GozX9kD-THXHGY9woAaFlyW-U4KMrM2t3pPH2PvqpMhrzzMcPkoxV4IOJyYkYzSFVybG_lhVCfEMp-ZLV6xZk2vrQDdMs4OxQKW3-xRvEW6Wzm-0JvS98En7Rud-OZt0BQhq34rkm4V_LTR8SxQYl2mkAYtBfu4j" alt="icon"/>
                </li>
                <li >
                    <input id="navs" type="text" value="Search or Jump to   /" />
                </li>
                <li>
                    <Link >Pull Requests</Link>
                </li>
                <li>
                    <Link >Issues</Link>
                </li>
                <li>
                    <Link >Marketplace</Link>
                </li>
                <li>
                    <Link >Explore</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav