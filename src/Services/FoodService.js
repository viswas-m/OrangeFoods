// src/services/FoodService.js
import foodList from "../data/foodList.json";
import foodDetails from "../data/foodDetails.json";


const FoodService = {
  /**
   * Get all food items.
   */
  getAllFoods: async () => {
    return foodList || [];
  },

  /**
   * Get top trending (or featured) foods.
   * By default, returns first 10.
   */
  getTrendingFoods: async (limit = 10) => {
    return (foodList || []).slice(0, limit);
  },

  /**
   * Get detailed info for a specific food by ID.
   */
  getFoodById: async (id) => {
    const details =
      (foodDetails || []).find((f) => String(f.id) === String(id)) ||
      (foodList || []).find((f) => String(f.id) === String(id));
    return details || null;
  },

  /**
   * Get foods by category.
   * Returns all foods if category is "All" or empty.
   */
  getFoodsByCategory: async (category = "All") => {
    if (!category || category === "All") return foodList || [];
    return (foodList || []).filter(
      (f) => f.category?.toLowerCase() === category.toLowerCase()
    );
  },

  /**
   * Search foods by name (case-insensitive).
   */
  searchFoods: async (query) => {
    if (!query) return foodList || [];
    const lowerQuery = query.toLowerCase();
    return (foodList || []).filter((f) =>
      f.name.toLowerCase().includes(lowerQuery)
    );
  },
};

export default FoodService;
