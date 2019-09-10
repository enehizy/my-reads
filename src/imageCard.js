import React from 'react';
import {Card} from 'primereact/card';
import ReadingListButton from './readinglistbutton';

function ImageCard(props){
   const {books}=props;
   const {gridColums}=props;
    return(
        <div className="grid-container">

        <div className="p-grid">
        {
             books.map((book,index)=>{
             return(
                 <div className={gridColums} key={index}>
                     <Card header={
                        <img alt={book.name} src={book.image}/>
                     }
                     footer={
                        <ReadingListButton/>
                     }
                     >
                         
                        <h3>{book.name}&nbsp; By{book.author}</h3>
                     </Card>
                 </div>
             )
             })
         }
        </div>
    
         
     </div>
    )
}
export default ImageCard;