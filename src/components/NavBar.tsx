import {
	Button,
	Collapse,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	NavLink,
} from "reactstrap";
import styled from "styled-components";
import AppLogo from "./AppLogo";

type Props = {};

const Filler = styled.div`
	flex-grow: 1;
`;

const Item = styled(NavItem)`
	transition: 250ms;
	padding: 0 5px;
	margin: 2px;

	&:hover {
		background-color: #669900b9;
		border-radius: 50px;
	}
`;

const NavBar = (props: Props) => {
	return (
		<div id="nav-container">
			<Navbar color="light" expand="sm" light>
				<NavbarBrand href="/">
					<AppLogo size={24} />
				</NavbarBrand>
				<Filler />
				<NavbarToggler onClick={function noRefCheck() {}} />
				<Collapse navbar>
					<Nav className="m-auto" navbar>
						<Item active>
							<NavLink href="#home">Home</NavLink>
						</Item>
						<Item>
							<NavLink href="#about">About</NavLink>
						</Item>
						<Item>
							<NavLink href="#services">Services</NavLink>
						</Item>
						<Item>
							<NavLink href="#support">Support</NavLink>
						</Item>
					</Nav>
					<Filler />
				</Collapse>
				<Button>Login</Button>
			</Navbar>
		</div>
	);
};

export default NavBar;
