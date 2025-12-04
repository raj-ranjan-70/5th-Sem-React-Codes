import { useCounter } from "./CustonHooks.jsx";

function CounterCustomHook() {
    const { count, increment, decrement, reset } = useCounter(10);
    return (
        <div>
            <h2>Counter using Custom Hook: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default CounterCustomHook;