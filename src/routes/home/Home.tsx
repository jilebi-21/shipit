import { useEffect, useState } from "react";
import styled from "styled-components";
import Appbar from "../../components/Appbar";
import { RestaurantBase } from "../../models/RestaurantBase";
import { API } from "../Utils";
import RestuarantCard from "./components/RestuarantCard";

const Container = styled.div`
	max-width: 1300px;
	margin: auto;
	padding: 16px;
	position: relative;
`;

const RestaurantCountContainer = styled.div`
	padding-top: 20px;
	position: sticky;
	top: 0;
	background-color: #fff;

	.title {
		font-weight: 600;
		font-size: 28px;
		flex: 1;
	}

	.divider {
		height: 1px;
		width: 100%;
		margin-top: 10px;
		background-color: #e9e9eb;
	}
`;

const RestaurantsContainer = styled.div`
	--grid-count: 1;
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(var(--grid-count), 1fr);
	margin-top: 30px;

	@media (min-width: 652px) {
		--grid-count: 2;
	}

	@media (min-width: 968px) {
		--grid-count: 3;
	}

	@media (min-width: 1284px) {
		--grid-count: 4;
	}
`;

const Home = () => {
	const [restaurantsList, setRestaurants] = useState<RestaurantBase[]>([]);

	const fetchRestaurants = async () => {
		const response = await fetch(API.RESTAURANTS);
		const res = await response.json();
		setRestaurants(res.response);
	};

	useEffect(() => {
		fetchRestaurants();
	}, []);

	return (
		<div>
			<Appbar />
			<div></div>
			<Container>
				<RestaurantCountContainer>
					<div className="title">
						{restaurantsList.length} Restaurants
					</div>
					<div className="divider"></div>
				</RestaurantCountContainer>
				<RestaurantsContainer>
					{restaurantsList.map((item, idx) => {
						return (
							<div key={idx}>
								<RestuarantCard info={item} />
							</div>
						);
					})}
				</RestaurantsContainer>
			</Container>
		</div>
	);
};

export default Home;
