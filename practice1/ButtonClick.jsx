import React, { useState } from "react";

function ButtonClick() {

    let[state, setstate] = useState(1);


    return (
        <>
        <button onClick={() => {
            setTimeout(() => {
            state = 0;
            alert("Button is disabled now");
        }, 5000);
        }}>Click me!</button>
        </>
    );
}

export default ButtonClick;