import React, { useEffect, useState } from "react";
import FoodService from "../../services/FoodService";
import "./SpecialOffers.css";
import SpecialOfferItem from "../SpecialOfferItem/SpecialOfferItem";

const SpecialOffers = () => {
	const [offers, setOffers] = useState([]);

	useEffect(() => {
		const fetchOffers = async () => {
			const data = await FoodService.getSpecialOffers();
			setOffers(data);
		};
		fetchOffers();
	}, []);

	return (
		<section className="special-offers" id="special-offers">
			<h2 className="section-title">Special Offers</h2>
			<p className="section-subtitle">Exclusive deals handpicked for you</p>
			<div className="offers-grid">
				{offers.map((offer) => (
					<SpecialOfferItem key={offer.id} {...offer} />
				))}
			</div>
		</section>
	);
};

export default SpecialOffers;
