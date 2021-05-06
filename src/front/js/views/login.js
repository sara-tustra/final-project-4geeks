import React from "react";

import "../../styles/signup.scss";
import { Link } from "react-router-dom";

export const Login = () => (
	<div className="container-fluid containerForm">
		<div className="signup-form ">
			<form action="" method="post">
				<h2 className="text-center mb-4">Ingresa</h2>
				<hr />
				<div className="form-group mt-5">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<i className="fa fa-paper-plane" />
							</span>
						</div>
						<input
							type="email"
							className="form-control"
							name="email"
							placeholder="Correo"
							required="required"
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<i className="fa fa-lock" />
							</span>
						</div>
						<input
							type="password"
							className="form-control"
							name="password"
							placeholder="Contraseña"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group">
					<label className="form-check-label mt-4">
						<input type="checkbox" required="required" /> Recordar usurario
					</label>
				</div>
				<div className="text-center mb-2">
					<Link className="text-center" to="">
						¿Olvidaste tu contraseña?
					</Link>
				</div>
				<div className="form-group d-flex justify-content-center">
					<Link className="text-center mt-0" to="/vista-de-usuario">
						<button type="submit" className="btn btn-primary btn-lg">
							Ingresar
						</button>
					</Link>
				</div>

				<div className="text-center mt-5">
					<p className="mb-0">¿No estas registrado?</p>
					<Link className="text-center mt-0" to="/registro">
						Registrate aqui!
					</Link>
				</div>
			</form>
		</div>
	</div>
);
