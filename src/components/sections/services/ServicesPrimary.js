"use client";
import ServiceCard4 from "@/components/shared/cards/ServiceCard4";
import CleanIcon from "@/components/shared/icons/CleanIcon";

const ServicesPrimary = () => {
	const services = [
		{
			title: "Injectables",
			desc: "Neuromodulators, fillers, biostimulators, and regenerative options tailored for balanced, natural-looking refinement.",
			path: "/services/injectables",
			iconName: "syringe",
			subItems: [
				{ label: "Neuromodulators", path: "/services/neuromodulators" },
				{ label: "Dermal Fillers", path: "/services/dermal-fillers" },
				{ label: "Biostimulators", path: "/services/biostimulators" },
			],
		},
		{
			title: "Skin Tightening",
			desc: "Non-surgical technologies designed to improve laxity, contour the lower face, and support collagen remodeling.",
			path: "/services/skin-tightening",
			iconName: "lift",
			subItems: [
				{ label: "EndyMed", path: "/services/endymed" },
				{ label: "Morpheus8", path: "/services/morpheus8" },
				{ label: "Emface", path: "/services/emface" },
			],
		},
		{
			title: "Lasers",
			desc: "Resurfacing and tone-correction options for pigmentation, redness, texture, visible vessels, and skin quality.",
			path: "/services/lasers",
			iconName: "laser",
			subItems: [
				{ label: "Lumecca", path: "/services/lumecca" },
				{ label: "CO2 Laser", path: "/services/co2-laser-resurfacing" },
				{ label: "LightWalker", path: "/services/lightwalker" },
			],
		},
		{
			title: "Regenerative",
			desc: "PRF, microneedling, and exosome-based options that support repair, collagen, and long-term rejuvenation.",
			path: "/services/regenerative",
			iconName: "droplet",
			subItems: [
				{ label: "Exosome Therapy", path: "/services/exosome-therapy" },
			],
		},
		{
			title: "Hair Removal",
			desc: "Medical-grade laser hair reduction for smoother skin, cleaner facial lines, and less daily maintenance.",
			path: "/services/hair-removal",
			iconName: "razor",
			subItems: [
				{
					label: "Diolaze Hair Removal",
					path: "/services/diolaze-laser-hair-removal",
				},
				{ label: "Diolaze for Men", path: "/services/diolaze-for-men" },
			],
		},
		{
			title: "Men’s Treatments",
			desc: "Focused treatment plans for beard line refinement, razor irritation, skin quality, and performance-driven upkeep.",
			path: "/services/mens-treatments",
			iconName: "male",
			subItems: [
				{ label: "Diolaze for Men", path: "/services/diolaze-for-men" },
			],
		},
	];

	return (
		<div className="tj-service-section service-4 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-4 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<CleanIcon name="sparkles" size={16} />For Face, Skin and Confidence
							</span>
							<h2 className="sec-title title-anim">Our Aesthetic Services</h2>
							<p className="sec-desc">
								Explore our aesthetic services to find the right treatment for
								you.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{services.map((service, idx) => (
						<div key={service.path} className="col-lg-4 col-md-6">
							<ServiceCard4 service={service} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesPrimary;
