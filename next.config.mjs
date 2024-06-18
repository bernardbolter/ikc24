/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ["backend.ingakatcoleman.com"],
        unoptimized: true
    },
};

export default nextConfig;
