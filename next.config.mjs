/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_URL: "https://galutinisdarbas.onrender.com",
    JWT_KEY: "questions_app_jwt",
  },
};

export default nextConfig;
