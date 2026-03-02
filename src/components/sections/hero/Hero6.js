import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import HeroCardSlider from "@/components/shared/hero/HeroCardSlider";
import Image from "next/image";

const Hero6 = () => {
	return (
		<section className="tj-banner-section h6-hero section-gap-x">
			<div className="banner-area">
				<div className="banner-left-box">
					<div className="banner-content">
						<h1 className="banner-title title-anim">
							Trusted Family & Cosmetic Dentist in [City, State]
						</h1>
						<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
							<ButtonPrimary
								text={"Book Now"}
								url={"/contact"}
							/>
						</div>
						<div className="h6-hero-bottom wow fadeInLeft" data-wow-delay=".9s">
							<div className="h6-hero-history">
								<h4 className="h6-hero-history-title">Trusted Local Care</h4>
								<p className="h6-hero-history-desc">
									Personalized dental care, modern technology, and same-day
									appointments for patients of all ages.
								</p>
							</div>
							<div
								className="h6-hero-card-wrapper wow fadeInRight"
								data-wow-delay="1s"
							>
								<HeroCardSlider />
							</div>
						</div>
						<div className="bg-shape-2">
							<img src="/images/shape/pattern-3.svg" alt="" />
						</div>
					</div>
				</div>
				<div className="banner-right-box">
					<div className="banner-img">
						<Image
							width={1440}
							height={1240}
							sizes="(min-width: 1200px) 50vw, 100vw"
							quality={90}
							priority
							className="hero-image"
							src="/images/office/sana-dental-team.jpg"
							alt="Team at the wellness studio"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero6;
