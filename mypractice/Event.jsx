import {useRef, useState } from "react";

function Event() {

    const [sec, setSec] = useState(0);
    const [lap, setLap] = useState([]);
    const id = useRef(null);

    function start() {
        if(id.current !== null) return;

        id.current = setInterval(() => {
            setSec(prev => prev + 1)
        }, 1000);
    }

    function stop() {
        clearInterval(id.current);
        id.current = null;
    }

    function reset() {
        clearInterval(id.current);
        id.current = null;
        setSec(0);
        setLap([]);
    }

    const format = (totalseconds) => {
        const hrs = Math.floor(totalseconds / 3600);
        const mins = Math.floor((totalseconds % 3600) / 60);
        const secs = totalseconds % 60;

        const s = String(secs).padStart(2, "0");
        const m = String(mins).padStart(2, "0");
        const h = String(hrs).padStart(2, "0");
        
        return `${h}:${m}:${s}`;
    }

    const addlap = (sec) => {
        if(sec === 0) return;
        setLap((prev) => [...prev, sec])
    }

    return(
        <>
        <h1>{format(sec)}</h1>
        <button className="m-2 p-2 border-2" onClick={start}>Start</button>
        <button className="m-2 p-2 border-2" onClick={stop}>Stop</button>
        <button className="m-2 p-2 border-2" onClick={reset}>Reset</button>
        <button className="m-2 p-2 border-2" onClick={() => addlap(sec)}>Lap</button>

        <h1>Laps</h1>
        {lap.length === 0 && <p>No laps yet.</p>}

        <ol>
            {lap.map((lapsecs, index) => (
                <li key={index}>Lap {index + 1}: {format(lapsecs)}</li>
            ))}
        </ol>
        </>
    );
};

export default Event;