import FeatureCard3 from "@/components/shared/cards/FeatureCard3";
import CleanIcon from "@/components/shared/icons/CleanIcon";

const Features3 = () => {
	const features = [
		{
			id: 1,
			title: "Personalized Consultations",
			iconName: "userCheck",
			cardClass: "feature-service-card",
			desc: "Every treatment plan starts with your goals, anatomy, and a realistic path to refined, natural-looking outcomes.",
		},
		{
			id: 2,
			title: "Advanced Aesthetic Technology",
			iconName: "scan",
			cardClass: "feature-service-card",
			desc: "Medical-grade platforms support lifting, resurfacing, pigmentation correction, and regenerative skin support.",
		},
		{
			id: 3,
			title: "Luxury Studio Experience",
			iconName: "sparkles",
			cardClass: "feature-service-card",
			desc: "Patients should feel guided, comfortable, and informed from consultation through treatment and follow-up.",
		},
		{
			id: 4,
			title: "Treatment Plans with Intention",
			iconName: "clipboardCheck",
			cardClass: "feature-service-card",
			desc: "Recommendations are built around long-term skin quality, facial harmony, and a measured approach to results.",
		},
		{
			id: 5,
			title: "Results That Stay Refined",
			iconName: "shield",
			cardClass: "feature-service-card",
			desc: "The focus is enhancement without overcorrection, with treatment choices designed to look elevated and believable.",
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
							<div className="sec-heading text-center why-choose-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<CleanIcon name="sparkles" size={16} />Why Choose Us
								</span>
								<h2 className="sec-title title-anim">
									Why Patients Choose SK/N LAB
								</h2>
							</div>
							<a
								className="tj-primary-btn wow fadeInUp"
								data-wow-delay=".5s"
								href="/contact"
							>
								<span className="btn-text">
									<span>Schedule Consultation</span>
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
