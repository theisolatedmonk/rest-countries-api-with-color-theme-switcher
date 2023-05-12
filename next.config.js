/** @type {import('next').NextConfig} */
const nextConfig = {}
    // upload.wikimedia.org
    // module.exports = nextConfig
module.exports = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'flagcdn.com',
            port: '',
            // pathname: '/account123/**',
        }, ],
    },
}