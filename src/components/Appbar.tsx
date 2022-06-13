import { Badge, NavbarBrand } from "reactstrap";
import styled from "styled-components";
import appLogo from "../resources/app-icon.svg";
import searchIcon from "../resources/navbar-search-icon.svg";
import profileIcon from "../resources/navbar-profile-icon.svg";
import cartIconBg from "../resources/navbar-cart-bg.svg";
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

const Appbar = () => {
	const LocationView = () => {
		const Container = styled.div`
			display: inline-block;
			span {
				font-size: 15px;
			}
		`;

		return (
			<Container>
				<span>Visakhapatnam</span>
			</Container>
		);
	};

	const SearchIcon = () => {
		const IconContainer = styled.div`
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
		return (
			<IconContainer>
				<img src={searchIcon} />
				<p>Search</p>
			</IconContainer>
		);
	};

	const CartIcon = () => {
		const CartIndicator = styled.div`
			display: flex;
			flex-direction: column;
			align-items: center;

			p {
				text-align: center;
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

		return (
			<div>
				<CartIndicator>
					<div className="counter-container">
						<Icon />
						<p>0</p>
					</div>
					<p className="label">Cart</p>
				</CartIndicator>
			</div>
		);
	};

	const Profile = () => {
		const IconContainer = styled.div`
			display: flex;
			place-items: center;

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
		return (
			<IconContainer>
				<img src={profileIcon} />
				<p>Pruthvi</p>
			</IconContainer>
		);
	};

	return (
		<Wrapper>
			<Container>
				<NavbarBrand>
					<img src={appLogo} width={34} />
				</NavbarBrand>
				<LocationView />
				<div style={{ flexGrow: 1 }}></div>

				<ul>
					<li>
						<SearchIcon />
					</li>
					<li>
						<CartIcon />
					</li>
					<li>
						<Profile />
					</li>
				</ul>
			</Container>
		</Wrapper>
	);
};

const Icon = () => {
	const Colored = styled.svg`
		fill: #fff;
		stroke-width: 3px;
		stroke: #000;
	`;

	return (
		<Colored viewBox="-1 0 37 32" height="20" width="20" fill="#fff0">
			<path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
		</Colored>
	);
};

export default Appbar;
