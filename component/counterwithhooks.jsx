import React, { useEffect, useState } from "react";

function Counterwithhooks() {
    const [count, setCount] = useState(0);
    const handler = () => setCount(count => count + 1);
    
    const [cnt, setcnt] = useState(-10);
    const hndlr = () => {setcnt(cnt => cnt + 1)};

    const reset = () => {
        setCount(0);
        setcnt(-10);
    };

    useEffect(() => {
        console.log("Mounted");
        const cnt = setInterval(() => {
            console.log("running...");
        }, 1000);

        return () => {
            console.log(cnt);
            clearInterval(cnt);
            console.log("Unmounted");
        };
    }, [count, cnt]);
    
    return (
        <>
            <h1>Count: {count}  cnt: {cnt}</h1>
            <button onClick={handler}>click Count</button> <button onClick={hndlr}>click cnt</button> <br />
            <button onClick={reset}>reset</button>
        </>
    );
}

export default Counterwithhooks;