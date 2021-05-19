import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import Botonlike from "../component/botonlike";
import "../../styles/post.scss";

export const Post = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
			<div className="container bootstrap snippets bootdeys">
				<div className="col-md-10 col-md-offset-2">
					<div className="panel">
						<div className="panel-body">
							<textarea
								className="form-control"
								rows={2}
								placeholder="En que estas pensando?"
								defaultValue={""}
							/>
							<div className="mar-top clearfix">
								<button className="btn btn-sm bg-dark pull-right" type="submit">
									<i className="fa fa-pencil fa-fw" /> Publicar
								</button>
							</div>
						</div>
					</div>
					<div className="panel panel-body">
						{/* Timeline */}
						{/*===================================================*/}
						<div className="timeline">
							{/* Timeline header */}
							<div className="timeline-header">
								<div className="timeline-header-title bg-dark">Hoy</div>
							</div>

							<div className="timeline-entry">
								<div className="timeline-stat">
									<div className="timeline-icon bg-danger">
										<i className="fa fa-building fa-lg" />
									</div>
									<div className="timeline-time">2 Hours ago</div>
								</div>
								<div className="timeline-label">
									<h4 className="mar-no pad-btm">
										<a href="#" className="text-danger">
											Job Meeting
										</a>
									</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
										euismod tincidunt.
									</p>
									<div className="d-flex flex-row align-items-center status">
										{" "}
										<Botonlike />
									</div>{" "}
								</div>
							</div>

							{/* Timeline header */}
						</div>
						{/*===================================================*/}
						{/* End Timeline */}
					</div>
				</div>
			</div>
		</>
	);
};
