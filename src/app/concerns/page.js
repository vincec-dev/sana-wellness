import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

const featuredConcerns = [
	"Wrinkles + Fine Lines",
	"Skin Laxity + Sagging",
	"Acne Scars",
	"Rosacea + Redness",
	"Sun Damage + Brown Spots",
	"TMJ + Jaw Tension",
];

export default function ConcernsPage() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Concerns We Treat"} text={"Concerns We Treat"} />
						<section className="section-gap">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="text-center">
											<h2>Start with the concern, then match the right treatment.</h2>
											<p>
												This hub is set up for outcome-based navigation so patients can
												explore the issues they want to improve before selecting a
												specific treatment.
											</p>
										</div>
									</div>
								</div>
								<div className="row g-4 mt-4">
									{featuredConcerns.map(item => (
										<div className="col-md-6 col-lg-4" key={item}>
											<div className="service-item style-2 h-100">
												<div className="service-content">
													<h4 className="title">{item}</h4>
													<p>
														A dedicated page for this concern can pair symptoms,
														ideal candidates, recommended treatments, and FAQ
														answers in one place.
													</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
