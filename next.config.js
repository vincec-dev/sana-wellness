/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		qualities: [75, 90],
		// Disable Next image optimization in dev to avoid stale cached images
		unoptimized: process.env.NODE_ENV === "development",
	},
};

module.exports = nextConfig;
