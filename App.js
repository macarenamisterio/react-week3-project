import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import "./App.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

function App() {
	return (
		<div className="App">
			<h1>Weather Search</h1>
			<Search />
		</div>
	);
}
