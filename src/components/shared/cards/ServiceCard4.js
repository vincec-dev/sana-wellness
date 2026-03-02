import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard4 = ({ service }) => {
	const { title, desc, path, iconName } = service || {};

	return (
		<div className="service-item style-4">
			<div className="service-icon">
				<i className={iconName ? iconName : "tji-service-1"}></i>
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href={path ? path : "/services"}>{title}</Link>
				</h4>
				<p className="desc">{desc}</p>
				<ButtonPrimary
					text={"Book Appointment"}
					url={"/contact/request-appointment"}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default ServiceCard4;
