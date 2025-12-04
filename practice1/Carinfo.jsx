import React from "react";

function Carinfo({information, year}) {
    return (
        <>
        <p>My fav car name is {information.name} and its model is {information.model}</p>
        <p>But, It must be from year {year[0]}, {year[1]}, and {year[2]}</p>
        </>  
    );
}

export default Carinfo;