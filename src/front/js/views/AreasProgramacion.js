import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/areasProgramacion.scss";
import AreaProgramacion from "../component/AreaProgramacion";
import { BotonFlotante } from "../component/BotonFlotante";

export const AreasProgramacion = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="how-section1">
			{!!store.areasProgramacion &&
				store.areasProgramacion.results.map((elemento, index) => {
					return (
						<div className="row align-items-center" key={index}>
							<AreaProgramacion
								nombre={elemento.nombre}
								descripcion={elemento.descripcion}
								imagen={elemento.imagen}
							/>
						</div>
					);
				})}

				{/* <div className="row align-items-center">
				<div className="col-md-6 how-img">
					<img src="https://www.tecnologicahn.com/img/Desarrollodesoftware2.png" className="img-fluid" alt />
				</div>
				<div className="col-md-6">
					<h4>Diseños de paginas web</h4>
					<h4 className="subheading">
						GetLance is a great place to find more clients, and to run and grow your own freelance business.
					</h4>
					<p className="text-muted">
						Freedom to work on ideal projects. On GetLance, you run your own business and choose your own
						clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search
						projects, and respond to client invitations. Wide variety and high pay. Clients are now posting
						jobs in hundreds of skill categories, paying top price for great work. More and more success.
						The greater the success you have on projects, the more likely you are to get hired by clients
						that use GetLance.
					</p>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col-md-6">
					<h4>Desarrollo movil</h4>
					<h4 className="subheading">
						GetLance makes it easy to connect with clients and begin doing great work.
					</h4>
					<p className="text-muted">
						Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit
						for. Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of
						prestigious programs. Do substantial work with top clients. GetLance pricing encourages
						freelancers to use GetLance for repeat relationships with their clients.
					</p>
				</div>
				<div className="col-md-6 how-img">
					<img
						src="https://elevatecnologia.com/wp-content/uploads/2020/12/Aumentar-la-cuota-de-mercado-de-su-aplicacion-movil-mediante.png"
						className="img-fluid"
						alt
					/>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col-md-6 how-img">
					<img
						src="https://as.com/meristation/imagenes/2012/06/25/noticia/1340640000_403636_1532631981_sumario_normal.png"
						className="img-fluid"
						alt
					/>
				</div>
				<div className="col-md-6">
					<h4>Videojuegos</h4>
					<h4 className="subheading">
						With GetLance, you have the freedom and flexibility to control when, where, and how you work.
						Each project includes an online workspace shared by you and your client, allowing you to:
					</h4>
					<p className="text-muted">
						Send and receive files. Deliver digital assets in a secure environment. Share feedback in real
						time. Use GetLance Messages to communicate via text, chat, or video. Use our mobile app. Many
						features can be accessed on your mobile phone when on the go.
					</p>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col-md-6">
					<h4>Seguridad informatica</h4>
					<h4 className="subheading">
						All projects include GetLance Payment Protection — helping ensure that you get paid for all work
						successfully completed through the freelancing website.
					</h4>
					<p className="text-muted">
						All invoices and payments happen through GetLance. Count on a simple and streamlined process.
						Hourly and fixed-price projects. For hourly work, submit timesheets through GetLance. For
						fixed-price jobs, set milestones and funds are released via GetLance escrow features. Multiple
						payment options. Choose a payment method that works best for you, from direct deposit or PayPal
						to wire transfer and more.
					</p>
				</div>
				<div className="col-md-6 how-img">
					<img
						src="https://emitelinformatica.es/wp-content/uploads/2018/05/featured-image.png"
						className="img-fluid"
						alt
					/>
				</div>
			</div> */}
			<BotonFlotante />
		</div>
	);
};

