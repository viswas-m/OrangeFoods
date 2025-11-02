// src/components/LoginPopup/LoginPopup.jsx
import React, { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { AuthContext } from "../../context/AuthContext";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";

export const LoginPopup = ({ setShowLogin }) => {
	const [currState, setCurrState] = useState("Sign Up");
	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const { signup, login } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currState === "Sign Up") {
			signup(form.name, form.email, form.password);
			alert("Account created successfully!");
		} else {
			const success = login(form.email, form.password);
			if (!success) {
				alert("Invalid email or password.");
				return;
			}
		}

		setShowLogin(false);
	};

	return createPortal(
		<div className="login-overlay">
			<div className="login-card">
				<img
					src={assets.cross_icon}
					alt="close"
					className="close-btn"
					onClick={() => setShowLogin(false)}
				/>

				<div className="login-header">
					<img src={assets.main_logo} alt="Orange Foods Logo" className="login-logo" />
					<h2>
						Hello, Welcome to <span>Orange Foooods</span>!
					</h2>
					<p>
						Craving something delicious?{" "}
						{currState === "Login" ? "Sign in" : "Create an account"} to get started.
					</p>
				</div>

				<form className="login-form" onSubmit={handleSubmit}>
					{currState === "Login" ? null : (
						<input
							type="text"
							placeholder="Your Name"
							required
							value={form.name}
							onChange={(e) => setForm({ ...form, name: e.target.value })}
						/>
					)}
					<input
						type="email"
						placeholder="Your Email"
						required
						value={form.email}
						onChange={(e) => setForm({ ...form, email: e.target.value })}
					/>
					<input
						type="password"
						placeholder="Password"
						required
						value={form.password}
						onChange={(e) => setForm({ ...form, password: e.target.value })}
					/>

					<button type="submit" className="primary-btn">
						{currState === "Sign Up" ? "Create Account" : "Login"}
					</button>

					<div className="terms">
						<input type="checkbox" required />
						<p>By continuing, you agree to our Terms of Use & Privacy Policy</p>
					</div>
				</form>

				<p className="switch-mode">
					{currState === "Login" ? (
						<>
							New here?{" "}
							<span onClick={() => setCurrState("Sign Up")}>Create an account</span>
						</>
					) : (
						<>
							Already have an account?{" "}
							<span onClick={() => setCurrState("Login")}>Login here</span>
						</>
					)}
				</p>
			</div>
		</div>,
		document.body
	);
};
