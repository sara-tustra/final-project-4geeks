import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/lenguajes.scss";
import Lenguaje from "../component/Lenguaje";

export const Lenguajes = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="how-section1">
			{!!store.lenguajes &&
				store.lenguajes.results.map((elemento, index) => {
					return (
						<div className="row align-items-center" key={index}>
							<Lenguaje
								nombre={elemento.nombre}
								descripcion={elemento.descripcion}
								imagen={elemento.imagen}
							/>
						</div>
					);
				})}

			{/* <div className="row align-items-center">
				<div className="col-md-6 how-img">
					<img src="https://oddbytes.net/wp-content/uploads/2018/01/Js-logo.png" className="img-fluid" alt />
				</div>
				<div className="col-md-6">
					<h4>Javascript</h4>
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
					<h4>Java</h4>
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
						src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/java-logo.png"
						className="img-fluid"
						alt
					/>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col-md-6 how-img">
					<img
						src="https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/PYTHON.png"
						className="img-fluid"
						alt
					/>
				</div>
				<div className="col-md-6">
					<h4>Python</h4>
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
					<h4>React</h4>
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
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
						className="img-fluid"
						alt
					/>
				</div>
			</div> */}
		</div>
	);
};
