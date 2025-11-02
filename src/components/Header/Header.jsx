import './Header.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { assets } from "../../assets/assets";
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const slides = [
		{
			title: "Order your favorite food here",
			desc: "Choose from a diverse menu featuring dishes crafted with passion and fresh ingredients.",
			img: assets.header_img1,
		},
		{
			title: "Delicious meals, delivered fast",
			desc: "From sizzling street food to gourmet delights — your cravings, just a click away.",
			img: assets.header_img2,
		},
		{
			title: "Taste the freshness every bite",
			desc: "Farm-fresh ingredients turned into mouthwatering experiences, daily.",
			img: assets.header_img3,
		},
	];

	const navigate = useNavigate();

	return (
		<Swiper
			navigation={true}
			modules={[Autoplay, Navigation]}
			autoplay={{ delay: 4000, disableOnInteraction: false }}
			loop={true}
			className="header-slider"
		>
			{slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<div
						className="header"
						style={{
							background: `url(${slide.img}) center/cover no-repeat`,
						}}
					>
						<div className="header-contents">
							<h2>{slide.title}</h2>
							<p>{slide.desc}</p>
							<button onClick={() => navigate("/#explore-menu")}>View Menu</button>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Header;
