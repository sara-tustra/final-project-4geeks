import React from "react";
import "../../styles/preguntas2.scss";

export const Preguntas2 = () => (
	<>
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title text-center wow zoomIn text-white">
						<h1>Preguntas frecuentes</h1>
						<span />
						<p>Click para ver preguntas frecuentes.</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingOne">
								<h4 className="panel-title">
									<a
										role="button"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne">
										¿Dónde de puedo conseguir empleo como programador?
									</a>
								</h4>
							</div>
							<div
								id="collapseOne"
								className="panel-collapse collapse in"
								role="tabpanel"
								aria-labelledby="headingOne">
								<div className="panel-body">
									<p className="text-dark">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem,
										dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu
										tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit
										posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit
										amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque
										at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum
										ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam
										vitae. Curabitur molestie eros.{" "}
									</p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingTwo">
								<h4 className="panel-title">
									<a
										className="collapsed"
										role="button"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo">
										¿La edad influye si quiero ser un programador?
									</a>
								</h4>
							</div>
							<div
								id="collapseTwo"
								className="panel-collapse collapse"
								role="tabpanel"
								aria-labelledby="headingTwo">
								<div className="panel-body">
									<p className="text-dark">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem,
										dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu
										tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit
										posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit
										amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque
										at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum
										ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam
										vitae. Curabitur molestie eros.{" "}
									</p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingThree">
								<h4 className="panel-title">
									<a
										className="collapsed"
										role="button"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree">
										¿Salario de un programador?
									</a>
								</h4>
							</div>
							<div
								id="collapseThree"
								className="panel-collapse collapse"
								role="tabpanel"
								aria-labelledby="headingThree">
								<div className="panel-body">
									<p className="text-dark">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem,
										dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu
										tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit
										posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit
										amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque
										at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum
										ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam
										vitae. Curabitur molestie eros.{" "}
									</p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingFour">
								<h4 className="panel-title">
									<a
										className="collapsed"
										role="button"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapseFour"
										aria-expanded="false"
										aria-controls="collapseFour">
										¿Cuanto tiempo debo estudiar para poder programar?
									</a>
								</h4>
							</div>
							<div
								id="collapseFour"
								className="panel-collapse collapse"
								role="tabpanel"
								aria-labelledby="headingFour">
								<div className="panel-body">
									<p className="text-dark">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem,
										dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu
										tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit
										posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit
										amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque
										at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum
										ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam
										vitae. Curabitur molestie eros.{" "}
									</p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
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
										¿Puedo trabajar en otro pais como programador?
									</a>
								</h4>
							</div>
							<div
								id="collapseFive"
								className="panel-collapse collapse"
								role="tabpanel"
								aria-labelledby="headingFive">
								<div className="panel-body">
									<p className="text-dark">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem,
										dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu
										tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit
										posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit
										amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque
										at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum
										ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam
										vitae. Curabitur molestie eros.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*- END COL */}
			</div>
			{/*- END ROW */}
		</div>
	</>
);
