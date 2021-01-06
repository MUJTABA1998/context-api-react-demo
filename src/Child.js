import React, {useContext} from 'react'
import counterContext from './CounterContext'

export default function Child() {

    let counter = useContext(counterContext)

    return(
        <div>
            <p>This is Context Api Method</p>
            <br />
            <p>Counter Value is {counter}</p>
            <br />
            <button onClick={
                ()=>{
                    counter[1](++counter[0])
                }
            }>
                Add One
            </button>
            <br />
            <button onClick={
                ()=>{
                    counter[1](23)
                }
            }>
                Reset
            </button>
        </div>
    )

}