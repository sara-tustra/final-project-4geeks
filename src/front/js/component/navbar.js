import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
			<Link to="/">
				<span className="text-xl-left navbar-brand mb-0 h1">Code/Gram</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-danger mr-2">Registrarse</button>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h2">Login</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h2">Preguntas Frecuentes</span>
				</Link>
				<Link to="/">
					<span className="text-right navbar-brand mb-0 h2">Inicio</span>
				</Link>
			</div>
		</nav>
	);
};
