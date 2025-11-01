import React from "react";
import "./AboutUs.css";
import { assets } from "../../assets/assets"
import { useNavigate } from "react-router-dom";

const IconCheck = ({ className = "" }) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="#FF6A00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const AboutUs = () => {
     const navigate = useNavigate();
    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-hero-text">
                    <h1>Serving Happiness on Every Plate</h1>
                    <p className="lead">
                        At Orange Foooods we craft memorable meals — from authentic Indian classics to bold modern bites.
                        Fresh ingredients, sustainable packaging, and lightning-fast delivery — made for today’s food lovers.
                    </p>
                    <div className="about-ctas">
                        <button className="btn primary" onClick={() => navigate("/")}>Explore Menu</button>
                        <a className="btn ghost" href="#our-values">Our Values</a>
                    </div>
                </div>

                <div className="about-hero-media">
                    <img src={assets.about_hero} alt="Kitchen team plating food" />
                </div>
            </section>

            <section id="our-values" className="about-values">
                <div className="values-grid">
                    <div className="value">
                        <h3>Fresh Ingredients<IconCheck className="value-icon" /></h3>
                        <p>We partner with trusted kitchens and local farms to bring fresh produce to every order.</p>
                    </div>
                    <div className="value">
                        <h3>Transparent Pricing <IconCheck className="value-icon" /></h3>
                        <p>Clear pricing on every dish — no hidden charges, ever.</p>
                    </div>
                    <div className="value">
                        <h3>Sustainable Packaging<IconCheck className="value-icon" /></h3>
                        <p>Eco-friendly packaging that protects both taste and the planet.</p>
                    </div>
                    <div className="value">
                        <h3>Reliable Delivery<IconCheck className="value-icon" /></h3>
                        <p>Real-time tracking and reliable delivery windows so your food arrives hot.</p>
                    </div>
                </div>
            </section>

            <section className="about-stats">
                <div className="stat">
                    <div className="stat-number">10k+</div>
                    <div className="stat-label">Orders Daily</div>
                </div>
                <div className="stat">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Partner Kitchens</div>
                </div>
                <div className="stat">
                    <div className="stat-number">99%</div>
                    <div className="stat-label">Happy Customers</div>
                </div>
            </section>

            <section className="about-team">
                <div className="team-text">
                    <h2>Meet the Team Crafting Your Cravings</h2>
                    <p>
                        Behind every dish is a passionate crew blending creativity, precision, and love for great food.
                        We’re redefining how deliciousness gets delivered — fast, fresh, and full of soul.
                    </p>
                    <ul className="team-list">
                        <li><strong>Local Chefs</strong> — Curated, creative, and full of flavor.</li>
                        <li><strong>Delivery Partners</strong> — Always on time, always with care.</li>
                        <li><strong>Quality Gurus</strong> — Tasting, testing, and perfecting every bite.</li>
                    </ul>
                </div>

                <div className="team-photo">
                    <img src={assets.team_photo} alt="Orange Foods team" />
                </div>
            </section>


            <section className="about-footer-cta">
                <h3>Hungry yet?</h3>
                <p>Explore our menu and get your first order with a special discount.</p>
                <button className="btn primary" onClick={() => navigate("/cart")}>Order Now</button>
            </section>
        </main>
    );
};

export default AboutUs;
