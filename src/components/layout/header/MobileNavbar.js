import getNavItems from "@/libs/getNavItems";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();

	const renderMobileItem = (item, options = {}) => {
		const hasChildren = item?.submenu?.length;
		return (
			<MobileMenuItem
				key={item?.path}
				text={item?.name}
				url={item?.path ? item?.path : "#"}
				submenuClass={options.submenuClass}
				showIcon={options.showIcon}
			>
				{hasChildren
					? item?.submenu?.map(child =>
							child?.submenu?.length ? (
								renderMobileItem(child, { showIcon: false })
							) : (
								<li key={child?.path}>
									<Link href={child?.path ? child?.path : "/"}>
										{child?.name}
									</Link>
								</li>
							)
					  )
					: ""}
			</MobileMenuItem>
		);
	};

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
							{navItems?.map(item =>
								renderMobileItem(item, {
									submenuClass: item?.submenu?.length
										? "mega-menu-service"
										: "",
									showIcon: true,
								})
							)}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
