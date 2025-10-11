/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
            domains: ['lh3.googleusercontent.com'],

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            }
        ]
    }
};

export default nextConfig;
