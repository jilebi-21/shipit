import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Home from "./routes/home/Home";
import { Paths } from "./routes/Utils";
import WelcomePage from "./routes/welcome/Welcome";

const ROOT_PATH = "/";

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route path={Paths.WELCOME} element={<WelcomePage />} />
				<Route path={Paths.HOME} element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
