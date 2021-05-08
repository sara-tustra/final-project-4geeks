import React from "react";
import "../../styles/vistaUsuario.scss";

export const VistaUsuario = () => {
	return (
		<>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
			<div className="container">
				<div className="page-profile">
					<div className="row">
						{/* COL 1 */}
						<div className="col-md-3">
							<section className="panel">
								<div className="panel-body noradius padding-10">
									<figure className="margin-bottom-10">
										{/* image */}
										<img
											id="imagen-perfil"
											className="img-responsive"
											src="https://bootdey.com/img/Content/avatar/avatar1.png"
											alt
										/>
									</figure>
									{/* /image */}
									{/* progress bar */}
									<h6 className="progress-head">
										Profile Completion <span className="pull-right">60%</span>
									</h6>
									<div className="progress progress-xs">
										<div className="progress-bar" role="progressbar" style={{ width: "60%" }} />
									</div>
									{/* /progress bar */}
									{/* updated */}
									<ul className="list-unstyled size-13">
										<li className="text-gray">
											<i className="fa fa-check" /> Update Your Birthday
										</li>
										<li className="text-gray">
											<i className="fa fa-check" /> Update Profile Picture
										</li>
										<li>Confirm Your Account</li>
										<li>Update Your Address</li>
									</ul>
									{/* /updated */}
									<hr className="half-margins" />
									{/* About */}
									<h3 className="text-black">
										Melisa Doe
										<small className="text-gray size-14"> / CEO</small>
									</h3>
									<p className="size-12">
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
										euismod tincidunt laoreet dolore magna aliquam tincidunt erat volutpat laoreet
										dolore magna aliquam tincidunt erat volutpat.
									</p>
									{/* /About */}
									<hr className="half-margins" />
									{/* Social */}
									<h6>Follow Me</h6>
									<a href="#" className="btn ico-only btn-facebook btn-xs" title="Facebook">
										<i className="fa fa-facebook" />
									</a>
									<a href="#" className="btn ico-only btn-twitter btn-xs" title="Twitter">
										<i className="fa fa-twitter" />
									</a>
									<a href="#" className="btn ico-only btn-google-plus btn-xs" title="Google plus">
										<i className="fa fa-google-plus" />
									</a>
									<a href="#" className="btn ico-only btn-linkedin btn-xs" title="Linked In">
										<i className="fa fa-linkedin" />
									</a>
									<a href="#" className="btn ico-only btn-pinterest btn-xs" title="Pinterest">
										<i className="fa fa-pinterest" />
									</a>
									<a href="#" className="btn ico-only btn-flickr btn-xs" title="Flickr">
										<i className="fa fa-flickr" />
									</a>
									<a href="#" className="btn ico-only btn-tumblr btn-xs" title="Tumblr">
										<i className="fa fa-tumblr" />
									</a>
									<a href="#" className="btn ico-only btn-skype btn-xs" title="Skype">
										<i className="fa fa-skype" />
									</a>
									<a
										href="#"
										className="btn ico-only btn-stackoverflow btn-xs"
										title="Stack Overflow">
										<i className="fa fa-stack-overflow" />
									</a>
									<a href="#" className="btn ico-only btn-instagram btn-xs" title="Instagram">
										<i className="fa fa-instagram" />
									</a>
									<a href="#" className="btn ico-only btn-dribbble btn-xs" title="Dribble">
										<i className="fa fa-dribbble" />
									</a>
									<a href="#" className="btn ico-only btn-youtube btn-xs" title="Youtube">
										<i className="fa fa-youtube" />
									</a>
									<a href="#" className="btn ico-only btn-vimeo btn-xs" title="Vimeo">
										<i className="fa fa-vimeo-square" />
									</a>
									<a href="#" className="btn ico-only btn-rss btn-xs" title="Rss">
										<i className="fa fa-rss" />
									</a>
									{/* /Social */}
								</div>
							</section>
						</div>
						{/* /COL 1 */}
						{/* COL 2 */}
						<div className="col-md-5">
							<div className="tabs white nomargin-top">
								<div className="tab-content">
									{/* Overview */}
									<div id="overview" className="tab-pane active">
										<form className="well">
											<textarea
												rows={2}
												className="form-control"
												placeholder="What's on your mind?"
												defaultValue={""}
											/>
											<div className="margin-top-10">
												<button type="submit" className="btn btn-sm btn-primary pull-right">
													Post
												</button>
												<a
													href="#"
													className="btn btn-link profile-btn-link"
													data-toggle="tooltip"
													data-placement="bottom"
													title
													data-original-title="Add a Location">
													<i className="fa fa-map-marker" />
												</a>
												<a
													href="#"
													className="btn btn-link profile-btn-link"
													data-toggle="tooltip"
													data-placement="bottom"
													title
													data-original-title="Add Photo">
													<i className="fa fa-camera" />
												</a>
												<a
													href="#"
													className="btn btn-link profile-btn-link"
													data-toggle="tooltip"
													data-placement="bottom"
													title
													data-original-title="Add File">
													<i className="fa fa-file" />
												</a>
											</div>
										</form>
										<hr className="invisible half-margins" />
										{/* COMMENT */}
										<ul className="comment list-unstyled padding-10">
											<li className="comment comment-reply">
												{/* avatar */}
												<img
													id="avatar1"
													className="avatar"
													src="https://bootdey.com/img/Content/avatar/avatar6.png"
													width={35}
													height={35}
													alt="avatar"
												/>
												{/* comment body */}
												<div className="comment-body">
													<a href="#" className="comment-author">
														<small className="text-muted pull-right"> a moment ago </small>
														<span>Simona Doe</span>
													</a>
													<p>
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
														diam nonummy! <i className="fa fa-smile-o green" />
													</p>
												</div>
												{/* /comment body */}
												{/* options */}
												<ul className="list-inline size-11">
													<li>
														<a href="#" className="text-success">
															<i className="fa fa-thumbs-up" /> Like
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-danger">
															Delete
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-primary">
															Edit
														</a>
													</li>
												</ul>
												{/* /options */}
											</li>
											{/* /options */}
											<li className="comment comment-reply">
												{/* avatar */}
												<img
													id="avatar2"
													className="avatar"
													src="https://bootdey.com/img/Content/avatar/avatar2.png"
													width={35}
													height={35}
													alt="avatar"
												/>
												{/* comment body */}
												<div className="comment-body">
													<a href="#" className="comment-author">
														<small className="text-muted pull-right"> 4 Minutes ago </small>
														<span>Ioana Doe</span>
													</a>
													<p>
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
														diam nonummy! <i className="fa fa-smile-o green" />
													</p>
												</div>
												{/* /comment body */}
												{/* options */}
												<ul className="list-inline size-11">
													<li>
														<a href="#" className="text-success">
															<i className="fa fa-thumbs-up" /> Like
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-danger">
															Delete
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-primary">
															Edit
														</a>
													</li>
												</ul>
												{/* /options */}
											</li>
											<li className="comment comment-reply">
												{/* avatar */}
												<img
													id="avatar3"
													className="avatar"
													src="https://bootdey.com/img/Content/avatar/avatar3.png"
													width={35}
													height={35}
													alt="avatar"
												/>
												{/* comment body */}
												<div className="comment-body">
													<a href="#" className="comment-author">
														<small className="text-muted pull-right"> a moment ago </small>
														<span>Simona Doe</span>
													</a>
													<p>
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
														diam nonummy! <i className="fa fa-smile-o green" />
													</p>
												</div>
												{/* /comment body */}
												{/* options */}
												<ul className="list-inline size-11">
													<li>
														<a href="#" className="text-success">
															<i className="fa fa-thumbs-up" /> Like
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-danger">
															Delete
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-primary">
															Edit
														</a>
													</li>
												</ul>
												{/* /options */}
											</li>
										</ul>
										{/* /COMMENT */}
										{/* COMMENT */}
										<ul className="comment list-unstyled padding-10">
											<li className="comment comment-reply">
												{/* avatar */}
												<img
													id="avatar4"
													className="avatar"
													src="https://bootdey.com/img/Content/avatar/avatar6.png"
													width={35}
													height={35}
													alt="avatar"
												/>
												{/* comment body */}
												<div className="comment-body">
													<a href="#" className="comment-author">
														<small className="text-muted pull-right"> a moment ago </small>
														<span>Simona Doe</span>
													</a>
													<p>
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
														diam nonummy! <i className="fa fa-smile-o green" />
													</p>
												</div>
												{/* /comment body */}
												{/* options */}
												<ul className="list-inline size-11">
													<li>
														<a href="#" className="text-success">
															<i className="fa fa-thumbs-up" /> Like
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-danger">
															Delete
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-primary">
															Edit
														</a>
													</li>
												</ul>
												{/* /options */}
											</li>
											{/* /options */}
											<li className="comment comment-reply">
												{/* avatar */}
												<img
													id="avatar5"
													className="avatar"
													src="https://bootdey.com/img/Content/avatar/avatar5.png"
													width={35}
													height={35}
													alt="avatar"
												/>
												{/* comment body */}
												<div className="comment-body">
													<a href="#" className="comment-author">
														<small className="text-muted pull-right"> 4 Minutes ago </small>
														<span>Ioana Doe</span>
													</a>
													<p>
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
														diam nonummy! <i className="fa fa-smile-o green" />
													</p>
												</div>
												{/* /comment body */}
												{/* options */}
												<ul className="list-inline size-11">
													<li>
														<a href="#" className="text-success">
															<i className="fa fa-thumbs-up" /> Like
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-danger">
															Delete
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-primary">
															Edit
														</a>
													</li>
												</ul>
												{/* /options */}
											</li>
											<li className="comment comment-reply">
												{/* avatar */}
												<img
													id="avatar6"
													className="avatar"
													src="https://bootdey.com/img/Content/avatar/avatar6.png"
													width={35}
													height={35}
													alt="avatar"
												/>
												{/* comment body */}
												<div className="comment-body">
													<a href="#" className="comment-author">
														<small className="text-muted pull-right"> a moment ago </small>
														<span>Simona Doe</span>
													</a>
													<p>
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
														diam nonummy! <i className="fa fa-smile-o green" />
													</p>
												</div>
												{/* /comment body */}
												{/* options */}
												<ul className="list-inline size-11">
													<li>
														<a href="#" className="text-success">
															<i className="fa fa-thumbs-up" /> Like
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-danger">
															Delete
														</a>
													</li>
													<li className="pull-right">
														<a href="#" className="text-primary">
															Edit
														</a>
													</li>
												</ul>
												{/* /options */}
											</li>
											<li>
												<div className="input-group">
													<input
														id="btn-input"
														type="text"
														className="form-control"
														placeholder="Type your message..."
													/>
													<span className="input-group-btn">
														<button className="btn btn-primary" id="btn-chat">
															<i className="fa fa-reply" /> Reply
														</button>
													</span>
												</div>
											</li>
										</ul>
										{/* /COMMENT */}
									</div>
									{/* Edit */}
									<div id="edit" className="tab-pane">
										<form className="form-horizontal padding-10" method="get">
											<h4>Personal Information</h4>
											<fieldset>
												<div className="form-group">
													<label
														className="col-md-3 control-label"
														htmlFor="profileFirstName">
														First Name
													</label>
													<div className="col-md-8">
														<input
															type="text"
															className="form-control"
															id="profileFirstName"
														/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-md-3 control-label" htmlFor="profileLastName">
														Last Name
													</label>
													<div className="col-md-8">
														<input
															type="text"
															className="form-control"
															id="profileLastName"
														/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-md-3 control-label" htmlFor="profileAddress">
														Address
													</label>
													<div className="col-md-8">
														<input
															type="text"
															className="form-control"
															id="profileAddress"
														/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-md-3 control-label" htmlFor="profileCompany">
														Company
													</label>
													<div className="col-md-8">
														<input
															type="text"
															className="form-control"
															id="profileCompany"
														/>
													</div>
												</div>
											</fieldset>
											<hr />
											<h4>About</h4>
											<fieldset>
												<div className="form-group">
													<label className="col-xs-3 control-label">Public Profile</label>
													<div className="col-md-8">
														<label className="checkbox">
															<input
																type="checkbox"
																defaultValue={1}
																defaultChecked="checked"
																id="profilePublic"
															/>
															<i /> Checkbox 1
														</label>
													</div>
												</div>
												<div className="form-group">
													<label className="col-md-3 control-label" htmlFor="profileBio">
														Biographical Info
													</label>
													<div className="col-md-8">
														<textarea
															className="form-control"
															rows={3}
															id="profileBio"
															defaultValue={""}
														/>
													</div>
												</div>
												<div className="form-group">
													<div className="sky-form">
														<label className="col-xs-3 control-label">Profile Image</label>
														<div className="col-md-8">
															<label htmlFor="file" className="input input-file">
																<div className="button">
																	<input
																		type="file"
																		id="file"
																		/* onchange="this.parentNode.nextSibling.value = this.value" */
																	/>
																	Browse
																</div>
																<input type="text" readOnly />
															</label>
															<a href="#" className="btn btn-danger btn-xs nomargin">
																<i className="fa fa-times" /> Remove Current Image
															</a>
														</div>
													</div>
												</div>
											</fieldset>
											<hr />
											<h4>Change Password</h4>
											<fieldset className="mb-xl">
												<div className="form-group">
													<label
														className="col-md-3 control-label"
														htmlFor="profileNewPassword">
														New Password
													</label>
													<div className="col-md-8">
														<input
															type="text"
															className="form-control"
															id="profileNewPassword"
														/>
													</div>
												</div>
												<div className="form-group">
													<label
														className="col-md-3 control-label"
														htmlFor="profileNewPasswordRepeat">
														Repeat New Password
													</label>
													<div className="col-md-8">
														<input
															type="text"
															className="form-control"
															id="profileNewPasswordRepeat"
														/>
													</div>
												</div>
											</fieldset>
											<div className="row">
												<div className="col-md-9 col-md-offset-3">
													<button type="submit" className="btn btn-primary">
														Submit
													</button>
													<button type="reset" className="btn btn-default">
														Reset
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						{/* /COL 2 */}
						{/* COL 3 */}
						<div className="col-md-4">
							{/* projects */}
							<section className="panel panel-default">
								<header className="panel-heading">
									<h2 className="panel-title elipsis">
										<i className="fa fa-rss" /> Projects
									</h2>
								</header>
								<div className="panel-body noradius padding-10">
									<ul className="bullet-list list-unstyled">
										<li className="red">
											<h3>Epona HTML5 Template</h3>
											<span className="text-gray size-12">
												Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
											</span>
										</li>
										<li className="green">
											<h3>Atropos Template</h3>
											<span className="text-gray size-12">
												Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
											</span>
										</li>
										<li className="blue">
											<h3>isisone Template</h3>
											<span className="text-gray size-12">
												Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
											</span>
										</li>
										<li className="orange">
											<h3>Deusone Template</h3>
											<span className="text-gray size-12">
												Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
											</span>
										</li>
									</ul>
								</div>
							</section>
							{/* /projects */}
							{/* activity */}
							<section className="panel panel-default">
								<header className="panel-heading">
									<h2 className="panel-title elipsis">
										<i className="fa fa-rss" /> Activity
									</h2>
								</header>
								<div className="panel-body noradius padding-10">
									{/* activity list */}
									<div className="row profile-activity">
										{/* activity item */}
										<div className="col-xs-2 col-sm-1">
											<time dateTime="2014-06-29" className="datebox">
												<strong>Jun</strong>
												<span>29</span>
											</time>
										</div>
										<div className="col-xs-10 col-sm-11">
											<h6>
												<a href="page-sidebar.html">Lorem ipsum dolor sit amet</a>
											</h6>
											<p>
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
												nonummy nibh euismod tincidunt laoreet dolore magna aliquam tincidunt
												erat volutpat laoreet dolore magna aliquam tincidunt erat volutpat.
											</p>
										</div>
										{/* /activity item */}
										<div className="col-sm-12">
											<hr className="half-margins" />
										</div>
										{/* /activity separator */}
										{/* activity item */}
										<div className="col-xs-2 col-sm-1">
											<time dateTime="2014-06-29" className="datebox">
												<strong>Jun</strong>
												<span>29</span>
											</time>
										</div>
										<div className="col-xs-10 col-sm-11">
											<h6>
												<a href="page-sidebar.html">Sed diam nonummy nibh euismod</a>
											</h6>
											<p>
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
												nonummy nibh euismod tincidunt laoreet dolore magna aliquam tincidunt
												erat volutpat laoreet dolore magna aliquam tincidunt erat volutpat.
											</p>
										</div>
										{/* /activity item */}
										<div className="col-sm-12">
											<hr className="half-margins" />
										</div>
										{/* /activity separator */}
										{/* paginatoin */}
										<div className="text-center">
											<ul className="pagination pagination-sm">
												<li className="disabled">
													<a href="#">Prev</a>
												</li>
												<li className="active">
													<a href="#">1</a>
												</li>
												<li>
													<a href="#">2</a>
												</li>
												<li>
													<a href="#">3</a>
												</li>
												<li>
													<a href="#">4</a>
												</li>
												<li>
													<a href="#">Next</a>
												</li>
											</ul>
										</div>
										{/* /paginatoin */}
									</div>
									{/* /activity list */}
								</div>
							</section>
							{/* /activity */}
						</div>
						{/* /COL 3 */}
					</div>
				</div>
			</div>
		</>
	);
};
