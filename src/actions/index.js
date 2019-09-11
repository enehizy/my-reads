export const ADD_TO_READ='ADD_TO_READ';
export const REMOVE_FROM_READ='REMOVE_FROM_READ';


export const addToRead=({name})=>{
return{
    type:ADD_TO_READ,
    name
}
}
export const removeFromRead=({name})=>{
    return{
        type:REMOVE_FROM_READ,
        name
    }
    }