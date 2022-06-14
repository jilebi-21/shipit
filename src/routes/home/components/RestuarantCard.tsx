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
					<div>{info.res_rating}</div>
					<div>•</div>
					<div>{info.res_deliveryTime} MINS</div>
					<div>•</div>
					<div>₹{info.res_costForTwo} FOR TWO</div>
				</InfoContainer>
			</ContentContainer>
		</Container>
	);
};

export default RestuarantCard;
