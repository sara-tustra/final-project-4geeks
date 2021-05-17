import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { BotonFlotante } from "../component/BotonFlotante";
import Academia from "../component/Academia";

export const Academias = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="how-section1">
			{!!store.academias &&
				store.academias.results.map((elemento, index) => {
					return (
						<div className="row align-items-center" key={index}>
							<Academia
								nombre={elemento.nombre}
								descripcion={elemento.descripcion}
								imagen={elemento.imagen}
							/>
						</div>
					);
				})}
			{/* 
			<div className="row align-items-center">
				<div className="col-md-6">
					<h4>4Geeks Academy</h4>
					<h4 className="subheading">
						GetLance makes it easy to connect with clients and begin doing great work.
					</h4>
					<p className="text-muted">
						Gracias a nuestra creciente red de Aliados podemos contar con ofertas constantes a nivel
						nacional e internacional. Gracias a esto y a nuestro servicio de GeekFORCE (Apoyo a tu
						desarrollo Profesional) es que logramos que el ~89% de nuestros alumnos consigan trabajo dentro
						de los siguientes 100 días o menos desde su graduación.
					</p>
				</div>
				<div className="col-md-6 how-img">
					<img
						src="https://uploads.convertflow.co/production/websites/9849/BKYwTKvR4OZ2SVrCVFDQ_DuFZYY1R46iYynKboQAw_4G_LOGO_WHITE.png"
						className="img-fluid-1"
						alt
					/>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col-md-6 how-img">
					<img
						src="http://blog.desafiolatam.com/wp-content/uploads/2015/03/desafio-latam-logonegro.png"
						className="img-fluid-1"
						alt
					/>
				</div>
				<div className="col-md-6">
					<h4>Desafio Latam</h4>
					<h4 className="subheading">
						With GetLance, you have the freedom and flexibility to control when, where, and how you work.
						Each project includes an online workspace shared by you and your client, allowing you to:
					</h4>
					<p className="text-muted">
						La Academia Desafío Latam y toda su comunidad, me insertaron en un camino profesional muy
						dinámico y activo. La necesidad actual de talentos digitales en Chile crece día a día y estoy
						orgullosa de pertenecer al grupo de profesionales dedicados al idioma del futuro.
					</p>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col-md-6">
					<h4>Codigo Facilito</h4>
					<h4 className="subheading">
						All projects include GetLance Payment Protection — helping ensure that you get paid for all work
						successfully completed through the freelancing website.
					</h4>
					<p className="text-muted">
						Contamos con más de 800 horas de contenido para que aprendas más allá de lo básico. Cursos
						teóricos y prácticos con proyectos.
					</p>
				</div>
				<div className="col-md-6 how-img">
					<img
						src="https://codigofacilito.com/assets/logo-cbf2a784ebee5d642aa7b8182df3e388d4feba0a23577eed1d2747fa05861f73.png"
						className="img-fluid-1"
						alt
					/>
				</div>
<<<<<<< HEAD
			</div> */}
=======
			</div>
			<BotonFlotante />
>>>>>>> 2306bda763ba5b7b332f3ea1be97ef64fbe29585
		</div>
	);
};
