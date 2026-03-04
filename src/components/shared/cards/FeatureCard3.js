import CleanIcon from "../icons/CleanIcon";

const FeatureCard3 = ({ feature, idx }) => {
	const { iconName, title, desc, cardClass } = feature ? feature : {};
	return (
		<div className={`choose-box ${cardClass ? cardClass : ""}`}>
			<div className="choose-content">
				<div className="choose-icon">
					<CleanIcon name={iconName} size={48} />
				</div>
				<h4 className="title">{title}</h4>
				<p className="desc">{desc}</p>
			</div>
		</div>
	);
};

export default FeatureCard3;
