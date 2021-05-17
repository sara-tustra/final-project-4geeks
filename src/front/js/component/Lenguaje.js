import React from "react";
import PropTypes from "prop-types";

const Lenguaje = props => {
	return (
		<>
			<div className="col-md-6 how-img">
				<img src={props.imagen} className="img-fluid" alt />
			</div>
			<div className="col-md-6">
				<h4>{props.nombre}</h4>
				<h4 className="subheading">
					GetLance is a great place to find more clients, and to run and grow your own freelance business.
				</h4>
				<p className="text-muted">{props.descripcion}</p>
			</div>
		</>
	);
};

Lenguaje.propTypes = {
	nombre: PropTypes.string,
	descripcion: PropTypes.string,
	imagen: PropTypes.string
};

export default Lenguaje;
