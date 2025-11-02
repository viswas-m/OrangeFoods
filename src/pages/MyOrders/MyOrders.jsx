import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./MyOrders.css";
import { FiPackage } from "react-icons/fi";

const MyOrders = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
		setOrders(savedOrders.reverse()); // show latest first
	}, []);

	if (orders.length === 0) {
		return (
			<div className="orders-empty">
				<FiPackage size={45} />
				<h2>No Orders Yet</h2>
				<p>Your past orders will appear here once you make a purchase.</p>
			</div>
		);
	}

	return (
		<div className="orders-page">
			<h2 className="orders-title">My Orders</h2>

			<div className="orders-list">
				{orders.map((order) => (
					<div key={order.id} className="order-card">
						<div className="order-header">
							<div>
								<h3>Order #{order.id}</h3>
								<p className="order-date">{order.date}</p>
							</div>
							<span className={`order-status ${order.status.toLowerCase()}`}>
								{order.status}
							</span>
						</div>

						<div className="order-items">
							{order.items.map((item, idx) => (
								<div key={idx} className="order-item">
									<img src={assets[item.image]} alt={item.name} />
									<div className="order-item-details">
										<h4>{item.name}</h4>
										<p>Qty: {item.quantity}</p>
										<p>₹{(item.price * item.quantity).toFixed(2)}</p>
									</div>
								</div>
							))}
						</div>

						<div className="order-footer">
							<p>Payment Method: <strong>{order.method.toUpperCase()}</strong></p>
							<p>Total: <strong>₹{order.total.toFixed(2)}</strong></p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyOrders;
