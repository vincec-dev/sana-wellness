import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const Hero4 = () => {
	return (
		<section className="h4-banner-section section-gap-x">
			<div className="h4-banner-area">
				<div className="h4-banner-content">
					<span className="sub-title wow fadeInUp" data-wow-delay=".2s">
						<i className="tji-box"></i> Solutions That Deliver
					</span>
					<h1 className="banner-title text-anim">
						Trusted Dentist in [City, State] for Complete Family & Cosmetic
						Dentistry
					</h1>
					<div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
						<ButtonPrimary text={"Get Started"} url={"/contact"} />
						<div className="banner-desc">
							Personalized dental care, modern technology, and same-day
							appointments for patients of all ages.
						</div>
					</div>
				</div>
				<div className="banner-img-area">
					<div className="banner-img">
						<Image
							className="hero-media"
							src="/images/hero/hero-dental-office-modern.avif"
							alt="Modern dental office"
							width={1479}
							height={648}
						/>
					</div>
					<div className="h4-rating-box wow fadeInUp" data-wow-delay="1s">
						<h2 className="title">4.8</h2>
						<p className="desc">Global rating based on 20k+ reviews</p>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Hero4;
