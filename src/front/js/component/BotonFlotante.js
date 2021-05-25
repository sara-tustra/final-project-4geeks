import React from "react";
import "../../styles/BotonFlotante.scss";
import { Link } from "react-router-dom";

export const BotonFlotante = () => {
	return (
		<>
			<a href="/Preguntas2" className="float">
				<i className="fa fa-question my-float" />
			</a>
			<div className="label-container">
				<div className="label-text">Preguntas frecuentes</div>

				<i className="fa fa-play label-arrow" />
			</div>
		</>
	);
};
