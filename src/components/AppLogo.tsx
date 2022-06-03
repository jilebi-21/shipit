import logo from "../logo.svg";
import styled from "styled-components";

type Props = { size?: number };

const Wrapper = styled.div`
	display: inline-block;
`;

const LogoContainer = styled.div<Props>`
	height: ${(props) => props.size || 50}px;
	margin: 0.4em;
	margin-left: 0.25em;
	font-size: ${(props) => props.size || 50}px;
	display: flex;
	align-items: center;
`;

const LogoIcon = styled.img`
	height: 90%;
	aspect-ratio: 1;
`;

const LogoTextContainer = styled.p`
	font-family: "Source Sans Pro", sans-serif;
`;

const AppLogo = (props: Props) => {
	return (
		<Wrapper>
			<LogoContainer size={props.size}>
				<LogoIcon src={logo}></LogoIcon>
				<LogoTextContainer>
					<span style={{ color: "#ff5758" }}>Ship</span>
					<span style={{ color: "#000" }}>.</span>
					<span style={{ color: "#00989e" }}>it</span>
				</LogoTextContainer>
			</LogoContainer>
		</Wrapper>
	);
};

export default AppLogo;
