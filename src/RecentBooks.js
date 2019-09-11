import React,{Component} from 'react';
import ImageCard from './imageCard';
import {connect} from 'react-redux';


class RecentBooks extends Component{


 render(){
     const {books}=this.props;
    const recentBooks=books.filter((book)=>{
        return book.name === 'Raising a Screen Smart Kid' || book.author === 'Michio Kaku' || book.name === 'Healing Depression for Life'
    });
     return(
     <div>
       <ImageCard books={recentBooks}  gridColums='p-col-12 p-md-4'/>
       
     </div>
     )
 }

}
const mapStateToProps=(state)=>{
    return{
        books:state
    }
}
 export default connect(mapStateToProps)(RecentBooks);