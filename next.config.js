/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TOKEN: process.env.TOKEN,
    VERIFY_TOKEN: process.env.VERIFY_TOKEN,
    API_BASE_URL: process.env.API_BASE_URL,
    RAZORPAY_KEY : process.env.RAZORPAY_KEY,
    RAZORPAY_SECRET : process.env.RAZORPAY_SECRET
  }
}

module.exports = nextConfig
