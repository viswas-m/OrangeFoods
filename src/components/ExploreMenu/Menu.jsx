import React from "react";
import { menu_list } from "../../assets/assets";
import { FiGrid } from "react-icons/fi";
import "./Menu.css";

const Menu = ({ category, setCategory }) => {
	return (
		<section className="menu-section" id="explore-menu">
			<div className="menu-header">
				<h1>
					<FiGrid size={24} className="menu-icon" />
					Explore by Category
				</h1>
				<p className="menu-subtitle">
					Taste the essence of India — explore regional favorites and iconic dishes from every corner.
				</p>
			</div>

			<div className="menu-grid">
				{menu_list.map((item, index) => (
					<div
						key={index}
						className={`menu-card ${category === item.menu_name ? "active" : ""}`}
						onClick={() =>
							setCategory((prev) =>
								prev === item.menu_name ? "All" : item.menu_name
							)
						}
					>
						<div className="menu-card-img">
							<img src={item.menu_image} alt={item.menu_name} />
						</div>
						<p>{item.menu_name}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Menu;
