import React, { useEffect, useState } from "react";
import FoodService from "../../services/FoodService";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

export const FoodDisplay = ({ category }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    FoodService.getAllFoods().then(setFoods);
  }, []);

  const filtered =
    category === "All" || !category
      ? foods
      : foods.filter(f => f.category === category);

  return (
    <section className="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {filtered.map(item => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
