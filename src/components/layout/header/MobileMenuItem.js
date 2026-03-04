"use client";

import Link from "next/link";

const MobileMenuItem = ({
	children,
	text,
	url,
	submenuClass,
	showIcon = true,
	isOpen = false,
	onToggle,
}) => {
	const hasChildren = Boolean(children);

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
					onClick={event => {
						event.preventDefault();
						onToggle?.();
					}}
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
