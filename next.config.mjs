/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'swarmauri.com',
            port: '',
            pathname: '/wp-content/uploads/2024/09/Swarmauri-logo-lockup-1024x379.png',
          },
        ],
      },
};

export default nextConfig;
