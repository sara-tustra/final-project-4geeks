import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg ">
			<div className="container-fluid navbar-dark bg-dark fixed-top mt-0">
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

								<Link className="dropdown-item" to="/preguntas">
									Preguntas frecuentes
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		/*  <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */

		/* <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
			<Link to="/">
				<span className="text-xl-left navbar-brand mb-0 h1">Code/Gram</span>
			</Link>
			<div className="ml-auto">
				<Link to="/registro">
					<button className="btn btn-danger mr-2">Registrarse</button>
				</Link>
				<Link to="/iniciar-sesion">
					<span className="navbar-brand mb-0 h2">Login</span>
				</Link>
				<Link to="/preguntas">
					<span className="navbar-brand mb-0 h2">Preguntas frecuentes</span>
				</Link>
				<Link to="/">
					<span className="text-right btn-secundary navbar-brand mb-0 h2">Inicio</span>
				</Link>
				<Link to="/vista-de-usuario">
					<span className="text-right btn-secundary navbar-brand mb-0 h2">Perfil de usuario</span>
				</Link>
			</div>
		</nav> */
	);
};
