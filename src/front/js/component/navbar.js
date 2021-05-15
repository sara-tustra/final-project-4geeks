import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg ">
				<div className="container-fluid navbar-dark bg-dark  mt-0">
					<p className="nav-link" id="a-1" href="#!">
						<Link to="/home">CodeGram</Link>
					</p>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item ">
								<a className="nav-link" href="#!">
									<span className="sr-only">(current)</span>
								</a>
							</li>
							{/* <li className="nav-item">
								<a className="nav-link " href="#!">
									<Link to="/Perfil2">Perfil 2</Link>
								</a>
							</li> */}
							<li className="nav-item">
								<a className="nav-link " href="#!">
									<Link to="/PerfilUsuario">Perfil de usuario</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link " href="#!">
									<Link to="/home">Home</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#!">
									<Link to="/registro">Registrarse</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#!">
									<Link to="/iniciar-sesion">Login</Link>
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									More
								</a>
								<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="/foros">
										Foro
									</Link>

									<Link className="dropdown-item" to="/Preguntas2">
										Preguntas Frecuentes
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
