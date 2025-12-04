import { useState } from "react";
import Child from "./child.jsx";

function Parent() {
    let [data, setData] = useState(0);
    const handler = () => {
        console.log("Hello from Parent");
    }

    return(
        <>
        <h1 className="bg-amber-400">Data: {data}</h1>
        <button onClick={() => setData(data + 1)}>Increment</button>
        <Child handler={handler} />
        </>
    )
}

export default Parent;