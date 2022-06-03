import "./App.css";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="app-container">
			<NavBar />
			<div
				id="home"
				style={{ backgroundColor: "#5c5c01", height: "600px" }}
			>
				Home
			</div>
			<div
				id="about"
				style={{ backgroundColor: "#046f04", height: "600px" }}
			>
				About
			</div>
			<div
				id="services"
				style={{ backgroundColor: "#036363", height: "600px" }}
			>
				Services
			</div>
			<div
				id="support"
				style={{ backgroundColor: "#760076ff", height: "600px" }}
			>
				Support
			</div>
		</div>
	);
}

export default App;
