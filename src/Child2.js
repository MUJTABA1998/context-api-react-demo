import React, {useReducer} from 'react'
import c_reduser from './CounterReducer'

export default function Child2() {

    let [state, disptch] = useReducer(c_reduser, 10)
    return(
        <div>
            <p>This is Reducers Method</p>
            <br />
            <p>Counter Value is {state}</p>
            <br />
            <button onClick={
                ()=>{
                    disptch('Increament')
                }
            }>
                Add One
            </button>
            <br />
            
        </div>
    )

}