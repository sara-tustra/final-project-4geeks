import React from "react";
import "../../styles/BotonFlotante.scss";
import { Link } from "react-router-dom";

export const BotonFlotante = () => {
	return (
		<>
			<a href="#" className="float">
				<Link to="/Preguntas2" />
				<i className="fa fa-envelope my-float" />
				<Link />
			</a>
			<div className="label-container">
				<div className="label-text">Preguntas frecuentes</div>

				<i className="fa fa-play label-arrow" />
			</div>
		</>
	);
};
