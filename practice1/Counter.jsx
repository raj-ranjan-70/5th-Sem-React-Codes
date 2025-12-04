import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <h2>Counter App</h2>
      <h1 className="text-blue-700 text-5xl">Count: {count}</h1>

      <button onClick={() => setCount(count + 1)} className="m-4 border-3">Increment</button> <span></span>

      <button onClick={() => setCount(count - 1)} className="m-4 border-3">Decrement</button>
      </>
  );
}

export default Counter;