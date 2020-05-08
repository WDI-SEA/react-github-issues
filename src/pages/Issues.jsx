import React from 'react';
import { Route, Router } from 'react-router-dom';
import AllIssues from './AllIssues'

const Issues= props=> {
    let issuesTitles = props.issues.map((issue,i)=>{
        return(
            <AllIssues issueT={issue.title} key={i} /> 
        )
    })

   return(
          <div>
             <ul>
            {issuesTitles}
            </ul>

          </div>
          )
    }

export default Issues