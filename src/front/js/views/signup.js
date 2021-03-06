import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { validateInfo } from "../component/validateInfo";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/signup.scss";
import { Navbar } from "../component/navbar";
import { BotonFlotante } from "../component/BotonFlotante";

export const Signup = props => {
	const { store, actions } = useContext(Context);

	const history = useHistory();

	const [inputName, setInputName] = useState("");
	const [inputLastName, setInputLastName] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [inputPassword2, setInputPassword2] = useState("");
	const [inputTerminos, setInputTerminos] = useState(false);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [inputEmail, setInputEmail] = useState("");

	const handleChange = e => {
		const { name, value, checked } = e.target;
		console.log(name, value);
		if (name === "name") {
			setInputName(value);
		} else if (name === "last_name") {
			setInputLastName(value);
		} else if (name === "email") {
			setInputEmail(value);
		} else if (name === "password") {
			setInputPassword(value);
		} else if (name === "confirm_password") {
			setInputPassword2(value);
		} else if (name === "terminos") {
			setInputTerminos(checked);
		}
	};
	const handleSubmit = e => {
		e.preventDefault();

		if (isSubmitting === false) {
			const errores = validateInfo({
				name: inputName,
				last_name: inputLastName,
				email: inputEmail,
				password: inputPassword,
				password2: inputPassword2
			});

			if (Object.keys(errores).length === 0 && inputTerminos === true) {
				setIsSubmitting(true);
				// actions
				// 	.signup({
				// 		name: inputName,
				// 		last_name: inputLastName,
				// 		email: inputEmail,
				// 		password: inputPassword,
				// 		password2: inputPassword2
				// 	})
				// 	.then(result => {
				// 		props.history.push("/inicio-sesion");
				// 	});
			}

			setErrors(errores);
		}
		actions.registroUsuario(inputName, inputLastName, inputEmail, inputPassword);
		actions.postRegistro(store.perfilUsuario, " http://0.0.0.0:3001/api/register");
		if (isSubmitting === true) history.push("/perfilUsuario");
	};

	return (
		<>
			<div className="container-fluid containerForm">
				<div className="signup-form ">
					<form onSubmit={handleSubmit} className="form" noValidate>
						<h2 className="text-center mb-4">Registrate</h2>
						<hr />
						<div className="form-group mt-5">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<span className="menor fa fa-user" />
									</span>
								</div>
								<input
									className="form-control"
									type="text"
									name="name"
									placeholder="Nombre"
									required="required"
									value={inputName}
									onChange={handleChange}
								/>
							</div>
							{errors.name && <p className="parrafo">{errors.name}</p>}
						</div>
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<span className="menor fa fa-user" />
									</span>
								</div>
								{/* APELLIDO */}
								<input
									className="form-control"
									type="text"
									name="last_name"
									placeholder="Apellido"
									required="required"
									value={inputLastName}
									onChange={handleChange}
								/>
							</div>
							{errors.last_name && <p className="parrafo">{errors.last_name}</p>}
						</div>
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fa fa-paper-plane" />
									</span>
								</div>
								{/* Email */}
								<input
									className="form-control"
									type="email"
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
								{/* Contrase??a */}
								<input
									className="form-control"
									type="password"
									name="password"
									placeholder="Contrase??a"
									required="required"
									value={inputPassword}
									onChange={handleChange}
								/>
							</div>
							{errors.password && <p className="parrafo">{errors.password}</p>}
						</div>
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fa fa-lock" />
										<i className="fa fa-check" />
									</span>
								</div>
								{/* CONFIRMACI??N CONTRASE??A */}
								<input
									className="form-control"
									type="password"
									name="confirm_password"
									placeholder="Confirmar Contrase??a"
									required="required"
									value={inputPassword2}
									onChange={handleChange}
								/>
							</div>
							{errors.password2 && <p className="parrafo">{errors.password2}</p>}
						</div>
						<div className="form-group">
							<p>Minimo 8 caracteres</p>
							<label className="form-check-label mt-4">
								<input
									type="checkbox"
									required="required"
									name="terminos"
									checked={inputTerminos}
									onChange={handleChange}
								/>{" "}
								He le??do y acepto los <a href="/">T??rminos y condiciones</a>
							</label>
						</div>
						<div className="form-group d-flex justify-content-center">
							<button type="submit" className="btn btn-primary btn-lg">
								Registrar
							</button>
						</div>
						<div className="text-center mt-5">
							<p className="mb-0">??Ya tienes cuenta?</p>
							<Link className="text-center mt-0" to="/iniciar-sesion">
								Inicia sesi??n aqu??!
							</Link>
						</div>
					</form>
				</div>
				<BotonFlotante />
			</div>
		</>
	);
};
export default Signup;
