import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { AuthContext } from "../../context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser, FiLogOut, FiPackage } from "react-icons/fi";
import "./Navbar.css"

const Navbar = ({ setShowLogin }) => {
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { getCartCount } = useContext(StoreContext);
	const { setSearchQuery } = useContext(StoreContext);
	const { isLoggedIn, user, logout } = useContext(AuthContext);

	// Close menu when clicking outside
	React.useEffect(() => {
		const closeMenu = (e) => {
			if (!e.target.closest(".user-menu")) setShowMenu(false);
		};
		document.addEventListener("click", closeMenu);
		return () => document.removeEventListener("click", closeMenu);
	}, []);

	return (
		<nav className="navbar">
			<div className="navbar-left">
				<Link to="/" className="navbar-logo">
					<span className="logo-text">Orange<span>Foooods</span></span>
				</Link>
			</div>

			<div className="navbar-search">
				<FiSearch className="search-icon" />
				<input type="text" placeholder="Search for dishes or restaurants..." onChange={(e) => setSearchQuery(e.target.value)} />
			</div>

			{/* Right Section */}
			<div className="navbar-right">
				<div className={`navbar-center ${isMobileMenuOpen ? "open" : ""}`}>
					<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
						Home
					</NavLink>
					<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
						About Us
					</NavLink>
					<NavLink to="/privacypolicy" className={({ isActive }) => (isActive ? "active" : "")}>
						Privacy Policy
					</NavLink>
				</div>
				<NavLink to="/cart" className="navbar-icon cart-icon">
					<FiShoppingCart size={22} />
					{getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
				</NavLink>

				{isLoggedIn ? (
					<div className="user-menu">
						<div className="user-icon" onClick={() => setShowMenu(!showMenu)}>
							<FiUser size={20} />
							<span>{user.name.split(" ")[0]}</span>
						</div>

						{showMenu && (
							<div className="user-dropdown">
								<button onClick={() => navigate("/mydetails")}><FiUser size={18} /> My Details</button>
								<button onClick={() => navigate("/myorders")}><FiPackage size={18} /> My Orders</button>
								<button onClick={logout}><FiLogOut size={18} /> Logout</button>
							</div>
						)}
					</div>
				) : (
					<button className="sign-btn" onClick={() => setShowLogin(true)}>
						<FiUser size={18} />
						<span>Sign In</span>
					</button>
				)}

				{/* Mobile Toggle */}
				<div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
					{isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
