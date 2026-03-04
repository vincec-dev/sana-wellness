import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem2 from "@/components/shared/faq/FaqItem2";
import CleanIcon from "@/components/shared/icons/CleanIcon";
import ServiceCard4 from "@/components/shared/cards/ServiceCard4";
import BeforeAfterPreviewGallery from "@/components/sections/home/BeforeAfterPreviewGallery";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";

const trustItems = [
	{
		iconName: "award",
		label: "U.S. Army Veteran-Owned Leadership",
		text: "Led by a founder whose service background reinforces discipline, integrity, and patient-first care.",
	},
	{
		iconName: "shield",
		label: "ADA + AGD + AACD Affiliations",
		text: "Professional memberships support continued education, clinical standards, and modern treatment planning.",
	},
	{
		iconName: "userCheck",
		label: "Licensed Esthetician + Aesthetic NP",
		text: "An expanded care team supports both skin-focused treatment planning and elevated patient experience.",
	},
	{
		iconName: "languages",
		label: "Multilingual Care: English, Spanish, Urdu",
		text: "Patients can be supported in English, Spanish, and Urdu for a more comfortable first-visit experience.",
	},
];

const concerns = [
	{
		title: "Wrinkles + Expression Lines",
		desc: "Target forehead lines, crow's feet, etched lines, and the visible signs of early facial aging.",
		path: "/concerns/wrinkles-fine-lines",
		iconName: "sparkles",
		buttonText: "Explore Concern",
		showInlineLinks: false,
		subItems: [
			{ label: "Wrinkles + Fine Lines", path: "/concerns/wrinkles-fine-lines" },
			{ label: "Perioral Lines", path: "/concerns/perioral-lines" },
		],
	},
	{
		title: "Skin Laxity + Facial Contour",
		desc: "Lift, tighten, and support the lower face when sagging, jowling, or loss of definition becomes more noticeable.",
		path: "/concerns/skin-laxity-sagging",
		iconName: "lift",
		buttonText: "Explore Concern",
		showInlineLinks: false,
		subItems: [
			{ label: "Jowls + Jawline", path: "/concerns/jowls-jawline" },
			{ label: "Double Chin", path: "/concerns/double-chin" },
			{ label: "Post-Weight Loss Laxity", path: "/concerns/post-weight-loss-laxity" },
		],
	},
	{
		title: "Acne Scars + Texture",
		desc: "Improve post-acne irregularities, refine texture, and smooth the look of pores with resurfacing-focused treatments.",
		path: "/concerns/acne-scars",
		iconName: "texture",
		buttonText: "Explore Concern",
		showInlineLinks: false,
		subItems: [
			{ label: "Acne Scars", path: "/concerns/acne-scars" },
			{ label: "Large Pores + Texture", path: "/concerns/large-pores-texture" },
		],
	},
	{
		title: "Redness + Visible Vessels",
		desc: "Reduce diffuse redness, visible facial vessels, and reactive vascular concerns for a clearer, more even complexion.",
		path: "/concerns/rosacea-redness",
		iconName: "droplet",
		buttonText: "Explore Concern",
		showInlineLinks: false,
		subItems: [
			{ label: "Rosacea + Redness", path: "/concerns/rosacea-redness" },
			{ label: "Broken Capillaries", path: "/concerns/broken-capillaries" },
		],
	},
	{
		title: "Sun Damage + Brown Spots",
		desc: "Address pigmentation, uneven tone, and cumulative UV-related changes that can make skin look dull or uneven.",
		path: "/concerns/sun-damage-brown-spots",
		iconName: "scan",
		buttonText: "Explore Concern",
		showInlineLinks: false,
		subItems: [
			{ label: "Sun Damage + Brown Spots", path: "/concerns/sun-damage-brown-spots" },
		],
	},
	{
		title: "Facial Balancing + Volume Loss",
		desc: "Restore support, soften hollowing, and improve proportion when facial volume loss changes overall balance.",
		path: "/concerns/facial-volume-loss",
		iconName: "balance",
		buttonText: "Explore Concern",
		showInlineLinks: false,
		subItems: [
			{ label: "Facial Volume Loss", path: "/concerns/facial-volume-loss" },
			{ label: "Under-Eye Hollows", path: "/concerns/under-eye-hollows" },
		],
	},
	{
		title: "TMJ + Jaw Tension",
		desc: "Relieve clenching discomfort while softening lower-face tension and strain.",
		path: "/concerns/tmj-jaw-tension",
		iconName: "userCheck",
		buttonText: "Explore Concern",
		showInlineLinks: false,
		subItems: [{ label: "TMJ + Jaw Tension", path: "/concerns/tmj-jaw-tension" }],
	},
	{
		title: "Unwanted Facial Hair + Razor Bumps",
		desc: "Reduce unwanted hair, ingrowns, and irritation with treatment options designed for smoother, lower-maintenance skin.",
		path: "/concerns/unwanted-facial-hair",
		iconName: "razor",
		buttonText: "Explore Concern",
		showInlineLinks: false,
		subItems: [
			{ label: "Unwanted Facial Hair", path: "/concerns/unwanted-facial-hair" },
			{ label: "Razor Bumps + Ingrowns", path: "/concerns/razor-bumps-ingrown-hairs" },
		],
	},
];

const faqItems = [
	{
		title: "How do I know which treatment is right for me?",
		desc: "Your consultation is designed to match your goals, skin concerns, facial balance, and comfort level with the most appropriate treatment or treatment combination.",
		initActive: true,
	},
	{
		title: "What happens during the consultation?",
		desc: "We review your concerns, discuss your goals, evaluate your features and skin needs, and walk you through recommendations so you leave with a clear next step.",
		initActive: false,
	},
	{
		title: "Can one treatment plan address more than one concern?",
		desc: "Yes. Many patients benefit from a treatment plan that combines services to address concerns like laxity, texture, pigmentation, volume loss, or facial balance more strategically.",
		initActive: false,
	},
	{
		title: "Which treatments help with skin tightening, texture, or pigmentation?",
		desc: "Depending on your needs, recommendations may include skin tightening, resurfacing, laser and light treatments, regenerative options, or a phased plan that combines more than one approach.",
		initActive: false,
	},
	{
		title: "How do I get started?",
		desc: "The best first step is to schedule a consultation so we can review your goals, answer your questions, and recommend the right treatment path for you.",
		ctaText: "Schedule Consultation",
		ctaUrl: "/book",
		initActive: false,
	},
];

const reviewItems = [
	{
		category: "Comfort + Care",
		reviewerName: "Brenda",
		reviewerImage: "/images/reviews/brenda-profile-pic.webp",
		quote: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"",
		attribution: "Google Review",
	},
	{
		category: "Clear Communication",
		reviewerName: "Tina",
		reviewerImage: "/images/reviews/tina-profile-pic.webp",
		quote: "\"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\"",
		attribution: "Google Review",
	},
	{
		category: "Professional Team",
		reviewerName: "Tonya",
		reviewerImage: "/images/reviews/tonya-profile-pic.webp",
		quote: "\"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"",
		attribution: "Google Review",
	},
];

const blogItems = [
	{
		title: "What to Expect During Your First Aesthetic Consultation",
		desc: "Learn what happens during your consultation, how recommendations are made, and what to expect before treatment begins.",
		path: "/blog",
		image: "/images/blog-featured/patient-at-consultation.webp",
	},
	{
		title: "Choosing Between Skin Tightening, Laser, and Regenerative Treatments",
		desc: "Understand how the right treatment path depends on concern, downtime, and long-term goals.",
		path: "/blog",
		image: "/images/blog-featured/skin-laser-treatment.webp",
	},
	{
		title: "How Natural-Looking Results Are Built With Thoughtful Treatment Planning",
		desc: "See how thoughtful planning can create more balanced, natural-looking results over time.",
		path: "/blog",
		image: "/images/blog-featured/blog-clear-skin.webp",
	},
];

const beforeAfterPreviewItems = [
	{
		title: "Botox",
		thumbLabel: "Mandy, 32",
		path: "/before-after/neuromodulators",
		image: "/images/before-and-after/before-and-after-1.webp",
		alt: "Before and after preview for Botox treatments",
		width: 500,
		height: 297,
	},
	{
		title: "Dermal Fillers",
		thumbLabel: "Stephen, 35",
		path: "/before-after/dermal-fillers",
		image: "/images/before-and-after/before-and-after-2.webp",
		alt: "Before and after preview for dermal filler treatments",
		width: 500,
		height: 297,
	},
	{
		title: "Lip Augmentation",
		thumbLabel: "Delfina, 46",
		path: "/before-after/lip-augmentation",
		image: "/images/before-and-after/before-and-after-3.webp",
		alt: "Before and after preview for lip augmentation treatments",
		width: 500,
		height: 298,
	},
];

export function HomeTrustBar() {
	return (
		<section className="section-separator">
			<div className="container py-4 py-lg-5">
				<div className="row g-4">
					{trustItems.map(item => (
						<div className="col-lg-3 col-md-6" key={item.label}>
							<div className="choose-box trust-bar-card h-100">
								<div className="choose-content">
									<div className="choose-icon">
										<CleanIcon name={item.iconName} size={40} />
									</div>
									<h5 className="title mb-0">{item.label}</h5>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default function HomeContentSections() {
	return (
		<>
			<section className="section-gap">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9">
							<div className="sec-heading text-center concerns-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
									<CleanIcon name="sparkles" size={16} />Start with the Concern
								</span>
								<h2 className="sec-title title-anim">Concerns We Treat</h2>
								<p className="sec-desc">
									Most patients start with a concern, not a device. Use these
									common concerns to find the right treatment for you.
								</p>
							</div>
						</div>
					</div>
					<div className="row row-gap-4">
						{concerns.map((item, index) => (
							<div
								className={`col-lg-4 col-md-6${
									index === 6 ? " offset-lg-2" : ""
								}`}
								key={item.title}
							>
								<ServiceCard4 service={item} />
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section-gap section-separator">
				<div className="container">
					<div className="row align-items-center rg-40">
						<div className="col-lg-6">
							<div className="sec-heading before-after-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
									<CleanIcon name="sparkles" size={16} />Browse Photos by Concern or Treatment
								</span>
								<h2 className="sec-title title-anim">See Real Before-and-After Photos</h2>
								<p className="sec-desc">
									Browse real treatment outcomes organized by concern and
									treatment type so you can compare results, understand what is
									possible, and choose your next step with more confidence.
								</p>
							</div>
							<div className="d-flex flex-wrap gap-3">
								<ButtonPrimary
									text={"Browse by Concern"}
									url={"/before-after#acne-scars"}
								/>
								<ButtonPrimary
									text={"Browse by Treatment"}
									url={"/before-after#neuromodulators"}
									className={"btn-dark"}
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<BeforeAfterPreviewGallery items={beforeAfterPreviewItems} />
						</div>
					</div>
				</div>
			</section>

			<section className="section-gap">
				<div className="container">
					<div className="row align-items-center rg-40">
						<div className="col-lg-5">
							<div className="overflow-hidden rounded-3">
								<Image
									src="/images/office/patient-at-consultation.webp"
									alt="Patient during consultation"
									width={600}
									height={600}
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
								/>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="sec-heading consultation-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
									<CleanIcon name="sparkles" size={16} />Consultation Experience
								</span>
								<h2 className="sec-title title-anim">What to Expect at Your Consultation</h2>
								<p className="sec-desc">
									Your first visit should feel clear, personalized, and easy to
									navigate. This section helps patients understand how the
									consultation works before they book, so they can arrive feeling
									informed and confident.
								</p>
							</div>
							<div className="row g-4 pt-2">
								<div className="col-lg-4 col-md-6">
									<div className="choose-box consultation-card h-100">
									<div className="choose-content">
										<div className="choose-icon">
											<CleanIcon name="userCheck" size={48} />
										</div>
											<h5 className="title mb-2">Personalized Assessment</h5>
											<p className="desc mb-0">
												We review your concerns, skin goals, facial balance, and
												relevant history so the visit starts with the right context.
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-box consultation-card h-100">
									<div className="choose-content">
										<div className="choose-icon">
											<CleanIcon name="notebook" size={48} />
										</div>
											<h5 className="title mb-2">Treatment Recommendations</h5>
											<p className="desc mb-0">
												You receive thoughtful recommendations based on your
												priorities, budget, recovery preferences, and desired outcome.
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-box consultation-card h-100">
									<div className="choose-content">
										<div className="choose-icon">
											<CleanIcon name="clipboardCheck" size={48} />
										</div>
											<h5 className="title mb-2">Clear Next Steps</h5>
											<p className="desc mb-0">
												Leave with a clear plan for what to do now, what can be
												staged later, and what kind of results to expect over time.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-gap section-separator">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9">
							<div className="sec-heading text-center reviews-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
									<CleanIcon name="star" size={16} />Five-Star Experiences
								</span>
								<h2 className="sec-title title-anim">Our Patient Reviews</h2>
								<p className="sec-desc">
									For local patients comparing wellness studios in Wesley Chapel,
									reviews often become the deciding factor. The strongest patterns
									here are comfort, clear communication, and a team that makes
									people feel genuinely cared for from the first visit forward.
								</p>
							</div>
						</div>
					</div>
					<div className="row row-gap-4">
						{reviewItems.map(item => (
							<div className="col-lg-4 col-md-6" key={item.reviewerName}>
									<div className="choose-box review-card h-100">
										<div className="choose-content">
										<div className="review-head">
											<div className="review-person">
												<div className="review-avatar">
													<Image
														src={item.reviewerImage}
														alt={`${item.reviewerName} profile`}
														width={250}
														height={250}
														style={{
															width: "100%",
															height: "100%",
															objectFit: "cover",
														}}
													/>
												</div>
												<div className="review-meta">
													<h4 className="review-name mb-0">{item.reviewerName}</h4>
													<div className="review-stars" aria-label="5 star review">
														{[...Array(5)].map((_, idx) => (
															<span key={idx} aria-hidden="true">
																★
															</span>
														))}
													</div>
												</div>
											</div>
											<div className="review-source-icon">
												<Image
													src="/images/reviews/google-letter-icon.png"
													alt="Google"
													width={1200}
													height={1200}
													style={{
														width: "100%",
														height: "100%",
														objectFit: "contain",
													}}
												/>
											</div>
										</div>
										<p className="review-quote">{item.quote}</p>
										<p className="review-attribution mb-0">{item.attribution}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="tj-faq-section section-gap section-separator">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sec-heading text-center faq-home-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
									<CleanIcon name="sparkles" size={16} />FAQs
								</span>
								<h2 className="sec-title title-anim">Frequently Asked Questions</h2>
								<p className="sec-desc">
									Get quick answers to the questions patients ask most often when
									comparing treatments, planning a consultation, and deciding what
									to do next.
								</p>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-8">
								<BootstrapWrapper>
									<div className="accordion tj-faq pt-0" id="faqTwo">
										{faqItems.map((item, idx) => (
											<FaqItem2 key={idx} item={item} idx={idx} />
										))}
									</div>
								</BootstrapWrapper>
								<div className="d-flex justify-content-center pt-4 pt-lg-5">
									<ButtonPrimary text={"View More FAQs"} url={"/faq"} className={"btn-dark"} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-gap section-separator">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9">
							<div className="sec-heading text-center blog-home-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
									<CleanIcon name="notebook" size={16} />Expert Guidance
								</span>
								<h2 className="sec-title title-anim">Educational Articles & Resources</h2>
								<p className="sec-desc">
									Compare treatment options, understand what to expect, and make
									more confident decisions before booking.
								</p>
							</div>
						</div>
					</div>
					<div className="row row-gap-4">
						{blogItems.map(item => (
							<div className="col-lg-4 col-md-6" key={item.title}>
								<div className="service-item style-4 h-100">
									<div className="overflow-hidden rounded-3 mb-4">
										<Image
											src={item.image}
											alt={item.title}
											width={410}
											height={260}
											style={{ width: "100%", height: "220px", objectFit: "cover" }}
										/>
									</div>
									<div className="service-content">
										<h4 className="title">
											<a href={item.path}>{item.title}</a>
										</h4>
										<p className="desc">{item.desc}</p>
										<ButtonPrimary
											text={"Read Article"}
											url={item.path}
											isTextBtn={true}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
