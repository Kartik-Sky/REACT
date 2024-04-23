import React from "react";
import propTypes from 'prop-types';
// import ChildComponent from "./ChildComponent";

function Greeting(props)
{
    return <h1>Hello, {props.name}</h1>;

}

Greeting.propTypes = {
    name: propTypes.string.isRequired
};

function Greet()
{
    return <Greeting name="Kartik"/>
}
export default Greet;