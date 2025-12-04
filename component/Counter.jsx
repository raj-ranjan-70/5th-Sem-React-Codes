import {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    Increment = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    
    render() {
        return(
            <>
            <h1 className="font-extrabold ">This is a Counter</h1>
            <h2 className="bg-amber-400 font-bold">{this.state.count}</h2>
            <button className="bg-blue-400 font-bold border-4 m-3" onClick={this.Increment}>Click it</button>
            </>
        )
    }
}

export default Counter;