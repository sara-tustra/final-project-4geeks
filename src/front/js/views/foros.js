import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/foros.scss";

export const Foros = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<>
				<link
					href="http://fonts.googleapis.com/css?family=Montserrat:400,700"
					rel="stylesheet"
					type="text/css"
				/>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<h5 className="card-title btn-dark">Foros Populares</h5>
							{/* begin panel group */}
							<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
								{/* panel 1 */}
								<div className="panel panel-default">
									{/*wrap panel heading in span to trigger image change as well as collapse */}
									<span
										className="side-tab"
										data-target="#tab1"
										data-toggle="tab"
										role="tab"
										aria-expanded="false">
										<div
											className="panel-heading"
											role="tab"
											id="headingOne"
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapseOne"
											aria-expanded="true"
											aria-controls="collapseOne">
											<h4 className="panel-title">1 Bootcamps de programacións</h4>
										</div>
									</span>
									<div
										id="collapseOne"
										className="panel-collapse collapse in"
										role="tabpanel"
										aria-labelledby="headingOne">
										<div className="panel-body">
											{/* Tab content goes here */}
											That fall, as Nadia and Masha got shipped off to prison camps in Siberia,
											South Brooklyn tried to recover from the storm. My dad and I spent a lot of
											time in the same apartment engrossed in separate laptops, separate internet
											missives. He followed Russian news bloggers closely and would update me on
											troubling developments. A rise in protofascist nationalism
										</div>
									</div>
								</div>
								{/* / panel 1 */}
								{/* panel 2 */}
								<div className="panel panel-default">
									{/*wrap panel heading in span to trigger image change as well as collapse */}
									<span
										className="side-tab"
										data-target="#tab2"
										data-toggle="tab"
										role="tab"
										aria-expanded="false">
										<div
											className="panel-heading"
											role="tab"
											id="headingTwo"
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapseTwo"
											aria-expanded="false"
											aria-controls="collapseTwo">
											<h4 className="panel-title collapsed">
												2 Framewoks más buscados por empresas
											</h4>
										</div>
									</span>
									<div
										id="collapseTwo"
										className="panel-collapse collapse"
										role="tabpanel"
										aria-labelledby="headingTwo">
										<div className="panel-body">
											{/* Tab content goes here */}
											tab 2 content
										</div>
									</div>
								</div>
								{/* / panel 2 */}
								{/*  panel 3 */}
								<div className="panel panel-default">
									{/*wrap panel heading in span to trigger image change as well as collapse */}
									<span
										className="side-tab"
										data-target="#tab3"
										data-toggle="tab"
										role="tab"
										aria-expanded="false">
										<div
											className="panel-heading"
											role="tab"
											id="headingThree"
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapseThree"
											aria-expanded="false"
											aria-controls="collapseThree">
											<h4 className="panel-title">3 Terminé mi bootcamp: ahora qué?</h4>
										</div>
									</span>
									<div
										id="collapseThree"
										className="panel-collapse collapse"
										role="tabpanel"
										aria-labelledby="headingThree">
										<div className="panel-body">
											{/* tab content goes here */}
											tab 3 content
										</div>
									</div>
								</div>
							</div>{" "}
							{/* / panel-group */}
						</div>{" "}
						{/* /col-md-4 */}
						<div className="col-md-8">
							{/* begin macbook pro mockup */}
							<div className="md-macbook-pro md-glare">
								<div className="md-lid">
									<div className="md-camera" />
									<div className="md-screen">
										{/* content goes here */}
										<div className="tab-featured-image">
											<div className="tab-content">
												<div className="tab-pane  in active" id="tab1">
													<img
														src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/lenguajes_programacion_odiados_amados_2019.jpg?itok=N85E5HTT"
														alt="tab1"
														className="img img-responsive"
													/>
												</div>
												<div className="tab-pane " id="tab2">
													<img src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/04/8.-Lenguajes-de-programaci%C2%A2n-en-la-era-del-Internet-de-las-Cosas.jpg?w=800" />
												</div>
												<div className="tab-pane fade" id="tab3">
													<img
														src="https://www.chakray.com/wp-content/uploads/2018/12/woman-3597095_1920-1-1.jpg"
														alt="tab1"
														className="img img-responsive"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="md-base" />
							</div>{" "}
							{/* end macbook pro mockup */}
						</div>{" "}
						{/* / .col-md-8 */}
					</div>{" "}
					{/*/ .row */}
				</div>{" "}
				{/* end sidetab container */}
			</>
			<div className="container-fluid text-center">
				<form>
					<div className="row">
						<span className="fa fa-user" />
						<div className="col-2">
							<input type="text" className=" form-control" placeholder="Crear Foro" />
						</div>
					</div>
				</form>
			</div>

			<span>Filtra por lenguaje </span>
			<span className="far fa-gem" />
			<span className="fab fa-js" />
			<span className="fab fa-python" />
			<span className="fab fa-java" />
			<span className="fab fa-php" />
			<span className="fab fa-html5" />
			<span className="fab fa-css3-alt" />
			<br />
			<div className="container-fluid text-center">
				<div className="card w-75 m-auto">
					<div className="card-body">
						<div className="xtz">
							<p>
								Posted by <strong>Jon Snow</strong> 8hrs ago
							</p>
							<h5 className="card-title fab fa-python">Las mejores librerias de Python</h5>
							<br />
						</div>
						<a href="#" className="btn btn-secundary">
							Python
						</a>
						<a href="#" className="btn btn-primary">
							Python
						</a>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta at sem quis
							hendrerit. Aenean ullamcorper, justo sit amet elementum tempus, mi enim imperdiet est, sit
							amet elementum nisl nisi imperdiet leo. Integer vehicula commodo ante congue iaculis. Nam
							quis gravida urna, in pulvinar lacus. Proin at velit id metus sollicitudin commodo. Morbi
							vulputate tortor ac felis maximus lobortis. Donec massa tellus, sodales nec vulputate
							imperdiet, posuere et leo. Donec euismod felis laoreet.
						</p>
						<div className="container-fluid">
							<div className="xtz">
								<div className="primera mx-5 d-inline-block">
									<span className="fas fa-comment-alt" />
									<span>Comentario </span>
								</div>
								<div className="segunda mx-5 d-inline-block">
									<span className="fas fa-share" />
									<span>Compartir </span>
								</div>
								<div className="tercera mx-5 d-inline-block">
									<span className="fas fa-download" />
									<span>Descargar </span>
								</div>
								<div className="cuarta mx-5 d-inline-block">
									<span className="fas fa-flag" />
									<span>Reportar </span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className="card w-75 m-auto">
					<div className="card-body">
						<div className="xtz">
							<p>
								Posted by <strong>Jon Snow</strong> 8hrs ago
							</p>
							<h5 className="card-title fab fa-python">Las mejores librerias de Python</h5>
						</div>
						<br />
						<a href="#" className="btn btn-secundary">
							Python
						</a>
						<a href="#" className="btn btn-primary">
							Python
						</a>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta at sem quis
							hendrerit. Aenean ullamcorper, justo sit amet elementum tempus, mi enim imperdiet est, sit
							amet elementum nisl nisi imperdiet leo. Integer vehicula commodo ante congue iaculis. Nam
							quis gravida urna, in pulvinar lacus. Proin at velit id metus sollicitudin commodo. Morbi
							vulputate tortor ac felis maximus lobortis. Donec massa tellus, sodales nec vulputate
							imperdiet, posuere et leo. Donec euismod felis laoreet.
						</p>
						<div className="container-fluid">
							<div className="xtz">
								<div className="primera mx-5 d-inline-block">
									<span className="fas fa-comment-alt" />
									<span>Comentario </span>
								</div>
								<div className="segunda mx-5 d-inline-block">
									<span className="fas fa-share" />
									<span>Compartir </span>
								</div>
								<div className="tercera mx-5 d-inline-block">
									<span className="fas fa-download" />
									<span>Descargar </span>
								</div>
								<div className="cuarta mx-5 d-inline-block">
									<span className="fas fa-flag" />
									<span>Reportar </span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className="card w-75 m-auto">
					<div className="card-body">
						<div className="xtz">
							<p>
								Posted by <strong>Jon Snow</strong> 8hrs ago
							</p>
							<h5 className="card-title fab fa-python">Las mejores librerias de Python</h5>
						</div>
						<br />
						<a href="#" className="btn btn-secundary">
							Python
						</a>
						<a href="#" className="btn btn-primary">
							Python
						</a>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta at sem quis
							hendrerit. Aenean ullamcorper, justo sit amet elementum tempus, mi enim imperdiet est, sit
							amet elementum nisl nisi imperdiet leo. Integer vehicula commodo ante congue iaculis. Nam
							quis gravida urna, in pulvinar lacus. Proin at velit id metus sollicitudin commodo. Morbi
							vulputate tortor ac felis maximus lobortis. Donec massa tellus, sodales nec vulputate
							imperdiet, posuere et leo. Donec euismod felis laoreet.
						</p>
						<div className="container-fluid">
							<div className="xtz">
								<div className="primera mx-5 d-inline-block">
									<span className="fas fa-comment-alt" />
									<span>Comentario </span>
								</div>
								<div className="segunda mx-5 d-inline-block">
									<span className="fas fa-share" />
									<span>Compartir </span>
								</div>
								<div className="tercera mx-5 d-inline-block">
									<span className="fas fa-download" />
									<span>Descargar </span>
								</div>
								<div className="cuarta mx-5 d-inline-block">
									<span className="fas fa-flag" />
									<span>Reportar </span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className="card w-75 m-auto">
					<div className="card-body">
						<div className="xtz">
							<p>
								Posted by <strong>Jon Snow</strong> 8hrs ago
							</p>
							<h5 className="card-title fab fa-python">Las mejores librerias de Python</h5>
						</div>
						<br />
						<a href="#" className="btn btn-secundary">
							Python
						</a>
						<a href="#" className="btn btn-primary">
							Python
						</a>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta at sem quis
							hendrerit. Aenean ullamcorper, justo sit amet elementum tempus, mi enim imperdiet est, sit
							amet elementum nisl nisi imperdiet leo. Integer vehicula commodo ante congue iaculis. Nam
							quis gravida urna, in pulvinar lacus. Proin at velit id metus sollicitudin commodo. Morbi
							vulputate tortor ac felis maximus lobortis. Donec massa tellus, sodales nec vulputate
							imperdiet, posuere et leo. Donec euismod felis laoreet.
						</p>
						<div className="container-fluid">
							<div className="xtz">
								<div className="primera mx-5 d-inline-block">
									<span className="fas fa-comment-alt" />
									<span>Comentario </span>
								</div>
								<div className="segunda mx-5 d-inline-block">
									<span className="fas fa-share" />
									<span>Compartir </span>
								</div>
								<div className="tercera mx-5 d-inline-block">
									<span className="fas fa-download" />
									<span>Descargar </span>
								</div>
								<div className="cuarta mx-5 d-inline-block">
									<span className="fas fa-flag" />
									<span>Reportar </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
