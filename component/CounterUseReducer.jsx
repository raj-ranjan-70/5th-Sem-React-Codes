import {useReducer} from "react";

function CounterUseReducer() {
    const [count, dispatch] = useReducer(reducer, 0);

    function reducer(state, action) {
        if(action.type === "ADD") {
            return state + 1;
        }

        if(action.type === "SUB") {
            return state - 1;
        }

        return 0;
    }

    return (
        <div className="flex-col justify-between items-center">
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch({type:"ADD"})} className="bg-amber-800 m-2 p-2">Add</button>
        <button onClick={() => dispatch({type:"SUB"})} className="bg-yellow-300 m-2 p-2">Sub</button>
        <button onClick={() => dispatch({type:"RESET"})} className="bg-blue-800 m-2 p-2">Reset</button>
        </div>
    )
} 

export default CounterUseReducer;