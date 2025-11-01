import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, foods, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const total = getTotalCartAmount();
  const delivery = total === 0 ? 0 : 2;

  return (
    <section className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <p>Review your delicious selections before checkout.</p>
      </div>

      <div className="cart-table">
        <div className="cart-table-header">
          <p>Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {foods.filter(f => cartItems[f.id]).length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty. Explore dishes and add your favorites!</p>
            <button onClick={() => navigate("/")}>Back to Menu</button>
          </div>
        ) : (
          foods.map(item => {
            if (cartItems[item.id]) {
              return (
                <div className="cart-row" key={item.id}>
                  <img src={assets[item.image]} alt={item.name} className="cart-img" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${(item.price * cartItems[item.id]).toFixed(2)}</p>
                  <span
                    className="cart-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </span>
                </div>
              );
            }
            return null;
          })
        )}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h3>Cart Summary</h3>
          <div className="cart-summary">
            <div className="cart-line">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="cart-line">
              <span>Delivery Fee</span>
              <span>₹{delivery.toFixed(2)}</span>
            </div>
            <hr />
            <div className="cart-line total">
              <b>Total</b>
              <b>₹{(total + delivery).toFixed(2)}</b>
            </div>
          </div>
          <button
            className="btn primary checkout-btn"
            onClick={() => navigate("/order")}
            disabled={total === 0}
          >
            Proceed to Checkout
          </button>
        </div>

        <div className="cart-promo">
          <h3>Promo Code</h3>
          <p>Have a discount code? Enter it below.</p>
          <div className="promo-input">
            <input type="text" placeholder="Enter promo code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
