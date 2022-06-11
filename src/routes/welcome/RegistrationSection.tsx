import employees from "../../resources/welcome-feed-employees.png";
import yourRestaurant from "../../resources/welcome-your-restaurant.png";
import delivery from "../../resources/welcome-deliver.png";
import styled from "styled-components";

const Container = styled.div`
	background-color: #eaeaea;
	padding-top: 40px;
	padding-bottom: 20px;

	h1 {
		margin: 10px;
		font-size: 40px;
		font-weight: 600;
		letter-spacing: -0.45px;
		text-align: center;
	}
`;

const ItemStyle = styled.div`
	padding: 30px 10px;
	transition: 250ms;
	max-height: 90%;
	margin: 10px;

	img {
		width: 100%;
		margin: 10px auto;
	}

	.title {
		font-size: 20px;
		font-weight: 700;
	}

	.summary {
		font-size: 15px;
		color: #252525;
		line-height: 1.3;
	}

	&:hover {
		background-color: #c3c3c3;
		cursor: pointer;
	}
`;

const Link = styled.a`
	color: black;
	text-decoration: none;
	&:hover {
		color: black;
	}
`;

const RegistrationSection = () => {
	type Props = { icon: any; title: string; link: string };
	const Item = (props: Props) => {
		return (
			<Link href="#">
				<ItemStyle>
					<img src={props.icon}></img>
					<p className="title">{props.title}</p>
					<p className="summary">{props.link}</p>
				</ItemStyle>
			</Link>
		);
	};

	const registrationItems = [
		{
			icon: employees,
			title: "Feed your employees",
			linkTitle:
				"Create a business account for your company. Motivate employees at the office with food delivery. ",
		},
		{
			icon: yourRestaurant,
			title: "Your restaurant, delivered",
			linkTitle:
				"Add your restaurant and boost your visibility in your locality",
		},
		{
			icon: delivery,
			title: "Deliver with us?",
			linkTitle:
				"Sign up to deliver. Now you can make money by delivering food orders",
		},
	];

	return (
		<Container>
			<div className="welcome--header-section">
				<h1>You can do more than ordering food</h1>
				<div className="d-md-flex justify-content-md-around">
					{registrationItems.map((item, idx) => {
						return (
							<div key={idx}>
								<Item
									icon={item.icon}
									title={item.title}
									link={item.linkTitle}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</Container>
	);
};

export default RegistrationSection;
