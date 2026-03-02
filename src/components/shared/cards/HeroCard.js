import Link from "next/link";
import PopupVideo from "../popup-video/PopupVideo";

const HeroCard = ({ item, idx }) => {
	const {
		id,
		title,
		img = "/images/hero/h6-hero-cart-1.webp",
		videoUrl = "https://youtu.be/gXFATcwrO-U",
	} = item || {};

	return (
		<div className="h6-hero-card">
			<div className="h6-hero-card-banner">
				<img src={img} alt="" />
				<PopupVideo>
					<Link
						className="h6-hero-card-video video-popup glightbox"
						href={videoUrl}
						data-autoplay="true"
						data-vbtype="video"
					>
						<i className="tji-play"></i>
					</Link>
				</PopupVideo>
			</div>
		</div>
	);
};

export default HeroCard;
