import React from 'react';
import { Route, Router } from 'react-router-dom';
import Issues from './Issues';


const Index= props=> {
   return(
          <div>
               <Route  path='/issues' render={()=>
                 <Issues issues={props.issues}  /> 
                 }/>

          </div>
         
          )
    }

export default Index