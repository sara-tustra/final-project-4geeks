import React from "react";
import "../../styles/perfilUsuario.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { BotonFlotante } from "../component/BotonFlotante";

function PerfilUsuario(props) {
	return (
		<>
			<div className="container">
				<div className="row gutters">
					<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
						<div className="card h-100">
							<div className="card-body">
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
							<div className="card-body">
								<div className="row gutters">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<h6 className="mb-3 text-primary">Personal Details</h6>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="fullName">Name</label>
											<input
												type="text"
												className="form-control"
												id="fullName"
												placeholder="Enter name"
											/>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="eMail">Last name</label>
											<input
												type="email"
												className="form-control"
												id="eMail"
												placeholder="Enter Last name"
											/>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="phone">Email</label>
											<input
												type="text"
												className="form-control"
												id="phone"
												placeholder="Enter Email"
											/>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="website">Languages</label>
											<input
												type="url"
												className="form-control"
												id="website"
												placeholder="Enter Languages"
											/>
										</div>
									</div>
								</div>
								<div className="row gutters">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<h6 className="mb-3 text-primary">Address</h6>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="Street">Street</label>
											<input
												type="name"
												className="form-control"
												id="Street"
												placeholder="Enter Street"
											/>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="ciTy">City</label>
											<input
												type="name"
												className="form-control"
												id="ciTy"
												placeholder="Enter City"
											/>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="sTate">State</label>
											<input
												type="text"
												className="form-control"
												id="sTate"
												placeholder="Enter State"
											/>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label htmlFor="zIp">Zip Code</label>
											<input
												type="text"
												className="form-control"
												id="zIp"
												placeholder="Zip Code"
											/>
										</div>
									</div>
								</div>
								<div className="row gutters">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="text-right">
											<button type="button" className="btn btn-outline-primary m-1">
												<Link to="/home">to update</Link>
											</button>
											<button type="button" className="btn btn-outline-primary m-1">
												<Link to="/home">Home</Link>
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
}

export default PerfilUsuario;
