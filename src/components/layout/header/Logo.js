"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
					<Image
						src="/images/logos/sk:n-lab-logo.webp"
						alt="SK:N Lab logo"
						width={385}
						height={81}
					style={{ height: "auto" }}
				/>
			</Link>
		</div>
	);
};

export default Logo;
