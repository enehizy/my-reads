import React ,{Component}from 'react';
import AppBar from './AppBar';
import RecentBooks from './RecentBooks';
import Library from './library';
import BooksRead from './booksread';
import {Route} from 'react-router-dom';

import './index.css';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';



class App extends Component{
  render(){
    return(
      <div>
       <AppBar/>
       <Route exact path='/' component={RecentBooks}/>
       <Route path='/library' component={Library}/>
       <Route path='/books-read' component={BooksRead}
         />
      </div>
    )
  }
}

export default App;
