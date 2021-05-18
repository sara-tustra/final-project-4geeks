import React from "react";
import PropTypes from "prop-types";
const WeatherInfo = props => {
	console.log(props);
	return (
		<div>
			{props.error && (
				<div className="alert alert-danger">
					<p>{props.error}</p>
				</div>
			)}
			{props.temperature ? (
				<div className="card card-body mt-2 animated fadeInUp">
					{props.city &&
						props.country && (
							<p>
								<i className="fas fa-location-arrow" /> Location: {props.city}, {props.country}
							</p>
						)}
					{props.temperature && (
						<p>
							<i className="fas fa-temperature-low" /> Temperature: {props.temperature} ℃,{" "}
							{props.description}
						</p>
					)}
					{props.humidity && (
						<p>
							<i className="fas fa-water" /> Humidity: {props.humidity}
						</p>
					)}
					{props.wind_speed && (
						<p>
							<i className="fas fa-wind" /> Wind Speed: {props.wind_speed}
						</p>
					)}
				</div>
			) : (
				<div className="card card-body mt-2 text-center">
					<i className="fas fa-sun fa-10x" />
				</div>
			)}
		</div>
	);
};
WeatherInfo.propTypes = {
	error: PropTypes.string,
	temperature: PropTypes.string,
	city: PropTypes.string,
	country: PropTypes.string,
	description: PropTypes.string,
	humidity: PropTypes.string,
	wind_speed: PropTypes.string
};
export default WeatherInfo;
