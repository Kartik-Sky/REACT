import {useState} from 'react';


function Counting(){
    const [count,Increment]=useState(0);
    return (
        <>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button style={{margin:2}} onClick={()=>{
                Increment(count+1)
            }
            }>Increment</button>
            <button onClick={()=>{
                Increment(0)
            }}>Reset</button>
        </>

    )
}

export default Counting;