import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const Landing = props => {
    return (
        <div>
            <h1>Want to contribute to facebook/react?</h1>
            <h3>If you have a bug or an idea, read the contributing guidelines before opening an issue.</h3>
            <h3>Issues labeled good first issue can be good first contributions</h3>
            {/* <Button color="secondary" size="lg">Go to Issues</Button>{' '} */}
            <Link className="button" to="/index">Go to Issues</Link>

        </div>
    )
}

export default Landing