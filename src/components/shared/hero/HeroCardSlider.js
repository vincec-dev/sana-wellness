"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroCard from "../cards/HeroCard";

const HeroCardSlider = () => {
	const items = [
		{
			id: 1,
			title: "Watch the Studio Experience",
			img: "/images/office/lab-entrance.webp",
			videoUrl: "https://youtu.be/gXFATcwrO-U",
		},
	];

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={15}
			loop={true}
			speed={1400}
			centeredSlides={false}
			pagination={{
				el: ".swiper-pagination-area",
				clickable: true,
			}}
			autoplay={{
				delay: 3000,
			}}
			modules={[Pagination, Autoplay]}
			className="h6-hero-card-slider"
		>
			{items?.length
				? items?.map((item, idx) => (
						<SwiperSlide key={idx}>
							<HeroCard item={item} idx={idx} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default HeroCardSlider;
