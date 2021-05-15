import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Navbar } from "../component/navbar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="description" content />
			<meta name="author" content />
			<title>Business Frontpage - Start Bootstrap Template</title>
			{/* Favicon*/}
			<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
			{/* Core theme CSS (includes Bootstrap)*/}
			<link href="css/styles.css" rel="stylesheet" />
			{/* Navigation*/}

			{/* Header*/}
			<header className="bg-primary py-5 mb-5">
				<div className="container h-100">
					<div className="row h-100 align-items-center">
						<div className="col-lg-12">
							<h1 className="display-4 text-white mt-5 mb-2">Vivir en un mundo de codigos</h1>
							<p className="lead mb-5 text-white-50">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore
								provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste
								ipsa cumque unde nisi, totam quas ipsam.
							</p>
						</div>
					</div>
				</div>
			</header>
			{/* Page Content*/}
			<div className="container">
				<div className="row">
					<div className="col-md-8 mb-5">
						<h2>Programación</h2>
						<hr />
						<p className="text-white">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore
							recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis
							aliquam laboriosam. Repellat explicabo, maiores!
						</p>
						<p className="text-white">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur
							consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias,
							adipisci nesciunt voluptate. Voluptatum.
						</p>
						<a className="btn btn-primary btn-lg" href="#!">
							Call to Action »
						</a>
					</div>
					<div className="col-md-4 mb-5">
						<h2>api clima</h2>
						<hr />
						<address>
							<strong>Start Bootstrap</strong>
							<br />
							3481 Melrose Place
							<br />
							Beverly Hills, CA 90210
							<br />
						</address>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 mb-5">
						<div className="card h-100">
							<img
								className="card-img-top"
								src="https://i1.wp.com/www.itwarelatam.com/wp-content/uploads/2014/03/ESET_Elearning2.jpg?fit=300%2C200&ssl=1"
								alt="..."
							/>
							<div className="card-body">
								<h4 className="card-title ">Academias</h4>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse
									necessitatibus neque sequi doloribus.
								</p>
							</div>
							<div className="card-footer">
								<Link className="btn btn-primary" to="/academias">
									Find Out More!
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-4 mb-5">
						<div className="card h-100">
							<img
								className="card-img-top"
								src="https://www.visionnaire.com.br/es/dbimages/visionnaire-7-linguagens-de-programacao_14054_mini.jpg"
								alt="..."
							/>
							<div className="card-body">
								<h4 className="card-title">Lenguajes de programacion</h4>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse
									necessitatibus neque sequi doloribus totam ut praesentium aut.
								</p>
							</div>
							<div className="card-footer">
								<Link className="btn btn-primary" to="/lenguajes">
									Find Out More!
								</Link>
							</div>
						</div>
					</div>
					<div className=" col-md-4 mb-5 ">
						<div className="card h-100 ">
							<img
								className="card-img-top"
								src="https://comohacerpara.com/imgn/10165-sitios-aprender-programacion-gratis-online.jpg"
								alt="..."
							/>
							<div className="card-body">
								<h4 className="card-title">Areas de la programacion</h4>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse
									necessitatibus neque.
								</p>
							</div>
							<div className="card-footer">
								<Link className="btn btn-primary" to="/AreasProgramacion">
									Find Out More!
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
