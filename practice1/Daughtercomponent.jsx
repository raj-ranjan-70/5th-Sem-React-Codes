function Daughtercomponent({daughter}) {
    return(
        <>
        <div className="bg-blue-200 m-5">
            <h3 className="text-3xl">Daughter</h3>
            <p>{daughter.daughterinfo}</p>
        </div>
        </>
    );
}

export default Daughtercomponent;