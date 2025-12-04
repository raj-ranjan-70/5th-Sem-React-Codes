import { useToggle } from "./useToggle";

function ToggleCustomHook() {
    const{toggle, changeToggle} = useToggle(false);

    const style = {backgroundColor: toggle ? "white" : "black", color: toggle ? "black" : "white", height: "100vh", width: "100wh"};

    return (
        <div style={style}>
        <button onClick={changeToggle}>Change Mode</button>
        </div>
    )
}

export default ToggleCustomHook;