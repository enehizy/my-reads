import React,{Component} from 'react';
import ImageCard from './imageCard';

class BooksRead extends Component{

    state={
        books:[
            {
                
                    name:'The Better Angels of Our Nature',
                    author:'By Steven Pinker',
                    image:'img/The-Better-Angels-of-Our-Nature-By-Steven-Pinker.jpg'
            

            }
            ,
            {
                name:'What the Future Looks Like',
                author:'Jim Al Khalili',
                image:'img/What-the-Future-Looks-Like-By-Jim-Al-Khalili.jpg'
            }
            ,
            {
                name:'Human ',
                author:'Alanna-Collen',
                image:'img/10-Human-By-Alanna-Collen.jpg'
            }
            ,
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
              <ImageCard books={books} gridColums='p-col-4'/>
           </div>
        )
    }
}
export default BooksRead;