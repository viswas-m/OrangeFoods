import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (hash) {
			// Smoothly scroll to element when a hash is present (e.g., #food-items)
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			// Default scroll-to-top for normal route changes
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [pathname, hash]);

	return null;
};

export default ScrollHandler;
