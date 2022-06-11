import "./App.scss";
import Footer from "./components/Footer";
import WelcomePage from "./routes/welcome/Welcome";

function App() {
	return (
		<div className="app-container">
			<WelcomePage />
			<Footer />
		</div>
	);
}

export default App;
