import Link from "next/link";

const TeamCard = ({ teamMember }) => {
	const {
		id,
		name,
		desig,
		img = "/images/team/team-1.webp",
		blurb,
		education,
		years,
	} = teamMember || {};
	return (
		<div className="team-item left-swipe">
			<div className="team-img">
				<div className="team-img-inner">
					<img src={img} alt="" />
				</div>
				<div className="social-links">
					<ul>
						<li>
							<Link href="https://www.facebook.com/" target="_blank">
								<i className="fa-brands fa-facebook-f"></i>
							</Link>
						</li>
						<li>
							<Link href="https://www.instagram.com/" target="_blank">
								<i className="fa-brands fa-instagram"></i>
							</Link>
						</li>
						<li>
							<Link href="https://x.com/" target="_blank">
								<i className="fa-brands fa-x-twitter"></i>
							</Link>
						</li>
						<li>
							<Link href="https://www.linkedin.com/" target="_blank">
								<i className="fa-brands fa-linkedin-in"></i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="team-content">
				<h4 className="title">
					<Link href={`/team/${id}`}>{name}</Link>
				</h4>
				<span className="designation">{desig}</span>
				{blurb ? <p className="team-blurb">{blurb}</p> : ""}
				{education || years ? (
					<div className="team-meta">
						{education ? <span>{education}</span> : ""}
						{years ? <span>{years}</span> : ""}
					</div>
				) : (
					""
				)}
				<Link className="mail-at" href="mailto:info@bexon.com">
					<i className="tji-at"></i>
				</Link>
			</div>
		</div>
	);
};

export default TeamCard;
