import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/foros.scss";

export const Foros = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Foro</h1>
			<div className="container mt-5 mb-5">
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="d-flex justify-content-between p-2 px-3">
								<div className="d-flex flex-row align-items-center">
									{" "}
									<img src="https://i.imgur.com/UXdKE3o.jpg" width={50} className="rounded-circle" />
									<div className="d-flex flex-column ml-2">
										{" "}
										<span className="font-weight-bold">Carla Rodriguez</span>{" "}
										<small className="text-primary">Collegues</small>{" "}
									</div>
								</div>
								<div className="d-flex flex-row mt-1 ellipsis">
									{" "}
									<small className="mr-2">20 mins</small> <i className="fa fa-ellipsis-h" />{" "}
								</div>
							</div>{" "}
							<div className="p-2">
								<p className="text-justify">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt.
								</p>
								<hr />
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex flex-row icons d-flex align-items-center">
										{" "}
										<i className="fa fa-heart" />
										<div className="d-flex flex-row align-items-center status">
											{" "}
											<small>Like</small> <small>Comentar</small> <small>18 mins</small>{" "}
										</div>{" "}
									</div>
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
										<input type="text" className="form-control" />
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
