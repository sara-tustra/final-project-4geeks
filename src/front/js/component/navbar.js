import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { BotonFlotante } from "../component/BotonFlotante";
import logo_CGram from "../../img/logo_CGram.jpeg";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg ">
				<div className="container-fluid navbar-dark bg-dark  mt-0">
					<p className="nav-link " id="a-1" href="#!">
						<Link to="/home">
							Code
							<img
								src="https://seeklogo.com/images/C/CG-logo-4EE5B6A65E-seeklogo.com.png"
								className="img-fluid-7"
								alt
							/>
							ram
						</Link>
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
							{/* <li className="nav-item">
								<a className="nav-link " href="#!">
									<Link to="/PerfilUsuario">Perfil de usuario</Link>
								</a>
							</li> */}
							<li className="nav-item">
								<a className="nav-link " href="#!">
									<Link to="/home">Inicio</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#!">
									<Link to="/registro">Registrar</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#!">
									<Link to="/iniciar-sesion">Iniciar sesión</Link>
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
									Más
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
