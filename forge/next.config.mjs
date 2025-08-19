/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // 🚫 disables lightningcss so builds don't break on Vercel
  },
};

export default nextConfig;
