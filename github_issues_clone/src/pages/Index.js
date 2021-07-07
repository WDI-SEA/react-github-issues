import React, { useState } from 'react';




const Index = props => {
    const [issue, setIssue] = useState(0)
    let url = 'https://api.github.com/repos/facebook/react/issues?page=1&per_page=100'
    fetch(url)
    .then((response) => response.json())
    .then(data => 
        this.ListeningStateChangedEvent({

        }))
    .catch((err) => {
        console.log(err)
    })

    return (
        <div>
            <h1>Index Page</h1>
        </div>
    )
}


// class App extends React.Component {
//     state = {
//         issues: []
//     }
//     render() {
//         const {users} = this.state;
//     }
//     return(
//         <div key={issues}></div>
//     )
// }

export default Index