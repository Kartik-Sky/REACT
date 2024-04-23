import React,{useReducer} from 'react';

const initialState={
    balance: 0
};

function reducer(state,action)
{
    switch(action.type){
        case 'DEPOSIT':
            return {
                balance: state.balance+ action.amount
            };
        case 'WITHDRAW':
            return {
                balance: state.balance - action.amount
            };
        default:
            return state;
    }
}

function DepositWithdraw(){
    const [state,dispatch]=useReducer(reducer,initialState);

    const HandleDeposit= ()=>{
        const amount = parseInt(prompt('Enter Deposit amount: '));
        if (amount>0){
            dispatch({type: 'DEPOSIT',amount});
        }
        else{
            alert("Please enter a valid deposit amount: ");
        }
    }
    const HandleWithdraw = ()=>{
        const amount = parseInt(prompt("Enter withdrawal amount: "))
        if (state.balance>amount){
            dispatch({type:'WITHDRAW',amount});


        }
        else{
            alert("Insufficient Funds for withdrawal");
        }
    }

    return (
        <div>
            <h2>Deposit/Withdraw Component</h2>
            <p>Current balance: {state.balance}</p>
            <br/>
            <button onClick={HandleDeposit}>Deposit</button>
            <button onClick={HandleWithdraw}>Withdraw</button>

        </div>


    )

}

export default DepositWithdraw;