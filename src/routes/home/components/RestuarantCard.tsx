import styled from "styled-components";
import { RestaurantBase } from "../../../models/RestaurantBase";
import { getRestaurantImgUrl } from "../../Utils";

type Props = { info: RestaurantBase };

const bp = 652;

const Container = styled.div`
	padding: 15px;
	display: flex;
	align-items: center;
	width: 100%;
	border: 1px solid #ebebeb;
	transition: 200ms;

	&:hover {
		background-color: #f5f5f5;
		box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 0.6);
	}

	@media (min-width: ${bp}px) {
		padding: 20px;
		min-width: calc(254px + 20px + 20px + 2px);
		flex-direction: column;
	}
`;

const ContentContainer = styled.div`
	margin-left: 15px;
	width: 100%;
	max-width: 254px;

	@media (min-width: ${bp}px) {
		margin-left: 0;
		margin-top: 13px;
	}
`;

const Title = styled.div`
	font-size: 16px;
	font-weight: 500;
	word-break: break-word;
`;

const Summary = styled.div`
	color: #686b78;
	min-height: 34px;
	font-size: 13px;
	margin-top: 4px;
	line-height: 17px;
`;

const InfoContainer = styled.div`
	display: flex;
	font-size: 12px;
	justify-content: space-between;
	color: #686b78;
	margin-top: 10px;

	.rating {
		color: #fff;
		display: flex;
		align-items: center;
		padding: 1px 6px;
		min-width: 37px;
		height: 20px;
		font-size: 11px;

		span {
			margin-left: 4px;
		}
	}
	.rating-avg {
		background-color: #db7c38;
	}
	.rating-good {
		background-color: #669900;
	}
	.rating-poor {
		background-color: #b83a3a;
	}
`;

const RestaurantImage = styled.img`
	height: 80px;
	aspect-ratio: 127/80;
	@media (min-width: ${bp}px) {
		height: 160px;
	}
`;

const RestuarantCard = ({ info }: Props) => {
	if (info == undefined) return <div></div>;
	let ratingClass = "";
	if (info.res_rating >= 4) ratingClass = "rating-good";
	if (info.res_rating >= 2.5 && info.res_rating < 4)
		ratingClass = "rating-avg";
	if (info.res_rating < 2.5) ratingClass = "rating-poor";
	return (
		<Container>
			<div>
				<RestaurantImage
					src={getRestaurantImgUrl(info.res_id)}
					alt=""
				/>
			</div>
			<ContentContainer>
				<Title>{info.res_name}</Title>
				<Summary>{info.res_summary}</Summary>

				<InfoContainer>
					<div className={`rating ${ratingClass}`}>
						<StarIcon />
						<span>{info.res_rating.toFixed(1)}</span>
					</div>
					<div>•</div>
					<div>{info.res_deliveryTime} MINS</div>
					<div>•</div>
					<div>₹{info.res_costForTwo} FOR TWO</div>
				</InfoContainer>
			</ContentContainer>
		</Container>
	);
};

const StarIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="11"
			height="11"
			fill="#fff"
			viewBox="0 0 24 24"
		>
			<path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
		</svg>
	);
};

export default RestuarantCard;
