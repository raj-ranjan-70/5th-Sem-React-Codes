import React, {useEffect, useRef, useState} from "react";

function RefCount() {
    // const [count, setCount] = useState(0);

    const reff = useRef(null);
    const handler = () => {
        reff.current.focus();
        // setCount(count + 1);
    };

    // useEffect(() => {
    //     reff.current = count;
    // }, [count]);
 
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <input type="text" placeholder="Type here..." className="border-1 rounded md p-2 m-2" />
        

        {/* <h1> Current value: {count}</h1>
        <h1> Previous value: {reff.current}</h1> */}
        <button onClick={handler} className="bg-gray-700 text-emerald-500 m-4 p-4">Click Me!</button>
        </div>
    );
}

export default RefCount;