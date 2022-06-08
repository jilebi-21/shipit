import brandLogo from "../../logo.svg";
import bg_img from "../../resources/welcome-bg.png";
import About from "./About";
import "./welcome.scss";

type Props = {};

const WelcomePage = (props: Props) => {
	const NavBar = () => {
		return (
			<div className="d-flex welcome--nav-container">
				<img src={brandLogo} width={187.5}></img>
				<div className="filler"></div>
				<div className="d-flex flex-row align-items-center">
					<a href="/login" className="nav-btn login-btn">
						Login
					</a>
					<a href="/signup" className="nav-btn signup-btn">
						Sign up
					</a>
				</div>
			</div>
		);
	};

	const SearchBar = () => {
		return (
			<div className="welcome--header-search-container d-flex">
				<input
					type="text"
					className="input-style"
					placeholder="Enter your delivery location"
				/>
				<a href="#" className="search-btn">
					FIND FOOD
				</a>
			</div>
		);
	};

	const PopularCities = () => {
		const popularCities = [
			"Ahmedabad",
			"Bangalore",
			"Chennai",
			"Delhi",
			"Gurgaon",
			"Hyderabad",
			"Kolkata",
			"Mumbai",
			"Pune",
		];
		return (
			<div className="welcome--header-cities-container">
				<h3>POPULAR CITIES IN INDIA</h3>
				<div>
					{popularCities.map((item, idx) => (
						<span key={idx}>{item}</span>
					))}
				</div>
			</div>
		);
	};

	return (
		<div>
			<div className="welcome-header-bg">
				<div>
					<img src={bg_img} className="bg-image" alt=""></img>
					<div className="backdrop"></div>
				</div>
				<div className="welcome--header-section">
					<NavBar />
					<div className="d-flex align-items-center justify-content-center">
						<div className="welcome--header-content">
							<div>
								<p className="title text-light">Hungry?</p>
								<p className="subtitle">
									Order food from favourite restaurants near
									you.
								</p>
							</div>
							<SearchBar />
							<PopularCities />
						</div>
					</div>
				</div>
			</div>
			<About />
		</div>
	);
};

export default WelcomePage;