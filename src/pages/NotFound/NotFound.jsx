import React from "react";
import { useNavigate } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import "./NotFound.css";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<section className="notfound">
			<div className="notfound-content">
				<FiAlertTriangle className="notfound-icon" />
				<h1>404</h1>
				<h2>Oops! Page Not Found</h2>
				<p>
					The page you’re looking for doesn’t exist or was moved.
					Let’s get you back to deliciousness!
				</p>
				<button className="btn primary" onClick={() => navigate("/")}>
					Go Back Home
				</button>
			</div>
		</section>
	);
};

export default NotFound;
