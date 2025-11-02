import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ element, setShowLogin }) => {
	const { isLoggedIn, loading } = useContext(AuthContext);

	if (loading) {
		// Optional loader UI for smoother UX
		return (
			<div style={{ textAlign: "center", marginTop: "20vh", fontSize: "18px" }}>
				Checking authentication...
			</div>
		);
	}
	if (!loading && !isLoggedIn) {
		if (setShowLogin) setShowLogin(true);
		return <Navigate to="/" replace />;
	}

	return element;
};

export default ProtectedRoute;
