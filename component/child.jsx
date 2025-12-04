
function Child({handler}) {
    return(
        <>
        <h1>This is the Child Component</h1>
        <button onClick={handler}>Greeting from parent</button>
        </>
    )
}

export default Child;