import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

const Index = props => {
    let [data, setData] = useState([''])

    
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=20')
    .then((response) => {
        console.log(response.data)
        setData(response.data)
    })

    let objectData = data.map((d, i) => {
        return(
            <li key={i}>
                {d.title}
                <Link to="/show">hello</Link>
            </li>
        )
    }) 


    return (
        <div>
            <ul>
                {objectData}
            </ul>
        </div>
    )
}

export default Index

