import { useState } from "react";

export function useToggle(initialValue = false) {
    const [toggle, setToggle] = useState(initialValue);

    const changeToggle = () => {
        setToggle(!toggle);
    }

    return {toggle, changeToggle};
}