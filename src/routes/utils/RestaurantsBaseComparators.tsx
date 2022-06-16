import { RestaurantBase } from "../../models/RestaurantBase";

export const RestaurantBaseComparators = (
	list: RestaurantBase[],
	isAscending: boolean
) => {
	const newList: RestaurantBase[] = JSON.parse(JSON.stringify(list));

	function sortOffset(a: number, b: number) {
		return b - a; //a > b ? -1 : a < b ? 1 : 0;
	}

	function sortByRating(): RestaurantBase[] {
		if (!isAscending) {
			newList.sort((a, b) => sortOffset(a.res_rating, b.res_rating));
		} else {
			newList.sort((a, b) => sortOffset(b.res_rating, a.res_rating));
		}
		return newList;
	}

	function sortByCost() {
		if (!isAscending) {
			newList.sort((a, b) =>
				sortOffset(a.res_costForTwo, b.res_costForTwo)
			);
		} else {
			newList.sort((a, b) =>
				sortOffset(b.res_costForTwo, a.res_costForTwo)
			);
		}
		return newList;
	}

	function sortByDeliveryTime() {
		if (!isAscending) {
			newList.sort((a, b) =>
				sortOffset(a.res_deliveryTime, b.res_deliveryTime)
			);
		} else {
			newList.sort((a, b) =>
				sortOffset(b.res_deliveryTime, a.res_deliveryTime)
			);
		}
		return newList;
	}

	return { sortByCost, sortByDeliveryTime, sortByRating };
};
