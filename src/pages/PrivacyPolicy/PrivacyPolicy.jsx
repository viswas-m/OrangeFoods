import React from "react";
import "./PrivacyPolicy.css";
import { LuShieldCheck } from "react-icons/lu";
import { FiLock } from "react-icons/fi";

const PrivacyPolicy = () => {
	return (
		<main className="privacy-page">
			<header className="privacy-hero">
				<div className="privacy-left">
					<h1>Your privacy, our priority</h1>
					<p className="lead">We value your trust. This policy explains what we collect, why we collect it, and how we keep it safe.</p>
				</div>
				<div className="privacy-illus">
					<LuShieldCheck size={60} />
				</div>
			</header>

			<section className="privacy-content">
				<article className="policy-panel">
					<div className="panel-head">
						<FiLock />
						<h3>Information We Collect</h3>
					</div>
					<ul>
						<li><strong>Personal info:</strong> name, phone, email, delivery address.</li>
						<li><strong>Order data:</strong> items ordered, prices, timestamps.</li>
						<li><strong>Device & usage:</strong> device identifiers, app usage patterns.</li>
					</ul>
				</article>

				<article className="policy-panel">
					<div className="panel-head">
						<FiLock />
						<h3>How We Use Your Data</h3>
					</div>
					<ul>
						<li>Process and deliver orders.</li>
						<li>Personalize experience & recommendations.</li>
						<li>Secure payments and fraud prevention.</li>
						<li>Communicate promotions and service updates (with consent).</li>
					</ul>
				</article>

				<article className="policy-panel">
					<div className="panel-head">
						<FiLock />
						<h3>Your Rights</h3>
					</div>
					<ul>
						<li>Access, correct or delete your data via your account.</li>
						<li>Opt-out of marketing emails anytime.</li>
						<li>Contact privacy@orangefoods.com for requests or concerns.</li>
					</ul>
				</article>

				<article className="policy-panel">
					<div className="panel-head">
						<FiLock />
						<h3>Security</h3>
					</div>
					<p>We implement modern security practices — encrypted storage, HTTPS, and restricted access to sensitive systems.</p>
				</article>
			</section>

			<footer className="privacy-footer">
				<p>Last updated: <strong>November 01, 2025</strong></p>
				<p>For further information contact: <a href="mailto:privacy@orangefoods.com">privacy@orangefoods.com</a></p>
			</footer>
		</main>
	);
};

export default PrivacyPolicy;
