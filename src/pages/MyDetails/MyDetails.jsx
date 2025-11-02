import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyDetails.css";

const MyDetails = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem("user"));
		if (storedUser) setUser(storedUser);
	}, []);

	if (!user) {
		return (
			<div className="details-container">
				<div className="details-card empty">
					<p>No user data found. Please log in first.</p>
				</div>
			</div>
		);
	}

	const initial = user.name?.charAt(0)?.toUpperCase();

	return (
		<div className="details-container">
			<div className="details-card">
				<div className="profile-header">
					<div className="avatar">{initial}</div>
					<div className="profile-info">
						<h2>{user.name}</h2>
						<p className="user-email">{user.email}</p>
						<span className="user-tier">🌟 Premium Member</span>
					</div>
				</div>

				<div className="details-section">
					<div className="detail-item">
						<span className="detail-label">Account Created</span>
						<span className="detail-value">
							{new Date().toLocaleDateString()}
						</span>
					</div>
					<div className="detail-item">
						<span className="detail-label">Preferred Payment</span>
						<span className="detail-value">Card / UPI</span>
					</div>
				</div>

				<button className="details-btn" onClick={() => navigate("/")}>
					Go to Home
				</button>
			</div>
		</div>
	);
};

export default MyDetails;
