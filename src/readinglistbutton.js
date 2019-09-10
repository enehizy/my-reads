import React,{component, Component} from 'react';
import {Button} from 'primereact/button';


class ReadingListButton extends Component{
    render(){
        return(
            <Button label="Add to Reading list" icon="pi pi-plus" className="p-button-danger"/>
        )
    }
}

export default ReadingListButton;