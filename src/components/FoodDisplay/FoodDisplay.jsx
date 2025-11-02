import React, { useContext, useEffect, useState } from "react";
import FoodService from "../../services/FoodService";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";
import "./FoodDisplay.css";

export const FoodDisplay = ({ category }) => {
	const [foods, setFoods] = useState([]);
	const { searchQuery } = useContext(StoreContext)

	useEffect(() => {
		const fetchFoods = async () => {
			const data = await FoodService.searchFoodsByName(searchQuery);
			setFoods(data);
		};
		fetchFoods();
	}, [searchQuery]);

	const filtered =
		category === "All" || !category
			? foods
			: foods.filter(f => f.category === category);

	return (
		<section className="food-display" id="food-items">
			<h2>Top Dishes Near You</h2>
			<div className="food-display-list">
				{filtered.map(item => (
					<FoodItem key={item.id} {...item} />
				))}
			</div>
		</section>
	);
};
