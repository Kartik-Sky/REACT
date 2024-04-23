import React from "react";
import PropTypes from 'prop-types';

function ChildComponent(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.Age}</p>

        </div>
    )
}

ChildComponent.propTypes={
    name: PropTypes.string.isRequired
    
};
export default ChildComponent;
