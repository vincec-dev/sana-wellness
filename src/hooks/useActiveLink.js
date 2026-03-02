"use client";
import { usePathname } from "next/navigation";
// make forcely inactive for some paths
const makeForcelyInactive = (pathname, currentPathname) => {
	const isInactive = [
		"/services",
		"/services/1",
		"/portfolios",
		"/portfolios/1",
		"/blogs",
		"/blogs/1",
		"/blog-grid",
		"/blog-sidebar",
		"/contact",
	].includes(pathname);
	return isInactive ? false : pathname === currentPathname;
};
const getChildren = node =>
	node?.submenu?.length ? node.submenu : node?.items?.length ? node.items : [];

const checkActive = (mainObject, currentPathname, isRestricted) => {
	const { path } = mainObject;
	const isMatch = isRestricted
		? makeForcelyInactive(path, currentPathname)
		: path === currentPathname;
	if (isMatch) return true;

	const children = getChildren(mainObject);
	return children?.some(child =>
		checkActive(child, currentPathname, isRestricted)
	);
};

export default function useActiveLink() {
	const currentPathname = usePathname();
	const makeActiveLink = modifiableObject => {
		const { name } = modifiableObject;
		const isPages = name === "Pages" ? true : false;
		const children = getChildren(modifiableObject);
		const currentObject = {
			...modifiableObject,
			isActive: checkActive(modifiableObject, currentPathname, isPages),
			submenu: children?.length
				? children.map(submenuItem => ({
						...submenuItem,
						isActive: checkActive(submenuItem, currentPathname),
						submenu: getChildren(submenuItem)?.length
							? getChildren(submenuItem).map(item => ({
									...item,
									isActive: checkActive(item, currentPathname, isPages),
									submenu: getChildren(item)?.length
										? getChildren(item).map(grandItem => ({
												...grandItem,
												isActive: checkActive(
													grandItem,
													currentPathname,
													isPages
												),
										  }))
										: [],
							  }))
							: [],
				  }))
				: [],
		};

		return currentObject;
	};
	return makeActiveLink;
}
