import React, {createContext, useContext,useEffect,useState} from 'react';

const countContext=createContext();

function GrandChildComponent()
{
    const {count,setCount}=useContext(countCountext);

    const incrementCount = ()=>{
        setCount(count+1);
    }

    return (
        <div>
        <h1>GrandChildComponent</h1>
        <p>count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
        </div>
    );


}

function ChildComponent()
{
    return (
        <GrandChildComponent/>

    )

}

function ParentComponent()
{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("useEffectExample");
    })

    return (
        <div>
            <countContext.Provider value={{count,setCount}}>
                <ChildComponent/>
            </countContext.Provider>
        </div>

    )

}

export default ParentComponent;
