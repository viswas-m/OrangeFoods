import React from 'react';
import { Link } from "react-router-dom";
import { assets } from '../../assets/assets';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="footer" id="footer">
			<div className="footer-container">

				<div className="footer-section footer-left">
					<img src={assets.main_logo} alt="Orange Foods Logo" className="footer-logo" />
					<p className="footer-desc">
						At <strong>Orange Foods</strong>, we bring comfort food closer to you — crafted by local chefs, delivered fresh, and curated with care. Taste the difference of passion and quality in every bite.
					</p>
					<div className="footer-social">
						<a href="#" aria-label="Facebook"><FaFacebookF /></a>
						<a href="#" aria-label="Instagram"><FaInstagram /></a>
						<a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
						<a href="#" aria-label='Twitter'><FaTwitter /></a>
					</div>
				</div>

				<div className="footer-section footer-links">
					<h2>Company</h2>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About Us</Link></li>
						<li><Link to="/privacypolicy">Privacy Policy</Link></li>
						<li><Link to="/">Delivery</Link></li>
						<li><a href="#explore-menu">Menu</a></li>
					</ul>
				</div>

				<div className="footer-section footer-contact">
					<h2>Get in Touch</h2>
					<ul>
						<li><FiPhone className="icon-contact" /><a href="tel:+91-9876543210">+91-9876543210</a></li>
						<li><FiMail className="icon-contact" /><a href="mailto:support@orangefoods.com">support@orangefoods.com</a></li>
						<li><FiMapPin className="icon-contact" />Hyderabad, India</li>
					</ul>
				</div>
			</div>

			<hr className="footer-divider" />
			<p className="footer-bottom-text">© 2025 Orange Foods. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
