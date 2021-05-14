import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/foros.scss";

export const Foros = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="h12">
				<h1 contentEditable spellCheck="false">
					Foro
				</h1>
			</div>
			<div className="container mt-5 mb-5">
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-md-10">
						<div className="card">
							<div className="d-flex justify-content-between p-2 px-3">
								<div className="d-flex flex-row align-items-center">
									{" "}
									<img src="https://i.imgur.com/UXdKE3o.jpg" width={50} className="rounded-circle" />
									<div className="d-flex flex-column ml-2">
										<span className="font-weight-bold">Carla Rodriguez</span>{" "}
										<div className="comment-input">
											{" "}
											<input
												type="text"
												className="form-control"
												placeholder="Agrega un titulo"
											/>
											<div className="fonts">
												{" "}
												<i className="usuario fa fa-user" />{" "}
											</div>
										</div>
									</div>
								</div>
								<div className="d-flex flex-row mt-1 ellipsis">
									{" "}
									<small className="mr-2">20 mins</small> <i className="fa fa-ellipsis-h" />{" "}
								</div>
							</div>{" "}
							<div className="p-2">
								<div className="share border bg-white">
									<div className="d-flex flex-row inputs p-2 py-4">
										<input
											type="text"
											className="border-0 form-control share-input"
											placeholder="Agrega un contenido"
										/>
									</div>
									<div className="d-flex flex-row justify-content-between border-top">
										<div className="d-flex flex-row publish-options" />
										<div className="d-flex flex-row icons d-flex align-items-center">
											{" "}
											<i className="fa fa-heart" />
											<div className="d-flex flex-row align-items-center status">
												{" "}
												<small>Like</small> <small>Comentar</small>{" "}
											</div>{" "}
										</div>
										<div className="publish-button">
											<div className="align-items-center border-left p-2 px-5 btn publish">
												<span className="ml-1">Publish</span>
											</div>
										</div>
									</div>
								</div>
								<hr />
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex flex-row muted-color">
										{" "}
										<span>1 comments</span>{" "}
									</div>
								</div>
								<hr />
								<div className="comments">
									<div className="d-flex flex-row mb-2">
										{" "}
										<img
											src="https://i.imgur.com/9AZ2QX1.jpg"
											width={40}
											className="rounded-image"
										/>
										<div className="d-flex flex-column ml-2">
											{" "}
											<span className="name">Daniel Perez</span>{" "}
											<small className="comment-text">I like this alot! thanks alot</small>
										</div>
									</div>
									<div className="comment-input">
										{" "}
										<input
											type="text"
											className="form-control foro6 "
											placeholder="Agrega un comentario"
										/>
										<div className="fonts">
											{" "}
											<i className="usuario fa fa-user" />{" "}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
