import React from 'react'
import ReactDOM from 'react-dom'

// function handleClick(){
//     let n1=document.getElementById("num1").value;
//     let n2=document.getElementById("num2").value;
//     let n3=document.getElementById("num3").value;

//     // let out=Math.min(n1,n2,n3);
//     let out=n1+n2+n3;
    
//     document.getElementById("output").innerText=out;

// }

function reverse(string)
{
    let arr=string.split('');
    arr=arr.reverse();
    return arr.join("");
}


function handleClick()
{
    let string1=document.getElementById('num3').value;
    let out=string1.split(',')
    var i;
    for (i in out){
        console.log(out[i]);
    }
    document.getElementById('output').innerText=reverse(string1);


}
function Extest()
{
    return (
        <div>
            <form id="min">
                {/* <input type="text" id="num1"></input><br/>
                <input type="text" id="num2"></input><br/> */}
                <input type="text" id="num3"></input><br/>
            </form>
            <h2 id="output"></h2>
            <button onClick={handleClick}>Concat</button>
        </div>
    )
    
}

export default Extest;
