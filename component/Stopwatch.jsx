import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    let t;
    if (run) {
      t = setInterval(() => {
        setTime((oldTime) => oldTime + 10);
      }, 10);
    } else {
      clearInterval(t);
    }
    return () => clearInterval(t);
  }, [run]);

  function startStop() {
    setRun(!run);
  }

  function reset() {
    setRun(false);
    setTime(0);
    setFlags([]);
  }

  function flag() {
    if (time > 0) {
      setFlags([...flags, time]);
    }
  }

  function showTime(t) {
    let min = Math.floor(t / 60000);
    let sec = Math.floor((t % 60000) / 1000);
    let ms = Math.floor((t % 1000) / 10);
    return (
      (min < 10 ? "0" + min : min) +
      ":" +
      (sec < 10 ? "0" + sec : sec) +
      ":" +
      (ms < 10 ? "0" + ms : ms)
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Stopwatch</h2>
      <h1>{showTime(time)}</h1>

      <button onClick={startStop}>
        {run ? "Stop" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
      <button onClick={flag}>Flag</button>

      <div>
        <h3>Flags:</h3>
        <ul>
          {flags.map((f, i) => (
            <li key={i}>{showTime(f)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stopwatch;
