import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
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
					</ul>
					<div className="dropdown">
						<a
							className="btn btn-secondary dropdown-toggle"
							href="#"
							role="button"
							id="dropdownMenuLink"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Dropdown link
						</a>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li>
								<a className="dropdown-item " href="#!">
									<Link to="/home">Home</Link>
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
		/*  <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
