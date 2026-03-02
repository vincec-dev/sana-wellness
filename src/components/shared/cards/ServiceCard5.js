import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard5 = ({ service, idx, lastItemIdx }) => {
	const {
		title,
		desc,
		path,
		img3 = "/images/service/service-6.webp",
		iconName,
	} = service || {};

	return (
		<div className="service-item style-5">
			<div className="service-content-area">
				<div className="service-icon">
					<i className={iconName ? iconName : "tji-service-1"}></i>
				</div>
				<div className="service-content">
					<span className="no">{modifyNumber(idx + 1)}.</span>
					<h3 className="title">
						<Link href={path ? path : "/services"}>{title}</Link>
					</h3>
					<p className="desc">{desc}</p>
					<ButtonPrimary
						text={"Book Appointment"}
						url={"/contact/request-appointment"}
					/>
				</div>
			</div>
			<div className="service-img">
				<img src={img3} alt="" />
			</div>
		</div>
	);
};

export default ServiceCard5;
