/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bilgievdewp.innokar.com.tr',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
