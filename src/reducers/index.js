import {ADD_TO_READ,REMOVE_FROM_READ} from '../actions';



    const bookState=[
        {
            name:'The Better Angels of Our Nature',
            author:'By Steven Pinker',
            image:'img/The-Better-Angels-of-Our-Nature-By-Steven-Pinker.jpg',
            read:true
        }
        ,
        {
            name:'What the Future Looks Like',
            author:'Jim Al Khalili',
            image:'img/What-the-Future-Looks-Like-By-Jim-Al-Khalili.jpg',
            read:true
        }
        ,
        {
            name:'Fake ',
            author:'Robert T Kiyosaki',
            image:'img/FAKE-By-Robert-T.-Kiyosaki.jpg',
            read:false
        }
        ,
        {
            name:'Human ',
            author:'Alanna-Collen',
            image:'img/10-Human-By-Alanna-Collen.jpg',
            read:false
        }
        ,
        {
            name:'Blockchain Babel',
            author:'igor pejic',
            image:'img/Blockchain-Babel-By-Igor-Pejic.jpg',
            read:false
        },
        {
            name:'Digital @ Scale',
            author:'anand swaminathan jurgen murffet',
            image:'img/Digital-@-Scale-By-Anand-Swaminathan-Jurgen-Meffert.jpg',
            read:false
        },
        {
            name:'Physics of the Future',
            author:'Michio Kaku',
            image:'img/Physics-of-the-Future-By-Michio-Kaku.jpg',
            read:true
        }
, {
    name:'Raising a Screen Smart Kid',
    author:'Julianna Miner',
    image:'img/Raising-a-Screen-Smart-Kid-By-Julianna-Miner.jpg',
    read:false
}
,
{
    name:'Healing Depression for Life',
    author:'Dr Gregory-L. Jantz PhD Keith-Wall',
    image:'img/Healing-Depression-for-Life-By-Dr.-Gregory-L.-Jantz-PhD-Keith-Wall.jpg',
    read:false
},
{
    name:'Blockchain for Everyone',
    author:'Sir John Hargrave',
    image:'img/Blockchain-for-Everyone-By-Sir-John-Hargrave.jpg',
    read:false
},
{
    name:'Digital @ Scale',
    author:'Anand Swaminathan JurgenMeffert',
    image:'img/Digital-@-Scale-By-Anand-Swaminathan-Jurgen-Meffert.jpg',
    read:false
}



    ];


export function bookReducer(state=bookState,action){
    const {name}=action;
    switch(action.type){
        case ADD_TO_READ:
          let indexForAdd=state.findIndex((s)=>{
              return s.name ===name
          });
          let filteredForAdd=state.filter((s)=>{
              return s.name !== name
          })
            return  [
                ...filteredForAdd,
               {...state[indexForAdd],
                read:true},
                
            ]
            
               
            
        case REMOVE_FROM_READ:
            let indexForRemove=state.findIndex((s)=>{
                return s.name ===name
            });
            let filteredForRemove=state.filter((s)=>{
                return s.name !== name
            })
              return  [...filteredForRemove,
                {...state[indexForRemove],
                  read:false}
              ]
           
        default:
            return state;
    }
}