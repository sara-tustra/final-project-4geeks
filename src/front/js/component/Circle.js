import React from "react";
import "../../styles/Circle.scss";
import { Link } from "react-router-dom";

export const Circle = () => {
	return (
		<>
			<div className="sonar-wrapper">
				<div className="sonar-emitter">
					<div className="sonar-wave" />
				</div>
			</div>
		</>
	);
};
