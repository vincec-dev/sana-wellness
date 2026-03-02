import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function BeforeAfterPage() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Before + After"} text={"Before + After"} />
						<section className="section-gap">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-9 text-center">
										<h2>Visual proof should support every premium aesthetic offer.</h2>
										<p>
											This page is now available as a dedicated gallery hub in the
											main navigation. It can expand into treatment-specific results,
											case context, and consultation prompts as assets are added.
										</p>
									</div>
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
