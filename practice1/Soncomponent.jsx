function Soncomponent({son}) {
    return(
        <>
        <h1 className="text-4xl">My Two Children</h1>
        <div className="bg-green-700 m-5">
            <h3 className="text-3xl">Son</h3>
            <p>{son.soninfo}</p>
        </div>
        </>
    );
}

export default Soncomponent;