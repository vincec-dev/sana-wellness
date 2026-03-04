import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";
import CleanIcon from "../icons/CleanIcon";

const ServiceCard4 = ({ service }) => {
	const {
		title,
		desc,
		path,
		iconName,
		subItems = [],
		buttonText,
		showInlineLinks = true,
	} = service || {};
	const resolvedButtonText =
		buttonText || (title ? `Explore ${title}` : "Explore Treatments");

	return (
		<div className="service-item style-4 h-100">
			<div className="service-icon">
				<CleanIcon name={iconName ? iconName : "sparkles"} size={48} />
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href={path ? path : "/services"}>{title}</Link>
				</h4>
				<p className="desc">
					{desc}
					{subItems.length && showInlineLinks ? (
						<span className="service-inline-links">
							{subItems.length === 1 ? "Popular option: " : "Popular options: "}
							{subItems.map((item, index) => (
								<span key={item.path}>
									<Link href={item.path}>{item.label}</Link>
									{index < subItems.length - 1 ? ", " : ""}
								</span>
							))}
							.
						</span>
					) : (
						""
					)}
				</p>
				<ButtonPrimary
					text={resolvedButtonText}
					url={path ? path : "/services"}
					className={"btn-dark"}
				/>
			</div>
		</div>
	);
};

export default ServiceCard4;
