import React from 'react';
import { Link } from 'react-router-dom';

const AllIssues= props=> {
    let str = '/issues/'+props.key
 
   return(
       <div>
            <li>{props.issueT}</li>
            
             <hr/>
       </div>
       
        )
    }

export default AllIssues