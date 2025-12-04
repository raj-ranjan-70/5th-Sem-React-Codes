import React from "react";

function Memo() {
  const [count, setCount] = React.useState(0);
  const [toggle, setToggle] = React.useState(false);

  const result = React.useMemo(() => {
    console.log("Running expensive calculation...");
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    // you can optionally mix count into the result
    return sum + count;
  }, [count]); // ✅ count is used inside, so it's a valid dependency

  return (
    <div
      style={{
        background: toggle ? "black" : "white",
        color: toggle ? "white" : "black",
        height: "100vh",
        width: "100vw",
      }}
      className="border-box"
    >
      <h1>Use of useMemo Hook in React</h1>
      <p>Count: {count}</p>
      <p>Memoized result: {result}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-amber-500 m-2 p-2"
      >
        Count
      </button>

      <button
        onClick={() => setToggle(!toggle)}
        className="bg-blue-800 m-2 p-2"
      >
        Toggle
      </button>
    </div>
  );
}

export default Memo;
