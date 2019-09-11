import React,{Component} from 'react';
import ImageCard from './imageCard';
import {connect} from 'react-redux';
class BooksRead extends Component{

   
    render(){
        const {books}=this.props;
        const readBooks=books.filter((book)=>{
            return book.read === true
        });
        return(
           <div>
              <ImageCard books={readBooks} gridColums='p-col-4'/>
           </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        books:state
    }
}
export default connect(mapStateToProps,null)(BooksRead);