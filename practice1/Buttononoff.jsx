import React, { useState } from "react";

function ButtonOnOff() {
  const [status, changeState] = useState("ON");

  const toggleStatus = () => {
    changeState(status === "ON" ? "OFF" : "ON");
  };

  let cname = (status === "ON") ? "border-4 m-3 p-3 bg-black text-white rounded-lg" : "border-4 m-3 p-3 bg-white text-black rounded-lg";

  return (
    <>
      <button onClick={toggleStatus} className={cname}>
        Dark Mode: {status}
      </button>
    </>
  );
}

export default ButtonOnOff;