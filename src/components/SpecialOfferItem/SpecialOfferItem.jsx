import React from "react";
import { replace, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { FaTag, FaClock } from "react-icons/fa";
import './SpecialOfferItem.css';

const SpecialOfferItem = ({ image, title, description, discount, validTill }) => {
	const navigate = useNavigate();

	return (
		<div className="offer-card">
			<div className="offer-img">
				<img src={assets[image]} alt={title} />
				<div className="offer-badge">{discount}</div>
			</div>
			<div className="offer-info">
				<h3>{title}</h3>
				<p>{description}</p>
				<div className="offer-meta">
					<FaClock className="icon" /> <span>Valid till {validTill}</span>
				</div>
				<button className="offer-btn" onClick={() => navigate("/#food-items", replace)}>
					<FaTag /> Grab Offer
				</button>
			</div>
		</div>
	);
}

export default SpecialOfferItem;