import { useEffect, useState } from "react";
import Appbar from "../../components/Appbar";
import { RestaurantBase } from "../../models/RestaurantBase";
import { API } from "../Utils";

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

			{restaurantsList.map((item, idx) => {
				return <div key={idx}>{item.res_name}</div>;
			})}
		</div>
	);
};

export default Home;
