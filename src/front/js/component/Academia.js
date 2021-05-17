import React from "react";
import PropTypes from "prop-types";

const Academia = props => {
	return (
		<>
			<div className="col-md-6">
				<h4>{props.nombre}</h4>
				<h4 className="subheading">
					GetLance makes it easy to connect with clients and begin doing great work.
				</h4>
				<p className="text-muted">{props.descripcion}</p>
			</div>
			<div className="col-md-6 how-img">
				<img src={props.imagen} className="img-fluid-1" alt />
			</div>
		</>
	);
};

Academia.propTypes = {
	nombre: PropTypes.string,
	descripcion: PropTypes.string,
	imagen: PropTypes.string
};

export default Academia;

// {!!props.info ? (
//     <>

//     </>
// ) : (
//     <h3>Cargando...</h3>
// )}
