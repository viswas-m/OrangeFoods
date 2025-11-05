import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { LoginPopup } from "./components/LoginPopup/LoginPopup";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import ScrollHandler from "./Helpers/ScrollHandler";
import NotFound from "./pages/NotFound/NotFound";
import Payment from "./pages/Payment/Payment";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MyOrders from "./pages/MyOrders/MyOrders";
import MyDetails from "./pages/MyDetails/MyDetails";

const App = () => {
	const [showLogin, setShowLogin] = useState(false);

	return (
		<>
			<Navbar setShowLogin={setShowLogin} />
			{showLogin && <LoginPopup setShowLogin={setShowLogin} />}
			<div className="app">
				<ScrollHandler />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/food/:id" element={<FoodDetails />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/privacypolicy" element={<PrivacyPolicy />} />
					<Route path="/cart" element={<Cart/>} />

					{/* Protected routes */}
					<Route path="/order" element={<ProtectedRoute element={<PlaceOrder />} setShowLogin={setShowLogin} />} />
					<Route path="/payment" element={<ProtectedRoute element={<Payment />} setShowLogin={setShowLogin} />} />
					<Route path="/myorders" element={<ProtectedRoute element={<MyOrders />} setShowLogin={setShowLogin} />} />
					<Route path="/mydetails" element={<ProtectedRoute element={<MyDetails />} setShowLogin={setShowLogin} />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
};

export default App;
