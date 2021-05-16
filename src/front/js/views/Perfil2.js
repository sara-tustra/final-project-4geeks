import React from "react";
import "../../styles/Perfil2.scss";
import { Navbar } from "../component/navbar";
import { BotonFlotante } from "../component/BotonFlotante";

function Perfil2() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<link
							href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
							rel="stylesheet"
						/>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div id="content" className="content content-full-width">
										{/* begin profile */}
										<div className="profile">
											<div className="profile-header">
												{/* BEGIN profile-header-cover */}
												<div className="profile-header-cover" />
												{/* END profile-header-cover */}
												{/* BEGIN profile-header-content */}
												<div className="profile-header-content">
													{/* BEGIN profile-header-img */}
													<div className="profile-header-img">
														<img
															src="https://bootdey.com/img/Content/avatar/avatar7.png"
															alt
														/>
													</div>
													{/* END profile-header-img */}
													{/* BEGIN profile-header-info */}
													<div className="profile-header-info">
														<h4 className="m-t-10 m-b-5">John Doe</h4>
														<p className="m-b-10">Web And Frontend Developer</p>
														<a href="#" className="btn btn-xs btn-success">
															Edit Profile
														</a>
													</div>
													{/* END profile-header-info */}
												</div>
												{/* END profile-header-content */}
												{/* BEGIN profile-header-tab */}
												<ul className="profile-header-tab nav nav-tabs">
													<li className="nav-item">
														<a href="#profile-post" className="nav-link" data-toggle="tab">
															POSTS
														</a>
													</li>
													<li className="nav-item">
														<a
															href="#profile-about"
															className="nav-link active show"
															data-toggle="tab">
															ABOUT
														</a>
													</li>
													<li className="nav-item">
														<a
															href="#profile-photos"
															className="nav-link"
															data-toggle="tab">
															PHOTOS
														</a>
													</li>
													<li className="nav-item">
														<a
															href="#profile-videos"
															className="nav-link"
															data-toggle="tab">
															VIDEOS
														</a>
													</li>
													<li className="nav-item">
														<a
															href="#profile-friends"
															className="nav-link"
															data-toggle="tab">
															FRIENDS
														</a>
													</li>
												</ul>
												{/* END profile-header-tab */}
											</div>
										</div>
										{/* end profile */}
										{/* begin profile-content */}
										<div className="profile-content">
											{/* begin tab-content */}
											<div className="tab-content p-0">
												{/* begin #profile-about tab */}
												<div className="tab-pane fade in active show" id="profile-about">
													{/* begin table */}
													<div className="table-responsive">
														<table className="table table-profile">
															<thead>
																<tr>
																	<th />
																	<th>
																		<h4>
																			Micheal Meyer <small>Lorraine Stokes</small>
																		</h4>
																	</th>
																</tr>
															</thead>
															<tbody>
																<tr className="highlight">
																	<td className="field">Profile</td>
																	<td>
																		<a href="javascript:;">Edit profile</a>
																	</td>
																</tr>
																<tr className="divider">
																	<td colSpan={2} />
																</tr>
																<tr>
																	<td className="field">Name</td>
																	<div className="field">
																		{/* valores deben guardarse en un state */}
																		<input
																			className="llenarform1 "
																			/* onChange={e => setText(e.target.value)}
																			value={text} */
																			placeholder="carlos"
																			type="text"
																			/* ATRIBUTOS TIENEN QUE IR CONECTADOS CON BACKEND  */
																			name="name"
																			/* className="form-control" */
																			required="required"
																		/>
																		{/* modificar input disabled con use state */}
																	</div>
																</tr>
																<tr>
																	<td className="field">Last name</td>
																	<td>
																		<div className="field">
																			{/* valores deben guardarse en un state */}
																			<input
																				className="llenarform"
																				/* onChange={e => setText(e.target.value)}
																				value={text} */
																				placeholder="Rios"
																				type="text"
																				/* ATRIBUTOS TIENEN QUE IR CONECTADOS CON BACKEND  */
																				name="name"
																				/* className="form-control" */
																				required="required"
																			/>
																			{/* modificar input disabled con use state */}
																		</div>
																	</td>
																</tr>
																<tr>
																	<td className="field">Email</td>
																	<td>
																		<div className="field">
																			{/* valores deben guardarse en un state */}
																			<input
																				className="llenarform"
																				/* onChange={e => setText(e.target.value)}
																				value={text} */
																				placeholder="carlos@gmail.com"
																				type="text"
																				/* ATRIBUTOS TIENEN QUE IR CONECTADOS CON BACKEND  */
																				name="name"
																				/* className="form-control" */
																				required="required"
																			/>
																			{/* modificar input disabled con use state */}
																		</div>
																	</td>
																</tr>

																<tr className="highlight">
																	<td className="field">About Me</td>
																	<td>
																		<a href="javascript:;">Add Description</a>
																	</td>
																</tr>

																<tr>
																	<td className="field">Country/Region</td>
																	<td>
																		<select
																			className="form-control input-inline input-xs"
																			name="region">
																			<option value="US" selected>
																				España
																			</option>
																			<option value="AF">Argentina</option>
																			<option value="AL">Chile</option>
																			<option value="AS">Brasil</option>
																			<option value="DZ">Bolivia</option>
																			<option value="AD">Peru</option>
																			<option value="AO">Venezuela</option>
																		</select>
																	</td>
																</tr>

																<tr>
																	<td className="field">Language</td>
																	<td>
																		<select
																			className="form-control input-inline input-xs"
																			name="language">
																			<option value="US" selected>
																				English
																			</option>

																			<option value="AL">Español</option>
																		</select>
																	</td>
																</tr>

																<tr className="highlight">
																	<td className="field">&nbsp;</td>
																	<td className="p-t-10 p-b-10">
																		<button
																			type="submit"
																			className="btn btn-primary width-150">
																			Actualizar
																		</button>
																		<button
																			type="submit"
																			className="btn btn-white btn-white-without-border width-150 m-l-5">
																			Home
																		</button>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>

													{/* end table */}
												</div>
												{/* end #profile-about tab */}
											</div>
											{/* end tab-content */}
										</div>
										{/* end profile-content */}
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

export default Perfil2;
