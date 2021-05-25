import React, { Component } from "react";
import "../../styles/WeatherInfo.scss";
import { WEATHER_KEY } from "../keys";
import { Circle } from "../component/Circle";

class WeatherInfo extends Component {
	state = {
		temperature: "",
		description: "",
		humidity: "",
		wind_speed: 0,
		city: "santiago",
		country: "chile",
		error: null
	};

	getWeather = async () => {
		const { city, country } = this.state;
		const cityValue = city;
		const countryValue = country;

		if (cityValue && countryValue) {
			// metric parameter is for Celcius Unit
			const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}, ${countryValue}&appid=${WEATHER_KEY}`;
			const response = await fetch(API_URL);
			const data = await response.json();
			console.log(data);

			this.setState({
				temperature: data.main.temp,
				description: data.weather[0].description,
				humidity: data.main.humidity,
				wind_speed: data.wind.speed,
				city: data.name,
				country: data.sys.country,
				error: null
			});
		} else {
			this.setState({
				error: "Please enter a City and a Country."
			});
		}
	};

	componentDidMount() {
		this.getWeather();
	}

	render() {
		return (
			<>
				{this.state.temperature ? (
					<div className="card-1 card-body mt-2 animated fadeInUp mx-auto">
						<Circle />
						<p>Temperatura</p>
						{this.state.city &&
							this.state.country && (
								<p>
									<i className="fas fa-location-arrow" /> Localización: {this.state.city},{" "}
									{this.state.country}
								</p>
							)}
						{this.state.temperature && (
							<p>
								<i className="fas fa-temperature-low" /> Temperatura: {this.state.temperature} ℃,{" "}
								{this.state.description}
							</p>
						)}
						{this.state.humidity && (
							<p>
								<i className="fas fa-water" /> Humedad: {this.state.humidity}
							</p>
						)}
						{this.state.wind_speed && (
							<p>
								<i className="fas fa-wind" /> Velocidad del viento: {this.state.wind_speed}
							</p>
						)}
					</div>
				) : (
					<div className="card card-body  text-center">
						<i className="fas fa-sun fa-10x" />
					</div>
				)}
			</>
		);
	}
}

export default WeatherInfo;
