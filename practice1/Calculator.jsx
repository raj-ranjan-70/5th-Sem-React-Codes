import { useReducer } from "react";

function Calculator() {
	const initialState = { a: "", b: "", result: "" };

	function reducer(state, action) {
		switch (action.type) {
			case "SET_A":
				return { ...state, a: action.payload };
			case "SET_B":
				return { ...state, b: action.payload };
			case "ADD": {
				const a = parseFloat(state.a) || 0;
				const b = parseFloat(state.b) || 0;
				return { ...state, result: a + b };
			}
			case "SUB": {
				const a = parseFloat(state.a) || 0;
				const b = parseFloat(state.b) || 0;
				return { ...state, result: a - b };
			}
			case "MUL": {
				const a = parseFloat(state.a) || 0;
				const b = parseFloat(state.b) || 0;
				return { ...state, result: a * b };
			}
			case "DIV": {
				const a = parseFloat(state.a) || 0;
				const b = parseFloat(state.b) || 0;
				const res = b === 0 ? "Error (div by 0)" : a / b;
				return { ...state, result: res };
			}
			case "CLEAR":
				return initialState;
			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="bg-gray-400 min-h-screen w-screen">
			<div>
				<input
					type="number"
					value={state.a}
					onChange={(e) => dispatch({ type: "SET_A", payload: e.target.value })}
					placeholder="First number"
				/>
				<input
					type="number"
					value={state.b}
					onChange={(e) => dispatch({ type: "SET_B", payload: e.target.value })}
					placeholder="Second number"
				/>
			</div>

			<div>
				<button className="border-2 bg-amber-400 m-2 p-2" onClick={() => dispatch({ type: "ADD" })}> Add </button>
				<button className="border-2 bg-blue-400 m-2 p-2" onClick={() => dispatch({ type: "SUB" })}> Subtract </button>
				<button className="border-2 bg-green-400 m-2 p-2" onClick={() => dispatch({ type: "MUL" })}> Multiply </button>
				<button className="border-2 bg-pink-400 m-2 p-2" onClick={() => dispatch({ type: "DIV" })}> Divide </button>
				<button className="border-2 m-2 p-2" onClick={() => dispatch({ type: "CLEAR" })}> Clear </button>
			</div>

			<div>
				<h2>Result: <span className="font-mono">{String(state.result)}</span></h2>
			</div>
		</div>
	);
}

export default Calculator;