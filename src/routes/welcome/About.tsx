import live_tracking from "../../resources/live-tracking.png";
import rider from "../../resources/rider.png";
import list_icon from "../../resources/no-min-order.png";
import "./about.scss";

const About = () => {
	type Props = { icon: any; title: string; summary: string };
	const Item = (props: Props) => {
		return (
			<div className="welcome--about-item">
				<img src={props.icon}></img>
				<p className="title text-light">{props.title}</p>
				<p className="subtitle">{props.summary}</p>
			</div>
		);
	};

	const aboutItems = [
		{
			icon: list_icon,
			title: "No Minimum Order",
			summary:
				"Order in for yourself or for the group, with no restrictions on order value",
		},
		{
			icon: live_tracking,
			title: "Live Order Tracking",
			summary:
				"Know where your order is at all times, from the restaurant to your doorstep",
		},
		{
			icon: rider,
			title: "Lightning-Fast Delivery",
			summary:
				"Experience Swiggy's superfast delivery for food delivered fresh & on time",
		},
	];

	return (
		<div className="welcome--about-bg">
			<div className="welcome--header-section d-flex justify-content-around">
				{aboutItems.map((item, idx) => {
					return (
						<div key={idx}>
							<Item
								icon={item.icon}
								title={item.title}
								summary={item.summary}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default About;
