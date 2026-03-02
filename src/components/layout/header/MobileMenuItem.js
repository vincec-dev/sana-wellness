"use client";

import Link from "next/link";
import { useState } from "react";

const MobileMenuItem = ({
	children,
	text,
	url,
	submenuClass,
	showIcon = true,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const hasChildren = Boolean(children);
	const handleClick = () => {
		setIsOpen(prevIsOpen => !prevIsOpen);
	};

	return (
		<li className={`has-dropdown ${isOpen ? "dropdown-opened" : ""}`}>
			<Link href={url ? url : "#"}>
				{showIcon ? (
					<span className="mega-menu-service-icon placeholder"></span>
				) : (
					""
				)}
				<span>{text}</span>
			</Link>
			{hasChildren ? (
				<ul
					className={`sub-menu ${submenuClass ? submenuClass : ""}`}
					style={{ display: !isOpen ? "none" : "" }}
				>
					{children}
				</ul>
			) : (
				""
			)}
			{hasChildren ? (
				<Link
					className={`mean-expand ${isOpen ? "mean-clicked" : ""}`}
					href="#"
					style={{ fontSize: "18px" }}
					onClick={() => handleClick()}
				>
					<i className="tji-arrow-down"></i>
				</Link>
			) : (
				""
			)}
		</li>
	);
};

export default MobileMenuItem;
