"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TeamCard from "@/components/shared/cards/TeamCard";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getTeamMembers from "@/libs/getTeamMembers";

const Team1 = ({ type }) => {
	const featuredDentists = [
		{
			id: 1,
			name: "Dr. Ethan Brooks",
			desig: "General & Cosmetic Dentist",
			img: "/images/dentists/dentist-profile-pic-1.webp",
			blurb:
				"Known for gentle care and smile makeovers, Dr. Brooks focuses on comfort-first dentistry.",
			education: "DDS, University of Michigan",
			years: "12+ years",
		},
		{
			id: 2,
			name: "Dr. Maya Patel",
			desig: "Restorative Dentist",
			img: "/images/dentists/dentist-profile-pic-2.webp",
			blurb:
				"Expert in crowns, bridges, and implants with a detail-driven approach to function and aesthetics.",
			education: "DMD, Boston University",
			years: "10+ years",
		},
		{
			id: 3,
			name: "Dr. Sophia Nguyen",
			desig: "Pediatric Dentist",
			img: "/images/dentists/dentist-profile-pic-3.webp",
			blurb:
				"Creates stress-free visits for kids with preventive care and family-focused guidance.",
			education: "DMD, NYU; Pediatric Residency",
			years: "8+ years",
		},
		{
			id: 4,
			name: "Dr. Arjun Mehta",
			desig: "Orthodontic Specialist",
			img: "/images/dentists/dentist-profile-pic-4.webp",
			blurb:
				"Aligns smiles with clear aligners and braces using modern, precise orthodontic planning.",
			education: "DDS, UCLA; Ortho Residency",
			years: "9+ years",
		},
	];

	const isDentistSection = type === 3;
	const items = isDentistSection ? featuredDentists : getTeamMembers();
	const limit = isDentistSection ? featuredDentists.length : type === 2 ? 8 : 4;

	const {
		currentItems,
		currentpage,
		setCurrentpage,
		paginationItems,
		currentPaginationItems,
		totalPages,
		handleCurrentPage,
		firstItem,
		lastItem,
	} = usePagination(items, limit);

	const totalItems = items?.length;
	const totalItemsToShow = currentItems?.length;

	return (
		<section
			className={`${
				isDentistSection
					? "tj-team-section-3 section-gap section-gap-x"
					: type === 2
					? "tj-team-section section-gap"
					: "tj-team-section section-separator"
			}`}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div
							className={`sec-heading text-center ${isDentistSection ? "" : "style-2"}`}
						>
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								{isDentistSection ? <i className="tji-box"></i> : ""}
								Meet Our Team
							</span>
							<h2
								className={`sec-title ${isDentistSection ? "title-anim" : "text-anim"}`}
							>
								Meet Our Experienced Dentists
							</h2>
							{isDentistSection ? (
								<p className="sec-desc">
									Our dentists combine advanced training with years of hands-on
									experience to deliver compassionate, high-quality dental care in
									[City].
								</p>
							) : (
								""
							)}
						</div>
					</div>
				</div>

				<div className="row leftSwipeWrap">
					{currentItems?.length
						? currentItems.map((item, idx) => (
								<div key={idx} className="col-lg-3 col-sm-6">
									<TeamCard teamMember={item} />
								</div>
						  ))
						: ""}
				</div>

				{isDentistSection ? (
					<div className="team-btn text-center">
						<ButtonPrimary text={"Meet the Team"} url={"/about/our-dentists/"} />
					</div>
				) : (
					<div
						className="team-btn d-md-none mt-40 text-center wow fadeInUp"
						data-wow-delay="0.9s"
					>
						<ButtonPrimary text={"More member"} url={"/team"} />
					</div>
				)}

				{type === 2 && totalItemsToShow < totalItems ? (
					<Paginations
						paginationDetails={{
							currentItems,
							currentpage,
							setCurrentpage,
							paginationItems,
							currentPaginationItems,
							totalPages,
							handleCurrentPage,
							firstItem,
							lastItem,
						}}
					/>
				) : (
					""
				)}
			</div>
		</section>
	);
};

export default Team1;
