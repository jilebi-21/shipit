export interface RestaurantBase {
	res_id: number; //Restaurant ID
	res_name: string; //Restautant Name
	res_summary: string; //Restaurant Summary
	res_rating: number; //Restaurant Ratings
	res_totalRatings: number; //Total ratings count of a restaurant
	res_deliveryTime: number; //Delivery time by the restaurant
	res_costForTwo: number; //Cost at this restaurant for two people
	res_img: string; //Restaurant preview image
}
