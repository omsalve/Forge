/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      optimizeCss: false, // 🔥 disables lightningcss so Vercel won’t cry
    },
  }
  
  module.exports = nextConfig
  