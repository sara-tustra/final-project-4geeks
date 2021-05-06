import React from "react";
import "../../styles/preguntasFrecuentes.scss";

export const PreguntasFrecuentes = () => (
	<>
		<h1 className="mt-4 mb-3  titulo_pregunta">Preguntas Frecuentes</h1>
		<div className="mb-4">
			<div className="card">
				<div className="card-header ">
					<h5>¿Dónde de puedo conseguir empleo como programador?</h5>
				</div>

				<div id="collapseSeven">
					<div className="card-body">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					</div>
				</div>
			</div>
			<div className="card">
				<div className="card-header color_pregunta" role="tab" id="headingEight">
					<h5 className="mb-0 ">¿la edad influye si quiero ser un programador?</h5>
				</div>
				<div id="collapseEight" className="collapse show" role="tabpanel" aria-labelledby="headingEight">
					<div className="card-body nuestra_historia">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beata
					</div>
				</div>
			</div>
			<div className="card">
				<div className="card-header color_pregunta" role="tab" id="headingNine">
					<h5 className="mb-0 ">¿Salario de un programador?</h5>
				</div>

				<div id="collapseNine" className="collapse show" role="tabpanel" aria-labelledby="headingNine">
					<div className="card-body nuestra_historia">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
						deleniti atque corrupti quos dolores et quas molestias excepturi.
					</div>
				</div>
			</div>
		</div>
	</>
);
