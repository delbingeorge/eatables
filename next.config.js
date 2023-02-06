/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["pbs.twimg.com", "lh3.googleusercontent.com", "cdn-icons-png.flaticon.com"],
    },
    env: {
        NEXTAUTH_URL: "https://eatables.vercel.app",
        NEXTAUTH_SECRET: "b951d936b72a79179b2a9b72ddff9822",
    },
};

module.exports = nextConfig;
