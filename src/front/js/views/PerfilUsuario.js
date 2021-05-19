import React, { useState, useContext } from "react";
import { validateInfo } from "../component/validateInfo";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/perfilUsuario.scss";
import { Navbar } from "../component/navbar";
import { BotonFlotante } from "../component/BotonFlotante";

export const PerfilUsuario = props => {
	const { store, actions } = useContext(Context);

	const [inputName, setInputName] = useState("");
	const [inputLastName, setInputLastName] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [inputPassword2, setInputPassword2] = useState("");
	const [inputCountry, setInputCountry] = useState("");
	const [inputCity, setInputCity] = useState("");
	const [inputIdiom, setInputIdiom] = useState("");
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;
		console.log(name, value);
		if (name === "name") {
			setInputName(value);
		} else if (name === "last_name") {
			setInputLastName(value);
		} else if (name === "email") {
			setInputEmail(value);
		} else if (name === "password") {
			setInputPassword(value);
		} else if (name === "password2") {
			setInputPassword2(value);
		} else if (name === "country") {
			setInputCountry(value);
		} else if (name === "city") {
			setInputCity(value);
		} else if (name === "idiom") {
			setInputIdiom(value);
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
				password2: inputPassword2,
				country: inputCountry,
				city: inputCity,
				idiom: inputIdiom
			});

			if (Object.keys(errores).length === 0 && inputCountry === true) {
				setIsSubmitting(true);
				actions
					.perfilUsuario({
						name: inputName,
						last_name: inputLastName,
						email: inputEmail,
						password: inputPassword,
						password2: inputPassword2,
						country: inputCountry,
						city: inputCity,
						idiom: inputIdiom
					})
					.then(result => {
						props.history.push("/home");
					});
			}

			setErrors(errores);
		}
	};
	return (
		<>
			<div className="container">
				<div className="row gutters">
					<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
						<div className="card h-100">
							<div className="card-body-1">
								<div className="account-settings">
									<div className="user-profile">
										<div className="user-avatar">
											<img
												src="https://i.pinimg.com/originals/a6/51/8f/a6518fc3ec56e4681ce9db19ba54e55f.jpg"
												alt="Maxwell Admin"
											/>
										</div>
										<h5 className="user-name">Sarai Santiago</h5>
										<h6 className="user-email" />
										saraisantiagom@gmail.com
									</div>
									<div className="about">
										<h5 className="mb-2 text-primary">Sobre mi</h5>
										<p>Estoy iniciándome en el mundo de la programación!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
						<div className="card-10 h-100">
							<div className="card-body-1">
								<div className="row gutters">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<h6 className="mb-3 text-primary">Detalles personales</h6>
									</div>
									{/* NOMBRE */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="fullName">Nombre</label>
											<input
												className="form-control"
												type="text"
												name="name"
												placeholder="Escribe tu nombre"
												id="fullName"
												value={!!inputName ? "Sarai" : inputName}
												onChange={handleChange}
											/>
										</div>
										{errors.name && <p className="parrafo">{errors.name}</p>}
									</div>
									{/* APELLIDO */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="eMail">Apellido</label>
											<input
												className="form-control"
												type="text"
												name="last_name"
												placeholder="Escribe tu apellido"
												id="eMail"
												value={!inputLastName ? "Santiago" : inputLastName}
												onChange={handleChange}
											/>
										</div>
										{errors.last_name && <p className="parrafo">{errors.last_name}</p>}
									</div>
									{/* Email */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="phone">Email</label>
											<input
												className="form-control"
												type="email"
												name="email"
												placeholder="Escribe tu email"
												id="phone"
												value={!inputEmail ? "saraisantiagom@gmail.com" : inputEmail}
												onChange={handleChange}
											/>
										</div>
										{errors.email && <p className="parrafo">{errors.email}</p>}
									</div>
									{/* IDIOMA */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="zIp">Idioma</label>
											<input
												className="form-control"
												type="text"
												name="idiom"
												placeholder="Escribe qué idioma prefieres"
												id="sTate"
												value=""
												onChange={handleChange}
											/>
										</div>
										{errors.idiom && <p className="parrafo">{errors.idiom}</p>}
									</div>
								</div>
								<div className="row gutters">
									{/* Contraseña */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="website">Contraseña</label>
											<input
												className="form-control"
												type="password"
												name="password"
												placeholder="Ingresa tu contraseña"
												id="website"
												value={inputPassword}
												onChange={handleChange}
											/>
										</div>
										{errors.password && <p className="parrafo">{errors.password}</p>}
									</div>
									{/* CONFIRMACIÓN CONTRASEÑA */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="Street">Confirma tu contraseña</label>
											<input
												className="form-control"
												type="password"
												name="confirm_password"
												placeholder="Confirma tu contraseña"
												id="Street"
												value={inputPassword2}
												onChange={handleChange}
											/>
										</div>
										{errors.password2 && <p className="parrafo">{errors.password2}</p>}
									</div>
									{/* COUNTRY */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="sTate">País</label>
											<input
												className="form-control"
												type="text"
												name="country"
												placeholder="Escribe tu país"
												id="sTate"
												value={inputCountry}
												onChange={handleChange}
											/>
										</div>
										{errors.country && <p className="parrafo">{errors.country}</p>}
									</div>
									{/* CITY */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="zIp">Ciudad</label>
											<input
												className="form-control"
												type="text"
												name="city"
												placeholder="Escribe tu país"
												id="sTate"
												value={inputCity}
												onChange={handleChange}
											/>
										</div>
										{errors.city && <p className="parrafo">{errors.city}</p>}
									</div>
								</div>
								<div className="row gutters">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="text-right">
											<button
												type="button"
												className="btn btn-outline-primary m-1"
												data-bs-toggle="modal"
												data-bs-target="#exampleModal">
												<Link to="/foros">Actualizar</Link>
											</button>

											<button type="button" className="btn btn-outline-primary m-1">
												<Link to="/">Volver al principio</Link>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="row justify-content-center m-auto p-auto">
						<div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
							<div className="card-10 h-100">
								<div className="card-body-1">
									<div className="row gutters justify-content-center">
										<div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12">
											<h2>BIEN HECHO!!</h2>
											<h3>Tus datos han sido actualizados</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
				<BotonFlotante />
			</div>
		</>
	);
};

export default PerfilUsuario;
