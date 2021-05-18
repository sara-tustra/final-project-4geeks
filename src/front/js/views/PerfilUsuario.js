import React, { useState, useContext } from "react";
import { validateInfo } from "../component/validateInfo";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/perfilUsuario.scss";
import { Navbar } from "../component/navbar";
import { BotonFlotante } from "../component/BotonFlotante";

export const PerfilUsuario = props => {
	const { actions } = useContext(Context);

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
										<h5 className="user-name">Enzo Rios</h5>
										<h6 className="user-email">enzo@gmsil.com</h6>
									</div>
									<div className="about">
										<h5 className="mb-2 text-primary">About</h5>
										<p>
											Im Enzo. Full Stack Designer I enjoy creating user-centric, delightful and
											human experiences.
										</p>
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
										<h6 className="mb-3 text-primary">Personal Details</h6>
									</div>
									{/* NOMBRE */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="fullName">Name</label>
											<input
												className="form-control"
												type="text"
												name="name"
												placeholder="Enter name"
												id="fullName"
												value={inputName}
												onChange={handleChange}
											/>
										</div>
										{errors.name && <p className="parrafo">{errors.name}</p>}
									</div>
									{/* APELLIDO */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="eMail">Last name</label>
											<input
												className="form-control"
												type="text"
												name="last_name"
												placeholder="Enter Last name"
												id="eMail"
												value={inputLastName}
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
												placeholder="Enter Email"
												id="phone"
												value={inputEmail}
												onChange={handleChange}
											/>
										</div>
										{errors.email && <p className="parrafo">{errors.email}</p>}
									</div>
									{/* IDIOMA */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="zIp">Idiom</label>
											<input
												className="form-control"
												type="text"
												name="idiom"
												placeholder="Enter idiom"
												id="sTate"
												value={inputIdiom}
												onChange={handleChange}
											/>
										</div>
										{errors.idiom && <p className="parrafo">{errors.idiom}</p>}
									</div>
								</div>
								<div className="row gutters">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<h6 className="mb-3 text-primary">Address</h6>
									</div>
									{/* Contraseña */}
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="website">Password</label>
											<input
												className="form-control"
												type="password"
												name="password"
												placeholder="Enter password"
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
											<label htmlFor="Street">Confirm password</label>
											<input
												className="form-control"
												type="password"
												name="confirm_password"
												placeholder="confirm password"
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
											<label htmlFor="sTate">Country</label>
											<input
												className="form-control"
												type="text"
												name="country"
												placeholder="Enter country"
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
											<label htmlFor="zIp">City</label>
											<input
												className="form-control"
												type="text"
												name="city"
												placeholder="Enter city"
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
											<button type="button" className="btn btn-outline-primary m-1">
												<Link to="/">to update</Link>
											</button>
											<button type="button" className="btn btn-outline-primary m-1">
												<Link to="/">Home</Link>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<BotonFlotante />
			</div>
		</>
	);
};

export default PerfilUsuario;
