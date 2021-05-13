import React from "react";
import "../../styles/perfilUsuario.scss";

/* import React, { useState } from "react";
import { useLocalStorage } from '../components/useLocalStorage'

import "../css/PerfilUser.css";
import { Link } from "react-router-dom";
import IMG_1020 from "../assets/IMG_1020.JPG";
Expandir
message.txt
17 KB
﻿
import React, { useState } from "react";
import { useLocalStorage } from '../components/useLocalStorage'

import "../css/PerfilUser.css";
import { Link } from "react-router-dom";
import IMG_1020 from "../assets/IMG_1020.JPG";
import Sidebar from "../components/Sidebar"; */

function PerfilUsuario(props) {
	/* HOOK PERSONALIZADO guarda texto en Local STORAGE se usa aplicandoselo a un value */
	/* const [text, setText] = useLocalStorage("text", ""); */

	/* const [name, setName] = useState(""); */

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 col-xl-2 px-0" />

					{/*  FOTO Y DATOS DE PERFIL */}
					<div className="col-12 col-md-9 mt-5 px-5">
						<div className="row gutters-sm">
							<div className="col-12 my-2 col-lg-5 col-xl-4">
								<div className="card bg-transparent card-perfil">
									<div className="card-body perfil">
										<div className="d-flex flex-column align-items-center text-center">
											<img
												src="https://svgsilh.com/svg/2098873.svg"
												alt=""
												className="rounded-circle"
												width={150}
											/>
											<div className="mt-3 text-white">
												<p className="text-white mb-1">Nombre:</p>
												{/* <hr /> */}
												<p className="text-white mb-1">Email:</p>
												<hr />
												<p className="text-white mb-1">País de Residencia: </p>
												{/*  <br></br> */}
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* INPUTS DE ACTUALIZACION */}
							<div className="col-12 my-2 col-lg-7 col-xl-8">
								<div className="card bg-transparent">
									<div className="card-body">
										<div className="row">
											<div className="inputbox col-12 mt-2">
												{/* <label className="text-dark">Nombre y Apellido:</label> */}
												{/* valores deben guardarse en un state */}
												<input
													/* onChange={e => setText(e.target.value)} */
													/* value={text} */
													placeholder="Nombre y Apellido"
													type="text"
													/* ATRIBUTOS TIENEN QUE IR CONECTADOS CON BACKEND  */
													name=""
													className="form-control"
													required="required"
												/>
												{/* modificar input disabled con use state */}
											</div>
										</div>
										<div className="row">
											<div className="inputbox col-12 mt-2">
												{/* <label className="text-dark">Email:</label> */}
												<input
													placeholder="Email"
													type="text"
													/* en name request.json.get // en backend */
													name="email"
													className="form-control"
													required="required"
												/>
											</div>
										</div>
										<div className="row" />
										<div className="row">
											<div className="inputbox col-12 mt-2">
												{/* <label className="text-dark">Dirección:</label> */}
												<input
													placeholder="Dirección"
													type="text"
													name="direccion"
													className="form-control"
													required="required"
												/>
											</div>
										</div>

										{/* CONTRASEÑA se modifica con el BACKEND */}
										<div className="row">
											<div className="inputbox col-12 mt-2">
												{/* <label className="text-dark">Contraseña:</label> */}
												<input
													placeholder="Nueva Contraseña"
													type="password"
													name=""
													className="form-control"
													required="required"
												/>
											</div>
										</div>
										<div className="row">
											<div className="inputbox col-12 mt-2">
												{/* <label className="text-dark">Repetir Contraseña:</label> */}
												<input
													placeholder="Confirma Contraseña"
													type="password"
													name=""
													className="form-control"
													required="required"
												/>
											</div>
										</div>
										<div className="row">
											<button className="btn btn-primary mt-2">Actualizar</button>
										</div>
									</div>
								</div>
							</div>

							{/* CARDS CON BARRAS */}
							<div className="col-12 my-2 col-md-6 col-lg-4">
								<div className="card h-100 bg-transparent">
									<ul className="list-group list-group-flush">
										<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap" />
										<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
											<h6 className="mb-0 ">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={24}
													height={24}
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-github mr-2 icon-inline">
													<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
												</svg>
												Github
											</h6>
											<span className="text-secondary">bootdey</span>
										</li>
										<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
											<h6 className="mb-0">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={24}
													height={24}
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-twitter mr-2 icon-inline text-info">
													<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
												</svg>
												Twitter
											</h6>
											<span className="text-secondary">@bootdey</span>
										</li>
										<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
											<h6 className="mb-0">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={24}
													height={24}
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-instagram mr-2 icon-inline text-danger">
													<rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
													<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
													<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
												</svg>
												Instagram
											</h6>
											<span className="text-secondary">bootdey</span>
										</li>
										<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
											<h6 className="mb-0">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={24}
													height={24}
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-facebook mr-2 icon-inline text-primary">
													<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
												</svg>
												Facebook
											</h6>
											<span className="text-secondary">bootdey</span>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-12 my-2 col-lg-7 col-xl-8">
								<div className="col-xs-12 col-sm-4 ">
									<div className="row">
										<button className="btn btn-primary mt-2">Actualizar</button>
									</div>
								</div>
								<div className="col-xs-12 col-sm-4 ">
									<div className="row">
										<button className="btn btn-primary mt-2">Home </button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PerfilUsuario;
