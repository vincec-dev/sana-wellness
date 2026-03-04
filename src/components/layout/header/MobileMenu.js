import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
	const handleClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isMobileMenuOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`hamburger-area d-lg-none ${
					isMobileMenuOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
									<Image
										src="/images/logos/skn-lab-logo-white.png"
										alt="SK/N LAB logo"
										width={385}
										height={81}
										style={{ height: "auto" }}
									/>
								</Link>
							</div>
							<div className="hamburger_close">
								<button className="hamburger_close_btn" onClick={handleClick}>
									<i className="fa-thin fa-times"></i>
								</button>
							</div>
						</div>
						<MobileNavbar />
					</div>
					<div className="hamburger-socials">
						<div className="social-links style-3">
							<ul>
								<li>
									<Link href="https://www.facebook.com/" target="_blank">
										<i className="fa-brands fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.instagram.com/" target="_blank">
										<i className="fa-brands fa-instagram"></i>
									</Link>
								</li>
								<li>
									<Link href="https://x.com/" target="_blank">
										<i className="fa-brands fa-x-twitter"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.linkedin.com/" target="_blank">
										<i className="fa-brands fa-linkedin-in"></i>
									</Link>
								</li>
							</ul>
						</div>
						<div className="hamburger-promos">
							<Link href="/services/co2-laser-resurfacing" className="hamburger-promo-card">
								<Image
									src="/images/promos/cool-peel-promo.webp"
									alt="CoolPeel promotional card"
									width={400}
									height={498}
									style={{ height: "auto" }}
								/>
							</Link>
							<Link href="/services/lasers" className="hamburger-promo-card">
								<Image
									src="/images/promos/laser-promo.webp"
									alt="Laser treatment promotional card"
									width={400}
									height={505}
									style={{ height: "auto" }}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
