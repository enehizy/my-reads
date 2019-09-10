import React from 'react';
import {Link} from 'react-router-dom';


function AppBar(props){
    return(
      <div>
      <div className="app-bar">
      <h2>My Reads</h2>
      </div>
     <div className="navigation-bar">
     <ul>
       <li><Link to='/'  > Recent books</Link></li>
       <li><Link  to='/Library'  > Library</Link></li>
       <li><Link to='/books-read'  > Books read</Link></li>
       
     </ul>
     
     </div>
      </div>
    )
    }

    export default AppBar;