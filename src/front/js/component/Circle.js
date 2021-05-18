import React from "react";
import "../../styles/Circle.scss";
import { Link } from "react-router-dom";

export const Circle = () => {
	return (
		<>
			<div className="row">
				<div className="col-md-4 mb-5">
					<div id="circle">
						<div className="loader">
							<div className="loader">
								<div className="loader">
									<div className="loader" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
