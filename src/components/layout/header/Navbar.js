import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = () => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems()?.map(item => makeActiveLink(item));

	const renderSubmenu = items => (
		<ul className="sub-menu mega-menu-service">
			{items?.map((item, idx) => (
				<li
					key={idx}
					className={`${item?.submenu?.length ? "menu-item-has-children" : ""} ${
						item?.isActive ? "current-menu-ancestor" : ""
					}`}
				>
					<Link
						className="mega-menu-service-single"
						href={item?.path ? item?.path : "/"}
					>
						<span className="mega-menu-service-title">{item?.name}</span>
					</Link>
					{item?.submenu?.length ? (
						<ul className="sub-menu">
							{item?.submenu?.map((child, childIdx) => (
								<li
									key={childIdx}
									className={child?.isActive ? "current-menu-item" : ""}
								>
									<Link href={child?.path ? child?.path : "/"}>
										{child?.name}
									</Link>
								</li>
							))}
						</ul>
					) : (
						""
					)}
				</li>
			))}
		</ul>
	);

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{navItems?.map((item, idx) => {
						const hasChildren = item?.submenu?.length;
						return (
							<li
								key={idx}
								className={`${hasChildren ? "has-dropdown" : ""} ${
									item?.isActive ? "current-menu-ancestor" : ""
								}`}
							>
								<Link href={item?.path ? item?.path : "#"}>
									{item?.name}
								</Link>
								{hasChildren ? renderSubmenu(item?.submenu) : ""}
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
