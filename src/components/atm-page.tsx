import { useReducer, useState } from "react"
import { atmInitialState, atmReducer } from "../state-management/atm"

export default function AtmPage(){

    const [state, dispatch] = useReducer(atmReducer,atmInitialState);
    const [amount, setAmount] = useState(0);


    return <>

    <h2>Welcome {state.username}!</h2>
    <h5>Balance: {state.balance}</h5>

    <button onClick={()=>dispatch({type:"DEPOSIT", payload:5})}>Add $5</button>
    <button onClick={()=>dispatch({type:"DEPOSIT", payload:10})}>Add $10</button>
    <button onClick={()=>dispatch({type:"WITHDRAW", payload:5})}>Remove $5</button>
    <button onClick={()=>dispatch({type:"WITHDRAW", payload:10})}>Remove $10</button>
    <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>

    
    <label htmlFor="amountInput">Amount</label>
    <input id="amountInput" type="number" placeholder="amount" onChange={e=>setAmount(Number(e.target.value))} />
    <button onClick={()=>dispatch({type:"DEPOSIT", payload:amount})}>Deposit</button>
    <button onClick={()=>dispatch({type:"WITHDRAW", payload:amount})}>Withdraw</button>

    </>
}