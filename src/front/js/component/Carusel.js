import React from "react";
import "../../styles/carusel.scss";

const Carusel = () => {
	return (
		<>
			<link
				href="https://elevatecnologia.com/wp-content/uploads/2020/12/Aumentar-la-cuota-de-mercado-de-su-aplicacion-movil-mediante.png"
				rel="stylesheet"
			/>
			<div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="mask flex-center">
							<div className="container">
								<div className="row align-items-center">
									<div className="col-md-7 col-12 order-md-1 order-2">
										<h4>
											Vivir en un <br />
											mundo de codigos
										</h4>
										<p>
											Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum{" "}
											<br />
											necessitatibus praesentium voluptatum deleniti atque corrupti.
										</p>
									</div>
									<div className="col-md-5 col-12 order-md-2 order-1">
										<img
											src="https://www.tecnologicahn.com/img/Desarrollodesoftware2.png"
											className="mx-auto"
											alt="slide"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*slide end*/}
		</>
	);
};

export default Carusel;
