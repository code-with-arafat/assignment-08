/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // এটি অনেক ক্ষেত্রে সব HTTPS ডোমেইন এলাউ করে
      },
      {
        protocol: 'http',
        hostname: '**', // এটি সব HTTP ডোমেইন এলাউ করে
      },
    ],
  },
};

export default nextConfig;