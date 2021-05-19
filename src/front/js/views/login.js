import React, { useContext, useState } from "react";
import { validateLogin } from "../component/validateInfo";
/* import UseForm from "./component/useForm"; */
import "../../styles/signup.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { BotonFlotante } from "../component/BotonFlotante";

export const Login = props => {
	const { store, actions } = useContext(Context);

	const [inputPassword, setInputPassword] = useState("");
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [inputEmail, setInputEmail] = useState("");

	const handleChange = e => {
		const { name, value } = e.target;
		console.log(name, value);
		if (name === "email") {
			setInputEmail(value);
		} else if (name === "password") {
			setInputPassword(value);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (isSubmitting === false) {
			const errores = validateLogin({
				email: inputEmail,
				password: inputPassword
			});

			console.log("hola");
			if (Object.keys(errores).length === 0) {
				setIsSubmitting(true);
				actions
					.signup({
						email: inputEmail,
						password: inputPassword
					})
					.then(result => {
						props.history.push("/inicio-sesion");
					});
			}
			setErrors(errores);
		}
		actions.agregarLogin(inputEmail, inputPassword);
		actions.postFetch(store.usuarioActual, "http://0.0.0.0:3001/api/login");
		// let userToken = localStorage.getItem("token");
		// actions.checkCredentials("http://0.0.0.0:3001/api/profile", userToken);
	};

	return (
		<>
			<div className="container-fluid containerForm">
				<div className="signup-form ">
					<form onSubmit={handleSubmit} className="form" noValidate>
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
									value={inputEmail}
									onChange={handleChange}
								/>
							</div>
							{errors.email && <p className="parrafo">{errors.email}</p>}
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
									value={inputPassword}
									onChange={handleChange}
								/>
							</div>
							{errors.password && <p className="parrafo">{errors.password}</p>}
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
							<button type="submit" className="btn btn-primary btn-lg">
								Ingresar
							</button>
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
			<BotonFlotante />
		</>
	);
};
export default Login;
