import Search from "./Search.js";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Weather Search</h1>
			<Search />
			<p>
				Open source
				<a
					href="https://github.com/macarenamisterio/react-week3-project"
					target="a_blank">
					code
				</a>
				created by Macarena Misterio
			</p>
		</div>
	);
}

export default App;
