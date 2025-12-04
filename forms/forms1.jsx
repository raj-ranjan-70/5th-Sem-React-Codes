import React, { useState } from "react";

function Forms1() {
  const [name, setName] = useState("");

  const changeHandler = (e) => {
    console.log(e);
    console.log("Value:", e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted! Name: ${name}`);
    setName("");
  };

  return (
    <div className="flex flex-col justify-center items-center m-5 p-5">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
        <label htmlFor="name" className="m-2 p-2">Name:</label>
        <input 
          type="text"
          id="name"
          value={name}
          onChange={changeHandler}
          className="border p-2"
        />
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forms1;
