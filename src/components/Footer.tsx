import styled from "styled-components";
import brandLogo from "../logo.svg";
import fbLogo from "../resources/social-facebook.svg";
import instagramLogo from "../resources/social-instagram.svg";
import twitterLogo from "../resources/social-twitter.svg";
import linkedinLogo from "../resources/social-linkedin.svg";
import playStore from "../resources/download-play-store.webp";
import appStore from "../resources/download-app-store.webp";

const FooterContainer = styled.div`
	max-width: 1200px;
	padding: 16px;
	margin: auto;

	ul {
		list-style-type: none;
		padding: 0;

		li {
			margin: 5px;
			text-align: center;

			a {
				color: #000;
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}

			@media (min-width: 768px) {
				text-align: start;
			}
		}
	}
`;

interface FooterListItem {
	title: string;
	url: string;
}

const ListItemsContainer = styled.div`
	display: inline-block;

	p {
		font-weight: 700;
		text-align: center;

		@media (min-width: 768px) {
			text-align: start;
		}
	}
`;

const Divider = styled.div`
	height: 1px;
	background-color: black;
	margin: 20px 0;
	opacity: 0.2;
`;

const DownloadIcon = styled.img`
	width: 140px;
	margin: 10px;
`;

const SocialMediaIcons = styled.img`
	width: 40px;
	aspect-ratio: 1;
	margin: 5px;
	cursor: pointer;
`;

const CopyrightText = styled.p`
	font-size: 13.5px;
	color: rgb(79, 79, 79);

	margin-top: 2.3rem;
`;

const FooterGridContainer = styled.div`
	display: grid;
	grid-template-areas:
		"two four"
		"one three";
	gap: 30px;

	@media (min-width: 768px) {
		grid-template-areas: "one two three four";
	}

	.one {
		grid-area: one;
	}
	.two {
		grid-area: two;
	}
	.three {
		grid-area: three;
	}
	.four {
		display: flex;
		align-items: center;
		flex-direction: column;
		grid-area: four;
	}
`;

const Footer = () => {
	const companyListItems: FooterListItem[] = [
		{ title: "About us", url: "#" },
		{ title: "Team", url: "#" },
		{ title: "Careers", url: "#" },
		{ title: "Swiggy Blog", url: "#" },
		{ title: "Bug Bounty", url: "#" },
		{ title: "Swiggy One", url: "#" },
		{ title: "Swiggy Corporate", url: "#" },
		{ title: "Swiggy Instamart", url: "#" },
	];

	const contactListItems: FooterListItem[] = [
		{ title: "Help & Support", url: "#" },
		{ title: "Partner with us", url: "#" },
		{ title: "Ride with us", url: "#" },
	];

	const legalListItems: FooterListItem[] = [
		{ title: "Terms & Conditions", url: "#" },
		{ title: "Refund & Cancellation", url: "#" },
		{ title: "Privacy Policy", url: "#" },
		{ title: "Coockie Policy", url: "#" },
		{ title: "Offer Terms", url: "#" },
		{ title: "Phising & Fraud", url: "#" },
	];

	return (
		<FooterContainer>
			<div className="d-flex justify-content-between">
				<img src={brandLogo} width={140} />
				<div className="d-inline-block">
					<SocialMediaIcons src={fbLogo} />
					<SocialMediaIcons src={instagramLogo} width={40} />
					<SocialMediaIcons src={twitterLogo} width={40} />
					<SocialMediaIcons src={linkedinLogo} width={40} />
				</div>
			</div>
			<Divider />
			<FooterGridContainer>
				<ListItemsContainer className="one">
					<p>Company</p>
					<ul>
						{companyListItems.map((item, idx) => {
							return (
								<li>
									<a href={item.url}>{item.title}</a>
								</li>
							);
						})}
					</ul>
				</ListItemsContainer>
				<ListItemsContainer className="two">
					<p>Contact</p>
					<ul>
						{contactListItems.map((item, idx) => {
							return (
								<li>
									<a href={item.url}>{item.title}</a>
								</li>
							);
						})}
					</ul>
				</ListItemsContainer>
				<ListItemsContainer className="three">
					<p>Legal</p>
					<ul>
						{legalListItems.map((item, idx) => {
							return (
								<li>
									<a href={item.url}>{item.title}</a>
								</li>
							);
						})}
					</ul>
				</ListItemsContainer>

				<div className="four">
					<div>
						<a href="#">
							<DownloadIcon src={playStore} />
						</a>
						<br></br>
						<a href="#">
							<DownloadIcon src={appStore} />
						</a>
					</div>
				</div>
			</FooterGridContainer>
			<Divider />
			<div>
				<CopyrightText>
					By continuing past this page, you agree to our Terms of
					Service, Cookie Policy, Privacy Policy and Content Policies.
					All trademarks are properties of their respective owners. ©
					2022 Swiggy Ltd. All rights reserved.
				</CopyrightText>
			</div>
		</FooterContainer>
	);
};

export default Footer;
