import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const primaryLinks = [
	{ label: "About", path: "/about" },
	{ label: "Services", path: "/services" },
	{ label: "Concerns", path: "/concerns" },
	{ label: "Before and After", path: "/before-after" },
	{ label: "FAQs", path: "/faq" },
	{ label: "Schedule Appointment", path: "/book" },
];

const serviceLinks = [
	{ label: "Injectables", path: "/services/injectables" },
	{ label: "Skin Tightening", path: "/services/skin-tightening" },
	{ label: "Lasers", path: "/services/lasers" },
	{ label: "Hair Removal", path: "/services/hair-removal" },
	{ label: "Regenerative", path: "/services/regenerative" },
	{ label: "Men's Treatments", path: "/services/mens-treatments" },
];

const concernLinks = [
	{ label: "Aging + Rejuvenation", path: "/concerns/wrinkles-fine-lines" },
	{ label: "Skin Texture + Scarring", path: "/concerns/acne-scars" },
	{ label: "Tone + Redness", path: "/concerns/rosacea-redness" },
	{ label: "Facial Contour + Balance", path: "/concerns/skin-laxity-sagging" },
	{ label: "Hair + Irritation", path: "/concerns/unwanted-facial-hair" },
];

const officeHours = [
	{ day: "Monday", hours: "9:00 AM - 5:00 PM" },
	{ day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
	{ day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
	{ day: "Thursday", hours: "7:00 AM - 7:00 PM" },
	{ day: "Friday", hours: "9:00 AM - 3:00 PM" },
	{ day: "Saturday", hours: "Closed" },
	{ day: "Sunday", hours: "Closed" },
];

const Footer4 = () => {
	return (
		<footer className="tj-footer-section footer-4 section-gap-x">
			<div className="footer-top">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12">
							<div className="footer-cta footer-cta-simple">
								<h2 className="cta-title title-anim">SK/N LAB</h2>
								<ButtonPrimary text={"Schedule a Consultation"} url={"/book"} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-main-area">
				<div className="container">
					<div className="footer-columns-grid">
						<div className="footer-column">
							<div className="footer-widget widget-contact style-2 wow fadeInUp" data-wow-delay=".1s">
								<h5 className="title">Our Lab</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<Link
											href="https://www.google.com/maps/dir/?api=1&destination=5728+Post+Oak+Blvd,+Wesley+Chapel,+FL+33544"
											target="_blank"
										>
											5728 Post Oak Blvd
										</Link>
										<span>Wesley Chapel, FL 33544</span>
									</div>
									<div className="contact-item">
										<Link href="tel:+18136942278">(813) 694-2278</Link>
									</div>
									<div className="contact-item footer-hours-list">
										{officeHours.map(item => (
											<div className="footer-hours-row" key={item.day}>
												<span>{item.day}</span>
												<span>{item.hours}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="footer-column">
							<div className="footer-widget widget-nav-menu wow fadeInUp" data-wow-delay=".1s">
								<h5 className="title">Explore</h5>
								<ul>
									{primaryLinks.map(item => (
										<li key={item.path}>
											<Link href={item.path}>{item.label}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="footer-column">
							<div className="footer-widget widget-nav-menu wow fadeInUp" data-wow-delay=".2s">
								<h5 className="title">Services</h5>
								<ul>
									{serviceLinks.map(item => (
										<li key={item.path}>
											<Link href={item.path}>{item.label}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="footer-column">
							<div className="footer-widget widget-nav-menu wow fadeInUp" data-wow-delay=".3s">
								<h5 className="title">Concerns</h5>
								<ul>
									{concernLinks.map(item => (
										<li key={item.path}>
											<Link href={item.path}>{item.label}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="tj-copyright-area-4"
				style={{ backgroundColor: "#faf7f2" }}
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="copyright-content-area"
								style={{ color: "var(--tj-color-heading-primary)" }}
							>
								<div className="copyright-text">
									<p style={{ color: "var(--tj-color-heading-primary)" }}>
										&copy; 2026 SK/N LAB. All rights reserved.
									</p>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link
												href="/contact"
												style={{ color: "var(--tj-color-heading-primary)" }}
											>
												Privacy Policy
											</Link>
										</li>
										<li>
											<Link
												href="/terms-and-conditions"
												style={{ color: "var(--tj-color-heading-primary)" }}
											>
												Terms & Conditions
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</footer>
	);
};

export default Footer4;
