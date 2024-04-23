import React from 'react';
import Home_new from './Home_new';
import About_new from './About_new';
import {Route,Routes} from 'react-router-dom';

function Test(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home_new/>}/>
            <Route path="/about" element={<About_new/>}/>

        </Routes>
        </>
    )
}
export default Test;