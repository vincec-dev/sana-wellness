"use client";

import { useEffect } from "react";

const DisablePageLinks = ({
	enabled = false,
	queryParamName = "review",
	queryParamValue = "1",
}) => {
	useEffect(() => {
		let shouldDisableLinks = enabled;
		if (!shouldDisableLinks && typeof window !== "undefined") {
			const urlParams = new URLSearchParams(window.location.search);
			shouldDisableLinks = urlParams.get(queryParamName) === queryParamValue;
		}
		if (!shouldDisableLinks) return;

		const handleLinkIntent = event => {
			const target = event.target;
			if (!(target instanceof Element)) return;

			const anchor = target.closest("a[href]");
			if (!anchor) return;

			const href = anchor.getAttribute("href") || "";
			const isHashLink = href.startsWith("#");
			if (isHashLink) return;

			event.preventDefault();
			event.stopPropagation();
		};

		document.addEventListener("click", handleLinkIntent, true);
		document.addEventListener("auxclick", handleLinkIntent, true);

		return () => {
			document.removeEventListener("click", handleLinkIntent, true);
			document.removeEventListener("auxclick", handleLinkIntent, true);
		};
	}, [enabled, queryParamName, queryParamValue]);

	return null;
};

export default DisablePageLinks;
