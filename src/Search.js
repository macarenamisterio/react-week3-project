import React, { useState } from "react";
import axios from "axios";

export default function Search() {
	const [city, setCity] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [temperature, setTemp] = useState(null);
	const [message, setMessage] = useState("");

	function showTemp(response) {
		setLoaded(true);
		setTemp(response.data.main.temp);
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiKey = "99f763cf958e5832295c470b28782d08";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(showTemp);
		setMessage(`Currently in ${city} is ${Math.round(temperature)}°C
    `);
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	let form = (
		<form onSubmit={handleSubmit}>
			<input
				type="Search"
				id="header-search"
				placeholder="Search city"
				name="search"
				onChange={updateCity}
			/>
			<button type="submit">Search</button>
		</form>
	);

	if (loaded) {
		return (
			<div>
				{form}
				<p>{message}</p>
			</div>
		);
	} else {
		return form;
	}
}
