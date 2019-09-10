import React,{Component} from 'react';
import ImageCard from './imageCard';


class Library extends Component{

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
                name:'Fake ',
                author:'Robert T Kiyosaki',
                image:'img/FAKE-By-Robert-T.-Kiyosaki.jpg'
            }
            ,
            {
                name:'Human ',
                author:'Alanna-Collen',
                image:'img/10-Human-By-Alanna-Collen.jpg'
            }
            ,
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
    , {
        name:'Raising a Screen Smart Kid',
        author:'Julianna Miner',
        image:'img/Raising-a-Screen-Smart-Kid-By-Julianna-Miner.jpg'
    }
    ,
    {
        name:'Healing Depression for Life',
        author:'Dr Gregory-L. Jantz PhD Keith-Wall',
        image:'img/Healing-Depression-for-Life-By-Dr.-Gregory-L.-Jantz-PhD-Keith-Wall.jpg'
    },
    {
        name:'Blockchain for Everyone',
        author:'Sir John Hargrave',
        image:'img/Blockchain-for-Everyone-By-Sir-John-Hargrave.jpg'
    },
    {
        name:'Digital @ Scale',
        author:'Anand Swaminathan JurgenMeffert',
        image:'img/Digital-@-Scale-By-Anand-Swaminathan-Jurgen-Meffert.jpg'
    }

    

        ]
    }
    
   render(){
       const {books}=this.state;
       return(
           <div>
               <ImageCard books={books} gridColums='p-col-3'/>
           </div>
       )
   }
}

export default Library;
