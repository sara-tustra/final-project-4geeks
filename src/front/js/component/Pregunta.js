import React from "react";
import PropTypes from "prop-types";

const Pregunta = props => {
	return (
		<>
			<div className="panel-heading" role="tab" id="headingFive">
				<h4 className="panel-title">
					<a
						className="collapsed"
						role="button"
						data-toggle="collapse"
						data-parent="#accordion"
						href="#collapseFive"
						aria-expanded="false"
						aria-controls="collapseFive">
						{props.pregunta}
					</a>
				</h4>
			</div>
			<div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
				<div className="panel-body">
					<p className="text-dark">{props.respuesta} </p>
				</div>
			</div>
		</>
	);
};

Pregunta.propTypes = {
	nombre: PropTypes.string,
	descripcion: PropTypes.string,
	imagen: PropTypes.string
};

export default Pregunta;
