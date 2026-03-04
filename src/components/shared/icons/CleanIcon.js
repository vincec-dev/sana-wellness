const iconProps = {
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round",
	strokeLinejoin: "round",
};

const pathsByName = {
	sparkles: (
		<>
			<path d="M12 3l1.2 3.3L16.5 7.5l-3.3 1.2L12 12l-1.2-3.3L7.5 7.5l3.3-1.2L12 3z" />
			<path d="M5 14l.7 1.8L7.5 16.5l-1.8.7L5 19l-.7-1.8-1.8-.7 1.8-.7L5 14z" />
			<path d="M18.5 13l.5 1.3 1.3.5-1.3.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5.5-1.3z" />
		</>
	),
	mapPin: (
		<>
			<path d="M12 21s6-5.8 6-11a6 6 0 10-12 0c0 5.2 6 11 6 11z" />
			<circle cx="12" cy="10" r="2.3" />
		</>
	),
	scan: (
		<>
			<path d="M4 8V6a2 2 0 012-2h2" />
			<path d="M16 4h2a2 2 0 012 2v2" />
			<path d="M20 16v2a2 2 0 01-2 2h-2" />
			<path d="M8 20H6a2 2 0 01-2-2v-2" />
			<path d="M7 12h10" />
			<path d="M9 9h6" />
			<path d="M9 15h6" />
		</>
	),
	clipboardCheck: (
		<>
			<rect x="7" y="4" width="10" height="16" rx="2" />
			<path d="M10 4.5h4" />
			<path d="M9.5 13l1.8 1.8 3.2-3.6" />
		</>
	),
	userCheck: (
		<>
			<circle cx="12" cy="8" r="3.2" />
			<path d="M6.5 19a5.8 5.8 0 0111 0" />
			<path d="M18 9.5l1.4 1.4L22 8.3" />
		</>
	),
	shield: (
		<>
			<path d="M12 3l7 3v5c0 4.5-2.9 7.7-7 10-4.1-2.3-7-5.5-7-10V6l7-3z" />
			<path d="M9.5 12l1.7 1.7 3.3-3.7" />
		</>
	),
	syringe: (
		<>
			<path d="M14.5 4.5l5 5" />
			<path d="M12 7l5 5" />
			<path d="M4 20l6.5-6.5" />
			<path d="M10 5l9 9" />
			<path d="M8 7l2-2" />
			<path d="M14 13l-7 7" />
		</>
	),
	lift: (
		<>
			<path d="M6 16c1.5-2.3 4-3.5 6-3.5s4.5 1.2 6 3.5" />
			<path d="M8 9l4-4 4 4" />
			<path d="M12 5v8" />
		</>
	),
	laser: (
		<>
			<path d="M4 18l6-6" />
			<path d="M14 8l6-6" />
			<path d="M9 19l1.5-3.5L14 14l-3.5-3.5L12 7l-3.5 1.5L5 5 3.5 8.5 7 12l-1.5 3.5L9 19z" />
		</>
	),
	texture: (
		<>
			<path d="M5 8h14" />
			<path d="M7 12h10" />
			<path d="M5 16h14" />
			<path d="M8 6l-1 4 1 4" />
			<path d="M16 10l1 4-1 4" />
		</>
	),
	droplet: (
		<>
			<path d="M12 3c3 4 6 7 6 10.5a6 6 0 11-12 0C6 10 9 7 12 3z" />
		</>
	),
	razor: (
		<>
			<rect x="5" y="4" width="8" height="4" rx="1.2" />
			<path d="M13 6h2.5A2.5 2.5 0 0118 8.5V10" />
			<path d="M9 8v10" />
			<path d="M7 18h4" />
		</>
	),
	male: (
		<>
			<circle cx="10" cy="14" r="4" />
			<path d="M13 11l6-6" />
			<path d="M15 5h4v4" />
		</>
	),
	star: (
		<>
			<path d="M12 3.8l2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 15.8 7.4 18.2l.9-5.2L4.5 9.3l5.2-.8L12 3.8z" />
		</>
	),
	notebook: (
		<>
			<path d="M8 4h9a2 2 0 012 2v12a2 2 0 01-2 2H8z" />
			<path d="M8 4H7a2 2 0 00-2 2v12a2 2 0 002 2h1" />
			<path d="M11 8h4" />
			<path d="M11 12h4" />
			<path d="M11 16h3" />
		</>
	),
	award: (
		<>
			<circle cx="12" cy="9" r="4" />
			<path d="M9.5 13.5L8 21l4-2 4 2-1.5-7.5" />
		</>
	),
	languages: (
		<>
			<path d="M4 7h10" />
			<path d="M9 4v3c0 3-1.5 5.5-4 7" />
			<path d="M7 10c1 1.6 2.5 3 4.5 4.2" />
			<path d="M14 12h6" />
			<path d="M17 9l3 9" />
			<path d="M20 9l-3 9" />
		</>
	),
	balance: (
		<>
			<path d="M12 4v15" />
			<path d="M7 21h10" />
			<path d="M6 8h12" />
			<path d="M8 8l-3 5h6l-3-5z" />
			<path d="M16 8l-3 5h6l-3-5z" />
		</>
	),
};

const CleanIcon = ({ name = "sparkles", size = 20, className = "" }) => {
	const iconMarkup = pathsByName[name] || pathsByName.sparkles;

	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			aria-hidden="true"
			{...iconProps}
		>
			{iconMarkup}
		</svg>
	);
};

export default CleanIcon;
