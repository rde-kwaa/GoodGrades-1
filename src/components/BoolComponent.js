import React from 'react';

const BoolComponent = props => {
    if (props.value){
        return props.children[0];
    }
    else{
        return props.children[1];
    } 
}
export default BoolComponent;