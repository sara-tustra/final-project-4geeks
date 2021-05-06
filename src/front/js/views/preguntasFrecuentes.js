import React from "react";
import "../../styles/preguntasFrecuentes.scss";

export const PreguntasFrecuentes = () => (
	<>
		<h1 className="mt-4 mb-3 font-weight-light titulo_ayuda">Preguntas Frecuentes</h1>
		<div className="mb-4" id="accordion" role="tablist" aria-multiselectable="true">
			<div className="card">
				<div className="card-header color_pregunta" role="tab" id="headingSeven">
					<h5 className="mb-0 font-weight-light">
						<a
							className="tex_pregunta"
							data-toggle="collapse"
							data-parent="#accordion"
							href="#collapseSeven"
							/* aria-expanded="true" */
							aria-controls="collapseSeven">
							¿Dónde de puedo conseguir empleo como programador?
						</a>
					</h5>
				</div>

				<div id="collapseSeven" className="collapse show" role="tabpanel" aria-labelledby="headingSeven">
					<div className="card-body nuestra_historia">
						Debes registrarte como cliente en nuestra plataforma e ingresar a tu perfil para realizar
						reservas.
					</div>
				</div>
			</div>
			<div className="card">
				<div className="card-header color_pregunta" role="tab" id="headingEight">
					<h5 className="mb-0 font-weight-light">
						<a
							className="collapsed tex_pregunta"
							data-toggle="collapse"
							data-parent="#accordion"
							href="#collapseEight"
							/* aria-expanded="false" */
							aria-controls="collapseEight">
							¿la edad influye si quiero ser un programador?
						</a>
					</h5>
				</div>
				<div id="collapseEight" className="collapse" role="tabpanel" aria-labelledby="headingEight">
					<div className="card-body nuestra_historia">
						TODO CLEAN se encuentra disponible para todas las comunas de la Región Metropolitana. ¡Pronto
						estaremos llegando a más regiones del país!.
					</div>
				</div>
			</div>
			<div className="card text-decoration-none ">
				<div className="card-header color_pregunta" role="tab" id="headingNine">
					<h5 className="mb-0 font-weight-light">
						<a
							className="collapsed tex_pregunta"
							data-toggle="collapse"
							data-parent="#accordion"
							href="#collapseNine"
							/* aria-expanded="false" */
							aria-controls="collapseNine">
							¿Salario de un programador?
						</a>
					</h5>
				</div>

				<div id="collapseNine" className="collapse" role="tabpanel" aria-labelledby="headingNine">
					<div className="card-body nuestra_historia">
						Nuestra plataforma actúa como intermediario entre los «Clientes» y los «Trabajadores», el valor
						de los servicios es fijo y a estos se les carga una comisión por nuestra intervención, lo demás
						es pagado a cada trabajador de forma quincenal a sus cuentas personales.
					</div>
				</div>
			</div>
		</div>
	</>
);
