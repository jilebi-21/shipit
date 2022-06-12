import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import WelcomePage from "./routes/welcome/Welcome";

const ROOT_PATH = "/";

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<WelcomePage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
