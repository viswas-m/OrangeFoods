import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	// Load user on startup
	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem("user"));
		if (storedUser) {
			setUser(storedUser);
			setIsLoggedIn(true);
		}
		setLoading(false); // done hydrating
	}, []);

	const signup = (name, email, password) => {
		const newUser = { name, email, password };
		localStorage.setItem("user", JSON.stringify(newUser));
		setUser(newUser);
		setIsLoggedIn(true);
		navigate("/", { replace: true });
	};

	const login = (email, password) => {
		const storedUser = JSON.parse(localStorage.getItem("user"));
		if (storedUser && storedUser.email === email && storedUser.password === password) {
			setUser(storedUser);
			setIsLoggedIn(true);
			navigate("/", { replace: true });
			return true;
		}
		return false;
	};

	const logout = () => {
		localStorage.removeItem("user");
		setUser(null);
		setIsLoggedIn(false);
		navigate("/", { replace: true });
	};

	return (
		<AuthContext.Provider value={{ user, isLoggedIn, loading, signup, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
