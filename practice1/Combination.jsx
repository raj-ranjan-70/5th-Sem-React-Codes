function Increment({count, increse, decrese}) {
    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increse} className="bg-black text-white border-4 m-4 p-4">Increse</button>
            <button onClick={decrese} className="bg-black text-white border-4 m-4 p-4">Decrese</button>
        </div>
    );
}

export default Increment;