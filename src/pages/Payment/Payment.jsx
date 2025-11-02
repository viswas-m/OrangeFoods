import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Payment.css";
import CardPreview from "../../components/CardPreview/CardPreview";

const Payment = () => {
	const [method, setMethod] = useState("card");
	const { getTotalCartAmount, cartItems, foods, clearCartItems } = useContext(StoreContext);
	const navigate = useNavigate();
	const total = getTotalCartAmount();

	const handlePayment = (e) => {
		e.preventDefault();

		const order = {
			id: Date.now(),
			items: Object.keys(cartItems).map((id) => ({
				...foods.find((f) => f.id === Number(id)),
				quantity: cartItems[id],
			})),
			total,
			method,
			date: new Date().toLocaleString(),
			status: "Confirmed"
		};

		const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
		existingOrders.push(order);
		localStorage.setItem("orders", JSON.stringify(existingOrders));

		alert("Payment successful! Redirecting to Home...");
		clearCartItems();
		navigate("/myorders");
	};


	return (
		<div className="payment-page">
			<h2>Complete Your Payment</h2>

			<div className="payment-options">
				<label>
					<input
						type="radio"
						name="method"
						value="card"
						checked={method === "card"}
						onChange={() => setMethod("card")}
					/>
					Credit / Debit Card
				</label>
				<label>
					<input
						type="radio"
						name="method"
						value="upi"
						checked={method === "upi"}
						onChange={() => setMethod("upi")}
					/>
					UPI
				</label>
				<label>
					<input
						type="radio"
						name="method"
						value="cod"
						checked={method === "cod"}
						onChange={() => setMethod("cod")}
					/>
					Cash on Delivery
				</label>
			</div>

			<form className="payment-form" onSubmit={handlePayment}>
				{method === "card" && (
					<div className="card-section">
						<CardPreview />
						<div className="card-fields">
							<input type="text" placeholder="Cardholder Name" required />
							<input type="text" placeholder="Card Number" required />
							<div className="multi-field">
								<input type="text" placeholder="MM/YY" required />
								<input type="text" placeholder="CVV" required />
							</div>
						</div>
					</div>
				)}

				{method === "upi" && (
					<div className="upi-section">
						<p>Scan this QR to pay via UPI:</p>
						<img
							src={`https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pn=OrangeFoods&am=${total}&cu=INR&size=150x150`}
							alt="UPI QR"
							className="upi-qr"
						/>
						<input
							type="text"
							placeholder="Enter UPI ID (optional)"
							className="upi-input"
						/>
					</div>
				)}

				{method === "cod" && (
					<p className="cod-info">Pay cash on delivery. No additional steps required.</p>
				)}

				<button type="submit" className="btn primary pay-btn">
					Pay ₹{total.toFixed(2)}
				</button>
			</form>
		</div>
	);
};

export default Payment;
