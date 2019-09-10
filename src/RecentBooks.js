import React,{Component} from 'react';
import ImageCard from './imageCard';



class RecentBooks extends Component{

state={
    books:[
        {
            name:'Blockchain Babel',
            author:'igor pejic',
            image:'img/Blockchain-Babel-By-Igor-Pejic.jpg'
        },
        {
            name:'Digital @ Scale',
            author:'anand swaminathan jurgen murffet',
            image:'img/Digital-@-Scale-By-Anand-Swaminathan-Jurgen-Meffert.jpg'
        },
        {
            name:'Physics of the Future',
            author:'Michio Kaku',
            image:'img/Physics-of-the-Future-By-Michio-Kaku.jpg'
        }

    ]
}


 render(){
     const {books}=this.state;
    
     return(
     <div>
       <ImageCard books={books}  gridColums='p-col-4'/>
       
     </div>
     )
 }

}
 export default RecentBooks;