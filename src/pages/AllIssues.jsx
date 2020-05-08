import React from 'react';
import { Link } from 'react-router-dom';

const AllIssues= props=> {
    let str = '/issues/'+props.key
 
   return(
       <div>
            <h1> <li>{props.issueT}</li></h1>
            <li><p> {props.issueBody} </p></li>
            <li><a href={props.issuesHtmlUrl}>Issue Link </a></li>
            <hr/>
       </div>
       
        )
    }

export default AllIssues