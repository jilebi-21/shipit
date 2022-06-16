import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Appbar from "../../components/Appbar";
import { RestaurantBase } from "../../models/RestaurantBase";
import { API } from "../Utils";
import { RestaurantBaseComparators } from "../utils/RestaurantsBaseComparators";
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

	.wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title {
		font-weight: 600;
		font-size: 28px;
		display: inline-block;
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
	const [isAscending, setToAscending] = useState(true);
	const fetchRestaurants = async () => {
		const response = await fetch(API.RESTAURANTS);
		const res = await response.json();
		setRestaurants(res.response);
	};

	useEffect(() => {
		fetchRestaurants();
	}, []);

	const sortOptions = ["Cost", "Delivery Time", "Rating"];

	const handleSpinnerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const comparator = RestaurantBaseComparators(
			restaurantsList,
			isAscending
		);
		let list = restaurantsList;
		switch (e.target.value) {
			case sortOptions[0]:
				list = comparator.sortByCost();
				break;
			case sortOptions[1]:
				list = comparator.sortByDeliveryTime();
				break;
			case sortOptions[2]:
				list = comparator.sortByRating();
				break;
		}

		setRestaurants(list);
	};

	return (
		<div>
			<Appbar />
			<Container>
				<RestaurantCountContainer>
					<div className="wrapper">
						<div className="title">
							{restaurantsList.length} Restaurants
						</div>
						<div>
							<select onChange={handleSpinnerChange}>
								{sortOptions.map((item, idx) => {
									return <option>{item}</option>;
								})}
							</select>
							<button
								onClick={() => {
									setToAscending(!isAscending);
									restaurantsList.reverse();
								}}
							>
								Flip
							</button>
						</div>
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
