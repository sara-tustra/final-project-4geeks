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
