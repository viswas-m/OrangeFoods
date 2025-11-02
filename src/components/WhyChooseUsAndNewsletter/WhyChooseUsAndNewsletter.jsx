import React from "react";
import {
	FaLeaf,
	FaShippingFast,
	FaShieldAlt,
	FaStar,
} from "react-icons/fa";
import "./WhyChooseUsAndNewsletter.css";

const WhyChooseUsAndNewsletter = () => {
	return (
		<div className="why-newsletter-container">

			{/* WHY CHOOSE US */}
			<section className="why-choose-us">
				<h2 className="section-title">
					Why Choose <span>Orange Foods</span>
				</h2>

				<div className="why-grid">
					{[
						{
							icon: <FaLeaf className="why-icon" />,
							title: "Fresh Ingredients",
							desc: "We prepare every dish using farm-fresh vegetables and top-quality ingredients for an authentic taste.",
						},
						{
							icon: <FaShippingFast className="why-icon" />,
							title: "Lightning Fast Delivery",
							desc: "Get your favorite meals hot and fresh — faster than you can imagine.",
						},
						{
							icon: <FaShieldAlt className="why-icon" />,
							title: "Safe & Hygienic",
							desc: "We follow strict hygiene and safety standards so every bite is worry-free.",
						},
						{
							icon: <FaStar className="why-icon" />,
							title: "Delicious Variety",
							desc: "Explore a diverse menu from every corner of India, curated to suit every craving.",
						},
					].map((item, i) => (
						<div key={i} className="why-card">
							{item.icon}
							<h3>{item.title}</h3>
							<p>{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* NEWSLETTER */}
			<section className="newsletter">
				<h2 className="newsletter-title">
					Stay Updated with <span>Delicious Deals</span>
				</h2>
				<p className="newsletter-desc">
					Join our foodie family and get early access to exclusive offers, new dish launches, and weekly chef specials.
				</p>

				<form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
					<input
						type="email"
						placeholder="Enter your email"
						required
					/>
					<button type="submit">Subscribe</button>
				</form>
			</section>

		</div>
	);
};

export default WhyChooseUsAndNewsletter;
