import React from "react";
import Abouts from "./Abouts.jsx";

function About({abc, salary, edu}) {
    return(
        <>
        <h1>I am about section</h1>
        <h2>{abc.name} {salary} {edu.class} </h2>
        
        <Abouts salary={salary} edu={edu}></Abouts>
        </>
    )
}

export default About;