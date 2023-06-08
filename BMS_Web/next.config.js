/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['127.0.0.1']
	}
}

module.exports = nextConfig

module.exports = {
	images: {
		formats: ["image/avif", "image/webp", 'image/jpg', 'image/jpeg'],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '8000',
				pathname: '/media/**'
			},
		],
	},
}

const isDevelopment = process.env.NODE_ENV !== "production";
const rewritesConfig = isDevelopment
	? [
		{
			source: "/api/accounts/meta-tags/:id",
			destination: "http://192.168.1.8:8000/accounts/meta-tags/:id",
		},
		{
			source: "/portal/user_search",
			destination: "http://192.168.1.8:8000//portal/user_search",
		},
		{
			source: "/portal/parlour-review",
			destination: "http://192.168.1.8:8000//portal/parlour-review",
		},
		{
			source: "/portal/artist-review",
			destination: "http://192.168.1.8:8000//portal/artist-review",
		},
		{
			source : '/accounts/register',
			destination : 'http://192.168.1.8:8000/accounts/register'
		},
		{
			source : '/accounts/parlours',
			destination : 'http://192.168.1.8:8000/accounts/parlours'
		},
		{
			source: "/api/accounts/testimonials/:id",
			destination: "http://192.168.1.8:8000/accounts/testimonials/:id",
		},
		{
			source: "/api/accounts/:params",
			destination: "http://192.168.1.8:8000/accounts/:params",
		},
		{
			source: "/api/accounts/register/:id",
			destination: "http://192.168.1.8:8000/accounts/register/:id",
		},
		{
			source: "/api/accounts/parlour/:id",
			destination: "http://192.168.1.8:8000/accounts/parlour/:id",
		},
	]
	: [];

module.exports = {
	reactStrictMode: true,
	rewrites: async () => rewritesConfig,
};