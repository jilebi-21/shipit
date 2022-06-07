import styled from "styled-components";
import brandLogo from "./../logo.svg";
import "./welcome.css";
import background_img from "../resources/welcome-bg.png";

type Props = {};

const NavBar = () => {
	return (
		<div className="d-flex flex-row">
			<img src={brandLogo} width={187.5}></img>
			<div className="filler"></div>
			<div className="d-flex flex-row align-items-center">
				<a href="/login" className="welcome--nav-btn login-btn">
					Login
				</a>
				<a href="/signup" className="welcome--nav-btn signup-btn">
					Sign up
				</a>
			</div>
		</div>
	);
};

const SearchBarContainer = styled.div`
	max-width: 600px;
	margin-top: 35px;

	.input-style {
		height: 60px;
		line-height: 28px;
		padding: 0 15px;
		caret-color: #fc8019;
		font-size: 18px;
		font-weight: 500;
		border: 1px solid #bfbfc4;
		flex-grow: 1;
		outline: none;

		&:focus {
			border: 1px solid #fc8019;
		}
	}

	.search-btn {
		text-decoration: none;
		cursor: pointer;
		display: inline-block;
		text-align: center;
		color: #fff;
		background-color: #fc8019;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
		height: 60px;
		line-height: 60px;
		width: 140px;
		font-size: 16px;
		font-weight: 700;
		letter-spacing: 0.53px;
		padding: 0;
		margin: 0;
	}
`;

const SearchBar = () => {
	return (
		<SearchBarContainer className="d-flex">
			<input
				type="text"
				className="input-style"
				placeholder="Enter your delivery location"
			/>
			<a href="#" className="search-btn">
				FIND FOOD
			</a>
		</SearchBarContainer>
	);
};

const Header = styled.p`
	margin: 0;
	font-size: 40px;
	font-weight: 600;
	color: #fff;
	letter-spacing: -0.45px;
`;

const Subheader = styled.p`
	font-size: 24px;
	font-weight: 300;
	letter-spacing: -0.3px;
	color: #dedede;
`;

const CitiesContainer = styled.div`
	h3 {
		font-weight: 400;
		font-size: 15px;
		color: #dedede;
		margin: 30px 0 10px;
		letter-spacing: -0.2px;
		text-transform: uppercase;
	}
	span {
		display: inline-block;
		color: #cdcdcd;
		letter-spacing: -0.3px;
		line-height: 1.5;
		margin-right: 8px;
		font-weight: 600;
		font-size: 16px;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}

	span:nth-child(2n) {
		color: #ffffff;
	}
`;

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
		<CitiesContainer>
			<h3>POPULAR CITIES IN INDIA</h3>
			<div>
				{popularCities.map((item, idx) => (
					<span key={idx}>{item}</span>
				))}
			</div>
		</CitiesContainer>
	);
};

const WelcomePage = (props: Props) => {
	return (
		<div className="welcome-header-bg">
			<img
				src={background_img}
				className="high-res-image position-absolute"
				alt=""
				height={500}
				role="presentation"
			></img>
			<div className="backdrop"></div>
			<div className="welcome-section">
				<NavBar />
				<div className="d-flex align-items-center justify-content-center header-section">
					<div className="city-search-div">
						<div>
							<Header>Hungry?</Header>
							<Subheader>
								Order food from favourite restaurants near you.
							</Subheader>
						</div>
						<SearchBar />
						<PopularCities />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
