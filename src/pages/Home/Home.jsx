import React, { useState } from 'react';
import Menu from '../../components/ExploreMenu/Menu';
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import './Home.css';
import WhyChooseUsAndNewsletter from '../../components/WhyChooseUsAndNewsletter/WhyChooseUsAndNewsletter';
import SpecialOffers from '../../components/SpecialOffers/SpecialOffers';


const Home = () => {
	const [category, setCategory] = useState("All");
	return (
		<div>
			<Header />
			<SpecialOffers />
			<Menu category={category} setCategory={setCategory} />
			<FoodDisplay category={category} />
			<WhyChooseUsAndNewsletter />
		</div>
	)
}

export default Home