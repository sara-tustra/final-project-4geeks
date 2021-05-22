import React from "react";
import PropTypes from "prop-types";

const Post = props => {
	return (
		<>
			{/* story header */}
			<header>
				<div className="publisher">
					<a href="#">{props.nombre}</a> actualizó su estado
					<em>
						<p />
						{props.hora}
					</em>
				</div>
				<div className="story-type">
					<i className="entypo-feather" />
				</div>
			</header>
			<div className="user-comment-content">
				<p>{props.contenido} </p>
			</div>
			{/* story like and comment link */}
			<footer>
				<a href="#" className="liked">
					<i className="entypo-heart" />
					Me gusta
					<span> ({props.likes})</span>
				</a>
				<a href="#">
					<i className="entypo-comment" />
					Commentarios
					<span> ( {props.nrocomentarios} )</span>
				</a>
				{/* story comments */}
			</footer>
			{/* separator */}
			<hr />
		</>
	);
};

Post.propTypes = {
	nombre: PropTypes.string,
	contenido: PropTypes.string,
	likes: PropTypes.number,
	nrocomentarios: PropTypes.number,
	hora: PropTypes.string
};

export default Post;
