import React from "react";
import "../../styles/vistaUsuario.scss";

export const VistaUsuario = () => {
	return (
		<>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
			<div className="container bootstrap snippets bootdeys">
				<div className="row" id="user-profile">
					<div className="col-lg-3 col-md-4 col-sm-4">
						<div className="main-box clearfix">
							<h2>John Doe </h2>
							<div className="profile-status">
								<i className="fa fa-check-circle" /> Online
							</div>
							<img
								src="https://bootdey.com/img/Content/avatar/avatar1.png"
								alt
								className="profile-img img-responsive center-block"
							/>
							<div className="profile-label">
								<span className="label label-danger">Admin</span>
							</div>
							<div className="profile-stars">
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star-o" />
								<span>Super User</span>
							</div>
							<div className="profile-since">Member since: Jan 2012</div>
							<div className="profile-details">
								<ul className="fa-ul">
									<li>
										<i className="fa-li fa fa-truck" />
										Orders: <span>456</span>
									</li>
									<li>
										<i className="fa-li fa fa-comment" />
										Posts: <span>828</span>
									</li>
									<li>
										<i className="fa-li fa fa-tasks" />
										Tasks done: <span>1024</span>
									</li>
								</ul>
							</div>
							<div className="profile-message-btn center-block text-center">
								<a href="#" className="btn btn-success">
									<i className="fa fa-envelope" /> Send message
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-9 col-md-8 col-sm-8">
						<div className="main-box clearfix">
							<div className="profile-header">
								<h3>
									<span>User info</span>
								</h3>
								<a href="#" className="btn btn-primary edit-profile">
									<i className="fa fa-pencil-square fa-lg" /> Edit profile
								</a>
							</div>
							<div className="row profile-user-info">
								<div className="col-sm-8">
									<div className="profile-user-details clearfix">
										<div className="profile-user-details-label">First Name</div>
										<div className="profile-user-details-value">John</div>
									</div>
									<div className="profile-user-details clearfix">
										<div className="profile-user-details-label">Last Name</div>
										<div className="profile-user-details-value">Doe</div>
									</div>
									<div className="profile-user-details clearfix">
										<div className="profile-user-details-label">Address</div>
										<div className="profile-user-details-value">
											10880 Malibu Point,
											<br /> Malibu, Calif., 90265
										</div>
									</div>
									<div className="profile-user-details clearfix">
										<div className="profile-user-details-label">Email</div>
										<div className="profile-user-details-value">johndoe@bootdey.com</div>
									</div>
									<div className="profile-user-details clearfix">
										<div className="profile-user-details-label">Phone number</div>
										<div className="profile-user-details-value">011 223 344 556 677</div>
									</div>
								</div>
								<div className="col-sm-4 profile-social">
									<ul className="fa-ul">
										<li>
											<i className="fa-li fa fa-twitter-square" />
											<a href="#">@scjohansson</a>
										</li>
										<li>
											<i className="fa-li fa fa-linkedin-square" />
											<a href="#">John Doe </a>
										</li>
										<li>
											<i className="fa-li fa fa-facebook-square" />
											<a href="#">John Doe </a>
										</li>
										<li>
											<i className="fa-li fa fa-skype" />
											<a href="#">Black_widow</a>
										</li>
										<li>
											<i className="fa-li fa fa-instagram" />
											<a href="#">Avenger_Scarlett</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="tabs-wrapper profile-tabs">
								<ul className="nav nav-tabs">
									<li className="active">
										<a href="#tab-activity" data-toggle="tab">
											Activity
										</a>
									</li>
									<li>
										<a href="#tab-friends" data-toggle="tab">
											Friends
										</a>
									</li>
									<li>
										<a href="#tab-chat" data-toggle="tab">
											Chat
										</a>
									</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane fade in active" id="tab-activity">
										<div className="table-responsive">
											<table className="table">
												<tbody>
													<tr>
														<td className="text-center">
															<i className="fa fa-comment" />
														</td>
														<td>
															John Doe posted a comment in{" "}
															<a href="#">Avengers Initiative</a> project.
														</td>
														<td>2014/08/08 12:08</td>
													</tr>
													<tr>
														<td className="text-center">
															<i className="fa fa-truck" />
														</td>
														<td>
															John Doe changed order status from{" "}
															<span className="label label-primary">Pending</span> to{" "}
															<span className="label label-success">Completed</span>
														</td>
														<td>2014/08/08 12:08</td>
													</tr>
													<tr>
														<td className="text-center">
															<i className="fa fa-check" />
														</td>
														<td>
															John Doe posted a comment in{" "}
															<a href="#">Lost in Translation opening scene</a>{" "}
															discussion.
														</td>
														<td>2014/08/08 12:08</td>
													</tr>
													<tr>
														<td className="text-center">
															<i className="fa fa-users" />
														</td>
														<td>
															John Doe posted a comment in{" "}
															<a href="#">Avengers Initiative</a> project.
														</td>
														<td>2014/08/08 12:08</td>
													</tr>
													<tr>
														<td className="text-center">
															<i className="fa fa-heart" />
														</td>
														<td>
															John Doe changed order status from{" "}
															<span className="label label-warning">On Hold</span> to{" "}
															<span className="label label-danger">Disabled</span>
														</td>
														<td>2014/08/08 12:08</td>
													</tr>
													<tr>
														<td className="text-center">
															<i className="fa fa-check" />
														</td>
														<td>
															John Doe posted a comment in{" "}
															<a href="#">Lost in Translation opening scene</a>{" "}
															discussion.
														</td>
														<td>2014/08/08 12:08</td>
													</tr>
													<tr>
														<td className="text-center">
															<i className="fa fa-truck" />
														</td>
														<td>
															John Doe changed order status from{" "}
															<span className="label label-primary">Pending</span> to{" "}
															<span className="label label-success">Completed</span>
														</td>
														<td>2014/08/08 12:08</td>
													</tr>
													<tr>
														<td className="text-center">
															<i className="fa fa-users" />
														</td>
														<td>
															John Doe posted a comment in{" "}
															<a href="#">Avengers Initiative</a> project.
														</td>
														<td>2014/08/08 12:08</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div className="tab-pane fade" id="tab-friends">
										<ul className="widget-users row">
											<li className="col-md-6">
												<div className="img">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar1.png"
														className="img-responsive"
														alt
													/>
												</div>
												<div className="details">
													<div className="name">
														<a href="#">John Doe </a>
													</div>
													<div className="time">
														<i className="fa fa-clock-o" /> Last online: 5 minutes ago
													</div>
													<div className="type">
														<span className="label label-danger">Admin</span>
													</div>
												</div>
											</li>
											<li className="col-md-6">
												<div className="img">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar1.png"
														className="img-responsive"
														alt
													/>
												</div>
												<div className="details">
													<div className="name">
														<a href="#">Mila Kunis</a>
													</div>
													<div className="time online">
														<i className="fa fa-check-circle" /> Online
													</div>
													<div className="type">
														<span className="label label-warning">Pending</span>
													</div>
												</div>
											</li>
											<li className="col-md-6">
												<div className="img">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar1.png"
														className="img-responsive"
														alt
													/>
												</div>
												<div className="details">
													<div className="name">
														<a href="#">Ryan Gossling</a>
													</div>
													<div className="time online">
														<i className="fa fa-check-circle" /> Online
													</div>
												</div>
											</li>
											<li className="col-md-6">
												<div className="img">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar1.png"
														className="img-responsive"
														alt
													/>
												</div>
												<div className="details">
													<div className="name">
														<a href="#">Robert Downey Jr.</a>
													</div>
													<div className="time">
														<i className="fa fa-clock-o" /> Last online: Thursday
													</div>
												</div>
											</li>
											<li className="col-md-6">
												<div className="img">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar1.png"
														className="img-responsive"
														alt
													/>
												</div>
												<div className="details">
													<div className="name">
														<a href="#">Emma Watson</a>
													</div>
													<div className="time">
														<i className="fa fa-clock-o" /> Last online: 1 week ago
													</div>
												</div>
											</li>
											<li className="col-md-6">
												<div className="img">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar1.png"
														className="img-responsive"
														alt
													/>
												</div>
												<div className="details">
													<div className="name">
														<a href="#">George Clooney</a>
													</div>
													<div className="time">
														<i className="fa fa-clock-o" /> Last online: 1 month ago
													</div>
												</div>
											</li>
											<li className="col-md-6">
												<div className="img">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar1.png"
														className="img-responsive"
														alt
													/>
												</div>
												<div className="details">
													<div className="name">
														<a href="#">Mila Kunis</a>
													</div>
													<div className="time online">
														<i className="fa fa-check-circle" /> Online
													</div>
													<div className="type">
														<span className="label label-warning">Pending</span>
													</div>
												</div>
											</li>
											<li className="col-md-6">
												<div className="img">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar1.png"
														className="img-responsive"
														alt
													/>
												</div>
												<div className="details">
													<div className="name">
														<a href="#">Ryan Gossling</a>
													</div>
													<div className="time online">
														<i className="fa fa-check-circle" /> Online
													</div>
												</div>
											</li>
										</ul>
										<br />
										<a href="#" className="btn btn-success pull-right">
											View all users
										</a>
									</div>
									<div className="tab-pane fade" id="tab-chat">
										<div className="conversation-wrapper">
											<div className="conversation-content">
												<div
													className="slimScrollDiv"
													style={{
														position: "relative",
														overflow: "hidden",
														width: "auto",
														height: 340
													}}>
													<div
														className="conversation-inner"
														style={{
															overflow: "hidden",
															width: "auto",
															height: 340
														}}>
														<div className="conversation-item item-left clearfix">
															<div className="conversation-user">
																<img
																	src="https://bootdey.com/img/Content/avatar/avatar1.png"
																	className="img-responsive"
																	alt
																/>
															</div>
															<div className="conversation-body">
																<div className="name">Ryan Gossling</div>
																<div className="time hidden-xs">
																	September 21, 2013 18:28
																</div>
																<div className="text" />
															</div>
														</div>
														<div className="conversation-item item-right clearfix">
															<div className="conversation-user">
																<img
																	src="https://bootdey.com/img/Content/avatar/avatar1.png"
																	className="img-responsive"
																	alt
																/>
															</div>
															<div className="conversation-body">
																<div className="name">Mila Kunis</div>
																<div className="time hidden-xs">
																	September 21, 2013 12:45
																</div>
																<div className="text" />
															</div>
														</div>
														<div className="conversation-item item-right clearfix">
															<div className="conversation-user">
																<img
																	src="https://bootdey.com/img/Content/avatar/avatar1.png"
																	className="img-responsive"
																	alt
																/>
															</div>
															<div className="conversation-body">
																<div className="name">Mila Kunis</div>
																<div className="time hidden-xs">
																	September 21, 2013 12:45
																</div>
																<div className="text" />
															</div>
														</div>
														<div className="conversation-item item-left clearfix">
															<div className="conversation-user">
																<img
																	src="https://bootdey.com/img/Content/avatar/avatar1.png"
																	className="img-responsive"
																	alt
																/>
															</div>
															<div className="conversation-body">
																<div className="name">Ryan Gossling</div>
																<div className="time hidden-xs">
																	September 21, 2013 18:28
																</div>
																<div className="text" />
															</div>
														</div>
														<div className="conversation-item item-right clearfix">
															<div className="conversation-user">
																<img
																	src="https://bootdey.com/img/Content/avatar/avatar1.png"
																	className="img-responsive"
																	alt
																/>
															</div>
															<div className="conversation-body">
																<div className="name">Mila Kunis</div>
																<div className="time hidden-xs">
																	September 21, 2013 12:45
																</div>
																<div className="text" />
															</div>
														</div>
													</div>
													<div
														className="slimScrollBar"
														style={{
															width: 7,
															position: "absolute",
															top: 0,
															opacity: "0.4",
															display: "block",
															borderRadius: 7,
															zIndex: 99,
															right: 1,
															background: "rgb(0, 0, 0)"
														}}
													/>
													<div
														className="slimScrollRail"
														style={{
															width: 7,
															height: "100%",
															position: "absolute",
															top: 0,
															display: "none",
															borderRadius: 7,
															opacity: "0.2",
															zIndex: 90,
															right: 1,
															background: "rgb(51, 51, 51)"
														}}
													/>
												</div>
											</div>
											<div className="conversation-new-message">
												<form>
													<div className="form-group">
														<textarea
															className="form-control"
															rows={2}
															placeholder="Enter your message..."
															defaultValue={""}
														/>
													</div>
													<div className="clearfix">
														<button type="submit" className="btn btn-success pull-right">
															Send message
														</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
