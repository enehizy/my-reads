import React,{component, Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'primereact/button';
import {addToRead,removeFromRead}from './actions';

class ReadingListButton extends Component{
    render(){
        return(
            <div>
              {!this.props.read&&(
                <Button label="Add to Read" icon="pi pi-plus" className="p-button-danger" onClick={()=>{
                    this.props.addToRead({name:this.props.name})
                }}/>
                )}
                {this.props.read&&(
                    <Button label="Remove from Read" icon="pi pi-minus" className="p-button-warning" onClick={()=>{
                        this.props.removeFromRead({name:this.props.name})
                    }}/>
                    )}
            </div>
           
        )
    }
}

export default connect(null,{addToRead,removeFromRead})(ReadingListButton);