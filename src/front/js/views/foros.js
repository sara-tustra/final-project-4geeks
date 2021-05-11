import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/foros.scss";

export const Foros = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Foro</h1>
			<p>
				<img src="https://www.tecnologicahn.com/img/Desarrollodesoftware2.png" />
			</p>
			<div className="card2 card" style={{ width: "18rem" }}>
				<div className="card-body">
					<h5 className="card-title btn-dark">Foros Populares</h5>
					<p className="card-text">1 Bootcamps de programación</p>
					<p className="card-text">2 Framewoks más buscados por empresas</p>
					<p className="card-text">3 Terminé mi bootcamp: ahora qué?</p>
				</div>
			</div>
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
