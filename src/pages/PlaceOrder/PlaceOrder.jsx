import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const total = getTotalCartAmount();
  const delivery = total === 0 ? 0 : 2;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (total === 0) {
      alert("Your cart is empty! Please add items before proceeding.");
      navigate("/");
      return;
    }
    navigate("/payment");
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-field">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-field">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="tel" placeholder="Phone Number" required />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Order Summary</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{total.toFixed(2)}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{delivery.toFixed(2)}</p>
          </div>
          <hr />
          <div className="cart-total-details total">
            <b>Total</b>
            <b>₹{(total + delivery).toFixed(2)}</b>
          </div>

          <button
            type="submit"
            className="btn primary proceed-btn"
            disabled={total === 0}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
