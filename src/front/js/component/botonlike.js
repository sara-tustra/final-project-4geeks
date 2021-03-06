import React, { useState } from "react";
import "../../styles/botones.scss";

function Botonlike() {
	const [count, setCount] = useState(0);

	function incrementCount() {
		setCount(prevCount => prevCount + 1);
	}

	return (
		<>
			<div className="iconooo">
				<button onClick={incrementCount}>
					<i className="fas fa-thumbs-up" />
					<span>{count}</span>
				</button>
			</div>
		</>
	);
}

export default Botonlike;

/* import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/botones.scss";

export class Botones extends Component {
	constructor(props) {
		super(props);

		this.incrementar = this.incrementar.bind(this);

		this.state = {
			contador: 0
		};
	}
	incrementar() {
		console.log("EL usuario le dio click al boton", this);
		this.setState({
			contador: this.state.contador + 1
		});
	}
	render() {
		return (
			<div className="container">
				<button onClick={this.incrementar} className="txpro">
					<i className="fas fa-thumbs-up" />
				</button>
				<div>{this.state.contador}</div>
			</div>
		);
	}
}
 */
