"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const officeHours = [
	{ day: "Monday", hours: "9:00 AM - 5:00 PM" },
	{ day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
	{ day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
	{ day: "Thursday", hours: "7:00 AM - 7:00 PM" },
	{ day: "Friday", hours: "9:00 AM - 3:00 PM" },
	{ day: "Saturday", hours: "Closed" },
	{ day: "Sunday", hours: "Closed" },
];

const Contact3 = () => {
	const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
	const todayHours =
		officeHours.find(item => item.day === todayName)?.hours || "Closed";

	return (
		<section className="tj-contact-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form wow fadeInUp" data-wow-delay=".3s">
							<h2 className="title">Visit SK/N LAB</h2>
							<div className="contact-info">
								<p>
									<strong>Address:</strong>{" "}
									<a
										href="https://www.google.com/maps/dir/?api=1&destination=5728+Post+Oak+Blvd,+Wesley+Chapel,+FL+33544"
										target="_blank"
										rel="noreferrer"
									>
										5728 Post Oak Blvd, Wesley Chapel, FL 33544
									</a>
								</p>
								<p>
									<strong>Phone:</strong> <a href="tel:+18136942278">(813) 694-2278</a>
								</p>
								<p>
									<strong>Today:</strong> {todayHours}
								</p>
								<div className="hours-list">
									{officeHours.map(item => (
										<div className="hours-row" key={item.day}>
											<span>{item.day}</span>
											<span>{item.hours}</span>
										</div>
									))}
								</div>
								<div className="contact-action-grid pt-4">
									<ButtonPrimary
										text={"Get Directions"}
										url={
											"https://www.google.com/maps/dir/?api=1&destination=5728+Post+Oak+Blvd,+Wesley+Chapel,+FL+33544"
										}
										className={"btn-dark"}
									/>
									<ButtonPrimary
										text={"Call Us"}
										url={"tel:+18136942278"}
										className={"btn-dark"}
									/>
									<ButtonPrimary
										text={"Schedule Appointment"}
										url={"/book"}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".1s">
							<iframe
								title="SK/N LAB location map"
								src="https://www.google.com/maps?q=5728%20Post%20Oak%20Blvd%2C%20Wesley%20Chapel%2C%20FL%2033544&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
