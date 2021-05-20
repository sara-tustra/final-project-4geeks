import React, { useContext, useState } from "react";
import "../../styles/Perfil2.scss";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { BotonFlotante } from "../component/BotonFlotante";
import Post from "../component/Post";

function Perfil2() {
	const { store, actions } = useContext(Context);

	const [inputPost, setInputPost] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;
		if (name === "post_contenido") {
			setInputPost(value);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log("probando posting...");
		actions.agregarPost(inputPost);
		setIsSubmitting(true);
	};
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
											<a href="#">Sarai Santiago</a>
											<a
												href="#"
												className="user-status is-online tooltip-primary"
												data-toggle="tooltip"
												data-placement="top"
												data-original-title="Online"
											/>
										</strong>
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
								<ul className="user-details" />
								{/* tabs for the profile links */}
								<ul className="nav nav-tabs">
									<li>
										<a href="/PerfilUsuario">Editar Perfil</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section className="profile-feed">
						{/* profile post form */}
						<form className="profile-post-form" onSubmit={handleSubmit}>
							<textarea
								className="form-control"
								placeholder="¿Qué estás pensando?"
								style={{
									overflow: "hidden",
									wordWrap: "break-word",
									height: 80
								}}
								defaultValue={""}
								name="post_contenido"
								onChange={handleChange}
							/>
							<div className="form-options">
								<div className="post-submit">
									<button type="submit" className="btn btn-primary">
										PUBLICAR
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
								{isSubmitting == true ? (
									<div className="story-content">
										<Post
											nombre="Sarai Santiago"
											contenido={inputPost}
											likes={0}
											nrocomentarios={0}
											hora="ahora"
										/>
									</div>
								) : (
									<p />
								)}

								{!!store.posts ? (
									store.posts.results.map((element, index) => {
										return (
											<div className="story-content" key={index}>
												<Post
													nombre="Sarai Santiago"
													contenido={element.post_contenido}
													likes={element.post_likes}
													nrocomentarios={element.post_comentarios.length}
													hora="Hace 3 horas"
												/>
											</div>
										);
									})
								) : (
									<p>Loading...</p>
								)}

								{/* ojo */}
							</article>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}

export default Perfil2;

// <div className="story-content">
// {/* story header */}
// <header>
// 	<div className="publisher">
// 		<a href="#">Marting flowtlhrow</a> actualizó su estado
// 		<em>Hace 3 horas</em>
// 	</div>
// 	<div className="story-type">
// 		<i className="entypo-feather" />
// 	</div>
// </header>
// <div className="user-comment-content">
// 	<p>
// 		Tolerably earnestly middleton extremely distrusts she boy now not. Add and
// 		offered prepare how cordial two promise. Greatly who affixed suppose but
// 		enquire compact prepare all put. Added forth chief trees but rooms think
// 		may.{" "}
// 	</p>
// </div>
// {/* story like and comment link */}
// <footer>
// 	<a href="#" className="liked">
// 		<i className="entypo-heart" />
// 		Me gusta
// 		<span> (8)</span>
// 	</a>
// 	<a href="#">
// 		<i className="entypo-comment" />
// 		Commentarios
// 		<span> (12)</span>
// 	</a>
// 	{/* story comments */}
// 	<ul className="comments">
// 		<li>
// 			<div className="user-comment-thumb">
// 				<img
// 					src="https://bootdey.com/img/Content/avatar/avatar1.png"
// 					alt
// 					className="img-circle"
// 					width={30}
// 				/>
// 			</div>
// 			<div className="user-comment-content">
// 				<a href="#" className="user-comment-name">
// 					John doe
// 					<p />
// 				</a>
// 				Tolerably earnestly middleton extremely distrusts she boy now not.
// 				Add and offered prepare how cordial two promise. Add and offered
// 				prepare how cordial two promise.
// 				<div className="user-comment-meta">
// 					<a href="#" className="comment-date">
// 						January 4 at 1:11am
// 					</a>
// 				</div>
// 			</div>
// 		</li>
// 		<li>
// 			<div className="user-comment-thumb">
// 				<img
// 					src="https://bootdey.com/img/Content/avatar/avatar6.png"
// 					alt
// 					className="img-circle"
// 					width={30}
// 				/>
// 			</div>
// 			<div className="user-comment-content">
// 				<a href="#" className="user-comment-name">
// 					John doe
// 					<p />
// 				</a>
// 				Extremity direction existence as dashwoods do up. Securing marianne
// 				led welcomed offended but offering six raptures. Conveying concluded
// 				newspaper rapturous oh at.
// 				<div className="user-comment-meta">
// 					<a href="#" className="comment-date">
// 						January 3 at 6:42pm
// 					</a>
// 				</div>
// 			</div>
// 		</li>
// 		<li>
// 			<div className="user-comment-thumb">
// 				<img
// 					src="https://bootdey.com/img/Content/avatar/avatar4.png"
// 					alt
// 					className="img-circle"
// 					width={30}
// 				/>
// 			</div>
// 			<div className="user-comment-content">
// 				<a href="#" className="user-comment-name">
// 					John doe <p />
// 				</a>
// 				Mean if he they been no hold mr. Is at much do made took held help.
// 				Latter person am secure of estate genius at.
// 				<div className="user-comment-meta">
// 					<a href="#" className="comment-date">
// 						January 2 at 3:25pm
// 					</a>
// 				</div>
// 			</div>
// 		</li>
// 		<li className="comment-form">
// 			<div className="user-comment-thumb">
// 				<img
// 					src="https://bootdey.com/img/Content/avatar/avatar6.png"
// 					alt
// 					className="img-circle"
// 					width={30}
// 				/>
// 			</div>
// 			<div className="user-comment-content">
// 				<textarea
// 					className="form-control autogrow"
// 					placeholder="Escribe un comentario..."
// 					style={{
// 						overflow: "hidden",
// 						wordWrap: "break-word",
// 						resize: "horizontal",
// 						height: 46
// 					}}
// 					defaultValue={""}
// 				/>
// 				<button className="btn">
// 					<i className="entypo-chat" />
// 				</button>
// 			</div>
// 		</li>
// 	</ul>
// </footer>
// {/* separator */}
// <hr />
// </div>
