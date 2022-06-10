import employees from "../../resources/welcome-feed-employees.png";
import yourRestaurant from "../../resources/welcome-your-restaurant.png";
import delivery from "../../resources/welcome-deliver.png";
import styled from "styled-components";

const ItemStyle = styled.div`
	padding: 30px 10px;
	transition: 250ms;
	margin: 10px;

	img {
		width: 100%;
		margin: 10px auto;
	}
	p {
		line-height: 36px;
		font-size: 28px;
		font-weight: 700;
	}

	&:hover {
		background-color: #eaeaea;
		cursor: pointer;
	}
`;

const RegistrationSection = () => {
	type Props = { icon: any; title: string; link: string };
	const Item = (props: Props) => {
		return (
			<ItemStyle>
				<img src={props.icon}></img>
				<p className="">{props.title}</p>
				<a href="#">{props.link}</a>
			</ItemStyle>
		);
	};

	const registrationItems = [
		{
			icon: employees,
			title: "Feed your employees",
			linkTitle: "Create a business account",
		},
		{
			icon: yourRestaurant,
			title: "Your restaurant, delivered",
			linkTitle: "Add your restaurant",
		},
		{
			icon: delivery,
			title: "Deliver with us?",
			linkTitle: "Sign up to deliver",
		},
	];

	return (
		<div className="">
			<div className="welcome--header-section d-md-flex justify-content-md-around">
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
	);
};

export default RegistrationSection;
