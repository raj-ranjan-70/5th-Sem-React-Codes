import { useContext } from "react";
import {AuthContext} from "./AuthContext.jsx"



function NavBar() {
    const {login, setLogin} = useContext(AuthContext);
    return(
        <>
        <h1>NavBar Component</h1>
        {login ? {}}
        </>
    );
};