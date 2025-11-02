import React from "react";
import "./CardPreview.css";
import { FaWifi } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";

const CardPreview = ({ name = "ORANGEFOODS", cardNumber = "**** **** **** 2548", expiry = "09/28" }) => {
	return (
		<div className="card-preview">
			<div className="card-chip">
				<FaWifi className="wifi-icon" />
			</div>
			<div className="card-details">
				<div className="card-number">{cardNumber}</div>
				<div className="card-info">
					<div>
						<p className="label-card">Card Holder</p>
						<p className="value-card">{name}</p>
					</div>
					<div>
						<p className="label-card">Expires</p>
						<p className="value-card">{expiry}</p>
					</div>
				</div>
			</div>
			<RiMastercardFill className="card-brand" />
		</div>
	);
};

export default CardPreview;
