import React, { useEffect, useState } from "react";

const ApiNoticias = () => {
	const apiKey = "46bd1227bdcc4958b81c332d9298fe8d";

	const url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}`;
	const [noticias, setNoticias] = useState();
	const fetchApi = async () => {
		const response = await fetch(url);
		console.log(response.status);
		const responseJSON = await response.json();
		setNoticias(responseJSON.articles);
		console.log(responseJSON.articles);
	};

	useEffect(() => {
		fetchApi();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div>
				{!noticias ? (
					<h3 className="text-center text-white">Cargando...</h3>
				) : (
					noticias.map((noticia, index) => {
						return (
							<div className="row" key={index}>
								<div className="col-md-8">
									<div className="card mb-4 bg-dark text-white">
										<img className="card-img" src={noticia.urlToImage} alt="Card image" />
										<div className="card-img-overlay">
											<h5 className="card-title">{noticia.title}</h5>
											<p className="card-text">{noticia.content}</p>
											<a className="btn btn-primary" href={noticia.url}>
												Ver Noticia
											</a>
										</div>
									</div>
								</div>
							</div>
						);
					})
				)}
			</div>
		</>
	);
};
export default ApiNoticias;
