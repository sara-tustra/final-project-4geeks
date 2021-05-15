import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import Signup from "./views/signup";
import Login from "./views/login";
import { Academias } from "./views/academias";
import { Foros } from "./views/foros";
import { VistaUsuario } from "./views/VistaUsuario";
import { Lenguajes } from "./views/Lenguajes";
import Carusel from "./component/Carusel";
import { AreasProgramacion } from "./views/AreasProgramacion";
import PerfilUsuario from "./views/PerfilUsuario";
import Perfil2 from "./views/Perfil2";
import UseForm from "./component/useForm";
import { Preguntas2 } from "./views/preguntas2";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/registro">
							<Signup />
						</Route>
						<Route exact path="/iniciar-sesion">
							<Login />
						</Route>
						<Route exact path="/academias">
							<Academias />
						</Route>
						<Route exact path="/foros">
							<Foros />
						</Route>
						<Route exact path="/vista-de-usuario">
							<VistaUsuario />
						</Route>
						<Route exact path="/carusel">
							<Carusel />
						</Route>

						<Route exact path="/home">
							<Home />
						</Route>

						<Route exact path="/Lenguajes">
							<Lenguajes />
						</Route>

						<Route exact path="/AreasProgramacion">
							<AreasProgramacion />
						</Route>

						<Route exact path="/PerfilUsuario">
							<PerfilUsuario />
						</Route>
						<Route exact path="/Botones">
							<Botones />
						</Route>

						<Route exact path="/Perfil2">
							<Perfil2 />
						</Route>

						<Route exact path="/Preguntas2">
							<Preguntas2 />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
