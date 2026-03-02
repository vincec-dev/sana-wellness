"use client";
import ServiceCard5 from "@/components/shared/cards/ServiceCard5";
import Link from "next/link";

const Services4 = () => {
	const services = [
		{
			title: "General Dentistry",
			desc: "Preventive exams, cleanings, fillings, and emergency care to keep your smile healthy and strong.",
			path: "/services/general-dentistry",
			img3: "/images/service/service-1.webp",
			iconName: "tji-service-1",
		},
		{
			title: "Cosmetic Dentistry",
			desc: "Whitening, veneers, bonding, and smile makeovers designed to brighten and refine your natural look.",
			path: "/services/cosmetic-dentistry",
			img3: "/images/service/service-2.webp",
			iconName: "tji-service-2",
		},
		{
			title: "Restorative Dentistry",
			desc: "Crowns, bridges, dentures, and implants that restore comfort, function, and confident chewing.",
			path: "/services/restorative-dentistry",
			img3: "/images/service/service-3.webp",
			iconName: "tji-service-3",
		},
		{
			title: "Orthodontics",
			desc: "Clear aligners and braces to straighten teeth, improve bite alignment, and enhance long-term oral health.",
			path: "/services/orthodontics",
			img3: "/images/service/service-4.webp",
			iconName: "tji-service-4",
		},
		{
			title: "Pediatric Dentistry",
			desc: "Gentle, kid-friendly care focused on healthy development, cavity prevention, and positive dental visits.",
			path: "/services/pediatric-dentistry",
			img3: "/images/service/service-5.webp",
			iconName: "tji-service-5",
		},
		{
			title: "Gum Disease Treatment",
			desc: "Advanced periodontal therapy, including scaling and maintenance, to protect gums and overall health.",
			path: "/services/gum-disease-treatment",
			img3: "/images/service/service-6.webp",
			iconName: "tji-service-6",
		},
		{
			title: "Sedation Dentistry",
			desc: "Safe, calming options like nitrous oxide and oral sedation for stress-free, comfortable appointments.",
			path: "/services/sedation-dentistry",
			img3: "/images/service/service-7.webp",
			iconName: "tji-support",
		},
	];

	const lastItemIdx = services.length - 1;

	return (
		<section className="tj-service-section-5 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-4 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Our Services
							</span>
							<h2 className="sec-title title-anim">
								Comprehensive Dental Care for Every Stage of Life.
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper">
							{services.map((service, idx) => (
								<ServiceCard5
									key={service.path}
									service={service}
									idx={idx}
									lastItemIdx={lastItemIdx}
								/>
							))}
						</div>
						<div className="service-bottom-text">
							<p className="desc">
								<span>
									<i className="tji-box"></i>Questions about care?
									{" "}
									<Link href="/contact/request-appointment">
										Book an appointment
									</Link>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services4;
