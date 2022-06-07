import { Input } from "reactstrap";
import styled from "styled-components";
import brandLogo from "./../logo.svg";
import "./welcome.css";

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
	width: 600px;
	margin-top: 35px;

	.input-style {
		height: 60px;
		line-height: 28px;
		padding: 0 15px;
		caret-color: #fc8019;
		font-size: 18px;
		font-weight: 500;
		border-radius: 0;
		border: 1px solid #bfbfc4;
		flex-grow: 1;
		outline: none;

		&:focus {
			outline: none;
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
	margin-top: 50px;
	font-size: 40px;
	font-weight: 600;
	letter-spacing: -0.45px;
`;

const Subheader = styled.p`
	font-size: 24px;
	font-weight: 300;
	letter-spacing: -0.3px;
	color: #686b78;
`;

const CitiesContainer = styled.div`
	h3 {
		font-weight: 400;
		font-size: 15px;
		color: #a9abb2;
		margin: 30px 0 10px;
		letter-spacing: -0.2px;
		text-transform: uppercase;
	}
	span {
		display: inline-block;
		color: #686b78;
		letter-spacing: -0.3px;
		line-height: 1.5;
		margin-right: 8px;
		font-weight: 600;
		font-size: 16px;
	}

	span:nth-child(2n) {
		color: #93959f;
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
		<div className="welcome-section position-relative">
			<div className="city-search-div">
				<NavBar />
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
	);
};

export default WelcomePage;
