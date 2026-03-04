"use client";

import getNavItems from "@/libs/getNavItems";
import Link from "next/link";
import { useState } from "react";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenuList = ({ items, isTopLevel = false, depth = 0 }) => {
	const [openKey, setOpenKey] = useState(null);

	return items?.map(item => {
		const hasChildren = Boolean(item?.submenu?.length) && depth === 0;
		const itemKey = `${item?.path || "item"}-${item?.name || "untitled"}`;
		const isOpen = openKey === itemKey;

		return (
			<MobileMenuItem
				key={itemKey}
				text={item?.name}
				url={item?.path ? item?.path : "#"}
				submenuClass={isTopLevel && hasChildren ? "mega-menu-service" : ""}
				showIcon={isTopLevel}
				isOpen={isOpen}
				onToggle={() => setOpenKey(currentKey => (currentKey === itemKey ? null : itemKey))}
			>
				{hasChildren ? (
					<MobileMenuList items={item?.submenu} depth={depth + 1} />
				) : (
					""
				)}
			</MobileMenuItem>
		);
	});
};

const MobileNavbar = () => {
	const navItems = getNavItems();

	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							<MobileMenuList items={navItems} isTopLevel depth={0} />
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
