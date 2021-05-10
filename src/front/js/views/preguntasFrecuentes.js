import React from "react";
import "../../styles/preguntasFrecuentes.scss";

export const PreguntasFrecuentes = () => (
	<>
		<div className="mb-4 container">
			<h1 className="mt-4 mb-3  titulo_pregunta container-fluid">Preguntas Frecuentes</h1>
			<div className="card">
				<div className="card-header text-dark">
					<h5>¿Dónde de puedo conseguir empleo como programador?</h5>
				</div>

				<div id="respuesta1">
					<div className="card-body text-dark">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					</div>
				</div>
			</div>
			<div className="card">
				<div className="card-header text-dark">
					<h5 className="mb-0 ">¿la edad influye si quiero ser un programador?</h5>
				</div>
				<div id="respuesta2">
					<div className="card-body text-dark">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beata
					</div>
				</div>
			</div>
			<div className="card">
				<div className="card-header text-dark">
					<h5 className="mb-0 ">¿Salario de un programador?</h5>
				</div>

				<div id="respuesta3">
					<div className="card-body text-dark">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
						deleniti atque corrupti quos dolores et quas molestias excepturi.
					</div>
				</div>
			</div>
		</div>
	</>
);
