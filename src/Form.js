import React from 'react'
import ReactDOM from 'react-dom'

function Form()
{
    ReactDOM.render(
        <form id="Login_Form" >
            <input type="email" id="email" placeholder='E-mail Address'/>
            <br/>
            <input type="password" id="password" placeholder='Password'/>
            <br/>
            <button>Login</button>
        </form>,
        document.getElementById('root2')
    )
}
export default Form;