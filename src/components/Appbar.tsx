import { NavbarBrand } from "reactstrap";
import styled from "styled-components";
import appLogo from "../resources/app-icon.svg";
import searchIcon from "../resources/navbar-search-icon.svg";
import profileIcon from "../resources/navbar-profile-icon.svg";
import "./test.scss";

const Wrapper = styled.div`
	--padding-vertical: 0.7rem;
	box-shadow: 0 3px 10px #0001;
	padding-top: var(--padding-vertical);
	padding-bottom: var(--padding-vertical);
`;

const Container = styled.div`
	--padding-horizontal: 1rem;
	max-width: 1200px;
	margin: auto;
	display: flex;
	align-items: center;
	padding-left: var(--padding-horizontal);
	padding-right: var(--padding-horizontal);

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		font-size: 15px;
		font-weight: 600;

		li {
			margin: 0.5rem;
			@media (min-width: 768px) {
				margin: auto 1.5rem;
			}
		}
	}
`;

const LocationContainer = styled.div`
	display: inline-block;
	span {
		font-size: 15px;
	}
`;

const SearchIconContainer = styled.div`
	display: flex;
	place-items: center;
	img {
		width: 17px;
		aspect-ratio: 1;
	}
	p {
		margin: 0;
		margin-left: 8px;
		display: none;
		@media (min-width: 768px) {
			display: unset;
		}
	}
`;

const CartIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	p {
		margin: 2px;
	}

	.label {
		display: none;
	}

	.counter-container {
		width: 20px;
		height: 20px;
		margin-top: -5px;

		p {
			position: relative;
			top: -110%;
			font-size: 13px;
		}
	}

	@media (min-width: 768px) {
		flex-direction: row;

		.label {
			display: unset;
		}
	}
`;

const ProfileIconContainer = styled.div`
	display: flex;

	img {
		width: 20px;
		aspect-ratio: 1;
	}
	p {
		margin: 0;
		margin-left: 8px;
		display: none;
		@media (min-width: 768px) {
			display: unset;
		}
	}
`;

const ColoredSvg = styled.svg`
	stroke-width: 3px;
	stroke: #000;
`;

const Appbar = () => {
	return (
		<Wrapper>
			<Container>
				<NavbarBrand>
					<img src={appLogo} width={34} />
				</NavbarBrand>
				<LocationContainer>
					<span>Visakhapatnam</span>
				</LocationContainer>
				<div style={{ flexGrow: 1 }}></div>

				<ul>
					<li>
						<SearchIconContainer>
							<img src={searchIcon} />
							<p>Search</p>
						</SearchIconContainer>
					</li>
					<li>
						<CartIconContainer>
							<div className="counter-container">
								<Icon />
								<p>0</p>
							</div>
							<p className="label">Cart</p>
						</CartIconContainer>
					</li>
					<li>
						<ProfileIconContainer>
							<img src={profileIcon} />
							<p>Pruthvi</p>
						</ProfileIconContainer>
					</li>
				</ul>
			</Container>
		</Wrapper>
	);
};

const Icon = () => {
	return (
		<ColoredSvg viewBox="-1 0 37 32" height="20" width="20" fill="#fff0">
			<path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
		</ColoredSvg>
	);
};

export default Appbar;
