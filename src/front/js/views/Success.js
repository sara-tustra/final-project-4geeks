import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import WeatherForm from "../component/WeatherForm";
import WeatherInfo from "../component/WeatherInfo";
import App from "../App";
import "../../styles/home.scss";
import { BotonFlotante } from "../component/BotonFlotante";
import { Navbar } from "../component/navbar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<header className="bg-primary py-5 mb-5">
				<div className="container h-100">
					<div className="row h-100 align-items-center">
						<div className="col-lg-12">
							<h1 className="display-4 text-white mt-5 mb-2">Bien Hecho!!</h1>
							<h2 className="display-4 text-white mt-5 mb-2">Tu perfil ha sido actualizado</h2>
						</div>
					</div>
					<div className="row h-100 align-items-center">
						<div className="col-lg-12">
							<button
								type="button"
								className="btn btn-outline-primary m-1"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal">
								<Link to="/foros">Ir a foros</Link>
							</button>
							<div className="col-lg-12">
								<button
									type="button"
									className="btn btn-outline-primary m-1"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal">
									<Link to="/foros">Ir a Inicio</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* Page Content*/}
			<div className="container">
				<div className="row">
					<div className=" col-md-4 mb-5 ">
						<div className="card h-100 ">
							<BotonFlotante />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
