import { useEffect, useState } from "react";
import styled from "styled-components";
import Appbar from "../../components/Appbar";
import { RestaurantBase } from "../../models/RestaurantBase";
import { API } from "../Utils";
import { RestaurantBaseComparators } from "../utils/RestaurantsBaseComparators";
import RestuarantCard from "./components/RestuarantCard";
import StyledDropdown, {
	DropdownItemType,
} from "../../components/StyledDropdown";
import sortIcon from "../../resources/sort-icon.svg";

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

	enum SortOptionsKey {
		COST,
		DELIVERY_TIME,
		RATING,
	}

	const sortOptions: DropdownItemType[] = [
		{ id: SortOptionsKey.COST, name: "Cost" },
		{ id: SortOptionsKey.DELIVERY_TIME, name: "Delivery Time" },
		{ id: SortOptionsKey.RATING, name: "Rating" },
	];

	const handleSpinnerChange = (id: number) => {
		const comparator = RestaurantBaseComparators(
			restaurantsList,
			isAscending
		);
		let list = restaurantsList;
		switch (id) {
			case SortOptionsKey.COST:
				list = comparator.sortByCost();
				break;
			case SortOptionsKey.DELIVERY_TIME:
				list = comparator.sortByDeliveryTime();
				break;
			case SortOptionsKey.RATING:
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
							<StyledDropdown
								options={sortOptions}
								callback={handleSpinnerChange}
								default={SortOptionsKey.DELIVERY_TIME}
							/>
							<SortIcon
								callback={() => {
									setToAscending(!isAscending);
									restaurantsList.reverse();
								}}
							/>
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

const SortIconContainer = styled.div`
	margin: 10px;
	padding: 3.5px;
	width: 24px;
	height: 24px;
	display: inline-block;
`;
type SortProps = { callback: () => void };

const SortIcon = ({ callback }: SortProps) => {
	return (
		<SortIconContainer onClick={callback}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="Capa_1"
				x="0px"
				y="0px"
				viewBox="0 0 489.389 489.389"
			>
				<path d="M261.294,326.102c-8.3-7.3-21.8-6.2-29.1,2.1l-77,86.8v-346.9c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v346.9    l-77-86.8c-8.3-8.3-20.8-9.4-29.1-2.1c-8.3,8.3-9.4,20.8-2.1,29.1l113.4,126.9c8.5,10.5,23.5,8.9,30.2,0l114.4-126.9    C270.694,347.002,269.694,333.402,261.294,326.102z" />
				<path d="M483.994,134.702l-112.4-126.9c-10-10.1-22.5-10.7-31.2,0l-114.4,126.9c-7.3,8.3-6.2,21.8,2.1,29.1    c12.8,10.2,25.7,3.2,29.1-2.1l77-86.8v345.9c0,11.4,9.4,20.8,20.8,20.8s20.8-8.3,20.8-19.8v-346.8l77,86.8    c8.3,8.3,20.8,9.4,29.1,2.1C490.194,155.502,491.294,143.002,483.994,134.702z" />
			</svg>
		</SortIconContainer>
	);
};

export default Home;
