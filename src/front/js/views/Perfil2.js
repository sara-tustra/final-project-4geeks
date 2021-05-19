import React from "react";
import "../../styles/Perfil2.scss";
import { Navbar } from "../component/navbar";
import { BotonFlotante } from "../component/BotonFlotante";

function Perfil2() {
	return (
		<>
			<div className="container">
				<div className="profile-env">
					<header className="row">
						<div className="col-sm-2">
							<a href="#" className="profile-picture">
								<img
									src="https://bootdey.com/img/Content/avatar/avatar7.png"
									className="img-responsive img-circle"
								/>{" "}
							</a>
						</div>
						<div className="col-sm-7">
							<ul className="profile-info-sections">
								<li>
									<div className="profile-name">
										<strong>
											<a href="#">Marting flowtlhrow</a>
											<a
												href="#"
												className="user-status is-online tooltip-primary"
												data-toggle="tooltip"
												data-placement="top"
												data-original-title="Online"
											/>
										</strong>
										<span>
											<a href="#">Co-Founder at Google</a>
										</span>
									</div>
								</li>
								<li>
									<div className="profile-stat">
										<h3>643</h3>
										<span>
											<a href="#">followers</a>
										</span>
									</div>
								</li>
								<li>
									<div className="profile-stat">
										<h3>108</h3>
										<span>
											<a href="#">following</a>
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div className="col-sm-3">
							<div className="profile-buttons" />
						</div>
					</header>
					<section className="profile-info-tabs">
						<div className="row">
							<div className="col-sm-offset-2 col-sm-10">
								<ul className="user-details">
									<li>
										<a href="#">
											<i className="entypo-location" />
											Prishtina
										</a>
									</li>
									<li>
										<a href="#">
											<i className="entypo-suitcase" />
											Works as
											<span>Laborator</span>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="entypo-calendar" />
											16 October
										</a>
									</li>
								</ul>
								{/* tabs for the profile links */}
								<ul className="nav nav-tabs">
									<li className="active">
										<a href="#profile-info">Profile</a>
									</li>
									<li>
										<a href="/PerfilUsuario">Edit Profile</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section className="profile-feed">
						{/* profile post form */}
						<form className="profile-post-form" method="post">
							<textarea
								className="form-control autogrow"
								placeholder="What's on your mind?"
								style={{
									overflow: "hidden",
									wordWrap: "break-word",
									resize: "horizontal",
									height: 80
								}}
								defaultValue={""}
							/>
							<div className="form-options">
								<div className="post-type">
									<a
										href="#"
										className="tooltip-primary"
										data-toggle="tooltip"
										data-placement="bottom"
										title
										data-original-title="Upload a Picture">
										<i className="entypo-camera" />
									</a>
									<a
										href="#"
										className="tooltip-primary"
										data-toggle="tooltip"
										data-placement="bottom"
										title
										data-original-title="Attach a file">
										<i className="entypo-attach" />
									</a>
									<a
										href="#"
										className="tooltip-primary"
										data-toggle="tooltip"
										data-placement="bottom"
										title
										data-original-title="Check-in">
										<i className="entypo-location" />
									</a>
								</div>
								<div className="post-submit">
									<button type="button" className="btn btn-primary">
										POST
									</button>
								</div>
							</div>
						</form>
						{/* profile stories */}
						<div className="profile-stories">
							<article className="story">
								<aside className="user-thumb">
									<a href="#">
										<img
											src="https://bootdey.com/img/Content/avatar/avatar7.png"
											width={44}
											alt
											className="img-circle"
										/>{" "}
									</a>
								</aside>
								<div className="story-content">
									{/* story header */}
									<header>
										<div className="publisher">
											<a href="#">Marting flowtlhrow</a> posted a status update
											<em>3 hours ago</em>
										</div>
										<div className="story-type">
											<i className="entypo-feather" />
										</div>
									</header>
									<div className="story-main-content">
										<p>
											Tolerably earnestly middleton extremely distrusts she boy now not. Add and
											offered prepare how cordial two promise. Greatly who affixed suppose but
											enquire compact prepare all put. Added forth chief trees but rooms think
											may.{" "}
										</p>
									</div>
									{/* story like and comment link */}
									<footer>
										<a href="#" className="liked">
											<i className="entypo-heart" />
											Liked
											<span>(8)</span>
										</a>
										<a href="#">
											<i className="entypo-comment" />
											Comment
											<span>(12)</span>
										</a>
										{/* story comments */}
										<ul className="comments">
											<li>
												<div className="user-comment-thumb">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar1.png"
														alt
														className="img-circle"
														width={30}
													/>
												</div>
												<div className="user-comment-content">
													<a href="#" className="user-comment-name">
														John doe
													</a>
													Tolerably earnestly middleton extremely distrusts she boy now not.
													Add and offered prepare how cordial two promise. Add and offered
													prepare how cordial two promise.
													<div className="user-comment-meta">
														<a href="#" className="comment-date">
															January 4 at 1:11am
														</a>
														-
														<a href="#">
															<i className="entypo-heart" />
															Like
															<span>(2)</span>
														</a>
														-
														<a href="#">
															<i className="entypo-comment" />
															Reply
														</a>
													</div>
												</div>
											</li>
											<li>
												<div className="user-comment-thumb">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar6.png"
														alt
														className="img-circle"
														width={30}
													/>
												</div>
												<div className="user-comment-content">
													<a href="#" className="user-comment-name">
														John doe
													</a>
													Extremity direction existence as dashwoods do up. Securing marianne
													led welcomed offended but offering six raptures. Conveying concluded
													newspaper rapturous oh at.
													<div className="user-comment-meta">
														<a href="#" className="comment-date">
															January 3 at 6:42pm
														</a>
														-
														<a href="#" className="liked">
															<i className="entypo-heart" />
															Liked
														</a>
														-
														<a href="#">
															<i className="entypo-comment" />
															Reply
														</a>
													</div>
												</div>
											</li>
											<li>
												<div className="user-comment-thumb">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar4.png"
														alt
														className="img-circle"
														width={30}
													/>
												</div>
												<div className="user-comment-content">
													<a href="#" className="user-comment-name">
														John doe
													</a>
													Mean if he they been no hold mr. Is at much do made took held help.
													Latter person am secure of estate genius at.
													<div className="user-comment-meta">
														<a href="#" className="comment-date">
															January 2 at 3:25pm
														</a>
														-
														<a href="#">
															<i className="entypo-heart" />
															Like
														</a>
														-
														<a href="#">
															<i className="entypo-comment" />
															Reply
														</a>
													</div>
												</div>
											</li>
											<li className="comment-form">
												<div className="user-comment-thumb">
													<img
														src="https://bootdey.com/img/Content/avatar/avatar6.png"
														alt
														className="img-circle"
														width={30}
													/>
												</div>
												<div className="user-comment-content">
													<textarea
														className="form-control autogrow"
														placeholder="Write a comment..."
														style={{
															overflow: "hidden",
															wordWrap: "break-word",
															resize: "horizontal",
															height: 46
														}}
														defaultValue={""}
													/>
													<button className="btn">
														<i className="entypo-chat" />
													</button>
												</div>
											</li>
										</ul>
									</footer>
									{/* separator */}
									<hr />
								</div>
							</article>
							<div className="text-center">
								<a href="#" className="btn btn-default btn-icon icon-left">
									<i className="entypo-hourglass" />
									Load More …
								</a>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}

export default Perfil2;
