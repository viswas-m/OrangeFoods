import React, { useEffect, useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useParams } from "react-router-dom";
import FoodService from "../../services/FoodService";
import { assets } from "../../assets/assets";
import "./FoodDetails.css";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  useEffect(() => {
    FoodService.getFoodById(id).then(setFood);
    window.scrollTo(0, 0);
  }, [id]);

  if (!food) return <p className="loading">Loading...</p>;

  return (
    <section className="food-details">
      <div className="food-image">
        <img src={assets[food.image]} alt={food.name} />
      </div>

      <div className="food-content">
        <h1>{food.name}</h1>

        <div className="meta-info">
          <span className="rating">⭐ {food.rating}</span>
          <span className="divider">|</span>
          <span className="time">🕒 {food.prepTime || "20 min"}</span>
          <span className="divider">|</span>
          <span className="serves">👨‍🍳 Serves {food.serves || "2"}</span>
        </div>

        <p className="food-description">{food.description}</p>

        <div className="tags">
          {food.tags?.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
          <span className="food-category">{food.category}</span>
        </div>

          <div className="price-and-action">
        <div className="food-price">₹{food.price}</div>
          <div className="food-actions">
          {!cartItems[id] ? (
            <button className="btn primary" onClick={() => addToCart(id)}>
              Add to Cart
            </button>
          ) : (
            <div className="food-counter">
              <button className="counter-btn" onClick={() => removeFromCart(id)}>–</button>
              <span>{cartItems[id]}</span>
              <button className="counter-btn" onClick={() => addToCart(id)}>+</button>
            </div>
          )}
        </div>
        </div>

        <div className="nutrition">
          <h3>Nutrition Facts</h3>
          <div className="nutrition-grid">
            <div className="nutrient">
              <strong>{food.nutrition?.calories}</strong>
              <span>Calories</span>
            </div>
            <div className="nutrient">
              <strong>{food.nutrition?.protein}</strong>
              <span>Protein</span>
            </div>
            <div className="nutrient">
              <strong>{food.nutrition?.carbs}</strong>
              <span>Carbs</span>
            </div>
            <div className="nutrient">
              <strong>{food.nutrition?.fat}</strong>
              <span>Fat</span>
            </div>
          </div>
        </div>

        <div className="preparation">
          <h3>Preparation</h3>
          <p>{food.preparation}</p>
        </div>

      
      </div>
    </section>
  );
};

export default FoodDetails;
