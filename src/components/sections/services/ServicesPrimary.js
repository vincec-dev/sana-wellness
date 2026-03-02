"use client";
import ServiceCard4 from "@/components/shared/cards/ServiceCard4";

const ServicesPrimary = () => {
	const services = [
		{
			title: "General Dentistry",
			desc: "Preventive exams, cleanings, fillings, and emergency care to keep your smile healthy and strong.",
			path: "/services/general-dentistry",
			iconName: "tji-service-1",
		},
		{
			title: "Cosmetic Dentistry",
			desc: "Whitening, veneers, bonding, and smile makeovers designed to brighten and refine your natural look.",
			path: "/services/cosmetic-dentistry",
			iconName: "tji-service-2",
		},
		{
			title: "Restorative Dentistry",
			desc: "Crowns, bridges, dentures, and implants that restore comfort, function, and confident chewing.",
			path: "/services/restorative-dentistry",
			iconName: "tji-service-3",
		},
		{
			title: "Orthodontics",
			desc: "Clear aligners and braces to straighten teeth, improve bite alignment, and enhance long-term oral health.",
			path: "/services/orthodontics",
			iconName: "tji-service-4",
		},
		{
			title: "Pediatric Dentistry",
			desc: "Gentle, kid-friendly care focused on healthy development, cavity prevention, and positive dental visits.",
			path: "/services/pediatric-dentistry",
			iconName: "tji-service-5",
		},
		{
			title: "Gum Disease Treatment",
			desc: "Advanced periodontal therapy, including scaling and maintenance, to protect gums and overall health.",
			path: "/services/gum-disease-treatment",
			iconName: "tji-service-6",
		},
		{
			title: "Sedation Dentistry",
			desc: "Safe, calming options like nitrous oxide and oral sedation for stress-free, comfortable appointments.",
			path: "/services/sedation-dentistry",
			iconName: "tji-support",
		},
	];

	return (
		<div className="tj-service-section service-4 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-4 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Our Services
							</span>
							<h2 className="sec-title title-anim">
								Comprehensive Dental Care for Every Stage of Life
							</h2>
							<p className="sec-desc">
								From preventive dentistry and emergency visits to cosmetic and
								restorative treatments, our [City] dental office offers modern,
								patient-focused care to keep your smile healthy and confident.
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
