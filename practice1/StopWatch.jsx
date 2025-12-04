import React, { useState, useRef, useEffect } from "react";

function formatTime(totalSeconds) {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  // start the timer
  const start = () => {
    if (intervalRef.current !== null) return; // already running
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  // pause/stop the timer (keeps current time)
  const stop = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // reset to zero and stop
  const reset = () => {
    stop();
    setSeconds(0);
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-mono">{formatTime(seconds)}</h1>

      <div className="mt-4">
        <button onClick={start} className="border-2 m-2 p-2">
          Start
        </button>

        <button onClick={stop} className="border-2 m-2 p-2">
          Stop
        </button>

        <button onClick={reset} className="border-2 m-2 p-2">
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
