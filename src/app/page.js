import Footer4 from "@/components/layout/footer/Footer4";
import Header from "@/components/layout/header/Header";
import Features3 from "@/components/sections/features/Features3";
import HomeContentSections, {
	HomeTrustBar,
} from "@/components/sections/home/HomeContentSections";
import Hero6 from "@/components/sections/hero/Hero6";
import BackToTop from "@/components/shared/others/BackToTop";
import DisablePageLinks from "@/components/shared/others/DisablePageLinks";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Contact3 from "@/components/sections/contacts/Contact3";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";

export const metadata = {
	title: "Advanced Aesthetic Treatments in Wesley Chapel, Florida | SK:N Lab",
	description:
		"Explore advanced aesthetic treatments, injectables, laser services, skin tightening, and personalized wellness care in Wesley Chapel, Florida. Schedule your consultation today.",
};

export default function Home() {
	return (
		<div>
			<BackToTop />
			<DisablePageLinks />
			<Header headerType={4} />
			<Header headerType={4} isStickyHeader={true} />
			<div
				id="smooth-wrapper"
				data-disable-smooth="true"
				data-disable-animations="true"
			>
				<div id="smooth-content">
					<main>
						<div className="space-for-header"></div>
						<Hero6 />
						<HomeTrustBar />
						<ServicesPrimary />
						<Features3 />
						<HomeContentSections />
						<Contact3 />
					</main>
					<Footer4 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
