export const Paths = {
	WELCOME: "/",
	HOME: "/home",
};

export const RESTAURANTS_IMG_PREFIX =
	"https://raw.githubusercontent.com/pruthvi-21/Swiggy-Api/master/resources/restaurants/";

export const API = {
	RESTAURANTS:
		"https://raw.githubusercontent.com/pruthvi-21/Swiggy-Api/master/restaurants.json",
};

export const getRestaurantImgUrl = (id: number) => {
	return `${RESTAURANTS_IMG_PREFIX}${id}.webp`;
};
