"use client";

import { startTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BeforeAfterPreviewGallery = ({ items = [] }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	if (!items.length) {
		return null;
	}

	const activeItem = items[activeIndex] || items[0];

	return (
		<div className="before-after-gallery">
			<Link href={activeItem.path} className="before-after-main-link">
				<div className="before-after-main-media">
					<Image
						src={activeItem.image}
						alt={activeItem.alt}
						width={activeItem.width}
						height={activeItem.height}
						style={{ width: "100%", height: "auto", display: "block" }}
					/>
				</div>
				<div className="before-after-main-copy">
					<span className="before-after-main-eyebrow">Featured Preview</span>
					<h3 className="before-after-main-title">Botox</h3>
				</div>
			</Link>

			<div className="before-after-thumbs" role="tablist" aria-label="Before and after preview thumbnails">
				{items.map((item, index) => (
					<button
						type="button"
						key={item.title}
						className={`before-after-thumb${index === activeIndex ? " is-active" : ""}`}
						onClick={() => startTransition(() => setActiveIndex(index))}
						aria-pressed={index === activeIndex}
					>
						<div className="before-after-thumb-media">
							<Image
								src={item.image}
								alt={item.alt}
								width={item.width}
								height={item.height}
								style={{ width: "100%", height: "auto", display: "block" }}
							/>
						</div>
						<span className="before-after-thumb-title">
							{item.thumbLabel ? item.thumbLabel : item.title}
						</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default BeforeAfterPreviewGallery;
