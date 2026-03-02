import FeatureCard3 from "@/components/shared/cards/FeatureCard3";

const Features3 = () => {
	const features = [
		{
			id: 1,
			title: "Experienced Dentists",
			icon: "tji-team",
			desc: "Our skilled dentists provide comprehensive family and cosmetic dentistry with a focus on long-term oral health and prevention.",
		},
		{
			id: 2,
			title: "Advanced Dental Technology",
			icon: "tji-innovative",
			desc: "We use modern dental technology for precise diagnostics and efficient treatment planning in a safe, comfortable setting.",
		},
		{
			id: 3,
			title: "Gentle, Patient-Focused Care",
			icon: "tji-support",
			desc: "Enjoy a comfortable dental experience with a compassionate team that tailors treatments to your needs and goals.",
		},
		{
			id: 4,
			title: "Transparent Pricing",
			icon: "tji-budget",
			desc: "Clear estimates and flexible options help you plan dental care with confidence and no surprises.",
		},
		{
			id: 5,
			title: "Same-Day Emergency Visits",
			icon: "tji-phone",
			desc: "Urgent dental care when you need it most—same-day appointments for tooth pain, fractures, and emergencies.",
		},
	];

	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row row-gap-4">
					<div
						className="col-lg-4 col-md-6 order-lg-0 order-1 wow fadeInUp"
						data-wow-delay=".2s"
					>
						<FeatureCard3 feature={features[0]} />
					</div>
					<div className="col-lg-4 col-md-6 order-lg-1 order-0">
						<div className="h4-content-wrap text-center">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Why Choose Us
								</span>
								<h2 className="sec-title title-anim">
									Why Patients Choose Our Dental Office in [City]
								</h2>
							</div>
							<a
								className="tj-primary-btn wow fadeInUp"
								data-wow-delay=".5s"
								href="/contact/request-appointment"
							>
								<span className="btn-text">
									<span>Book Appointment</span>
								</span>
								<span className="btn-icon">
									<i className="tji-arrow-right-long"></i>
								</span>
							</a>
						</div>
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-2 order-2  wow fadeInUp"
						data-wow-delay=".3s"
					>
						<FeatureCard3 feature={features[1]} />
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-3 order-3 wow fadeInUp"
						data-wow-delay=".5s"
					>
						<FeatureCard3 feature={features[2]} />
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-4 order-4 wow fadeInUp"
						data-wow-delay=".7s"
					>
						<FeatureCard3 feature={features[3]} />
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-5 order-5 wow fadeInUp"
						data-wow-delay=".9s"
					>
						<FeatureCard3 feature={features[4]} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features3;
