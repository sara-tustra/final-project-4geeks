import React from "react";

import PropTypes from "prop-types";
const WeatherForm = props => {
	return (
		<div className="card card-body">
			<form onSubmit={props.getWeather}>
				<div className="form-group">
					<input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus />
				</div>
				<div className="form-group">
					<input type="text" name="country" placeholder="Your Country Name" className="form-control" />
				</div>
				<button className="btn btn-success btn-block">Get Weather</button>
			</form>
		</div>
	);
};
WeatherForm.propTypes = {
	getWeather: PropTypes.func
};
export default WeatherForm;
