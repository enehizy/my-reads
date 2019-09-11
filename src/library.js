import React,{Component} from 'react';
import ImageCard from './imageCard';
import {connect} from 'react-redux';

class Library extends Component{

    
    
   render(){
       const {books}=this.props;
       return(
           <div>
               <ImageCard books={books} gridColums='p-col-12 p-md-4 p-lg-3'/>
           </div>
       )
   }
}


const mapStateToProps=(state)=>{
    return {
        books:state
    }
}
export default connect(mapStateToProps,null)(Library);
