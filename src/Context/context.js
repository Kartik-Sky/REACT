import React,{createContext, useState, useContext, useEffect} from 'react';

const CountContext = createContext();

function GrandChildComponent()
{
    const {count, setCount} = useContext(CountContext);

    const incrementCount = ()=> {
        setCount(count + 1);

    };

    return (
        <div>
            <h1>GrandChildComponent</h1>
            <p>count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}

function ChildComponent(){
    return (
        <div>
            <h2>
                <GrandChildComponent/>
            </h2>
        </div>
    )
}

function ParentComponent()
{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect Executing");
        
    })
    return (
        <div>
            <h2>Parent Component</h2>
            <p>Count: {count}</p>
            <CountContext.Provider value={{count,setCount}}>
                <ChildComponent/>
            </CountContext.Provider>
        </div>
    )
   
}

export default ParentComponent ;