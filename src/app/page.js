import Footer4 from "@/components/layout/footer/Footer4";
import Header from "@/components/layout/header/Header";
import Features3 from "@/components/sections/features/Features3";
import Hero6 from "@/components/sections/hero/Hero6";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Contact3 from "@/components/sections/contacts/Contact3";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";
import Team1 from "@/components/sections/teams/Team1";

export default function Home() {
	return (
		<div>
			<BackToTop />
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
						<Contact3 />
						<ServicesPrimary />
						<Features3 />
						<Team1 type={3} />
					</main>
					<Footer4 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
