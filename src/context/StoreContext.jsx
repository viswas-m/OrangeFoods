import { createContext, useState, useEffect } from "react";
import FoodService from "../services/FoodService";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState({});
	const [foods, setFoods] = useState([]);
	const [specialOffers, setSpecialOffers] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	// Fetch all foods and special offers once
	useEffect(() => {
		(async () => {
			const [allFoods, offers] = await Promise.all([
				FoodService.getAllFoods(),
				FoodService.getSpecialOffers(),
			]);
			setFoods(allFoods);
			setSpecialOffers(offers);
		})();
	}, []);

	// Add to cart
	const addToCart = (itemId) => {
		setCartItems((prev) => ({
			...prev,
			[itemId]: (prev[itemId] || 0) + 1,
		}));
	};

	// Remove from cart
	const removeFromCart = (itemId) => {
		setCartItems((prev) => {
			const updated = { ...prev };
			if (updated[itemId] > 1) updated[itemId] -= 1;
			else delete updated[itemId];
			return updated;
		});
	};

	// Count total items
	const getCartCount = () =>
		Object.values(cartItems).reduce((a, b) => a + b, 0);

	// Calculate total amount
	const getTotalCartAmount = () =>
		foods.reduce(
			(total, item) =>
				total + (cartItems[item.id] ? cartItems[item.id] * item.price : 0),
			0
		);

	// Clear cart properly (must reset to {})
	const clearCartItems = () => {
		setCartItems({});
	};

	const contextValue = {
		foods,
		specialOffers,
		cartItems,
		addToCart,
		removeFromCart,
		getCartCount,
		getTotalCartAmount,
		searchQuery,
		setSearchQuery,
		clearCartItems,
	};

	return (
		<StoreContext.Provider value={contextValue}>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreContextProvider;
