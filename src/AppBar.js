import React from 'react';
import {NavLink,Link} from 'react-router-dom';


function AppBar(props){
    return(
      <div>
      <div className="app-bar">
      <h2>My Reads</h2>
      </div>
     <div className="navigation-bar">
     <ul>
       <li><NavLink exact to='/'  activeClassName="selected-link"> Recent books</NavLink></li>
       <li><NavLink  to='/Library'  activeClassName="selected-link"> Library</NavLink></li>
       <li><NavLink to='/books-read'  activeClassName="selected-link"> Books read</NavLink></li>
       
     </ul>
     
     </div>
      </div>
    )
    }

    export default AppBar;