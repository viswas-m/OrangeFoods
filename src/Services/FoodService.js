import foodList from "../data/foodList.json";
import foodDetails from "../data/foodDetails.json";
import specialOffers from "../data/specialOffers.json";

const FoodService = {

	getAllFoods: async () => {
		return foodList || [];
	},

	getFoodById: async (id) => {
		const details =
			(foodDetails || []).find((f) => String(f.id) === String(id)) ||
			(foodList || []).find((f) => String(f.id) === String(id));
		return details || null;
	},

	getFoodsByCategory: async (category = "All") => {
		if (!category || category === "All") return foodList || [];
		return (foodList || []).filter(
			(f) => f.category?.toLowerCase() === category.toLowerCase()
		);
	},

	searchFoodsByName: async (query) => {
		if (!query || query.trim() === "") {
			// Return all foods if query is empty
			return foodList || [];
		}

		const lowerQuery = query.toLowerCase().trim();
		return (foodList || []).filter((food) =>
			food.name.toLowerCase().includes(lowerQuery)
		);
	},

	getSpecialOffers: async () => specialOffers || [],

	getSpecialOfferById: async (id) =>
		(specialOffers || []).find((offer) => String(offer.id) === String(id)) || null,

};

export default FoodService;
