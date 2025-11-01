import { createContext, useState, useEffect } from "react";
import FoodService from "../services/FoodService";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [foods, setFoods] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    FoodService.getAllFoods().then(setFoods);
    FoodService.getTrendingFoods().then(setTrending);
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) updated[itemId] -= 1;
      else delete updated[itemId];
      return updated;
    });
  };

  const getCartCount = () =>
    Object.values(cartItems).reduce((a, b) => a + b, 0);

  const getTotalCartAmount = () =>
    foods.reduce(
      (total, item) =>
        total + (cartItems[item.id] ? cartItems[item.id] * item.price : 0),
      0
    );

  const contextValue = {
    foods,
    trending,
    cartItems,
    addToCart,
    removeFromCart,
    getCartCount,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
