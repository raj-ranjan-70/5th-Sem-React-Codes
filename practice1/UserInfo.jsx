
function UserInfo(props) {
    return(
        <div>
            <h4>Name: {props.information.name}</h4>
            <h4>Age: {props.information.age}</h4>
            <h4>Course: {props.information.course}</h4>
        </div>
    );
}

export default UserInfo;